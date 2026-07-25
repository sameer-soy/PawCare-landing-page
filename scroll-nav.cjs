const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf-8');

// Ensure useEffect is imported
if (!code.includes('useEffect')) {
    code = code.replace(
        "import React, { useState } from 'react';",
        "import React, { useState, useEffect } from 'react';"
    );
}

// Add the IntersectionObserver inside App()
const observerCode = `
  useEffect(() => {
    const sections = ['home', 'services', 'pricing', 'gallery', 'reviews', 'contact']
      .map(id => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when at least 50% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
`;

if (!code.includes('IntersectionObserver')) {
    code = code.replace(
        "const [activeTab, setActiveTab] = useState('home');",
        "const [activeTab, setActiveTab] = useState('home');\n" + observerCode
    );
}

fs.writeFileSync('src/App.jsx', code);
