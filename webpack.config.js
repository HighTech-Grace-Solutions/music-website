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
     loaders: [
        {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: 'babel-loader',

           query: {
              presets: ['es2015', 'stage-0', 'react']
           }
        }
     ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
