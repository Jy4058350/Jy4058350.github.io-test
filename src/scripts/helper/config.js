export const config = {
  humbergerBtnSelector: "button.Header__Icon",
  logoSelector: "Header__LogoImage",
  buttonParent: "Header__FlexItem",
  svgCart: "cart",

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
    white: "./logo-white.png",
    black: "./logo-black.png",
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
    pageContainer: "page-container",
    header: "section-header",
    announcement: "section-announcement",
  },
  rootProperty: {
    headerHeight: "--header-height",
    announcementHeight: "--announcement-bar-height",
  },
};
