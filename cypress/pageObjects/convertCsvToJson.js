const csv = require('csvtojson');
// const fs = require('fs');
 
const csvFilePath = 'cypress/fixtures/test01/sampleFileData.csv';
const jsonFilePath = 'cypress/fixtures/test01/sampleFileData.json';
 
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        fs.writeFile(jsonFilePath, JSON.stringify(jsonObj), (err) => {
            if (err) throw err;
            console.log('Conversion complete!');
        });
    });