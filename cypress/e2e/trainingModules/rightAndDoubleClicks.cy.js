
const { describe } = require("mocha");

describe("Assertions", function () {

    it("should login to app", function () {
        cy.visit("https://demo.nopcommerce.com/register?returnUrl=%2F")

       cy.get(".page.registration-page div[class='page-title']").dblclick()
       cy.get(".page.registration-page div[class='page-title']").rightclick()
    })


})




