import 'babel-polyfill';
import { Canvas } from '../src/Canvas';
import { prepareWebComponent } from '@capsulajs-web-components/utils';
import { props$ } from './utils';

declare global {
  interface Window {
    mountWebComponent: () => void;
  }
}

class CanvasWithData extends Canvas {
  public setProps() {
    this.props$ = props$;
  }
}

let webComponent: HTMLElement;

const name = 'web-canvas';
const path = 'http://cdn.components/Canvas.tsx';
const componentModules = {
  [path]: CanvasWithData,
};

const mountWebComponent = async () => {
  !webComponent && (webComponent = await prepareWebComponent({ name, path, componentModules }));
  document.getElementById(name)!.appendChild(webComponent);
};

window.mountWebComponent = mountWebComponent;

export { mountWebComponent };
