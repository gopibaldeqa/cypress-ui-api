

// describe("read text", function () {
//   var userName = "GB****************4S"
//   it("should contain * in middle ", function () {
//     cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")

//     cy.get(".email").type(userName)
//     cy.wait(1000)

//     cy.get(".email").invoke("val").then(maskedUserName => {

//       cy.log(maskedUserName)

//       //get first two letetters, middle values and end two letters from text field
//       var initialLettersFromTextField = maskedUserName.slice(0, 2)
//       var endLettersFromTextField = maskedUserName.slice(-2)
//       var middleValueFromTextField = maskedUserName.slice(2, -2)

//       //get first two letetters and end two letters from input sent
//       var initialLettersFromInput = userName.slice(0, 2)
//       var endLettersFromInput = userName.slice(-2)

//       //validating first and last two letters are matching to input values
//       expect(initialLettersFromInput).equals(initialLettersFromTextField)
//       expect(endLettersFromInput).equals(endLettersFromTextField)

//       //validating all middle values are matching to *'s
//       var spittedValues = middleValueFromTextField.split("")
//       for (let index = 0; index < spittedValues.length; index++) {
//         expect(spittedValues[index]).equals("*")
//       }
//     })
//   })
// })



describe("read text", function () {
  var username = "GB****************4S";

  it("should contain * in the middle", function () {
    cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F");

    cy.get(".email").type(username);
    cy.wait(1000);

    // var username = "GB****************4S";
    cy.get(".email").invoke("val").then(maskedUserName => {

      cy.log(maskedUserName);

      // Get the first two letters, middle values, and the last two letters from the text field
      var initialLettersFromTextField = maskedUserName.slice(0, 2);
      var endLettersFromTextField = maskedUserName.slice(-2);
      var middleValueFromTextField = maskedUserName.slice(2, -2);

      // Get the first two letters and the last two letters from the input sent
      var initialLettersFromInput = username.slice(0, 2);
      var endLettersFromInput = username.slice(-2);

      // Validate that the first and last two letters match the input values
      expect(initialLettersFromInput).to.equal(initialLettersFromTextField);
      expect(endLettersFromInput).to.equal(endLettersFromTextField);

      // Validate that all middle values are '*' characters
      var splitValues = middleValueFromTextField.split("");
      for (let index = 0; index < splitValues.length; index++) {
        expect(splitValues[index]).to.equal("*");
      }
    });
  });
});
