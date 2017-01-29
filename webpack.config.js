'use-strict';

module.exports = {

  entry: './main.js',

  output: {
    filename: 'index.js'
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
           loader: 'babel',

           query: {
              presets: ['es2015', 'react']
           }
        }
     ]
  }
};
