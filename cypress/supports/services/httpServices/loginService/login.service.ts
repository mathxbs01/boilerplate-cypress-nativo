/// <reference types="cypress"/>

import { ILoginService } from "./login.model";
import { IHttpServiceModel } from "../../../models/httpServices/IHttpService.model";
import { HttpClient } from "../http.service";

let httpService = new HttpClient();

export class LoginService implements IHttpServiceModel {
  public autenticar() {
    return cy.fixture("acessos/acesso").then((x: ILoginService) => {
      return httpService.usePost("Login", x).then((response) => {
        const token = response.body?.data?.token;
        return token;
      });
    });
  }

  public cadastrarMassa(tipoCadastro: AcaoHttp) {}

  public excluirMassa(nomeLogin: string, isExcluirMassa: boolean = false) {}

  public pesquisarMassa(nmMassa: string) {}
}
