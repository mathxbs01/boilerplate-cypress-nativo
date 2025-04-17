import { IPageModel } from "../../supports/models/pagesModel/Ipages.model";
import {
  loginElementInput,
  loginElementBotao,
  ILoginServicePageElementsInput,
  ILoginServicePageElementsBotao,
  ILoginServicePageElementsLink,
} from "./login.page.elements";

export class LoginPage
  implements
    IPageModel<
      ILoginServicePageElementsInput,
      ILoginServicePageElementsBotao,
      ILoginServicePageElementsLink
    >
{
  public verificarValorPreenchido(
    campo: keyof ILoginServicePageElementsInput,
    valor: string
  ): void {
    cy.verificaCampoPreenchido(loginElementInput[campo], valor);
  }

  public escreverCampo(
    campo: keyof ILoginServicePageElementsInput,
    valor: string,
    forcarEnter: boolean = false
  ) {
    cy.escreverValorNoCampo(
      loginElementInput[campo],
      String(valor),
      forcarEnter
    );
  }

  public limparCampo(campo: keyof ILoginServicePageElementsInput) {
    cy.get(loginElementInput[campo]).clear({
      force: true,
    });
  }

  public clicarBotao(nomeBotao: keyof ILoginServicePageElementsBotao) {
    cy.buscarBotaoPorTexto(loginElementBotao[nomeBotao],).click({
      force: true,
    });
  }
}
