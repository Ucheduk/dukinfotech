const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    },
    writeToDisk: true,
    port: process.env.PORT || 3002
  },
  module: {
    rules: []
  }
});