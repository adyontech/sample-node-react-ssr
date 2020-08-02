var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = [
  {
    node: {
      console: true,
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      __filename: true,
      __dirname: true,
      publicPath: './images/'
    },
    entry: {},
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'scripts/[name]bundle.js',
      publicPath: '/public/'
    },
    plugins: [
      new CleanWebpackPlugin(['public/stylesheets', 'public/scripts'], {
        verbose: true,
        dry: false
      }),
      //new webpack.optimize.CommonsChunkPlugin("layout",'./scripts/commonbundleNew1.js'),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development')
        }
      }),
      // new webpack.optimize.UglifyJsPlugin({
      // 	minimize: true,
      // 	compress:{
      // 		drop_console: true
      // 	}
      // 	}),
      /*new webpack.IgnorePlugin(/^jquery$/)*/
      new ExtractTextPlugin('./stylesheets/[name].css')
      // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
    ],
    module: {
      loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react', 'stage-2']
          }
        },
        {
          test: /.json?$/,
          loader: 'json-loader'
        },
        {
          test: /.html?$/,
          loader: 'html-loader'
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },
        // {
        //           test: /\.scss$/,
        //           loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        // },
        {
          test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.ttf$|.wav$|.mp3$/,
          loader:
            require.resolve('file-loader') + '?name=../images/[name].[ext]'
        },
        {
          test: /.woff$|.ttf$|.wav$|.mp3$/,
          loader: require.resolve('file-loader') + ''
        }
      ]
    }
  }
];
function FileListPlugin(options) {}

FileListPlugin.prototype.apply = function(compiler) {
  compiler.plugin('after-emit', function(compilation, callback) {});
};
