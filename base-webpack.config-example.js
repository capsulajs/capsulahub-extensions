const path = require('path');
const baseConfig = require('./base-webpack.config');
const packagePath = path.resolve(__dirname, `packages/${process.env.PACKAGE_NAME}`);

module.exports = {
  ...baseConfig,
  entry: `${packagePath}/public/index.ts`,
  output: {
    path: `${packagePath}/public/dist`,
    filename: 'index.js',
  },
  plugins: [],
};
