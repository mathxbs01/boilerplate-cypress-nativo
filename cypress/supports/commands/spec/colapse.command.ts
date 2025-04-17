/// <reference types="cypress"/>

Cypress.Commands.add(
  "abrirOuFecharColapse",
  (modulo: string, acaoColapse: AcaoColapseType) => {
    if (acaoColapse == "abro")
      cy.get("ion-card-header .title-box")
        .contains("ion-card-title", modulo)
        .parents("ion-card")
        .contains("i", "keyboard_arrow_down")
        .click();

    if (acaoColapse == "fecho")
      cy.get("ion-card-header .title-box")
        .contains("ion-card-title", modulo)
        .parents("ion-card")
        .contains("i", "keyboard_arrow_up")
        .click();
  }
);
