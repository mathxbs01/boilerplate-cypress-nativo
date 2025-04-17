/// <reference types="cypress" />
import { IPageModel } from "../../supports/models/pagesModel/Ipages.model";
import { PageModel } from "../../supports/models/pagesModel/pages.model";

let funcionalidadeAtual: FuncionalidadeType;
let page: IPageModel<any, any, any>;

beforeEach(() => {
  funcionalidadeAtual = Cypress.spec.name.split(".")[0] as FuncionalidadeType;

  page = PageModel.getPage(funcionalidadeAtual);

  if (!page)
    throw new Error(`Funcionalidade desconhecida: ${funcionalidadeAtual}`);
});

export class EscritaStep {
  // Método para tentativa de habilitar "re-captcha"
  validacaoCaptcha() {
    cy.wait(500);
    cy.get("iframe")
      .first()
      .then((recaptchaIframe) => {
        const body = recaptchaIframe.contents();
        cy.wrap(body)
          .find(".recaptcha-checkbox-border")
          .should("be.visible")
          .click();
      });
  }

  // Métodos associados a inputs.
  preencheCampoValor<T>(campo: keyof T, valor: string) {
    if (valor === "") return;
    cy.wait(500);
    if (page.escreverCampo) page.escreverCampo(campo, valor);
  }

  selecionaOpcaoValor<T>(campo: keyof T, valor: string) {
    if (valor === "") return;
    cy.wait(500);
    if (page.selecionarValor) page.selecionarValor(campo, valor);
  }

  limparCampos<T>(campo: keyof T) {
    cy.wait(500);
    if (campo === "") return;
    if (page.limparCampo) page.limparCampo(campo);
  }

  clicarRadioButton<T>(nomeRadio: keyof T) {
    cy.wait(500);
    if (page.clicarRadioButton) page.clicarRadioButton(nomeRadio);
  }

  clicarCheckBox<T>(nomeCheckBox: keyof T) {
    cy.wait(500);
    if (page.clicarCheckBox) page.clicarCheckBox(nomeCheckBox);
  }

  aguardarSegundos(periodo: number) {
    cy.wait(periodo * 1000);
  }

  verificarRadioSelecionado<T>(nomeRadio: keyof T) {
    if (page.verificarRadioSelecionado)
      page.verificarRadioSelecionado(nomeRadio);
  }

  verificarOpcaoSelecionada<T>(campo: keyof T, valor: string) {
    if (page.verificarOpcaoSelecionada)
      page.verificarOpcaoSelecionada(campo, valor);
  }

  verificarValorPreenchido<T>(campo: keyof T, valor: string) {
    if (page.verificarValorPreenchido)
      page.verificarValorPreenchido(campo, valor);
  }

  verificarCampoDesabilitado<T>(campo: keyof T) {
    if (page.verificarCampoDesabilitado) page.verificarCampoDesabilitado(campo);
  }

  // Botões
  clicarBotao<T>(nomeBotao: keyof T) {
    cy.wait(500);
    if (page.clicarBotao) page.clicarBotao(nomeBotao);
  }

  clicarDropdownFiltro() {
    cy.wait(500);
    cy.clicarFiltroRefinado();
  }

  // Links
  clicarLink<T>(nomeLink: keyof T) {
    cy.wait(500);
    if (page.clicarLink) page.clicarLink(nomeLink);
  }

  // Menu
  expandirMenuLateral() {
    cy.wait(500);
    cy.expandirMenu();
  }

  selecionarMenu(nomeMenu: string) {
    cy.wait(500);
    cy.clicarMenu(nomeMenu);
  }

  selecionarSubmenu(nomeSubMenu: string) {
    cy.wait(500);
    cy.clicarSubMenu(nomeSubMenu);
  }

  // Ações de ícone
  clicarIcone(acao: AcoesListaType) {
    cy.acaoLista(acao);
  }

  // Upload de documento
  realizaruploadDocumento(tipoDocumento: TipoDocumentosType, campo: string) {
    if (page.uploadDocumento) page.uploadDocumento(campo, tipoDocumento);
  }

  // Massa REST API
  cadastrarMassaAtual() {
    cy.cadastrarMassa(funcionalidadeAtual);
  }

  excluirMassaAtual() {
    cy.excluirMassa(funcionalidadeAtual);
  }

  // Colapses
  selecionarOpcoesColapseModulo(modulo: string, dataTable: any) {
    const opcoes = dataTable.hashes();

    cy.abrirOuFecharColapse(modulo, "abro");

    opcoes.forEach((nomeCheckBox: any) => {
      if (page.clicarCheckBox) page.clicarCheckBox(nomeCheckBox.OPCAO);
    });

    cy.abrirOuFecharColapse(modulo, "fecho");
  }
}
