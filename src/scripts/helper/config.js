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
    tablet: "24px",
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
