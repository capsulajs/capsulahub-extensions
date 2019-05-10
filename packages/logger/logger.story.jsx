import React from 'react';
import { storiesOf } from '@storybook/react';
import './src/example/index.ts';

export const styles = {
  width: 1000,
  height: 500,
};

class Example extends React.Component {
  async componentDidMount() {
    await mountLoggerWebComponent();
  }

  render() {
    return <div id="web-logger" style={styles} />;
  }
}

storiesOf('Logger', module).add('default', () => <Example />);
