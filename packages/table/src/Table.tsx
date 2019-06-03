import { Observable } from 'rxjs';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
// @ts-ignore
import { Table as TableUI } from '@capsulajs/capsulahub-ui';
import { dataComponentHoc } from '@capsulajs/capsulahub-extension-utils';
import { TableUIProps } from './api';

const mountPoint = 'web-table';

export class Table<Row> extends HTMLElement {
  public props$?: Observable<TableUIProps<Row>>;

  public connectedCallback() {
    const Component: React.JSXElementConstructor<any> = this.props$
      ? dataComponentHoc<TableUIProps<Row>>(TableUI, this.props$)
      : TableUI;
    ReactDOM.render(<Component />, document.getElementById(mountPoint));
  }
}
