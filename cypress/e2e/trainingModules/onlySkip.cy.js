const { describe } = require("mocha");

describe("only skip scenarios", function () {

    it.only("only scenario", function () {
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")

    })
    it.skip("skip scenario", function () {
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")

    })

})