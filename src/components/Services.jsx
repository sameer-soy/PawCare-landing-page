const services = [
  {
    title: 'Dog Walking',
    description: 'Daily walks to keep your dog healthy, happy, and energized.',
    icon: '🐕',
  },
  {
    title: 'Pet Sitting',
    description: 'In-home care so your pets stay comfortable while you are away.',
    icon: '🏠',
  },
  {
    title: 'Grooming',
    description: 'Professional bathing, haircuts, and nail trims.',
    icon: '✂️',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">Everything your pet needs to thrive.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
