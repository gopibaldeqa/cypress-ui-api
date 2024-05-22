describe('search with item', function () {
  it('verify 10 results', function () {

    var searchTerm = "20+ followers"



    // Visit the page where the search functionality exists
    cy.visit('https://www.google.com/'); // Replace 'your_website_url' with the URL of the website

    // Type the search term into the search input field and submit the search
    cy.get('.gLFyf').type("learntek").type('{enter}');

    // Verify that the search results are displayed
    // cy.get('.search-results').should('be.visible');

    // Initialize a variable to track if the search term is found in the top 10 rows
    let foundInTop10 = false;

    // Loop through the first 10 search result rows
    cy.get('.tjvcx.GvPZzd.cHaqb').each(($row, index) => {
      cy.log("#####################################################################", $row, index)
      if (index < 20) {


        cy.get($row).invoke("text").then(text => {
          cy.log(text)
          if (text.includes(searchTerm)) {
            foundInTop10 = true;

          }
        })
      }
    });

    // Assert that the search term is found in at least one of the top 10 rows
    //expect(foundInTop10).to.be.true;









  })

})