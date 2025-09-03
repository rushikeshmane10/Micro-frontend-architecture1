import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_app",
      filename: "remoteEntry.js",
      remotes: {
        integri_component: "http://localhost:5001/assets/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: "^18.2.0",
          strictVersion: true, // Add this
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^18.2.0",
          strictVersion: true, // Add this
        },
        "react-redux": {
          singleton: true,
          eager: true,
          requiredVersion: "^8.0.0",
        },
        "@reduxjs/toolkit": {
          singleton: true,
          eager: true,
          requiredVersion: "^1.9.0",
        },
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
