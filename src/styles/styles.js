import { config } from "../scripts/helper";
export default (function () {
  adjustGlobalContainer();
  createSvgIcon(config);
  adjustImageAndCartToButtonHeight({
    imageSelector: config.imageSelector,
    buttonSelector: config.buttonSelector,
    svgElement: config.svgElement,
  });
})();

function adjustParentHeightToChildHeigh(cart, newWidth, buttonHeight) {
  const parentElement = cart.parentNode;
  parentElement.style.height = `${buttonHeight}px`;
  parentElement.style.width = `${newWidth}px`;
}

function adjustSvgHeightToButtonHeight(cart, buttonHeight) {
  const bbox = cart.getBBox();
  const height = bbox.width;
  const width = bbox.height;

  const aspectRatio = width / height;
  const newHeight = buttonHeight;
  const newWidth = aspectRatio * newHeight;
  cart.style.width = `${newWidth}px`;
  cart.style.height = `${buttonHeight}px`;
  adjustParentHeightToChildHeigh(cart, newWidth, buttonHeight);
}

function adjustImageAndCartToButtonHeight({ imageSelector, buttonSelector, svgElement }) {
  const button = document.querySelector(buttonSelector);
  const logoImage = document.querySelectorAll(imageSelector);
  const cart = document.querySelector(svgElement);

  const buttonHeight = button.offsetHeight;

  logoImage.forEach((logoImage) => {
    const width = logoImage.offsetWidth;
    const height = logoImage.offsetHeight;

    const aspectRatio = width / height;
    const newWidth = aspectRatio * buttonHeight;
    logoImage.style.width = `${newWidth}px`;
    logoImage.style.height = `${buttonHeight}px`;
  });
  adjustSvgHeightToButtonHeight(cart, buttonHeight);
}
function createSvgIcon({ viewBox, width, height, rectWidth, rectHeight, selector }) {
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

  const iconWrapper = document.querySelector(selector);

  iconWrapper.appendChild(svg);
}

function adjustGlobalContainer() {
  const allElements = document.body.getElementsByTagName("*");

  const sectionElements = Array.from(allElements).filter((el) => {
    return el.id.includes("section");
  });
  const height = new Map();
  sectionElements.forEach((el) => {
    height.set(el.id, el.offsetHeight);
  });
  const totalHeight = Array.from(height.values()).reduce((sum, height) => sum + height, 0);
  const globalContainer = document.getElementById("global-container");
  if (globalContainer) globalContainer.style.height = `${totalHeight}px`;
}
