import { method } from "lodash";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const config = {
  // htmlに記述されているセクションのidを設定しています（照合用）廃止予定
  section: {
    section2: "section-2",
    productPage: "section-product-page",
    sectionTest3: "section-test3",
    sectionSidebarMenu: "section-sidebar-menu",
    // sectionRegistrationForm: "section-registration-form",
  },

  humbergerBtnSelector: "button.Header__Icon",
  logoSelector: "Header__LogoImage",
  buttonParent: "Header__FlexItem",
  svgCart: "cart",

  section2: {
    idInsertString: "sidebar",
    // noscriptのテスト用
    noscript: "default text",
    FlexboxIeFix: {
      noscript: "ここは後で改修する予定です",
    },
    PageHeader: {
      noscript: "pageHeaderの改修予定です",
    },
    a: "#",

    ProductItem__ImageWrapper: {
      // href: "/subhtml/productPage.php",
      href: "/subhtml/productPage.html",
    },

    AspectRatio: {
      srcset: "../img/sakuramich.jpeg",
    },
    lazyautosizes: {
      srcset: "../img/sakuramich.jpeg",
    },
  },

  links: {
    collapsible: ["link0", "link1", "link2", "link3", "link4", "link5", "/subhtml/section2.html", "link88"],
  },

  sidebarBtnConfig: {
    attributes: {
      "data-action": "close-drawer",
      "data-drawer-id": "sidebar-cart",
      "aria-label": "カートを閉じる",
    },
    classes: ["Drawer__Close", "Icon-Wrapper--clickable"],
  },

  cartAtagConfig: {
    attributes: {
      href: "/cart",
      "data-action": "open-drawer",
      "data-drawer-id": "sidebar-cart",
      "aria-label": "カートを開く",
      "aria-expanded": "false",
    },
    classes: ["Header__Icon", "Icon-Wrapper", "Icon-Wrapper--clickable", "hidden-desk"],
  },

  svg: {
    cartDesktop: "cartDesktopSvg",
    cartPhone: "cartPhoneSvg",
  },

  svgStyle: {
    default: {
      viewBox: "0 0 20 20",
      width: "16",
      height: "14",
      strokeWidth: "1.5",
      fill: "none",
      stroke: "currentColor",
    },
    close: {
      viewBox: "0 0 16 14",
      width: "15",
      height: "15",
      strokeWidth: "1.5",
      fill: "none",
      stroke: "currentColor",
    },
    search: {
      viewBox: "0 0 18 17",
      width: "15",
      height: "15",
      strokeWidth: "1.5",
      fill: "none",
      stroke: "currentColor",
    },
    wall: {
      viewBox: "0 0 36 36",
      width: "36",
      height: "36",
      strokeWidth: "1.5",
      fill: "currentColor",
    },
    arrowPrevious: {
      viewBox: "0 0 6 9",
      width: "6",
      height: "9",
      strokeWidth: "1.0",
      fill: "none",
    },
    arrowNext: {
      viewBox: "0 0 6 9",
      width: "6",
      height: "9",
      strokeWidth: "1.0",
      fill: "none",
    },
    plus: {
      viewBox: "0 0 16 16",
      width: "16",
      height: "16",
      strokeWidth: "1.0",
      fill: "none",
    },
    minus: {
      viewBox: "0 0 16 2",
      width: "16",
      height: "2",
      strokeWidth: "1.0",
      fill: "none",
    },
  },

  page: {
    breakpoint: 769,
  },
  time: {
    debounce: 250,
  },

  phone: {
    width: "20",
    height: "15",
    rectWidth: "20",
    rectHeight: "1",
  },
  tabletAndUp: {
    width: "30",
    height: "25",
    rectWidth: "30",
    rectHeight: "2",
  },

  logo: {
    white: "/logo-white.png",
    black: "/logo-black.png",
    phone: "18px",
    tablet: "28px",
  },

  smallCart: {
    width: "18",
    height: "18",
    strokeWidth: "0.8",
  },
  largeCart: {
    width: "28",
    height: "28",
    strokeWidth: "1.2",
  },
  smallHeader: {
    height: "48",
  },
  largeHeader: {
    height: "64",
  },

  // root settings for slide targetに登録するのはidもしくはセマンティックタグであること
  target: {
    pageContainer: "pageContainer",
    header: "section-header",
    announcement: "section-announcement",
  },
  rootProperty: {
    headerHeight: "--header-height",
    announcementHeight: "--announcement-bar-height",
  },
};

