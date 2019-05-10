import { BehaviorSubject } from 'rxjs';
import { RequestForm } from './RequestForm';
import * as api from './api';
import { RequestFormUIProps } from './api';

declare global {
  interface Window {
    requestFormPropsSubject: BehaviorSubject<RequestFormUIProps>;
    mountWebComponent: () => void;
  }
}

export default {
  RequestForm,
  api,
};
