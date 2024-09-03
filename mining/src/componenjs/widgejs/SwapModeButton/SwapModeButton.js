"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AuthenticationContext = require("../../../types/AuthenticationContext");
require("./swapModeButton.css");
var _react = require("react");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SwapModeButton = function SwapModeButton() {
  var _useState = (0, _react.useState)("swapBtn__wand"),
    _useState2 = _slicedToArray(_useState, 2),
    swapWandClass = _useState2[0],
    setSwapWandClass = _useState2[1];
  var _useState3 = (0, _react.useState)("swapModeBtn"),
    _useState4 = _slicedToArray(_useState3, 2),
    swapBtnClass = _useState4[0],
    setSwapBtnClass = _useState4[1];
  var _useContextAuthentica = (0, _AuthenticationContext.useContextAuthentication)(),
    setClassRegistrationOpen = _useContextAuthentica.setClassRegistrationOpen;
  var swapClass = function swapClass() {
    if (swapBtnClass == "swapModeBtn") {
      setSwapBtnClass("swapModeBtn swapModeBtnOpen");
      setSwapWandClass("swapBtn__wand swapBtn__wandNone");
      setClassRegistrationOpen("registrationSection");
    } else if (swapBtnClass == "swapModeBtn swapModeBtnOpen") {
      setClassRegistrationOpen("registrationSection registrationSectionClose");
      setSwapBtnClass("swapModeBtn swapModeBtnClose");
      setSwapWandClass("swapBtn__wand swapBtn__wandNoneClose");
    } else if (swapBtnClass == "swapModeBtn swapModeBtnClose") {
      setClassRegistrationOpen("registrationSection");
      setSwapBtnClass("swapModeBtn swapModeBtnOpen");
      setSwapWandClass("swapBtn__wand swapBtn__wandNone");
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    className: swapBtnClass,
    onClick: swapClass
  }, /*#__PURE__*/React.createElement("div", {
    className: swapWandClass
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(swapWandClass, " swapBtn__wandSecond")
  }));
};
var _default = exports.default = SwapModeButton;