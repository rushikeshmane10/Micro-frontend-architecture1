import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: {
    port: 4174, // 👈 fix shell port
  },
  plugins: [
    react(),
    federation({
      name: "integri_component",
      filename: "remoteEntry.js",
      exposes: {
        "./HomeSection": "./src/components/HomeSection.jsx",
        "./HomePage": "./src/pages/HomeSection.jsx",
        "./AboutPage": "./src/pages/About.jsx",
      },
      shared: ["react", "react-dom"],
    })    
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
