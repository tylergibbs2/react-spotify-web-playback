"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ClickOutside = /** @class */ (function (_super) {
    __extends(ClickOutside, _super);
    function ClickOutside(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (e) {
            if (e.type === 'touchend') {
                _this.isTouch = true;
            }
            if (e.type === 'click' && _this.isTouch) {
                return;
            }
            var onClick = _this.props.onClick;
            var el = _this.container;
            if (el && !el.contains(e.target)) {
                onClick();
            }
        };
        _this.container = null;
        _this.setRef = _this.setRef.bind(_this);
        _this.isTouch = false;
        return _this;
    }
    ClickOutside.prototype.componentDidMount = function () {
        document.addEventListener('touchend', this.handleClick, true);
        document.addEventListener('click', this.handleClick, true);
    };
    ClickOutside.prototype.componentWillUnmount = function () {
        document.removeEventListener('touchend', this.handleClick, true);
        document.removeEventListener('click', this.handleClick, true);
    };
    ClickOutside.prototype.setRef = function (ref) {
        this.container = ref;
    };
    ClickOutside.prototype.render = function () {
        var _a = this.props, children = _a.children, onClick = _a.onClick, props = __rest(_a, ["children", "onClick"]);
        return (React.createElement("div", __assign({}, props, { ref: this.setRef }), children));
    };
    return ClickOutside;
}(React.PureComponent));
exports.default = ClickOutside;
//# sourceMappingURL=ClickOutside.js.map