import { WebGLRenderer, Scene, PlaneGeometry, ShaderMaterial, Mesh, Vector2, PerspectiveCamera, Raycaster, Vector4 } from "three";
import { viewport } from "../helper/viewport.js";
import mouseInit, { pointer } from "../component/mouse.js";
import { lerp } from "../helper/utils/math.js";
import loader from "../component/loader.js";

import vertexShader from "../glsl/vertex.glsl";
import fragmentShader from "../glsl/fragment.glsl";

const world = {
  os: [],
  raycaster: new Raycaster(),
  worldInit,
  adjustWorldPosition,
  render,
};

export default function worldInit(canvas, viewport) {
  world.renderer = new WebGLRenderer({ canvas, antialias: true });
  world.renderer.setSize(viewport.width, viewport.height, false);
  world.renderer.setPixelRatio(viewport.devicePixelRatio);
  world.renderer.setClearColor(0x000000, 0);

  world.scene = new Scene();
  world.camera = _setupPerspectiveCamera(viewport);

  _initObjects(viewport);
  return world;
}

async function _initObjects(viewport) {
  const els = document.querySelectorAll(`[data-webgl]`);
  const prms = [...els].map(async (el) => {
    const rect = el.getBoundingClientRect();
    const texes = await loader.getTexByElement(el);
    const geometry = new PlaneGeometry(rect.width, rect.height, 1, 1);
    const material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uMouse: { value: new Vector2(0.5, 0.5) },
        uHover: { value: 0.0 },
      },
    });

    function setupResolution(uniforms) {
      if (!texes.get("tex1")) return uniforms;

      const media = texes.get("tex1").source.data;

      const mediaRect = {};
      if (media instanceof HTMLImageElement) {
        mediaRect.width = media.naturalWidth;
        mediaRect.height = media.naturalHeight;
      } else if (media instanceof HTMLVideoElement) {
        mediaRect.width = media.videoWidth;
        mediaRect.height = media.videoHeight;
      }
      const resolution = getResolutionUniform(rect, mediaRect);
      uniforms.uResolution = { value: resolution };

      return uniforms;
    }

    function getResolutionUniform(toRect, mediaRect) {
      const { width: toW, height: toH } = toRect;
      const resolution = new Vector4(toW, toH, 1, 1);

      if (!mediaRect) return resolution;

      const { width: mediaW, height: mediaH } = mediaRect;

      const mediaAspect = mediaH / mediaW;
      const toAspect = toH / toW;

      let xAspect, yAspect;
      if (toAspect > mediaAspect) {
        xAspect = (1 / toAspect) * mediaAspect;
        yAspect = 1;
      } else {
        xAspect = 1;
        yAspect = toAspect / mediaAspect;
      }

      resolution.z = xAspect;
      resolution.w = yAspect;
      return resolution;
    }

    material.uniforms = setupResolution(material.uniforms);

    texes.forEach((tex, key) => {
      material.uniforms[key] = { value: tex };
    });

    const mesh = new Mesh(geometry, material);
    mesh.position.z = 0;

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
    world.os.push(o);
    return o;
  });
  await Promise.all(prms);
  adjustWorldPosition(viewport);
}

function adjustWorldPosition(viewport) {
  world.renderer.setSize(viewport.width, viewport.height, false);
  world.os.forEach((o) => resize(o, viewport));
  updateCamera(viewport);
}

function _setupPerspectiveCamera(viewport) {
  const { fov, aspect, near, far, cameraZ } = viewport;
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = cameraZ;
  return camera;
}

function scroll(o) {
  const {
    mesh,
    $: { el: el },
  } = o;
  const rect = el.getBoundingClientRect();
  const { y } = getWorldPosition(rect, viewport.rect);
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

function updateCamera(viewport) {
  const { aspect, radian, fov } = viewport;
  world.camera.aspect = aspect;
  world.camera.radian = radian;
  world.camera.fov = fov;
  world.camera.updateProjectionMatrix();
  world.renderer.render(world.scene, world.camera);
}

function getWorldPosition(rect, canvasRect) {
  const x = rect.left + rect.width / 2 - canvasRect.width / 2;
  const y = -rect.top - rect.height / 2 + canvasRect.height / 2;
  return { x, y };
}

function raycast() {
  world.raycaster.setFromCamera(pointer, world.camera);
  const intersects = world.raycaster.intersectObjects(world.scene.children);
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

function render() {
  requestAnimationFrame(render);
  world.os.forEach((o) => scroll(o));
  raycast();
  world.renderer.render(world.scene, world.camera);
}

export { world };
