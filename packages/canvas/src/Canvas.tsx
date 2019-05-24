import { Observable } from 'rxjs';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
// @ts-ignore
import { Canvas as CanvasUI } from '@capsulajs/capsulahub-ui';
import { dataComponentHoc } from '@capsulajs-web-components/utils';
import { CanvasUIProps } from './api';

const mountPoint = 'web-canvas';

export class Canvas extends HTMLElement {
  public props$?: Observable<CanvasUIProps>;

  public connectedCallback() {
    const Component: React.JSXElementConstructor<any> = this.props$
      ? dataComponentHoc(CanvasUI, this.props$ as any)
      : CanvasUI;
    ReactDOM.render(<Component />, document.getElementById(mountPoint));
  }
}
