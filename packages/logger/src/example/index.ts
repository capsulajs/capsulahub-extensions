import 'babel-polyfill';
import { Logger } from '../Logger';
import { prepareWebComponent } from '@capsulajs-web-components/utils';
import { props$ } from './utils';

class LoggerWithData extends Logger {
  public setProps() {
    this.props$ = props$;
  }
}

let webComponent;

const name = 'web-logger';
const path = 'http://cdn.components/Logger.tsx';
const componentModules = {
  [path]: LoggerWithData,
};

const mountWebComponent = async () => {
  !webComponent && (webComponent = await prepareWebComponent({ name, path, componentModules }));
  document.getElementById(name)!.appendChild(webComponent);
};

window.mountWebComponent = mountWebComponent;

export default mountWebComponent;
