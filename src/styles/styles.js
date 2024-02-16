import { config } from "../scripts/helper";
const SELECTOR = config.selector;
const IMAGE_SELECTOR = config.imageSelector;
const BUTTON_SELECTOR = config.buttonSelector;
const SVG_ELEMENT = config.svgElement;

export default (function () {
  adjustContainer();
  createIcon(config);
  adjustElements();
})();

function createIcon({ viewBox, width, height, rectWidth, rectHeight }) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", viewBox);
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);

  for (let i = 0; i < 3; i++) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", rectWidth);
    rect.setAttribute("height", rectHeight);
    rect.setAttribute("y", i * parseInt(height));
    svg.appendChild(rect);
  }
  const iconWrapper = document.querySelector(SELECTOR);

  iconWrapper.appendChild(svg);
}
function adjustParentSize(element, newWidth, newHeight) {
  const parent = element.parentNode;
  parent.style.height = `${newHeight}px`;
  parent.style.width = `${newWidth}px`;
}

function adjustElementSize(element, newWidth, newHeight) {
  element.style.width = `${newWidth}px`;
  element.style.height = `${newHeight}px`;
}

function adjustElementToHeight(element, targetHeight) {
  const aspectRatio = element.offsetWidth / element.offsetHeight;
  const newWidth = aspectRatio * targetHeight;
  adjustElementSize(element, newWidth, targetHeight);
}

function adjustElements() {
  const images = document.querySelectorAll(IMAGE_SELECTOR);
  const svg = document.querySelector(SVG_ELEMENT);
  const button = document.querySelector(BUTTON_SELECTOR);
  const buttonHeight = button.offsetHeight;

  images.forEach((image) => adjustElementToHeight(image, buttonHeight));
  adjustElementToHeight(svg, buttonHeight);
  adjustParentSize(svg, svg.style.width, buttonHeight);
}

function adjustContainer() {
  const allElements = document.body.getElementsByTagName("*");

  const sectionElements = Array.from(allElements).filter((el) => el.id.includes("section"));

  const totalHeight = sectionElements.reduce((sum, el) => sum + el.offsetHeight, 0);
  const globalContainer = document.getElementById("global-container");
  if (globalContainer) globalContainer.style.height = `${totalHeight}px`;
}
