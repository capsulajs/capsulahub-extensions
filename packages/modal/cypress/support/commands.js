const { Cypress, cy } = global;

Cypress.Commands.add('modalClosed', ({ title, children }) => {
  cy.get('#web-modal')
    .contains(title)
    .should('not.exist')
    .get('#web-modal')
    .contains(children)
    .should('not.exist');
});

Cypress.Commands.add('modalOpenend', ({ title, children }) => {
  cy.get('#web-modal')
    .contains(title)
    .get('#web-modal')
    .contains(children);
});
