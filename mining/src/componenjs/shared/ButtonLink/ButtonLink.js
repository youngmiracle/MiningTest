"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./buttonLink.css");
var _reactRouterDom = require("react-router-dom");
var ButtonLink = function ButtonLink(_ref) {
  var text = _ref.text,
    style = _ref.style,
    to = _ref.to,
    onClick = _ref.onClick,
    className = _ref.className;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    className: className,
    style: style,
    to: to,
    onClick: onClick,
    children: text
  }));
};
var _default = exports.default = ButtonLink;