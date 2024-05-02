
describe("Get & Assert page titles", function () {

    it("should login to app", function () {
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")
        cy.url().should("contain","nopcommerce.com")
        cy.title().should("contain","nopCommerce demo store. Login")

    })


})