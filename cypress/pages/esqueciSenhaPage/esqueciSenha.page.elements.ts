export interface IEsqueciSenhaPageElementsInput {
  Email: string;
}

export interface IEsqueciSenhaPageElementsBotao {
  Enviar: string;
  Voltar: string;
}

export interface IEsqueciSenhaPageElementsLink {
  "Esqueci minha senha": string;
}

export const esqueciSenhaElementInput: IEsqueciSenhaPageElementsInput = {
  Email: 'app-modal-input input[name="e-mail"]',
};

export const esqueciSenhaElementBotao: IEsqueciSenhaPageElementsBotao = {
  Enviar: "Enviar",
  Voltar: "Voltar",
};

export const esqueciSenhaElementLink: IEsqueciSenhaPageElementsLink = {
  "Esqueci minha senha": "Esqueci minha senha",
};
