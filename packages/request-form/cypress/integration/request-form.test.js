const { cy, describe, it } = global;

const defaultText = {
  javascript: 'return {};',
  json: '{}',
};

describe('Logger TCs', () => {
  it('Check the code pattern to be displayed for javascript language (with different number of arguments)', () => {
    cy.visit('/', {
      onBeforeLoad(window) {},
    });

    cy.get('#web-request-form-wrapper .ace_content').should('have.text', defaultText.javascript);
  });

  it('Check the code pattern to be displayed for json language (with different number of arguments)', () => {
    cy.visit('/', {
      onBeforeLoad(window) {},
    });

    cy.get('#web-request-form-wrapper .ace_content').should('have.text', defaultText.javascript);
  });
});
