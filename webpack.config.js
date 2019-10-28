const path = require("path");

module.exports = {
  entry: "./sic-list.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  devtool: "source-map"
};
