import { BehaviorSubject } from 'rxjs';
import RequestForm from '@capsulajs-web-components/request-form';
import Workspace from '../../mocks/Workspace';

const { RequestFormWithData } = RequestForm;

declare global {
  interface Window {
    workspace: {
      service(serviceRequest: { serviceName: string }): Promise<{ proxy: any }>;
    };
  }
}

const selectedSubject = new BehaviorSubject({ selectedService: 'GreetingService', selectedMethod: 'hello' });

const workspace = new Workspace({ selectedSubject });
window.workspace = workspace;

customElements.define('web-request-form', RequestFormWithData);
const requestForm = new RequestFormWithData();
typeof requestForm.setProps === 'function' && requestForm.setProps();
document.getElementById('grid')!.appendChild(requestForm);
