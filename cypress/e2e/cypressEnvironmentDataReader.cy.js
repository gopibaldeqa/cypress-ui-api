// In your Cypress test file (e.g., cypress/integration/myTest.spec.js)

describe('My Test Suite', () => {
    it('should access configuration values', () => {
      // Accessing configuration values
      const baseUrl = Cypress.env('baseUrl');
      const defaultCommandTimeout = Cypress.config('defaultCommandTimeout');
      const viewportWidth = Cypress.config('viewportWidth');
      const viewportHeight = Cypress.config('viewportHeight');
      const fixturesFolder = Cypress.config('fixturesFolder');
      const integrationFolder = Cypress.config('integrationFolder');
      const pluginsFile = Cypress.config('pluginsFile');
      const supportFile = Cypress.config('supportFile');
      const video = Cypress.config('video');
      const screenshotsFolder = Cypress.config('screenshotsFolder');
      const videosFolder = Cypress.config('videosFolder');
      const chromeWebSecurity = Cypress.config('chromeWebSecurity');
     // const environment = Cypress.config('env').environment;
  
      // Now you can use these values as needed in your test
      // For example:
      cy.log(`Base URL: ${baseUrl}`);
     // cy.log(`Environment: ${environment}`);
      // Use other configuration values as needed in your tests








      Cypress.config().baseUrl;
    });
  });
  