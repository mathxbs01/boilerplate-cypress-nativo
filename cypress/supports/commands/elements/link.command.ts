/// <reference types="cypress"/>

Cypress.Commands.add("obterLinkPorTexto", (textoLink: string) => {
  return cy.contains("a", textoLink);
});
