/// <reference types="cypress" />

import { ILoginService } from "../supports/services/httpServices/loginService/login.model";
import {
  ILoginServicePageElementsBotao,
  ILoginServicePageElementsInput,
} from "../pages/loginPage/login.page.elements";
import { EscritaStep } from "./common/escrita.step";
import { LeituraStep } from "./common/leitura.step";
import { NavegacaoStep } from "./common/navegacao.step";

const escritaStep = new EscritaStep();
const leituraStep = new LeituraStep();
const navegacaoStep = new NavegacaoStep();

interface campoValor {
  campo: keyof ILoginServicePageElementsInput;
  valor: string;
  mensagem: string;
}

let usuario: ILoginService;

describe("Esqueci a senha", () => {
  beforeEach(() => {
    navegacaoStep.visitarDixAeroportos();

    cy.fixture("acessos/acesso").then((acessos) => {
      usuario = acessos;
    });
  });

  it("Login Dix Aeroportos.", () => {
    navegacaoStep.acessarPaginaPorNome("Login");
    escritaStep.preencheCampoValor<ILoginServicePageElementsInput>(
      "Email",
      usuario.email
    );
    escritaStep.preencheCampoValor<ILoginServicePageElementsInput>(
      "Senha",
      usuario.senha
    );
    escritaStep.clicarBotao<ILoginServicePageElementsBotao>("Fazer login");
    navegacaoStep.verificarPaginaAtual("Inicial");
  });

  it("Tentativa de login.", () => {
    navegacaoStep.acessarPaginaPorNome("Login");
    escritaStep.preencheCampoValor<ILoginServicePageElementsInput>(
      "Email",
      "usuario@usuario.com"
    );
    escritaStep.preencheCampoValor<ILoginServicePageElementsInput>(
      "Senha",
      "Teste@123"
    );
    escritaStep.clicarBotao<ILoginServicePageElementsBotao>("Fazer login");
    leituraStep.visualizarInformacaoToast(
      "Verifique os dados inseridos e tente novamente."
    );
  });

  it("E-mail e senha inválidos.", () => {
    const campoValor: campoValor[] = [
      {
        campo: "Email",
        valor: "teste",
        mensagem: "E-mail precisa estar em um formato válido",
      },
      {
        campo: "Senha",
        valor: "teste@teste.com",
        mensagem:
          "A senha deve conter pelo menos, uma letra maiúscula, uma letra minúscula, um número, um caractere especial, 8 caracteres ou mais",
      },
    ];

    campoValor.forEach((x) => {
      navegacaoStep.acessarPaginaPorNome("Login");
      escritaStep.preencheCampoValor<ILoginServicePageElementsInput>(
        x.campo,
        x.valor
      );
      escritaStep.clicarBotao<ILoginServicePageElementsBotao>("Fazer login");
      leituraStep.visualizarInformacaoToast(x.mensagem);
    });
  });
});
