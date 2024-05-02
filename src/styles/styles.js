import { config, sectionSidebarMenuConfig, registrationConfig, isDesktopView, createElementWithAttributes, appendChildWithClass } from "../scripts/helper";
import cartPhoneSvg from "../svg/cart_phone.js";
import closeButtonData from "../svg/closeButton.js";
import searchButton from "../svg/searchButton.js";
import scrollInit from "../scripts/component/scroll";
import { templateSettings, slideSection2, productPage, section3TestPage, registrationForm, roboResitration } from "../scripts/template/section.js";
import { sidebarSetting } from "../scripts/template/sidebar.js";

const BREAKPOINT_WIDTH = config.page.breakpoint;
const DEBOUNCE_TIME = config.time.debounce;
const HUMBERGER_SELECTOR = config.humbergerBtnSelector;
const LOGOE_SELECTOR = config.logoSelector;
const BUTTON_PARENT = config.buttonParent;
const SVG_CART = config.svgCart;
const ROGO_WHITE = config.logo.white;
const ROGO_BLACK = config.logo.black;
const ROGO_PHONE = config.logo.phone;
const ROGO_TABLET = config.logo.tablet;

const PAGE = config.target.pageContainer;
const HEADER = config.target.header;
const ANNOUNCEMENT = config.target.announcement;
const HEADER_HEIGHT = config.rootProperty.headerHeight;
const ANNOUNCEMENT_HEIGHT = config.rootProperty.announcementHeight;
const TABLETANDUP = config.tabletAndUp;
const PHONE = config.phone;
const SMALLCART = config.smallCart;
const LARGECART = config.largeCart;
const SMALLHEADER = config.smallHeader;
const LARGEHEADER = config.largeHeader;

// const { disablePlugin, enablePlugin } = scrollInit();

// Check if the current view is desktop or not using the helper function
isDesktopView(BREAKPOINT_WIDTH);

