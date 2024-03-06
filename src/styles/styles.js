import Flickity from "flickity-fade";
import { config, isDesktopView } from "../scripts/helper";
import cartPhoneSvg from "../svg/cart_phone.js";
import cartDesktopSvg from "../svg/cart_desktop.js";
import { create, set } from "lodash";

// import scrollInit from "../scripts/component/scroll.js";

const BREAKPOINT_WIDTH = config.page.breakpoint;
const DEBOUNCE_TIME = config.time.debounce;
const HUMBERGER_SELECTOR = config.humbergerBtnSelector;
const LOGOE_SELECTOR = config.logoeSelector;
const BUTTON_PARENT = config.buttonParent;
const SVG_CART = config.svgCart;
const ROGO_WHITE = config.logo.white;
const ROGO_BLACK = config.logo.black;
const ROGO_PHONE = config.logo.phone;
const ROGO_TABLET = config.logo.tablet;
const WHITE = config.color.white;
const BLACK = config.color.black;
const PAGE = config.target.pageContainer;
const HEADER = config.target.header;
const ANNOUNCEMENT = config.target.announcement;
const HEADER_HEIGHT = config.rootProperty.headerHeight;
const ANNOUNCEMENT_HEIGHT = config.rootProperty.announcementHeight;
const TABLETANDUP = config.tabletAndUp;
const PHONE = config.phone;

// const { disablePlugin, enablePlugin } = scrollInit();

// Check if the current view is desktop or not using the helper function
isDesktopView(BREAKPOINT_WIDTH);

export default (function () {
  document.addEventListener("DOMContentLoaded", function () {
    getTitle();
    viewportSettings();
    headerSettings();

    slideSettings();

    // let resizeTimeout;
    // window.addEventListener("resize", function () {
    //   this.clearTimeout(resizeTimeout);

    //   resizeTimeout = this.setTimeout(function () {
    //     const pinSpacer = document.querySelector(".pin-spacer");
    //     const header = document.getElementById(HEADER);
    //     if (pinSpacer) {
    //       const width = window.innerWidth;
    //       console.log("width", width);
    //       pinSpacer.style.width = width + "px";
    //       pinSpacer.style.maxWidth = width + "px";
    //       header.style.width = width + "px";
    //       header.style.maxWidth = width + "px";
    //     }
    //   }, 100);
    // });
  });
})();

function slideSettings() {
  const flkty = flickityInit();
  dotsSettings(flkty);
  CarouselCellSettings(flkty);
}

// Flickityの初期化
function flickityInit() {
  // optionsを設定する
  const options = {
    // cellAlign: "left",
    contain: true,
    prevNextButtons: false,
    setGallerySize: false,
    adaptiveHeight: false,
    wrapAround: true,
    dragThreshold: 15,
    pauseAutoPlayOnHover: false,
    autoPlay: false,
    pageDots: true,
    fade: true,
    on: {
      change: function (index) {
        console.log("Slide changed to", index);
        const cells = document.querySelectorAll(".Carousel__Cell");
        cells.forEach((cell, index) => {
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

        // セクションヘッダーの表示をスライドの進展毎に設定する
        const sectionHeaders = document.querySelectorAll(".SectionHeader");
        sectionHeaders.forEach((header, headerIndex) => {
          if (headerIndex === index) {
            header.style.visibility = "visible";
            header.style.opacity = "1";
            header.style.transform = "translateY(0)";
          } else {
            header.style.visibility = "hidden";
            header.style.opacity = "0";
            header.style.transform = "translateY(20px)";
          }
        });
      },
    },
  };

  const elem = document.querySelector(".Slideshow-Carousel");
  // optionsをJSON形式で表示する
  const optionsStr = JSON.stringify(options, null, 2);
  // elemのdata-flickity属性にoptionsを設定する
  elem.setAttribute("data-flickity-config", optionsStr);

  const flkty = new Flickity(elem, options);

  // カルーセルの高さを固定して、画像の高さを調整する
  elem.classList.add("Carousel--fixed");
}

let hasDisconnectedDots = false;

// ページドットの要素を取得する
function dotsSettings(flkty) {
  // Create a MutationObserver instance　DOMの変更を監視する
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList") {
        const dots = document.querySelectorAll(".flickity-page-dots");

        // Check if the dots have already been created
        if (dots.length > 0 && dots[0].children.length > 0) return;

        if (!hasDisconnectedDots && dots.length > 0) {
          // Once we have found the dots, we can stop observing　監視を停止する
          observer.disconnect();
          hasDisconnectedDots = true;
          console.log("disconnected");
        }
      }
    });
  });
  // Start observing the document with the configured parameters
  observer.observe(document, { childList: true, subtree: true });
}

