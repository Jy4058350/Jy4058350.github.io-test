import string from "vite-plugin-string";
import svgLoader from "vite-svg-loader";
import { defineConfig } from "vite";

export default {
  base: "",
  plugins: [
    string({
      include: ["**/*.glsl", "**/*.svg"],
    }),
  ],
  assetsInclude: [],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        flickity: "./flickity.html",
      },
    },
  },
};
