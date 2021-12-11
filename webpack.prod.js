const webpackConfig = require('./webpack.config');

module.exports = {
  ...webpackConfig,

  mode: 'production',

  optimization: {
    minimize: true,
  },
};
