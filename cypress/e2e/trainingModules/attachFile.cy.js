describe('Tutorialspoint Test', function () {
    // test case
    it('Test Case6', function (){
       //file to be uploaded path in project folder
       const p = 'Benefits-of-API-Testing.jpg'
       // launch URL
       cy.visit("https://the-internet.herokuapp.com/upload")
       //upload file with attachFile
       cy.get('#file-upload').attachFile(p)

       //click on upload
       cy.get('#file-submit').click()
       //verify uploaded file
      //  cy.get('#uploaded-files').contains('Picture')
    });

    it('debug session', () => {
      cy.session('id', () => {
          
      })
      .then(async () => {
          const sessionData = await Cypress.sessiongetCurrentSessionData()
          Cypress.session.clearAllSavedSessions()
          cy.debug()
      })
  })

 });