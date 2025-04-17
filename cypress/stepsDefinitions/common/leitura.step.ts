/// <reference types="cypress" />

export class LeituraStep {
  //Modal de mensagem.
  visualizarMensagemModal(mensagem: string) {
    cy.wait(500);
    cy.verificarMensagemModal(mensagem);
  }

  visualizarInformacaoToast(mensagem: string) {
    cy.wait(500);
    cy.verificaMensagemToast(mensagem);
  }

  visualizarMensagemValidacao(mensagem: string) {
    cy.wait(500);
    cy.verificaShielError(mensagem);
  }

  visualizarModal(nomeModal: string) {
    cy.wait(500);
    cy.verificaModalExistente(nomeModal);
  }

  verificarValorNaColuna(coluna: string, valor: string) {
    cy.verificarValorLista(coluna, valor);
  }
}
