"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./levelExampleResult.css");
var _reactRouterDom = require("react-router-dom");
var LevelExampleResult = function LevelExampleResult(_ref) {
  var textLvl = _ref.textLvl,
    resultProcent = _ref.resultProcent;
  return /*#__PURE__*/React.createElement("div", {
    className: "lvlExampleResult"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lvlExampleResult__text"
  }, textLvl), /*#__PURE__*/React.createElement("div", {
    className: "scaleBlock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scaleBlock__result",
    style: {
      width: "".concat(resultProcent)
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "lvlExampleResult__text"
  }, resultProcent));
};
var _default = exports.default = LevelExampleResult;