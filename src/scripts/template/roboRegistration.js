import { set } from "lodash";
import { roboRegistrationConfig } from "../helper/config.js";
import { processProperties } from "../helper/helpers";

function roboResitrationSetting() {
  const templateId = document.getElementById("section-robo-registration");
  const setConfig = roboRegistrationConfig;
  // console.log("setConfig:", setConfig);
  docsSetting(templateId, setConfig, setConfig);
  addTextToElement(templateId);
  formSetting(templateId, setConfig);
  inputSetting(templateId, setConfig);
  // gRecaptchaSetting();
  // addScript();
}

function docsSetting(id, setConfig, config) {
  processProperties(id, setConfig, config);
}

function addTextToElement(section) {
  const challengeMessage = section.querySelector(".challenge__message");
  challengeMessage.textContent = "続けるには、あたながロボットではないことを教えてください。";
}

function formSetting(section, config) {
  const form = section.querySelector("form");
  //   console.log("form:", form);

  form.setAttribute("action", config.formAttributes.action);
  form.setAttribute("method", config.formAttributes.method);
  form.setAttribute("accept-charset", config.formAttributes.acceptCharset);
}

function inputSetting(section, config) {
  // console.log(config.inputs.form_type.type);
  const inputs = Array.from(section.querySelectorAll("input"));
  inputs.forEach((input, index) => {
    input.setAttribute("type", config.inputs.form_type.type[index]);
    input.setAttribute("name", config.inputs.form_type.name[index]);
    input.setAttribute("value", config.inputs.form_type.value[index]);
  });
}

function gRecaptchaSetting() {
  const gRecaptcha = document.querySelector(".g-recaptcha");
  console.log("gRecaptcha:", gRecaptcha);
  grecaptcha.ready(function () {
    grecaptcha.execute("6Le3yswpAAAAAEijcq6d3XaAvtgU5JN7TLNF5HRJ", { action: "submit" }).then(function (token) {
      // ここでtokenをサーバーに送信します
    });
  });

  // gRecaptcha.setAttribute("data-sitekey", "6Le3yswpAAAAAEijcq6d3XaAvtgU5JN7TLNF5HRJ");
}

function addScript() {
  const script = document.createElement("script");
  script.src = "https://www.google.com/recaptcha/api.js?render=6Le3yswpAAAAAEijcq6d3XaAvtgU5JN7TLNF5HRJ";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
  console.log("script:", script);
}

export { roboResitrationSetting };
