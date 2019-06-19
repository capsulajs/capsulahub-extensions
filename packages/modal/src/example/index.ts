import { BehaviorSubject } from 'rxjs';
import { Modal } from '../Modal';
import { prepareWebComponent } from '@capsulajs/capsulahub-extension-utils';
import { basicProps } from './utils';

class ModalWithData extends Modal {
  public setProps() {
    // In tests env modalPropsSubject is set before loading the page
    // @ts-ignore
    if (!window.modalPropsSubject) {
      // @ts-ignore
      window.modalPropsSubject = new BehaviorSubject(basicProps);
    }
    // @ts-ignore
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

// @ts-ignore
window.mountWebComponent = mountWebComponent;

export { mountWebComponent };
