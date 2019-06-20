import { BehaviorSubject } from 'rxjs';
import { Modal } from '../Modal';
import { prepareWebComponent } from '@capsulajs/capsulahub-extension-utils';
import { basicProps } from './utils';
import { ModalUIProps } from '../api';

declare global {
  interface Window {
    modalPropsSubject: BehaviorSubject<ModalUIProps>;
    mountWebComponent: () => Promise<void>;
  }
}

class ModalWithData extends Modal {
  public setProps() {
    // In tests env modalPropsSubject is set before loading the page
    if (!window.modalPropsSubject) {
      window.modalPropsSubject = new BehaviorSubject(basicProps);
    }
    this.props$ = window.modalPropsSubject!.asObservable();
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

window.mountWebComponent = mountWebComponent;

export { mountWebComponent };
