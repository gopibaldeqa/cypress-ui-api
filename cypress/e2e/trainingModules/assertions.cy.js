const { describe } = require("mocha");

describe("Assertions", function () {

    it("should login to app", function () {
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")
        cy.get(".email").type("balde.gopi@gmai.com")
        cy.get(".password").type("1234566789")
        cy.get(".button-1.login-button").click()
    })

})