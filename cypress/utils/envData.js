export class Utility {
  getEnvData() {
    const qa = {
      userName: "",
      password: "",
      logInUrl:
        "https://demo.nopcommerce.com/",

    };

    const stag = {
      userName: "",
      password: "",
      baseUrl: "https://demo.nopcommerce.com/",

    };

    const pt = {
      userName: "",
      password: "",
      baseUrl: "https://demo.nopcommerce.com/",

    };

    let envName = Cypress.env("ENV");
    if (envName == "QA") return qa;
    else if (envName == "STAG") return stag;
    else if (envName == "PT") return pt;
    else return qa;
  }
}
