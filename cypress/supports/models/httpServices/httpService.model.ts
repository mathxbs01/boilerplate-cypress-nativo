// PageModel.ts

import { LoginService } from "../../services/httpServices/loginService/login.service";
import { IHttpServiceModel } from "./IHttpService.model";

//Funcionalidades existentes para a automação, sempre deverá ser adicionada para que seja refletido nas demais funcionalidades.
const funcionalidadeMap: Record<FuncionalidadeType, IHttpServiceModel> = {
  login: new LoginService(),
  esqueciSenha: new LoginService(),
};

export class HttpModel {
  static getHttpService(funcionalidade: FuncionalidadeType): IHttpServiceModel {
    const page = funcionalidadeMap[funcionalidade];
    if (!page) {
      throw new Error(`Funcionalidade desconhecida: ${funcionalidade}`);
    }
    return page;
  }
}
