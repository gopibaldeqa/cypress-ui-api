const { describe } = require("mocha");

describe("shift to new window", function () {
    it("new tab", function () {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.wait(10000)
        cy.get('.product-link.product-wrapper.chrome_webstore').invoke("removeAttr", "target").click()
        cy.wait(10000)
        cy.url().should('include', '/chromewebstore')

        // cy.go('back')
        cy.wait(10000)

    })
    // it("without removing attr new window", function () {
    //     cy.visit("https://www.letskodeit.com/practice")
    //     cy.wait(10000)
    //     cy.get('#opentab').then(newTab => {
    //         const hrefTab = newTab.prop('href')
    //         cy.visit(hrefTab)
    //         cy.url().should('include', '/courses')
    //     })
    //     cy.wait(10000)
    //     cy.go('back')
    //     cy.wait(10000)

    // })
})