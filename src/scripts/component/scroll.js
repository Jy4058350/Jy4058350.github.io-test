export default function scrollInit(gsap, ScrollTrigger, Scrollbar) {
  gsap.registerPlugin(ScrollTrigger);
  const pageContainer = document.querySelector("#page-container");
  const scrollbar = Scrollbar.init(pageContainer, { delegateTo: document });
  ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
      return arguments.length
        ? (scrollbar.scrollTop = value)
        : scrollbar.scrollTop;
    },
  });

  scrollbar.addListener(ScrollTrigger.update);

  ScrollTrigger.defaults({ scroller: pageContainer });

  const el = document.querySelector(`[data-webgl]`);

  // const meshX = os[0].mesh.position.x;
  // const animation = {
  //   rotation: 0,
  //   x: meshX,
  // };

  // gsap.to(animation, {
  //   rotation: Math.PI * 2,
  //   x: meshX + 400,
  //   duration: 2,
  //   scrollTrigger: {
  //     trigger: el,
  //     start: "center 80%",
  //     end: "center 20%",
  //     scrub: true,
  //     pin: true,
  //     onUpdate: () => {
  //       os[0].mesh.rotation.z = animation.rotation;
  //       os[0].mesh.position.x = animation.x;
  //     },
  //   },
  // });
}
