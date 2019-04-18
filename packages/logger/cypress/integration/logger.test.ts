const { cy, describe, it } = global;

const isValidateTimestamp = text =>
  /^([0-9]{2})\:([0-9]{2}):([0-9]{2})$/.test(text);

describe("Logger TCs", () => {
  it("Events are logged (check the format)", () => {
    cy.visit("/")
      .get("[data-cy=logger-row-0]")
      .should(row => {
        row.find("[data-cy=logger-point-not-active]");
        row.find("[data-cy=logger-arrows-green]");

        expect(
          isValidateTimestamp(row.find("[data-cy=logger-timestamp]").text())
        ).to.eq(true);

        console.log(row.get("[data-cy=logger-title]"));

        // console.log(row.get("[data-cy=logger-title]"));

        expect(1 + 1).to.eq(2);
      });
  });
});
