/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          red: "#FF0000",
          dark: "#03031A",
          green: "#FFC0CB",
          primary: "#03031A",
        },
      },
      backgroundImage: {
        "gray-900-950": "linear-gradient(to bottom, #111827, #0a0a0a)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
