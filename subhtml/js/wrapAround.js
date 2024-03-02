import Flickity from "flickity";

export default function init() {
  getTitle();
  flickityInit();
}

init();

function flickityInit() {
  const flkty = new Flickity(".Carousel", {
    //options

    wrapAround: true,
    pageDots: true,
    prevNextButtons: true,
    on: {
      ready: function () {
        const viewport = document.querySelector(".flickity-viewport");
        viewport.style.touchAction = "pan-y";
        viewport.style.height = "";
        const slider = document.querySelector(".flickity-slider");
        slider.style.left = "0px";
        const cells = document.querySelectorAll(".Carousel__Cell");
        cells.forEach((cell, index) => {
          cell.style.transform = "";
          cell.style.position = "absolute";
          cell.style.left = `${index * 100}%`;
          if (cell.classList.contains("is-selected")) {
            cell.style.visibility = "inherit";
            cell.style.opacity = "1";
          }
        });
      },
      settle: function () {
        const cells = document.querySelectorAll(".Carousel__Cell");
        cells.forEach((cell, index) => {
          cell.style.transform = "";
          if (cell.classList.contains("is-selected")) {
            cell.style.visibility = "inherit";
            cell.style.opacity = "1";
            if (index === 4) {
              cells[0].style.left = "500%";
            } else {
              cells[0].style.left = "0%";
            }
          } else {
            cell.style.visibility = "hidden";
            cell.style.opacity = "0";
          }
        });
      },
      change: function (index) {
        const cells = document.querySelectorAll(".Carousel__Cell");
        cells.forEach((cell, index) => {
          cell.style.setProperty("transform", "none", "important");

          if (cell.classList.contains("is-selected")) {
            cell.style.visibility = "inherit";
            let startOpacity = 0;
            let endOpacity = 1;
            let duration = 1000; // Duration of the animation in milliseconds
            let startTime = null;

            function animate(time) {
              if (startTime === null) startTime = time;
              let elapsed = time - startTime;
              let t = Math.min(elapsed / duration, 1); // Ensure t doesn't exceed 1
              let currentOpacity = lerp(startOpacity, endOpacity, t);
              cell.style.opacity = currentOpacity;
              if (t < 1) requestAnimationFrame(animate); // Continue the animation if t < 1
            }

            requestAnimationFrame(animate);
          } else {
            cell.style.visibility = "hidden";
            cell.style.opacity = "1";
          }
        });
      },
    },
  });
}

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function getTitle() {
  const title = document.title;
  const announcement = document.querySelector(".AnnouncementBar__Content");
  if (announcement) {
    announcement.innerHTML = title;
  }
  return title;
}
