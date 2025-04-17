/// <reference types="cypress"/>
import { IAPIDelete, IAPIGet, IAPIPost, IAPIPut } from "./http.model";

const APIUrl = Cypress.env("API");
const API = APIUrl;
let token: string;

let APIGet: IAPIGet = {};

let APIPost: IAPIPost = { Login: `${API}v1/Autenticacao/Login` };

let APIDelete: IAPIDelete = {};

let APIPut: IAPIPut = {};

export class HttpClient {
  constructor() {
    token = Cypress.env("TokenCypress") ?? "";
  }

  useGet(nome: keyof IAPIGet, params: any) {
    token = Cypress.env("TokenCypress") ?? "";
    let url = APIGet[nome];
    let uri = params ? url + "?" + new URLSearchParams(params).toString() : url;

    return cy
      .request({
        method: "GET",
        url: uri,
        headers: { Authorization: `Bearer ${token}` },
        failOnStatusCode: false,
      })
      .then((response) => {
        return response;
      });
  }

  usePost(nome: keyof IAPIPost, body: any, params?: any) {
    token = Cypress.env("TokenCypress") ?? "";
    let url = APIPost[nome];
    let uri = params ? url + "?" + new URLSearchParams(params).toString() : url;

    return cy
      .request({
        method: "POST",
        url: uri,
        headers: { Authorization: `Bearer ${token}` },
        body: body,
        failOnStatusCode: false,
      })
      .then((response) => {
        return response;
      });
  }

  useDelete(nome: keyof IAPIDelete, params: string) {
    token = Cypress.env("TokenCypress") ?? "";
    let url = APIDelete[nome];
    let uri = `${url}?${params}`;

    return cy
      .request({
        method: "DELETE",
        url: uri,
        headers: { Authorization: `Bearer ${token}` },
        failOnStatusCode: false,
      })
      .then((response) => {
        return response;
      });
  }

  usePut(nome: keyof IAPIPut, body: any, params?: any) {
    token = Cypress.env("TokenCypress") ?? "";
    let url = APIPut[nome];
    let uri = params ? url + "?" + new URLSearchParams(params).toString() : url;

    return cy
      .request({
        method: "PUT",
        url: uri,
        headers: { Authorization: `Bearer ${token}` },
        body: body,
        failOnStatusCode: false,
      })
      .then((response) => {
        return response;
      });
  }
}
