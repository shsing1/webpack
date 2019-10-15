const webpack = require('webpack');
const path = require('path');

const vendors = [
  // 'babel-polyfill',
  // 'es6-promise',
  'vue/dist/vue.esm.js',
  'sockjs-client/dist/sockjs.js',
  // 'vue-router',
  // 'vuex',
  // 'vuex-router-sync',
  // 'axios',
  // 'cookie',
];

module.exports = {
  output: {
    path: path.resolve(__dirname, 'static/js'),
    filename: '[name].dll.js',
    library: '[name]_[hash]',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      path: path.join(__dirname, '[name]-manifest.json'),
      name: '[name]_[hash]',
    }),
  ],
};
