const { describe } = require("mocha");

describe("Cypress first test", function () {

    it("should login to app", function () {
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")
    })

})