export function init() {
  document.addEventListener("DOMContentLoaded", async function () {
    getTitle();
    viewportSettings();
    headerSettings();
    sidebarSettings();

    // ⭐️⭐️新しい関数を追加する⭐️⭐️
    if (document.getElementById("section-sidebar-menu")) {
      sidebarSetting(sectionSidebarMenuConfig);
    }

    if (document.getElementById("section-registration-form")) {
      registrationForm();
    }

    if (document.getElementById("section-robo-registration")) {
      roboResitration();
    }

    if (document.getElementById("section-1")) {
      templateSettings();
    }

    if (document.getElementById(config.section.section2)) {
      slideSection2(config);
    }

    if (document.getElementById("section-product-page")) {
      productPage();
    }

    if (document.getElementById("section-test3")) {
      section3TestPage();
    }

    setScrollableElement();
  });
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
 * sidebar-cartの設定(pageContainer外の要素)
 ********************************************/

// リサイズイベントが発生したときに、イベントリスナーを設定する
// window.addEventListener("resize", function () {
//   const sidebarCart = document.querySelector(`[data-drawer-id="sidebar-cart"][data-action="open-drawer"]`);
//   console.log("sidebarCart", sidebarCart);
//   sidebarCart.addEventListener("click", function (event) {
//     // cartのaタグをクリックしても、ページ遷移が発生しないようにする
//     event.preventDefault();
//     console.log("openSidebarCart is called", sidebarCart);
//   });
// });

function sidebarCartSettings() {
  const sectionCart = document.querySelector(`[data-section-id="cart"]`);
  sectionCart.setAttribute("aria-hidden", true);
  sectionCart.classList.add("Drawer", "Drawer--fromRight");

  addDivToSectionCart(sectionCart);
  clickSidebarCart(sectionCart);
  addFormToDiv(sectionCart);
}

// sectionCartの子要素にdiv要素を追加する
function addDivToSectionCart(element) {
  const div = createElementWithAttributes("div", {}, ["Drawer__Header", "Drawer__Header--bordered", "Drawer__Container"]);
  element.appendChild(div);
  const span = createElementWithAttributes("span", {}, ["Drawer__Title", "Heading", "u-h4"]);
  span.textContent = "カート";
  div.appendChild(span);
  const div1 = createElementWithAttributes("div", {}, ["Drawer__Header", "Drawer__Header--bordered", "Drawer__Container"]);
  addBtnToDiv(div);
}

// div子要素にbutton要素を追加する
function addBtnToDiv(element) {
  const btn = createElementWithAttributes("button", config.sidebarBtnConfig.attributes, config.sidebarBtnConfig.classes);
  element.appendChild(btn);
  const svg = addSvgToBtn(closeButtonData, btn, ["Icon", "Icon--close"], config.svgStyle.default);
  // console.log("svg", svg);
  return btn;
}

// buttonの子要素にsvg要素を追加する
export async function addSvgToBtn(svgData, element, classNames, svgStyle) {
  const svg = getSvgdata1(svgData, element, classNames, svgStyle);
  return svg;
}

// async function getSvgdata1(svgData, parent, classNames, strokeWidth = "1.5", stroke = "currentColor", svgStyle) {
async function getSvgdata1(svgData, parent, classNames, svgStyle) {
  // console.log("svgStyle", svgStyle);
  const svgParent = parent;
  const childNodes = Array.from(svgParent.childNodes);
  // console.log("childNodes", childNodes);
  clearSvgParent(svgParent);

  // SVGデータの解析してsvg要素作成する
  async function parseSvgData(data) {
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(data, "image/svg+xml");
    const svgElement = svgDoc.querySelector("svg");

    if (!svgElement) {
      throw new Error(`No SVG element found in the provided data: ${data}`);
    }

    setPathStyle(svgElement, svgStyle);

    return svgElement;
  }

  //保存しておいた子ノードを再度追加
  childNodes.forEach((child) => svgParent.appendChild(child));

  // svg要素のstyleを設定する
  const svgElement = await parseSvgData(svgData);
  setSvgStyle(svgParent, svgElement, svgStyle);

  // svg要素のクラスを配列で渡して設定する
  addSvgClass(svgElement, classNames);

  return svgElement;
}

function setPathStyle(element, { viewBox, width, height, strokeWidth, fill }) {
  const pathElements = element.querySelectorAll("path");
  pathElements.forEach((pathElement) => {
    pathElement.setAttribute("fill", fill);
    pathElement.setAttribute("stroke-width", strokeWidth); // Add this line
    pathElement.setAttribute("stroke", "currentColor"); // Add this line
  });
}

function setSvgStyle(parent, svgElement, { viewBox, width, height, strokeWidth, fill }) {
  // console.log(viewBox, width, height, strokeWidth, fill);
  if (!parent) return;
  parent.appendChild(svgElement);
  svgElement.setAttribute("viewBox", viewBox); // Add this line
  svgElement.setAttribute("width", width); // Add this line
  svgElement.setAttribute("height", height); // Add this line
  // svgElement.setAttribute("fill", fill); // Add this line
}

// svgElemntにclassを追加する
function addSvgClass(svgElement, classNames) {
  svgElement.classList.add(...classNames);
}

// div子要素にform要素を追加する
function addFormToDiv(element) {
  const form = createElementWithAttributes("form", {}, ["Cart", "Drawer__Content"]);
  form.setAttribute("action", "/cart");
  form.setAttribute("method", "post");
  form.setAttribute("novalidate", "");
  element.appendChild(form);

  addDivToForm(form);
}

// formの子要素にdiv要素を追加する
function addDivToForm(element) {
  const div = createElementWithAttributes("div", {}, ["Drawer__Main"]);
  element.appendChild(div);

  addShippingNotice(div);
  addCartEmpty(div, "カートに商品がありません");
}

// divの子要素にdiv要素を追加する
function addShippingNotice(element) {
  const div = appendChildWithClass(element, "div", ["Cart__ShippingNotice", "Text--subdued"]);
  addDrawerContainer(div);
}

// divの子要素にdiv要素を追加する
function addDrawerContainer(element) {
  const div = appendChildWithClass(element, "div", ["Drawer__Container"]);
  addYen(div, "あと");
}

// divの子要素にp要素を追加する
function addCartEmpty(element, text) {
  const p = appendChildWithClass(element, "p", ["Cart__Empty", "Heading", "u-h5"]);
  p.textContent = text;
}

// divの子要素にp要素を追加する
function addYen(element, text) {
  const p = createElementWithAttributes("p", {}, []);
  p.appendChild(document.createTextNode(text));

  const span = createElementWithAttributes("span", {}, []);
  const span1 = createElementWithAttributes("span", {}, ["yen"]);
  span1.textContent = "¥";

  span.appendChild(span1);
  span.appendChild(document.createTextNode("10,000"));
  p.appendChild(span);

  p.appendChild(document.createTextNode("以上で送料無料"));
  element.appendChild(p);
}

// p要素の子要素にspan要素を追加する
function addSpanToP(element, text) {
  const span = createElementWithAttributes("span", {}, []);
  span.textContent = text;
  element.appendChild(span);
}

/********************************************
 * sidebar-cart属性のカートがクリックされた時に、必要な動作を設定する
 ********************************************/
function clickSidebarCart(sectionElement) {
  const html = document.querySelector("html");
  const pageOverlay = document.querySelector(".PageOverlay");
  const sidebarCart = document.querySelector(`[data-drawer-id="sidebar-cart"][data-action="open-drawer"]`);
  openSidebarCart(html, pageOverlay, sectionElement, sidebarCart);
  closeSidebarCart(html, pageOverlay, sectionElement, sidebarCart);
  _overlayClick(pageOverlay, sectionElement, html, document.getElementById(PAGE));
}

function openSidebarCart(html, pageOverlay, sectionElement, sidebarCart) {
  const pageContainer = document.getElementById("pageContainer");
  // document.querySelector("a[data-drawer-id]").addEventListener("click", function (event) {
  sidebarCart.addEventListener("click", function (event) {
    // cartのaタグをクリックしても、ページ遷移が発生しないようにする
    event.preventDefault();
    // console.log("openSidebarCart is called", sidebarCart);
    // pageOverlay?.classList.toggle("is-visible");
    html.classList.toggle("no-scroll");
    sectionElement.setAttribute("aria-hidden", false);
    sectionElement.setAttribute("tabindex", "-1");
    // disconnectScroll();
    // transitionedイベントを設定して開閉アニメーションが完了した時に特定の動作をトリガーする
    sectionElement.addEventListener("transitionend", function (event) {
      if (event.propertyName !== "transform") return;
      // サイドバー内の最初のフォーカス可能な要素にフォーカスを移す
      const firstFocusableElement = sectionElement.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (firstFocusableElement && isFirstFocus) {
        firstFocusableElement.focus();
        disconnectScroll(); // スクロールを切断
        isFirstFocus = false; // フラグを更新
        console.log("pageContainer", pageContainer);
        // pageContainer内のすべてのフォーカス可能な要素に対してtabindex="-1"を設定
        const focusableElementsInPageContainer = pageContainer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');

        focusableElementsInPageContainer.forEach((element) => {
          element.setAttribute("tabindex", "-1");
          console.log("Adding pageContainer tabindex=-1");
        });
      }
    });
  });
}
function closeSidebarCart(html, pageOverlay, sectionElement, sidebarCartt) {
  const pageContainer = document.getElementById(PAGE);
  const btn = document.querySelector(`[data-action="close-drawer"][data-drawer-id="sidebar-cart"]`);
  btn.addEventListener("click", function () {
    sectionElement.setAttribute("aria-hidden", "true");
    pageOverlay.classList.remove("is-visible");
    html.classList.remove("no-scroll");
    // connectScroll();
    // transitionedイベントを設定して開閉アニメーションが完了した時に特定の動作をトリガーする
    sectionElement.addEventListener("transitionend", function (event) {
      if (event.propertyName !== "transform") return;
      // pageContainer内のすべてのフォーカス可能な要素のtabindex="-1"を削除
      const focusableElementsInPageContainer = pageContainer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      focusableElementsInPageContainer.forEach((element) => {
        element.removeAttribute("tabindex");
        connectScroll(); // スクロールを開始
      });
      // フラグのリセットをする
      isFirstFocus = true;
    });
  });
}

function _overlayClick(overlay, section, html, page) {
  console.log("overlay", overlay);
  overlay.addEventListener("click", () => {
    console.log("overlay click");
    section.setAttribute("aria-hidden", "true");
    section.removeAttribute("tabindex");
    overlay.classList.remove("is-visible");
    html.classList.remove("no-scroll");

    section.addEventListener("transitionend", function (event) {
      if (event.propertyName !== "transform") return;
      const focusableElementsInPageContainer = page.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      focusableElementsInPageContainer.forEach((element) => {
        element.removeAttribute("tabindex");
        connectScroll();
      });
      isFirstFocus = true;
    });
  });
}

/********************************************
 * commonの設定
 ********************************************/

// Drawer__Mainの要素にスクロール可能な要素を設定する
function setScrollableElement() {
  const elements = document.querySelectorAll(".Drawer__Main");
  elements.forEach((element) => {
    element.setAttribute("data-scrollable", "");
    element.style.overflow = "auto";
  });
}

/********************************************
 * sidebarの設定(collapsible menu)
 ********************************************/

function collapsibleBtn() {
  const sideMenu = document.getElementById("sidebar-menu");
  if (!sideMenu) return;

  const collapsibles = Array.from(sideMenu.querySelectorAll(".Collapsible"));
  let aTagCount = 0;

  const collapsibleWithoutButton = collapsibles.filter((collapsible) => !collapsible.querySelector("button"));

  collapsibles.forEach((collapsible, index) => {
    if (collapsible) {
      const button = collapsible.querySelector(".Collapsible__Button");
      if (button) {
        // buttonにクラスを追加する
        button.classList.add("Heading", "u-h6");
        // 追加ボタンが押された時に表示する要素を作成する
        createInnerElement(collapsible);
        // 追加ボタンの要素を作成する
        addSpanTagForAddBtn(button);
      }
    }
  });
  // configからlinks_collapsibleを配列として取得しhref属性に当て、collapsibleにaタグを作成する

  collapsibleWithoutButton.forEach((collapsible, index) => {
    if (collapsibleWithoutButton.length === config.links.collapsible.length) {
      createA(collapsible, index);
      aTagCount++;
      // console.log(`Generated ${aTagCount} a tags`); // 生成されたaタグの数をログに出力
    } else {
      console.log("Collapsible is not generated");
    }
  });
}

// ボタンを含まないcollapsibleに対して処理を行う

// collapsibleにaタグを作成する
function createA(element, index) {
  const a = document.createElement("a");
  a.classList.add("Collapsible__Button", "Heading", "Text--subdued", "Link", "Link--primary", "u-h7");
  // collapsibleのテキストを取得して、a要素に設定する
  const text = element.textContent;
  a.textContent = text;
  // href属性を設定する
  // a.setAttribute("href", "#");
  // const randomIndex = Math.floor(Math.random() * config.links.collapsible.length);
  a.setAttribute("href", config.links.collapsible[index]);

  // collapsibleのテキストを削除する
  element.textContent = "";
  // a要素をcollapsibleの子要素に追加する
  element.appendChild(a);
}

// 追加ボタンがおされたときに表示する要素を作成する
function createInnerElement(element) {
  const div = document.createElement("div");
  // console.log("div", div);
  div.classList.add("Collapsible__Inner");
  element.appendChild(div);
  const content = getContentElement();
  div.appendChild(content);
  div.style.overflow = "hidden";
  div.style.height = "0";
}

// Collapsible__Contentの要素を取得する
function getContentElement() {
  const content = document.querySelector(".Collapsible__Content");
  return content;
}

// collapsibleに追加ボタンの要素を作成する
function addSpanTagForAddBtn(btn) {
  const span = document.createElement("span");
  span.classList.add("Collapsible__Plus");
  btn.appendChild(span);
  const el = document.querySelector(".Collapsible__Button");
  clickBtn(el);
}

// ボタン(inner)をクリックしたときに、必要な動作を設定する
function clickBtn(element) {
  const inner = document.querySelector(".Collapsible__Inner");

  window.addEventListener("DOMContentLoaded", (event) => {
    // 折り畳まれている要素とその子要素にはフォーカスを当てない
    if (inner.style.height === "0px") {
      addTabIndex(inner);
    } else {
      removeTabIndex(inner);
    }
  });

  element.addEventListener("click", function () {
    // const btn = element.parentElement;
    const btn = document.querySelector(".Collapsible__Button");
    const inner = document.querySelector(".Collapsible__Inner");

    // aria-expanded属性を切り替える
    const isExpanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !isExpanded);

    // overflowとheightを切り替える
    inner.style.overflow = inner.style.overflow === "visible" ? "hidden" : "visible";
    inner.style.height = inner.style.height === "0px" ? "auto" : "0px";

    // tabindexを切り替える
    if (inner.getAttribute("tabindex") === "-1") {
      removeTabIndex(inner);
    } else {
      addTabIndex(inner);
    }
    // 折りたたみが開かれたときに特定の要素にフォーカスを設定
    if (!isExpanded) {
      console.log("btn", btn);
      btn.focus();
    }
  });
}

