import { processProperties, actions, sectionSidebarMenuConfig, addSvgToBtn, config, hrefConfig } from "../helper";
import closeButtonData from "../../svg/closeButton.js";
import searchButtonData from "../../svg/searchButton.js";
import scrollInit from "../component/scroll";

function sidebarSetting() {
  const templateId = document.getElementById("section-sidebar-menu");
  const setConfig = sectionSidebarMenuConfig;
  const { section, menuBtn, sidebarMenu, closeButton, searchButton } = docsSetting(templateId, setConfig, setConfig);
  initButtons(section, menuBtn, sidebarMenu, closeButton, searchButton);
}

function docsSetting(id, setConfig, config) {
  processProperties(id, setConfig, config);
  const section = document.querySelector("." + setConfig.classNames.section_1.base.join("."));
  setHeight(section);
  setAttributes(section, setConfig);
  const menuBtn = document.querySelector(".Header__Icon");
  const sidebarMenu = document.querySelector(".SidebarMenu");
  const closeButton = document.querySelector(".Drawer__Close");
  const searchButton = document.querySelector(".Drawer__Search");

  const collapsibles = document.querySelectorAll(".Collapsible");
  //   console.log("collapsibles", collapsibles);
  collapsibles.forEach((collapsible, index) => {
    const testCollapsible = new Collapsible(collapsible);
    const text = sectionSidebarMenuConfig.text.collapsible[index];
    const href = sectionSidebarMenuConfig.href.collapsible[index];
    if (index === 0 || index === 3) {
      testCollapsible.collapse("a", text, href, index);
    } else {
      testCollapsible.collapse("div", text, href, index);
    }
  });

  window.addEventListener("resize", () => {
    setHeight(section);
  });
  return { section, menuBtn, sidebarMenu, closeButton, searchButton };
}

class ElementCreator {
  constructor(element) {
    this.element = element;
  }
  createAtag(text, href) {
    // console.log("href", href);
    const a = document.createElement("a");
    a.setAttribute("href", href);
    a.textContent = text;
    a.classList.add("Collapsible__Button", "Heading", "Link", "Link--primary", "u-h6");
    return a;
  }

  createSubCollapse(text, index) {
    const button = this.createButton(text);
    const inner = this.createInner(index);
    return { button, inner };
  }

  createButton(text) {
    const button = document.createElement("button");
    button.classList.add("Collapsible__Button", "Heading", "u-h6");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("data-action", "toggle-collapse");
    button.textContent = text;
    return button;
  }
  createSpan() {
    const span = document.createElement("span");
    span.classList.add("Collapsible__Plus");
    return span;
  }
  createInner(index) {
    const inner = document.createElement("div");
    inner.classList.add("Collapsible__Inner");

    inner.appendChild(this.createContent(index));
    return inner;
  }

  createContent(index) {
    const content = document.createElement("div");
    content.classList.add("Collapsible__Content");
    content.appendChild(this.createCollapsible());
    return content;
  }

  createCollapsible() {
    const collapsible = document.createElement("div");
    collapsible.classList.add("Collapsible");
    return collapsible;
  }
}

class Collapsible extends ElementCreator {
  constructor(element) {
    super(element);
    this.counter = 0;
  }

  collapse(tagType, text, href, index) {
    let tag;
    if (tagType === "a") {
      tag = this.createAtag(text, href);
      this.element.appendChild(tag);
    } else if (tagType === "div") {
      tag = this.createSubCollapse(text, index);
      this.element.appendChild(tag.button);
      this.element.appendChild(tag.inner);
      const span = this.createSpan();
      tag.button.appendChild(span);
    }
    return tag;
  }

  createContent(index) {
    // console.log("index", index);
    const content = document.createElement("div");
    content.classList.add("Collapsible__Content");
    // 各コンテンツの折りたたみ数を定義する
    const collapsiblesPerContent = [0, 1, 4, 0, 5];
    // console.log(collapsiblesPerContent[index]);
    // このコンテンツの折りたたみ数を取得する
    const numCollapsibles = collapsiblesPerContent[index];
    // 指定された数のコラプシブルを追加する。
    for (let i = 0; i < numCollapsibles; i++) {
      content.appendChild(this.createCollapsible(index));
    }

    return content;
  }

