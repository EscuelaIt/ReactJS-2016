import {optimize, DefinePlugin} from 'webpack'
import {resolve, join} from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const SRC_PATH = join(__dirname, '/src')
const EXAMPLES_PATH = resolve(__dirname, 'examples')

export default {
  entry: EXAMPLES_PATH,
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
    path: join(EXAMPLES_PATH, 'dist'),
    filename: 'gh-pages.min.js',
    library: 'gh-pages',
    libraryTarget: 'umd'
  },
  plugins: [
    new ExtractTextPlugin('gh-pages.min.css'),
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
    alias: {
      'redux-example': SRC_PATH
    },
    extensions: ['', '.js', '.scss']
  }
}
