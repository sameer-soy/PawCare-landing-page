export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-emerald-600">Paws & Claws</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-600 hover:text-emerald-600 font-medium">Services</a>
          <a href="#testimonials" className="text-gray-600 hover:text-emerald-600 font-medium">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-emerald-600 font-medium">Contact</a>
        </nav>
        <button className="bg-emerald-600 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors">
          Book Now
        </button>
      </div>
    </header>
  );
}