// tabindexをつける関数
function addTabIndex(element) {
  element.setAttribute("tabindex", "-1");
  const focusableElementsInInner = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  focusableElementsInInner.forEach((el) => {
    el.setAttribute("tabindex", "-1");
  });
}
// tabindexを外す関数
function removeTabIndex(element) {
  element.removeAttribute("tabindex");
  const focusableElementsInInner = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  focusableElementsInInner.forEach((el) => {
    el.removeAttribute("tabindex");
  });
}

/********************************************
 * sidebarの設定
 ********************************************/

function sidebarSettings() {
  closeButtonInit(closeButtonData);
  searchButtonInit(searchButton);
  collapsibleBtn();
  sidebarCartSettings();
}

// 虫眼鏡ボタンの設定をする
function searchButtonInit(svgData) {
  getSvgdata(svgData, "Drawer__Search", ["Icon", "Icon--search"]);
}

// closeボタンの設定をする
function closeButtonInit(svgData) {
  getSvgdata(svgData, "Drawer__Close", ["Icon", "Icon--close"]);
  const sidebar = document.getElementById("sidebar-menu");
  if (sidebar) {
    // エラー回避のため暫定対策
    sidebar.setAttribute("aria-hidden", true);
  }
  // aria-hidden属性を設定する(要素をスクリーンリーダーから隠す)
  // aria-hidden属性をfalseに設定する(要素をスクリーンリーダーから表示する)
  // sidebar.setAttribute("aria-hidden", false);
  btnClick(sidebar);
  btnCloseClick(sidebar, "Drawer__Close");
}

