import * as React from 'react';
import { Observable } from 'rxjs';
import { PrepareWebComponentRequest, MountWebComponentRequest } from './types';

export const dataComponentHoc = <Data extends {}>(Component: React.ReactType, data$: Observable<Data>) => {
  return class HOC extends React.Component {
    public componentDidMount() {
      data$.subscribe((data) => {
        this.setState(data);
      });
    }

    public render() {
      if (!this.state) {
        return null;
      }
      return <Component {...this.state} />;
    }
  };
};

export const importFake = (modules: any, path: string): Promise<{ default: any }> => {
  return Promise.resolve({ default: modules[path] });
};

export const prepareWebComponent = (prepareRequest: PrepareWebComponentRequest) => {
  return importFake(prepareRequest.componentModules, prepareRequest.path)
    .then((module) => module.default)
    .then((WebComponent) => {
      customElements.define(prepareRequest.name, WebComponent);
      const webComponent = new WebComponent();
      typeof webComponent.setProps === 'function' && webComponent.setProps();
      return webComponent;
    });
};

export const mountWebComponent = (mountRequest: MountWebComponentRequest) =>
  prepareWebComponent({
    name: mountRequest.name,
    path: mountRequest.path,
    componentModules: mountRequest.componentModules,
  }).then((webComponent) => document.querySelector(mountRequest.querySelector)!.appendChild(webComponent));
