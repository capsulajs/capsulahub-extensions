import "babel-polyfill";
import { configure, addDecorator } from "@storybook/react";

const req = require.context("../packages/", true, /story\.(js|jsx|ts|tsx)$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