async function getSvgdata(svgData, parent, classNames) {
  const svgParent = document.querySelector(`.${parent}`);
  clearSvgParent(svgParent);

  // SVGデータの解析してsvg要素作成する
  async function parseSvgData(data) {
    // console.log("data", data);
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(data, "image/svg+xml");
    const svgElement = svgDoc.querySelector("svg");

    if (!svgElement) {
      throw new Error(`No SVG element found in the provided data: ${data}`);
    }

    const pathElements = svgElement.querySelectorAll("path");
    pathElements.forEach((pathElement) => {
      pathElement.setAttribute("fill", "none");
      pathElement.setAttribute("stroke-width", "1.5"); // Add this line
      pathElement.setAttribute("stroke", "currentColor"); // Add this line
    });
    return svgElement;
  }

  // svg要素のstyleを設定する
  const svgElement = await parseSvgData(svgData);
  const configs = config.svgStyle.default;
  // console.log("configs", configs);
  setSvgStyle(svgParent, svgElement, config.svgStyle.default);

  // svg要素のクラスを配列で渡して設定する
  svgElement.classList.add(...classNames);
}

// scroll監視の切断
function disconnectScroll() {
  const { disablePlugin, enablePlugin } = scrollInit();
  disablePlugin();
}

// sccroll監視の開始
function connectScroll() {
  const { disablePlugin, enablePlugin } = scrollInit();
  enablePlugin();
}

