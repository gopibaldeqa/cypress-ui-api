describe("table", function () {
    it("reading", function () {

        cy.visit("https://kitchen.applitools.com/ingredients/table")

        cy.get("table[id='fruits-vegetables'] tbody tr").each(($elm, index) => {
            console.log(index);
            cy.get($elm).invoke("text").then(params => {
                cy.log(params)

            })
        })
    })


})