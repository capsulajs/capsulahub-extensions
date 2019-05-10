import React from 'react';
import { storiesOf } from '@storybook/react';
import mountWebComponent from './src/example/index.ts';

export const styles = {
  width: 1000,
  height: 500,
};

class Example extends React.Component {
  async componentDidMount() {
    await mountWebComponent();
  }

  render() {
    return <div id="web-canvas" style={styles} />;
  }
}

storiesOf('Canvas', module).add('default', () => <Example />);
