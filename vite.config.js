import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";

// ESM-compatible __dirname
const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  // Pages directory is the Vite root so index.html serves at /
  // and whitepaper/index.html serves at /whitepaper/
  root: "pages",

  plugins: [tailwindcss()],

  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "pages/index.html"),
        whitepaper: resolve(__dirname, "pages/whitepaper/index.html"),
        terms: resolve(__dirname, "pages/terms-of-service/index.html"),
        help: resolve(__dirname, "pages/help/index.html"),
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});
