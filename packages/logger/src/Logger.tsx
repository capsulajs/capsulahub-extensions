import { Observable } from 'rxjs';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
// @ts-ignore
import { Logger as LoggerUI } from '@capsulajs/capsulahub-ui';
import { dataComponentHoc } from '@capsulajs-web-components/utils';
import { LoggerUIProps } from './api';

const mountPoint = 'web-logger';

export class Logger extends HTMLElement {
  public props$?: Observable<LoggerUIProps>;

  public connectedCallback() {
    const Component: React.JSXElementConstructor<any> = this.props$
      ? dataComponentHoc(LoggerUI, this.props$ as any)
      : LoggerUI;
    ReactDOM.render(<Component />, document.getElementById(mountPoint));
  }
}
