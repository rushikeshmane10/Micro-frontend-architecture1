import sharedConfig from "tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [sharedConfig], // inherit shared Flowbite setup
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
};
