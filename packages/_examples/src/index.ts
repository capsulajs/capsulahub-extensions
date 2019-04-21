import RequestFormWithData from './components/RequestFormWithData';
import * as api from './api';

declare global {
  interface Window {
    workspace: {
      service(serviceRequest: { serviceName: string }): Promise<{ proxy: any }>;
    };
  }
}

export default {
  RequestFormWithData,
  api,
};
