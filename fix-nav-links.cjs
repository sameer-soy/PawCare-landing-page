const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf-8');

// 1. Wrap logo in a Link to home
code = code.replace(
  '<div className="flex items-center gap-2 font-display text-headline-md text-primary tracking-tight">\n  <img src={logo} alt="PawCare Logo" className="h-10" />\n</div>',
  '<Link to="/" className="flex items-center gap-2 font-display text-headline-md text-primary tracking-tight">\n  <img src={logo} alt="PawCare Logo" className="h-10" />\n</Link>'
);

// 2. Change the nav links to programmatic navigation
// First, import useLocation and useNavigate from react-router-dom
if (!code.includes('useLocation')) {
  code = code.replace(
    "import { Routes, Route, Link } from 'react-router-dom';",
    "import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';"
  );
}

// Add the hook calls inside App()
if (!code.includes('const location = useLocation();')) {
  code = code.replace(
    "const [activeTab, setActiveTab] = useState('home');",
    "const [activeTab, setActiveTab] = useState('home');\n  const location = useLocation();\n  const navigate = useNavigate();\n\n  const handleNavClick = (e, tab) => {\n    e.preventDefault();\n    if (location.pathname !== '/') {\n      navigate('/');\n      setTimeout(() => {\n        document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' });\n      }, 100);\n    } else {\n      document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' });\n    }\n    setActiveTab(tab);\n  };\n"
  );
}

// Replace the <a> tags with programmatic click
// Currently:
// <a
//   key={tab}
//   href={`#${tab}`}
//   onClick={() => setActiveTab(tab)}
//   className={`...`}
// >
//   {tab}
// </a>

const oldAnchor = `<a
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
    </a>`;

const newAnchor = `<a
      key={tab}
      href={\`#\${tab}\`}
      onClick={(e) => handleNavClick(e, tab)}
      className={\`font-label-md text-label-md capitalize transition-colors cursor-pointer \${
        activeTab === tab
          ? 'text-primary font-bold border-b-2 border-primary'
          : 'text-on-surface-variant hover:text-primary'
      }\`}
    >
      {tab}
    </a>`;

code = code.replace(oldAnchor, newAnchor);

// Also fix the "Book Now" button in the Navbar
const oldBookNow = `onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}`;
const newBookNow = `onClick={(e) => handleNavClick(e, 'contact')}`;
code = code.replace(oldBookNow, newBookNow);

fs.writeFileSync('src/App.jsx', code);
