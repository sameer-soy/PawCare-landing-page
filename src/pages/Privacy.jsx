import React from 'react';

export default function Privacy() {
  return (
    <div className="pt-32 pb-20 px-margin-desktop max-w-3xl mx-auto min-h-screen">
      <h1 className="font-display text-display text-primary mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-on-surface-variant font-body-md">
        <p>At PawCare, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>
        <h2 className="text-headline-md font-bold text-primary">1. Information Collection</h2>
        <p>We collect information such as your name, email, phone number, and pet details when you book an appointment or fill out a form on our website.</p>
        <h2 className="text-headline-md font-bold text-primary">2. Use of Information</h2>
        <p>The information we collect is solely used to provide our pet care services, contact you regarding bookings, and improve our customer service.</p>
        <h2 className="text-headline-md font-bold text-primary">3. Data Protection</h2>
        <p>We implement security measures to maintain the safety of your personal information. We do not sell or trade your data to outside parties.</p>
      </div>
    </div>
  );
}
