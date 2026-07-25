const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf-8');

// 1. Import useState
if (!code.includes("import React, { useState } from 'react';")) {
    code = code.replace(
        "import React from 'react';",
        "import React, { useState } from 'react';"
    );
}

// 2. Add state inside App component
if (!code.includes("const [activeTab, setActiveTab] = useState('home');")) {
    code = code.replace(
        "export default function App() {\n  return (",
        "export default function App() {\n  const [activeTab, setActiveTab] = useState('home');\n  return ("
    );
}

// 3. Replace the navbar links div
const oldNavLinks = `<div className="hidden md:flex gap-8 items-center">
<a className="text-primary font-bold border-b-2 border-primary font-label-md text-label-md" href="#home">Home</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#services">Services</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#pricing">Pricing</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#gallery">Gallery</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#reviews">Reviews</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#contact">Contact</a>
</div>`;

const newNavLinks = `<div className="hidden md:flex gap-8 items-center">
  {['home', 'services', 'pricing', 'gallery', 'reviews', 'contact'].map((tab) => (
    <a
      key={tab}
      href={\`#\${tab}\`}
      onClick={() => setActiveTab(tab)}
      className={\`font-label-md text-label-md capitalize transition-colors \${
        activeTab === tab
          ? 'text-primary font-bold border-b-2 border-primary'
          : 'text-on-surface-variant hover:text-primary'
      }\`}
    >
      {tab}
    </a>
  ))}
</div>`;

code = code.replace(oldNavLinks, newNavLinks);

fs.writeFileSync('src/App.jsx', code);