const actions = {
  "toggle-collapse": function (event) {
    // toggle-collapseアクションのロジック
    const button = event.currentTarget;
    button.setAttribute("aria-expanded", button.getAttribute("aria-expanded") === "true" ? "false" : "true");

    const collapsible = button.closest(".Collapsible");
    if (collapsible) {
      collapsible.style.overflow = collapsible.style.overflow === "hidden" ? "visible" : "hidden";
    }
    const collapsibleInner = collapsible.querySelector(".Collapsible__Inner");
    collapsibleInner.style.overflow = collapsibleInner.style.overflow === "visible" ? "hidden" : "visible";
    const contentHeight = collapsibleInner.scrollHeight;
    console.log("contentHeight", contentHeight);
    // collapsibleInner.style.height = collapsibleInner.style.height === "auto" ? "0px" : "auto";
    collapsibleInner.style.height = collapsibleInner.style.height === `${contentHeight}px` ? "0px" : `${contentHeight}px`;
  },
  // 他のアクションも同様に記述
};

const roboRegistrationConfig = {
  section: {
    sectionRoboRegistration: "section-robo-registration",
  },
  formAttributes: {
    action: "#",
    method: "post",
    acceptCharset: "UTF-8",
  },
  inputs: {
    form_type: {
      type: ["hidden", "hidden", "submit"],
      name: ["authenticity_token", "skh", "damy"],
      value: ["damy", "damy", "送信"],
    },
  },

  classNames: {
    div_1: {
      base: ["challenge__container"],
      p_1: {
        base: ["challenge__message"],
      },
      form_1: {
        base: [],
        input_1: {
          base: [],
        },
        // noscript_1: {
        //   base: [],
        // },
        div_2: {
          base: ["g-recaptcha"],
          div_3: {
            base: [],
            div_4: {
              base: [],
            },
          },
          iframe_5: {
            base: [],
          },
        },
        input_2: {
          base: [],
        },
        input_3: {
          base: ["shopify-challenge__button", "btn"],
        },
      },
    },
  },
};

const registrationConfig = {
  section: {
    sectionRegistrationForm: "section-registration-form",
  },

  classNames: {
    section_1: {
      base: ["registrationForm-section"],
      div_1: {
        base: ["Container"],
        div_2: {
          base: ["PageContent", "PageContent--fitScreen", "PageContent--extraNarrow"],
          form_1: {
            base: ["Form", "Form--spacingTight"],
            input_1: {
              base: [],
            },
            input_2: {
              base: [],
            },
            header_1: {
              base: ["Form__Header"],
              h1_1: {
                base: ["Form__Title", "Heading", "u-h1"],
              },
              p_1: {
                base: ["Form__Legend"],
              },
            },
            div_1: {
              base: ["socialplus-error-banner-wrapper", "socialplus-error-banner-wrapper-first", "socialplus-error-banner-wrapper-last"],
            },
            div_2: {
              base: ["socialplus-login-button-wrapper", "socialplus-login-button-wrapper-first", "socialplus-login-button-wrapper-last"],
              div_3: {
                base: ["socialplus-login-button-component"],
                a_1: {
                  base: ["socialplus-login-button-link"],
                },
              },
            },
            div_3: {
              base: ["Form__Item"],
              input_3: {
                base: ["Form__Input"],
              },
              label_1: {
                base: ["Form__FloatingLabel"],
              },
            },
            div_4: {
              base: ["Form__Item"],
              input_4: {
                base: ["Form__Input"],
              },
              label_2: {
                base: ["Form__FloatingLabel"],
              },
            },
            div_5: {
              base: ["Form__Item"],
              input_5: {
                base: ["Form__Input"],
              },
              label_3: {
                base: ["Form__FloatingLabel"],
              },
            },

            div_6: {
              base: ["Form__Item"],
              input_6: {
                base: ["Form__Input"],
              },
              label_4: {
                base: ["Form__FloatingLabel"],
              },
            },
            button_1: {
              base: ["Form__Submit", "Button", "Button--primary", "Button--full"],
            },
            input_3: {
              base: [],
            },
          },
        },
      },
    },
  },
};

