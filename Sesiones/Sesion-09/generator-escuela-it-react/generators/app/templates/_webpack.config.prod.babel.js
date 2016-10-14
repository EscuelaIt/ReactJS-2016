
import {optimize, DefinePlugin} from 'webpack'
import {resolve} from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  entry: resolve(__dirname, 'src'),
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      exclude: /node_modules/
    }]
  },
  exterals: {
    'react': 'react',
    'react-dom': 'react-dom'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '<%= name %>.min.js',
    library: '<%= name %>',
    libraryTarget: 'umd'
  },
  plugins: [
    new ExtractTextPlugin('<%= name %>.min.css'),
    new optimize.OccurenceOrderPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  ],
  resolve: {
    extensions: ['', '.js']
  }
}
