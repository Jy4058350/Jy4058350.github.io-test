import {world} from "../glsl/world.js";

const viewport = { init }, $ = {};

let inits = false;
function init(canvas) {
  $.canvas = canvas;
  const rect = canvas.getBoundingClientRect();
  viewport.rect = rect;
  viewport.width = rect.width;
  viewport.height = rect.height;
  viewport.near = 1500;
  viewport.far = 4000;
  viewport.aspect = viewport.width / viewport.height;
  viewport.cameraZ = 2500;
  viewport.radian = 2 * Math.atan(viewport.height / 2 / viewport.cameraZ);
  viewport.fov = (180 * viewport.radian) / Math.PI;
  viewport.devicePixelRatio = window.devicePixelRatio;

  if (!inits) {
    inits = true;
    _bindEvents();
  }
  return viewport;
}

function _bindEvents() {
  let timer;
  window.addEventListener("resize", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      _onResize();
    }, 100);
  });
}

function _onResize() {
  updateport();
  world.adjustWorldPosition(viewport);
}

function updateport() {
  const { near, far, cameraZ } = viewport;
  viewport.init($.canvas, near, far, cameraZ);
}

export { viewport };
