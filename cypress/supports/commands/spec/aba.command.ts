Cypress.Commands.add("mudarAba", (nomeAba: string) => {
  cy.get("app-tabs").contains("a", nomeAba).click();
});
