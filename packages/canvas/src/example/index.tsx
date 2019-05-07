import { Canvas } from '../canvas';
import { prepareWebComponent } from 'capsulajs-web-components/utils';
import { props$ } from './utils';

class CanvasWithData extends Canvas {
  public setProps() {
    this.props$ = props$;
  }
}

const componentModules = {
  ['http://cdn.components/Canvas.tsx']: CanvasWithData,
};

prepareWebComponent({
  name: 'web-logger',
  path: 'http://cdn.components/Canvas.tsx',
  componentModules,
}).then((webComponent) => document.querySelector('#web-canvas')!.appendChild(webComponent));
