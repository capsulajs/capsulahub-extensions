import 'babel-polyfill';
import { Logger } from '../logger';
import { prepareWebComponent } from '@capsulajs/web-components-utils';
import { props$ } from './utils';

class LoggerWithData extends Logger {
  public setProps() {
    this.props$ = props$;
  }
}

let webComponent;

const defineWebComponent = async () => {
  webComponent = await prepareWebComponent({
    name: 'web-logger',
    path: 'http://cdn.components/Logger.tsx',
    componentModules: {
      ['http://cdn.components/Logger.tsx']: LoggerWithData,
    },
  });
};

const mountWebComponent = async () => {
  if (!webComponent) {
    await defineWebComponent();
  }

  const mountPoint = document.querySelector('#web-logger');
  mountPoint && mountPoint.appendChild(webComponent);
};

window['mountWebComponent'] = mountWebComponent;

export default mountWebComponent;
