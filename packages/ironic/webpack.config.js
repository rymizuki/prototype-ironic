const path = require('path')

module.exports = {
  target: 'web',
  entry: "./src/ironic.ts",
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'ironic.js',
    globalObject: 'this',
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