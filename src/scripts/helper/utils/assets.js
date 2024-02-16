import image1 from "../../../public/img/sakuramich.jpeg";
import image2 from "../../../public/img/yamadera.jpeg";

export default function init() {
    const divElement = document.querySelector("[data-webgl]");
    console.log("divElement", divElement);
    console.log(divElement.getAttribute('data-tex-1')); // Access data-tex-1
    console.log(divElement.getAttribute('data-tex-2')); // Access data-tex-2
  }
