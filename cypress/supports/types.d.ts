// cypress/supports/types.d.ts

export {};

declare global {
  type InputType = "texto" | "select";
  type AcoesListaType = "Editar" | "Visualizar" | "Excluir";
  type TipoDocumentosType = "JPG" | "JSON" | "PDF";
  type AcaoColapseType = "abro" | "fecho";
  type AcaoHttp = "Feliz" | "Duplicado";

  //Tipos deverão possuir o mesmo nome das nomenclaturas das features.
  type FuncionalidadeType = "login" | "esqueciSenha";

  type PaginasType = "Login" | "Esqueci a senha" | "Inicial";
}
