import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

const req = require.context("../packages/", true, /stories\/.+.js$/);

function loadStories() {
  addDecorator(withKnobs);
  req.keys().forEach(req);
}

configure(loadStories, module);
