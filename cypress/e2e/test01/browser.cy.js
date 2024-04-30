it('log browser info', () => {
    console.log(Cypress.browser)
    cy.log(JSON.stringify(Cypress.browser))
    {

        //   channel: 'stable',
        //   displayName: 'Chrome',
        //   family: 'chromium',
        //   isChosen: true,
        //   majorVersion: 80,
        //   name: 'chrome',
        //   path: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        //   version: '80.0.3987.87',
        //   isHeaded: true,
        //   isHeadless: false
    }

    //cy.visit('https://docs.cypress.io')
    //cy.request('/api/commands/visit') //  URL is  http://localhost:8080/users/1.json
    // cy.log("abcd")
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // let text = '{"firstName":"John", "lastName":"Doe"}';

    // let length = fruits.length;
    // cy.log(length)
    // for (let index = 0; index < length; index++) {
    //     cy.log(index)

    // }
    // expect("acd").should('not.include.text', 'hello')
})