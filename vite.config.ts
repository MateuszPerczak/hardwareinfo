import { rmSync } from "node:fs";
import path from "node:path";

import eslintPlugin from "@nabla/vite-plugin-eslint";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import electron from "vite-electron-plugin";
import { loadViteEnv } from "vite-electron-plugin/plugin";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(() => {
  rmSync("dist-electron", { recursive: true, force: true });

  return {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src"),
      },
    },
    build: {
      target: "esnext",
    },
    plugins: [
      react({
        jsxImportSource: "@emotion/react",
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
      }),
      electron({
        include: ["electron"],
        plugins: [loadViteEnv()],
      }),
      eslintPlugin(),
      svgr({
        svgrOptions: {
          icon: true,
          svgProps: {
            fill: "currentColor",
          },
        },
      }),
    ],
    clearScreen: false,
  };
});
