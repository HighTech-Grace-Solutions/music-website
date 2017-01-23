const config = {
  entry: './main.js',

  output: {
    path:'./',
    filename: 'index.js'
  },

  devServer:{
    inline: true,
    port: 3000
  },

  module: {
     loaders: [
        {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: 'babel',

           query: {
              presets: ['es2015', 'stage-0', 'react']
           }
        }
     ]
  }
};

module.exports = config;
