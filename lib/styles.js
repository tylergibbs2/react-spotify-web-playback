"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.styled = exports.put = exports.keyframes = exports.getMergedStyles = exports.px = void 0;
/* tslint:disable:object-literal-sort-keys */
var React = require("react");
var nano_css_1 = require("nano-css");
// @ts-ignore
var jsx_1 = require("nano-css/addon/jsx");
var keyframes_1 = require("nano-css/addon/keyframes");
// @ts-ignore
var nesting_1 = require("nano-css/addon/nesting");
var rule_1 = require("nano-css/addon/rule");
// @ts-ignore
var style_1 = require("nano-css/addon/style");
// @ts-ignore
var styled_1 = require("nano-css/addon/styled");
var nano = nano_css_1.create({ h: React.createElement });
rule_1.addon(nano);
keyframes_1.addon(nano);
jsx_1.addon(nano);
style_1.addon(nano);
styled_1.addon(nano);
nesting_1.addon(nano);
var _a = nano, keyframes = _a.keyframes, put = _a.put, styled = _a.styled;
exports.keyframes = keyframes;
exports.put = put;
exports.styled = styled;
var px = function (val) { return (typeof val === 'number' ? val + "px" : val); };
exports.px = px;
function getMergedStyles(styles) {
    return __assign({ activeColor: '#1cb954', altColor: '#ccc', bgColor: '#fff', color: '#333', errorColor: '#a60000', height: 48, loaderColor: '#ccc', loaderSize: 32, sliderColor: '#666', sliderHandleBorderRadius: '50%', sliderHandleColor: '#000', sliderHeight: 4, sliderTrackBorderRadius: 0, sliderTrackColor: '#ccc', trackArtistColor: '#999', trackNameColor: '#333' }, styles);
}
exports.getMergedStyles = getMergedStyles;
//# sourceMappingURL=styles.js.map