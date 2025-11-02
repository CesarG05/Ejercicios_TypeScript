const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: './app/index.ts', 
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'build'), 
    clean: true, 
  },
  devServer: {
    static: './dist',
    port: 9000,
    open: true, 
  },
  resolve: {
    extensions: ['.ts', '.js'], 
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

 //mode: 'development', // o 'production'
 ///devtool: 'inline-source-map', 
