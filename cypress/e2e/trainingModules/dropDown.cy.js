const { describe } = require("mocha");

describe("dropdown", function(){

    it("dropdown selection",function(){
        cy.visit("https://demo.nopcommerce.com/register?returnUrl=%2Fapparel")
        // cy.get('[name="DateOfBirthMonth"]').click()
        // cy.get('[name="DateOfBirthMonth"]').select('January');
        cy.get('#customerCurrency').select('Euro');


    })
})