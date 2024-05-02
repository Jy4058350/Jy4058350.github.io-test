import Flickity from "flickity-fade";
import Scrollbar from "smooth-scrollbar";
import { config, productpageConfig, registrationConfig, sectionTest3 } from "../helper/index.js";
import { addSvgToBtn } from "../../styles/styles.js";
import closeButtonData from "../../svg/closeButton.js";
import wall_1 from "../../svg/wall_1.js";
import wall_2 from "../../svg/wall_2.js";
import wall_3 from "../../svg/wall_3.js";
import { productPageSetting, testDocsSetting } from "./productPage.js";
import { registrationFormSetting } from "./registrationForm.js";
import { roboResitrationSetting } from "./roboRegistration.js";

function templateSettings() {
  slideSection1();
}

function slideSection2(config) {
  const pageIdElement = document.getElementById(config.section.section2);
  const secEl = addElementToParent("section", pageIdElement, null, config.section2);

  // IDからハイフンを取り除く
  const pageId = pageIdElement.id.replace(/-/g, "");
  // console.log("pageId:", pageId);

  // IDに対応するconfig設定を取得
  const setConfig = config[pageId];
  // console.log("targetConfig is:", setConfig);

  addFlexboxIeFix(secEl, setConfig);
  addCollectionMain(secEl, setConfig);
}

// ⭐️⭐️　テスト用の関数
function section3TestPage() {
  const pageIdElement = document.getElementById(config.section.sectionTest3);
  // console.log("pageIdElement:", pageIdElement);
  const setConfig = sectionTest3;

  testDocsSetting(pageIdElement, setConfig);
}

function productPage() {
  const pageElment = document.getElementById(config.section.productPage);
  console.log("pageElment:", pageElment);

  // 直接configのconstを参照する slideSection2と異なる
  const setConfig = productpageConfig;
  // console.log("setConfig:", setConfig);

  productPageSetting(pageElment, setConfig);
}

function registrationForm() {
  registrationFormSetting();
}

function roboResitration() {
  roboResitrationSetting();
}

// ⭐️⭐️
function addElementToParent(element, parent, classNames, setConfig, index) {
  // console.log("setConfig:", setConfig, element);
  element = document.createElement(element);
  if (classNames) {
    element.classList.add(...classNames);
  }
  parent.appendChild(element);

  addFormId(element, config.section2.idInsertString);

  if (element.tagName === "SECTION") {
    // console.log("tagName is section", element);
    const sectionIds = Object.keys(config.section).map((key) => config.section[key]);
    const sectionId = sectionIds.find((id) => id === parent.id);
    // console.log("sectionId:", sectionId);
    element.setAttribute("data-section-id", sectionId);
  }

  if (element.tagName === "NOSCRIPT") {
    let ancestor = parent;
    let textContent = config.section2.noscript;
    while (ancestor && !ancestor.hasAttribute("data-section")) {
      // console.log("ancestor:", ancestor);
      const ancestorClassNames = ancestor.className.split(" ");
      // console.log("ancestorClassName:", ancestorClassNames);

      for (let i = 0; i < ancestorClassNames.length; i++) {
        const ancestorClassName = ancestorClassNames[i];
        if (config.section2[ancestorClassName] && config.section2[ancestorClassName].noscript) {
          textContent = config.section2[ancestorClassName].noscript;
          break;
        }
      }
      ancestor = ancestor.parentElement;
    }
    element.textContent = textContent;
  }

  function findHrefInConfig(setConfig, hrefMap, parentKey = null) {
    for (let key in setConfig) {
      if (typeof setConfig[key] === "object") {
        findHrefInConfig(setConfig[key], hrefMap, key);
      } else if (key === "href" && parentKey) {
      }
      hrefMap.set(parentKey, setConfig[key]);
    }
    // console.log("hrefMap:", hrefMap);
  }
  if (element.tagName === "A") {
    // console.log("setConfig:", setConfig, element);
    let hrefMap = new Map();
    findHrefInConfig(setConfig, hrefMap, null);

    for (let className of element.classList) {
      if (hrefMap.has(className)) {
        element.href = hrefMap.get(className);
        break; // 最初にマッチしたクラス名のhrefを見つけたらループを抜ける
      }
    }
    // もしA要素のクラスが空の要素である場合の処理
    if (element.classList.length === 0) {
      // ２階層上の親要素を取得して、その前の要素のa要素を取得する
      let grandparent = element.parentElement.parentElement;
      // console.log("grandparent:", grandparent);
      const previousSiblingAtag = grandparent.previousSibling;
      if (previousSiblingAtag.tagName !== "A") {
        console.error("previousSiblingAtag is not A tag");
      } else {
        // console.log("previousSiblingAtag:", previousSiblingAtag);
        const insertHref = previousSiblingAtag.href;
        let absoluteUrl = new URL(insertHref);
        let relativeUrl = absoluteUrl.pathname + absoluteUrl.search + absoluteUrl.hash;
        // console.log("relativeUrl:", relativeUrl);
        element.href = relativeUrl;
        // console.log(relativeUrl);

        //　urlを利用してinfoの説明をheader用に設定する
        let pathArray = relativeUrl.split("/");
        // console.log("pathArray:", pathArray);
        let lastSegment = pathArray[pathArray.length - 1];
        // console.log("lastSegment:", lastSegment);
        let info = lastSegment.charAt(0).toUpperCase() + lastSegment.substring(1);
        // console.log("info:", info);
        element.textContent = info;
      }
    }
  }

  if (element.tagName === "IMG") {
    // console.log("setConfig:", setConfig, element);

    let srcsetMap = new Map();
    for (let key in setConfig) {
      if (setConfig[key].srcset) {
        srcsetMap.set(key, setConfig[key]);
      }
      // console.log("srcsetMap:", srcsetMap);
    }
    let srcset;

    // console.log("element.classList:", element.classList);
    for (let className of element.classList) {
      if (srcsetMap.has(className)) {
        let matchedConfig = srcsetMap.get(className);
        srcset = matchedConfig.srcset[index];
        break;
      }
    }
    if (srcset) {
      element.srcset = srcset;
    } else {
      // console.error("srcset not found");
    }
  }

  if (element.tagName === "SOURCE") {
    parent.style.display = "none";
    element.setAttribute("srcset", "../img/yamadera.jpeg");
  }

  return element;
}

