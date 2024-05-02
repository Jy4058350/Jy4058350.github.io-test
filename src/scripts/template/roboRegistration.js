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

  // reCAPTCHAのレスポンスを含む隠しフィールドを追加
  const recaptchaResponse = document.createElement("input");
  recaptchaResponse.setAttribute("type", "hidden");
  recaptchaResponse.setAttribute("name", "g-recaptcha-response");
  form.appendChild(recaptchaResponse);
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

export { roboResitrationSetting };
