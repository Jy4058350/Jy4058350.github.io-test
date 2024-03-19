import { create } from "lodash";

export function isDesktopView(num) {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return viewportWidth >= num && viewportWidth > viewportHeight;
}


export function createElementWithAttributes(tag, attributes, classes) {
  const element = document.createElement(tag);
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  element.classList.add(...classes);
  return element;
}

export function appendChildWithClass(parent, tag, classes) {
  const child = createElementWithAttributes(tag, {}, classes);
  parent.appendChild(child);
  return child;
}