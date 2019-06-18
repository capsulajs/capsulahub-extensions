import { Modal } from '../Modal';
import { prepareWebComponent } from '@capsulajs/capsulahub-extension-utils';
import { props$ } from './utils';

class ModalWithData extends Modal {
  public mountPoint: string = 'web-modal';
  public setProps() {
    this.props$ = props$;
  }
}

let webComponent: HTMLElement;

const name = 'web-modal';
const path = 'http://cdn.components/Modal.tsx';
const componentModules = {
  [path]: ModalWithData,
};

const mountWebComponent = async () => {
  !webComponent && (webComponent = await prepareWebComponent({ name, path, componentModules }));
  document.getElementById(name)!.appendChild(webComponent);
};

// @ts-ignore
window.mountWebComponent = mountWebComponent;

export { mountWebComponent };