// sidebarMeneのnestedCollapsibleのhref設定
const hrefConfig = {
  href: {
    // collapsible: ["#first", "#second", "#third", "#fourth", "#fifth", "#..."],
    nestedCollapsible: [
      "#FIRST",
      {
        collapsible: "#SECOND",
        texts: ["first", "second"],
        links: ["#FIFTH-1", "#FIFTH-2"],
      },
      {
        collapsible: "#THIRD",
        texts: ["third", "fourth", "fifth", "sixth"],
        links: ["#FIFTH-3", "#FIFTH-4", "#FIFTH-5", "#FIFTH-6"],
      },
      "#FOURTH",
      {
        collapsible: "#FIFTH",
        texts: ["新規登録", "ログイン", "thirteen", "fourteen", "fifteen"],
        links: ["http://localhost/dev01/src/dist/php/staff_add.php", "#FIFTH-13", "#FIFTH-14"],
      },
    ],
  },
};

const sectionSidebarMenuConfig = {
  /* htmlに記述されているセクションのidを設定しています（照合用）
  記述規則　section-を最初につけること、ハイフンで区切ること
  次行に記述するセクションのidは、そのsectonを除いたidをキャメルケースにせず、そのまま記述すること
  */
  section: {
    sectionSidebarMenu: "section-sidebar-menu",
  },
  templateId: {
    sidebarMenu: "section-sidebar-menu",
  },
  sectionId: config.section.sectionSidebarMenu,

  setATagHref: {
    Drawer__Search: {
      href: "/subhtml/section2",
    },
  },
  setAriaLabel: {
    SidebarMenu__Nav: {
      "aria-label": "サイドメニュー",
    },
  },
  text: {
    collapsible: ["first", "second", "third", "fourth", "customer", "..."],
  },
  href: {
    collapsible: ["#first", "#second", "#third", "#fourth", "#fifth", "#..."],
    nestedCollapsible: ["#FIRST", "#SECOND", "#THIRD", "#FOURTH", "#FIFTH", "#..."],
  },

  classNames: {
    // collapsibleの設定はjs制御で実行するロジックです
    section_1: {
      base: ["SidebarMenu", "Drawer", "Drawer--small", "Drawer--fromLeft", "test"],
      header_1: {
        base: ["Drawer__Header"],
        button_1: {
          base: ["Drawer__Close", "Icon-Wrapper--clickable"],
        },
        a_1: {
          base: ["Icon-Wrapper--clickable", "Drawer__Search"],
        },
      },
      div_1: {
        base: ["Drawer__Content"],
        div_2: {
          base: ["Drawer__Main"],
          div_3: {
            base: ["Drawer__Container"],
            nav_1: {
              base: ["SidebarMenu__Nav", "SidebarMenu__Nav--primary"],
              div_1: {
                base: ["Collapsible"],
              },
              div_2: {
                base: ["Collapsible"],
              },
              div_3: {
                base: ["Collapsible"],
              },
              div_4: {
                base: ["Collapsible"],
              },
              div_5: {
                base: ["Collapsible"],
              },
            },
            nav_2: {
              base: ["SidebarMenu__Nav", "SidebarMenu__Nav--secondary"],
            },
            nav_3: {
              base: ["SidebarMenu__Nav", "SidebarMenu__Nav--secondary"],
            },
          },
        },
        aside_1: {
          base: ["Drawer__Footer"],
        },
      },
    },
  },
};

