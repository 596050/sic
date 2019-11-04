const path = require("path");

module.exports = {
  entry: "./sic-list.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2"
  },
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  }
};
