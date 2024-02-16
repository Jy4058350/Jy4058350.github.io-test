import init from "./bootstrap";
import "normalize.css";
// import "../styles/style.scss";
(async () => {
  const dotenv = await import("dotenv");
  dotenv.config();
  init();
})();

init();

import assetInit from "./helper/utils/assets.js";
assetInit();
