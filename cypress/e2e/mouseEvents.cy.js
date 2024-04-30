describe("all mouse hover events", function () {

    it("mousehover to an element", function () {
        cy.visit("http://demo.opencart.com/")
        cy.wait(5000)
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger("mouseover")
        cy.wait(5000)
    })
})