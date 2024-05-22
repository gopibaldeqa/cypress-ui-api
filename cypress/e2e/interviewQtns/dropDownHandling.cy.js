const { describe } = require("mocha");

describe("dropdown", function(){

    it("dropdown selection",function(){
        cy.visit("https://kitchen.applitools.com/ingredients/select")

        cy.get("#spices-select-single>option").each(($elm,index)=>{
            cy.get($elm).invoke("text").then(myText=>{
                cy.log(myText,index)
                if(myText=="Ginger"){
                }
            })
        })

    })
})