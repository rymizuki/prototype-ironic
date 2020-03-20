"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
exports.meta = require('../package.json');
function default_1() {
    this.addPlugin({
        src: path.resolve(__dirname, '../templates/plugin.js'),
        fileName: 'ironic.js'
    });
}
exports.default = default_1;
//# sourceMappingURL=module.js.map