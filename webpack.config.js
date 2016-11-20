/* eslint import/no-extraneous-dependencies: 0 no-unused-vars: 1 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/EventListener.js',
  output: {
    filename: 'eventlistener.js',
    path: path.join(__dirname, 'dist'),
    library: 'eventlistener',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel?presets[]=es2015&presets[]=stage-0',
          'eslint-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  eslint: {
    configFile: path.join(__dirname, '.eslintrc'),
  },
};
