import * as path from 'path'

export const meta = require('../package.json')

export default function(this: any) {
  this.addPlugin({
    src: path.resolve(__dirname, '../templates/plugin.js'),
    fileName: 'ironic.js'
  })
}
