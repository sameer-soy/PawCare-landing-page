const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf-8');

// 1. Add smooth scrolling to all scrollIntoView calls
code = code.replace(/\.scrollIntoView\(\)/g, ".scrollIntoView({ behavior: 'smooth' })");

// 2. Add smooth scrolling to html class, just in case
if (!code.includes('className="scroll-smooth bg-background')) {
    code = code.replace(
        'className="bg-background text-on-surface',
        'className="scroll-smooth bg-background text-on-surface'
    );
}

// 3. Add hover animations to service cards
// Find the card-hover divs and add 'group'
code = code.replace(
  /className="bg-white p-8 rounded-3xl ambient-shadow card-hover transition-all"/g,
  'className="group bg-white p-8 rounded-3xl ambient-shadow card-hover transition-all"'
);

// Add transform on the icon wrapper
// The icon wrapper looks like: className="w-14 h-14 bg-primary-container/20 rounded-2xl flex items-center justify-center text-primary mb-6"
// Need to add group-hover:scale-110 group-hover:rotate-12 transition-all duration-300
code = code.replace(
  /className="w-14 h-14 bg-([a-z-]+)\/20 rounded-2xl flex items-center justify-center text-\1 mb-6"/g,
  'className="w-14 h-14 bg-$1/20 rounded-2xl flex items-center justify-center text-$1 mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"'
);

fs.writeFileSync('src/App.jsx', code);
