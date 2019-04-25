import { grapAllNodes } from './utils';

const { cy, describe, it } = global;

describe('Canvas TCs', () => {
  it('Each node can have one or more tabs according to tabs, activeTabIndex and content parameters', () => {
    cy.fixture('layout.js').then((layout) => {
      return cy.visit('/').then(() => {
        grapAllNodes(layout).forEach(({ activeTabIndex, tabs, id: nodeId }) => {
          tabs.forEach(({ name, id: tabId }, index) => {
            const titleSelector =
              index === activeTabIndex ? '[data-cy=canvas-tab-title-active]' : '[data-cy=canvas-tab-title]';

            cy.get(`[data-cy=canvas-node-${nodeId}]`)
              .find(`[data-cy=canvas-tab-${tabId}]`)
              .find(titleSelector)
              .invoke('text')
              .should('eq', name)
              .get(`[data-cy=canvas-node-${nodeId}]`)
              .children()
              .last()
              .invoke('text')
              .then(console.log);
          });
        });
      });
    });
  });

  it('The name of the tab can be edited manually by the user', () => {
    cy.fixture('layout.js').then((layout) => {
      const [{ tabs, id: nodeId }] = grapAllNodes(layout);
      const [{ name, id: tabId }] = tabs;

      return cy
        .visit('/')
        .get(`[data-cy=canvas-tab-${tabId}]`)
        .find('[data-cy=canvas-tab-title-active]')
        .dblclick()
        .get(`[data-cy=canvas-tab-${tabId}]`)
        .find('[data-cy=canvas-tab-input]')
        .invoke('val')
        .should('eq', name)
        .get(`[data-cy=canvas-tab-${tabId}]`)
        .find('[data-cy=canvas-tab-input]')
        .clear()
        .get(`[data-cy=canvas-tab-${tabId}]`)
        .find('[data-cy=canvas-tab-input]')
        .type('{enter}')
        .get(`[data-cy=canvas-tab-${tabId}]`)
        .find('[data-cy=canvas-tab-input]')
        .invoke('val')
        .should('eq', '')
        .get(`[data-cy=canvas-tab-${tabId}]`)
        .find('[data-cy=canvas-tab-input]')
        .type('Test')
        .type('{enter}')
        .get(`[data-cy=canvas-tab-${tabId}]`)
        .find('[data-cy=canvas-tab-title-active]')
        .invoke('text')
        .should('eq', 'Test');
    });
  });

  it('The name of the tab can be edited manually by the user', () => {
    cy.fixture('layout.js').then((layout) => {
      const [{ tabs, id: nodeId }] = grapAllNodes(layout);
      const [{ name, id: tabId }] = tabs;

      return cy
        .visit('/')
        .get(`[data-cy=canvas-tab-${tabId}]`)
        .find('[data-cy=canvas-tab-title-active]')
        .dblclick()
        .get(`[data-cy=canvas-tab-${tabId}]`)
        .find('[data-cy=canvas-tab-input]')
        .invoke('val')
        .should('eq', name)
        .get(`[data-cy=canvas-tab-${tabId}]`)
        .find('[data-cy=canvas-tab-input]')
        .clear()
        .get(`[data-cy=canvas-tab-${tabId}]`)
        .find('[data-cy=canvas-tab-input]')
        .type('{enter}')
        .get(`[data-cy=canvas-tab-${tabId}]`)
        .find('[data-cy=canvas-tab-input]')
        .invoke('val')
        .should('eq', '')
        .get(`[data-cy=canvas-tab-${tabId}]`)
        .find('[data-cy=canvas-tab-input]')
        .type('Test')
        .type('{enter}')
        .get(`[data-cy=canvas-tab-${tabId}]`)
        .find('[data-cy=canvas-tab-title-active]')
        .invoke('text')
        .should('eq', 'Test');
    });
  });
});
