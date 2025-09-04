import sharedConfig from "tailwind-config";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('tailwindcss').Config} */
export default {
  presets: [sharedConfig],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
    // 👇 Use absolute path to ensure it works
    path.resolve(__dirname, "../../packages/design-system/src/**/*.{js,jsx,ts,tsx}"),
    
    // 👇 Also include the node_modules installation
    "./node_modules/@your-org/design-system/src/**/*.{js,jsx,ts,tsx}",
    
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