const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = process.env.NODE_ENV === "production" ? "production" : "development";
let target = process.env.NODE_ENV === "production" ? "browserslist" : "web";

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

module.exports = {
  mode: mode,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|pdf)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: plugins,
  target: target,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    port: 8000,
    contentBase: "./dist",
    hot: true,
  },
};
