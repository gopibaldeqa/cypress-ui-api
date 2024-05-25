// describe("pancard number syntax validation", function () {


//     it("should have correct syntax", function () {

//         var panNumber = "ABCDE12342"
//         var splitNum = panNumber.split("")
//         cy.log(JSON.stringify(splitNum))
//         // expect(splitNum[0]).to.be.string;
//         // expect(splitNum[1]).to.be.a('string');
//         // expect(splitNum[2]).to.be.a('string');
//         // expect(splitNum[3]).to.be.a('string');
//         // expect(splitNum[4]).to.be.a('string');
//         // expect(splitNum[9]).to.be.a('string');

//         for (let index = 0; index < splitNum.length; index++) {
//             if (index == 5 || index == 6 || index == 7 || index == 8) {
//                 expect(parseInt(splitNum[index])).to.be.a('number');
//             }
//             if (index == 0 || index == 1 || index == 2 || index == 3 || index == 4||index == 9) {
//                 expect(splitNum[index]).to.be.a('string');
//             }

//         }

//         // expect(parseInt(splitNum[5])).to.be.a('number');
//         // expect(parseInt(splitNum[6])).to.be.a('number');
//         // expect(parseInt(splitNum[7])).to.be.a('number');
//         // expect(parseInt(splitNum[8])).to.be.a('number');

//     })
// })

describe('PAN Number Validation', () => {
    it('should verify the PAN number syntax using split and for loop', () => {
      const panNumber = "ABCDE1234H";
      const splitNum = panNumber.split("");
  
      // Validate the length
      expect(splitNum).to.have.lengthOf(10);
  
      // Validate first five characters are uppercase letters
      for (let i = 0; i < 5; i++) {
        expect(splitNum[i]).to.be.a('string').that.matches(/[A-Z]/);
      }
  
      // Validate next four characters are digits
      for (let i = 5; i < 9; i++) {
        expect(splitNum[i]).to.be.a('string').that.matches(/[0-9]/);
      }
  
      // Validate the last character is an uppercase letter
      expect(splitNum[9]).to.be.a('string').that.matches(/[A-Z]/);
    });
  });
  