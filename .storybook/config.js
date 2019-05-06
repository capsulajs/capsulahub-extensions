import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

const req = require.context(
  "..",
  true,
  /packages\/((?!node_modules).)*\/stories\/[^\/]+\.(js|ts|tsx)$/
);

function loadStories() {
  addDecorator(withKnobs);
  req.keys().forEach(req);
}

configure(loadStories, module);
