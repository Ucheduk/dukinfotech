const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {

  // webpack will take the files from ./src/index
  entry: './src/index',

  // and output it into /dist as bundle.js
  output: {
    publicPath: '/'
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [

        // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader'
        },
      },

      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.(jpg|jpeg|png|gif|mp3|mp4|svg)$/, loaders: ['file-loader'] }
    ]
  },
  plugins: [
    new Dotenv(),
    new webpack.EnvironmentPlugin(['NODE_ENV', 'API_URL']),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([
      { from: './src/assets/videos', to: 'assets/videos' },
      { from: './src/assets/images', to: 'assets/images' }
    ])
  ]
}