const productpageConfig = {
  // imgのsrcset属性の設定をしています
  lazyautosizes: {
    srcset: ["../img/yamadera.jpeg", "../img/sakuramich.jpeg", "../img/yamadera.jpeg", "../img/sakuramich.jpeg"],
  },
  sameProductImg: {
    srcset: ["../img/yamadera.jpeg", "../img/sakuramich.jpeg"],
  },
  sectionId: config.section.productPage,
  productPage: {
    CarouselCells: {
      // ⭐️⭐️マジックナンバーを使用しているので、変数名を変更するか、関数化することを検討
      num: 4,
    },
  },
  flickityOptions: {
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
  },
  classNames: {
    product: ["Product", "Product--large"],
    productWrapper: {
      base: ["Product__Wrapper"],
      productGallery: ["Product__Gallery", "Product__Gallery--stack", "Product__Gallery--withThumbnails"],
    },
    productOffScreen: ["Product__OffScreen"],

    productGallery: {
      base: ["Product__Gallery", "Product__Gallery--stack", "Product__Gallery--withThumbnails"],
      anchor: ["Anchor"],
      productSlideshowNavthumbnails: {
        base: ["Product__SlideshowNav", "Product__SlideshowNav--thumbnails"],
        productSlideshowNavScroller: {
          base: ["Product__SlideshowNavScroller"],
          Product__SlideshowNavImage: {
            base: ["Product__SlideshowNavImage", "AspectRatio", "is-selected"],
            href: "/subhtml/productPage",
          },
        },
      },
      productSlideshowNavdots: {
        base: ["Product__SlideshowNav", "Product__SlideshowNav--dots"],
        productSlideshowNavScroller: {
          base: ["Product__SlideshowNavScroller"],
          Product__SlideshowNavDot: {
            base: ["Product__SlideshowNavDot", "is-selected"],
            href: "/subhtml/productPage",
          },
        },
      },
      productSlideshow: {
        // flickityインスタンスが生成される要素を除外したいので、baseはProduct__Slideshowにしています
        base: ["Product__Slideshow", "Carousel", "flickity-enabled", "is-draggable"],
        productSlideItem: {
          base: ["Product__SlideItem", "Product__SlideItem--image", "Carousel__Cell"],
          aspectRatio: {
            base: ["AspectRatio", "AspectRatio--withFallback"],
            imageFadeIn: ["Image--fadeIn", "lazyautosizes", "Image--lazyLoaded"],
            imageLoader: ["Image__Loader"],
          },
        },
      },

      productSlideshowMobileNav: {
        base: ["Product__SlideshowMobileNav", "hidden-lap-and-up"],
        productSlideshowNavArrowPrev: {
          base: ["Product__SlideshowNavArrow", "Product__SlideshowNavArrow--previous"],
          icon: ["Icon", "Icon--media-arrow-left"],
        },
        flickityPageDots: {
          base: ["flickity-page-dots"],
          dot: ["dot"],
        },
        productSlideshowNavArrowNext: {
          base: ["Product__SlideshowNavArrow", "Product__SlideshowNavArrow--next"],
          icon: ["Icon", "Icon--media-arrow-right"],
        },
      },
    },
    productInfoWrapper: {
      base: ["Product__InfoWrapper"],
      productInfo: {
        base: ["Product__Info"],
        container: {
          base: ["Container"],
          productForm: {
            base: ["ProductForm"],
            productMeta: {
              base: ["ProductMeta"],
              productMetaTitle: ["ProductMeta__Title", "Heading", "u-h2"],
              productMetaPriceList: {
                base: ["ProductMeta__PriceList", "Heading"],
                productMetaPrice: {
                  base: ["ProductMeta__Price", "Price", "Text--subdued", "u-h4"],
                  yen: ["yen"],
                },
              },
              productMetaUnitPriceMeasurement: {
                base: ["ProductMeta__UnitPriceMeasurement"],
                unitPriceMeasurement: {
                  base: ["UnitPriceMeasurement", "Heading", "u-h6", "Text--subdued"],
                  unitPriceMeasurementPrice: ["UnitPriceMeasurement__Price"],
                  unitPriceMeasurementSeparator: ["UnitPriceMeasurement__Separator"],
                  unitPriceMeasurementReferenceValue: ["UnitPriceMeasurement__ReferenceValue"],
                  unitPriceMeasurementReferenceUnit: ["UnitPriceMeasurement__ReferenceUnit"],
                },
              },
            },
            productFormVariants: {
              base: ["ProductForm__Variants"],
              productFormOption: {
                base: ["ProductForm__Option", "ProductForm__Option--labelled"],
                productFormLabel: ["ProductForm__Label"],
                sizeSwatchList: {
                  base: ["SizeSwatchList", "HorizontalList", "HorizontalList--spacingTight"],
                  horizontalListItem: {
                    base: ["HorizontalList__Item"],
                    sizeSwatchRadio: ["SizeSwatch__Radio"],
                    sizeSwatch: ["SizeSwatch"],
                  },
                },
              },
              productFormOption1: {
                base: ["ProductForm__Option", "ProductForm__Option--labelled"],
                productFormLabel: {
                  base: ["ProductForm__Label"],
                  productFormSelectedValue: ["ProductForm__SelectedValue"],
                },
                colorSwatchList: {
                  base: ["ColorSwatchList", "HorizontalList", "HorizontalList--spacingTight"],
                  horizontalListItem: {
                    base: ["HorizontalList__Item"],
                    colorSwatchRadio: ["ColorSwatch__Radio"],
                    colorSwatch: {
                      base: ["ColorSwatch", "ColorSwatch--large"],
                      uVisuallyHidden: ["u-visually-hidden"],
                    },
                  },
                },
              },
              noJs: {
                base: ["no-js", "ProductForm__Option"],
                select: {
                  base: ["Select", "Select--primary"],
                  Icon: ["Icon", "Icon--select-arrow"],
                },
              },
            },
            sameProducts: {
              base: ["same_products"],
              sameProduct: {
                base: ["same_product"],
                sameProductImg: ["same_product-img", "sameProductImg"],
              },
            },
            productFormQuantitySelector: {
              base: ["ProductForm__QuantitySelector"],
              quantitySelector: {
                base: ["QuantitySelector", "QuantitySelector--large"],
                quantitySelectorButton: {
                  base: ["QuantitySelector__Button", "Link", "Link--secondary"],
                  icon: ["Icon", "Icon--minus"],
                  quantitySelectorCurrentQuantity: ["QuantitySelector__CurrentQuantity"],
                },
              },
            },
          },
        },
      },
    },
    productAside: {
      base: ["Product__Aside"],
      anchor: {
        base: ["Anchor"],
      },
      productTabs: {
        base: ["Product__Tabs"],
        collapsible: {
          base: ["Collapsible", "Collapsible--large"],
          collapsibleButton: {
            base: ["Collapsible__Button", "Heading", "u-h6"],
            collapsiblePlus: ["Collapsible__Plus"],
          },
          collapsibleInner: {
            base: ["Collapsible__Inner"],
            collapsibleContent: {
              base: ["Collapsible__Content"],
              rte: ["Rte"],
              // rte子要素にはh2とdivが連続している
            },
          },
        },
      },
    },
  },
};

const sectionTest3 = {
  classNames: {
    section_3: {
      base: ["Section", "Section--spacingNormal"],
      header_1: {
        base: ["SectionHeader", "SectionHeader--center"],
        div_1: {
          base: ["Container"],
          h3: {
            base: ["SectionHeader__Heading", "Heading", "u-h3"],
          },
        },
      },
      div_1: {
        base: ["ProductRecommendations"],
        div_2: {
          base: ["ProductListWrapper"],
          div_3: {
            base: ["ProductList", "ProductList--carousel", "Carousel"],
            div_4: {
              base: ["Carousel__Cell"],
              div_5: {
                base: ["ProductItem"],
                div_6: {
                  base: ["ProductItem__Wrapper"],
                  a: {
                    base: ["ProductItem__ImageWrapper", "ProductItem__ImageWrapper--withAlternateImage"],
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export { config, productpageConfig, sectionTest3, actions, sectionSidebarMenuConfig, hrefConfig, registrationConfig, roboRegistrationConfig };
