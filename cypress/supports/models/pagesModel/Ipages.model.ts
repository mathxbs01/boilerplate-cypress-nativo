export interface IPageModel<TInput, TBotao, TLink> {
  escreverCampo?(
    campo: keyof TInput,
    valor: string,
    forcarEnter?: boolean
  ): void;
  clicarRadioButton?(campo: keyof TInput): void;
  clicarCheckBox?(campo: keyof TInput): void;
  limparCampo?(campo: keyof TInput): void;
  selecionarValor?(campo: keyof TInput, valor: string): void;
  clicarBotao?(nomeBotao: keyof TBotao): void;
  clicarLink?(nomeHiperLink: keyof TLink): void;
  verificarRadioSelecionado?(campo: keyof TInput): void;
  verificarValorPreenchido?(campo: keyof TInput, valor: string): void;
  verificarOpcaoSelecionada?(campo: keyof TInput, valor: string): void;
  verificarCampoDesabilitado?(campo: keyof TInput): void;
  uploadDocumento?(
    campo: keyof TInput,
    tipoDocumento: TipoDocumentosType
  ): void;
}
