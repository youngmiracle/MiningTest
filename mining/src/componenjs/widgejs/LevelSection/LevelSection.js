"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./levelSection.css");
var _Resource = _interopRequireDefault(require("../../../types/Resource"));
var _reactRouterDom = require("react-router-dom");
var _LevelExampleLanguage = require("../../../types/LevelExampleLanguage");
var _BandSection = _interopRequireDefault(require("../../shared/BandSection/BandSection"));
var _LevelExampleBlock = _interopRequireDefault(require("../../shared/LevelExampleBlock/LevelExampleBlock"));
var _LevelExampleResult = _interopRequireDefault(require("../../shared/LevelExampleResult/LevelExampleResult"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var LevelSection = function LevelSection() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, _LevelExampleLanguage.LevelExampleLanguage.map(function (props) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_BandSection.default, {
      text: props.name
    }), /*#__PURE__*/React.createElement("article", {
      key: props.id,
      className: props.className
    }, /*#__PURE__*/React.createElement("section", {
      className: "LevelSection__levelList"
    }, /*#__PURE__*/React.createElement(_LevelExampleBlock.default, {
      lvl: "1 \u0443\u0440\u043E\u0432\u0435\u043D\u044C",
      to: props.linkLvlFirst
    }), /*#__PURE__*/React.createElement(_LevelExampleBlock.default, {
      lvl: "2 \u0443\u0440\u043E\u0432\u0435\u043D\u044C",
      to: props.linkLvlSecond
    }), /*#__PURE__*/React.createElement(_LevelExampleBlock.default, {
      lvl: "3 \u0443\u0440\u043E\u0432\u0435\u043D\u044C",
      to: props.linkLvlThird
    })), /*#__PURE__*/React.createElement("section", {
      className: "LevelSection__informationContent"
    }, /*#__PURE__*/React.createElement("aside", {
      className: "LevelSection__aboutLangSection"
    }, /*#__PURE__*/React.createElement("img", {
      src: props.languageIcon,
      alt: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F",
      className: "aboutLangSection__logo"
    }), /*#__PURE__*/React.createElement("h3", {
      className: "aboutLangSection__title"
    }, props.name, " \u0447\u0442\u043E \u044D\u0442\u043E?"), /*#__PURE__*/React.createElement("p", {
      className: "aboutLangSection__description"
    }, props.description), /*#__PURE__*/React.createElement("a", {
      href: props.linkBrowser,
      className: "aboutLangSection__href"
    }, "\u0427\u0438\u0442\u0430\u0442\u044C \u043E ", props.name)), /*#__PURE__*/React.createElement("aside", {
      className: "LevelSection__lvlStatisticsBlock"
    }, /*#__PURE__*/React.createElement("section", {
      className: "lvlStatisticsBlock__personalData"
    }, /*#__PURE__*/React.createElement("img", {
      src: _Resource.default.avatar,
      alt: "avatar",
      className: "lvlStatisticsBlock__avatar"
    }), /*#__PURE__*/React.createElement("p", {
      className: "lvlStatisticsBlock__name"
    }, "Qasdasdasdwerty")), /*#__PURE__*/React.createElement("section", {
      className: "lvlStatisticsBlock__statisticsSection"
    }, /*#__PURE__*/React.createElement(_LevelExampleResult.default, {
      textLvl: "1 \u0443\u0440\u043E\u0432\u0435\u043D\u044C",
      resultProcent: "50%"
    }), /*#__PURE__*/React.createElement(_LevelExampleResult.default, {
      textLvl: "2 \u0443\u0440\u043E\u0432\u0435\u043D\u044C",
      resultProcent: "70%"
    }), /*#__PURE__*/React.createElement(_LevelExampleResult.default, {
      textLvl: "3 \u0443\u0440\u043E\u0432\u0435\u043D\u044C",
      resultProcent: "20%"
    })))), /*#__PURE__*/React.createElement("img", {
      src: props.imgPhon,
      alt: "\u0424\u043E\u043D",
      className: props.classNameBackground
    })));
  }));
};
var _default = exports.default = LevelSection;