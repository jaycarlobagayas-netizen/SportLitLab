import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// For GitHub Pages project sites the app is served from /<repo-name>/.
// Set BASE_PATH when building for Pages, e.g.  BASE_PATH=/prisma-pe-workbench/ npm run build
// (the included GitHub Actions workflow sets this automatically).
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [react(), tailwindcss()],
});
