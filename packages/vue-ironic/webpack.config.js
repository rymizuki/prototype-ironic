const path = require('path')

module.exports = {
  entry: "./src/index.ts",
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-ironic.js',
    globalObject: 'this'
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