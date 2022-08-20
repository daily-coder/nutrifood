const HtmlWebpackPlugin = require("html-webpack-plugin");

function getHtmlWebpackPlugins(minifyOptions = {}) {
  const templates = ["index", "store"];
  const HtmlWebpackPlugins = templates.map((template) => {
    const defaults = {
      template: `src/html/${template}.html`,
      filename: `${template}.html`,
      chunks: [template],
    };
    return new HtmlWebpackPlugin(Object.assign(defaults, minifyOptions));
  });
  return HtmlWebpackPlugins;
}

module.exports = getHtmlWebpackPlugins;
