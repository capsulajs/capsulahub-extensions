const { Cypress, cy } = global;

Cypress.Commands.add('changeArgsAmount', (argsAmount) => {
  cy.get('[data-cy=request-form-args-count-value]')
    .clear()
    .type(argsAmount);
});
