import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

// import vertexShader from "./vertex.glsl";
// import fragmentShader from "./fragment.glsl";

const world = {};

function init() {
  if (WebGL.isWebGLAvailable()) {
    const canvas = document.querySelector("#canvas");
    const canvasRect = canvas.getBoundingClientRect();

    world.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    world.renderer.setSize(canvasRect.width, canvasRect.height, false);
    world.renderer.setPixelRatio(window.devicePixelRatio);
    world.renderer.setClearColor(0x000000, 0);

    world.scene = new THREE.Scene();

    const cameraWidth = canvasRect.width;
    const cameraHeight = canvasRect.height;
    const near = 1500;
    const far = 4000;
    const aspect = cameraWidth / cameraHeight;
    const cameraZ = 2500;
    const radian = 2 * Math.atan(cameraHeight / 2 / cameraZ);
    const fov = (180 * radian) / Math.PI;
    world.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    world.camera.position.z = cameraZ;

    const els = document.querySelectorAll(`[data-webgl]`);
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();

      const geometry = new THREE.PlaneGeometry(rect.width, rect.height, 1, 1);
      const material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        transparent: true,
        opacity: 0.5,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.z = 0;

      const { x, y } = getWorldPosition(rect, canvasRect);
      mesh.position.x = x;
      mesh.position.y = y;

      world.scene.add(mesh);
    });

    animate();
    function animate() {
      requestAnimationFrame(animate);
      world.renderer.render(world.scene, world.camera);
    }
  } else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById("container").appendChild(warning);
  }
}

function getWorldPosition(rect, canvasRect) {
  const x = rect.left + rect.width / 2 - canvasRect.width / 2;
  const y = -rect.top - rect.height / 2 + canvasRect.height / 2;
  return { x, y };
}

export { init };
