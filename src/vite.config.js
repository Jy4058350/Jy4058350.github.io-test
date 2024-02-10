import string from "vite-plugin-string";

export default {
  base: "/Jy4058350.github.io-test/",
  plugins: [
    string({
      include: "**/*.glsl",
    }),
  ],
};