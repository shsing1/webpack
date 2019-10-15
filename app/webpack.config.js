const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
    },
    modules: [
      'node_modules',
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 5000,
  },
  module: {
    // noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: (file) => (
          /node_modules/.test(file)
          && !/\.vue\.js/.test(file)
        ),
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Welcome',
      template: './src/index.html',
    }),
    // new webpack.NamedModulesPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new StyleLintPlugin({
      files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
    }),
    new BundleAnalyzerPlugin(),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./vendor-manifest.json'),
    }),
    new CopyWebpackPlugin([
      {
        from: './static',
        to: 'static',
      },
    ]),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    pathinfo: false,
    // publicPath: '/',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
