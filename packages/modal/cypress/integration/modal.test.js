const { cy, describe, it } = global;

describe('Modal TCs', () => {
  it('The correspondent modal title and content is displayed', () => {
    cy.fixture('modal.js').then((modal) => {
      return cy
        .visit('/')
        .window()
        .then((win) => {
          win.modalPropsSubject.next({
            ...modal,
            isOpen: true,
          });

          return cy.modalOpenend(modal);
        });
    });
  });

  it('Check default value of isOpen property', () => {
    cy.fixture('modal.js').then((modal) => {
      return cy.visit('/').modalClosed(modal);
    });
  });

  it('Click on cross - isOpen became false', () => {
    cy.fixture('modal.js').then((modal) => {
      return cy
        .visit('/')
        .window()
        .then((win) => {
          win.modalPropsSubject.next({
            ...modal,
            isOpen: true,
          });

          return cy
            .get('#web-modal')
            .find('[data-cy=modal-close]')
            .click()
            .modalClosed(modal);
        });
    });
  });

  it('Click on background - isOpen became false', () => {
    cy.fixture('modal.js').then((modal) => {
      return cy
        .visit('/')
        .window()
        .then((win) => {
          win.modalPropsSubject.next({
            ...modal,
            isOpen: true,
          });

          return cy
            .get('body')
            .click()
            .modalClosed(modal);
        });
    });
  });
});
