import Flickity from "flickity-fade";
import { productpageConfig, config } from "../helper/config.js";
import { addElementToParent, CarouselCellSettings, lerp, dotsSettings } from "./section.js";
import { addSvgToBtn } from "../../styles/styles.js";
import arrowPrevious from "../../svg/arrowPrevious.js";
import arrowNext from "../../svg/arrowNext.js";
import minus from "../../svg/minus.js";
import plus from "../../svg/plus.js";
const classNames = productpageConfig.classNames;

let hasRan = false;

async function productPageSetting(pageEl, setConfig) {
  const { quantitySelectorButtonDecrease, quantitySelectorButtonIncrease } = await docsSetting(pageEl, setConfig);

  const { flkty, flickityViewport, flickityPageDots } = flickitySetting(setConfig);
  const { productSlideshowNavArrowPrev, productSlideshowNavArrowNext } = setFlickityPageDots(flickityPageDots);
  prevBtnInit(productSlideshowNavArrowPrev, flkty);
  nextBtnInit(productSlideshowNavArrowNext, flkty);
  adjustViewportHeigh(flickityViewport);
  flkty.select(4);
  setTimeout(() => flkty.select(0), 0);
  decreaseBtnInit(quantitySelectorButtonDecrease);
  increaseBtnInit(quantitySelectorButtonIncrease);
}

async function decreaseBtnInit(button) {
  const svg = await addSvgToBtn(
    minus,
    button,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormQuantitySelector.quantitySelector.quantitySelectorButton.icon,
    config.svgStyle.minus
  );
}

function increaseBtnInit(button) {
  const svg = addSvgToBtn(
    plus,
    button,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormQuantitySelector.quantitySelector.quantitySelectorButton.icon,
    config.svgStyle.plus
  );
}

// 🔸テスト関数　ここから

function processProperties(sectionId, currentObject, parentkey = null) {
  let newParentId = sectionId;
  const properties = Object.keys(currentObject);
  properties.forEach((property) => {
    const propertyValue = currentObject[property];
    // console.log(propertyValue);
    if (Array.isArray(propertyValue)) {
      // console.log("array is ", propertyValue);
      // console.log("parent key is ", parentkey);
      const tag = parentkey.replace(/_.*/, "");
      // console.log("tag is ", tag);
      newParentId = addElementToParent(tag, newParentId, propertyValue);
    } else if (typeof propertyValue === "object" && propertyValue !== null) {
      // console.log(Object.keys(propertyValue));
      processProperties(newParentId, propertyValue, property);
    }
  });
}

function testDocsSetting(sectionId, testConfig) {
  // console.log("testConfig:", testConfig);
  // console.log(testConfig.classNames);
  // console.log(sectionId);
  processProperties(sectionId, testConfig.classNames);
}

// 🔸テスト関数 ここまで

