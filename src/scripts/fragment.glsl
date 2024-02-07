varying vec2 vUv;
uniform vec2 uMouse;
uniform float uHover;

void main() {
  vec2 mouse = step(uMouse, vUv);
  gl_FragColor = vec4(mouse, uHover, 1.);
}