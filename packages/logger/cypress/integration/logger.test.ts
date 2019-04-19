const { cy, describe, it } = global;

const validateTimeFormat = text =>
  /^([0-9]{2})\:([0-9]{2}):([0-9]{2})$/.test(text);

const checkRow = (row, log) => {
  const { type, serviceName, methodName, content } = log;

  type === 'request'
   ? row.find("[data-cy=logger-arrows-green]")
   : row.find("[data-cy=logger-arrows-red]");
  row.find("[data-cy=logger-point-not-active]");

  expect(
    validateTimeFormat(row.find("[data-cy=logger-timestamp]").text())
  ).to.eq(true);
  expect(row.find("[data-cy=logger-title]").text()).to.eq(
    `${serviceName}/${methodName}`
  );
  expect(
    row
      .find("[data-cy=logger-content]")
      .find(".string-value")
      .text()
  ).to.eq(`"${content}"`);
};

describe("Logger TCs", () => {
  it("Events are logged (check the format)", () => {
    cy.fixture("logs.json").then(logs => {
      return cy
        .visit("/")
        .wait(logs[0].delay)
        .get("[data-cy=logger-row-0]")
        .should(row => checkRow(row, logs[0]))
        .wait(logs[1].delay)
        .get("[data-cy=logger-row-1]")
        .should(row => checkRow(row, logs[1]))
        .wait(logs[2].delay)
        .get("[data-cy=logger-row-2]")
        .should(row => checkRow(row, logs[2]))
        .wait(logs[3].delay)
        .get("[data-cy=logger-row-3]")
        .should(row => checkRow(row, logs[3]));
    });
  });

  it("Check delete cross to remove all logs", () => {
    cy.fixture("logs.json").then(logs => {
      return cy
        .visit("/")
        .wait(logs[0].delay)
        .get("[data-cy=logger-row-0]")
        .wait(logs[1].delay)
        .get("[data-cy=logger-row-1]")
        .wait(logs[2].delay)
        .get("[data-cy=logger-row-2]")
        .wait(logs[3].delay)
        .get("[data-cy=logger-row-3]")
        .get("[data-cy=logger-clear]")
        .click()
        .get("[data-cy=logger-row-0]").should('not.exist')
        .get("[data-cy=logger-row-1]").should('not.exist')
        .get("[data-cy=logger-row-2]").should('not.exist')
        .get("[data-cy=logger-row-3]").should('not.exist')
        .wait(logs[4].delay)
        .get("[data-cy=logger-row-0]")
        .should(row => checkRow(row, logs[4]))
    });
  });
});
