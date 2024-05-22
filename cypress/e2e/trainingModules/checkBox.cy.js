const { describe } = require("mocha");

describe("Assertions", function () {

    it("should login to app", function () {
        cy.visit("https://demo.nopcommerce.com/register?returnUrl=%2F")

       cy.get("input[type='checkbox']").check()
       cy.get("input[type='checkbox']").uncheck()
    })


})