import 'babel-polyfill';
import { BehaviorSubject } from 'rxjs';
import { prepareWebComponent } from '@capsulajs-web-components/utils';
import { RequestForm } from '../RequestForm';
import { basicProps } from '../helpers/utils';

class RequestFormWithData extends RequestForm {
  public setProps() {
    // In tests env requestFormPropsSubject is set before loading the page
    if (!window.requestFormPropsSubject) {
      window.requestFormPropsSubject = new BehaviorSubject(basicProps);
    }
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

window.mountWebComponent = mountWebComponent;

export { mountWebComponent };
