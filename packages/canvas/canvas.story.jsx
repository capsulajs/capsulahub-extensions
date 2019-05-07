import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import '../dist';

export const styles = {
  width: 1000,
  height: 500,
};

storiesOf('Canvas', module).add('default', () => <div id="web-canvas" style={styles} />);
