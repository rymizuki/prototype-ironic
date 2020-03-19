"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const package_json_1 = __importDefault(require("../package.json"));
exports.meta = package_json_1.default;
function default_1() {
    this.addPlugin({
        src: path.resolve(__dirname, '../templates/plugin.js'),
        fileName: 'ironic.js'
    });
}
exports.default = default_1;
//# sourceMappingURL=module.js.map