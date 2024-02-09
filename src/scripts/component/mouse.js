import { Vector2 } from "three";

const pointer = new Vector2();

export default function mouseInit() {
  const globalContainer = document.querySelector("#global-container");
  globalContainer.addEventListener("pointermove", onPointerMove);
}

function onPointerMove(event) {
  pointer.x = calcPointerX(event.clientX);
  pointer.y = calcPointerY(event.clientY);
}

function calcPointerX(clientX) {
  return (clientX / window.innerWidth) * 2 - 1;
}

function calcPointerY(clientY) {
  return -(clientY / window.innerHeight) * 2 + 1;
}

export { pointer };
