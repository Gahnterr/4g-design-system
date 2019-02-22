const path = require ('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve (__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  // resolve: {
  //   modules: [__dirname, 'node_modules'],
  //   extensions: ['*', '.js', '.jsx'],
  // },
  devtool: 'source-map',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
};
