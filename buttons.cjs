const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf-8');

// 1. Fix TopNavBar Book Now button
code = code.replace(
  /onClick="document\.getElementById\('contact'\)\.scrollIntoView\(\)"/g,
  `onClick={() => document.getElementById('contact').scrollIntoView()}`
);

// 2. Fix Hero Book Appointment button
code = code.replace(
  /<button className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-md text-label-md flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all ambient-shadow">/g,
  `<button onClick={() => document.getElementById('contact').scrollIntoView()} className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-md text-label-md flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all ambient-shadow">`
);

// 3. Fix Hero Our Services button
code = code.replace(
  /<button className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-primary\/5 active:scale-95 transition-all">/g,
  `<button onClick={() => document.getElementById('services').scrollIntoView()} className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-primary/5 active:scale-95 transition-all">`
);

// 4. Fix Pricing Select Plan (Basic & Premium)
code = code.replace(
  /<button className="w-full border-2 border-primary text-primary py-3 rounded-xl font-label-md text-label-md hover:bg-primary\/5 transition-colors">Select Plan<\/button>/g,
  `<button onClick={() => document.getElementById('contact').scrollIntoView()} className="w-full border-2 border-primary text-primary py-3 rounded-xl font-label-md text-label-md hover:bg-primary/5 transition-colors">Select Plan</button>`
);

// 5. Fix Pricing Get Started (Standard)
code = code.replace(
  /<button className="w-full bg-white text-primary py-4 rounded-xl font-label-md text-label-md hover:bg-surface transition-colors shadow-lg shadow-black\/10">Get Started<\/button>/g,
  `<button onClick={() => document.getElementById('contact').scrollIntoView()} className="w-full bg-white text-primary py-4 rounded-xl font-label-md text-label-md hover:bg-surface transition-colors shadow-lg shadow-black/10">Get Started</button>`
);

// 6. Fix Contact Form Request Booking button
code = code.replace(
  /<form className="grid grid-cols-1 md:grid-cols-2 gap-6">/g,
  `<form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => { e.preventDefault(); alert('Booking Requested! We will contact you soon.'); }}>`
);

fs.writeFileSync('src/App.jsx', code);
