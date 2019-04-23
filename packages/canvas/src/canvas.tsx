import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Observable } from 'rxjs';
import { Canvas as CanvasUI } from '@capsulajs/capsulahub-ui';
import { dataComponentHoc } from '@capsulajs/web-components-utils';
import { CanvasProps } from './types';

export class Canvas extends HTMLElement {
  private mountPoint: string;
  public props$;

  constructor() {
    super();

    this.mountPoint = 'web-canvas';
    this.innerHTML = `<div id=${this.mountPoint}></div>`;
  }

  public connectedCallback() {
    const Component: React.ReactType = this.props$ ? dataComponentHoc(CanvasUI, this.props$) : CanvasUI;
    ReactDOM.render(<Component />, document.getElementById(this.mountPoint));
  }
}
