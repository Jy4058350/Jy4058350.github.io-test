import string from "vite-plugin-string";

export default {
  base: "",
  plugins: [
    string({
      include: "**/*.glsl",
    }),
  ],
};