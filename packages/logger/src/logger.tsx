import * as ReactDOM from "react-dom";
import * as React from "react";
import { Observable } from "rxjs";
import { Logger as LoggerUI } from "@capsulajs/capsulahub-ui";
import { dataComponentHoc } from "@capsulajs/web-components-utils";
import { LoggerProps } from "./types";

const mountPoint = "web-logger";

export class Logger extends HTMLElement {
  public props$?: Observable<LoggerProps>;

  constructor() {
    super();
    this.innerHTML = `<div id=${mountPoint}></div>`;
  }

  public connectedCallback() {
    const Component: any = this.props$
      ? dataComponentHoc(LoggerUI, this.props$)
      : LoggerUI;
    ReactDOM.render(<Component />, document.getElementById(mountPoint));
  }
}
