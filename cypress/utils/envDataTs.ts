export class Utility {
    getEnvData(): { userName: string; password: string; baseUrl: string } {
      const qa = {
        userName: "",
        password: "",
        baseUrl: "https://demo.nopcommerce.com/qa",
      };
  
      const stag = {
        userName: "",
        password: "",
        baseUrl: "https://demo.nopcommerce.com/stag",
      };
  
      const pt = {
        userName: "",
        password: "",
        baseUrl: "https://demo.nopcommerce.com/pt",
      };
  
      let envName: string = Cypress.env("ENV");
      if (envName === "QA") return qa;
      else if (envName === "STAG") return stag;
      else if (envName === "PT") return pt;
      else return qa;
    }
  }
  