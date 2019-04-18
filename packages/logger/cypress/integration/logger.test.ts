const { cy, describe, it } = global;

describe("Logger TCs", () => {
  it("Events are logged (check the format)", () => {
    onBeforeLoad = () => {};

    cy.visit("/", { onBeforeLoad }).get("[data-cy=logger-row]");
  });
});
