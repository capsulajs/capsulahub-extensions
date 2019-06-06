const baseConfig = require('../../base-webpack.config');

module.exports = {
  ...baseConfig(),
  entry: './src/index.tsx',
};
