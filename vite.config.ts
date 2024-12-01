import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const entry = path.resolve(__dirname, "src/index.ts");

export default defineConfig({
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
  build: {
    lib: {
      entry,
      name: "hak-module",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      input: entry,
      external: ["react", "react-dom", "@emotion/react"],
      output: {
        globals: {
          "react": "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts()],
  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
  },
  define: {},
});