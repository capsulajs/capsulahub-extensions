import { configure } from '@storybook/react';

const req = require.context('../packages/', true, /story\.(ts|tsx)$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
