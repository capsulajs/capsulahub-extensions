import { Observable } from 'rxjs';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { RequestForm as RequestFormUI } from '@capsulajs/capsulahub-ui';
import { dataComponentHoc } from '@capsulajs-web-components/utils';
import { RequestFormUIProps } from './api';

const mountPoint = 'web-request-form';

export class RequestForm extends HTMLElement {
  public props$?: Observable<RequestFormUIProps>;

  constructor() {
    super();

    this.innerHTML = `<div id=${mountPoint}></div>`;
  }

  public connectedCallback() {
    const Component: React.JSXElementConstructor<any> = this.props$
      ? dataComponentHoc(RequestFormUI, this.props$)
      : RequestFormUI;
    ReactDOM.render(<Component />, document.getElementById(mountPoint));
  }
}
