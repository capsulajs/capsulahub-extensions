const {
  cy, describe, it,
} = global;

describe('Test example', () => {
  it('Open page', () => {
    cy.visit('/').get('body').contains('Logger');
  });
});
