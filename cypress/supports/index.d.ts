/// <reference types="cypress" />

declare namespace Cypress {
  interface ServicesCommands {
    loginUsuario(
      emailUsuario?: string,
      senhaUsuario?: string
    ): Chainable<Element>;
    getToken(): Chainable<string>;
    cadastrarMassa(massa: FuncionalidadeType): Chainable<void>;
    excluirMassa(massa: FuncionalidadeType): Chainable<void>;
    pesquisarMassa(
      massa: FuncionalidadeType,
      body?: any,
      params?: any
    ): Chainable<any>;
    buscaTesteAtual(): Chainable<void>;
    uploadDocumento(
      tipoDocumento: TipoDocumentosType,
      seletor: string
    ): Chainable<void>;
    abrirOuFecharColapse(
      modulo: string,
      acaoColapse: AcaoColapseType
    ): Chainable<void>;
    mudarAba(nomeAba: string): Chainable<void>;
  }

  interface InputCommands {
    escreverValorNoCampo(
      seletor: string,
      textoPreenchimento: string,
      forcarEnter?: boolean
    ): Chainable<JQuery<HTMLElement>>;
    selecionarValorNoCampo(
      seletor: string,
      textoPreenchimento: string
    ): Chainable<void>;
    verificarValorCampo(
      tipoCampo: InputType,
      seletor: string,
      valor: string
    ): Chainable<JQuery<HTMLElement>>;
    verificaShielError(mensagem: string): Chainable<void>;
    verificaRadioButtonSelecionado(seletor: string): Chainable<void>;
    verificaCampoPreenchido(seletor: string, valor: string): Chainable<void>;
    verificarCampoDesabilitado(seletor: string): Chainable<void>;
    verificarOpcaoSelecionada(seletor: string, valor: string): Chainable<void>;
  }

  interface ButtonCommands {
    buscarBotaoPorTexto(nomeBotao: string): Chainable<JQuery<HTMLElement>>;
    clicarFiltroRefinado(): Chainable<void>;
  }

  interface ModalCommands {
    verificarMensagemModal(mensagem: string): Chainable<void>;
    verificaMensagemToast(mensagem: string): Chainable<void>;
    verificaModalExistente(nomeModal: string): Chainable<void>;
  }

  interface ListCommands {
    verificarValorLista(coluna: string, valor: string): Chainable<void>;
    acaoLista(acao: AcoesListaType): Chainable<void>;
  }

  interface LinkCommands {
    obterLinkPorTexto(textoLink: string): Chainable<JQuery<HTMLAnchorElement>>;
  }

  interface MenuCommands {
    expandirMenu(): Chainable<void>;
    clicarMenu(menu: string): Chainable<void>;
    clicarSubMenu(subMenu: string): Chainable<void>;
  }

  interface SqlQueryCommand {
    sqlServer(query: string): Chainable<any>;
  }

  interface DbCommands {
    dbDelete(): Chainable<any>;
  }

  // Unificação no Chainable
  interface Chainable
    extends ServicesCommands,
      InputCommands,
      ButtonCommands,
      ModalCommands,
      ListCommands,
      LinkCommands,
      MenuCommands,
      SqlQueryCommand,
      DbCommands {}
}
