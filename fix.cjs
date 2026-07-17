const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf-8');
code = code.replace(/style="font-variation-settings: 'FILL' 1;"/g, 'style={{ fontVariationSettings: `"FILL" 1` }}');
code = code.replace(/style="background-image: url\('([^']+)'\)"/g, 'style={{ backgroundImage: `url($1)` }}');
fs.writeFileSync('src/App.jsx', code);
