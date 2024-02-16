const path = require("path");

module.exports = {
  mode: "development", // or 'production' depending on your needs
  entry: "./scripts/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["svg-inline-loader"],
      },
      {
        test: /\.glsl$/,
        use: "glsl-shader-loader",
      },
    ],
  },
};