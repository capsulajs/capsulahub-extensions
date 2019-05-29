import { RequestForm } from './RequestForm';
import * as api from './api';

// @ts-ignore
if (typeof publicExports !== 'undefined') {
  // @ts-ignore
  publicExports = RequestForm;
}

export default {
  RequestForm,
  api,
};
