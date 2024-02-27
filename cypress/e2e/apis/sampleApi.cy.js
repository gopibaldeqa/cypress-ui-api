const { describe } = require("mocha");

describe("get api method", () => {
    it("get api method", () => {
        cy.request("GET", "https://www.boredapi.com/api/activity").then((Response) => {
            cy.log(JSON.stringify(Response))
            cy.log(Response.body.activity)
            cy.log(Response.body.length)
            //expect(Response.body.activity).to.eq("Go on a fishing trip with some friends")
        })
    })

    it("post api method", () => {
        cy.request({
            method: "POST", url: "https://reqres.in/api/users", 
            body: {
                "name": "Gopi Balde",
                "job": "Testing"
            }
        }).then((response) => {
            //cy.log(JSON.stringify(response.body))
            cy.log(response.body.name)
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq("Gopi Balde")
        })
    })

    it("put api method", () => {
        cy.request({
            method: "PUT", url: "https://reqres.in/api/users/2", body: {
                "name": "Gopi Balde",
                "job": "Testing"
            }
        }).then((response) => {
            //cy.log(JSON.stringify(response.body))
            cy.log(response.body.name)
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq("Gopi Balde")
        })
    })

    it("get with query params api method", () => {
        cy.request({
            method: "get",
            url: "https://api.nationalize.io",
            qs: {
                "name": "nathaniel"
            }
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200)
        })
    })
})