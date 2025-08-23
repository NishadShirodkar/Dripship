export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[80vh]"
        style={{ backgroundImage: "url('/Dripship_logo.png')" }} // <-- replace with your hero image
      >
        {/* Gradient overlay for better text/navbar readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Elevate Your Style
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover timeless fits & seasonal drops made just for you.
          </p>
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Featured Collections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        <div className="bg-gray-100 h-60 flex items-center justify-center rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <span className="text-2xl font-bold">Men</span>
        </div>
        <div className="bg-gray-100 h-60 flex items-center justify-center rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <span className="text-2xl font-bold">Women</span>
        </div>
        <div className="bg-gray-100 h-60 flex items-center justify-center rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <span className="text-2xl font-bold">New Arrivals</span>
        </div>
        <div className="bg-gray-100 h-60 flex items-center justify-center rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <span className="text-2xl font-bold">Sale</span>
        </div>
      </div>

      {/* Brand Story / Why Us */}
      <div className="bg-gray-50 py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Why Shop With Us?</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          We bring you curated collections with premium fabrics and timeless
          designs — because style is forever. From casual wear to occasion fits,
          our mission is to elevate your everyday look.
        </p>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-black text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
        <p className="mb-6">
          Get exclusive offers & new drops straight to your inbox.
        </p>
        <div className="flex justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg text-black flex-1"
          />
          <button className="px-6 py-2 bg-white text-black font-semibold rounded-r-lg hover:bg-gray-200 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© {new Date().getFullYear()} Clothing Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
