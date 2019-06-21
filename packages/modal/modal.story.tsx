import React from 'react';
import { storiesOf } from '@storybook/react';
import { mountWebComponent } from './src/example';

class Example extends React.Component {
  async componentDidMount() {
    await mountWebComponent();
  }

  render() {
    return <div id="web-modal" />;
  }
}

storiesOf('Modal', module).add('default', () => <Example />);
