export const config = {
  page: {
    breakpoint: 769,
  },
  time: {
    debounce: 250,
  },

  phone: {
    viewBox: "0 0 100 80",
    width: "30",
    height: "30",
    rectWidth: "100",
    rectHeight: "3",
  },
  tabletAndUp: {
    viewBox: "0 0 100 80",
    width: "30",
    height: "30",
    rectWidth: "100",
    rectHeight: "10",
  },
  buttonselector: "button.Header__Icon",
  logoeSelector: "Header__LogoImage",
  buttonParent: "Header__FlexItem",
  svgCart: "cart",
  svg: {
    cartDesktop: "cartDesktopSvg",
    cartPhone: "cartPhoneSvg",
  },
  color: {
    header: "#ffffff",
  },

  // root settings for slide
  target: {
    pageContainer: "page-container",
    header: "header",
    announcement: "AnnouncementBar__Content",
  },
  rootProperty: {
    headerHeight: "--header-height",
    announcementHeight: "--announcement-bar-height",
  },
};
