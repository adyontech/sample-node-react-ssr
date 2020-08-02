var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CompressionPlugin = require("compression-webpack-plugin");
var ManifestPlugin = require("webpack-manifest-plugin");
var Version = require("./webpack_plugins/versioning");
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = [
  {
    stats: {
      warnings: false,
    },
    node: {
      console: true,
      fs: "empty",
      net: "empty",
      tls: "empty",
      __filename: true,
      __dirname: true,
      publicPath: "./images/",
    },

    entry: {
      layoutWeb: ["./client/layoutWeb.js"],
      webCarpoolHome: "./client/webCarpoolHome.js",
      errorPage: "./client/errorPage.js",
    },
    output: {
      path: path.join(__dirname, "public"),
      filename: "scripts/[name].[chunkhash].bundle.js",
      publicPath: "/public/",
    },
    plugins: [
      new CleanWebpackPlugin(["public/stylesheets", "public/scripts"], {
        verbose: true,
        dry: false,
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production"),
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        //minimize: true,
        compress: {
          drop_console: true,
        },
      }),
      /*new webpack.IgnorePlugin(/^jquery$/)*/
      new ExtractTextPlugin("./stylesheets/[name].[chunkhash].css"),
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
      new ManifestPlugin(),
      new Version(),
    ],
    module: {
      loaders: [
        {
          test: /.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          query: {
            presets: ["es2015", "react", "stage-2"],
          },
        },
        {
          test: /.json?$/,
          loader: "json-loader",
        },
        {
          test: /.html?$/,
          loader: "html-loader",
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
        },
        // {
        //           test: /\.scss$/,
        //           loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        // },
        {
          test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.ttf$|.wav$|.mp3$/,
          loader:
            require.resolve("file-loader") + "?name=../images/[name].[ext]",
        },
        {
          test: /.woff$|.ttf$|.wav$|.mp3$/,
          loader: require.resolve("file-loader") + "",
        },
      ],
      rules: [
        {
          test: /\.jsx?/i,
          loader: "babel-loader",
          options: {
            presets: ["es2015-loose", "stage-0"],
            plugins: [["transform-react-jsx", { pragma: "h" }]],
          },
        },
      ],
    },
  },
];

function FileListPlugin(options) {}

FileListPlugin.prototype.apply = function (compiler) {
  compiler.plugin("after-emit", function (compilation, callback) {});
};
