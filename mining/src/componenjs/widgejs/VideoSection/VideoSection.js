"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./videoSection.css");
var _Resource = _interopRequireDefault(require("../../../types/Resource"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var VideoSection = function VideoSection() {
  return /*#__PURE__*/React.createElement("article", {
    className: "videoSection"
  }, /*#__PURE__*/React.createElement("section", {
    className: "videoSection__TextBlock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "videoSection__container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "videoSection__Title"
  }, "Mining Test"), /*#__PURE__*/React.createElement("p", {
    className: "videoSection__description"
  }, "\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0442\u0435\u0441\u0442\u044B \u043F\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E"))), /*#__PURE__*/React.createElement("video", {
    muted: true,
    preload: "auto",
    autoPlay: true,
    loop: true,
    className: "videoSection__background"
  }, /*#__PURE__*/React.createElement("source", {
    type: "video/mp4",
    src: _Resource.default.videoMainPage
  })));
};
var _default = exports.default = VideoSection;