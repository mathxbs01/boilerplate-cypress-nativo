/// <reference types="cypress" />

import {
  IEsqueciSenhaPageElementsBotao,
  IEsqueciSenhaPageElementsInput,
  IEsqueciSenhaPageElementsLink,
} from "../pages/esqueciSenhaPage/esqueciSenha.page.elements";
import { EscritaStep } from "./common/escrita.step";
import { LeituraStep } from "./common/leitura.step";
import { NavegacaoStep } from "./common/navegacao.step";

const escritaStep = new EscritaStep();
const leituraStep = new LeituraStep();
const navegacaoStep = new NavegacaoStep();

describe("Esqueci a senha", () => {
  beforeEach(() => {
    navegacaoStep.visitarDixAeroportos();
  });

  it("Acesso a tela esqueci a senha.", () => {
    navegacaoStep.acessarPaginaPorNome("Login");
    escritaStep.clicarLink<IEsqueciSenhaPageElementsLink>(
      "Esqueci minha senha"
    );
    leituraStep.visualizarModal("Esqueceu sua senha?");
  });

  it("Recupero a senha.", () => {
    navegacaoStep.acessarPaginaPorNome("Login");
    escritaStep.clicarLink<IEsqueciSenhaPageElementsLink>(
      "Esqueci minha senha"
    );
    escritaStep.preencheCampoValor<IEsqueciSenhaPageElementsInput>(
      "Email",
      "usuario@usuario.com"
    );
    escritaStep.clicarBotao<IEsqueciSenhaPageElementsBotao>("Enviar");
    leituraStep.visualizarMensagemModal(
      "Pronto. Caso exista uma conta vinculada a esse e-mail nós enviaremos um link de redefinição de senha. Verifique suas caixas de entrada e spam."
    );
  });

  it("Tenta realizar a recuperação de senha.", () => {
    navegacaoStep.acessarPaginaPorNome("Login");
    escritaStep.clicarLink<IEsqueciSenhaPageElementsLink>(
      "Esqueci minha senha"
    );
    escritaStep.preencheCampoValor<IEsqueciSenhaPageElementsInput>(
      "Email",
      "teste@teste.com"
    );
    escritaStep.clicarBotao<IEsqueciSenhaPageElementsBotao>("Enviar");
    leituraStep.visualizarMensagemModal(
      "Não foi possivel requisitar a recuperação de senha!"
    );
  });
});