let isFirstFocus = true; // フラグを初期化
// サイドバー開閉ボタンを開いた時に、必要な動作を設定する
function btnClick(element) {
  // const { disablePlugin, enablePlugin } = scrollInit();
  const html = document.querySelector("html");
  const sidebar = document.getElementById("sidebar-menu");
  const pageOverlay = document.querySelector(".PageOverlay");
  const button = document.querySelector(".Header__Icon");
  const pageContainer = document.getElementById(PAGE);

  button.addEventListener("click", function () {
    if (!sidebar) return;
    element.setAttribute("aria-hidden", false);
    sidebar.setAttribute("tabindex", "-1"); //追加

    // transitionedイベントを設定して開閉アニメーションが完了した時に特定の動作をトリガーする
    sidebar.addEventListener("transitionend", function (event) {
      if (event.propertyName !== "transform") return;
      // サイドバー内の最初のフォーカス可能な要素にフォーカスを移す
      const firstFocusableElement = sidebar.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (firstFocusableElement && isFirstFocus) {
        firstFocusableElement.focus();
        disconnectScroll(); // スクロールを切断
        isFirstFocus = false; // フラグを更新

        // pageContainer内のすべてのフォーカス可能な要素に対してtabindex="-1"を設定
        const focusableElementsInPageContainer = pageContainer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        console.log("focusableElementsInPageContainer", focusableElementsInPageContainer);
        focusableElementsInPageContainer.forEach((element) => {
          element.setAttribute("tabindex", "-1");
          console.log("Adding pageContainer tabindex=-1");
        });
      }
    });

    pageOverlay.classList.add("is-visible");
    html.classList.add("no-scroll");
  });
}

// サイドバー開閉ボタンを閉じた時に、必要な動作を設定する
function btnCloseClick(element, parent) {
  const html = document.querySelector("html");
  const sidebar = document.getElementById("sidebar-menu");
  const pageOverlay = document.querySelector(".PageOverlay");
  const pageContainer = document.getElementById("pageContainer");
  // console.log("pageContainer", pageContainer);

  const button = document.querySelector(`.${parent}`);
  if (!button) return;
  button.addEventListener("click", function () {
    element.setAttribute("aria-hidden", true);
    sidebar.removeAttribute("tabindex"); //追加
    pageOverlay.classList.remove("is-visible");
    html.classList.remove("no-scroll");

    // transitionedイベントを設定して開閉アニメーションが完了した時に特定の動作をトリガーする
    sidebar.addEventListener("transitionend", function (event) {
      if (event.propertyName !== "transform") return;
      // pageContainer内のすべてのフォーカス可能な要素のtabindex="-1"を削除
      console.log("pageContainer", pageContainer);
      const focusableElementsInPageContainer = pageContainer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      focusableElementsInPageContainer.forEach((element) => {
        element.removeAttribute("tabindex");
        connectScroll(); // スクロールを開始
      });
      // フラグのリセットをする
      isFirstFocus = true;
    });
  });
}

/********************************************
 * ヘッダーの設定と一部buildに関連している記述
 ********************************************/

