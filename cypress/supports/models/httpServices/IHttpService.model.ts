export interface IHttpServiceModel {
  cadastrarMassa(tipoCadastro: AcaoHttp): void;
  excluirMassa(nomeMassa: string, isExcluirMassa: boolean): void;
  pesquisarMassa(body: any, params?: any): void;
}
