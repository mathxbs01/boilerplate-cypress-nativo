/// <reference types="cypress"/>

Cypress.Commands.add("dbDelete", () => {
  cy.sqlServer("DELETE dbo.TabelaTeste").then((result) => {
    cy.log("RESULT DELETE DB COMMAND: ", result);
  });
});
