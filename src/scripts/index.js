import "../styles/style.scss";
import init from "./bootstrap";

init();

if (import.meta.env.VITE_APP_ENV === "development") {
  console.log("Development output");
} else if (import.meta.env.VITE_APP_ENV === "production") {
  console.log("Production output");
}

import assetInit from "./helper/utils/assets.js";
assetInit();