function addCollectionMain(el, setConfig) {
  const collectionMainElement = addElementToParent("div", el, ["CollectionMain"]);

  const { collectionToolbarElement, collectionToolbarGroupElement, collectionToolbarItemElement } = addCollectionToolbarElement(collectionMainElement);

  const collectionInnerElement = addElementToParent("div", collectionMainElement, ["CollectionInner"]);

  const CollectionInnerSidebarElement = addElementToParent("div", collectionInnerElement, [
    "CollectionInner__Sidebar",
    "CollectionInner__Sidebar--withTopToolbar",
    "hidden-pocket",
  ]);

  const collectionFiltersElement = addElementToParent("div", CollectionInnerSidebarElement, ["CollectionFilters"]);
  const collectionFilltersFormElement = addElementToParent("form", collectionFiltersElement, ["collection-filters-form"]);

  const collapsible = addCollectionFilltersFormCollapsible(el);
  const collapsible1 = addCollectionFilltersFormCollapsible(el);
  const collapsible2 = addCollectionFilltersFormCollapsible(el);

  addCollectionInnerProduct(collectionInnerElement, setConfig);
}

// collectionInnerProductを作成する
function addCollectionInnerProduct(element, setConfig) {
  const CollectionInnerProductsElement = addElementToParent("div", element, ["CollectionInner__Products"]);
  const productListWrapper = addElementToParent("div", CollectionInnerProductsElement, ["ProductListWrapper"]);
  const pagination = addElementToParent("div", CollectionInnerProductsElement, ["Pagination", "Text--subdued"]);
  const productList = addElementToParent("div", productListWrapper, ["ProductList", "ProductList--grid", "ProductList--removeMargin", "Grid"]);
  const paginationNav = addElementToParent("div", pagination, ["Pagination__Nav"]);

  // const gridCell = addElementToParent("div", productList, ["Grid__Cell", "1/2--phone", "1/3--tablet-and-up", "1/4--desk"]);
  // grid create
  const numGridCells = 6;
  for (let i = 0; i < numGridCells; i++) {
    const gridCell = addElementToParent("div", productList, ["Grid__Cell", "1/2--phone", "1/3--tablet-and-up", "1/4--desk"]);
    // 各gridCellに対応するproductItemを作成
    const productItem = addElementToParent("div", gridCell, ["ProductItem"]);
    const productItemWrapper = addElementToParent("div", productItem, ["ProductItem__Wrapper"]);
    const productItemImageWrapper = addElementToParent(
      "a",
      productItemWrapper,
      ["ProductItem__ImageWrapper", "ProductItem__ImageWrapper--withAlternateImage"],
      setConfig
    );
    const aspectRatio = addElementToParent("div", productItemImageWrapper, ["AspectRatio", "AspectRatio--withFallback"]);
    addElementToParent("img", aspectRatio, ["ProductItem__Image", "ProductItem__Image--alternate", "Image--fadeIn", "lazyautosizes", "Image--lazyLoaded"]);
    addElementToParent("img", aspectRatio, ["ProductItem__Image", "Image--fadeIn", "lazyautosizes", "Image--lazyLoaded"]);
    addElementToParent("span", aspectRatio, ["Image__Loader"]);
    // ⭐️⭐️noscript要素を追加する関数の改修を検討する
    addElementToParent("noscript", aspectRatio);
    const productItemInfo = addElementToParent("div", productItemWrapper, ["ProductItem__Info", "ProductItem__Info--left"]);
    const productItemTitle = addElementToParent("h2", productItemInfo, ["ProductItem__Title", "Heading"]);
    addElementToParent("a", productItemTitle, null, setConfig);
  }
}

