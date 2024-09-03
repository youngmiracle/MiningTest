"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useContextRegistration = exports.useContextAuthentication = exports.RegistrationContext = exports.AuthenticationContext = void 0;
var _react = require("react");
var AuthenticationContext = exports.AuthenticationContext = /*#__PURE__*/(0, _react.createContext)({
  classAuthentication: ""
});
var useContextAuthentication = exports.useContextAuthentication = function useContextAuthentication() {
  return (0, _react.useContext)(AuthenticationContext);
};
var RegistrationContext = exports.RegistrationContext = /*#__PURE__*/(0, _react.createContext)({
  classRegistrationOpen: ""
});
var useContextRegistration = exports.useContextRegistration = function useContextRegistration() {
  return (0, _react.useContext)(RegistrationContext);
};