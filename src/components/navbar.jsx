export default function Navbar(){
    return(
        <>
              <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black">
            FASHION<span className="text-red-500">.</span>
          </h1>

          <div className="hidden md:flex gap-8 font-medium">
            <a href="/" className="hover:text-red-500">Home</a>
            <a href="/produst" className="hover:text-red-500">Shop</a>
            <a href="#" className="hover:text-red-500">Collection</a>
            <a href="/about" className="hover:text-red-500">About</a>
            <a href="/contact" className="hover:text-red-500">Contact</a>
          </div>

          <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800">
            
            <a href="/login">Login</a>
          </button>
        </div>
      </nav>
        </>
    )
}