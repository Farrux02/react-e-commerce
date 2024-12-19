import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const $imports = AutoImport({
    dts: "./src/types/imports.d.ts",
    imports: ["react", "react-router", "react-router-dom", "react-i18next"],
  });
  return {
    plugins: [react(), $imports],
    css: { postcss: { plugins: [tailwind(), autoprefixer()] } },
    optimizeDeps: {
      include: ["react-latex-next"],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 3000,
    },
    build: {
      minify: "esbuild",
      target: "esnext",
      sourcemap: false,
      cssCodeSplit: true,
      envPrefix: "APP_",
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
  };
});
