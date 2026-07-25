const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf-8');

// 1. Add import statement at top
if (!code.includes("import logo from './assets/logo.png';")) {
    code = code.replace(
        "import React from 'react';",
        "import React from 'react';\nimport logo from './assets/logo.png';"
    );
}

// 2. Replace absolute paths with the imported variable
code = code.replace(/src="\/logo\.png"/g, 'src={logo}');

fs.writeFileSync('src/App.jsx', code);
