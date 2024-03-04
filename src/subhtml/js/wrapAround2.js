// import Flickity from "flickity";
import Flickity from "flickity-fade";

export default function init() {
  getTitle();
  flickityInit();
}

init();

function flickityInit() {
  const flkty = new Flickity(".carousel", {
    wrapAround: true,
    pageDots: true,
    prevNextButtons: true,
    fade: true,
    // on: {
    //   ready: function () {
    //     const viewport = document.querySelector(".flickity-viewport");
    //     // viewport.style.touchAction = "pan-y";
    //     viewport.style.height = "";
    //     const cells = document.querySelectorAll(".carousel-cell");
    //     console.log(cells);
    //     cells.forEach((cell, index) => {
    //       cell.style.transform = "";
    //     });
    //   },
    // },
  });
}

function getTitle() {
  const title = document.title;
  const announcement = document.querySelector(".AnnouncementBar__Content");
  if (announcement) {
    announcement.innerHTML = title;
  }
  return title;
}
