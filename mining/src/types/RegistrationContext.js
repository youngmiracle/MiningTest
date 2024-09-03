"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useContextRegistration = exports.RegistrationContext = void 0;
var _react = require("react");
var RegistrationContext = exports.RegistrationContext = /*#__PURE__*/(0, _react.createContext)({
  classRegistrationOpen: ""
});
var useContextRegistration = exports.useContextRegistration = function useContextRegistration() {
  return (0, _react.useContext)(RegistrationContext);
};