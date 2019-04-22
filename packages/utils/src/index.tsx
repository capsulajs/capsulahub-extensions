import * as React from 'react';
import { Observable } from 'rxjs';
import { groupBy } from 'lodash';
import { JSXElementConstructor } from 'react';

export const dataComponentHoc = (Component: JSXElementConstructor<any>, data$: Observable<any>) => {
  return class HOC extends React.PureComponent {
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

export const mapServiceMethods = (methods) => {
  const serviceGroups = groupBy(methods, 'serviceName');
  const mapServiceMethod = (service) => ({
    id: service,
    name: service,
    children: serviceGroups[service].map(({ methodName }) => ({
      id: methodName,
      name: methodName,
    })),
  });

  return [
    {
      id: 'root',
      name: 'Services',
      children: Object.keys(serviceGroups).map(mapServiceMethod),
    },
  ];
};
