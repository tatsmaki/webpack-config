const webpackConfig = require('./webpack.config');

module.exports = {
  ...webpackConfig,

  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    static: './dist',
    open: true,
    port: 4000,
  },
};
