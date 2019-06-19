const { cy, describe, it } = global;

describe('Modal TCs', () => {
  it(' ModalUIProps with title, children and isOpen property', () => {
    cy.fixture('modal.js').then(({ onToggle, isOpen, title, children }) => {
      return cy
        .visit('/')
        .get('#web-modal')
        .contains(title)
        .get('#web-modal')
        .contains(children)
        .window()
        .then((win) => {
          win.modalPropsSubject.next({
            onToggle,
            title,
            children,
            isOpen: false,
          });

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
