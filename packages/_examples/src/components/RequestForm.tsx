import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { dataComponentHoc } from '@capsulajs-web-components/utils';
import { RequestForm as RequestFormUI } from '@capsulajs/capsulahub-ui';
import { Observable } from 'rxjs';
import { RequestFormUIProps } from '../api';

const mountPoint = 'web-request-form';

export default class RequestForm extends HTMLElement {
  public props$?: Observable<RequestFormUIProps>;

  constructor() {
    super();
    this.innerHTML = `<div id=${mountPoint}></div>`;
  }

  public connectedCallback() {
    const Component: React.Component = this.props$ ? dataComponentHoc(RequestFormUI, this.props$) : RequestFormUI;
    ReactDOM.render(<Component />, document.getElementById(mountPoint));
  }
}
