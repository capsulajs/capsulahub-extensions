const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./base-webpack.config');

module.exports = () => {
  const packagePath = process.cwd();
  return {
    ...baseConfig(),
    mode: 'development',
    entry: `${packagePath}/src/example/index.ts`,
    output: {
      path: `${packagePath}/public`,
      filename: 'index.js',
    },
    devServer: {
      contentBase: `${packagePath}/public`,
      compress: false,
      port: 1234,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/example/index.html',
      }),
    ],
  };
};
