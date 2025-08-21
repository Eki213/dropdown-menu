const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  entry: {
    components: "./src/js/index.js",
    carousel: "./src/js/carousel.js",
    dropdown: "./src/js/dropdown.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/components.css",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/css/*.css", to: "css/[name][ext]" }],
    }),
  ],
  optimization: {
    minimize: false,
  },
});
