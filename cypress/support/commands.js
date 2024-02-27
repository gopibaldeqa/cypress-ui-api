// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// import cypress from "cypress";
import homePage from "../pageObjects/homepage";

Cypress.Commands.add("addContext", (context) => {
  cy.once("test:after:run", (test) => addContext({ test }, context));
});

//---This is a re-usable custom command for login into application
Cypress.Commands.add("login", (url, username, password) => {
  cy.visit(url);
  cy.get(homePage.txtUserName).type(username);
  cy.get(homePage.txtPassword).type(password);
  cy.get(homePage.btnLogin).click();
  cy.get(homePage.txtProjectListing, { timeout: Cypress.config("defaultCommandTimeout") }).should("be.visible")
});

// cypress.Commands.add("navigateToLogInPage",()=>{

// })



import fs from 'fs';
import Papa from 'papaparse';
 
// Cypress.Commands.add('convertCsvToJson', (csvFilePath, jsonFilePath) => {
//   const csvData = fs.readFileSync(csvFilePath, 'utf8');
//   const jsonData = Papa.parse(csvData, { header: true, dynamicTyping: true }).data;
//   fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData));
// });
 
Cypress.Commands.add('convertCsvToJson', () => {
  const command = 'node cypress/pageObjects/convertCsvToJson.js'; // Adjust the path if necessary
  cy.exec(command);
});