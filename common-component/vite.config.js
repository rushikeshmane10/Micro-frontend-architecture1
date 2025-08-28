import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: {
    port: 4173,
  },
  plugins: [
    react(),
    federation({
      name: "common_component",
      filename: "remoteEntry.js",
      exposes: {
        "./Navbar": "./src/components/Navbar.jsx",
      },
      remotes: {
        store: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
        "react-redux": { singleton: true, requiredVersion: "^8.1.3" },
        "@reduxjs/toolkit": { singleton: true, requiredVersion: "^1.9.7" },
      },
      dev: true,
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
