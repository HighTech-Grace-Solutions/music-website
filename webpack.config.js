'use-strict';

const webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
      filename: 'app.js',
  },
  devServer:{
      inline: false,
      port: 3000
  },
  module: {
     rules: [
        {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: 'babel-loader'
        }
     ]
  }
};
