const path = require('path')

module.exports = {
  entry: "./src/ironic.ts",
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'ironic.js'
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      { test: /\.ts/, loader: 'ts-loader' },
    ]
  }
}