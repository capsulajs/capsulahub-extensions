import Logger from "./logger";
import { prepareWebComponent } from "@capsulajs/web-components-utils";
import { getProps } from "./cypress/integration/utils";

class LogsWithData extends Logger {
  public setProps() {
    this.props$ = getProps();
  }
}

const componentModules = {
  ["http://cdn.components/Logger.tsx"]: LogsWithData
};

prepareWebComponent({
  name: "web-logger",
  path: "http://cdn.components/Logger.tsx",
  componentModules
}).then(webComponent =>
  document.querySelector("#web-logger")!.appendChild(webComponent)
);
