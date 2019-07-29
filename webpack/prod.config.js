const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const path = require('path');

module.exports = merge(baseConfig, {
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'index.bundle.js'
  },
  module: {}
});