// collectionToolbarElementを作成する
async function addCollectionToolbarElement(parent) {
  const collectionToolbarElement = addElementToParent("div", parent, ["CollectionToolbar", "CollectionToolbar--top", "CollectionToolbar--reverse"]);
  const collectionToolbarGroupElement = addElementToParent("div", collectionToolbarElement, ["CollectionToolbar__Group"]);
  const collectionToolbarItemElement = addElementToParent("div", collectionToolbarElement, ["CollectionToolbar__Item", "CollectionToolbar__Item--layout"]);

  addElementToParent("button", collectionToolbarGroupElement, [
    "CollectionToolbar__Item",
    "CollectionToolbar__Item--filter",
    "Heading",
    "Text--subdued",
    "u-h6",
    "hidden-lap-and-up",
  ]).textContent = "絞り込み";

  const collectionToolbarItemSortElement = await addElementToParent("button", collectionToolbarGroupElement, [
    "CollectionToolbar__Item",
    "CollectionToolbar__Item--sort",
    "Heading",
    "Text--subdued",
    "u-h6",
  ]);
  // console.log(collectionToolbarItemSortElement);
  // collectionToolbarItemSortElement.textContent = "並び替え";

  collectionToolbarItemSortElement.textContent = "並び替え";

  // collectionToolbarItemSortElementにsvgを追加する
  await addSvgToBtn(closeButtonData, collectionToolbarItemSortElement, ["Icon", "Icon--select-arrow"], config.svgStyle.default);

  const collectionToolbarLayoutSwitchPhoneElement = addElementToParent("div", collectionToolbarItemElement, [
    "CollectionToolbar__LayoutSwitch",
    "hidden-tablet-and-up",
  ]);
  const collectionToolbarLayoutSwitchTabletElement = addElementToParent("div", collectionToolbarItemElement, [
    "CollectionToolbar__LayoutSwitch",
    "hidden-phone",
  ]);

  // ⭐️⭐️ js制御でaria-labelを追加する実装を検討する
  const collectionToolbarLayoutTypeElement = addElementToParent("button", collectionToolbarLayoutSwitchPhoneElement, ["CollectionToolbar__LayoutType"]);
  const collectionToolbarLayoutTypeElement1 = addElementToParent("button", collectionToolbarLayoutSwitchPhoneElement, [
    "CollectionToolbar__LayoutType",
    "is-active",
  ]);
  // console.log("svgStyle:", config.svgStyle.wall);
  await addSvgToBtn(wall_1, collectionToolbarLayoutTypeElement, ["Icon", "Icon--wall-1"], config.svgStyle.wall);
  await addSvgToBtn(wall_2, collectionToolbarLayoutTypeElement1, ["Icon", "Icon--wall-2"], config.svgStyle.wall);

  const collectionToolbarLayoutType1 = addElementToParent("button", collectionToolbarLayoutSwitchTabletElement, ["CollectionToolbar__LayoutType"]);
  const collectionToolbarLayoutTypeTElement = addElementToParent("button", collectionToolbarLayoutSwitchTabletElement, [
    "CollectionToolbar__LayoutType",
    "is-active",
  ]);
  await addSvgToBtn(wall_2, collectionToolbarLayoutType1, ["Icon", "Icon--wall-2"], config.svgStyle.wall);
  await addSvgToBtn(wall_3, collectionToolbarLayoutTypeTElement, ["Icon", "Icon--wall-3"], config.svgStyle.wall);

  return { collectionToolbarElement, collectionToolbarGroupElement, collectionToolbarItemElement };
}

