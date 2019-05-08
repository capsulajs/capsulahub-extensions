import { Logger } from './Logger';
import * as api from './api';
import { LoggerUIProps } from './api';

declare global {
  interface Window {
    mountWebComponent: Function;
  }
}

export default {
  Logger,
  api,
};
