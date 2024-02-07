import gsap from "gsap";
import Scrollbar from "smooth-scrollbar";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  PlaneGeometry,
  ShaderMaterial,
  Mesh,
  Vector2,
  Raycaster,
} from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

import vertexShader from "./vertex.glsl";
import fragmentShader from "./fragment.glsl";

const world = {};
const os = [];
const canvas = document.querySelector("#canvas");
const canvasRect = canvas.getBoundingClientRect();

const pointer = new Vector2();
const raycaster = new Raycaster();

function init() {
  if (WebGL.isWebGLAvailable()) {
    initScroller();
    bindResizeEvents();
    world.renderer = new WebGLRenderer({ canvas, antialias: true });
    world.renderer.setSize(canvasRect.width, canvasRect.height, false);
    world.renderer.setPixelRatio(window.devicePixelRatio);
    world.renderer.setClearColor(0x000000, 0);

    world.scene = new Scene();

    const cameraWidth = canvasRect.width;
    const cameraHeight = canvasRect.height;
    const near = 1500;
    const far = 4000;
    const aspect = cameraWidth / cameraHeight;
    const cameraZ = 2500;
    const radian = 2 * Math.atan(cameraHeight / 2 / cameraZ);
    const fov = (180 * radian) / Math.PI;
    world.camera = new PerspectiveCamera(fov, aspect, near, far);
    world.camera.position.z = cameraZ;

    const els = document.querySelectorAll(`[data-webgl]`);
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();

      const geometry = new PlaneGeometry(rect.width, rect.height, 1, 1);
      const material = new ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uMouse: { value: new Vector2(0.5, 0.5) },
          uHover: { value: 0.0 },
        },
      });
      const mesh = new Mesh(geometry, material);
      mesh.position.z = 0;

      const { x, y } = getWorldPosition(rect, canvasRect);
      mesh.position.x = x;
      mesh.position.y = y;

      const o = {
        geometry,
        material,
        mesh,
        rect,
        $: {
          el: el,
        },
      };

      world.scene.add(mesh);
      os.push(o);
    });

    animate();
    function animate() {
      requestAnimationFrame(animate);
      os.forEach((o) => scroll(o));
      raycast();
      world.renderer.render(world.scene, world.camera);
    }
  } else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById("container").appendChild(warning);
  }
}

function scroll(o) {
  const {
    mesh,
    $: { el: el },
  } = o;
  const rect = el.getBoundingClientRect();
  const { y } = getWorldPosition(rect, canvasRect);
  // mesh.position.x = x;
  mesh.position.y = y;
}

function resize(o, newCanvasRect) {
  const {
    $: { el: el },
    mesh,
    geometry,
    rect,
  } = o;
  const newRect = el.getBoundingClientRect();

  const { x, y } = getWorldPosition(newRect, newCanvasRect);
  mesh.position.x = x;
  mesh.position.y = y;

  geometry.scale(newRect.width / rect.width, newRect.height / rect.height, 1);

  o.rect = newRect;
}

function getWorldPosition(rect, canvasRect) {
  const x = rect.left + rect.width / 2 - canvasRect.width / 2;
  const y = -rect.top - rect.height / 2 + canvasRect.height / 2;
  return { x, y };
}

function initScroller() {
  gsap.registerPlugin(ScrollTrigger);

  const pageContainer = document.querySelector("#pageContainer");
  const scrollbar = Scrollbar.init(pageContainer, { delegateTo: document });
  ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
      return arguments.length
        ? (scrollbar.scrollTop = value)
        : scrollbar.scrollTop;
    },
  });

  scrollbar.addListener(ScrollTrigger.update);

  ScrollTrigger.defaults({ scroller: pageContainer });

  const el = document.querySelector(`[data-webgl]`);

  // const meshX = os[0].mesh.position.x;
  // const animation = {
  //   rotation: 0,
  //   x: meshX,
  // };

  // gsap.to(animation, {
  //   rotation: Math.PI * 2,
  //   x: meshX + 400,
  //   duration: 2,
  //   scrollTrigger: {
  //     trigger: el,
  //     start: "center 80%",
  //     end: "center 20%",
  //     scrub: true,
  //     pin: true,
  //     onUpdate: () => {
  //       os[0].mesh.rotation.z = animation.rotation;
  //       os[0].mesh.position.x = animation.x;
  //     },
  //   },
  // });
}

function bindResizeEvents() {
  let timer;
  window.addEventListener("resize", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const newCanvasRect = canvas.getBoundingClientRect();
      world.renderer.setSize(newCanvasRect.width, newCanvasRect.height, false);

      os.forEach((o) => resize(o, newCanvasRect));

      const cameraWidth = newCanvasRect.width;
      const cameraHeight = newCanvasRect.height;
      const aspect = cameraWidth / cameraHeight;
      const radian = 2 * Math.atan(cameraHeight / 2 / world.camera.position.z);
      const fov = (180 * radian) / Math.PI;

      world.camera.aspect = aspect;
      world.camera.fov = fov;
      world.camera.updateProjectionMatrix();
      world.renderer.render(world.scene, world.camera);
    }, 500);
  });
}

function onPointerMove(event) {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  // console.log(pointer.x, pointer.y);
}

window.addEventListener("pointermove", onPointerMove);

function raycast() {
  raycaster.setFromCamera(pointer, world.camera);

  const intersects = raycaster.intersectObjects(world.scene.children);
  const intersect = intersects[0];
  for (let i = 0; i < world.scene.children.length; i++) {
    const _mesh = world.scene.children[i];

    const uHover = _mesh.material.uniforms.uHover;
    if (intersect?.object === _mesh) {
      _mesh.material.uniforms.uMouse.value = intersect.uv;
      uHover.__endValue = 1;
    } else {
      uHover.__endValue = 0;
    }
    uHover.value = lerp(uHover.value, uHover.__endValue, 0.1);
  }
}

function lerp(a, b, n) {
  let current = (1 - n) * a + n * b;
  if (Math.abs(b - current) < 0.001) current = b;
  return current;
}

export { init };
