const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin")
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})

module.exports = {
    entry: './src/index.tsx',
    target: "web",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
          'style-loader',
          'css-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
      modules: ['node_modules']
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../dist')
    },
    plugins: [htmlPlugin]
  };