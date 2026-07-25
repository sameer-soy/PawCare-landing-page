import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

import logo from './assets/logo.png';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, tab) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveTab(tab);
  };


    useEffect(() => {
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
  }, [location.pathname]);

  return (
    <div className="scroll-smooth bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      
{/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm shadow-primary/10">
<div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto">
<Link to="/" className="flex items-center gap-2 font-display text-headline-md text-primary tracking-tight">
  <img src={logo} alt="PawCare Logo" className="h-10" />
</Link>
<div className="hidden md:flex gap-8 items-center">
  {['home', 'services', 'pricing', 'gallery', 'reviews', 'contact'].map((tab) => (
    <a
      key={tab}
      href={`#${tab}`}
      onClick={(e) => handleNavClick(e, tab)}
      className={`font-label-md text-label-md capitalize transition-colors cursor-pointer ${
        activeTab === tab
          ? 'text-primary font-bold border-b-2 border-primary'
          : 'text-on-surface-variant hover:text-primary'
      }`}
    >
      {tab}
    </a>
  ))}
</div>
<button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-full font-label-md text-label-md hover:brightness-110 active:scale-95 transition-all ambient-shadow" onClick={(e) => handleNavClick(e, 'contact')}>
        Book Now
      </button>
</div>
</nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
<footer className="bg-surface-container-lowest py-12 px-margin-desktop">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto">
<div className="space-y-6">
<div className="flex items-center gap-2 mb-4 font-display text-headline-md text-primary">
  <img src={logo} alt="PawCare Logo" className="h-10" />
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Nurturing every paw with love. Your local experts in professional pet care and wellness.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary-container hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-[20px]">public</span>
</a>
<a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary-container hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-[20px]">mail</span>
</a>
<a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary-container hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-[20px]">call</span>
</a>
</div>
</div>
<div>
<h4 className="font-label-md text-label-md text-primary mb-6">Quick Links</h4>
<ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
<li><a className="hover:text-primary transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-primary transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-primary transition-colors" href="#gallery">Gallery</a></li>
<li><Link className="hover:text-primary transition-colors" to="/terms">Terms of Service</Link></li>
<li><Link className="hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link></li>
</ul>
</div>
<div>
<h4 className="font-label-md text-label-md text-primary mb-6">Working Hours</h4>
<ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
<li className="flex justify-between"><span>Mon - Fri</span> <span>8am - 8pm</span></li>
<li className="flex justify-between"><span>Saturday</span> <span>9am - 6pm</span></li>
<li className="flex justify-between"><span>Sunday</span> <span>10am - 4pm</span></li>
<li className="pt-2 text-secondary font-bold">24/7 Emergency Line</li>
</ul>
</div>
<div>
<h4 className="font-label-md text-label-md text-primary mb-6">Contact Us</h4>
<ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
<li className="flex gap-3">
<span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
<span>123 Paw Print Lane, Barkshire, BK 12345</span>
</li>
<li className="flex gap-3">
<span className="material-symbols-outlined text-primary text-[20px]">call</span>
<span>(555) 123-PAWS</span>
</li>
<li className="flex gap-3">
<span className="material-symbols-outlined text-primary text-[20px]">mail</span>
<span>sameersoy117@gmail.com</span>
</li>
</ul>
</div>
</div>
<div className="max-w-container-max mx-auto mt-16 pt-8 border-t border-outline-variant text-center">
<p className="font-label-sm text-label-sm text-on-surface-variant">© 2024 PawCare Services. Nurturing every paw with love.</p>
</div>
</footer>


    </div>
  );
}
