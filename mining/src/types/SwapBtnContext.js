"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useContextSwapBtn = exports.SwapBtnContext = void 0;
var _react = require("react");
var SwapBtnContext = exports.SwapBtnContext = /*#__PURE__*/(0, _react.createContext)({
  swapBtnClass: ""
});
var useContextSwapBtn = exports.useContextSwapBtn = function useContextSwapBtn() {
  return (0, _react.useContext)(SwapBtnContext);
};