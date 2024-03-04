import Flickity from "flickity";
import "flickity-fade";

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  on: {
    ready: function () {
      const flickitySlider = document.querySelector(".flickity-slider");
      flickitySlider.style.left = "0px";
      flickitySlider.style.transform = "translate3d(0%,0px, 0px)";

      const CarouselCell = document.querySelectorAll(".carousel-cell");
      CarouselCell.forEach((cell, index) => {
        cell.style.position = "absolute";
        cell.style.left = `${index * 100}%`;

        cell.style.transform = "";
        cell.style.opacity = "0";
        cell.style.visibility = "hidden";
        // cellが'is-selected'の時だけopacityを1にする
        if (cell.classList.contains("is-selected")) {
          cell.style.opacity = "1";
          cell.style.visibility = "inherit";
        } else {
          cell.style.opacity = "0";
          cell.style.visibility = "hidden";
        }
      });
    },
    change: function (index) {
      console.log("Flickity has settled");

      // 全てのセルのopacityを0に設定
      const CarouselCell = document.querySelectorAll(".carousel-cell");
      CarouselCell.forEach((cell) => {
        cell.style.opacity = "0";
        cell.style.visibility = "hidden";
      });

      // 選択されたセルのopacityを1に設定
      const selectedCell = flkty.selectedElement;
      if (selectedCell.classList.contains("is-selected")) {
        selectedCell.style.opacity = "1";
        selectedCell.style.visibility = "inherit";
      } else {
        selectedCell.style.opacity = "0";
        selectedCell.style.visibility = "hidden";
      }
    },
    settle: function () {
      console.log("Flickity has settled");
      const selectedCell = flkty.selectedElement;

      const cells = flkty.getCellElements();
      console.log(cells);
      cells.forEach((cell, index) => {
        cell.style.transform = "";
      });
    },
  },

  // options
  // cellAlign: "left",
  contain: true,

  prevNextButtons: false,
  setGallerySize: false,
  wrapAround: true, // スライドをループさせる
  adaptiveHeight: false,
  dragThreshold: 10,
  pauseAutoPlayOnHover: false,
  autoPlay: false,
  pageDots: true,

  cellPosition: false,
});

// Create a MutationObserver instance
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === "childList") {
      var dots = document.querySelector(".flickity-page-dots");
      if (dots) {
        // Once we have found the dots, we can stop observing
        observer.disconnect();
      }
    }
  });
});

// Start observing the document with the configured parameters
observer.observe(document, { childList: true, subtree: true });
