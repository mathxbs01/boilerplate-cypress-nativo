/// <reference types="cypress"/>

Cypress.Commands.add("verificarMensagemModal", (mensagem: string) => {
  cy.get("app-informative-modal")
    .find("p")
    .should("be.visible")
    .invoke("text")
    .then((text) => {
      expect(text.trim()).to.eq(mensagem.trim());
    });
});

Cypress.Commands.add("verificaMensagemToast", (mensagem: string) => {
  cy.get("app-toast")
    .find('div[class="description"]')
    .should("be.visible")
    .invoke("text")
    .then((text) => {
      expect(text.trim()).to.eq(mensagem.trim());
    });
});

Cypress.Commands.add("verificaModalExistente", (nomeModal: string) => {
  cy.get("app-modal-input")
    .find("ion-title")
    .should("be.visible")
    .invoke("text")
    .then((text) => {
      expect(text.trim()).to.eq(nomeModal.trim());
    });
});
