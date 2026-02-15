const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  entry: "./index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  plugins: [new Dotenv()],
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
    devMiddleware: {
      publicPath: "/dist/",
    },
    hot: true,
    open: true,
  },
};
