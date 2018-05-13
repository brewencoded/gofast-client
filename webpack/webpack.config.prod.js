const webpackCommon = require('./webpack.config.common');

module.exports = Object.assign(webpackCommon, {
  target: "web",
  watch: false,
  mode: "production",
});
