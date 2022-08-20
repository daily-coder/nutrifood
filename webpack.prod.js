const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const getHtmlWebpackPlugins = require("./html-plugin-helper");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
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
  plugins: [
    ...getHtmlWebpackPlugins({
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css",
    }),
    new CssMinimizerPlugin(),
  ],
});
