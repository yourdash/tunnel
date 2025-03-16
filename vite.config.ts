/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import { defineConfig } from "vite";
import dtsPlugin from "vite-plugin-dts";
import dynamicImport from "vite-plugin-dynamic-import";
import { resolve } from "path";

// ViteJS docs: https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // @ts-ignore
    dynamicImport(),
    dtsPlugin(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    sourcemap: false,
    minify: true,
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-router", "react-router-dom"],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
});
