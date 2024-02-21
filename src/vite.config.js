import string from "vite-plugin-string";
import svgLoader from "vite-svg-loader";
import { defineConfig } from "vite";

export default defineConfig({
  base: "",
  plugins: [
    string({
      include: ["**/*.glsl", "**/*.svg"],
    }),
  ],
  assetsInclude: [],
  build: {
    assetsDir: "img",
  },
});
