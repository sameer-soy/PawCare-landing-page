const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/samir/Documents/Pet Care Website';
const htmlFile = path.join(rootDir, 'code.html');

let htmlContent = fs.readFileSync(htmlFile, 'utf-8');

// 1. Extract Tailwind Config
const configRegex = /tailwind\.config\s*=\s*(\{[\s\S]*?\})\s*<\/script>/;
const configMatch = htmlContent.match(configRegex);
if (configMatch) {
  const configObjString = configMatch[1];
  const tailwindConfig = `/** @type {import('tailwindcss').Config} */\nexport default {\n  content: [\n    "./index.html",\n    "./src/**/*.{js,ts,jsx,tsx}",\n  ],\n  darkMode: "class",\n  theme: ${configObjString.replace(/theme:\s*\{/, '').replace(/,\s*\}\s*\}$/, '\n  }\n')}\n};`;
  fs.writeFileSync(path.join(rootDir, 'tailwind.config.js'), tailwindConfig);
}

// 2. Extract CSS Styles
const styleRegex = /<style>([\s\S]*?)<\/style>/;
const styleMatch = htmlContent.match(styleRegex);
if (styleMatch) {
  const indexCss = path.join(rootDir, 'src', 'index.css');
  let cssContent = fs.readFileSync(indexCss, 'utf-8');
  cssContent = cssContent.replace(/@tailwind base;\n@tailwind components;\n@tailwind utilities;/, '');
  cssContent = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n${styleMatch[1]}`;
  fs.writeFileSync(indexCss, cssContent);
}

// 3. Extract Body Content and convert to JSX
const bodyRegex = /<body[^>]*>([\s\S]*?)<\/body>/;
const bodyMatch = htmlContent.match(bodyRegex);
if (bodyMatch) {
  let bodyContent = bodyMatch[1];
  // Convert class to className
  bodyContent = bodyContent.replace(/class=/g, 'className=');
  // Convert onclick to onClick
  bodyContent = bodyContent.replace(/onclick=/g, 'onClick=');
  // Fix img tags
  bodyContent = bodyContent.replace(/<img([^>]*?[^\/])>/g, '<img$1 />');
  // Fix input tags
  bodyContent = bodyContent.replace(/<input([^>]*?[^\/])>/g, '<input$1 />');
  // Fix br tags
  bodyContent = bodyContent.replace(/<br>/g, '<br />');

  // Convert html comments
  bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
  // Convert tabindex
  bodyContent = bodyContent.replace(/tabindex=/g, 'tabIndex=');
  // Convert for=
  bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');
  // Remove inline scripts from body
  bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  const appJsx = `import React from 'react';

export default function App() {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      ${bodyContent}
    </div>
  );
}
`;
  fs.writeFileSync(path.join(rootDir, 'src', 'App.jsx'), appJsx);
}

// 4. Update index.html with fonts
const indexHtmlFile = path.join(rootDir, 'index.html');
let indexHtml = fs.readFileSync(indexHtmlFile, 'utf-8');
const fonts = `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Nunito+Sans:wght@700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Nunito+Sans:wght@100..900&display=swap" rel="stylesheet"/>`;
if (!indexHtml.includes('fonts.googleapis.com')) {
  indexHtml = indexHtml.replace('</head>', `  ${fonts}\n  </head>`);
  fs.writeFileSync(indexHtmlFile, indexHtml);
}

console.log("Migration complete.");
