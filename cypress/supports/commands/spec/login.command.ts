/// <reference types="cypress"/>

import { LoginPage } from "../../../pages/loginPage/login.page";

const baseUrl = Cypress.env("BASE_URL");
const loginPage = new LoginPage();

Cypress.Commands.add(
  "loginUsuario",
  (emailUsuario: string = "", senhaUsuario: string = "") => {
    cy.visit(baseUrl);

    loginPage.escreverCampo("Email", String(emailUsuario));
    loginPage.escreverCampo("Senha", String(senhaUsuario), false);
    loginPage.clicarBotao("Fazer login");
  }
);
