export interface ILoginServicePageElementsInput {
  Email: string;
  Senha: string;
}

export interface ILoginServicePageElementsBotao {
  "Fazer login": string;
}

export interface ILoginServicePageElementsLink {}

export const loginElementInput: ILoginServicePageElementsInput = {
  Email: 'input[name="e-mail"]',
  Senha: 'input[type="password"]',
};

export const loginElementBotao: ILoginServicePageElementsBotao = {
  "Fazer login": "Fazer login",
};
