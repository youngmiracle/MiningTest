"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./bandSection.css");
var BandSection = function BandSection(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("section", {
    className: "band"
  }, /*#__PURE__*/React.createElement("p", {
    className: "band__title"
  }, text));
};
var _default = exports.default = BandSection;