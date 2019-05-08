import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Canvas as CanvasUI } from '@capsulajs/capsulahub-ui';
import { dataComponentHoc } from '@capsulajs-web-components/utils';

const mountPoint = 'web-canvas';

export class Canvas extends HTMLElement {
  public props$;

  public connectedCallback() {
    const Component: React.JSXElementConstructor<any> = this.props$
      ? dataComponentHoc(CanvasUI, this.props$)
      : CanvasUI;
    ReactDOM.render(<Component />, document.getElementById(mountPoint));
  }
}
