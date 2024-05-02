const { describe } = require("mocha");
const testData = require("../../fixtures/test01/test01.json")
describe("chaining Assertions", function () {

    it("should login to app", function () {
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")
        cy.get(".email").type(testData.fix.userName
        )
        cy.get(".password").type(testData.fix.password)
        cy.get(".button-1.login-button").click()


    })


})