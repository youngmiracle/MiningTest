"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./mainPage.css");
var _Resource = _interopRequireDefault(require("../../../types/Resource"));
var _VideoSection = _interopRequireDefault(require("../../widgets/VideoSection/VideoSection"));
var _InfoSection = _interopRequireDefault(require("../../widgets/InfoSection/InfoSection"));
var _LevelSection = _interopRequireDefault(require("../../widgets/LevelSection/LevelSection"));
var _BandSection = _interopRequireDefault(require("../../shared/BandSection/BandSection"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var MainPage = function MainPage() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(_VideoSection.default, null), /*#__PURE__*/React.createElement(_BandSection.default, {
    text: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0441\u0430\u0439\u0442\u0435"
  }), /*#__PURE__*/React.createElement(_InfoSection.default, null), /*#__PURE__*/React.createElement(_LevelSection.default, null));
};
var _default = exports.default = MainPage;