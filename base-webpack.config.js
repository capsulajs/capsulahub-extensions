const WrapperPlugin = require('wrapper-webpack-plugin');

module.exports = () => {
  const packagePath = process.cwd();
  return {
    mode: 'production',
    entry: `${packagePath}/src/index.ts`,
    output: {
      path: `${packagePath}/dist`,
      filename: 'index.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              declaration: false,
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          loaders: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets/',
          },
        },
        {
          test: /\.(css|less)$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
          ],
        },
        { parser: { import: false } },
      ],
    },
    plugins: [
      new WrapperPlugin({
        test: /\.js$/,
        header: 'var publicExports = {}; (function () {\n',
        footer: '})();export default publicExports',
      }),
    ],
    node: {
      fs: 'empty',
    },
  };
};
