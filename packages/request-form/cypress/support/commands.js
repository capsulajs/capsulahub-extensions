const { Cypress, cy } = global;

Cypress.Commands.add('changeArgsAmount', (argsAmount) => {
  return cy
    .get('[data-cy=request-form-args-count-value]')
    .clear()
    .type(argsAmount);
});

Cypress.Commands.add('changeLanguage', (language) => {
  return cy
    .get('[data-cy=request-form-language-dropdown-header]')
    .click()
    .get(`[data-cy=request-form-language-dropdown-option-${language}]`)
    .click();
});

Cypress.Commands.add('checkEditorsAmount', (editorsAmount) => {
  return cy.get('#web-request-form .ace_content').should('have.length', editorsAmount);
});

Cypress.Commands.add('submitRequest', () => {
  return cy.get('[data-cy=request-form-submit-btn]').click();
});

Cypress.Commands.add('typeInEditor', (content, editorIndex = 0) => {
  return cy
    .get(`[data-cy=request-form-editor-${editorIndex}] .ace_text-input`)
    .clear({ force: true })
    .type(content, { force: true });
});
