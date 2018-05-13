const webpack = require('webpack')
const webpackCommon = require('./webpack.config.common');

module.exports = Object.assign(webpackCommon, {
  devtool: 'source-map',
  target: "web",
  mode: "development",
  plugins: webpackCommon.plugins.concat([
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ])
});
