import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import 'root/packages/canvas/src/example/index';

export const props = {};
export const actions = {
  onUpdate: action('onUpdate'),
};
export const styles = {
  width: 1000,
  height: 500,
};

storiesOf('Canvas', module)
  .add('default', () => <div id="web-canvas" style={styles}></div>);
