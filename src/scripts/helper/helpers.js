export function isDesktopView(num) {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return viewportWidth >= num && viewportWidth > viewportHeight;
}
