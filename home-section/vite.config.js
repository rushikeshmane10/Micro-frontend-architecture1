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
      name: "home_component",
      filename: "remoteEntry.js",
      exposes: {
        "./Home": "./src/components/HomeSection.jsx", // expose Home component
      },
      remotes: {
        store: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.0.0" },
        "react-redux": { singleton: true, requiredVersion: "^8.0.0" },
        redux: { singleton: true, requiredVersion: "^4.0.0" },
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
