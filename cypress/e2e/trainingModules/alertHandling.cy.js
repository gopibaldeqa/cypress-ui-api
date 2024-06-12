describe("retry tc", function () {

    it("should retry the failed scenario", function () {
        cy.visit("https://www.letskodeit.com/practice")
        //given invalid locator
        cy.get('#confirmbtn').click()

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
           // return false; // Simulates clicking "Cancel"
          });
      

    })
})