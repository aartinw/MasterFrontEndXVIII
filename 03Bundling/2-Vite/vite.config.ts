import { defineConfig } from "rolldown-vite";
import { checker } from "vite-plugin-checker";
import tailwindcss from "@tailwindcss/vite";
import { analyzer } from "vite-bundle-analyzer";

export default defineConfig({
  build: {
    modulePreload: {
      polyfill: false,
    },
  },
  plugins: [checker({ typescript: true }), tailwindcss(), analyzer()],
});
