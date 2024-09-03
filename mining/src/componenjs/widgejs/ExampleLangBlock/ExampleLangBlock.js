"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./exampleLangBlock.css");
var _Resource = _interopRequireDefault(require("../../../types/Resource"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var ExampleLangBlock = function ExampleLangBlock(_ref) {
  var imageSrc = _ref.imageSrc,
    onclick = _ref.onclick;
  return /*#__PURE__*/React.createElement("section", {
    className: "nav__blocklang"
  }, /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: "\u0438\u043A\u043E\u043D\u043A\u0430",
    className: "infNav__img"
  }), /*#__PURE__*/React.createElement("button", {
    className: "navInf__go",
    onClick: onclick
  }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438"));
};
var _default = exports.default = ExampleLangBlock;