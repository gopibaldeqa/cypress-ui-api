import { Utility } from "../../utils/envData";
const envData = new Utility().getEnvData();

describe("login ", function () {


  it("login to application", { tags: ["@logInToApp"] }, () => {
    //login to the application
    cy.login(envData.logInUrl, envData.userName, envData.password);

  });
});
