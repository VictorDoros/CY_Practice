describe("Test Suite ", () => {
  /**
   * Test Suite
   */
  it("Access Goolge and check the URL", () => {
    //Reach the page https://www.google.com/
    cy.visit("https://www.google.com/");
    //Check the URL
    cy.url().should("eq", "https://www.google.com/");
  });

  /**
   * Test Suite
   */
  it("Access Youtube and check the URL", () => {
    //Reach the page https://www.google.com/
    cy.visit("https://www.youtube.com/");
    //Check the URL
    cy.url().should("eq", "https://www.youtube.com/");
  });

  after(() => {
    Cypress.session.clearAllSavedSessions();
  });
});
