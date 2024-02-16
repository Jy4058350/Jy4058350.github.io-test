export default (function () {
  adjustGlobalContainer();

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 80");
  svg.setAttribute("width", "30");
  svg.setAttribute("height", "30");

  for (let i = 0; i < 3; i++) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", "100");
    rect.setAttribute("height", "10");
    rect.setAttribute("y", i * 30);
    svg.appendChild(rect);
  }

  const iconWrapper = document.querySelector("button.Header__Icon");

  iconWrapper.appendChild(svg);
})();

function adjustGlobalContainer() {
  const allElements = document.body.getElementsByTagName("*");

  const sectionElements = Array.from(allElements).filter((el) => {
    return el.id.includes("section");
  });
  console.log(sectionElements);
  const height = new Map();
  sectionElements.forEach((el) => {
    height.set(el.id, el.offsetHeight);
  });
  const totalHeight = Array.from(height.values()).reduce((sum, height) => sum + height, 0);
  const globalContainer = document.getElementById("global-container");
  if (globalContainer) globalContainer.style.height = `${totalHeight}px`;
}
