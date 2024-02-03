console.log(`Running Node.js version: ${process.version}`);
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

export default {
  base: "",
  assetsInclude: [
    "**/*.js",
    "**/*.png",
    "**/*.jpg",
    "**/*.svg",
    "**/*.webp",
    "**/*.gif",
    "**/*.ico",
    "**/*.json",
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  plugins: [
    {
      name: "remove-leading-dot",
      apply: "build",
      writeBundle() {
        const distDir = "./dist";
        const htmlFile = join(distDir, "index.html");
        let content = readFileSync(htmlFile, "utf-8");
        content = content.replace(/="\.\/assets/g, '="assets/');
        // content = content.replace(/="\/assets/g, '="assets');
        writeFileSync(htmlFile, content);
      },
    },
  ],
};