let hasRan = false;

// CarouselCellの子要素を作成する
function CarouselCellSettings(flkty) {
  if (hasRan) return;
  hasRan = true;
  console.log("CarouselCellSettings has run");
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList") {
        const carouselCells = document.querySelectorAll(".Carousel__Cell");

        // 画像のsrcを設定する
        let srcs = ["./img/yamadera.jpeg", "./img/sakuramich.jpeg", "./img/yamadera.jpeg", "./img/yamadera.jpeg", "./img/sakuramich.jpeg"];
        //h3とh2のテキストを設定する
        let h3Texts = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"];
        let h2Texts = ["Text A", "Text B", "Text C", "Text D", "Text E"];

        // srcsをループして、画像を作成、srcs配列の長さを超えた場合に配列の最初から再度参照する
        carouselCells.forEach((cell, index) => {
          // Check if the child elements have already been created
          if (cell.children.length > 0) return;

          let src = srcs[index % srcs.length];
          let h3Text = h3Texts[index % h3Texts.length];
          let h2Text = h2Texts[index % h2Texts.length];
          createImageContainerTabletElement(cell, src);
          createImageContainerPhoneElement(cell, src);
          createContentElement(cell, h3Text, h2Text);
        });

        if (carouselCells.length >= srcs.length) {
          // Once we have found the dots, we can stop observing
          observer.disconnect();
          console.log("disconnected");
          addChileElementClass();
          showHeader();
        }
      }
    });
  });
  observer.observe(document, { childList: true, subtree: true });
}

// content要素のheaderの０番目を表示させる
function showHeader() {
  const sectionHeaders = document.querySelectorAll(".SectionHeader");
  sectionHeaders[0].style.visibility = "visible";
  sectionHeaders[0].style.opacity = "1";
  sectionHeaders[0].style.transform = "matrix(1, 0, 0, 1, 0, 0)";
}

// lerp関数を作成する
function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

// Slideshow__ImageContainer hidden-tablet-and-upの子要素に<img>要素を作成する
function createImage(div, src) {
  const img = document.createElement("img");
  img.alt = "yamadera";
  img.classList.add("Slideshow__Image", "Image--lazyLoaded");
  img.onload = function () {
    div.appendChild(img);
  };
  // img.src = "./public/img/yamadera.jpeg";
  img.src = src;
}

// Slideshow__ImageContainerのhidden-tablet-and-up子要素を作成する
function createImageContainerTabletElement(cell, src) {
  const div = document.createElement("div");
  div.classList.add("Slideshow__ImageContainer", "hidden-tablet-and-up");
  cell.appendChild(div);
  createImage(div, src);
}

// Slideshow__ImageContainerのhidden-phone子要素を作成する
function createImageContainerPhoneElement(cell, src) {
  const div = document.createElement("div");
  div.classList.add("Slideshow__ImageContainer", "hidden-phone");
  cell.appendChild(div);
  createImage(div, src);
}

// content要素を作成する
function createContentElement(cell, h3Text, h2Text) {
  const div = document.createElement("div");
  div.classList.add("Slideshow__Content", "Slideshow__Content--bottomLeft");
  cell.appendChild(div);
  createHeaderSemantics(div, h3Text, h2Text);
}
// content要素にheadersemanticsを追加して、SectionHeaderクラスを追加する
function createHeaderSemantics(div, h3Text, h2Text) {
  const header = document.createElement("header");
  header.classList.add("SectionHeader");
  div.appendChild(header);
  const h3 = document.createElement("h3");
  const h2 = document.createElement("h2");
  h3.classList.add("SectionHeader__SubHeader", "Heading", "u-h6");
  h2.classList.add("SectionHeader__Heading", "Section__Heading--emphasize", "Heading", "u-h1");
  h3.textContent = h3Text;
  h2.textContent = h2Text;
  header.appendChild(h3);
  header.appendChild(h2);

  buttonWrapper(header);
}

