varying vec2 vUv;
uniform vec2 uMouse;
uniform float uHover;
uniform vec4 uResolution;
uniform sampler2D tex1;
uniform sampler2D tex2;

vec2 coverUv(vec2 uv, vec4 resolution) {
  return (uv - 0.5) * resolution.zw + 0.5;
}

void main() {
          // vec2 mouse = step(uMouse, vUv);
          // gl_FragColor = vec4(mouse, uHover, 1.);
  vec2 uv = coverUv(vUv, uResolution);
  vec4 t1 = texture2D(tex1, uv);
  vec4 t2 = texture2D(tex2, uv);
  vec4 mixColor = mix(t1, t2, step(.5, uv.x));
  gl_FragColor = mixColor;
}