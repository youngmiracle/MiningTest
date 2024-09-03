"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ButtonLink = _interopRequireDefault(require("../../shared/ButtonLink/ButtonLink"));
require("./registrationSection.css");
var _reactRouterDom = require("react-router-dom");
var _AuthenticationContext = require("../../../types/AuthenticationContext");
var _SwapModeButton = _interopRequireDefault(require("../SwapModeButton/SwapModeButton"));
var _SwapBtnContext = require("../../../types/SwapBtnContext");
var _reactRedux = require("react-redux");
var _RegistrationContext = require("../../../types/RegistrationContext");
var _react = require("react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var RegistrationSection = function RegistrationSection(_ref) {
  var className = _ref.className;
  var _useContextAuthentica = (0, _AuthenticationContext.useContextAuthentication)(),
    setClassAuthentication = _useContextAuthentica.setClassAuthentication;
  return /*#__PURE__*/React.createElement("section", {
    className: "loginSection regZIndex ".concat(className)
  }, /*#__PURE__*/React.createElement("h2", {
    className: "loginSection__title registrationSection__title"
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"), /*#__PURE__*/React.createElement("form", {
    className: "authenticationForm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "authenticationForm__atribute"
  }, /*#__PURE__*/React.createElement("label", {
    className: "authenticationForm__label authenticationForm__labelRegistration"
  }, "\u041D\u0438\u043A\u043D\u0435\u0439\u043C"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "#freeDurov",
    className: "authenticationForm__input authenticationForm__inputReg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "authenticationForm__atribute"
  }, /*#__PURE__*/React.createElement("label", {
    className: "authenticationForm__label authenticationForm__labelRegistration"
  }, "\u041F\u0430\u0440\u043E\u043B\u044C"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "#freeDurov",
    className: "authenticationForm__input authenticationForm__inputReg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "authenticationForm__atribute"
  }, /*#__PURE__*/React.createElement("label", {
    className: "authenticationForm__label authenticationForm__labelRegistration"
  }, "\u041F\u043E\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "#freeDurov",
    className: "authenticationForm__input authenticationForm__inputReg"
  }))), /*#__PURE__*/React.createElement(_ButtonLink.default, {
    style: {
      height: "15%",
      margin: "0 auto",
      backgroundColor: "rgb(210, 210, 210)",
      color: "rgb(70, 70, 70)"
    },
    className: "levelLink",
    onClick: function onClick() {
      return setClassAuthentication("AuthenticationSectionBackgroundClose");
    },
    text: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
  }));
};
var _default = exports.default = RegistrationSection;