// rogoのimg要素を動的に作成する
function addLogo(logoConfig) {
  logoChildElement(logoConfig);

  // 現在のpagesのURLを取得する
  const path = window.location.pathname;
  const htmlFileName = path.substring(path.lastIndexOf("/") + 1);

  // ⭐️ logoPathを表示しているpageによって変更する　（重要　buildに関連している記述）
  // const logoBlack = path.includes("subhtml") ? "../png" + config.logo.black : "." + config.logo.black;
  const logoBlack = path.includes("subhtml") || path.includes("php") ? "../png" + config.logo.black : "." + config.logo.black;
  const logoWhite = path.includes("subhtml") || path.includes("php") ? "../png" + config.logo.white : "." + config.logo.white;
  // console.log("logoBlack", logoBlack);

  const logs = [
    // { src: ROGO_BLACK, alt: "logo" },
    // { src: ROGO_WHITE, alt: "logo" },
    { src: logoBlack, alt: "logo" },
    { src: logoWhite, alt: "logo" },
  ];
  // 🤩　この部分動いていないかもしれないです
  logs.forEach((log) => createImg(log.src, log.alt, logoBlack));
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
  const a = document.querySelector(".Header__LogoLink");

  // a要素の親要素を取得
  const parent = a.parentElement;

  // a要素をh1要素の子要素に追加する
  h1.appendChild(a);

  // h1要素をa要素の元の位置に挿入
  parent.appendChild(h1);

  // 既存のimg要素を削除
  const existingImages = a.querySelectorAll(".Header__LogoImage");
  existingImages.forEach((img) => img.remove());

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
function createImg(src, alt, logoBlack) {
  // const imgElements = [document.querySelector(".Header__LogoImage--primary"), document.querySelector(".Header__LogoImage--transparent")];
  const imgElement = document.querySelector(`.Header__LogoImage--${src === ROGO_BLACK || src === logoBlack ? "primary" : "transparent"}`);
  // 上記書き直しました
  imgElement.src = src;
  // console.log("src", src);
  imgElement.alt = alt;
}

// ヘッダー要素ここでADDしたものをアップデートする
function headerSettings() {
  const iconConfig = isDesktopView(BREAKPOINT_WIDTH) ? TABLETANDUP : PHONE;
  addMenuBtn(iconConfig);

  const logoConfig = isDesktopView(BREAKPOINT_WIDTH) ? ROGO_TABLET : ROGO_PHONE;
  addLogo(logoConfig);

  addCartAtag();
}

/********************************************
 * SVGの設定
 ********************************************/

// fecth関数は開発サーバー（npm run dev）で実行するときはローカルファイルを読み込むことができますが、ビルド後の静的なHTMLファイル（npm run build）では同じ動作をしない。
// これは、ビルド後のファイルはサーバーから提供されるため、ローカルファイルを読み込むことができないためです。
// Change argument from path to data
async function parseSvgData(data) {
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

/********************************************
 * cart(header)の設定
 ********************************************/
function addCartAtag() {
  const headerFlexItems = document.querySelectorAll(".Header__FlexItem.Header__FlexItem--fill");
  clearElementChildren(headerFlexItems[1]);
  const a = createElementWithAttributes("a", config.cartAtagConfig.attributes, config.cartAtagConfig.classes);
  headerFlexItems[1].appendChild(a);

  const spanHiddenPhone = appendChildWithClass(a, "span", ["hidden-phone"]);

  addSvgToSpan(cartPhoneSvg, spanHiddenPhone, ["Icon", "Icon--cart-desktop"], "1.0");

  // 新しいaタグ要素に対してclickイベントリスナーを設定
  a.addEventListener("click", function (event) {
    const pageContainer = document.getElementById(PAGE);
    const sectionCart = document.querySelector(`[data-section-id="cart"]`);
    const html = document.querySelector("html");
    const pageOverlay = document.querySelector(".PageOverlay");
    const sidebarCart = document.querySelector(`[data-drawer-id="sidebar-cart"][data-action="open-drawer"]`);

    event.preventDefault();
    console.log("openSidebarCart is called test");
    // console.log("openSidebarCart is called", a);
    pageOverlay?.classList.toggle("is-visible");
    html.classList.toggle("no-scroll");
    sectionCart.setAttribute("aria-hidden", false);
    sectionCart.setAttribute("tabindex", "-1");
    // disconnectScroll();
    // transitionedイベントを設定して開閉アニメーションが完了した時に特定の動作をトリガーする
    sectionCart.addEventListener("transitionend", function (event) {
      if (event.propertyName !== "transform") return;
      // サイドバー内の最初のフォーカス可能な要素にフォーカスを移す
      const firstFocusableElement = sectionCart.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (firstFocusableElement && isFirstFocus) {
        firstFocusableElement.focus();
        disconnectScroll(); // スクロールを切断
        isFirstFocus = false; // フラグを更新

        // pageContainer内のすべてのフォーカス可能な要素に対してtabindex="-1"を設定
        const focusableElementsInPageContainer = pageContainer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        focusableElementsInPageContainer.forEach((element) => {
          element.setAttribute("tabindex", "-1");
          console.log("Adding pageContainer tabindex=-1");
        });
      }
    });
  });
  return a;
}

// a要素の高さとsvg要素の高さを調整する

// spanの子要素にsvg要素を追加する
async function addSvgToSpan(svgData, span, classNamees, strokeWidth) {
  const svgElement = getSvgCart(svgData, span, classNamees, strokeWidth);
}

async function getSvgCart(svgData, parent, classNames, strokeWidth = "1.0", stroke = "currentColor") {
  const svgParent = parent;
  clearSvgParent(svgParent);

  // SVGデータの解析してsvg要素作成する
  async function parseSvgData(data) {
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(data, "image/svg+xml");
    const svgElement = svgDoc.querySelector("svg");

    if (!svgElement) {
      throw new Error(`No SVG element found in the provided data: ${data}`);
    }

    const pathElements = svgElement.querySelectorAll("path");
    pathElements.forEach((pathElement) => {
      pathElement.setAttribute("fill", "none");
      pathElement.setAttribute("stroke-width", strokeWidth); // Add this line
      pathElement.setAttribute("stroke", "currentColor"); // Add this line
    });
    return svgElement;
  }

  // svg要素のstyleを設定する
  const svgElement = await parseSvgData(svgData);
  setCartSvgStyle(svgParent, svgElement);

  // svg要素のクラスを配列で渡して設定する
  addSvgClass(svgElement, classNames);
}

function setCartSvgStyle(parent, svgElement) {
  const inConfig = isDesktopView(BREAKPOINT_WIDTH) ? LARGECART : SMALLCART;
  // console.log("inConfig", inConfig.width);

  parent.appendChild(svgElement);
  svgElement.setAttribute("viewBox", "0 0 20 20"); // Add this line
  svgElement.setAttribute("width", inConfig.width);
  svgElement.setAttribute("height", inConfig.height);
  svgElement.setAttribute("strokeWidth", inConfig.strokeWidth);

  parent.style.width = inConfig.width;
  parent.style.height = inConfig.height;
  svgElement.style.width = inConfig.width;
  svgElement.style.height = inConfig.height;
}

// SVGのデータを取得して,親span要素に追加する
async function createSvg(svgData) {
  try {
    //   const svgParent = findSvgParent();
    //   clearSvgParent(svgParent);
    //  console.log("svgParent", svgParent);
    // const svgElement = await appendSvgElement(svgData, svgParent);
    const svgElement = await appendSvgElement(svgData);
    // setSvgClassBasedOnWidth(svgElement);
    return svgElement;
  } catch (error) {
    console.error("Error in createSvg:", error);
  }
}

// SVG要素の親要素であるspan要素を見つける,spanの親要素にaタグを追加、aタグの親要素にaタグを追加する
function findSvgParent() {
  const svgParent = document.querySelector(`.${SVG_CART}`);
  if (!svgParent) {
    throw new Error(`No element found with class: ${SVG_CART}`);
  }
  const parentElements = document.querySelectorAll(".Header__FlexItem.Header__FlexItem--fill");
  addAtagToElement(parentElements[1], svgParent);
  return svgParent;
}

// cartのaタグを作成する
function addAtagToElement(parentElement, svgParent) {
  const aTag = document.createElement("a");
  aTag.href = "/cart";
  aTag.classList.add("Header__Icon", "Icon-Wrapper", "Icon-Wrapper--clickable");
  aTag.setAttribute("data-drawer-id", "sidebar-cart");
  aTag.setAttribute("data-action", "open-drawer");
  aTag.setAttribute("aria-label", "カートを開く");
  aTag.appendChild(svgParent);
  parentElement.appendChild(aTag);
}

// svg要素の親要素span要素をクリアする
function clearSvgParent(svgParent) {
  clearElementChildren(svgParent);
}

// SVG要素を作成し、親要素に追加する
// async function appendSvgElement(svgData, svgParent) {
async function appendSvgElement(svgData) {
  // return await createAndAppendSvgElement(svgData, svgParent);
  return await createAndAppendSvgElement(svgData);
}

// 画面の幅に基づいてSVG要素のクラスを設定する
function setSvgClassBasedOnWidth(svgElement) {
  if (window.innerWidth >= BREAKPOINT_WIDTH) {
    svgElement.classList.add("hidden-phone");
  } else {
    svgElement.classList.add("hidden-tablet-and-up");
  }
}

// カートアイコンの高さを調整する
function adjustSvgHeight(svgElement) {
  const cartBtn = document.querySelector(`.${BUTTON_PARENT}`);
  const btnHeight = cartBtn.offsetHeight;
  adjustElementToHeight(svgElement, btnHeight);
  adjustElements();
}

// カートデータを取得して、svg要素を作成する
// async function createAndAppendSvgElement(svgData, parent) {
async function createAndAppendSvgElement(svgData) {
  const svgElement = await parseSvgData(svgData);
  if (!svgElement) {
    throw new Error(`No SVG element created for path: ${svgData}`);
  }
  // parent.appendChild(svgElement);
  return svgElement;
}

/********************************************
 * リサイズの設定
 ********************************************/

let resizeTimeout;

window.addEventListener("resize", async function () {
  headerSettings();
  viewportSettings();
  // adjustContainer();
  handleResize();
});

window.addEventListener("orientationchange", async function () {
  headerSettings();
  viewportSettings();
  // adjustContainer();
  handleResize();
});

function handleResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const typeDevice = isDesktopView(BREAKPOINT_WIDTH) ? TABLETANDUP : PHONE;
    addMenuBtn(typeDevice);
    addCartAtag();

    const logoConfig = isDesktopView(BREAKPOINT_WIDTH) ? "28px" : "18px";
    const imgElements = document.querySelectorAll(".Header__LogoImage");
    imgElements.forEach((imgElement) => {
      imgElement.style.height = logoConfig;
    });

    setHeaderWidth();

    cssVariable(`#${HEADER}`, HEADER_HEIGHT);
    cssVariable(`#${ANNOUNCEMENT}`, ANNOUNCEMENT_HEIGHT);
  }, DEBOUNCE_TIME);
}

