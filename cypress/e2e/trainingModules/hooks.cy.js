import { Utility } from "../../utils/envData";
const envData = new Utility().getEnvData();

describe("hooks tcs", function () {

    after(function () {
        cy.log("after method executing")

    })

    before(function () {
        cy.log("before method executing")
    })
    beforeEach(function () {
        cy.log("beforeEach method executing")
    })

    afterEach(function () {
        cy.log("afterEach method executing")
    })

   
    it("hooks no : 01", function () {
        cy.log("hooks no : 01")
        // envData.logInUrl
        cy.log("#############################")
        cy.log(envData.logInUrl)
        cy.log("#############################")
        // const myConfigValue = cy.config('integrationFolder');
        // cy.log(myConfigValue)
    })

    it("hooks no : 02", function () {
        cy.log("hooks no : 02")
        cy.log("#############################")
        cy.log(envData.logInUrl)
        cy.log("#############################")
        cy.wait(60000)
    })


    it("hooks no : 03", function () {
        cy.log("hooks no : 03")
    })


    it("hooks no : 04", function () {
        cy.log("hooks no : 04")
    })



})