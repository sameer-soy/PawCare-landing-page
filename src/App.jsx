import React, { useState, useEffect } from 'react';
import banner from './assets/banner.jpg';
import logo from './assets/logo.png';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

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

  return (
    <div className="scroll-smooth bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      
{/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm shadow-primary/10">
<div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto">
<div className="flex items-center gap-2 font-display text-headline-md text-primary tracking-tight">
  <img src={logo} alt="PawCare Logo" className="h-10" />
</div>
<div className="hidden md:flex gap-8 items-center">
  {['home', 'services', 'pricing', 'gallery', 'reviews', 'contact'].map((tab) => (
    <a
      key={tab}
      href={`#${tab}`}
      onClick={() => setActiveTab(tab)}
      className={`font-label-md text-label-md capitalize transition-colors ${
        activeTab === tab
          ? 'text-primary font-bold border-b-2 border-primary'
          : 'text-on-surface-variant hover:text-primary'
      }`}
    >
      {tab}
    </a>
  ))}
</div>
<button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-full font-label-md text-label-md hover:brightness-110 active:scale-95 transition-all ambient-shadow" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
        Book Now
      </button>
</div>
</nav>
{/* Hero Section */}
<header className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10"></div>
<img className="w-full h-full object-cover" src={banner}/>
</div>
<div className="relative z-20 px-margin-desktop max-w-container-max mx-auto w-full">
<div className="max-w-2xl">
<h1 className="font-display text-display text-primary mb-6 animate-fade-in">
          Loving Care for Your Furry Family
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
          Professional grooming, walking, and boarding services tailored to your pet's unique needs. We treat every visitor like a member of our own family.
        </p>
<div className="flex flex-wrap gap-4">
<button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-md text-label-md flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all ambient-shadow">
            Book Appointment
            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
</button>
<button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-primary/5 active:scale-95 transition-all">
            Our Services
          </button>
</div>
</div>
</div>
</header>
{/* Services Section */}
<section className="py-24 px-margin-desktop bg-surface-container-low" id="services">
<div className="max-w-container-max mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Tailored Services</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">Providing a comprehensive range of care solutions to keep your pets happy, healthy, and energized.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/* Dog Walking */}
<div className="group bg-white p-8 rounded-3xl ambient-shadow card-hover transition-all">
<div className="w-14 h-14 bg-primary-container/20 rounded-2xl flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined text-[32px]">pets</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-3">Dog Walking</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Daily brisk walks in local parks to keep your furry friend active and socialized.</p>
</div>
{/* Pet Grooming */}
<div className="group bg-white p-8 rounded-3xl ambient-shadow card-hover transition-all">
<div className="w-14 h-14 bg-secondary-container/20 rounded-2xl flex items-center justify-center text-secondary mb-6">
<span className="material-symbols-outlined text-[32px]">content_cut</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-3">Pet Grooming</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Full-service spa treatments, baths, and trims to keep them looking and smelling great.</p>
</div>
{/* Boarding */}
<div className="group bg-white p-8 rounded-3xl ambient-shadow card-hover transition-all">
<div className="w-14 h-14 bg-tertiary-container/20 rounded-2xl flex items-center justify-center text-tertiary mb-6">
<span className="material-symbols-outlined text-[32px]">home_pin</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-3">Boarding</h3>
<p className="font-body-md text-body-md text-on-surface-variant">A cozy home-away-from-home with 24/7 supervision and plenty of playtime.</p>
</div>
{/* Vet Transport */}
<div className="group bg-white p-8 rounded-3xl ambient-shadow card-hover transition-all">
<div className="w-14 h-14 bg-primary-container/20 rounded-2xl flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined text-[32px]">local_taxi</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-3">Vet Transport</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Safe and reliable door-to-door transportation for all medical appointments.</p>
</div>
{/* Pet Sitting */}
<div className="group bg-white p-8 rounded-3xl ambient-shadow card-hover transition-all">
<div className="w-14 h-14 bg-secondary-container/20 rounded-2xl flex items-center justify-center text-secondary mb-6">
<span className="material-symbols-outlined text-[32px]">favorite</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-3">Pet Sitting</h3>
<p className="font-body-md text-body-md text-on-surface-variant">In-home visits providing companionship, feeding, and care in familiar surroundings.</p>
</div>
{/* Training */}
<div className="group bg-white p-8 rounded-3xl ambient-shadow card-hover transition-all">
<div className="w-14 h-14 bg-tertiary-container/20 rounded-2xl flex items-center justify-center text-tertiary mb-6">
<span className="material-symbols-outlined text-[32px]">school</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-3">Training</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Positive reinforcement training sessions to master basic manners and behavior.</p>
</div>
</div>
</div>
</section>
{/* Pricing Section */}
<section className="py-24 px-margin-desktop" id="pricing">
<div className="max-w-container-max mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">Transparent Pricing</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Choose the plan that best fits your pet's lifestyle.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-end">
{/* Basic */}
<div className="bg-white p-8 rounded-3xl border border-outline-variant ambient-shadow flex flex-col h-full">
<span className="font-label-md text-label-md text-on-surface-variant mb-4">BASIC</span>
<div className="flex items-baseline gap-1 mb-6">
<span className="font-display text-display text-on-surface">$25</span>
<span className="font-body-md text-body-md text-on-surface-variant">/visit</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">check_circle</span>
<span className="text-body-md">30 Min Walk</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">check_circle</span>
<span className="text-body-md">Fresh Water Refresh</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">check_circle</span>
<span className="text-body-md">Photo Update</span>
</li>
</ul>
<button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="w-full border-2 border-primary text-primary py-3 rounded-xl font-label-md text-label-md hover:bg-primary/5 transition-colors">Select Plan</button>
</div>
{/* Standard (Highlighted) */}
<div className="bg-primary text-on-primary p-10 rounded-3xl ambient-shadow flex flex-col h-[calc(100%+32px)] transform scale-105 relative z-10">
<div className="absolute top-0 right-10 -translate-y-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full text-label-sm font-label-sm">MOST POPULAR</div>
<span className="font-label-md text-label-md opacity-80 mb-4">STANDARD</span>
<div className="flex items-baseline gap-1 mb-6">
<span className="font-display text-display text-white">$45</span>
<span className="font-body-md text-body-md opacity-80">/day</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined">check_circle</span>
<span className="text-body-md">60 Min Active Walk</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined">check_circle</span>
<span className="text-body-md">Feeding & Meds</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined">check_circle</span>
<span className="text-body-md">Basic Grooming Trim</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined">check_circle</span>
<span className="text-body-md">Video Daily Report</span>
</li>
</ul>
<button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="w-full bg-white text-primary py-4 rounded-xl font-label-md text-label-md hover:bg-surface transition-colors shadow-lg shadow-black/10">Get Started</button>
</div>
{/* Premium */}
<div className="bg-white p-8 rounded-3xl border border-outline-variant ambient-shadow flex flex-col h-full">
<span className="font-label-md text-label-md text-on-surface-variant mb-4">PREMIUM</span>
<div className="flex items-baseline gap-1 mb-6">
<span className="font-display text-display text-on-surface">$75</span>
<span className="font-body-md text-body-md text-on-surface-variant">/day</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">check_circle</span>
<span className="text-body-md">Full Day Boarding</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">check_circle</span>
<span className="text-body-md">Spa Day (Full Groom)</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">check_circle</span>
<span className="text-body-md">Training Session</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">check_circle</span>
<span className="text-body-md">24/7 Live Stream</span>
</li>
</ul>
<button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="w-full border-2 border-primary text-primary py-3 rounded-xl font-label-md text-label-md hover:bg-primary/5 transition-colors">Select Plan</button>
</div>
</div>
</div>
</section>
{/* Gallery Section */}
<section className="py-24 px-margin-desktop bg-surface-container-lowest" id="gallery">
<div className="max-w-container-max mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">Happy Tails Gallery</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Real moments with our beloved furry clients.</p>
</div>
<div className="masonry-grid gap-gutter">
<div className="mb-6 break-inside-avoid">
<img className="w-full rounded-3xl ambient-shadow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2bjB2qW8OICAJvQpaVF52xdEHNiUkwVnezAb0cKSIxC4z2juS_Nr-qAN3n0f7V9FDIhXD3DgcpEvpsxFDqB0RWkggQNplpR2Jszx_nVisFgSOld5-Md2u2zEXdiyM0VnNjFgMdhYUQbVyeIeUPpq6LMJiXDDzayf27PlNXt8ZU_hxD_sPFDoWTW6EivXImpWWC0MVNk2RdEao8eP9JZrqw3OsQuX-J2iqqh4W4US_gmIcLn_0tC2T"/>
</div>
<div className="mb-6 break-inside-avoid">
<img className="w-full rounded-3xl ambient-shadow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtzM4gmiYF36Dz_m0gBMwauiNyyXrG25rUuVqv5LyTGsCk2PEUxUUBtjPf7kXpvhBDoIN1HJ_Twr_hMBwrwC_bTiYBW68uWKkL74zaPVR1F-U2d-vvxTYwquRsrst-g6tvUDL1DWZ1W50adWw7P2vCyWSsdcjBpnpobncvcWP2-uK5kQPVRl-Ckhs6wxPaasgIWslftbBnqmXjV0PKOpSkztjU8hjaOEfzWX4ciMrj0s8eUQgGnNHe"/>
</div>
<div className="mb-6 break-inside-avoid">
<div className="w-full h-64 bg-cover bg-center rounded-3xl ambient-shadow" data-alt="A candid photo of a happy French Bulldog catching a colorful frisbee in a sun-drenched suburban backyard. The lighting is warm and golden, characteristic of a late summer afternoon. The surrounding garden is lush with greenery and small pink flowers, creating a vibrant yet peaceful scene that aligns with the Kindred Paws soft-modern brand identity." style={{ backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuDHwpOJo4TnWEWdWGyYI8t8bvZ2NWhIssCcwjqnjCRS7wFgmBngL61fzIseK3t-X_kmDAjip2yob9UazTRRahU3bwK2YTQ-uzdvF7xrta_-5WVnYhDnYtIsg_hScOe6GLp7xx1j2yGF0j0SYtYoMPc38z6RiX8mvjrVObAG0aEcHdBaFGy4zuQeS8t97wVbV_2TxdjBAmRHpw9ALQBhPsPLPO-lr2koXEotnX8ep2F86OxXD8lolazP)` }}></div>
</div>
<div className="mb-6 break-inside-avoid">
<img className="w-full rounded-3xl ambient-shadow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4XnmLnpDBqKeT3_bYHN54iJsOb_1nGvb3zywrFcMsk6bNoAU4pCsjuoK2h8ve5DFFnQ8pBDIjmfNhXAxrcoiY3iOXsJvay46-31FufI8Fgnrj3O8UV2-aW-cBIMXSpfFq4WE5WUgxkofD0h0y8J8Yb_sc4fbFzE9D-DJzueXpdXt0JmUbKkqrpYoiHSvHGi_rXrZbJlNWcFTqYs11AbDsp_NhRIBfAMJsC3O5suWbgDjgIcrLEBuq"/>
</div>
<div className="mb-6 break-inside-avoid">
<div className="w-full h-80 bg-cover bg-center rounded-3xl ambient-shadow" data-alt="A close-up portrait of a fluffy white Persian cat relaxing on a plush cream-colored blanket in a bright, modern living room. The cat looks serene and well-cared for, with soft natural light highlighting the texture of its fur. The background is softly blurred to emphasize the pet, maintaining the professional yet approachable aesthetic of the pet care service." style={{ backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuDLEuB4fYPUkzMiSxXGJRrjAkvojY4dLTueShtMlc7bgAAVqeIoI81vXpsPz1Rt25GIDj43kHorAjeZ4DUnMqkEHBxevNvlTGYsBjb9Jjkp5cTnsEdsgvtaK0AZ28R3pehNKZEwXQb31grkOwj6x4i0p1xOC-Gp5OSgfKqfSYF46kjhRo7rt7geF4n0hGOx_UC5iwtngvN3Xog82mFCvoS2TDlBMr_54iD1pgJf2i-rcJf50mOqeDMd)` }}></div>
</div>
<div className="mb-6 break-inside-avoid">
<div className="w-full h-96 bg-cover bg-center rounded-3xl ambient-shadow" data-alt="Two Golden Retriever puppies playfully wrestling in a field of tall grass during the golden hour. The sunlight creates a beautiful backlight effect on their soft coats, evoking a sense of joy and high energy. The color palette is dominated by warm yellows, soft greens, and cream tones, reinforcing the safe warmth brand anchor." style={{ backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuBst3W0cBFqt0H1o-spkq__r7e-27rLYs7SYtTVN28PdivaRxUUnqWJB_JGWUI2QKFS6rwG1nGFpz_99ZJPhcFC4DAsHrwRrJuQ0862D0iFFY3HbPpJMoie8zatRGyj_dzL5FedZT6uWb-bXav_SgijoLWhA3joNfQQ_uHFoNyMqshXbDFJwRKn2FhxNeAIzTpQqC55-dKcy5UGc2rxMy8e8y3kw6y8FLga67uWbFDegW8OqY2QO75q)` }}></div>
</div>
</div>
</div>
</section>
{/* Reviews Section */}
<section className="py-24 px-margin-desktop" id="reviews">
<div className="max-w-container-max mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">Love from Owners</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Hear what our community has to say.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="bg-white p-8 rounded-3xl ambient-shadow">
<div className="flex text-tertiary mb-4">
<span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" 1` }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" 1` }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" 1` }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" 1` }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" 1` }}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface mb-6 italic">"Best care ever for my Buddy! He comes home so happy and tired from his walks. I trust Kindred Paws implicitly with his care."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary-fixed-dim"></div>
<div>
<p className="font-label-md text-label-md text-on-surface">Sarah Johnson</p>
<p className="text-label-sm text-on-surface-variant">Owner of Buddy (Golden Retriever)</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-3xl ambient-shadow">
<div className="flex text-tertiary mb-4">
<span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" 1` }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" 1` }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" 1` }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" 1` }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" 1` }}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface mb-6 italic">"The grooming service is top-notch. Luna has never looked better, and the groomers were so gentle with her anxious personality."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-secondary-fixed-dim"></div>
<div>
<p className="font-label-md text-label-md text-on-surface">Mark Thompson</p>
<p className="text-label-sm text-on-surface-variant">Owner of Luna (Ragdoll Cat)</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-3xl ambient-shadow">
<div className="flex text-tertiary mb-4">
<span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" 1` }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" 1` }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" 1` }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" 1` }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" 1` }}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface mb-6 italic">"We use the boarding service whenever we travel. The photo updates give us such peace of mind. Truly a premium service."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-tertiary-fixed-dim"></div>
<div>
<p className="font-label-md text-label-md text-on-surface">Emma Davis</p>
<p className="text-label-sm text-on-surface-variant">Owner of Cooper (Beagle)</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Appointment Form Section */}
<section className="py-24 px-margin-desktop bg-surface-container" id="contact">
<div className="max-w-4xl mx-auto">
<div className="bg-white rounded-[2rem] p-8 md:p-16 ambient-shadow">
<div className="text-center mb-12">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">Let's schedule some tail-wagging care!</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Fill out the form below and we'll reach out to confirm your booking.</p>
</div>
<form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => { e.preventDefault(); alert('Booking Requested! We will contact you soon.'); }}>
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant px-1">Owner Name</label>
<input className="w-full rounded-2xl border-outline-variant focus:border-primary focus:ring-primary font-body-md p-4" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant px-1">Pet Name</label>
<input className="w-full rounded-2xl border-outline-variant focus:border-primary focus:ring-primary font-body-md p-4" placeholder="Max" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant px-1">Pet Type</label>
<select className="w-full rounded-2xl border-outline-variant focus:border-primary focus:ring-primary font-body-md p-4">
<option>Dog</option>
<option>Cat</option>
<option>Bird</option>
<option>Other</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant px-1">Service</label>
<select className="w-full rounded-2xl border-outline-variant focus:border-primary focus:ring-primary font-body-md p-4">
<option>Dog Walking</option>
<option>Pet Grooming</option>
<option>Boarding</option>
<option>Vet Transport</option>
<option>Pet Sitting</option>
<option>Training</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant px-1">Preferred Date</label>
<input className="w-full rounded-2xl border-outline-variant focus:border-primary focus:ring-primary font-body-md p-4" type="date"/>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant px-1">Preferred Time</label>
<input className="w-full rounded-2xl border-outline-variant focus:border-primary focus:ring-primary font-body-md p-4" type="time"/>
</div>
<div className="md:col-span-2 mt-4">
<button className="w-full bg-secondary text-on-secondary py-5 rounded-2xl font-label-md text-headline-md hover:brightness-110 transition-all ambient-shadow" type="submit">
              Request Booking
            </button>
</div>
</form>
</div>
</div>
</section>
{/* Footer */}
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
<li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
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
