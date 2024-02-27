const { describe } = require("mocha");

describe("api demo", () => {
    it("get api method", () => {
        cy.request("get", "https://www.boredapi.com/api/activity").then((response) => {
            cy.log(response)
        })
    })
})