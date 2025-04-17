import { IPageModel } from "../../supports/models/pagesModel/Ipages.model";
import {
  IEsqueciSenhaPageElementsBotao,
  IEsqueciSenhaPageElementsInput,
  IEsqueciSenhaPageElementsLink,
  esqueciSenhaElementBotao,
  esqueciSenhaElementInput,
  esqueciSenhaElementLink,
} from "./esqueciSenha.page.elements";

export class EsqueciSenhaPage
  implements
    IPageModel<
      IEsqueciSenhaPageElementsInput,
      IEsqueciSenhaPageElementsBotao,
      IEsqueciSenhaPageElementsLink
    >
{
  public verificarRadioSelecionado(
    campo: keyof IEsqueciSenhaPageElementsInput
  ): void {
    cy.verificaRadioButtonSelecionado(esqueciSenhaElementInput[campo]);
  }

  public verificarValorPreenchido(
    campo: keyof IEsqueciSenhaPageElementsInput,
    valor: string
  ): void {
    cy.verificaCampoPreenchido(esqueciSenhaElementInput[campo], valor);
  }

  public escreverCampo(
    campo: keyof IEsqueciSenhaPageElementsInput,
    valor: string,
    forcarEnter: boolean = false
  ) {
    cy.escreverValorNoCampo(
      esqueciSenhaElementInput[campo],
      String(valor),
      forcarEnter
    );
  }

  public clicarRadioButton(campo: keyof IEsqueciSenhaPageElementsInput) {
    cy.contains("label.radio-label", esqueciSenhaElementInput[campo])
      .find('input[type="radio"]')
      .click();
  }

  public clicarCheckBox(campo: keyof IEsqueciSenhaPageElementsInput) {
    cy.contains("ion-label", esqueciSenhaElementInput[campo])
      .parent()
      .find("ion-checkbox")
      .click({ force: true });
  }

  public limparCampo(campo: keyof IEsqueciSenhaPageElementsInput) {
    cy.get(esqueciSenhaElementInput[campo]).clear({
      force: true,
    });
  }

  public selecionarValor(
    campo: keyof IEsqueciSenhaPageElementsInput,
    valor: string
  ) {
    cy.selecionarValorNoCampo(esqueciSenhaElementInput[campo], String(valor));
  }

  public clicarBotao(nomeBotao: keyof IEsqueciSenhaPageElementsBotao) {
    cy.buscarBotaoPorTexto(esqueciSenhaElementBotao[nomeBotao]).click({
      force: true,
    });
  }

  public clicarLink(nomeHiperLink: keyof IEsqueciSenhaPageElementsLink) {
    cy.obterLinkPorTexto(esqueciSenhaElementLink[nomeHiperLink]).click({
      force: true,
    });
  }
}
