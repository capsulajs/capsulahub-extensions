import 'babel-polyfill';
import { Canvas } from '../canvas';
import { prepareWebComponent } from '@capsulajs/web-components-utils';
import { props$ } from './utils';

class CanvasWithData extends Canvas {
  public setProps() {
    this.props$ = props$;
  }
}

let webComponent;

const defineWebComponent = async () => {
  webComponent = await prepareWebComponent({
    name: 'web-canvas',
    path: 'http://cdn.components/Canvas.tsx',
    componentModules: {
      ['http://cdn.components/Canvas.tsx']: CanvasWithData,
    },
  });
};

const mountWebComponent = async () => {
  if (!webComponent) {
    await defineWebComponent();
  }

  const mountPoint = document.querySelector('#web-canvas');
  mountPoint && mountPoint.appendChild(webComponent);
};

// @ts-ignore
window.mountWebComponent = mountWebComponent;

export default mountWebComponent;
