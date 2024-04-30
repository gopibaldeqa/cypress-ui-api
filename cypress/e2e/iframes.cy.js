
const { describe } = require("mocha");
import 'cypress-iframe'
describe("shift to new window", function () {
    it("new tab", function () {
        cy.visit("https://kitchen.applitools.com/ingredients/iframe")

        //it is working with frameloaded and iframe
        cy.frameLoaded("#the-kitchen-table")
        cy.iframe('#the-kitchen-table').contains('Name').click()

        //it is working with only iframe
        cy.iframe('#the-kitchen-table').contains('Name').click()
    })

})