"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./infoSection.css");
var _Resource = _interopRequireDefault(require("../../../types/Resource"));
var _ExampleLangBlock = _interopRequireDefault(require("../ExampleLangBlock/ExampleLangBlock"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var InfoSection = function InfoSection() {
  return /*#__PURE__*/React.createElement("article", {
    className: "InformationAboutSite"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "InformationAboutSiteAside"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "InformationAboutSiteAside__title"
  }, "\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0442\u0435\u0441\u0442\u044B \u043F\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E"), /*#__PURE__*/React.createElement("p", {
    className: "InformationAboutSiteAside__text"
  }, "\u041F\u0440\u043E\u0439\u0434\u044F \u0442\u0435\u0441\u0442\u044B \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 Mining Test, \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u044B\u044F\u0432\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0437\u043D\u0430\u043D\u0438\u0439, \u0443\u043C\u0435\u043D\u0438\u0439, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432\u0430\u0448\u0438\u0445 \u043D\u0430\u0432\u044B\u043A\u043E\u0432 \u0432 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438. \u041D\u0430 \u044D\u0442\u043E\u043C \u0441\u0430\u0439\u0442\u0435, \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u043E\u0439\u0442\u0438 \u0442\u0435\u0441\u0442\u044B \u043F\u043E \u0442\u0430\u043A\u0438\u043C \u044F\u0437\u044B\u043A\u0430\u043C, \u043A\u0430\u043A:"), /*#__PURE__*/React.createElement("ul", {
    className: "InformationAboutSiteAside__langList"
  }, /*#__PURE__*/React.createElement("li", null, "C#"), /*#__PURE__*/React.createElement("li", null, "SQL"))), /*#__PURE__*/React.createElement("nav", {
    className: "InformationAboutSiteNav"
  }, /*#__PURE__*/React.createElement("img", {
    src: _Resource.default.infNavImg,
    alt: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0441 \u043A\u043E\u0434\u043E\u043C",
    className: "InformationAboutSiteNav__imageNav"
  }), /*#__PURE__*/React.createElement(_ExampleLangBlock.default, {
    imageSrc: _Resource.default.cSharpWhite
  }), /*#__PURE__*/React.createElement(_ExampleLangBlock.default, {
    imageSrc: _Resource.default.sqlWhite
  })), /*#__PURE__*/React.createElement("img", {
    src: _Resource.default.numberCodeImg,
    alt: " \u0424\u043E\u043D \u0434\u043B\u044F \u0431\u043B\u043E\u043A\u0430 \u0441 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439",
    className: "InformationAboutSiteNav__phon"
  }));
};
var _default = exports.default = InfoSection;