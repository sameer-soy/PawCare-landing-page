import React from 'react';

export default function Terms() {
  return (
    <div className="pt-32 pb-20 px-margin-desktop max-w-3xl mx-auto min-h-screen">
      <h1 className="font-display text-display text-primary mb-8">Terms of Service</h1>
      <div className="space-y-6 text-on-surface-variant font-body-md">
        <p>Welcome to PawCare. By using our services, you agree to these terms.</p>
        <h2 className="text-headline-md font-bold text-primary">1. Services Provided</h2>
        <p>PawCare offers professional pet grooming, walking, and boarding services. We strive to provide the best possible care for your furry family members.</p>
        <h2 className="text-headline-md font-bold text-primary">2. Booking and Cancellations</h2>
        <p>Appointments must be booked in advance. Cancellations made less than 24 hours before the scheduled time may be subject to a fee.</p>
        <h2 className="text-headline-md font-bold text-primary">3. Liability</h2>
        <p>While we take every precaution, PawCare is not liable for pre-existing medical conditions or unpredictable behavior of pets.</p>
      </div>
    </div>
  );
}
