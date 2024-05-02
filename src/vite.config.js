import string from "vite-plugin-string";
// TypeScriptを使用していて、defineConfig関数はViteの設定オブジェクトを作成するためのヘルパー関数で、型チェックや自動補完を強化するために使用されます。
import { defineConfig } from "vite";
import fs from "fs";
import path from "path";

export default {
  base: "",
  plugins: [
    // {
    //   name: "copy-php-files",
    //   apply: "build",
    //   generateBundle() {
    //     this.emitFile({
    //       type: "asset",
    //       fileName: "subhtml/staff_add_check.php",
    //       source: fs.readFileSync(path.resolve(__dirname, "./subhtml/staff_add_check.php")),
    //     });
    //     // this.emitFile({
    //     //   type: "asset",
    //     //   fileName: "subhtml/staff_add_robo.php",
    //     //   source: fs.readFileSync(path.resolve(__dirname, "./subhtml/staff_add_robo.php")),
    //     // });
    //   },
    // },
    {
      name: "html-replace",
      apply: "build",
      transformIndexHtml: {
        transform(html, ctx) {
          if (ctx.path.endsWith(".html")) {
            const replacedHtml = html.replace(/\.\/public\/img\//g, "./img/");

            return replacedHtml;
          }
        },
      },
    },

    string({
      include: ["**/*.glsl", "**/*.svg"],
    }),
  ],
  assetsInclude: [],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        flickity: "./subhtml/demo-wrapAround.html",
        section2: "./subhtml/section2.html",
        productPage: "./subhtml/productPage.html",
        staffAdd: "./subhtml/staff_add.html",
        staffAddRobo: "./subhtml/staff_add_robo.html",
      },
    },
  },
};
