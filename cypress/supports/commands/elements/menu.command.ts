/// <reference types="cypress"/>

Cypress.Commands.add("expandirMenu", () => {
  cy.get('div[class="toggle-btn"] i').click();
});

Cypress.Commands.add("clicarMenu", (nomeMenu: string) => {
  cy.get("app-menu-item span").contains(nomeMenu).click();
});

Cypress.Commands.add("clicarSubMenu", (nomeSubMenu: string) => {
  cy.get('app-menu-item div[class="accordion"] span')
    .contains(nomeSubMenu)
    .click();
});
