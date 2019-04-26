import { Logger } from '../logger';
import { mountWebComponent } from '@capsulajs-web-components/utils';
import { props$ } from './utils';

class LogsWithData extends Logger {
  public setProps() {
    this.props$ = props$;
  }
}

const componentModules = {
  ['http://cdn.components/Logger.tsx']: LogsWithData,
};

mountWebComponent({
  name: 'web-logger',
  path: 'http://cdn.components/Logger.tsx',
  querySelector: '#web-logger',
  componentModules,
});