// section2のcollection-fillters-form専用のcollapsibleを作成する
function addCollectionFilltersFormCollapsible(sec) {
  const collectionFilltersForm = sec.querySelector(".collection-filters-form");

  const collapsible = addElementToParent("div", collectionFilltersForm, ["Collapsible", "Collapsible--padded", "Collapsible--autoExpand"]);
  //   console.log(collapsible);
  const buttonElement = addElementToParent("button", collapsible, ["Collapsible__Button", "Heading", "u-h6"]);
  buttonElement.textContent = "Filter";

  addElementToParent("span", buttonElement, ["Collapsible__Plus"]);
  // innerがない場合は、innerを作成する

  const inner = addElementToParent("div", collapsible, ["Collapsible__Inner"]);
  const innerContent = addElementToParent("div", inner, ["Collapsible__Content"]);
  const linkList = addElementToParent("ul", innerContent, ["Linklist"]);
  // ⭐️⭐️li追加はクラスを検討したほうがよいかも
  const li = addElementToParent("li", linkList, ["Linklist__Item"]);
  addElementToParent("input", li, ["Linklist__Checkbox", "u-visually-hidden"]);
  addElementToParent("label", li, ["Text--subdued", "Link", "Link--primary"]).textContent = "在庫あり";
  const li1 = addElementToParent("li", linkList, ["Linklist__Item"]);
  addElementToParent("input", li1, ["Linklist__Checkbox", "u-visually-hidden"]);
  addElementToParent("label", li1, ["Text--subdued", "Link", "Link--primary"]).textContent = "在庫なし";
}

function addFlexboxIeFix(el, setConfig) {
  // const parent = document.getElementById(SECTION2);
  const parent2 = addElementToParent("div", el, ["FlexboxIeFix"]);
  const parent3 = addElementToParent("header", parent2, ["PageHeader", "PageHeader--withBackground", "PageHeader--large"]);
  const parent4 = addElementToParent("div", parent3, ["PageHeader__ImageWrapper", "Image--fadeIn", "Image--contrast", "Image--lazyLoaded"]);
  const parent5 = addElementToParent("picture", parent4);
  addElementToParent("source", parent5);
  addElementToParent("img", parent5, ["lazyautosizes", "Image--lazyLoaded"]);
  //   console.log(parent3);
  addBackgroundImage(parent4, "../img/yamadera.jpeg");

  checkBackgroundImageLoad(parent4);

  addElementToParent("noscript", parent3);

  addContainerElement(parent3);
}

// Container要素を作成する
function addContainerElement(el) {
  const container = addElementToParent("div", el, ["Container"]);
  const parent = addElementToParent("div", container, ["SectionHeader", "SectionHeader--center"]);
  addElementToParent("h1", parent, ["SectionHeader__Heading", "Heading", "u-h1"]).textContent = "Yamadera";
  const parent2 = addElementToParent("div", parent, ["SectionHeader__Description", "Rte"]);
  const parent3_1 = addElementToParent("div", parent2);
  parent3_1.style["text-align"] = "center";
  addElementToParent("br", parent3_1);
  const parent3_2 = addElementToParent("div", parent2);
  parent3_2.style["text-align"] = "center";
  const img = addElementToParent("img", parent3_2);
  img.src = "../one_logo.png";
  //   img.style.margin = "0 0 0 0";
  img.style.float = "none";
  const parent3_3 = addElementToParent("div", parent2);
  parent3_3.style["text-align"] = "center";
  addElementToParent("span", parent3_3).textContent = "Yamadera is a scenic temple.";
  const parent3_4 = addElementToParent("div", parent2);
  parent3_4.style["text-align"] = "center";
  addElementToParent("span", parent3_4).innerHTML = "Its beautiful views.&nbsp;";
  addElementToParent("span", parent3_4).innerHTML = "Peaceful walk.&nbsp;";
  addElementToParent("span", parent3_4).innerHTML = "Number of cultural artifacts. ";
}

// elementがform要素である場合にidを設定する
function addFormId(element, insertString) {
  if (element.tagName === "FORM") {
    let classNameParts = element.className.split("-");
    // console.log("classNameParts:", classNameParts);
    classNameParts.splice(classNameParts.length - 1, 0, insertString);
    // console.log("classNameParts:", classNameParts);
    element.id = classNameParts.join("-");
    // console.log("element.id:", element.id);
  }
}

