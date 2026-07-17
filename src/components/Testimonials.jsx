const reviews = [
  {
    name: 'Sarah M.',
    pet: 'Bella, Golden Retriever',
    text: '"Paws & Claws has been a lifesaver. Bella loves her daily walks and always comes back exhausted and happy!"',
  },
  {
    name: 'David K.',
    pet: 'Milo, Tabby Cat',
    text: '"The best pet sitting service in town. I never worry when I travel because I know Milo is in great hands."',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12 sm:text-4xl">What Pet Parents Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reviews.map((review, index) => (
            <div key={index} className="bg-emerald-700 rounded-2xl p-8 shadow-lg">
              <p className="text-lg italic mb-6">"{review.text}"</p>
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-emerald-200 text-sm">{review.pet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
