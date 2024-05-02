
describe("Load URL", function () {

    it("Load URL", function () {
        // Wait 30 seconds for page 'load' event
        cy.visit('https://demo.nopcommerce.com/', { timeout: 30000 })
    })

})