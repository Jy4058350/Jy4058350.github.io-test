export const config = {
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
  humbergerBtnSelector: "button.Header__Icon",
  logoeSelector: "Header__LogoImage",
  buttonParent: "Header__FlexItem",
  svgCart: "cart",
  svg: {
    cartDesktop: "cartDesktopSvg",
    cartPhone: "cartPhoneSvg",
  },

  logo: {
    white: "./logo-white.png",
    black: "./logo-black.png",
  },

  color: {
    white: "#ffffff",
    black: "#000000",
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
