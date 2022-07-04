// fork-ts-checker-webpack-plugin
// ^^^ consider using this plugin to speed up type checking among other things

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  rules: [
    {
      test: /\.(ts|js)?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options:{
          presets: ["@babel/preset-env", "@babel/preset-typescript"],
        },
      },
    }
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 8080
  }
  plugins: [
    new HtmlWebpackPlugin({
      title: "eta_calculator",
    }),
  ]
}