function flickitySetting(setConfig) {
  // const options = productpageConfig.flickityOptions;
  const options = {
    prevNextButtons: false,
    pageDots: true,
    adaptiveHeight: false,
    // watchCSS: true,
    dragThreshold: 15,

    setGallerySize: false,
    wrapAround: true,
    pauseAutoPlayOnHover: false,
    autoPlay: false,
    fade: true,
    contain: true,

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
  const carousel = document.querySelector(".Carousel");
  // console.log(carousel);
  const optionsStr = JSON.stringify(options, null, 2);
  carousel.setAttribute("data-flickity-config", optionsStr);
  const flkty = new Flickity(carousel, options);

  const flickityViewport = document.querySelector(".flickity-viewport");
  const flickitySlider = document.querySelector(".flickity-slider");
  const flickityPageDots = document.querySelector(".flickity-page-dots");
  // ⭐️⭐️heightの設定はどのように行うか検討が必要 画像のアスペクト比を保持するためにはどのように設定するか検討が必要
  flickityViewport.style.height = "600px";

  return { flkty, flickityViewport, flickitySlider, flickityPageDots };
}

function setFlickityPageDots(dots) {
  const dotsChilds = Array.from(dots.children);
  // console.log(dotsChilds);
  dotsChilds.forEach((dot) => {
    dot.classList.add("dot");
    dot.classList.remove("flickity-page-dot");
    dot.textContent = "";
  });
  const productGallery = document.querySelector(".Product__Gallery");
  const productSlideshowMobileNav = addElementToParent("div", productGallery, classNames.productGallery.productSlideshowMobileNav.base);
  const productSlideshowNavArrowPrev = addElementToParent(
    "button",
    productSlideshowMobileNav,
    classNames.productGallery.productSlideshowMobileNav.productSlideshowNavArrowPrev.base
  );
  // const flickityPageDots = addElementToParent("div", productSlideshowMobileNav, classNames.productGallery.productSlideshowMobileNav.flickityPageDots.base);
  productSlideshowMobileNav.appendChild(dots);
  const productSlideshowNavArrowNext = addElementToParent(
    "button",
    productSlideshowMobileNav,
    classNames.productGallery.productSlideshowMobileNav.productSlideshowNavArrowNext.base
  );
  // console.log(productSlideshowMobileNav);

  return { productSlideshowNavArrowPrev, productSlideshowNavArrowNext };
}

async function prevBtnInit(button, flkty) {
  const svg = await addSvgToBtn(arrowPrevious, button, ["Icon", "Icon--media-arrow-left"], config.svgStyle.arrowPrevious);
  button.addEventListener("click", () => {
    flkty.previous();
  });
}

async function nextBtnInit(button, flkty) {
  const svg = addSvgToBtn(arrowNext, button, ["Icon", "Icon--media-arrow-right"], config.svgStyle.arrowNext);
  button.addEventListener("click", () => {
    flkty.next();
  });
}

function adjustViewportHeigh(viewport) {
  const viewportWidth = viewport.clientWidth;
  const imgs = document.querySelectorAll(".Product__SlideItem--image img");
  let aspectRatio;
  imgs.forEach((img, index) => {
    aspectRatio = img.naturalWidth / img.naturalHeight;
    img.style.height = `${viewportWidth / aspectRatio}px`;
    if (index === 0) {
      viewport.style.height = `${viewportWidth / aspectRatio}px`;
    }
  });
}

async function docsSetting(pageEl, setConfig) {
  const product = addElementToParent("section", pageEl, classNames.product);
  const productWrapper = addElementToParent("div", product, classNames.productWrapper.base);
  addElementToParent("div", product, classNames.productOffScreen);
  const productGallery = addElementToParent("div", productWrapper, classNames.productGallery.base);
  const productInfoWrappe = addElementToParent("div", productWrapper, classNames.productInfoWrapper.base);
  const productAside = addElementToParent("div", productWrapper, classNames.productAside.base);
  addElementToParent("span", productGallery, classNames.productGallery.anchor);
  const productSlideshowNavthumbnails = addElementToParent("div", productGallery, classNames.productGallery.productSlideshowNavthumbnails.base);
  const productSlideshowNavScroller = addElementToParent(
    "div",
    productSlideshowNavthumbnails,
    classNames.productGallery.productSlideshowNavthumbnails.productSlideshowNavScroller.base
  );
  const productSlideshowNavImage = addElementToParent(
    "a",
    productSlideshowNavScroller,
    classNames.productGallery.productSlideshowNavthumbnails.productSlideshowNavScroller.Product__SlideshowNavImage.base,
    setConfig
  );
  // ⭐️imgの実装詳細の検討が必要

  addElementToParent("img", productSlideshowNavImage, undefined, setConfig);
  const productSlideshowNavdots = addElementToParent("div", productGallery, classNames.productGallery.productSlideshowNavdots.base);
  // ⭐️変数名が同じなので１をつけているが、適切な名前に変更するか関数化することを検討
  const productSlideshowNavScroller1 = addElementToParent(
    "div",
    productSlideshowNavdots,
    classNames.productGallery.productSlideshowNavdots.productSlideshowNavScroller.base
  );
  addElementToParent(
    "a",
    productSlideshowNavScroller1,
    classNames.productGallery.productSlideshowNavdots.productSlideshowNavScroller.Product__SlideshowNavDot.base,
    setConfig
  );

  const productSlideshow = addElementToParent("div", productGallery, classNames.productGallery.productSlideshow.base);
  for (let i = 0; i < productpageConfig.productPage.CarouselCells.num; i++) {
    const productSlideItem = addElementToParent("div", productSlideshow, classNames.productGallery.productSlideshow.productSlideItem.base);
    const aspectRatio = addElementToParent("div", productSlideItem, classNames.productGallery.productSlideshow.productSlideItem.aspectRatio.base);
    addElementToParent("img", aspectRatio, classNames.productGallery.productSlideshow.productSlideItem.aspectRatio.imageFadeIn, setConfig, i);
    addElementToParent("span", aspectRatio, classNames.productGallery.productSlideshow.productSlideItem.aspectRatio.imageLoader);
    //⭐️imgのnoscriptは制御の検討が必要
    addElementToParent("noscript", aspectRatio);
    productSlideItem.style.position = "absolute";
  }

  const productInfo = addElementToParent("div", productInfoWrappe, classNames.productInfoWrapper.productInfo.base);
  const container = addElementToParent("div", productInfo, classNames.productInfoWrapper.productInfo.container.base);
  // ⭐️⭐️formの実装詳細の検討が必要
  const productForm = addElementToParent("form", container, classNames.productInfoWrapper.productInfo.container.productForm.base);
  // ⭐️⭐️inputの実装詳細の検討が必要　type属性は同じ、name属性,value属性は異なる
  const productFormInput = addElementToParent("input", productForm);
  productFormInput.type = "hidden";
  const productFormInput1 = addElementToParent("input", productForm);
  productFormInput1.type = "hidden";
  // ⭐️このscript要素？？はどのように実装するか検討が必要、type属性とdata-product-jsonがある
  addElementToParent("script", productForm);
  const productMeta = addElementToParent("div", productForm, classNames.productInfoWrapper.productInfo.container.productForm.productMeta.base);
  const productMetaTitle = addElementToParent("h1", productMeta, classNames.productInfoWrapper.productInfo.container.productForm.productMeta.productMetaTitle);
  productMetaTitle.textContent = "Product Title";
  const productMetaPriceList = addElementToParent(
    "div",
    productMeta,
    classNames.productInfoWrapper.productInfo.container.productForm.productMeta.productMetaPriceList.base
  );
  const productMetaPrice = addElementToParent(
    "span",
    productMetaPriceList,
    classNames.productInfoWrapper.productInfo.container.productForm.productMeta.productMetaPriceList.productMetaPrice.base
  );

  const yen = addElementToParent(
    "span",
    productMetaPrice,
    classNames.productInfoWrapper.productInfo.container.productForm.productMeta.productMetaPriceList.productMetaPrice.yen
  );
  yen.textContent = "¥";
  productMetaPrice.appendChild(document.createTextNode("10,000"));

  const productMetaUnitPriceMeasurement = addElementToParent(
    "div",
    productMeta,
    classNames.productInfoWrapper.productInfo.container.productForm.productMeta.productMetaUnitPriceMeasurement.base
  );
  const unitPriceMeasurement = addElementToParent(
    "div",
    productMetaUnitPriceMeasurement,
    classNames.productInfoWrapper.productInfo.container.productForm.productMeta.productMetaUnitPriceMeasurement.unitPriceMeasurement.base
  );
  const unitPriceMeasurementPrice = addElementToParent(
    "span",
    unitPriceMeasurement,
    classNames.productInfoWrapper.productInfo.container.productForm.productMeta.productMetaUnitPriceMeasurement.unitPriceMeasurement.unitPriceMeasurementPrice
  );
  const unitPriceMeasurementSeparator = addElementToParent(
    "span",
    unitPriceMeasurement,
    classNames.productInfoWrapper.productInfo.container.productForm.productMeta.productMetaUnitPriceMeasurement.unitPriceMeasurement
      .unitPriceMeasurementSeparator
  );
  const unitPriceMeasurementReferenceValue = addElementToParent(
    "span",
    unitPriceMeasurement,
    classNames.productInfoWrapper.productInfo.container.productForm.productMeta.productMetaUnitPriceMeasurement.unitPriceMeasurement
      .unitPriceMeasurementReferenceValue
  );
  const unitPriceMeasurementReferenceUnit = addElementToParent(
    "span",
    unitPriceMeasurement,
    classNames.productInfoWrapper.productInfo.container.productForm.productMeta.productMetaUnitPriceMeasurement.unitPriceMeasurement
      .unitPriceMeasurementReferenceUnit
  );
  const productFormVariants = addElementToParent("div", productForm, classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.base);

  // ⭐️⭐️ループ処理の検討が必要

  const productFormOption = addElementToParent(
    "div",
    productFormVariants,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.productFormOption.base
  );
  addElementToParent(
    "span",
    productFormOption,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.productFormOption.productFormLabel
  );
  const sizeSwatchList = addElementToParent(
    "ul",
    productFormOption,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.productFormOption.sizeSwatchList.base
  );
  const sizes = ["S", "M", "L", "XL"];
  for (let i = 0; i < sizes.length; i++) {
    const horizontalListItem = addElementToParent(
      "li",
      sizeSwatchList,
      classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.productFormOption.sizeSwatchList.horizontalListItem.base
    );
    addElementToParent(
      "input",
      horizontalListItem,
      classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.productFormOption.sizeSwatchList.horizontalListItem.sizeSwatchRadio
    );
    const sizeSwatch = addElementToParent(
      "label",
      horizontalListItem,
      classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.productFormOption.sizeSwatchList.horizontalListItem.sizeSwatch
    );
    sizeSwatch.textContent = sizes[i];
  }

  //   const horizontalListItem = addElementToParent(
  //     "li",
  //     sizeSwatchList,
  //     classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.productFormOption.sizeSwatchList.horizontalListItem.base
  //   );
  //   addElementToParent(
  //     "input",
  //     horizontalListItem,
  //     classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.productFormOption.sizeSwatchList.horizontalListItem.sizeSwatchRadio
  //   );
  //  const sizeSwatch = addElementToParent(
  //     "label",
  //     horizontalListItem,
  //     classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.productFormOption.sizeSwatchList.horizontalListItem.sizeSwatch
  //   );
  //   sizeSwatch.textContent = "S";

  const productFormOption1 = addElementToParent(
    "div",
    productFormVariants,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.productFormOption1.base
  );
  const productFormLabel = addElementToParent(
    "span",
    productFormOption1,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.productFormOption1.productFormLabel.base
  );
  productFormLabel.textContent = "color: ";
  const productFormSelectedValue = addElementToParent(
    "span",
    productFormLabel,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.productFormOption1.productFormLabel.productFormSelectedValue
  );
  productFormSelectedValue.textContent = "Black";

  const colorSwatchList = addElementToParent(
    "ul",
    productFormOption1,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.productFormOption1.colorSwatchList.base
  );
  const horizontalListItem1 = addElementToParent(
    "li",
    colorSwatchList,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.productFormOption1.colorSwatchList.horizontalListItem.base
  );
  addElementToParent(
    "input",
    horizontalListItem1,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.productFormOption1.colorSwatchList.horizontalListItem.colorSwatchRadio
  );
  const colorSwatch = addElementToParent(
    "label",
    horizontalListItem1,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.productFormOption1.colorSwatchList.horizontalListItem.colorSwatch.base
  );
  addElementToParent(
    "span",
    colorSwatch,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.productFormOption1.colorSwatchList.horizontalListItem.colorSwatch
      .uVisuallyHidden
  );
  addElementToParent("img", colorSwatch);

  const noJs = addElementToParent("div", productFormVariants, classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.noJs.base);
  const select = addElementToParent("select", noJs, classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.noJs.select.base);
  addElementToParent("svg", select, classNames.productInfoWrapper.productInfo.container.productForm.productFormVariants.noJs.select.Icon);
  // ⭐️⭐️selectのoptionの実装詳細の検討が必要
  addElementToParent("select", select);

  const sameProducts = addElementToParent("div", productForm, classNames.productInfoWrapper.productInfo.container.productForm.sameProducts.base);

  // ⭐️imgの実装詳細の検討が必要
  for (let i = 0; i < 2; i++) {
    const sameProduct = addElementToParent("a", sameProducts, classNames.productInfoWrapper.productInfo.container.productForm.sameProducts.sameProduct.base);
    const sameProductImg = addElementToParent(
      "img",
      sameProduct,
      classNames.productInfoWrapper.productInfo.container.productForm.sameProducts.sameProduct.sameProductImg,
      setConfig,
      i
    );
  }

  const productFormQuantitySelector = addElementToParent(
    "div",
    productForm,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormQuantitySelector.base
  );

  const quantitySelector = addElementToParent(
    "div",
    productFormQuantitySelector,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormQuantitySelector.quantitySelector.base
  );
  const quantitySelectorButtonDecrease = addElementToParent(
    "button",
    quantitySelector,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormQuantitySelector.quantitySelector.quantitySelectorButton.base
  );

  // ⭐️ここは2つ実装している
  // addElementToParent(
  //   "svg",
  //   quantitySelectorButtonDecrease,
  //   classNames.productInfoWrapper.productInfo.container.productForm.productFormQuantitySelector.quantitySelector.quantitySelectorButton.icon
  // );
  const quantitySelectorCurrentQuantity = addElementToParent(
    "input",
    quantitySelector,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormQuantitySelector.quantitySelector.quantitySelectorButton
      .quantitySelectorCurrentQuantity
  );
  // ⭐️value属性の設定が必要
  quantitySelectorCurrentQuantity.value = "1";

  // ⭐️⭐️buttonの実装詳細の検討が必要（定型化できるか検討）
  const quantitySelectorButtonIncrease = addElementToParent(
    "button",
    quantitySelector,
    classNames.productInfoWrapper.productInfo.container.productForm.productFormQuantitySelector.quantitySelector.quantitySelectorButton.base
  );

  // ⭐️ここは2つ実装している
  // addElementToParent(
  //   "svg",
  //   quantitySelectorButtonIncrease,
  //   classNames.productInfoWrapper.productInfo.container.productForm.productFormQuantitySelector.quantitySelector.quantitySelectorButton.icon
  // );

  addElementToParent("span", productAside, classNames.productAside.anchor.base);
  const productTabs = addElementToParent("div", productAside, classNames.productAside.productTabs.base);

  // ⭐️⭐️collapsibleの実装詳細の検討が必要
  for (let i = 0; i < 2; i++) {
    const collapsible = addElementToParent("div", productTabs, classNames.productAside.productTabs.collapsible.base);
    const collapsibleButton = addElementToParent("button", collapsible, classNames.productAside.productTabs.collapsible.collapsibleButton.base);
    collapsibleButton.textContent = "Product Details";
    const collapsibleInner = addElementToParent("div", collapsible, classNames.productAside.productTabs.collapsible.collapsibleInner.base);
    addElementToParent("span", collapsibleButton, classNames.productAside.productTabs.collapsible.collapsibleButton.collapsiblePlus);
    const collapsibleContent = addElementToParent(
      "div",
      collapsibleInner,
      classNames.productAside.productTabs.collapsible.collapsibleInner.collapsibleContent.base
    );
    const rte = addElementToParent("div", collapsibleContent, classNames.productAside.productTabs.collapsible.collapsibleInner.collapsibleContent.rte);
    // rte子要素にはh2とdivが連続している。関数の検討が必要
  }
  return { quantitySelectorButtonDecrease, quantitySelectorButtonIncrease };
}

export { productPageSetting, testDocsSetting ,processProperties};
