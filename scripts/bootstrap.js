import gsap from "gsap";
import Scrollbar from "smooth-scrollbar";
import ScrollTrigger from "gsap/ScrollTrigger";
import scrollInit from "./component/scroll.js";
import WebGL from "three/addons/capabilities/WebGL.js";

import mouseInit from "./component/mouse.js";
import { viewport } from "./helper/viewport.js";
import worldInit, { world } from "./glsl/world.js";
import loader from "./component/loader.js";
import { percentage } from "./helper/utils/math.js";

export default async function init() {
  if (WebGL.isWebGLAvailable()) {
    const canvas = document.querySelector("#canvas");

    viewport.init(canvas);
    scrollInit(gsap, ScrollTrigger, Scrollbar);
    loader.init();

    await loader.loadAllAssets();
    worldInit(canvas, viewport);
    mouseInit();
    world.render();
    loader.letsBegin();
  } else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById("container").appendChild(warning);
  }
}
