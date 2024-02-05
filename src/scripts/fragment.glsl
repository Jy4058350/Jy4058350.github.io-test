export default `
      uniform sampler2D uTex;
      varying vec2 vUv;
      void main() {
        vec4 color = texture(uTex, vUv);
        // gl_FragColor = vec4(1.0, vUv, .5);
        gl_FragColor = color;
      }`;
