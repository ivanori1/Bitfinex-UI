/**
 * The support/commands.js is file where all separated commands are placed
 * Cypress.Commands.add() create new function that could be call and reuse
 * multiple time in any integration/spec.js file
 */

/*
Command for verifiying every element visiblity in home-page
 method get CSS (from fixture/locators.json) and should assert it is visible
*/
//Assert that home page contains logo
Cypress.Commands.add("assertHomePageLoaded", () => {
  cy.fixture("locators").as("locatorFixture");
  cy.get("@locatorFixture").then(locator => {
    cy.get(locator.logo).should("be.visible");
    cy.get(locator.demoButton).should("be.visible");
  });
});
// Click on demo button on home page
Cypress.Commands.add("openDemoPage", () => {
  cy.fixture("locators").as("locatorFixture");
  cy.get("@locatorFixture").then(locator => {
    cy.get(locator.demoButton).click();
    cy.url().should("include", "/trading");
  });
});
//Click on Tour button, but sometimes, tour start without clicking tour button, need to investigate
Cypress.Commands.add("startTour", () => {
  cy.fixture("locators").as("locatorFixture");
  cy.get("@locatorFixture").then(locator => {
    cy.get(locator.tourButton).click();
  });
});
//Just testing first buttons will process start because this solution will repeat code all the time
Cypress.Commands.add("navigateTour", () => {
  cy.fixture("locators").as("locatorFixture");
  cy.get("@locatorFixture").then(locator => {
    cy.get(locator.hopscotchBubble).should("be.visible");
    cy.get(locator.tourTitle).contains("Tickers and Navigation");
    cy.get(locator.stepsCounter).contains("1");
    cy.get(locator.hopscotchNext).click();
  });
});
//Not Working as expected
Cypress.Commands.add("loopNavigateTour", () => {
  cy.fixture("locators").as("locatorFixture");
  cy.get("@locatorFixture").then(locator => {
    for (i = 1; i <= list.length; i++) {
      cy.get(locator.hopscotchBubble).should("be.visible");
      cy.get(locator.hopscotchNext).click();
      i += i;
      //cy.get(locator.stepsCounter).contains(i.toString());
    }
  });
});
//This loop works for testing of tours. Need to make code prettier and to put a list into separate fixture JSON file and integrate here
Cypress.Commands.add("forEachNavigateTour", () => {
  cy.fixture("locators").as("locatorFixture");
  cy.get("@locatorFixture").then(locator => {
    let numCallbackRuns = 1;
    var list = [
      "Tickers and Navigation",
      "Chart",
      "Balances & Wallets",
      "Exchange or Margin",
      "Exchange Trading",
      "Margin Trading",
      "Buying",
      "Selling",
      "Order Book - Bids",
      "Order Book - Asks",
      "Trades",
      "Your Orders",
      "Your Order History",
      "Your Positions",
      "You've finished"
    ];

    list.forEach(function(element) {
      cy.get(locator.hopscotchBubble).should("be.visible");
      cy.get(locator.tourTitle).contains(element);
      cy.get(locator.stepsCounter).contains(numCallbackRuns.toString());
      cy.get(locator.hopscotchNext).click();
      numCallbackRuns ++;
    });
  });
});