// buttonWrapper要素を作成する
function buttonWrapper(header) {
  const div = document.createElement("div");
  div.classList.add("SectionHeader__ButtonWrapper");
  header.appendChild(div);
  buttonGroup(div);
}

// buttonGroup要素を作成する
function buttonGroup(div) {
  const div1 = document.createElement("div");
  div1.classList.add("ButtonGroup", "ButtonGroup--spacingSmall");
  div.appendChild(div1);
  const a = document.createElement("a");
  // a.href = "./subhtml/test-fade.html"
  a.href = "./subhtml/demo-wrapAround.html";
  a.classList.add("ButtonGroup__Item", "Button");
  a.textContent = "READ MORE";
  div1.appendChild(a);
}

// Carusel-Cellの要素を取得して、それぞれの子要素に対して、クラスを追加する
function addChileElementClass() {
  const carouselCells = document.querySelectorAll(".Carousel__Cell");
}

// <title>タグのテキストを取得する
function getTitle() {
  const title = document.title;
  const announcement = document.querySelector(".AnnouncementBar__Content");
  if (announcement) {
    announcement.innerHTML = title;
  }
  return title;
}

/********************************************
 * ヘッダーの設定
 ********************************************/

// rogoのimg要素を動的に作成する
function addLogo(logoConfig) {
  logoChildElement(logoConfig);
  const logs = [
    { src: ROGO_BLACK, alt: "logo" },
    { src: ROGO_WHITE, alt: "logo" },
  ];
  logs.forEach((log) => createImg(log.src, log.alt));
}
// FlexItem--logoの子要素を作成する
function logoChildElement(logoConfig) {
  const logoParent = document.querySelector(".Header__FlexItem--logo");
  const h1 = document.createElement("h1");
  h1.classList.add("Header__Logo");
  logoParent.appendChild(h1);
  getA(h1, logoConfig);
}

// a要素を取得して、a要素の親要素を取得
function getA(h1, logoConfig) {
  console.log(logoConfig);
  const a = document.querySelector(".Header__LogoLink");

  // a要素の親要素を取得
  const parent = a.parentElement;

  // a要素をh1要素の子要素に追加する
  h1.appendChild(a);

  // h1要素をa要素の元の位置に挿入
  parent.appendChild(h1);

  // img要素を2つ作成する
  const img1 = document.createElement("img");
  img1.className = "Header__LogoImage Header__LogoImage--primary";
  img1.alt = "";
  img1.style.height = logoConfig;

  const img2 = document.createElement("img");
  img2.className = "Header__LogoImage Header__LogoImage--transparent";
  img2.alt = "";
  img2.style.height = logoConfig;

  // a要素の中にimg要素を追加
  a.appendChild(img1);
  a.appendChild(img2);
}

// img要素を作成する
function createImg(src, alt) {
  // const imgElements = [document.querySelector(".Header__LogoImage--primary"), document.querySelector(".Header__LogoImage--transparent")];
  const imgElement = document.querySelector(`.Header__LogoImage--${src === ROGO_BLACK ? "primary" : "transparent"}`);
  // 上記書き直しました
  imgElement.src = src;
  imgElement.alt = alt;
}

// ヘッダー要素ここでADDしたものをアップデートする
function headerSettings() {
  const iconConfig = isDesktopView(BREAKPOINT_WIDTH) ? TABLETANDUP : PHONE;
  addMenuBtn(iconConfig);
  const svgPath = isDesktopView(BREAKPOINT_WIDTH) ? cartDesktopSvg : cartPhoneSvg;
  createCart(svgPath);
  const logoConfig = isDesktopView(BREAKPOINT_WIDTH) ? ROGO_TABLET : ROGO_PHONE;
  addLogo(logoConfig);
}

