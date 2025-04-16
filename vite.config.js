import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/new-portfolio/" : "/",
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
  server: {
    open: true,
  },
}));
