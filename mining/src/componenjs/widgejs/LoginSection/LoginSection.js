"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ButtonLink = _interopRequireDefault(require("../../shared/ButtonLink/ButtonLink"));
require("./loginSection.css");
var _reactRouterDom = require("react-router-dom");
var _AuthenticationContext = require("../../../types/AuthenticationContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var LoginSection = function LoginSection() {
  var _useContextAuthentica = (0, _AuthenticationContext.useContextAuthentication)(),
    setClassAuthentication = _useContextAuthentica.setClassAuthentication;
  return /*#__PURE__*/React.createElement("section", {
    className: "loginSection"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "loginSection__title"
  }, "\u0412\u043E\u0439\u0442\u0438"), /*#__PURE__*/React.createElement("form", {
    className: "authenticationForm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "authenticationForm__atribute"
  }, /*#__PURE__*/React.createElement("label", {
    className: "authenticationForm__label"
  }, "\u041D\u0438\u043A\u043D\u0435\u0439\u043C"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "#freeDurov",
    className: "authenticationForm__input"
  })), /*#__PURE__*/React.createElement("div", {
    className: "authenticationForm__atribute"
  }, /*#__PURE__*/React.createElement("label", {
    className: "authenticationForm__label"
  }, "\u041F\u0430\u0440\u043E\u043B\u044C"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "#freeDurov",
    className: "authenticationForm__input"
  }))), /*#__PURE__*/React.createElement(_ButtonLink.default, {
    style: {
      height: "15%",
      margin: "0 auto",
      backgroundColor: "rgb(55, 55, 55)"
    },
    className: "levelLink",
    onClick: function onClick() {
      return setClassAuthentication("AuthenticationSectionBackgroundClose");
    },
    text: "\u0412\u043E\u0439\u0442\u0438"
  }));
};
var _default = exports.default = LoginSection;