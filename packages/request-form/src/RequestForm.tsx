import { Observable } from 'rxjs';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
// @ts-ignore
import { RequestForm as RequestFormUI } from '@capsulajs/capsulahub-ui';
import { dataComponentHoc } from '@capsulajs/capsulahub-extension-utils';
import { RequestFormUIProps } from './api';

const mountPoint = 'web-request-form';

export class RequestForm extends HTMLElement {
  public props$?: Observable<RequestFormUIProps>;

  public connectedCallback() {
    const Component: React.JSXElementConstructor<any> = this.props$
      ? dataComponentHoc(RequestFormUI, this.props$ as any)
      : RequestFormUI;
    ReactDOM.render(<Component />, document.getElementById(mountPoint));
  }
}
