const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  chromeWebSecurity: false,

  // reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      //log related code
      on('task',
        {
          log(message) {
            console.log(message)

            return null
          },
        });
    },

    //executes code once test case failed
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },

  defaultCommandTimeout: 3000


});
