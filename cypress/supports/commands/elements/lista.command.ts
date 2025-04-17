/// <reference types="cypress"/>

Cypress.Commands.add("verificarValorLista", (coluna: string, valor: string) => {
  cy.get("table tbody tr").each(($row) => {
    cy.wrap($row)
      .find(`td[data-title="${coluna}"]`)
      .within(() => {
        cy.get("p, span").should("contain.text", valor);
      });
  });
});

Cypress.Commands.add("acaoLista", (acao: AcoesListaType) => {
  cy.buscarBotaoPorTexto("⋮").click();

  cy.get(".dropdown-content").buscarBotaoPorTexto(acao).click();
});
