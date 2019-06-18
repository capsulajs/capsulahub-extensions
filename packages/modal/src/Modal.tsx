import { Observable } from 'rxjs';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
// @ts-ignore
import { Modal as ModalUI } from '@capsulajs/capsulahub-ui';
import { dataComponentHoc } from '@capsulajs/capsulahub-extension-utils';
import { ModalUIProps } from './api';

export class Modal extends HTMLElement {
  public mountPoint: string = '';
  public props$?: Observable<ModalUIProps>;

  public connectedCallback() {
    const Component: React.JSXElementConstructor<any> = this.props$
      ? dataComponentHoc<ModalUIProps>(ModalUI, this.props$)
      : ModalUI;
    ReactDOM.render(<Component />, document.getElementById(this.mountPoint));
  }
}
