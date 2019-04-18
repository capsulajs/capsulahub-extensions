import { isValidateTimestamp } from './utils';

const { cy, describe, it } = global;

describe("Logger TCs", () => {
  it("Events are logged (check the format)", () => {
    cy.visit("/")
      .get("[data-cy=logger-row-0]")
      .should((row) => {
        row.find("[data-cy=logger-point-not-active]");
        row.find("[data-cy=logger-arrows-green]");

        expect(isValidateTimestamp(row.find("[data-cy=logger-timestamp]"))).to.eq(true);


        console.log(row.get("[data-cy=logger-title]"));

        // console.log(row.get("[data-cy=logger-title]"));

        expect(1 + 1).to.eq(2);
      });
  });
});
