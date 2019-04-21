import { BehaviorSubject } from 'rxjs';
import Workspace from './src/mocks/Workspace';
import RequestFormWithData from './src/components/RequestFormWithData';

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
