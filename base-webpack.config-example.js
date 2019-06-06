const baseConfig = require('./base-webpack.config');

module.exports = () => {
  const packagePath = process.cwd();
  return {
    ...baseConfig,
    entry: `${packagePath}/public/index.ts`,
    output: {
      path: `${packagePath}/public/dist`,
      filename: 'index.js',
    },
    plugins: [],
  };
};
