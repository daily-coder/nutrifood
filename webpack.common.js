const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/js/index.js"),
    store: path.resolve(__dirname, "src/js/store.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "img/[name][hash][ext]",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpeg|jpg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
