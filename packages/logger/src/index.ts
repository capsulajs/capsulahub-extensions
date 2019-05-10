import { Logger } from './Logger';
import * as api from './api';

declare global {
  interface Window {
    mountWebComponent: () => void;
  }
}

export default {
  Logger,
  api,
};
