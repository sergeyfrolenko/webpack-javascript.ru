const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  entry: './dest/home.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
    library: 'home'
  },
  watch: NODE_ENV == 'development',
  watchOptions: {
    aggregateTimeout: 100
  },
  optimization: {
    // We no not want to minimize our code.
    minimize: false
  },
  devtool: NODE_ENV == 'development' ? "source-map" : null,
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': '"production"',
    // })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }

}