// fecth関数は開発サーバー（npm run dev）で実行するときはローカルファイルを読み込むことができますが、ビルド後の静的なHTMLファイル（npm run build）では同じ動作をしない。
// これは、ビルド後のファイルはサーバーから提供されるため、ローカルファイルを読み込むことができないためです。
// Change argument from path to data
async function getSVG(data) {
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(data, "image/svg+xml");
  const svgElement = svgDoc.querySelector("svg");

  if (!svgElement) {
    throw new Error(`No SVG element found in the provided data: ${data}`);
  }
  // Set dummy values if height or width are not set
  if (!svgElement.getAttribute("height")) {
    svgElement.setAttribute("height", "20");
  }
  if (!svgElement.getAttribute("width")) {
    svgElement.setAttribute("width", "20");
  }

  const pathElements = svgElement.querySelectorAll("path");
  pathElements.forEach((pathElement) => {
    pathElement.setAttribute("fill", "currentColor");
    pathElement.setAttribute("stroke", "currentColor");
    pathElement.setAttribute("stroke-width", "0.05");
  });
  return svgElement;
}

// Change argument from svgPath to svgData
// SVGのデータを取得して,親span要素に追加する
async function createCart(svgData) {
  try {
    const svgParent = document.querySelector(`.${SVG_CART}`);
    // Add error handling if no element is found
    if (!svgParent) {
      throw new Error(`No element found with class: ${SVG_CART}`);
    }

    clearElementChildren(svgParent);

    // カートデータを取得して、svg要素を作成する
    const svgElement = await getSVG(svgData);
    if (!svgElement) {
      throw new Error(`No SVG element created for path: ${svgData}`);
    }
    svgParent.appendChild(svgElement);
    if (window.innerWidth >= BREAKPOINT_WIDTH) {
      svgElement.classList.add("hidden-phone");
    } else {
      svgElement.classList.add("hidden-tablet-and-up");
    }

    // カートアイコンの高さを調整する
    const cartBtn = document.querySelector(`.${BUTTON_PARENT}`);
    const btnHeight = cartBtn.offsetHeight;
    adjustElementToHeight(svgElement, btnHeight);

    adjustElements();
  } catch (error) {
    // Add point of failure to error message
    console.error("Error in createCart:", error);
  }
}

// Add event listener to window resize
let resizeTimeout;
// window.addEventListener("resize", handleResize);
window.addEventListener("resize", function () {
  console.log("Window resized");
  handleResize();
});
// window.addEventListener("orientationchange", handleResize);
window.addEventListener("orientationchange", function () {
  console.log("Orientation changed");
  handleResize();
});

function handleResize() {
  console.log("Resize event");
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(async () => {
    const typeDevice = isDesktopView(BREAKPOINT_WIDTH) ? TABLETANDUP : PHONE;
    addMenuBtn(typeDevice);
    const svgPath = isDesktopView(BREAKPOINT_WIDTH) ? cartDesktopSvg : cartPhoneSvg;
    await createCart(svgPath);

    const logoConfig = isDesktopView(BREAKPOINT_WIDTH) ? "28px" : "18px";
    const imgElements = document.querySelectorAll(".Header__LogoImage");
    imgElements.forEach((imgElement) => {
      imgElement.style.height = logoConfig;
    });

    setPinSpacerWidth();

    adjustElements();
  }, DEBOUNCE_TIME);
}

// pinSpacerの幅を設定する
function setPinSpacerWidth() {
  const pinSpacer = document.querySelector(".pin-spacer");
  const header = document.getElementById(HEADER);
  if (pinSpacer) {
    const width = window.innerWidth;
    console.log("width", width);
    pinSpacer.style.width = width + "px";
    pinSpacer.style.maxWidth = width + "px";
    header.style.width = width + "px";
    header.style.maxWidth = width + "px";
  }
}

function clearElementChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
// ハンバーガーメニューのスタイル以外のアイコンSVG要素を作成する（表示領域、幅、高さ）
function createSvgBace(viewBox, width, height) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  return svg;
}
// ハンバーガーメニューのスタイルを作成する
function createRectangles(svg, height, rectWidth, rectHeight) {
  const gap = (height - rectHeight * 3) / 2; // バー間の間隔を計算する
  for (let i = 0; i < 3; i++) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", rectWidth);
    rect.setAttribute("height", rectHeight);
    rect.setAttribute("y", i * (parseInt(rectHeight) + gap)); // バーのy座標を設定する
    rect.setAttribute("fill", "currentColor");
    svg.appendChild(rect);
  }
}

