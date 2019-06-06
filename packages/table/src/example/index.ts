import { Table } from '../Table';
import { prepareWebComponent } from '@capsulajs/capsulahub-extension-utils';
import { props$, tablePropsSubject } from './utils';
import { Row } from './types';

class TableWithData extends Table<Row> {
  public setProps() {
    // In tests env tablePropsSubject is set before loading the page
    // @ts-ignore
    if (!window.tablePropsSubject) {
      // @ts-ignore
      window.tablePropsSubject = tablePropsSubject;
    }
    // @ts-ignore
    this.props$ = props$;
  }
}

let webComponent: HTMLElement;

const name = 'web-table';
const path = 'http://cdn.components/Table.tsx';
const componentModules = {
  [path]: TableWithData,
};

const mountWebComponent = async () => {
  !webComponent && (webComponent = await prepareWebComponent({ name, path, componentModules }));
  document.getElementById(name)!.appendChild(webComponent);
};

// @ts-ignore
window.mountWebComponent = mountWebComponent;

export { mountWebComponent };
