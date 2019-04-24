import { grapAllNodes } from './utils';

const { cy, describe, it } = global;

describe('Canvas TCs', () => {
  it('Init', () => {
    cy.fixture('layout.js').then((layout) => {
      return cy
        .visit('/')
        .get('[data-cy=canvas]')
        .should((canvas) => {
          grapAllNodes(layout).forEach(({ tabs, id: nodeId }) => {
            tabs.forEach(({ name, id: tabId }) => {
              const tab = canvas
                .find(`[data-cy=canvas-node-${nodeId}]`)
                .find('[data-cy=canvas-tabs]')
                .find(`[data-cy=canvas-tab-${tabId}]`);

              console.log(tab.text());

              expect(tab.find('[data-cy=canvas-tab-title]').text()).to.eq(name);
            });
          });
        });
    });
  });
});
