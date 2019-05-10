import { prepareWebComponent } from '@capsulajs-web-components/utils';
import { RequestForm } from '../RequestForm';
import { requestFormPropsSubject } from '../helpers/utils';

class RequestFormWithData extends RequestForm {
  public setProps() {
    this.props$ = requestFormPropsSubject.asObservable();
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
window.requestFormPropsSubject = requestFormPropsSubject;

export { mountWebComponent };
