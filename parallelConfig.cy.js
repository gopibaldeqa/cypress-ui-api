// e2e-run-check-otp-after-authentication.js
const cypress = require('cypress')

cypress.run({
  spec: './cypress/e2e/parallelExecution/*.cy.js',
  browser: 'chrome',
})

cypress.run({
  spec: './cypress/e2e/parallelExecution/firefox.cy.js',
  browser: 'chrome',
})