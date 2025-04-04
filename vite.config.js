import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/new-portfolio/" : "/",
  plugins: [react()],
  server: {
    open: true,
  },
}));
