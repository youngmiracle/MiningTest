"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ButtonLink = _interopRequireDefault(require("../ButtonLink/ButtonLink"));
require("./levelExampleBlock.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var LevelExampleBlock = function LevelExampleBlock(_ref) {
  var lvl = _ref.lvl,
    to = _ref.to;
  return /*#__PURE__*/React.createElement("section", {
    className: "levelList__exampleLvlBlock"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "exampleLvlBlock__title"
  }, lvl), /*#__PURE__*/React.createElement(_ButtonLink.default, {
    to: to,
    text: "\u041D\u0410\u0427\u0410\u0422\u042C",
    className: "levelLink"
  }));
};
var _default = exports.default = LevelExampleBlock;