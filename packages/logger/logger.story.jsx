import React from 'react';
import { storiesOf } from '@storybook/react';
import './src/example/index.tsx';

export const styles = {
  width: 1000,
  height: 500,
};

storiesOf('Logger', module).add('logger', () => <div id="web-logger" style={styles} />);
