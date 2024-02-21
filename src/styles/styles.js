import { config, isDesktopView } from "../scripts/helper";
import cartPhoneSvg from "../svg/cart_phone.js";
import cartDesktopSvg from "../svg/cart_desktop.js";
// import scrollInit from "../scripts/component/scroll.js";

const BREAKPOINT_WIDTH = config.page.breakpoint;
const DEBOUNCE_TIME = config.time.debounce;
const BUTTON_SELECTOR = config.buttonselector;
const LOGOE_SELECTOR = config.logoeSelector;
const BUTTON_PARENT = config.buttonParent;
const SVG_CART = config.svgCart;
const headerColor = config.color.header;
const PAGE = config.target.pageContainer;
const HEADER = config.target.header;
const ANNOUNCEMENT = config.target.announcement;
const HEADER_HEIGHT = config.rootProperty.headerHeight;
const ANNOUNCEMENT_HEIGHT = config.rootProperty.announcementHeight;

// const { disablePlugin, enablePlugin } = scrollInit();

// Check if the current view is desktop or not using the helper function
isDesktopView(BREAKPOINT_WIDTH);

export default (function () {
  document.addEventListener("DOMContentLoaded", function () {
    // The DOM is fully loaded

    // adjustContainer();
    viewportSettings();
    const iconConfig = isDesktopView(BREAKPOINT_WIDTH) ? config.tabletAndUp : config.phone;
    createIcon(iconConfig);

    const svgPath = isDesktopView(BREAKPOINT_WIDTH) ? cartDesktopSvg : cartPhoneSvg;
    createCart(svgPath);

    // <title>タグのテキストを取得する
    function getTitle() {
      const title = document.title;
      const announcement = document.querySelector(".AnnouncementBar__Content");
      if (announcement) {
        announcement.innerHTML = title;
      }
      return title;
    }
    getTitle();
  });
})();

// fecth関数は開発サーバー（npm run dev）で実行するときはローカルファイルを読み込むことができますが、ビルド後の静的なHTMLファイル（npm run build）では同じ動作をしない。
// これは、ビルド後のファイルはサーバーから提供されるため、ローカルファイルを読み込むことができないためです。
// Change argument from path to data
async function getSVG(data) {
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(data, "image/svg+xml");
  const svgElement = svgDoc.querySelector("svg");

  if (!svgElement) {
    throw new Error(`No SVG element found in the provided data: ${data}`);
  }
  // Set dummy values if height or width are not set
  if (!svgElement.getAttribute("height")) {
    svgElement.setAttribute("height", "20");
  }
  if (!svgElement.getAttribute("width")) {
    svgElement.setAttribute("width", "20");
  }

  const pathElements = svgElement.querySelectorAll("path");
  pathElements.forEach((pathElement) => {
    pathElement.setAttribute("fill", "white");
    pathElement.setAttribute("stroke", "white");
    pathElement.setAttribute("stroke-width", "0.05");
  });
  return svgElement;
}

// Change argument from svgPath to svgData
async function createCart(svgData) {
  try {
    const svgParent = document.querySelector(`.${SVG_CART}`);
    // Add error handling if no element is found
    if (!svgParent) {
      throw new Error(`No element found with class: ${SVG_CART}`);
    }

    clearElementChildren(svgParent);

    const svgElement = await getSVG(svgData);
    if (!svgElement) {
      throw new Error(`No SVG element created for path: ${svgData}`);
    }
    svgParent.appendChild(svgElement);
    if (window.innerWidth >= BREAKPOINT_WIDTH) {
      svgElement.classList.add("hidden-phone");
    } else {
      svgElement.classList.add("hidden-tablet-and-up");
    }

    const btnParent = document.querySelector(`.${BUTTON_PARENT}`);
    const btnParentHeight = btnParent.offsetHeight;
    adjustElementToHeight(svgElement, btnParentHeight);

    adjustElements();
  } catch (error) {
    // Add point of failure to error message
    console.error("Error in createCart:", error);
  }
}

// Add event listener to window resize
let resizeTimeout;
window.addEventListener("resize", handleResize);
window.addEventListener("orientationchange", handleResize);

function handleResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(async () => {
    const typeDevice = isDesktopView(BREAKPOINT_WIDTH) ? config.tabletAndUp : config.phone;
    createIcon(typeDevice);
    const svgPath = isDesktopView(BREAKPOINT_WIDTH) ? cartDesktopSvg : cartPhoneSvg;
    await createCart(svgPath);

    adjustElements();
  }, DEBOUNCE_TIME);
}

function clearElementChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function createSvg(viewBox, width, height) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", viewBox);
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  return svg;
}
function createRectangles(svg, height, rectWidth, rectHeight) {
  for (let i = 0; i < 3; i++) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", rectWidth);
    rect.setAttribute("height", rectHeight);
    rect.setAttribute("y", i * parseInt(height));
    rect.setAttribute("fill", headerColor);
    svg.appendChild(rect);
  }
}

// Code duplication here so separate function to create svg with rectangles
function createSvgWithRectangles({ viewBox, width, height, rectWidth, rectHeight }) {
  const svg = createSvg(viewBox, width, height);
  createRectangles(svg, height, rectWidth, rectHeight);
  return svg;
}

function createIcon(config) {
  const btn = document.querySelector(BUTTON_SELECTOR);
  clearElementChildren(btn);

  const phoneSvg = createSvgWithRectangles(config);
  const tabletAndUpSvg = createSvgWithRectangles(config);

  btn.appendChild(phoneSvg);
  btn.appendChild(tabletAndUpSvg);
  tabletAndUpSvg.style.display = "none";
}
function adjustParentSize(element, newWidth, newHeight) {
  if (!element) return;
  const parent = element.parentNode;
  parent.style.height = `${newHeight}px`;
  parent.style.width = `${newWidth}px`;
}

function adjustElementSize(element, newWidth, newHeight) {
  element.style.width = `${newWidth}px`;
  element.style.height = `${newHeight}px`;
}

function adjustElementToHeight(element, targetHeight) {
  if (!element) {
    console.log("No element provided to adjustElementToHeight");
    return;
  }
  if (element instanceof SVGSVGElement) {
    // console.log("is svg", element);
    const bbox = element.getBBox();
    const aspectRatio = bbox.width / bbox.height;
    const newWidth = aspectRatio * targetHeight;
    adjustElementSize(element, newWidth, targetHeight);
  } else {
    // console.log("is not svg", element);
    const aspectRatio = element.offsetWidth / element.offsetHeight;
    const newWidth = aspectRatio * targetHeight;
    adjustElementSize(element, newWidth, targetHeight);
  }
}

function adjustElements() {
  const btnParent = document.querySelector(`.${BUTTON_PARENT}`);
  const btnParentHeight = btnParent.offsetHeight;

  const logos = document.querySelectorAll(`.${LOGOE_SELECTOR}`);
  logos.forEach((logo) => adjustElementToHeight(logo, btnParentHeight));

  const cartParent = document.querySelector(`.${SVG_CART}`);
  adjustElementToHeight(cartParent, btnParentHeight);
  adjustParentSize(cartParent, cartParent.offsetWidth, btnParentHeight);
}

window.addEventListener("load", function () {
  cssVariable(HEADER, HEADER_HEIGHT);
  cssVariable(`.${ANNOUNCEMENT}`, ANNOUNCEMENT_HEIGHT);
});

function viewportSettings() {
  const viewportHeight = window.innerHeight;
  const pageContainer = document.getElementById(PAGE);
  if (pageContainer) pageContainer.style.height = `${viewportHeight}px`;
  setElementHeight("--window-height", viewportHeight);
}

// ウィンドウサイズが変更されたときに再度実行
window.addEventListener("resize", viewportSettings);

// get element height and set as css variable
function cssVariable(target, property) {
  const targetEl = document.querySelector(target);
  if (targetEl) {
    const height = targetEl.offsetHeight;
    setElementHeight(property, height);
  }
}

// set css variable
function setElementHeight(property, value) {
  document.documentElement.style.setProperty(property, `${value}px`);
}

// すべてのセクションの高さを合計して、	ScrollTrigger.createでトリガーを作成する
window.addEventListener("load", adjustContainer);

let totalHeight = 0;
function adjustContainer() {
  const allElements = document.body.getElementsByTagName("*");
  const sectionElements = Array.from(allElements).filter((el) => el.id.includes("section"));
  totalHeight = 0;
  sectionElements.forEach((el) => {
    console.log("Height of section", el.id, ":", el.offsetHeight);
    totalHeight += el.offsetHeight;
  });
  console.log("totalHeight", totalHeight);
}

export const dimensions = {
  get totalHeight() {
    return totalHeight;
  },
};
