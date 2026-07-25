const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf-8');

// 1. Add import statement at top
if (!code.includes("import banner from './assets/banner.jpg';")) {
    code = code.replace(
        "import React, { useState } from 'react';",
        "import React, { useState } from 'react';\nimport banner from './assets/banner.jpg';"
    );
}

// 2. Replace the img src
code = code.replace(
  /<img className="w-full h-full object-cover" src="https:\/\/lh3\.googleusercontent\.com[^"]+"/g,
  '<img className="w-full h-full object-cover" src={banner}'
);

fs.writeFileSync('src/App.jsx', code);
