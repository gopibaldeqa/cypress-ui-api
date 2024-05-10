const { describe } = require("mocha");

describe("only skip scenarios", function () {

    it("only scenario", function () {
        cy.log(Cypress.env("ENV"))
        cy.wait(10000)
        console.log(Cypress.env("ENV"));
    })


})