import React from 'react';
import { storiesOf } from '@storybook/react';
import './src/example/index.ts';

export const styles = {
  width: 1000,
  height: 500,
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
