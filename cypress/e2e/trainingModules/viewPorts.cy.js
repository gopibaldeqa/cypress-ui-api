

describe("read text", function () {

    it("should login to app", function () {
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")

        cy.wait(5000)
        cy.scrollTo(0, 1080) // Scroll the window 500px down
        // cy.get('.sidebar').scrollTo('bottom') // Scroll 'sidebar' to its bottom

    })
}) 
