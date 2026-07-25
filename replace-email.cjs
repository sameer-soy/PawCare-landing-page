const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf-8');

code = code.replace(/hello@kindredpaws\.com/g, 'sameersoy117@gmail.com');

fs.writeFileSync('src/App.jsx', code);
