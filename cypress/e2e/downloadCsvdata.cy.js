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

// // // Example test
// describe('Convert CSV to JSON', () => {
//   it('should Convert CSV to JSON', () => {
//     cy.exec('node cypress/pageObjects/convertCsvToJson.js');
//     cy.readFile('cypress/downloads/reports.json').then((jsonContent) => {
//       const jsonData = JSON.parse(jsonContent)

//       // Now you have the JSON data in the variable 'jsonData'

//       // You can perform verifications or assertions here
//       // For example, if jsonData contains a field 'text', you can do:
//       expect(jsonData.text).to.equal('Hydrogenfuel')
//     })

//   });
// })


// describe('Load JSON File Without Fixture', () => {

//   it('Should have loaded JSON data', () => {
//     callAsync("cypress/downloads/reports.json").then((data) => {
//       cy.log(data)
//     });
//     cy.log(reportsData[0])
//     var set_01Data = reportsData[0]
//     cy.log(set_01Data["Tank Name"])
//     var firstTankName = set_01Data["Tank Name"]
//     cy.log(firstTankName)
//     expect(firstTankName).to.equal('111168124906432 -- 2023-10-18T09:20:22.380Z');
//   })
// })


