const { describe } = require("mocha");

describe("Drag and drop", function () {

    it("Drag and drop element", function () {
        cy.visit("https://kitchen.applitools.com/ingredients/drag-and-drop")
        const dataTransfer = new DataTransfer()

        cy.get('#menu-fried-chicken').trigger('dragstart', { dataTransfer });

        cy.get("#plate").trigger("drop",{dataTransfer})


    })

})