import Flickity from "flickity";
console.log("slide.js loaded");

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
});