  createCollapsible(index) {
    // console.log("index", index);
    const collapsible = document.createElement("div");
    collapsible.classList.add("Collapsible");
    // const href = hrefConfig.href.nestedCollapsible;
    let href = hrefConfig.href.nestedCollapsible[index];

    // if (typeof href === "object" && href.links instanceof Array && href.links.length > 0) {
    if (typeof href === "object" && href.links instanceof Array && href.links.length > this.counter) {
      //   const aTag = this.collapse("a", "Collapse", href.links[this.counter], index);
      const aTag = this.collapse("a", href.texts[this.counter], href.links[this.counter], index);
      collapsible.appendChild(aTag);
    }
    this.counter++;

    return collapsible;
  }
}

function setHeight(section) {
  const viewportHeight = window.innerHeight;
  section.style.height = `${viewportHeight}px`;
}

function setAttributes(section, setConfig) {
  section.setAttribute("aria-hidden", "true");
  const header = document.querySelector("." + setConfig.classNames.section_1.header_1.base.join("."));
  header.setAttribute("data-drawer-animated-left", "");
}

function initButtons(section, menuButton, sidebarMenu, closeButton, searchButton) {
  const html = document.querySelector("html");
  const overlay = document.querySelector(".PageOverlay");
  const page = document.getElementById("pageContainer");

  _menuBtnClick(menuButton, sidebarMenu, html, overlay, page);

  closeButtonInit(closeButtonData, closeButton, section, html, overlay, page);
  searchButtonInit(searchButtonData, searchButton, section, html, overlay, page);
  plusButtonInit();
}

function plusButtonInit() {
  const plusButtons = document.querySelectorAll(".Collapsible__Button");
  plusButtons.forEach((plusButton) => {
    plusButton.addEventListener("click", _handleButtonClick);
    const spanElement = plusButton.querySelector("span");
    // console.log("spanElement", spanElement);
  });
}

function _handleButtonClick(event) {
  const actionElement = event.target.tagName === "SPAN" ? event.target.parentElement : event.target;
  const actionName = actionElement.dataset.action;
  const action = actions[actionName];
  if (action) {
    action(event);
  }
}

function closeButtonInit(svgData, button, section, html, overlay, page) {
  addSvgToBtn(svgData, button, ["Icon", "Icon--close"], config.svgStyle.close);
  _closeBtnClick(button, section, html, overlay, page);
  _overlayClick(overlay, section, html, page);
}

function searchButtonInit(svgData, button, section, html, overlay, page) {
  addSvgToBtn(svgData, button, ["Icon", "Icon--search"], config.svgStyle.search);
  _closeBtnClick(button, section, html, overlay, page);
}

let isFirstFocus = true; // フラグを初期化
function _menuBtnClick(button, sidebarMenu, html, pageOverlay, pageContainer) {
  button.addEventListener("click", () => {
    sidebarMenu.setAttribute("aria-hidden", "false");
    sidebarMenu.setAttribute("tabindex", "-1");

    sidebarMenu.addEventListener("transitionend", function (event) {
      if (event.propertyName !== "transform") return;
      const firstFocusableElement = sidebarMenu.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (firstFocusableElement && isFirstFocus) {
        firstFocusableElement.focus();
        _disconnectScroll();
        isFirstFocus = false;

        // pageContainer内のすべてのフォーカス可能な要素に対してtabindex="-1"を設定
        const focusableElementsInPageContainer = pageContainer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        // console.log("focusableElementsInPageContainer", focusableElementsInPageContainer);
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

function _closeBtnClick(button, section, html, overlay, page) {
  button.addEventListener("click", () => {
    section.setAttribute("aria-hidden", "true");
    section.removeAttribute("tabindex");
    overlay.classList.remove("is-visible");
    html.classList.remove("no-scroll");

    section.addEventListener("transitionend", function (event) {
      if (event.propertyName !== "transform") return;
      const focusableElementsInPageContainer = pageContainer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      focusableElementsInPageContainer.forEach((element) => {
        element.removeAttribute("tabindex");
        connectScroll();
      });
      isFirstFocus = true;
    });
  });
}

function _overlayClick(overlay, section, html, page) {
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

// scroll監視の切断
function _disconnectScroll() {
  const { disablePlugin, enablePlugin } = scrollInit();
  disablePlugin();
}

// sccroll監視の開始
function connectScroll() {
  const { disablePlugin, enablePlugin } = scrollInit();
  enablePlugin();
}

export { sidebarSetting };
