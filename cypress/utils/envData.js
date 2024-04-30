export class Utility {
  getEnvData() {
    const qa = {
      userName: "",
      password: "",
      logInUrl:
        "https://demo.nopcommerce.com/qa",

    };

    const stag = {
      userName: "",
      password: "",
      logInUrl: "https://demo.nopcommerce.com/stag",

    };

    const pt = {
      userName: "",
      password: "",
      logInUrl: "https://demo.nopcommerce.com/pt",

    };

    let envName = Cypress.env("ENV");
    if (envName == "QA") return qa;
    else if (envName == "STAG") return stag;
    else if (envName == "PT") return pt;
    else return qa;
  }
}
