/// <reference types="cypress"/>

import { LoginService } from "../../services/httpServices/loginService/login.service";

let usuario;
let API = Cypress.env("API");
let loginService = new LoginService();

Cypress.Commands.add("getToken", () => {
  cy.fixture("acessos/acesso").then((x) => {
    usuario = x;

    let token;
    loginService.autenticar().then((x: string) => {
      token = x;

      Cypress.env("TokenCypress", token);
      localStorage.setItem("TokenCypress", token);

      return token;
    });
  });
});
