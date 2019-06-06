import React from 'react';
import { storiesOf } from '@storybook/react';
import { mountWebComponent } from './src/example';

export const styles = {
  width: 1000,
  height: 565,
};

class Example extends React.Component {
  async componentDidMount() {
    await mountWebComponent();
  }

  render() {
    return <div id="web-request-form" style={styles} />;
  }
}

storiesOf('RequestForm', module).add('default', () => <Example />);
