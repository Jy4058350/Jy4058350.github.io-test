import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
import { config } from "../helper/config";
import { dimensions } from "../../styles/styles";

const PAGE = config.target.pageContainer;

// ScrollbarPluginを継承して新しいプラグインを作成,スクロールのデルタ（変化量）を変換するtransformDeltaメソッドをオーバーライド
class DisablePlugin extends ScrollbarPlugin {
  // Define the name of the plugin
  static pluginName = "disablePlugin";

  // Define the default options for the plugin
  static defaultOptions = {
    // By default, the plugin is not disabled
    disabled: false,
  };

  // Override the transformDelta method to customize the scrollbar's behavior
  transformDelta(delta, fromEvent) {
    // If the plugin is disabled, prevent scrolling by setting the delta to {x: 0, y: 0}
    // Otherwise, leave the delta unchanged
    delta = this.options.disabled ? { x: 0, y: 0 } : delta;

    // Return the modified delta
    return delta;
  }
}

let scrollbar; // Declare scrollbar at the top level

// export default function scrollInit(gsap, ScrollTrigger, Scrollbar) {
export default function scrollInit() {
  const pageContainer = document.getElementById(PAGE);

  // register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Use the DisablePlugin with the scrollbar

  Scrollbar.use(DisablePlugin);

  // Initialize the custom scrollbar
  scrollbar = Scrollbar.init(pageContainer, { delegateTo: document });

  // Proxy the scrollbar's scrollTop to ScrollTrigger
  ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
      return arguments.length ? (scrollbar.scrollTop = value) : scrollbar.scrollTop;
    },
  });
  // When the scrollbar updates, tell ScrollTrigger to update too
  scrollbar.addListener(ScrollTrigger.update);

  // Switch off the plugin
  function disablePlugin() {
    scrollbar.updatePluginOptions("disablePlugin", {
      disabled: true,
    });
    console.log("plugin is disabled");
  }

  // switch on the plugin
  function enablePlugin() {
    scrollbar.updatePluginOptions("disablePlugin", {
      disabled: false,
    });
  }

  ScrollTrigger.defaults({ scroller: pageContainer });

  // Add a listener to the 'scroll' event of the custom scrollbar
  scrollbar.addListener((status) => {
    console.log("status.offset.y:", status.offset.y);
    console.log("scrollbar.scrollHeight:", scrollbar.getSize().content.height);
    if (status.offset.y + window.innerHeight >= scrollbar.getSize().content.height) {
      console.log("you're at the bottom of the page");
    }
  });

  // totalHeightの計算をラップしないと不正確になる
  window.addEventListener("load", function () {
    const height = dimensions.totalHeight;
    console.log("height at scroll.js", height);
    // cling header headerのz-indexを変更して、pinを使って固定する
    const header = document.querySelector(`${config.target.header}`);
    header.style.position = "relative";
    header.style.zIndex = "1000";
    ScrollTrigger.create({
      trigger: header,
      start: "top top",
      end: `${height}px top`,
      pin: true,
      pinSpacing: false,
      onEnter: () => {},
      onLeaveBack: () => {},
    });

    return { disablePlugin, enablePlugin };
  });
}