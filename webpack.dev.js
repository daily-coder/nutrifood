const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const getHtmlWebpackPlugins = require("./html-plugin-helper");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    watchFiles: ["src/**/*"],
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    ...getHtmlWebpackPlugins(),
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css",
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: "all",
          enforce: true,
          name: "common",
        },
      },
    },
  },
});
