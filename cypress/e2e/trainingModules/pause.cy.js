const { describe } = require("mocha");

describe("pause", function () {

    it("should login to app", function () {
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")
        cy.get(".email").type("balde.gopi@gmai.com")
        cy.pause()
        cy.get(".password").type("1234566789")
        //developer tools should be opened
        cy.debug()
        cy.get(".button-1.login-button").click()
    })

})