/// <reference types="cypress"/>

let imagemJpg: string = "cypress/fixtures/upload/logotipo-teste.jpg";
let documentoJson: string = "cypress/fixtures/upload/logotipo-teste.jpg";
let documentoPdf: string = "cypress/fixtures/upload/logotipo-teste.jpg";

Cypress.Commands.add(
  "uploadDocumento",
  (tipoDocumento: TipoDocumentosType, seletor: string) => {
    const tipoDocumentoMap: Record<TipoDocumentosType, string> = {
      JPG: imagemJpg,
      JSON: documentoJson,
      PDF: documentoPdf,
    };

    cy.get(seletor).selectFile(tipoDocumentoMap[tipoDocumento], {
      force: true,
    });
  }
);
