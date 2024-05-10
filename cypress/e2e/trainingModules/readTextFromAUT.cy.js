const { describe } = require("mocha");
var myText
describe("read text", function () {

    it("should login to app", function () {
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")
        cy.get(".page-title").invoke('text').then(text => {
             myText = text
            cy.log(myText)
        })
    })

    it("2 nd scenario should login to app", function () {

            cy.log(myText)
    })
})