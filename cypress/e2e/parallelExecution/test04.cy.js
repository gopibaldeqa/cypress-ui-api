import cypress from "cypress";
import { Utility } from "../../utils/envData";
const envData = new Utility().getEnvData();

describe("test 04 ", function () {


    it("login to application", { tags: ["@logInToApp"] }, () => {
        cy.wait(60000)
    });
});
