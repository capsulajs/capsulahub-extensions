const path = require("path");
const include = path.resolve(__dirname, "../");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        loader: "babel-loader!ts-loader",
        exclude: /node_modules/,
        include
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loaders: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "assets/"
        }
      },
      {
        test: /\.(css|less)$/,
        include,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      root: path.resolve("..")
    }
  }
};
