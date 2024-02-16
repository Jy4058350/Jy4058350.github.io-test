import { config, isDesktopView } from "../scripts/helper";
import cartPhoneSvg from "../public/svg/cart_phone.svg";
import cartDesktopSvg from "../public/svg/cart_desktop.svg";

const BREAKPOINT_WIDTH = config.page.breakpoint;
const DEBOUNCE_TIME = config.time.debounce;
const SELECTOR = config.selector;
const LOGOE_SELECTOR = config.logoeSelector;
const BUTTON_SELECTOR = config.buttonSelector;
const SVG_CART = config.svgCart;

// Check if the current view is desktop or not using the helper function
isDesktopView(BREAKPOINT_WIDTH);

export default (function () {
  adjustContainer();
  const iconConfig = isDesktopView() ? config.tabletAndUp : config.phone;
  createIcon(iconConfig);

  const svgPath = isDesktopView() ? config.svg.cartDesktop : config.svg.cartPhone;
  createCart(svgPath);
})();

// fecth関数は開発サーバー（npm run dev）で実行するときはローカルファイルを読み込むことができますが、ビルド後の静的なHTMLファイル（npm run build）では同じ動作をしない。
// これは、ビルド後のファイルはサーバーから提供されるため、ローカルファイルを読み込むことができないためです。
async function getSVG(path) {
  try {
    const response = await fetch(`../public/svg/${path}`);
    // Add error handling if response is not ok
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();

    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(data, "image/svg+xml");
    const svgElement = svgDoc.querySelector("svg");

    if (!svgElement) {
      throw new Error(`No SVG element found in the response for path: ${path}`);
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
  } catch (error) {
    // Add point of failure to error message
    console.error("Error in getSVG:", error);
  }
}

async function createCart(svgPath) {
  try {
    const svgParent = document.querySelector(`.${SVG_CART}`);
    // Add error handling if no element is found
    if (!svgParent) {
      throw new Error(`No element found with class: ${SVG_CART}`);
    }

    clearElementChildren(svgParent);

    const svgElement = await getSVG(svgPath);
    if (!svgElement) {
      throw new Error(`No SVG element created for path: ${svgPath}`);
    }
    svgParent.appendChild(svgElement);
    if (window.innerWidth >= BREAKPOINT_WIDTH) {
      svgElement.classList.add("hidden-phone");
    } else {
      svgElement.classList.add("hidden-tablet-and-up");
    }

    const btnParent = document.querySelector(`.${BUTTON_SELECTOR}`);
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
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(async () => {
    console.log("resize");
    const typeDevice = window.innerWidth >= BREAKPOINT_WIDTH ? config.tabletAndUp : config.phone;
    createIcon(typeDevice);
    const svgPath = window.innerWidth >= BREAKPOINT_WIDTH ? config.svg.cartDesktop : config.svg.cartPhone;
    await createCart(svgPath);

    adjustElements();
  }, DEBOUNCE_TIME);
});

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
  const btn = document.querySelector(SELECTOR);
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
  const btnParent = document.querySelector(`.${BUTTON_SELECTOR}`);
  const btnParentHeight = btnParent.offsetHeight;

  const logos = document.querySelectorAll(`.${LOGOE_SELECTOR}`);
  logos.forEach((logo) => adjustElementToHeight(logo, btnParentHeight));

  const cartParent = document.querySelector(`.${SVG_CART}`);
  adjustElementToHeight(cartParent, btnParentHeight);
  adjustParentSize(cartParent, cartParent.offsetWidth, btnParentHeight);
}

function adjustContainer() {
  const allElements = document.body.getElementsByTagName("*");

  const sectionElements = Array.from(allElements).filter((el) => el.id.includes("section"));

  const totalHeight = sectionElements.reduce((sum, el) => sum + el.offsetHeight, 0);
  const globalContainer = document.getElementById("global-container");
  if (globalContainer) globalContainer.style.height = `${totalHeight}px`;
}
