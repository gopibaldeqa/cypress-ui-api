const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  chromeWebSecurity:false,

  // reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      //   require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },

  // component: {
  //   devServer: {
  //     framework: "angular",
  //     bundler: "webpack",
  //   },
  //   specPattern: "**/*.cy.ts",
  // },
});
