const { describe } = require("mocha");

describe("Assertions", function () {

    it("should login to app", function () {
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")
        cy.get(".email").type("balde.gopi@gmai.com")
        cy.get(".password").type("1234566789")
        cy.wait(2000)
        cy.get(".password").clear().type("987654332")
        cy.wait(2000)
        cy.log("click on login button")
        cy.get(".button-1.login-button").click()


    })


})