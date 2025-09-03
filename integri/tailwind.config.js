import sharedConfig from "tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [sharedConfig], // ✅ use your shared config
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    // you can add host-specific plugins here
  ],
};
