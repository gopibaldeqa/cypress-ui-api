describe('capture screenshot', function () {
    it('first screenshto', function () {
        cy.visit("https://demo.nopcommerce.com/")
        cy.screenshot()
        cy.screenshot("homepage")
        cy.get(".button-1.search-box-button").screenshot("searchImg")

        // run from command prompt 
        // npx cypress run --browser chrome --headed --spec "cypress\e2e\captureRecording\captureScreenshot.cy.js"
        
    })
})