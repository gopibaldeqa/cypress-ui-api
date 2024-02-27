
it ('running scripts in chrome browser',() => {
    cy.visit("https://projectsangam2.azurewebsites.net/")
    cy.get(".main-get-started-button").click()
    cy.get('input[aria-label="Enter your mobile number"]').type("1048523706")
    // cy.get(".PhoneInputInput").type("648389")
    })