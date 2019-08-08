const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /(\.png$|\.jpg$|\.jpeg$)/,
        use: "file-loader"
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
};

module.exports = config;
