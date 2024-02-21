import { LinearFilter, TextureLoader, VideoTexture } from "three";
import gsap from "gsap";
import { percentage } from "../helper/utils/math.js";

const textureCache = new Map();
const texLoader = new TextureLoader();

window.textureCache = textureCache;

const loader = {
  init,
  loadAllAssets,
  loadImg,
  getTexByElement,
  addProgressAction,
  letsBegin,
};

const $ = {};

function init() {
  $.globalContainer = document.getElementById("global-container");
  $.loader = document.getElementById("loader");
  $.loaderPercent = document.getElementById("Loader-percent");
  addProgressAction((progress, total) => {
    $.loaderPercent.innerHTML = percentage(progress, total) + "%";
    console.log(progress, total);
  });
}

async function loadAllAssets() {
  const els = document.querySelectorAll("[data-webgl]");
  for (const el of els) {
    const data = el.dataset;
    for (let key in data) {
      if (!key.startsWith("tex")) continue;

      const url = data[key];
      if (!textureCache.has(url)) {
        textureCache.set(url, null);
      }
    }
  }

  const texPrms = [];

  textureCache.forEach((_, url) => {
    let prms = null;
    const loadFn = /\.(mp4|webm|mov)$/.test(url) ? loadVideo : loadImg;
        prms = loadFn(url)
      .then((tex) => {
        textureCache.set(url, tex);
      })
      .catch(() => {
        console.error("Failed to load Media: ", url);
      });

    texPrms.push(prms);
  });

  await Promise.all(texPrms);
}

async function getTexByElement(el) {
  const texes = new Map();
  const data = el.dataset;

  let medialoaded = null;
  let first = true;

  for (let key in data) {
    if (!key.startsWith("tex")) continue;

    const url = data[key];
    const tex = textureCache.get(url);

    key = key.replace("-", "");

    texes.set(key, tex);

    if (first && el instanceof HTMLImageElement) {
      medialoaded = new Promise((resolve) => {
        el.onload = resolve;
      });
      el.src = url;
      first = false;
    }

    if (first && el instanceof HTMLVideoElement) {
      medialoaded = new Promise((resolve) => {
        el.oncanplay = resolve;
      });
      el.src = url;
      el.load();
      first = false;
    }
  }
  await medialoaded;
  return texes;
}

let total = 0;
let progress = 0;
let _progressAction = null;

async function loadImg(url) {
  incrementTotal();
  const tex = await texLoader.loadAsync(url);
  incrementProgress();
  tex.magFilter = LinearFilter;
  tex.minFilter = LinearFilter;
  tex.needsUpdate = false;
  return tex;
}

async function loadVideo(url) {
  const video = document.createElement("video");
  let extention = url.split(".").pop();
  if (extention === "mov") {
    extention = "quicktime";
  }
  if (!video.canPlayType(`video/${extention}`)) {
    return null;
  }
  incrementTotal();
  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.oncanplay = () => {
      const tex = new VideoTexture(video);
      incrementProgress();
      tex.magFilter = LinearFilter;
      tex.minFilter = LinearFilter;
      video.play();
      video.oncanplay = null;
      resolve(tex);
    };
    video.src = url;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsinline = true;
    video.defaultMuted = true;
  });
}

function incrementTotal() {
  total++;
}

function incrementProgress() {
  progress++;
  if (_progressAction) {
    _progressAction(progress, total);
  }
}

function addProgressAction(_callback) {
  _progressAction = _callback;
}

function _loadingAnimationStart() {
  const tl = gsap.timeline();
  tl.to($.loader.firstElementChild, {
    opacity: 0,
    y: 10,
    duration: 0.3,
    delay: 0.5,
  })
    .set($.globalContainer, {
      visibility: "visible",
    })
    .set($.loader, {
      display: "none",
    });

  return tl;
}

function letsBegin() {
  const tl = _loadingAnimationStart();
  // TODO: メッシュのアニメーション
}

export default loader;
