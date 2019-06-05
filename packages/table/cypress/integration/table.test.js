const { cy, describe, it } = global;

describe('Table TCs', () => {
  it('Table columns and data is rendered according to configuration', () => {
    cy.fixture('table.js').then(({ columns, rows }) => {
      return cy.visit('/').then(() => {
        columns.forEach(({ Header, accessor }) => {
          cy.contains(Header);
          rows.forEach((row, i) => i < 10 && cy.contains(row[accessor]));
        });
      });
    });
  });

  it('Filtering is not taking into account case sesitivity', () => {
    cy.fixture('table.js').then(({ columns, rows }) => {
      return cy.visit('/').then(() => {
        cy.get('input')
          .first()
          .type('A0')
          .get('.ReactTable')
          .contains('A0')
          .get('input')
          .first()
          .clear()
          .get('input')
          .first()
          .type('a0')
          .get('.ReactTable')
          .contains('A0')
          .get('.ReactTable')
          .contains('B0')
          .get('.ReactTable')
          .contains('C0')
          .get('.ReactTable')
          .contains('A1')
          .should('not.exist')
          .get('.ReactTable')
          .contains('B1')
          .should('not.exist')
          .get('.ReactTable')
          .contains('C1')
          .should('not.exist');
      });
    });
  });
});