// imgをbackground-imageで表示させる
function addBackgroundImage(element, src) {
  //   console.log("element:", element);
  element.style.backgroundImage = `url(${src})`;
  element.style.transform = "translate3d(0px, 0px, 0px)";

  const pageContainer = document.querySelector("#pageContainer");
  scrollBackgroundImage(pageContainer, element);
}

// background-imgaeのスクロールを制御する
function scrollBackgroundImage(element, element2) {
  // 新しいscrollbarオブジェクトを定義する
  const scrollbar = Scrollbar.init(element);
  //   console.log("scrollbar:", scrollbar);

  scrollbar.addListener((status) => {
    // スクロールを1.5で割る
    const pos = status.offset.y / 1.5;

    element2.style.transform = `translate3d(0px, ${pos}px, 0px)`;
  });
}

// 背景画像が正しくロードされたかどうかを確認する
function checkBackgroundImageLoad(element) {
  const backgroundImage = element.style.backgroundImage;
  const url = backgroundImage.replace(/(^url\()|(\)$|"|')/g, "");

  // Imageオブジェクトを作成する
  const img = new Image();
  img.src = url;
  //   console.log(img.src);

  // 画像のロードが成功した場合の処理
  img.onload = function () {
    // console.log("Image loaded successfully");
  };

  // 画像のロードが失敗した場合の処理
  img.onerror = function () {
    console.log("Failed to load image");
    const pictureElement = element.querySelector("picture");
    if (pictureElement) {
      pictureElement.style.display = "block";
    }
  };
}

function slideSection1() {
  const flkty = flickityInit();
  dotsSettings(flkty);
  CarouselCellSettings(flkty);
  flkty.select(4);
  setTimeout(() => flkty.select(0), 0);
}

/********************************************
 * Flickityの初期化
 ********************************************/

function flickityInit() {
  // optionsを設定する
  const options = {
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

        // セクションヘッダー（コンテンツ）の表示をスライドの進展毎に設定する
        const sectionHeaders = document.querySelectorAll(".SectionHeader");
        sectionHeaders.forEach((header, headerIndex) => {
          setTimeout(() => {
            if (headerIndex === index) {
              header.style.visibility = "visible";
              header.style.opacity = "1";
              header.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
              header.style.transition = "all 0.7s ease-in-out";
            } else {
              header.style.visibility = "hidden";
              header.style.opacity = "0";
              header.style.transform = "matrix(1, 0, 0, 1, 0, 20)";
              header.style.transition = "all 0.7s ease-in-out";
            }
          }, 500);
        });

        const sectionHeaderBtns = document.querySelectorAll(".SectionHeader__ButtonWrapper");
        sectionHeaderBtns.forEach((btn, btnIndex) => {
          setTimeout(() => {
            if (btnIndex === index) {
              btn.style.visibility = "visible";
              btn.style.opacity = "1";
              btn.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
              btn.style.transition = "all 0.7s ease-in-out";
            } else {
              btn.style.visibility = "hidden";
              btn.style.opacity = "0";
              btn.style.transform = "matrix(1, 0, 0, 1, 0, 20)";
              btn.style.transition = "all 0.7s ease-in-out";
            }
          }, 700);
        });
      },
    },
  };
  // Slideshow__Carousel Carousel Carousel--fadeIn Carousel--fixed Carousel--insideDots flickity-enabled is-draggable
  // const elem = document.querySelector(".Slideshow-Carousel");
  const elem = document.querySelector(".Carousel");
  // console.log("elem:", elem);
  // optionsをJSON形式で表示する
  const optionsStr = JSON.stringify(options, null, 2);
  // elemのdata-flickity属性にoptionsを設定する
  elem.setAttribute("data-flickity-config", optionsStr);

  const flkty = new Flickity(elem, options);

  // カルーセルの高さを固定して、画像の高さを調整する
  elem.classList.add("Carousel--fixed");
  // console.log("flkty:", flkty);
  return flkty;
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
          // console.log("disconnected");
          addChileElementClass();
          // showHeader();
        }
      }
    });
  });
  observer.observe(document, { childList: true, subtree: true });
}

// lerp関数を作成する
function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

// Slideshow__ImageContainer hidden-tablet-and-upの子要素に<img>要素を作成する
function createImage(div, src) {
  const img = document.createElement("img");
  img.alt = "yamadera";
  img.classList.add("Slideshow__Image", "lazyautosizes", "Image--lazyLoaded");
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

export {
  templateSettings,
  slideSection2,
  productPage,
  addElementToParent,
  flickityInit,
  CarouselCellSettings,
  lerp,
  dotsSettings,
  section3TestPage,
  registrationForm,
  roboResitration,
};
