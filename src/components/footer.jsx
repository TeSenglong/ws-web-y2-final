export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold text-white">
            Fashion<span className="text-red-500">Store</span>
          </h2>

          <p className="mt-5 text-gray-400 leading-7">
            Discover the latest fashion trends with premium clothing,
            accessories, and footwear. Style starts here.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-red-500 transition">
                Home
              </a>
            </li>

            <li>
              <a href="/about" className="hover:text-red-500 transition">
                About
              </a>
            </li>

            <li>
              <a href="/shop" className="hover:text-red-500 transition">
                Shop
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-red-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Categories
          </h3>

          <ul className="space-y-3">
            <li>Men</li>
            <li>Women</li>
            <li>Shoes</li>
            <li>Accessories</li>
            <li>New Arrivals</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Contact Us
          </h3>

          <div className="space-y-3">
            <p>📍 Phnom Penh, Cambodia</p>
            <p>📞 +855 12 345 678</p>
            <p>✉️ support@fashionstore.com</p>

            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition"
              >
                F
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition"
              >
                I
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition"
              >
                X
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition"
              >
                T
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row justify-between items-center gap-6">

          <div>
            <h3 className="text-2xl font-bold text-white">
              Subscribe to our Newsletter
            </h3>

            <p className="text-gray-400 mt-2">
              Get the latest fashion updates and exclusive offers.
            </p>
          </div>

          <div className="flex w-full lg:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white px-5 py-3 rounded-lg outline-none w-full lg:w-80"
            />

            <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold transition">
              Subscribe
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} FashionStore. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-500">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-red-500">
              Terms of Service
            </a>

            <a href="#" className="hover:text-red-500">
              Cookie Policy
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}