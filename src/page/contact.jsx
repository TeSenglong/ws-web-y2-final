export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white">
      {/* Navbar */}


      {/* Contact Content */}
      <div className="px-8 md:px-16 py-20 grid md:grid-cols-2 gap-16 items-start bg-gray-50">
        {/* Left: Text + Form */}
        <div>
          <p className="text-red-500 font-semibold tracking-wide mb-4">
            GET IN TOUCH
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight mb-3">
            Contact <span className="text-red-500">Us</span>
          </h1>
          <p className="text-gray-600 text-lg mb-10 max-w-md">
            Have a question about an order, our collections, or anything else?
            We'd love to hear from you.
          </p>

          <form className="space-y-5 max-w-md">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black resize-none"
            ></textarea>

            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-900 transition"
              >
                Send Message
              </button>
              <button
                type="button"
                className="border border-black text-black px-8 py-3 rounded-md font-medium hover:bg-black hover:text-white transition"
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        {/* Right: Info Cards */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm p-8 flex items-start gap-5">
            <div className="bg-red-100 text-red-500 rounded-full p-3 text-xl">📍</div>
            <div>
              <h3 className="font-bold text-black text-lg mb-1">Our Location</h3>
              <p className="text-gray-600">
                123 Fashion Street, Phnom Penh, Cambodia
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 flex items-start gap-5">
            <div className="bg-red-100 text-red-500 rounded-full p-3 text-xl">📞</div>
            <div>
              <h3 className="font-bold text-black text-lg mb-1">Call Us</h3>
              <p className="text-gray-600">+855 12 345 678</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 flex items-start gap-5">
            <div className="bg-red-100 text-red-500 rounded-full p-3 text-xl">✉️</div>
            <div>
              <h3 className="font-bold text-black text-lg mb-1">Email Us</h3>
              <p className="text-gray-600">support@fashion.com</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 flex items-start gap-5">
            <div className="bg-red-100 text-red-500 rounded-full p-3 text-xl">🕒</div>
            <div>
              <h3 className="font-bold text-black text-lg mb-1">Working Hours</h3>
              <p className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}