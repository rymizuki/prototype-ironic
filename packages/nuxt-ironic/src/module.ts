import * as path from 'path'
import pkg from '../package.json'

export const meta = pkg

export default function(this: any) {
  this.addPlugin({
    src: path.resolve(__dirname, '../templates/plugin.js'),
    fileName: 'ironic.js'
  })
}
