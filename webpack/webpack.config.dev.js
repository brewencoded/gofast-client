const webpackCommon = require('./webpack.config.common');

module.exports = Object.assign(webpackCommon, {
  devtool: 'source-map',
  target: "web",
  watch: true,
  mode: "development",
  devServer: {
    contentBase: './dist'
  },
});
