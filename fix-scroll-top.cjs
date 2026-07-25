const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf-8');

// Add scroll to top on path change, and clear active tab
const observerHook = `  useEffect(() => {
    const sections = ['home', 'services', 'pricing', 'gallery', 'reviews', 'contact']
      .map(id => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && location.pathname === '/') {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when at least 50% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  // Scroll to top when path changes, and clear active tab if not on home
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveTab('');
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);`;

// Replace the old observer hook
const oldObserverRegex = /useEffect\(\(\) => \{\s*const sections = \['home'[\s\S]*?return \(\) => observer\.disconnect\(\);\s*\}, \[\]\);/;
code = code.replace(oldObserverRegex, observerHook);

fs.writeFileSync('src/App.jsx', code);
