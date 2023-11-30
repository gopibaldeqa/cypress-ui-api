class HomePage {
  txtUserName = "#username";
  txtPassword = "#password";
  btnLogin = "#kc-login";
  txtMessage = ".p-toast-detail";

  verifySuccessMsg(expectedText) {
    cy.get(this.txtMessage).should("have.text", expectedText);
  }
}
const homePage = new HomePage();
export default homePage;
