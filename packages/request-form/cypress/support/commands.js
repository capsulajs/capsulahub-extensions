const { Cypress, cy } = global;

Cypress.Commands.add('changeArgsAmount', (argsAmount) => {
  return cy
    .get('[data-cy=request-form-args-count-value]')
    .clear()
    .then((input$) => {
      if (argsAmount) {
        cy.wrap(input$).type(argsAmount);
      }
    });
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

Cypress.Commands.add('checkEditorsLanguage', (language) => {
  return cy.get('[data-cy="request-form-language-dropdown-title"]').should('have.text', language);
});

Cypress.Commands.add('submitRequest', ({ onSubmitSpy = undefined, callCount = 1 } = {}) => {
  return cy
    .get(`[data-cy^=request-form-submit-btn]`)
    .click()
    .then(() => {
      if (onSubmitSpy) {
        expect(onSubmitSpy.callCount).to.equal(callCount);
      }
    });
});

Cypress.Commands.add('typeInEditor', (content, editorIndex = 0, submitButtonStatus = 'active') => {
  cy.get(`[data-cy=request-form-editor-${editorIndex}] .ace_text-input`)
    .as('textarea')
    .focus()
    .clear({ force: true })
    .get(`[data-cy=request-form-editor-${editorIndex}] .ace_content`)
    .as(`content`)
    .should('have.text', '')
    .get('@textarea')
    .then((input$) => {
      if (content) {
        cy.wrap(input$)
          .type(content, { force: true })
          .get('@content')
          .should('have.text', content.replace(/{{}/g, '{').replace(/{enter}/g, ''))
          .get(`[data-cy=request-form-submit-btn-${submitButtonStatus}]`);
      }
    });
});