/// <reference types="cypress"/>

Cypress.Commands.add("buscarBotaoPorTexto", (textoBotao: string) => {
  return cy.contains("ion-button, button", textoBotao);
});

Cypress.Commands.add("clicarFiltroRefinado", () => {
  cy.get(
    "app-filter-dropdown,".concat(
      "app-filter-dropdown-area-map button,",
      "app-filter-dropdown-user button,",
      "app-filter-dropdown-user-control button"
    )
  ).click();
});
