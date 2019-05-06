import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

const req = require.context(
  "..",
  true,
  /packages\/((?!node_modules).)*\/stories\/[^\/]+\.tsx$/
);

function loadStories() {
  addDecorator(withKnobs);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
