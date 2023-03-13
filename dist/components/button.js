"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
function Button(props) {
    var ButtonTag = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    // \uC0AC\uC774\uC988\n    ", "\n  "], ["\n    // \uC0AC\uC774\uC988\n    ", "\n  "])), function (_a) {
        var size = _a.size;
        return size === "small"
            ? "padding: 7px 15px;font-size: 0.8rem;"
            : "padding: 15px 20px;font-weight: 500; font-size: 0.88rem;\n        ";
    });
    return react_1.default.createElement(ButtonTag, __assign({}, props));
}
exports.default = Button;
var templateObject_1;
//# sourceMappingURL=button.js.map