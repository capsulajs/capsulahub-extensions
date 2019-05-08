import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Logger as LoggerUI } from '@capsulajs/capsulahub-ui';
import { dataComponentHoc } from '@capsulajs-web-components/utils';

const mountPoint = 'logger-canvas';

export class Logger extends HTMLElement {
  public props$;

  public connectedCallback() {
    const Component: React.JSXElementConstructor<any> = this.props$
      ? dataComponentHoc(LoggerUI, this.props$)
      : LoggerUI;
    ReactDOM.render(<Component />, document.getElementById(mountPoint));
  }
}
