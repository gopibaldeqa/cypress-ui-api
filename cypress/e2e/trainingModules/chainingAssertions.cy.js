const { describe } = require("mocha");

describe("chaining Assertions", function () {

    it("should login to app", function () {
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")
        cy.get(".email").type("balde.gopi@gmai.com")
        cy.get(".password").type("1234566789")
        cy.get(".button-1.login-button").click()
        //chaining assertions
        cy.get("div.page-title")
        .should('contain',"Welcome, Please Sign In!")
        .should('have.length',1)
        .should('be.visible')
        .should('have.class','page-title')
        .get(".message-error.validation-summary-errors")
        .should("contain","Login was unsuccessful. Please correct the errors and try again.")

    })


})