import { productpageConfig, config, registrationConfig } from "../helper/config.js";
import { processProperties, addElementToParent } from "../helper/helpers.js";

function registrationFormSetting() {
  const templateId = document.getElementById("section-registration-form");
  const setConfig = registrationConfig;
  docsSetting(templateId, setConfig, setConfig);
  formSetting();
  addTextToElement();
  inputSetting();
  submitButtonSetting();
  addScript(templateId);
  // gRecaptchaSetting(templateId);
}

// formの設定詳細（例えばid)が異なるため、設計変更の検討が必要
function docsSetting(id, setConfig, config) {
  processProperties(id, setConfig, config);
}

function formSetting() {
  const form = document.querySelector(".Form");
  // console.log("form:", form);
  form.setAttribute("method", "post");
  // form.setAttribute("action", "staff_add_check.php");
  form.setAttribute("action", "staff_add_robo.php");
}

function addTextToElement() {
  const formTitle = document.querySelector(".Form__Title");
  //   console.log("formTitle:", formTitle);
  formTitle.textContent = "登録";
  const formLegend = document.querySelector(".Form__Legend");
  formLegend.textContent = "以下の情報を入力してください。";
}

function inputSetting() {
  const form = document.querySelector(".Form");
  const inputsArray = Array.from(form.querySelectorAll("input"));
  const filterdInputs = inputsArray.filter((input) => !input.classList.contains("Form__Input"));

  const names = ["form_type", "utf8", "login_with_shop[analytics_trace_id]"];
  // ⭐️valueはphp制御をしている可能性があるので、後で確認する
  const values = ["create_customer", "✓", ""];

  filterdInputs.forEach((input, index) => {
    input.setAttribute("type", "hidden");
    input.setAttribute("name", names[index]);
  });

  const formItems = document.querySelectorAll(".Form__Item");
  const texts = ["text", "text", "password", "password"];
  // const itemNames = ["customer[last_name]", "customer[first_name]", "customer[password]", "customer[password]"];
  const itemNames = ["last_name", "first_name", "password", "password2"];
  const ariaLavel = ["姓", "名", "パスワード", "パスワード"];
  const placeholder = ["姓", "名", "パスワード", "パスワード"];

  formItems.forEach((formItem, index) => {
    const input = formItem.querySelector("input");
    input.setAttribute("type", texts[index]);
    input.setAttribute("name", itemNames[index]);
    input.setAttribute("aria-label", ariaLavel[index]);
    input.setAttribute("placeholder", placeholder[index]);
    if (index === 2 || index === 3) {
      input.setAttribute("required", "required");
    }

    const label = formItem.querySelector("label");
    // console.log("label:", label);
    const labels = ["姓", "名", "パスワード", "パスワード"];
    label.textContent = labels[index];
  });
}

function submitButtonSetting() {
  const button = document.querySelector(".Form__Submit");
  button.setAttribute("type", "submit");
  button.textContent = "アカウントを作成する";
}

function gRecaptchaSetting(section) {
  grecaptcha.ready(function () {
    // フォームが送信されるときにreCAPTCHAトークンを生成
    const form = section.querySelector(".Form");
    // console.log("form:", form);
    form.addEventListener("submit", function (event) {
      console.log("event:", event);
      event.preventDefault();
      grecaptcha.execute("6Le3yswpAAAAAEijcq6d3XaAvtgU5JN7TLNF5HRJ", { action: "submit" }).then(function (token) {
        // 生成されたトークンをフォームデータに追加
        // const form = document.querySelector(".Form");
        // console.log("tokenform:", form);
        const input = document.createElement("input");
        console.log("input:", input);
        input.type = "hidden";
        input.name = "g-recaptcha-response";
        input.value = token;
        form.appendChild(input);

        // フォームを送信
        // form.submit();

        // フォームデータを取得
        const formData = new FormData(form);

        // Ajaxリクエストを送信
        fetch(form.action, {
          method: form.method,
          body: formData,
        })
          .then((response) => {
            console.log("Response:", response);
            // 必要に応じてここで何かしらの処理を行う
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
    });
  });
}

function addScript(section) {
  const script = document.createElement("script");
  script.src = "https://www.google.com/recaptcha/api.js?render=6Le3yswpAAAAAEijcq6d3XaAvtgU5JN7TLNF5HRJ";
  script.async = true;
  script.defer = true;
  script.onload = function () {
    // scriptが読み込まれた後に実行する処理
    console.log("script.onload");
    gRecaptchaSetting(section);
  };
  document.body.appendChild(script);
  console.log("script:", script);
}

export { registrationFormSetting };
