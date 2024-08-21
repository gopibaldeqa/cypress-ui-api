describe("retry tc", function () {

    it("should retry the failed scenario", function () {
        cy.visit("https://demo.nopcommerce.com/")
        //given invalid locator
        cy.get('.nav > :nth-chld(1) > .dropdown-toggle').trigger("mouseover")

    })
})