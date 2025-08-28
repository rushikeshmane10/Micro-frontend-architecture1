import React from "react";
import { useStore } from "store/store";

function Navbar() {
  const { counter, increment } = useStore();

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold tracking-wide">🌐 MyApp</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <a href="/" className="hover:text-yellow-300 transition-colors duration-300">
              Home
            </a>
            <a href="/about" className="hover:text-yellow-300 transition-colors duration-300">
              About
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors duration-300">
              Services
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Store Value Display */}
          <div className="flex items-center space-x-4">
            <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-lg shadow">
              Counter: {counter}
            </span>
            <button
              onClick={increment}
              className="px-3 py-1 rounded-lg bg-white text-blue-700 font-semibold hover:bg-gray-200 transition duration-300"
            >
              +1
            </button>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition duration-300">
              Sign Up
            </button>
            <button className="px-4 py-2 rounded-lg border border-white font-semibold hover:bg-white hover:text-blue-700 transition duration-300">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-yellow-300 focus:outline-none">
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
