const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],

  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    static: './dist',
    open: true,
    port: 4000,
  }
};
