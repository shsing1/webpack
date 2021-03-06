const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');

const options = {
  disableHostCheck: true,
  contentBase: './dist',
  hot: true,
  // open: true,
  overlay: true,
  host: 'localhost',
  historyApiFallback: true,
  // publicPath: '/',
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, '0.0.0.0', () => {
  console.log('dev server listening on port 5000');
});
