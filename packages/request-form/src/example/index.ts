import { BehaviorSubject } from 'rxjs';
import { prepareWebComponent } from '@capsulajs/capsulahub-extension-utils';
import { RequestForm } from '../RequestForm';
import { basicProps } from './utils';

class RequestFormWithData extends RequestForm {
  public setProps() {
    // In tests env requestFormPropsSubject is set before loading the page
    // @ts-ignore
    if (!window.requestFormPropsSubject) {
      // @ts-ignore
      window.requestFormPropsSubject = new BehaviorSubject(basicProps);
    }
    // @ts-ignore
    this.props$ = window.requestFormPropsSubject!.asObservable();
  }
}

let webComponent: HTMLElement;

const name = 'web-request-form';
const path = 'http://cdn.components/RequestForm.tsx';
const componentModules = {
  [path]: RequestFormWithData,
};

const mountWebComponent = async () => {
  !webComponent && (webComponent = await prepareWebComponent({ name, path, componentModules }));
  document.getElementById(name)!.appendChild(webComponent);
};

// @ts-ignore
window.mountWebComponent = mountWebComponent;

export { mountWebComponent };
