import { Link } from "react-router-dom";

export default function Navbar({ cartCount = 0 }) {
  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black">
            FASHION<span className="text-red-500">.</span>
          </h1>

          <div className="hidden md:flex gap-8 font-medium">
            <Link to="/" className="hover:text-red-500">Home</Link>
            <Link to="/products" className="hover:text-red-500">Shop</Link>
            <a href="#" className="hover:text-red-500">Collection</a>
            <Link to="/about" className="hover:text-red-500">About</Link>
            <Link to="/contact" className="hover:text-red-500">Contact</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/cart"
              className="relative grid h-10 w-10 place-items-center rounded-lg border border-gray-200 text-black hover:bg-gray-50"
              aria-label="Open basket"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M6 8h12l-1 12H7L6 8Z" />
                <path d="M9 8a3 3 0 0 1 6 0" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              to="/login"
              className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