// pinSpacerの幅を設定する
function setHeaderWidth() {
  let gap;
  const pinSpacer = document.querySelector(".pin-spacer");
  const header = document.getElementById(HEADER);
  const headerWrapper = document.querySelector(".Header__Wrapper");
  const fullscreen = document.querySelector(".Slideshow--fullscreen");
  const width = document.documentElement.clientWidth;
  const height = headerWrapper.offsetHeight;
  header.style.width = width + "px";
  header.style.maxWidth = width + "px";
  header.style.height = height + "px";
  header.style.maxHeight = height + "px";
  pinSpacer.style.width = width + "px";
  pinSpacer.style.maxWidth = width + "px";
  pinSpacer.style.height = height + "px";
  pinSpacer.style.maxHeight = height + "px";

  if (!fullscreen) return;
  fullscreen.style.top = "";

  gap = adjustFullscreenTop(fullscreen);

  fullscreen.style.top = -gap + "px";
}

// fullscreenのtopの位置を調整する
function adjustFullscreenTop(el) {
  const rect = el.getBoundingClientRect();
  const top = rect.top;
  const announcementHeight = document.querySelector(".AnnouncementBar").offsetHeight;
  const gap = top - announcementHeight;
  return gap;
}

function clearElementChildren(element) {
  if (!element) return; //エラー回避のため暫定的に追加

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

  // const phoneSvg = createHumbergerIcon(typeDevice);
  const tabletAndUpSvg = createHumbergerIcon(typeDevice);

  // btn.appendChild(phoneSvg);
  btn.appendChild(tabletAndUpSvg);
  // tabletAndUpSvg.style.display = "none";
}
// 親要素の高さと幅を調整する
function adjustParentSize(element, newWidth, newHeight) {
  if (!element) return;
  const parent = element.parentNode;
  console.log("width", newWidth);
  console.log("height", newHeight);
  console.log("parent", parent);
  parent.style.height = `${newHeight}px`;
  // parent.style.width = `${newWidth}px`;
  parent.style.width = `${newHeight}px`;
}

