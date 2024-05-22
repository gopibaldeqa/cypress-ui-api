describe("all mouse hover events", function () {

    it("mousehover to an element", function () {
        cy.visit("https://www.amazon.in/")
        cy.wait(5000)
        cy.get('input#twotabsearchtextbox.nav-input.nav-progressive-attribute').type("Iphone 15").type('{enter}');
        cy.wait(5000)

        cy.get("//span[text()='Sponsored' and @class='a-color-secondary']//ancestor::div[@class='a-section a-spacing-small a-spacing-top-small']//child::div[@class='puisg-row']//child::span[@class='a-price']//child::span[@class='a-offscreen']").should('contains', "156986")
    })
})







//below locator gives the sponsored items cost 

//span[text()='Sponsored' and @class='a-color-secondary']//ancestor::div[@class='a-section a-spacing-small a-spacing-top-small']//child::div[@class='puisg-row']//child::span[@class='a-price']//child::span[@class='a-offscreen']


//below locator gives the product names displayed in page

//a[@class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']//child::span

