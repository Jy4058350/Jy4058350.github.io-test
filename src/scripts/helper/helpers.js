export function isDesktopView(num) {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return viewportWidth >= num && viewportWidth > viewportHeight;
}

export function createElementWithAttributes(tag, attributes, classes) {
  const element = document.createElement(tag);
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  element.classList.add(...classes);
  return element;
}

export function appendChildWithClass(parent, tag, classes) {
  const child = createElementWithAttributes(tag, {}, classes);
  parent.appendChild(child);
  return child;
}

// dom要素を作成するhelper関数
export function processProperties(sectionId, currentObject, config, parentkey = null, isFirstCall = true) {
  let newParentId = sectionId;

  const thisConfig = currentObject;
  const properties = Object.keys(currentObject);
  properties.forEach((property) => {
    const propertyValue = currentObject[property];
    // console.log(propertyValue);
    if (Array.isArray(propertyValue)) {
      // console.log("array is ", propertyValue);
      // console.log("parent key is ", parentkey);
      const tag = parentkey.replace(/_.*/, "");
      // console.log("tag is ", tag);
      // newParentId = addElementToParent(tag, newParentId, propertyValue);
      newParentId = addElementToParent(tag, newParentId, propertyValue, config);
    } else if (typeof propertyValue === "object" && propertyValue !== null) {
      // console.log(Object.keys(propertyValue));
      processProperties(newParentId, propertyValue, config, property);
    }
  });
}

export function addElementToParent(element, parent, classNames, setConfig, index) {
  // console.log("setConfig:", setConfig, element);
  element = document.createElement(element);
  if (classNames) {
    // console.log("classNames:", classNames);
    // console.log("element:", element);
    // console.log("parent:", parent);
    element.classList.add(...classNames);
    parent.appendChild(element);
  }

  // function addFormId(element, insertString) {
  if (element.tagName === "FORM") {
    if (element.className) {
      // console.log("element:", element);
      // console.log("className:", element.className);
      let classNameParts = element.className.split("-");
      // console.log("classNameParts:", classNameParts);
      // classNameParts.splice(classNameParts.length - 1, 0, insertString);
      classNameParts.splice(classNameParts.length - 1, 0, "sidebar");
      // console.log("classNameParts:", classNameParts);
      element.id = classNameParts.join("-");
      // console.log("element.id:", element.id);
    }
  }
  // }

  if (element.tagName === "INPUT") {
    // ⭐️input要素のdefault値を設定する。個別はオーバーライドする
    element.setAttribute("type", "hidden");
  }

  if (element.tagName === "SECTION") {
    // console.log("setConfig:", setConfig, element);
    const configSection = setConfig.section;
    // const sectionIds = Object.keys(config.section).map((key) => config.section[key]);
    const sectionIds = Object.keys(configSection).map((key) => configSection[key]);
    // console.log("sectionIds:", sectionIds);
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

  if (element.tagName === "NAV") {
    let ariaLabelMap = new Map();
    _findConfig(setConfig, ariaLabelMap, "aria-label");
    for (let className of element.classList) {
      if (ariaLabelMap.has(className)) {
        element.setAttribute("aria-label", ariaLabelMap.get(className));
        break;
      }
    }
  }

  if (element.tagName === "A") {
    let hrefMap = new Map();
    // console.log("hrefMap:", hrefMap, element, parent, setConfig.a);

    _findConfig(setConfig, hrefMap, "href");
    // console.log("hrefMap:", hrefMap);

    for (let className of element.classList) {
      // console.log("className:", className);
      if (hrefMap.has(className)) {
        element.href = hrefMap.get(className);
        break; // 最初にマッチしたクラス名のhrefを見つけたらループを抜ける
      }
    }
    // もしA要素のクラスが空の要素である場合の処理
    if (element.classList.length === 0) {
      // ２階層上の親要素を取得して、その前の要素のa要素を取得する
      let grandparent = element.parentElement.parentElement;
      console.log("grandparent:", grandparent);
      const previousSiblingAtag = grandparent.previousSibling;
      if (previousSiblingAtag.tagName !== "A") {
        console.error("previousSiblingAtag is not A tag");
      } else {
        console.log("previousSiblingAtag:", previousSiblingAtag);
        const insertHref = previousSiblingAtag.href;
        let absoluteUrl = new URL(insertHref);
        let relativeUrl = absoluteUrl.pathname + absoluteUrl.search + absoluteUrl.hash;
        console.log("relativeUrl:", relativeUrl);
        element.href = relativeUrl;
        console.log(relativeUrl);

        //　urlを利用してinfoの説明をheader用に設定する
        let pathArray = relativeUrl.split("/");
        console.log("pathArray:", pathArray);
        let lastSegment = pathArray[pathArray.length - 1];
        console.log("lastSegment:", lastSegment);
        let info = lastSegment.charAt(0).toUpperCase() + lastSegment.substring(1);
        console.log("info:", info);
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
      console.error("srcset not found");
    }
  }

  if (element.tagName === "SOURCE") {
    parent.style.display = "none";
    element.setAttribute("srcset", "../img/yamadera.jpeg");
  }

  return element;
}

function _findConfig(setConfig, hrefMap, attribute, parentKey = null) {
  for (let key in setConfig) {
    if (typeof setConfig[key] === "object") {
      _findConfig(setConfig[key], hrefMap, attribute, key);
    } else if (key === `${attribute}` && parentKey) {
      hrefMap.set(parentKey, setConfig[key]);
    }
  }
}

export async function addSvgToBtn(svgData, button, classNames, svgStyle) {
  const childNodes = Array.from(button.childNodes);
  _clearElementChildren(button);
  childNodes.forEach((child) => {
    button.appendChild(child);
  });
  const svg = await _parseSvg(svgData);
  _setSvgStyle(button, svg, svgStyle);
  _setPathStyle(button, svgStyle);

  _addSvgClass(svg, classNames);

  return svg;
}

function _clearElementChildren(element) {
  if (!element) return;
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

async function _parseSvg(svgData) {
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgData, "image/svg+xml");
  const svgElement = svgDoc.querySelector("svg");
  if (!svgElement) {
    throw new Error("svgElement not found");
  }
  return svgElement;
}

function _setSvgStyle(button, svg, { viewBox, width, height, strokeWidth, fill }) {
  if (!button) return;

  svg.setAttribute("viewBox", viewBox);
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  button.appendChild(svg);
}

function _setPathStyle(button, { fill, strokeWidth, stroke }) {
  const paths = button.querySelectorAll("path");
  paths.forEach((path) => {
    path.setAttribute("fill", fill);
    path.setAttribute("stroke-width", strokeWidth);
    path.setAttribute("stroke", stroke);
  });
}

function _addSvgClass(svg, classNames) {
  svg.classList.add(...classNames);
}
