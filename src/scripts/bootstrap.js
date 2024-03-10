import scrollInit from "./component/scroll.js";

import mouseInit from "./component/mouse.js";
import { viewport } from "./helper/viewport.js";
import worldInit, { world } from "./glsl/world.js";
import loader from "./component/loader.js";
import {init as stylesInit } from "../styles/styles.js"; //ここのimportは現時点は必要です。今後修正される可能性があります。

export default async function init() {
  stylesInit();
  const canvas = document.querySelector("#canvas");

  viewport.init(canvas);
  // scrollInit(gsap, ScrollTrigger, Scrollbar, ScrollbarPlugin);
  scrollInit();
  loader.init();

  await loader.loadAllAssets();
  worldInit(canvas, viewport);
  mouseInit();
  world.render();
  loader.letsBegin();

}
