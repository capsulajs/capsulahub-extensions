const { cy, describe, it } = global;

describe('Modal TCs', () => {
  it('The correspondent modal title and content is displayed', () => {
    cy.fixture('modal.js').then(({ title, children }) => {
      return cy
        .visit('/')
        .window()
        .then((win) => {
          win.modalPropsSubject.next({
            title,
            children,
            isOpen: true,
          });

          return cy
            .get('#web-modal')
            .contains(title)
            .get('#web-modal')
            .contains(children);
        });
    });
  });

  it('Check default value of isOpen property', () => {
    cy.fixture('modal.js').then(({ title, children }) => {
      return cy
        .visit('/')
        .window()
        .then((win) => {
          return cy
            .get('#web-modal')
            .contains(title)
            .should('not.exist')
            .get('#web-modal')
            .contains(children)
            .should('not.exist');
        });
    });
  });
});
