const fs = require('fs');

let code = fs.readFileSync('src/App.jsx', 'utf-8');

// The file currently has:
// export default function App() {
// ...
// <div className="scroll-smooth...">
// {/* TopNavBar */}
// <nav>...</nav>
// {/* Hero Section */} ...
// <footer ...>...</footer>
// </div>

const navEndIndex = code.indexOf('</nav>') + 6;
const footerStartIndex = code.indexOf('<footer');

const navCode = code.substring(0, navEndIndex);
const mainContent = code.substring(navEndIndex, footerStartIndex);
const footerCode = code.substring(footerStartIndex);

// Update borders in mainContent
let updatedMainContent = mainContent.replace(
  /className="w-full rounded-2xl border-outline-variant/g,
  'className="w-full rounded-2xl border-2 border-outline/50'
);

// Create Home.jsx
const homeCode = `import React from 'react';
import banner from '../assets/banner.jpg';

export default function Home() {
  return (
    <>
${updatedMainContent}
    </>
  );
}
`;
fs.writeFileSync('src/pages/Home.jsx', homeCode);

// Modify App.jsx
// Need to add imports for React Router and the pages
let appCode = navCode + `\n      <main>\n        <Routes>\n          <Route path="/" element={<Home />} />\n          <Route path="/terms" element={<Terms />} />\n          <Route path="/privacy" element={<Privacy />} />\n        </Routes>\n      </main>\n` + footerCode;

// Remove the `import banner from './assets/banner.jpg';` from App.jsx as it's now in Home.jsx
appCode = appCode.replace("import banner from './assets/banner.jpg';", "");

// Add Route imports
if (!appCode.includes("import { Routes, Route }")) {
  appCode = appCode.replace(
    "import React, { useState, useEffect } from 'react';",
    "import React, { useState, useEffect } from 'react';\nimport { Routes, Route, Link } from 'react-router-dom';\nimport Home from './pages/Home';\nimport Terms from './pages/Terms';\nimport Privacy from './pages/Privacy';"
  );
}

// Update navbar links in App.jsx to use react-router-dom Link if needed, but HashRouter works with standard anchor tags.
// However, the anchor tags in the nav bar have href="#home". Hash router uses "#/". 
// To make the active section highlight work with HashRouter and scroll sections, it's tricky because HashRouter uses the hash for routing.
// Actually, if we use HashRouter, then href="#home" goes to route "/home", which breaks scroll navigation.
// Let's use BrowserRouter instead of HashRouter to keep scroll navigation working on the homepage.
// Wait, GitHub Pages requires HashRouter for client-side routing unless we have a 404.html redirect.
// It's a landing page. So href="#home" will conflict with HashRouter!
// If we use BrowserRouter, we can set basename in vite.config.js, and it works perfectly if they don't refresh on a subpage.
// Or we can use react-router Hash links.
// Let's stick with BrowserRouter to avoid hash conflicts!
// (I will update main.jsx to BrowserRouter later).

// Update Footer to include Links to Terms and Privacy
let updatedFooterCode = appCode.replace(
  /<a href="#">Terms of Service<\/a>\s*<a href="#">Privacy Policy<\/a>/g,
  '<Link to="/terms">Terms of Service</Link>\n<Link to="/privacy">Privacy Policy</Link>'
);

// The footer in the original code probably has generic links like <a ... href="#">
updatedFooterCode = updatedFooterCode.replace(
  /<div className="flex gap-4">\s*<a className="text-on-surface-variant hover:text-primary transition-colors text-label-sm" href="#">Terms of Service<\/a>\s*<a className="text-on-surface-variant hover:text-primary transition-colors text-label-sm" href="#">Privacy Policy<\/a>\s*<\/div>/g,
  '<div className="flex gap-4"><Link className="text-on-surface-variant hover:text-primary transition-colors text-label-sm" to="/terms">Terms of Service</Link><Link className="text-on-surface-variant hover:text-primary transition-colors text-label-sm" to="/privacy">Privacy Policy</Link></div>'
);
// In case the exact formatting is different, let's just do a simpler replace.
updatedFooterCode = updatedFooterCode.replace(/href="#">Terms of Service<\/a>/g, 'to="/terms">Terms of Service</Link>');
updatedFooterCode = updatedFooterCode.replace(/href="#">Privacy Policy<\/a>/g, 'to="/privacy">Privacy Policy</Link>');
updatedFooterCode = updatedFooterCode.replace(/<a ([^>]+)to="/g, '<Link $1to="');

fs.writeFileSync('src/App.jsx', updatedFooterCode);
