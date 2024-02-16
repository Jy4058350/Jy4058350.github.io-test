export default (function () {
  adjustGlobalContainer();
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
