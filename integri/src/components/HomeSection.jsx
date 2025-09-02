import React from "react";
function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Hero Section */}
      <header className="flex-1 flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
            Welcome to <span className="text-indigo-600">MyApp</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Build modern, scalable, and beautiful applications with ease. 
            Experience premium design and functionality.
          </p>

          {/* Counter Section */}
          <div className="mb-8">
            <span className="text-2xl font-bold text-indigo-700 bg-yellow-300 px-4 py-2 rounded-lg shadow">
              Counter: {counter}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={increment}
              className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-md hover:bg-indigo-700 transition"
            >
              Increment
            </button>
            <button className="px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                🚀 Fast Performance
              </h3>
              <p className="text-gray-600">
                Optimized for speed and efficiency, ensuring smooth experiences across devices.
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                🎨 Modern Design
              </h3>
              <p className="text-gray-600">
                Sleek, minimal, and premium UI components designed with TailwindCSS.
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                🔒 Secure
              </h3>
              <p className="text-gray-600">
                Built with best practices to keep your data and applications safe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
