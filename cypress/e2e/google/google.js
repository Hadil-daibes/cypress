import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the Conduit login page", () => {
  cy.visit("https://react-redux.realworld.io/#/login");
});

When("I type the email and password", () => {
  cy.get('input[type="email"]').type("Hadil+1@userpilot.co")
  cy.get('input[type="password"]').type("Hadeel99@")
});

When("I click on the Sign in button", () => {
  cy.get(".btn").contains("Sign in").click();
});

Then("{string} should be show", (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible');
});
