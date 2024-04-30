describe('Coderbyte page navigation', function(){
    it("should navigate to settings page",function(){
      cy.visit("https://coderbyte.com/profile");
      cy.contains('settings').click();
      cy.url().should('include','/settings');
    });
  });