// Code duplication here so separate function to create svg with rectangles
//
function createHumbergerIcon({ viewBox, width, height, rectWidth, rectHeight }) {
  const svg = createSvgBace(viewBox, width, height);
  createRectangles(svg, height, rectWidth, rectHeight);
  return svg;
}

// humburgerボタンのアイコンをhtmlに追加する
function addMenuBtn(typeDevice) {
  const btn = document.querySelector(HUMBERGER_SELECTOR);
  clearElementChildren(btn);

  const phoneSvg = createHumbergerIcon(typeDevice);
  const tabletAndUpSvg = createHumbergerIcon(typeDevice);

  btn.appendChild(phoneSvg);
  btn.appendChild(tabletAndUpSvg);
  tabletAndUpSvg.style.display = "none";
}
// 親要素の高さと幅を調整する
function adjustParentSize(element, newWidth, newHeight) {
  if (!element) return;
  const parent = element.parentNode;
  parent.style.height = `${newHeight}px`;
  parent.style.width = `${newWidth}px`;
}

function adjustElementSize(element, newWidth, newHeight) {
  element.style.width = `${newWidth}px`;
  element.style.height = `${newHeight}px`;
}

// アイコンの高さに合わせて、アイコンの高さを調整する
function adjustElementToHeight(element, targetHeight) {
  if (!element) {
    console.log("No element provided to adjustElementToHeight");
    return;
  }
  if (element instanceof SVGSVGElement) {
    // console.log("is svg", element);
    const bbox = element.getBBox();
    const aspectRatio = bbox.width / bbox.height;
    const newWidth = aspectRatio * targetHeight;
    adjustElementSize(element, newWidth, targetHeight);
  } else {
    // console.log("is not svg", element);
    const aspectRatio = element.offsetWidth / element.offsetHeight;
    const newWidth = aspectRatio * targetHeight;
    adjustElementSize(element, newWidth, targetHeight);
  }
}

// ボタンの高さに合わせて、アイコンの高さを調整する
function adjustElements() {
  const btnParent = document.querySelector(`.${BUTTON_PARENT}`);
  const btnParentHeight = btnParent.offsetHeight;

  // logだけは高さを固定しました。
  const logos = document.querySelectorAll(`.${LOGOE_SELECTOR}`);

  const cartParent = document.querySelector(`.${SVG_CART}`);
  adjustElementToHeight(cartParent, btnParentHeight);
  adjustParentSize(cartParent, cartParent.offsetWidth, btnParentHeight);
}

// ウィンドウの高さを取得して、ページの高さを設定する
function viewportSettings() {
  const viewportHeight = window.innerHeight;
  const pageContainer = document.getElementById(PAGE);
  if (pageContainer) pageContainer.style.height = `${viewportHeight}px`;
  setElementHeight("--window-height", viewportHeight);
}

// ウィンドウサイズが変更されたときに再度実行
window.addEventListener("resize", viewportSettings);

// css変数をload時に設定する
window.addEventListener("load", function () {
  cssVariable(`#${HEADER}`, HEADER_HEIGHT);
  cssVariable(`#${ANNOUNCEMENT}`, ANNOUNCEMENT_HEIGHT);
});

// get element height and set as css variable
function cssVariable(target, property) {
  const targetEl = document.querySelector(target);
  if (targetEl) {
    const height = targetEl.offsetHeight;
    setElementHeight(property, height);
  }
}
// set css variable
function setElementHeight(property, value) {
  document.documentElement.style.setProperty(property, `${value}px`);
}

// loadするときにセクション合計の高さを取得するためのadjustContainer関数を実行
window.addEventListener("load", adjustContainer);

// すべてのセクションの高さを合計して、	ScrollTrigger.createでトリガーを作成する
let totalHeight = 0;
function adjustContainer() {
  const allElements = document.body.getElementsByTagName("*");
  const sectionElements = Array.from(allElements).filter((el) => el.id.includes("section"));
  totalHeight = 0;
  sectionElements.forEach((el) => {
    // console.log("Height of section", el.id, ":", el.offsetHeight);
    totalHeight += el.offsetHeight;
  });
}

// scroll.jsにtotalHeightを渡す
export const dimensions = {
  get totalHeight() {
    return totalHeight;
  },
};
