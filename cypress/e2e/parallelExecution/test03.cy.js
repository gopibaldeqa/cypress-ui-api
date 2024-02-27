import cypress from "cypress";
import { Utility } from "../../utils/envData";
const envData = new Utility().getEnvData();

describe("test 03 ", function () {


    it("login to application", { tags: ["@logInToApp"] }, () => {
        cy.wait(60000)
    });
});
