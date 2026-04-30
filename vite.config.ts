import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: "src/index.ts",
      name: "SlidePreview",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
      cssFileName: "style"
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"]
    }
  }
});
