



describe("static value", function () {

    it("only scenario", function () {
        const uuid = () => Cypress._.random(0, 1e6)
        cy.log(uuid)
        const id = uuid()
        cy.log(id)
        const testname = `testname${id}`
        cy.log(testname)


        ////////////////////

        const newRand =Cypress._.random(0, 1e6)
        cy.log(newRand)


    })
    it("using time now  scenario", function () {
        const uuid = Date.now().toString()
        cy.log(uuid)


    })



})