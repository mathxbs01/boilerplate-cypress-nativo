// PageModel.ts

import { EsqueciSenhaPage } from "../../../pages/esqueciSenhaPage/esqueciSenha.page";
import { LoginPage } from "../../../pages/loginPage/login.page";
import { IPageModel } from "./Ipages.model";

//Funcionalidades existentes para a automação, sempre deverá ser adicionada para que seja refletido nas demais funcionalidades.
const funcionalidadeMap: Record<
  FuncionalidadeType,
  IPageModel<any, any, any>
> = {
  esqueciSenha: new EsqueciSenhaPage(),
  login: new LoginPage(),
};

export class PageModel {
  static getPage(
    funcionalidade: FuncionalidadeType
  ): IPageModel<any, any, any> {
    const page = funcionalidadeMap[funcionalidade];
    if (!page) {
      throw new Error(`Funcionalidade desconhecida: ${funcionalidade}`);
    }
    return page;
  }
}
