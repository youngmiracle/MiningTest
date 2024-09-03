"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./authenticationSection.css");
var _reactRouterDom = require("react-router-dom");
var _AuthenticationContext = require("../../../types/AuthenticationContext");
var _LoginSection = _interopRequireDefault(require("../../widgets/LoginSection/LoginSection"));
var _SwapModeButton = _interopRequireDefault(require("../../widgets/SwapModeButton/SwapModeButton"));
var _RegistrationSection = _interopRequireDefault(require("../../widgets/RegistrationSection/RegistrationSection"));
var _reactRedux = require("react-redux");
var _react = require("react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var AuthenticationSection = function AuthenticationSection(_ref) {
  var className = _ref.className;
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    classRegistrationOpen = _useState2[0],
    setClassRegistrationOpen = _useState2[1];
  var _useContextAuthentica = (0, _AuthenticationContext.useContextAuthentication)(),
    setClassAuthentication = _useContextAuthentica.setClassAuthentication;
  return /*#__PURE__*/React.createElement(_AuthenticationContext.AuthenticationContext.Provider, {
    value: {
      classRegistrationOpen: classRegistrationOpen,
      setClassRegistrationOpen: setClassRegistrationOpen
    }
  }, /*#__PURE__*/React.createElement("article", {
    className: className
  }, /*#__PURE__*/React.createElement("section", {
    className: "AuthenticationSection"
  }, /*#__PURE__*/React.createElement(_LoginSection.default, null), /*#__PURE__*/React.createElement(_SwapModeButton.default, null), /*#__PURE__*/React.createElement(_RegistrationSection.default, {
    className: classRegistrationOpen
  })), /*#__PURE__*/React.createElement("div", {
    className: "AuthenticationSection__btnBack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btnBack__wand"
  }), /*#__PURE__*/React.createElement("div", {
    className: "btnBack__wand btnBack__wandSecond"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btnBack__btn",
    onClick: function onClick() {
      return setClassAuthentication("AuthenticationSectionBackgroundClose");
    }
  }))));
};
var _default = exports.default = AuthenticationSection;