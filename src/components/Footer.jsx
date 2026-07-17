export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="text-2xl font-bold text-white mb-4 block">Paws & Claws</span>
          <p className="text-sm">Providing premium care for your furry family members since 2015.</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Contact</h3>
          <p>Email: hello@pawsandclaws.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-emerald-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Facebook</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-sm">
        &copy; {new Date().getFullYear()} Paws & Claws. All rights reserved.
      </div>
    </footer>
  );
}
