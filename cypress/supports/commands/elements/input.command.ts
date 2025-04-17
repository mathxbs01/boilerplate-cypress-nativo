/// <reference types="cypress"/>

Cypress.Commands.add(
  "verificarValorCampo",
  (tipoCampo: InputType, seletor: string, valor: string) => {
    let inputElement = cy.get(seletor);

    const tipoInput = (type: InputType) => {
      switch (type) {
        case "texto":
          return inputElement.should("have.value", valor);
        case "select":
          return inputElement.contains("span", valor).should("exist");
        default:
          throw new Error(`Tipo de campo inválido: ${type}`);
      }
    };

    return tipoInput(tipoCampo);
  }
);

Cypress.Commands.add(
  "escreverValorNoCampo",
  (
    seletor: string,
    textoPreenchimento: string,
    forcarEnter: boolean = true
  ): Cypress.Chainable<JQuery<HTMLElement>> => {
    let texto: string;

    if (textoPreenchimento.includes("/"))
      texto = textoPreenchimento.split("/").reverse().join("-");
    else texto = textoPreenchimento;

    texto = forcarEnter ? texto + "{enter}" : texto;
    return cy.get(seletor).clear({ force: true }).type(texto);
  }
);

Cypress.Commands.add(
  "selecionarValorNoCampo",
  (seletor: string, textoPreenchimento: string) => {
    // cy.get(seletor)
    //   .find("option")
    //   .contains(textoPreenchimento)
    //   .first()
    //   .then((option: any) => {
    //     cy.get(seletor).select(option.val(), { force: true });
    //   });

    let listaOpcoes: any[number] = [];
    cy.get(seletor)
      .find("option")
      .filter((index, option) => {
        if (Cypress.$(option).text().includes(textoPreenchimento)) {
          listaOpcoes.push(index);
          return true;
        }
        return false;
      })
      .then((option) => {
        cy.get(seletor).select(listaOpcoes[0]);
      });
  }
);

Cypress.Commands.add("verificaShielError", (mensagem: string) => {
  cy.get('div[class="error-message message"]')
    .should("be.visible")
    .invoke("text")
    .then((text) => {
      expect(text.trim()).to.eq(mensagem.trim());
    });
});

Cypress.Commands.add("verificaRadioButtonSelecionado", (seletor: string) => {
  cy.contains("label.radio-label", seletor)
    .find('input[type="radio"]')
    .should("be.checked");
});

Cypress.Commands.add(
  "verificaCampoPreenchido",
  (seletor: string, valor: string) => {
    cy.wait(500);

    cy.get(seletor)
      .invoke("val")
      .then((actualValue) => {
        if (actualValue)
          expect(actualValue.toString().toLowerCase().trim()).to.contain(
            valor.toLowerCase().trim()
          );
        else throw new Error(`Valor "${valor}" não encontrado`);
      });
  }
);

Cypress.Commands.add(
  "verificarOpcaoSelecionada",
  (seletor: string, valor: string) => {
    cy.wait(500);

    cy.get(seletor)
      .find("option:selected")
      .invoke("text")
      .then((actualValue) => {
        if (actualValue) {
          expect(actualValue.toString().toLowerCase().trim()).to.contain(
            valor.toLowerCase().trim()
          );
        } else {
          throw new Error(`Valor "${valor}" não encontrado`);
        }
      });
  }
);

Cypress.Commands.add("verificarCampoDesabilitado", (seletor: string) => {
  cy.get(seletor).should("be.disabled");
});
