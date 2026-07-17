export default function Hero() {
  return (
    <section className="bg-emerald-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Premium Care for Your <span className="text-emerald-600">Furry Friends</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Professional pet sitting, dog walking, and grooming services tailored to your pet's unique needs. We treat them like family!
          </p>
          <div className="flex space-x-4">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl">
              Our Services
            </button>
            <button className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 bg-emerald-200 rounded-full flex items-center justify-center overflow-hidden border-8 border-white shadow-2xl">
            {/* Placeholder for an image */}
            <span className="text-emerald-800 font-medium text-lg">Happy Pet Image Here</span>
          </div>
        </div>
      </div>
    </section>
  );
}
