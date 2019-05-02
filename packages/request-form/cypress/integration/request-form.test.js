const { cy, describe, it } = global;

const defaultText = {
  javascript: 'return {};',
  json: '{}',
};

const editorsQuery = '#web-request-form .ace_content';

describe('Logger TCs', () => {
  it('Check the code pattern to be displayed for javascript language (with different number of arguments)', () => {
    cy.visit('/')
      .get(editorsQuery)
      .should('have.length', 1)
      .should('have.text', defaultText.javascript)
      .changeArgsAmount(2)
      .get(editorsQuery)
      .should('have.length', 3)
      .each((editor$) => expect(editor$.text()).to.equal(defaultText.javascript));
  });

  // it('Check the code pattern to be displayed for json language (with different number of arguments)', () => {
  //   cy.visit('/', {
  //     onBeforeLoad(window) {},
  //   });
  //
  //   cy.get('#web-request-form-wrapper .ace_content').should('have.text', defaultText.javascript);
  // });
});
