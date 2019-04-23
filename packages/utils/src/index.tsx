import * as React from 'react';
import { groupBy } from 'lodash';

export const dataComponentHoc = (Component: any, data$: any) => {
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

export const importFake = (modules: object, path: string): Promise<any> => {
  return Promise.resolve({ default: modules[path] });
};

export const prepareWebComponent = ({ name, path, componentModules }) => {
  return importFake(componentModules, path)
    .then((module) => module.default)
    .then((WebComponent) => {
      customElements.define(name, WebComponent);
      const webComponent = new WebComponent();
      typeof webComponent.setProps === 'function' && webComponent.setProps();
      return webComponent;
    });
};
