// import { Utility } from "../../utils/envData";
// import HomePage from "../../pageObjects/homepage";
// const envData = new Utility().getEnvData()
// import Exceldata from "../../pageObjects/downloadCsv";
//import { AfterAll } from "cucumber";
// const addTank = require("../../fixtures/test01/AddTankTestData.json")
// const callAsync = require("../../pageObjects/jsonFile")
//const reportsData = require("../../downloads/reports.json")

// describe('Read CSV File', () => {
//   it('should verify text in csv', () => {
//     cy.login(envData.loginUrl, envData.userName, envData.password)
//     HomePage.verifySuccessMsg(envData.verifySuccessMsg)
//     Exceldata.clickDownloadcsv()
//     Exceldata.clickDownloadbtn()
//   });
// });


describe('Convert CSV to JSON', () => {
  it('should convert CSV to JSON', () => {
    const csvFilePath = 'cypress/fixtures/test01/sampleFileData.csv';
    const jsonFilePath = 'cypress/fixtures/test01/sampleFileData.json';
    cy.convertCsvToJson(csvFilePath, jsonFilePath);
    // Additional assertions or actions can be added here
  });
});







// // // working
// describe('Convert CSV to JSON', () => {
//   it('should Convert CSV to JSON', () => {
//     cy.exec('node cypress/pageObjects/convertCsvToJson.js');
//     cy.readFile('cypress/fixtures/test01/sampleFileData.json').then((jsonContent) => {
//       // const jsonData = JSON.parse(jsonContent)
// cy.log(JSON.stringify(jsonContent))

//     })

//   });
// })


