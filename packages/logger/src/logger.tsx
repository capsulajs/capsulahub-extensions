import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Observable } from 'rxjs';
import { Logger as LoggerUI } from '@capsulajs/capsulahub-ui';
import { dataComponentHoc } from '@capsulajs-web-components/utils';
import { LoggerProps } from './types';

export class Logger extends HTMLElement {
  public props$;
  private mountPoint: string;

  constructor() {
    super();

    this.mountPoint = 'web-logger';
    this.innerHTML = `<div id=${this.mountPoint}></div>`;
  }

  public connectedCallback() {
    const Component: React.ReactType = this.props$ ? dataComponentHoc(LoggerUI, this.props$) : LoggerUI;
    ReactDOM.render(<Component />, document.getElementById(this.mountPoint));
  }
}