function adjustElementSize(element, newWidth, newHeight) {
  // console.log("element", element);

  element.style.width = `${newWidth}px`;
  element.style.height = `${newHeight}px`;
}

// アイコンの高さに合わせて、アイコンの高さを調整する
function adjustElementToHeight(element, targetHeight) {
  // console.log("element", element);

  if (!element) {
    // if (!firstChild) {
    console.log("No element provided to adjustElementToHeight");
    return;
  }
  if (element instanceof SVGSVGElement) {
    const bbox = element.getBBox();
    const aspectRatio = bbox.width / bbox.height;
    const newWidth = aspectRatio * targetHeight;
    adjustElementSize(element, newWidth, targetHeight);
  } else {
    console.log("is not svg", element);
    const aspectRatio = element.offsetWidth / element.offsetHeight;
    const newWidth = aspectRatio * targetHeight;
    adjustElementSize(element, newWidth, targetHeight);
  }
}

// 要素が取得できるまで待機する関数
async function waitForElement(selector, timeout = 3000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const element = document.querySelector(selector);
    if (element) return element;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Element not found: ${selector}`);
}

// ボタンの高さに合わせて、アイコンの高さを調整する
async function adjustElements() {
  const btnParent = document.querySelector(`.${BUTTON_PARENT}`);
  const btnParentHeight = btnParent.offsetHeight;

  // logだけは高さを固定しました。
  const logos = document.querySelectorAll(`.${LOGOE_SELECTOR}`);

  // const cartParent = document.querySelector(`.${SVG_CART}`);

  // const cartParent = await waitForElement(".hidden-tablet-and-up");
  // const cartParent1 = await waitForElement(".hidden-phone");
  // const svgElement = await waitForElement(".Icon--cart");
  // const svgElement1 = await waitForElement(".Icon--cart-desktop");

  // adjustParentSize(cartParent, cartParent.offsetWidth, btnParentHeight);
  // adjustParentSize(cartParent1, cartParent1.offsetWidth, btnParentHeight);

  // adjustParentSize(svgElement, cartParent.offsetWidth, btnParentHeight);
  // adjustParentSize(svgElement1, cartParent.offsetWidth, btnParentHeight);
}

// ウィンドウの高さを取得して、ページの高さを設定する
function viewportSettings() {
  const viewportHeight = window.innerHeight;
  const pageContainer = document.getElementById(PAGE);
  if (pageContainer) pageContainer.style.height = `${viewportHeight}px`;
  setElementHeight("--window-height", viewportHeight);
}

/********************************************
 * 画面の設定
 ********************************************/

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
    // console.log("height", height);

    setElementHeight(property, height);
  }
}
// set css variable
function setElementHeight(property, value) {
  document.documentElement.style.setProperty(property, `${value}px`);
}

// loadするときにセクション合計の高さを取得するためのadjustContainer関数を実行
// window.addEventListener("load", adjustContainer);

// すべてのセクションの高さを合計して、	ScrollTrigger.createでトリガーを作成する
let totalHeight = 0;
function adjustContainer() {
  const allElements = document.body.getElementsByTagName("*");
  // console.log("allElements", allElements);
  const sectionElements = Array.from(allElements).filter((el) => el.id.includes("section"));
  // console.log("sectionElements", sectionElements);
  totalHeight = 0;
  sectionElements.forEach((el) => {
    // console.log("Height of section:  ", el.id, ":", el.offsetHeight);
    totalHeight += el.offsetHeight;
  });
  // console.log("Total height of all sections:", totalHeight);
  return totalHeight;
}

// scroll.jsにtotalHeightを渡す
export const dimensions = {
  get totalHeight() {
    adjustContainer();
    return totalHeight;
  },
};
