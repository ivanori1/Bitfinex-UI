describe("Smoke Test", () => {
  before(() => {
    // it is only call visti '/' because default url is set in cypres.json
    cy.visit("/");
  });

  context("Home Page", () => {
    it("Assert home page is loaded", () => {
      cy.assertHomePageLoaded();
    });
  });

  context("Trading Page", () => {
    it("Assert home page is loaded", () => {
      cy.openDemoPage();
      cy.startTour();
    });
  });
  
  context("Tour in demo page", () => {
    it("Navigate tour on demo page", () => {
      cy.navigateTour();
    });
  });
});
