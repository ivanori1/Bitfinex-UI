/**
 * The support/commands.js is file where all separated commands are placed
 * Cypress.Commands.add() create new function that could be call and reuse
 * multiple time in any integration/spec.js file
 */

/*
Command for verifiying every element visiblity in home-page
 method get CSS (from fixture/locators.json) and should assert it is visible
*/

Cypress.Commands.add("assertHomePageLoaded", () => {
  cy.fixture("locators").as("locatorFixture");
  cy.get("@locatorFixture").then(locator => {
    cy.get(locator.logo).should("be.visible");
    cy.get(locator.demoButton).should("be.visible");
  });
});

Cypress.Commands.add("openDemoPage", () => {
  cy.fixture("locators").as("locatorFixture");
  cy.get("@locatorFixture").then(locator => {
    cy.get(locator.demoButton).click();
    cy.url().should("include", "/trading");
  });
});

Cypress.Commands.add("startTour", () => {
  cy.fixture("locators").as("locatorFixture");
  cy.get("@locatorFixture").then(locator => {
    cy.get(locator.tourButton).click();
  });
});

Cypress.Commands.add("navigateTour", () => {
  cy.fixture("locators").as("locatorFixture");
  cy.get("@locatorFixture").then(locator => {
    cy.get(locator.tourTitle).should("have.text", "Tickers and Navigation");
    cy.get(locator.nextButton).click();
  });
});
