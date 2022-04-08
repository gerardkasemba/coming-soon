module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_next/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../common/LanguageSwitcher/SwitcherButton/SwitcherButton.style.js":
/*!*************************************************************************!*\
  !*** ../common/LanguageSwitcher/SwitcherButton/SwitcherButton.style.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Animation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:translateY(5px) scale(.8);}to{transform:translateY(0px) scale(1);}"]);
const EnvatoButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SwitcherButtonstyle__EnvatoButtonWrapper",
  componentId: "sc-17vwdjb-0"
})(["position:fixed;bottom:33px;right:20px;width:65px;height:65px;border-radius:50%;overflow:hidden;z-index:9;background:rgb(47,128,237);display:flex;justify-content:center;align-items:center;cursor:pointer;&.stopAnimation{animation:0;img{width:22px;}}@media (min-width:768px){animation:0.7s ", " infinite ease-in-out;animation-direction:alternate;}@media (max-width:767px){bottom:15px;right:10px;width:40px;height:40px;}img{width:100%;height:auto;display:block;height:30px;width:40px;margin-bottom:0;cursor:pointer;@media (max-width:767px){height:20px;width:25px;}.envato-buy-button{width:100%;border-radius:0;}}"], Animation);
/* harmony default export */ __webpack_exports__["default"] = (EnvatoButtonWrapper);

/***/ }),

/***/ "../common/LanguageSwitcher/SwitcherButton/cross-btn.svg":
/*!***************************************************************!*\
  !*** ../common/LanguageSwitcher/SwitcherButton/cross-btn.svg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyMTIuOTgyIDIxMi45ODIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIxMi45ODIgMjEyLjk4MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgY2xhc3M9IiI+PGc+PGcgaWQ9IkNsb3NlIj4NCgk8cGF0aCBkPSJNMTMxLjgwNCwxMDYuNDkxbDc1LjkzNi03NS45MzZjNi45OS02Ljk5LDYuOTktMTguMzIzLDAtMjUuMzEyICAgYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyLDBsLTc1LjkzNyw3NS45MzdMMzAuNTU0LDUuMjQyYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyLDBjLTYuOTg5LDYuOTktNi45ODksMTguMzIzLDAsMjUuMzEyICAgbDc1LjkzNyw3NS45MzZMNS4yNDIsMTgyLjQyN2MtNi45ODksNi45OS02Ljk4OSwxOC4zMjMsMCwyNS4zMTJjNi45OSw2Ljk5LDE4LjMyMiw2Ljk5LDI1LjMxMiwwbDc1LjkzNy03NS45MzdsNzUuOTM3LDc1LjkzNyAgIGM2Ljk4OSw2Ljk5LDE4LjMyMiw2Ljk5LDI1LjMxMiwwYzYuOTktNi45OSw2Ljk5LTE4LjMyMiwwLTI1LjMxMkwxMzEuODA0LDEwNi40OTF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIi8+DQo8L2c+PC9nPiA8L3N2Zz4NCg=="

/***/ }),

/***/ "../common/LanguageSwitcher/SwitcherButton/language-btn.svg":
/*!******************************************************************!*\
  !*** ../common/LanguageSwitcher/SwitcherButton/language-btn.svg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgY2xhc3M9IiI+PGc+PGc+DQoJPGc+DQoJCTxwb2x5Z29uIHBvaW50cz0iMTM4LjcxLDEzNyAxMzIuMjksMTM3IDEyMC4yOTMsMTk3IDE1MC43MDcsMTk3ICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIi8+DQoJPC9nPg0KPC9nPjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzgxLjM3NCwyNTdjNi40NzcsMTcuMzk5LDE1LjA5MiwzMS40ODMsMjQuNjI2LDQzLjQ2N2M5LjUzNC0xMS45ODQsMTkuMTQ5LTI2LjA2OSwyNS42MjYtNDMuNDY3SDM4MS4zNzR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIi8+DQoJPC9nPg0KPC9nPjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDY3LDkxSDI4MC43MTdsMzguODQyLDMxMS42NzljMC42ODcsMTIuNzQ4LTIuNzk4LDI0Ljc1LTExLjExOCwzNC4xNDZMMjQyLjY2Myw1MTJINDY3YzI0LjgxNCwwLDQ1LTIwLjE4Niw0NS00NVYxMzcgICAgQzUxMiwxMTIuMTg2LDQ5MS44MTQsOTEsNDY3LDkxeiBNNDY3LDI1N2gtNC4wMDZjLTguNTM1LDI3LjM4My0yMi4wNyw0OC44MS0zNi4xMzYsNjUuNzAyICAgIGMxMS4wMTksMTAuMDc0LDIyLjgwMiwxOC4zMzgsMzQuNTE3LDI3LjU5NGM2LjQ2LDUuMTcxLDcuNTE1LDE0LjYwNCwyLjMyOSwyMS4wNzljLTUuMTYyLDYuNDY1LTE0LjYzMiw3LjUxMy0yMS4wNzksMi4zMjkgICAgYy0xMi43MjktMTAuMDQ3LTI0LjY3Ny0xOC40NTctMzYuNjI1LTI5LjQyMWMtMTEuOTQ4LDEwLjk2NC0yMi44OTYsMTkuMzc0LTM1LjYyNSwyOS40MjFjLTYuNDQ3LDUuMTg0LTE1LjkxNyw0LjEzNi0yMS4wNzktMi4zMjkgICAgYy01LjE4Ni02LjQ3NS00LjEzMS0xNS45MDgsMi4zMjktMjEuMDc5YzExLjcxNS05LjI1NiwyMi40OTgtMTcuNTIsMzMuNTE3LTI3LjU5NGMtMTQuMDY2LTE2Ljg5MS0yNi42MDItMzguMzE4LTM1LjEzNi02NS43MDIgICAgSDM0NmMtOC4yOTEsMC0xNS02LjcwOS0xNS0xNXM2LjcwOS0xNSwxNS0xNWg0NXYtMTVjMC04LjI5MSw2LjcwOS0xNSwxNS0xNWM4LjI5MSwwLDE1LDYuNzA5LDE1LDE1djE1aDQ2YzguMjkxLDAsMTUsNi43MDksMTUsMTUgICAgUzQ3NS4yOTEsMjU3LDQ2NywyNTd6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIi8+DQoJPC9nPg0KPC9nPjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjQ0LjE2NCwzOS40MTlDMjQxLjM2NiwxNi45NDgsMjIyLjE2MiwwLDE5OS41MTYsMEg0NUMyMC4xODYsMCwwLDIwLjE4NiwwLDQ1djMzMmMwLDI0LjgxNCwyMC4xODYsNDUsNDUsNDUgICAgYzg5LjY3LDAsMTU0LjE3NywwLDIzNi41NTEsMGM0LjM3Ni01LjAwMiw4LjA0NC04LjEzNCw4LjE5OS0xNC42NjNDMjg5Ljc4OCw0MDUuNywyNDQuMzY3LDQxLjA0MywyNDQuMTY0LDM5LjQxOXogICAgIE0xODMuOTQ0LDI4Ni43MDdjLTcuOTU0LDEuNjM3LTE2LjAxMS0zLjUyNy0xNy42NTEtMTEuNzYzTDE1Ni43MDYsMjI3aC00Mi40MTFsLTkuNTg3LDQ3Ljk0NCAgICBjLTEuNjExLDguMTE1LTkuNDM0LDEzLjQ0Ny0xNy42NTEsMTEuNzYzYy04LjExNS0xLjYyNi0xMy4zODktOS41MjEtMTEuNzYzLTE3LjY1MWwyOS45OTktMTUwICAgIEMxMDYuNjk5LDExMi4wNTQsMTEyLjg1MiwxMDcsMTIwLDEwN2gzMWM3LjE0OCwwLDEzLjMwMSw1LjA1NCwxNC43MDcsMTIuMDU2bDMwLDE1MCAgICBDMTk3LjMzMywyNzcuMTg2LDE5Mi4wNiwyODUuMDgxLDE4My45NDQsMjg2LjcwN3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiLz4NCgk8L2c+DQo8L2c+PGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xNzUuMjYxLDQ1MmwyLjU3NCwyMC41ODFjMS43MTYsMTMuNzgzLDEwLjg3NCwyNy44MzgsMjUuOTM4LDM0Ljg1NmMyOC40MjgtMzEuMjk0LDExLjIyOS0xMi4zNjIsNTAuMzU5LTU1LjQzN0gxNzUuMjYxeiAgICAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiLz4NCgk8L2c+DQo8L2c+PC9nPiA8L3N2Zz4NCg=="

/***/ }),

/***/ "../common/LanguageSwitcher/config.js":
/*!********************************************!*\
  !*** ../common/LanguageSwitcher/config.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flag_us_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flag/us.svg */ "../common/LanguageSwitcher/flag/us.svg");
/* harmony import */ var _flag_us_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_flag_us_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _flag_germany_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flag/germany.svg */ "../common/LanguageSwitcher/flag/germany.svg");
/* harmony import */ var _flag_germany_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_flag_germany_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flag_spain_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flag/spain.svg */ "../common/LanguageSwitcher/flag/spain.svg");
/* harmony import */ var _flag_spain_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_flag_spain_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _flag_saudi_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flag/saudi.png */ "../common/LanguageSwitcher/flag/saudi.png");
/* harmony import */ var _flag_saudi_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_flag_saudi_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _flag_china_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flag/china.svg */ "../common/LanguageSwitcher/flag/china.svg");
/* harmony import */ var _flag_china_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_flag_china_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _flag_israel_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flag/israel.svg */ "../common/LanguageSwitcher/flag/israel.svg");
/* harmony import */ var _flag_israel_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_flag_israel_svg__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 'en',
  language: 'en',
  icon: _flag_us_svg__WEBPACK_IMPORTED_MODULE_0___default.a
}, {
  id: 'de',
  language: 'de',
  icon: _flag_germany_svg__WEBPACK_IMPORTED_MODULE_1___default.a
}, {
  id: 'es',
  language: 'es',
  icon: _flag_spain_svg__WEBPACK_IMPORTED_MODULE_2___default.a
}, {
  id: 'ar',
  language: 'ar',
  icon: _flag_saudi_png__WEBPACK_IMPORTED_MODULE_3___default.a
}, {
  id: 'zh',
  language: 'zh',
  icon: _flag_china_svg__WEBPACK_IMPORTED_MODULE_4___default.a
}, {
  id: 'he',
  language: 'he',
  icon: _flag_israel_svg__WEBPACK_IMPORTED_MODULE_5___default.a
}]);

/***/ }),

/***/ "../common/LanguageSwitcher/context/language.context.js":
/*!**************************************************************!*\
  !*** ../common/LanguageSwitcher/context/language.context.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LanguageContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
/* harmony default export */ __webpack_exports__["default"] = (LanguageContext);

/***/ }),

/***/ "../common/LanguageSwitcher/context/language.provider.js":
/*!***************************************************************!*\
  !*** ../common/LanguageSwitcher/context/language.provider.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _language_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language.context */ "../common/LanguageSwitcher/context/language.context.js");
/* harmony import */ var _language_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language.reducer */ "../common/LanguageSwitcher/context/language.reducer.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rtl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rtl */ "../common/LanguageSwitcher/rtl.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Owner\\Desktop\\deadline\\coming\\common\\LanguageSwitcher\\context\\language.provider.js";







__webpack_require__(/*! @formatjs/intl-pluralrules/polyfill */ "@formatjs/intl-pluralrules/polyfill");

__webpack_require__(/*! @formatjs/intl-pluralrules/locale-data/ar */ "@formatjs/intl-pluralrules/locale-data/ar");

__webpack_require__(/*! @formatjs/intl-pluralrules/locale-data/en */ "@formatjs/intl-pluralrules/locale-data/en");

__webpack_require__(/*! @formatjs/intl-pluralrules/locale-data/de */ "@formatjs/intl-pluralrules/locale-data/de");

__webpack_require__(/*! @formatjs/intl-pluralrules/locale-data/es */ "@formatjs/intl-pluralrules/locale-data/es");

__webpack_require__(/*! @formatjs/intl-pluralrules/locale-data/zh */ "@formatjs/intl-pluralrules/locale-data/zh");

__webpack_require__(/*! @formatjs/intl-pluralrules/locale-data/he */ "@formatjs/intl-pluralrules/locale-data/he");

const LanguageProvider = ({
  children,
  messages
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_language_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], _language_reducer__WEBPACK_IMPORTED_MODULE_2__["initialState"]);

  const toggleLanguage = lang => {
    dispatch({
      type: 'CURRENT_LANGUAGE',
      payload: lang
    });
    localStorage.setItem('lang', lang);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const localLang = localStorage.getItem('lang');

    if (localLang) {
      toggleLanguage(localLang);
    } else {
      toggleLanguage(navigator.language.split('-')[0]);
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_language_context__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      state,
      toggleLanguage,
      dispatch
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_3__["IntlProvider"], {
      locale: state.lang,
      messages: messages[state.lang],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_rtl__WEBPACK_IMPORTED_MODULE_4__["InjectRTL"], {
        lang: state.lang,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LanguageProvider);

/***/ }),

/***/ "../common/LanguageSwitcher/context/language.reducer.js":
/*!**************************************************************!*\
  !*** ../common/LanguageSwitcher/context/language.reducer.js ***!
  \**************************************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return languageReducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  lang: 'en'
};
function languageReducer(state, action) {
  switch (action.type) {
    case 'CURRENT_LANGUAGE':
      return _objectSpread(_objectSpread({}, state), {}, {
        lang: action.payload
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../common/LanguageSwitcher/flag/china.svg":
/*!*************************************************!*\
  !*** ../common/LanguageSwitcher/flag/china.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii00OSAxNDEgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtNDkgMTQxIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNEODAwMjc7fQ0KCS5zdDF7ZmlsbDojRkZEQTQ0O30NCjwvc3R5bGU+DQo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyMDciIGN5PSIzOTciIHI9IjI1NiIvPg0KPGc+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSI5MS4xLDI5Ni44IDExMy4yLDM2NC44IDE4NC43LDM2NC44IDEyNi45LDQwNi45IDE0OSw0NzQuOSA5MS4xLDQzMi45IDMzLjIsNDc0LjkgNTUuNCw0MDYuOSANCgkJLTIuNSwzNjQuOCA2OSwzNjQuOCAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNTQuNSw1MzcuNSAyMzcuNiw1MTYuNyAyMTIuNiw1MjYuNCAyMjcuMSw1MDMuOSAyMTAuMiw0ODMgMjM2LjEsNDg5LjkgMjUwLjcsNDY3LjQgMjUyLjEsNDk0LjIgDQoJCTI3OC4xLDUwMS4xIDI1Myw1MTAuNyAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyODguMSw0NzYuNSAyOTYuMSw0NTAuOSAyNzQuMiw0MzUuNCAzMDEsNDM1IDMwOC45LDQwOS40IDMxNy42LDQzNC44IDM0NC40LDQzNC41IDMyMi45LDQ1MC41IA0KCQkzMzEuNSw0NzUuOSAzMDkuNiw0NjAuNCAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIzMzMuNCwzMjguOSAzMjEuNiwzNTMgMzQwLjgsMzcxLjcgMzE0LjMsMzY3LjkgMzAyLjUsMzkxLjkgMjk3LjksMzY1LjUgMjcxLjMsMzYxLjcgMjk1LjEsMzQ5LjIgDQoJCTI5MC41LDMyMi43IDMwOS43LDM0MS40IAkiLz4NCgk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI1NS4yLDI1NS45IDI1My4yLDI4Mi42IDI3OC4xLDI5Mi43IDI1MiwyOTkuMSAyNTAuMSwzMjUuOSAyMzYsMzAzLjEgMjA5LjksMzA5LjUgMjI3LjIsMjg5IA0KCQkyMTMsMjY2LjMgMjM3LjksMjc2LjQgCSIvPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "../common/LanguageSwitcher/flag/germany.svg":
/*!***************************************************!*\
  !*** ../common/LanguageSwitcher/flag/germany.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkRBNDQ7IiBkPSJNMTUuOTIzLDM0NS4wNDNDNTIuMDk0LDQ0Mi41MjcsMTQ1LjkyOSw1MTIsMjU2LDUxMnMyMDMuOTA2LTY5LjQ3MywyNDAuMDc3LTE2Ni45NTdMMjU2LDMyMi43ODMNCglMMTUuOTIzLDM0NS4wNDN6Ii8+DQo8cGF0aCBkPSJNMjU2LDBDMTQ1LjkyOSwwLDUyLjA5NCw2OS40NzIsMTUuOTIzLDE2Ni45NTdMMjU2LDE4OS4yMTdsMjQwLjA3Ny0yMi4yNjFDNDU5LjkwNiw2OS40NzIsMzY2LjA3MSwwLDI1NiwweiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik0xNS45MjMsMTY2Ljk1N0M1LjYzMywxOTQuNjksMCwyMjQuNjg2LDAsMjU2czUuNjMzLDYxLjMxLDE1LjkyMyw4OS4wNDNoNDgwLjE1NQ0KCUM1MDYuMzY4LDMxNy4zMSw1MTIsMjg3LjMxNCw1MTIsMjU2cy01LjYzMi02MS4zMS0xNS45MjMtODkuMDQzSDE1LjkyM3oiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "../common/LanguageSwitcher/flag/israel.svg":
/*!**************************************************!*\
  !*** ../common/LanguageSwitcher/flag/israel.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YwRjBGMDsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAwNTJCNDsiIGQ9Ik0zNTIuMzkzLDIwMC4zNDhIMjg4LjEzTDI1NiwxNDQuNjk2bC0zMi4xMjksNTUuNjUyaC02NC4yNjRMMTkxLjc0MSwyNTZsLTMyLjEzNCw1NS42NTJoNjQuMjY0DQoJCUwyNTYsMzY3LjMwNGwzMi4xMy01NS42NTJoNjQuMjYzTDMyMC4yNTksMjU2TDM1Mi4zOTMsMjAwLjM0OHogTTI5NS40NzUsMjU2bC0xOS43MzYsMzQuMTg4aC0zOS40NzVMMjE2LjUyNSwyNTZsMTkuNzM4LTM0LjE4OA0KCQloMzkuNDc1TDI5NS40NzUsMjU2eiBNMjU2LDE4Ny42MjNsNy4zNDYsMTIuNzI0aC0xNC42OUwyNTYsMTg3LjYyM3ogTTE5Ni43ODYsMjIxLjgxMmgxNC42OTJsLTcuMzQ2LDEyLjcyNEwxOTYuNzg2LDIyMS44MTJ6DQoJCSBNMTk2Ljc4NiwyOTAuMTg4bDcuMzQ3LTEyLjcyNGw3LjM0NiwxMi43MjRIMTk2Ljc4NnogTTI1NiwzMjQuMzc2bC03LjM0NS0xMi43MjRoMTQuNjkxTDI1NiwzMjQuMzc2eiBNMzE1LjIxNCwyOTAuMTg4aC0xNC42OTINCgkJbDcuMzQ3LTEyLjcyNEwzMTUuMjE0LDI5MC4xODh6IE0zMDAuNTIyLDIyMS44MTJoMTQuNjkybC03LjM0NiwxMi43MjRMMzAwLjUyMiwyMjEuODEyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMDUyQjQ7IiBkPSJNNDE1LjM1Nyw1NS42NTJIOTYuNjQzYy0yMy4zNjMsMTguNjA4LTQzLjM5OSw0MS4yMS01OS4wNjksNjYuNzgzaDQzNi44NTINCgkJQzQ1OC43NTUsOTYuODYzLDQzOC43MTksNzQuMjYsNDE1LjM1Nyw1NS42NTJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAwNTJCNDsiIGQ9Ik05Ni42NDMsNDU2LjM0OGgzMTguNzEzYzIzLjM2My0xOC42MDgsNDMuMzk5LTQxLjIxLDU5LjA2OS02Ni43ODNIMzcuNTc0DQoJCUM1My4yNDUsNDE1LjEzNyw3My4yODEsNDM3Ljc0LDk2LjY0Myw0NTYuMzQ4eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "../common/LanguageSwitcher/flag/saudi.png":
/*!*************************************************!*\
  !*** ../common/LanguageSwitcher/flag/saudi.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/saudi-b17aa51354e4033d690a22528b5dae70.png";

/***/ }),

/***/ "../common/LanguageSwitcher/flag/spain.svg":
/*!*************************************************!*\
  !*** ../common/LanguageSwitcher/flag/spain.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkRBNDQ7IiBkPSJNMCwyNTZjMCwzMS4zMTQsNS42MzMsNjEuMzEsMTUuOTIzLDg5LjA0M0wyNTYsMzY3LjMwNGwyNDAuMDc3LTIyLjI2MQ0KCUM1MDYuMzY3LDMxNy4zMSw1MTIsMjg3LjMxNCw1MTIsMjU2cy01LjYzMy02MS4zMS0xNS45MjMtODkuMDQzTDI1NiwxNDQuNjk2TDE1LjkyMywxNjYuOTU3QzUuNjMzLDE5NC42OSwwLDIyNC42ODYsMCwyNTZ6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRDgwMDI3OyIgZD0iTTQ5Ni4wNzcsMTY2Ljk1N0M0NTkuOTA2LDY5LjQ3MywzNjYuMDcxLDAsMjU2LDBTNTIuMDk0LDY5LjQ3MywxNS45MjMsMTY2Ljk1N0g0OTYuMDc3eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMTUuOTIzLDM0NS4wNDNDNTIuMDk0LDQ0Mi41MjcsMTQ1LjkyOSw1MTIsMjU2LDUxMnMyMDMuOTA2LTY5LjQ3MywyNDAuMDc3LTE2Ni45NTdIMTUuOTIzeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "../common/LanguageSwitcher/flag/us.svg":
/*!**********************************************!*\
  !*** ../common/LanguageSwitcher/flag/us.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YwRjBGMDsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik0yNDQuODcsMjU2SDUxMmMwLTIzLjEwNi0zLjA4LTQ1LjQ5LTguODE5LTY2Ljc4M0gyNDQuODdWMjU2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMjQ0Ljg3LDEyMi40MzVoMjI5LjU1NmMtMTUuNjcxLTI1LjU3Mi0zNS43MDgtNDguMTc1LTU5LjA3LTY2Ljc4M0gyNDQuODdWMTIyLjQzNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRDgwMDI3OyIgZD0iTTI1Niw1MTJjNjAuMjQ5LDAsMTE1LjYyNi0yMC44MjQsMTU5LjM1Ni01NS42NTJIOTYuNjQ0QzE0MC4zNzQsNDkxLjE3NiwxOTUuNzUxLDUxMiwyNTYsNTEyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMzcuNTc0LDM4OS41NjVoNDM2Ljg1MmMxMi41ODEtMjAuNTI5LDIyLjMzOC00Mi45NjksMjguNzU1LTY2Ljc4M0g4LjgxOQ0KCQlDMTUuMjM2LDM0Ni41OTYsMjQuOTkzLDM2OS4wMzYsMzcuNTc0LDM4OS41NjV6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojMDA1MkI0OyIgZD0iTTExOC41ODQsMzkuOTc4aDIzLjMyOWwtMjEuNywxNS43NjVsOC4yODksMjUuNTA5bC0yMS42OTktMTUuNzY1TDg1LjEwNCw4MS4yNTJsNy4xNi0yMi4wMzcNCglDNzMuMTU4LDc1LjEzLDU2LjQxMiw5My43NzYsNDIuNjEyLDExNC41NTJoNy40NzVsLTEzLjgxMywxMC4wMzVjLTIuMTUyLDMuNTktNC4yMTYsNy4yMzctNi4xOTQsMTAuOTM4bDYuNTk2LDIwLjMwMWwtMTIuMzA2LTguOTQxDQoJYy0zLjA1OSw2LjQ4MS01Ljg1NywxMy4xMDgtOC4zNzIsMTkuODczbDcuMjY3LDIyLjM2OGgyNi44MjJsLTIxLjcsMTUuNzY1bDguMjg5LDI1LjUwOWwtMjEuNjk5LTE1Ljc2NWwtMTIuOTk4LDkuNDQ0DQoJQzAuNjc4LDIzNC41MzcsMCwyNDUuMTg5LDAsMjU2aDI1NmMwLTE0MS4zODQsMC0xNTguMDUyLDAtMjU2QzIwNS40MjgsMCwxNTguMjg1LDE0LjY3LDExOC41ODQsMzkuOTc4eiBNMTI4LjUwMiwyMzAuNA0KCWwtMjEuNjk5LTE1Ljc2NUw4NS4xMDQsMjMwLjRsOC4yODktMjUuNTA5bC0yMS43LTE1Ljc2NWgyNi44MjJsOC4yODgtMjUuNTA5bDguMjg4LDI1LjUwOWgyNi44MjJsLTIxLjcsMTUuNzY1TDEyOC41MDIsMjMwLjR6DQoJIE0xMjAuMjEzLDEzMC4zMTdsOC4yODksMjUuNTA5bC0yMS42OTktMTUuNzY1bC0yMS42OTksMTUuNzY1bDguMjg5LTI1LjUwOWwtMjEuNy0xNS43NjVoMjYuODIybDguMjg4LTI1LjUwOWw4LjI4OCwyNS41MDloMjYuODIyDQoJTDEyMC4yMTMsMTMwLjMxN3ogTTIyMC4zMjgsMjMwLjRsLTIxLjY5OS0xNS43NjVMMTc2LjkzLDIzMC40bDguMjg5LTI1LjUwOWwtMjEuNy0xNS43NjVoMjYuODIybDguMjg4LTI1LjUwOWw4LjI4OCwyNS41MDloMjYuODIyDQoJbC0yMS43LDE1Ljc2NUwyMjAuMzI4LDIzMC40eiBNMjEyLjAzOSwxMzAuMzE3bDguMjg5LDI1LjUwOWwtMjEuNjk5LTE1Ljc2NWwtMjEuNjk5LDE1Ljc2NWw4LjI4OS0yNS41MDlsLTIxLjctMTUuNzY1aDI2LjgyMg0KCWw4LjI4OC0yNS41MDlsOC4yODgsMjUuNTA5aDI2LjgyMkwyMTIuMDM5LDEzMC4zMTd6IE0yMTIuMDM5LDU1Ljc0M2w4LjI4OSwyNS41MDlsLTIxLjY5OS0xNS43NjVMMTc2LjkzLDgxLjI1Mmw4LjI4OS0yNS41MDkNCglsLTIxLjctMTUuNzY1aDI2LjgyMmw4LjI4OC0yNS41MDlsOC4yODgsMjUuNTA5aDI2LjgyMkwyMTIuMDM5LDU1Ljc0M3oiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "../common/LanguageSwitcher/index.js":
/*!*******************************************!*\
  !*** ../common/LanguageSwitcher/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LanguageSwitcher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SwitcherButton_SwitcherButton_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SwitcherButton/SwitcherButton.style */ "../common/LanguageSwitcher/SwitcherButton/SwitcherButton.style.js");
/* harmony import */ var _context_language_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context/language.context */ "../common/LanguageSwitcher/context/language.context.js");
/* harmony import */ var _SwitcherButton_cross_btn_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SwitcherButton/cross-btn.svg */ "../common/LanguageSwitcher/SwitcherButton/cross-btn.svg");
/* harmony import */ var _SwitcherButton_cross_btn_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SwitcherButton_cross_btn_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SwitcherButton_language_btn_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SwitcherButton/language-btn.svg */ "../common/LanguageSwitcher/SwitcherButton/language-btn.svg");
/* harmony import */ var _SwitcherButton_language_btn_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SwitcherButton_language_btn_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useClickOutside */ "../common/hooks/useClickOutside.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\Owner\\Desktop\\deadline\\coming\\common\\LanguageSwitcher\\index.js";










function LanguageSwitcher({
  languageConfig
}) {
  const {
    state: {
      lang
    },
    toggleLanguage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_language_context__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const container = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: showSwitcher,
    1: setShowSwitcher
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function handleOutsideClick() {
    setShowSwitcher(false);
  }

  Object(_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_8__["default"])(container, handleOutsideClick);
  const handleSwitcher = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setShowSwitcher(showSwitcher => !showSwitcher), []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(Wrapper, {
    ref: container,
    children: [showSwitcher && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
      bottom: true,
      duration: 800,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(SwitcherContainer, {
        className: showSwitcher ? 'active' : '',
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(SwitcherHeader, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "headerText",
            defaultMessage: 'Change Language'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(SwitcherContent, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(SelectLanguage, {
            lang: lang,
            toggleLanguage: toggleLanguage,
            config: languageConfig
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(SwitcherFooter, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "languageText",
            defaultMessage: 'Language'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
            children: ": "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "languageName",
            defaultMessage: 'Country Name'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_SwitcherButton_SwitcherButton_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: handleSwitcher,
      className: showSwitcher ? 'stopAnimation' : '',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
        src: showSwitcher ? _SwitcherButton_cross_btn_svg__WEBPACK_IMPORTED_MODULE_6___default.a : _SwitcherButton_language_btn_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "switcher"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

function SelectLanguage({
  toggleLanguage,
  lang,
  config = []
}) {
  const handleToggleLanguage = e => {
    toggleLanguage(e.target.value);
    console.log(e.target.value, 'switcher');
  };

  return config.map(item => {
    const isSelected = item.id === lang;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(LanguageButton, {
      className: isSelected ? 'active' : '',
      value: item.language,
      onClick: handleToggleLanguage,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
        src: item.icon,
        alt: "flag",
        style: {
          pointerEvents: 'none'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)
    }, item.id, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this);
  });
}

const LanguageButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "LanguageSwitcher__LanguageButton",
  componentId: "sc-w05u9i-0"
})([""]);
const SwitcherContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LanguageSwitcher__SwitcherContainer",
  componentId: "sc-w05u9i-1"
})(["position:absolute;bottom:90px;right:4px;width:370px;height:185px;overflow:hidden;border-radius:15px;box-shadow:0 15px 30px rgba(73,129,206,0.15);background:#fff;@media (max-width:480px){width:320px;height:195px;right:0;bottom:45px;}@media (max-width:320px){width:300px;right:-10px;}"]);
const SwitcherHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "LanguageSwitcher__SwitcherHeader",
  componentId: "sc-w05u9i-2"
})(["background:#f0f4f8;color:#fff;margin-bottom:0;padding:20px 30px;font-size:20px;margin-top:0;font-size:18px;font-family:'DM Sans';color:rgb(23,28,45);font-weight:700;"]);
const SwitcherContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LanguageSwitcher__SwitcherContent",
  componentId: "sc-w05u9i-3"
})(["padding:20px 30px 8px;display:flex;justify-content:space-between;align-items:flex-start;@media (max-width:480px){flex-wrap:wrap;padding:25px 30px 0px;}button{border:0;padding:0;outline:0;cursor:pointer;background:transparent;border-radius:50%;overflow:hidden;@media (max-width:480px){margin-bottom:10px;}&.active{border:0;img{border-radius:50%;border:4px solid rgb(47,128,237);object-fit:cover;}}img{margin-bottom:0;display:block;width:45px;height:45px;@media (max-width:480px){width:38px;height:38px;}}}"]);
const SwitcherFooter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LanguageSwitcher__SwitcherFooter",
  componentId: "sc-w05u9i-4"
})(["position:relative;background:#fff;padding-left:30px;padding-top:8px;padding-right:30px;span{font-size:16px;font-family:'DM Sans';color:rgb(23,28,45);font-weight:700;&:nth-child(1){font-weight:500;color:rgb(23,28,45);}}"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LanguageSwitcher__Wrapper",
  componentId: "sc-w05u9i-5"
})(["position:fixed;bottom:20px;right:20px;z-index:9999;"]);

/***/ }),

/***/ "../common/LanguageSwitcher/rtl.js":
/*!*****************************************!*\
  !*** ../common/LanguageSwitcher/rtl.js ***!
  \*****************************************/
/*! exports provided: InjectRTL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectRTL", function() { return InjectRTL; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const InjectRTL = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "rtl__InjectRTL",
  componentId: "sc-1wofo4r-0"
})(["font-family:'Roboto',sans-serif;", ""], ({
  lang
}) => (lang === 'ar' || lang === 'he') && `
    font-family: 'Cairo', sans-serif;    
    `);

/***/ }),

/***/ "../common/data/social-share/three.js":
/*!********************************************!*\
  !*** ../common/data/social-share/three.js ***!
  \********************************************/
/*! exports provided: SOCIAL_PROFILES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_PROFILES", function() { return SOCIAL_PROFILES; });
/* harmony import */ var react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons-kit/ionicons/socialTwitter */ "react-icons-kit/ionicons/socialTwitter");
/* harmony import */ var react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons-kit/ionicons/socialFacebook */ "react-icons-kit/ionicons/socialFacebook");
/* harmony import */ var react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit_ionicons_socialGithub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit/ionicons/socialGithub */ "react-icons-kit/ionicons/socialGithub");
/* harmony import */ var react_icons_kit_ionicons_socialGithub__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialGithub__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_ionicons_socialGoogleplusOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/ionicons/socialGoogleplusOutline */ "react-icons-kit/ionicons/socialGoogleplusOutline");
/* harmony import */ var react_icons_kit_ionicons_socialGoogleplusOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialGoogleplusOutline__WEBPACK_IMPORTED_MODULE_3__);




const SOCIAL_PROFILES = [{
  id: '1',
  icon: react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_1__["socialFacebook"],
  url: '/three'
}, {
  id: '2',
  icon: react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_0__["socialTwitter"],
  url: '/three'
}, {
  id: '3',
  icon: react_icons_kit_ionicons_socialGithub__WEBPACK_IMPORTED_MODULE_2__["socialGithub"],
  url: '/three'
}, {
  id: '4',
  icon: react_icons_kit_ionicons_socialGoogleplusOutline__WEBPACK_IMPORTED_MODULE_3__["socialGoogleplusOutline"],
  url: '/three'
}];

/***/ }),

/***/ "../common/data/translation/eleven/ar.json":
/*!*************************************************!*\
  !*** ../common/data/translation/eleven/ar.json ***!
  \*************************************************/
/*! exports provided: headerText, welcome, title, logo, ticker, mainMessage, description, notifyText, buttonText, placeholder, not_found, copyrightText, languageText, languageName, successMsg, errorMsg, days, hours, minutes, seconds, demoTxt, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"headerText\":\"غير اللغة\",\"welcome\":\"أهلا بك\",\"title\":\"قريبا\",\"logo\":\"شعار\",\"ticker\":\"موقعنا في تحت الانشاء\",\"mainMessage\":\"شيء كبير التحديث قادم من قبل فريقنا. انتظر! نحن نطلق قريبا مع تحديثات مذهلة!ا\",\"description\":\"نحن نأتي قريبًا جدًا لتوفير أفضل الحلول لشركتك. شكرا على سعة صدرك وثقتك بنا\",\"notifyText\":\"يخطر لي تحديث\",\"buttonText\":\"اشترك البريد الإلكتروني \",\"placeholder\":\"أدخل عنوان البريد الالكتروني\",\"not_found\":\"404 - الصفحة غير موجودة\",\"copyrightText\":\"حقوق الطبع والنشر 2019 بواسطة RedQ، Inc. جميع الحقوق محفوظة\",\"languageText\":\"لغة \",\"languageName\":\"اللغة العربية\",\"successMsg\":\"شكرا لتعاونك\",\"errorMsg\":\"تبا شيء ما حدث بشكل خاطئ.\",\"days\":\"أيام\",\"hours\":\"ساعات\",\"minutes\":\"الدقائق\",\"seconds\":\"ثواني\",\"demoTxt\":\"DEMOS\"}");

/***/ }),

/***/ "../common/data/translation/eleven/de.json":
/*!*************************************************!*\
  !*** ../common/data/translation/eleven/de.json ***!
  \*************************************************/
/*! exports provided: headerText, welcome, title, logo, ticker, mainMessage, description, notifyText, buttonText, placeholder, not_found, copyrightText, languageText, languageName, successMsg, errorMsg, days, hours, minutes, seconds, demoTxt, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"headerText\":\"Sprache ändern\",\"welcome\":\"Herzlich willkommen\",\"title\":\"Herzlich willkommen\",\"logo\":\"Logo\",\"ticker\":\"Unsere Website befindet sich im Aufbau\",\"mainMessage\":\"Etwas Großes Update kommt von unserem Team. Wir starten bald mit erstaunlichen Updates!\",\"description\":\"Wir werden sehr schnell kommen, um Ihnen die beste Lösung für Ihr Unternehmen anzubieten.\",\"notifyText\":\"BENACHRICHTIGE MICH\",\"buttonText\":\"E-Mail abonnieren\",\"placeholder\":\"E-Mail Adresse eingeben\",\"not_found\":\"404 Seite nicht gefunden\",\"copyrightText\":\"Copyright 2021 by RedQ, Inc. Alle Rechte vorbehalten\",\"languageText\":\"Sprache \",\"languageName\":\"deutsche Sprache\",\"successMsg\":\"Vielen Dank für die Einreichung\",\"errorMsg\":\"Ups! Irgendwas lief schief.\",\"days\":\"Tage\",\"hours\":\"Std\",\"minutes\":\"Protokoll\",\"seconds\":\"Sekunden\",\"demoTxt\":\"DEMOS\"}");

/***/ }),

/***/ "../common/data/translation/eleven/en.json":
/*!*************************************************!*\
  !*** ../common/data/translation/eleven/en.json ***!
  \*************************************************/
/*! exports provided: headerText, welcome, title, logo, ticker, mainMessage, description, notifyText, buttonText, placeholder, not_found, copyrightText, languageText, languageName, successMsg, errorMsg, days, hours, minutes, seconds, demoTxt, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"headerText\":\"Change Language\",\"welcome\":\"Welcome\",\"title\":\"Coming Soon 11\",\"logo\":\"Logo\",\"ticker\":\"Our website in under construction\",\"mainMessage\":\"Something Big update is coming by our team. Wait! We are launching soon with amazing updates!\",\"description\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu sit amet consectetur adipisicing\",\"notifyText\":\"Notify Me Update\",\"buttonText\":\"Subscribe Email \",\"placeholder\":\"Enter email address\",\"not_found\":\"404 - Page Not Found\",\"copyrightText\":\"Copyright 2021 by RedQ, Inc. All rights reserved\",\"languageText\":\"Language \",\"languageName\":\"English\",\"successMsg\":\"Thank you for the submission\",\"errorMsg\":\"Oops!!Something went wrong.\",\"days\":\"days\",\"hours\":\"hours\",\"minutes\":\"minutes\",\"seconds\":\"seconds\",\"demoTxt\":\"DEMOS\"}");

/***/ }),

/***/ "../common/data/translation/eleven/es.json":
/*!*************************************************!*\
  !*** ../common/data/translation/eleven/es.json ***!
  \*************************************************/
/*! exports provided: headerText, welcome, title, logo, ticker, mainMessage, description, notifyText, buttonText, placeholder, not_found, copyrightText, languageText, languageName, successMsg, errorMsg, days, hours, minutes, seconds, demoTxt, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"headerText\":\"Cambiar idioma\",\"welcome\":\"Bienvenido\",\"title\":\"Próximamente 11\",\"logo\":\"Logo\",\"ticker\":\"Nuestro sitio web en construcción\",\"mainMessage\":\"Algo grande viene por nuestro equipo. ¡Espere! lanzando pronto con actualizaciones increíbles!\",\"description\":\"Próximamente le ofreceremos la mejor solución para su empresa. Gracias por su paciencia y confianza en nosotros.\",\"notifyText\":\"NOTIFICARME ACTUALIZACIÓN\",\"buttonText\":\"Suscribir correo electrónico \",\"placeholder\":\"ingrese correo electrónico\",\"not_found\":\"404 Pagina no encontrada\",\"copyrightText\":\"Copyright 2019 por RedQ, Inc. Todos los derechos reservados.\",\"languageText\":\"Idioma \",\"languageName\":\"lenguas españolas\",\"successMsg\":\"Gracias por la sumisión\",\"errorMsg\":\"Huy! Algo salió mal.\",\"days\":\"dias\",\"hours\":\"horas\",\"minutes\":\"minutos\",\"seconds\":\"segundos\",\"demoTxt\":\"DEMOS\"}");

/***/ }),

/***/ "../common/data/translation/eleven/he.json":
/*!*************************************************!*\
  !*** ../common/data/translation/eleven/he.json ***!
  \*************************************************/
/*! exports provided: headerText, welcome, title, logo, ticker, mainMessage, description, notifyText, buttonText, placeholder, not_found, copyrightText, languageText, languageName, successMsg, errorMsg, days, hours, minutes, seconds, demoTxt, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"headerText\":\"שנה שפה\",\"welcome\":\"ברוך הבא\",\"title\":\"בקרוב\",\"logo\":\"לוגו\",\"ticker\":\"האתר שלנו נמצא בבנייה\",\"mainMessage\":\"הצוות שלנו יגיע לעדכון גדול. חכה! אנו משיקים בקרוב עם עדכונים מדהימים!ב\",\"description\":\"אנו באים בקרוב בשקט מאוד בכדי לספק לך את הפיתרון הטוב ביותר עבור החברה שלך. תודה על הסבלנות והאמון עלינו\",\"notifyText\":\"הודיעו לי עדכון\",\"buttonText\":\"הירשם כמנוי לדוא\",\"placeholder\":\"הזן את כתובת הדואל\",\"not_found\":\"404 - עמוד לא נמצא\",\"copyrightText\":\"זכויות יוצרים 2019 מאת RedQ, Inc. כל הזכויות שמורות\",\"languageText\":\"שפה \",\"languageName\":\"שפה עברית\",\"successMsg\":\"תודה על ההגשה\",\"errorMsg\":\"אופס! משהו השתבש.\",\"days\":\"ימים\",\"hours\":\"שעות\",\"minutes\":\"דקות\",\"seconds\":\"שניות\",\"demoTxt\":\"DEMOS\"}");

/***/ }),

/***/ "../common/data/translation/eleven/zh.json":
/*!*************************************************!*\
  !*** ../common/data/translation/eleven/zh.json ***!
  \*************************************************/
/*! exports provided: headerText, welcome, title, logo, ticker, mainMessage, description, notifyText, buttonText, placeholder, not_found, copyrightText, languageText, languageName, successMsg, errorMsg, days, hours, minutes, seconds, demoTxt, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"headerText\":\"標題文本\",\"welcome\":\"歡迎\",\"title\":\"即將推出3\",\"logo\":\"商標\",\"ticker\":\"我們的網站正在建設中\",\"mainMessage\":\"我們的團隊即將推出一些重大更新。等待！我們即將推出驚人的更新！\",\"description\":\"我們很快就會為您的公司提供最佳解決方案。感謝您的耐心和對我們的信任\",\"notifyText\":\"通知我更新\",\"buttonText\":\"訂閱郵箱 \",\"placeholder\":\"輸入電郵地址\",\"not_found\":\"404頁面不存在\",\"copyrightText\":\"版權所有2019 by RedQ，Inc。保留所有權利\",\"languageText\":\"語言 \",\"languageName\":\"中文\",\"successMsg\":\"謝謝你的提交\",\"errorMsg\":\"哎呀！出事了。\",\"days\":\"天\",\"hours\":\"小時\",\"minutes\":\"分鐘\",\"seconds\":\"秒\",\"demoTxt\":\"DEMOS\"}");

/***/ }),

/***/ "../common/hooks/useClickOutside.js":
/*!******************************************!*\
  !*** ../common/hooks/useClickOutside.js ***!
  \******************************************/
/*! exports provided: on, off, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const on = (obj, ...args) => obj.addEventListener(...args);
const off = (obj, ...args) => obj.removeEventListener(...args);
const defaultEvents = ['mousedown', 'touchstart'];

const useOutsideClick = (ref, onOutsideClick, events = defaultEvents) => {
  const savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(onOutsideClick);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    savedCallback.current = onOutsideClick;
  }, [onOutsideClick]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handler = event => {
      const {
        current: el
      } = ref;
      el && !el.contains(event.target) && savedCallback.current(event);
    };

    for (const eventName of events) {
      on(document, eventName, handler);
    }

    return () => {
      for (const eventName of events) {
        off(document, eventName, handler);
      }
    };
  }, [events, ref]);
};

/* harmony default export */ __webpack_exports__["default"] = (useOutsideClick);

/***/ }),

/***/ "../common/hooks/useTimeout.js":
/*!*************************************!*\
  !*** ../common/hooks/useTimeout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTimeout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useTimeout(cb, timeoutDelayMs = 0) {
  const {
    0: isTimeoutActive,
    1: setIsTimeoutActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const savedRefCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    savedRefCallback.current = cb;
  }, [cb]);

  function callback() {
    savedRefCallback.current && savedRefCallback.current();
    clear();
  }

  function clear() {
    setIsTimeoutActive(false);
  }

  function start() {
    setIsTimeoutActive(true);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isTimeoutActive) {
      const timeout = window.setTimeout(callback, timeoutDelayMs);
      return () => {
        window.clearTimeout(timeout);
      };
    }
  }, [isTimeoutActive, callback, timeoutDelayMs]);
  return {
    clear,
    start,
    stop: clear,
    isActive: isTimeoutActive
  };
}

/***/ }),

/***/ "../common/static/images/eleven/2.png":
/*!********************************************!*\
  !*** ../common/static/images/eleven/2.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAABOElEQVQ4jdXUsUtXURjG8Y8h4ZCLSKg5vy0OgouQoChFg6Npc7kKrUF/QUsI5ugSIdJqEFjZYJv9A+9f0ODkpKIQl85vvu9gQw8cLuc93/twznnee1UUEXsRcRkRaxX+TsmVx7iLhQo8XDR9hifYLfK3r6GKY0Qs4im2M/N3H189/kc8wD1s9cHVoA5xju9F/j/RUER8wArWM/MkIpawj8+ZuelvUO+wgReZ+SUi7uMbLrGcmecR0fXwQXdF3Z2uY7IZa/040eoDDZjVNp9pYw4PW617f6pju/Sf4xHet8VtjLSdDPSyGb5t8x94jSucttoORvHzn4RUbf5xzOI4M2/6+GqfHrXxpgJXTa/b86ICVz/TLtnAryJ/+6oGNT/4n2bmWR9fPf4nTGMMr/rgalBfW6Of9JL4Ax6wQ1Efh4stAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../common/static/images/eleven/3.png":
/*!********************************************!*\
  !*** ../common/static/images/eleven/3.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAB+klEQVRIib2XTUtVURSGn64VFn1RIkIjId5GElhJpDZUB5JE435A0MBRs2ZNGgQF/YCgP6BOtAYN0gj6wmG+OGjSROwDK5IoiX1ZB46HU9q5sBdczt6LtXnuWnu9e59DMkl7yGgtSVeBLUkDubAt4EGM7+WEvorxBUl7c0GXYnwQOJsL+qw0H8kFfQv8iPloFqjtn8DLmA/vJB9JhyR1dwSNZ7GvPcDpGtBJSdclzQMfU2UkTTWFFt26WPJdAt6Fbqfid65m7U1gtgm0XUpJh4EvkbmBfUB/TfwmsAH0Amlbjtre/F9ou7y2vwLL4VMFuA48BK4AJ4Db4d8PDDXJtHwYPAIGY7wapZsDntv+XQRJWiqtGalIble2rVMl9UXJVv62WFIX8Ak4Ajy2PdERdLcmaQEYj/09Xq5EzZ9Mavhse63wNT1rFwOash0o9UNRiWHgcnT+qfBP277fKbSwUUmp48cCMhl6r9o1oA1tWt7uKG2S1lpkXHdKvQ9pJUVsRb98a9UE7mihzdcR11sBJv8t4IztJL274U+si3RQ3mR3gJnI5GnIa872h0pcWVLpQnnSGGp7VtIBoMv293+ErsQB01NcnVleyCTNRJOlK/RYoz1tYMUpliozmAu6TWK5oG/KbydZoLZ/AS9iej5Xpsmm43kjIzM+X4A//hyFZsFPadoAAAAASUVORK5CYII="

/***/ }),

/***/ "../common/static/images/eleven/6.png":
/*!********************************************!*\
  !*** ../common/static/images/eleven/6.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABm0lEQVQ4jZ2UTYiOURTHf/PO62NBhsaWkn4rwpCymvIxRXZkRSxZS9mwsbews7Igi/GRLSVho5DEQv8SKSkNkZWPQfftPtPjzRjvnMVznnPuPb/+3XvOZTZTx9RP6r1mi7pG3f63kk47UDery2u4HlgGbFUXqV3gIXBbPTArSD0MPAIe1NRl4CgwkeQrMA1MAT+Bj/2gbut/uvof5ZPkO3C+WUzyS90IjCR5p44Au4FbST78QVU31A1zmnpRLfArPUXqLmAbcDbJ0/+BVHtZ/etGxZdKPj4ApKkdbZ/RNWAHcHdQUJIpdR3wdmjQ4j5F+4CrwKuOOqQunidruPpO6aPSuZ/V8UEpSSaBMWBLt3bwwqJ0nuf0hNrZRckh4MIggHLL6nv1YA9UeifJpbo40b7SOWwvsBLYQ9/QngJuAjf+oWJYXVDDY8AZ4GQJ2rPWzEtvINWlwBHgTpLn6hLgWXkR1E1JXgCnm+IZRUnOAWuB/TV1Aii56zVeAawGyjOzql9tW1GBNfNT7DHwDbhf196oO4uiJL3cjAG/AbJgfFfV+XnVAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../common/static/images/eleven/7.png":
/*!********************************************!*\
  !*** ../common/static/images/eleven/7.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAKCAYAAAAzZJfgAAAB80lEQVQ4jY2US4iPYRTGf4Pcwt+IJlHUcCQjl4VJIkMujZSNLJSFpaxmZWPH2mrWFligXFIuM4NcI+WSJA9lM2UhygI1Gzr1/PPON9/8/c/qfc85z/s+7/Oc7+uIiBvANuCgpCHaiIhYCowAc4Bdkt63iesF8r5R477V9U0BdgPzgGsRsaWNgxeZ0CpgCTAcEcvawK0FbgGJ3wDcjIi5k5E64fUsN65rcXADuG1CzUhidyOiqwVuBXAH6CzSm4DrETFjAilJZ4DT3qdiIxGxsubg2ZZ+o1P3U12vu41r1ODS6hyLxU6dBd543QdcjoipJaajAA8Cx7xNzzdLGnVtOnAV6Hf9Rc4E8DvVBXY6/xzYIekX/6xO8mtcvwgcBhYAT4Dm488DRyT9qZLK9TmDMj4COWPfgQvAIeff5QslfS0UvAf0up7zts/jMGSb8DwdkDRWKPjM9mcMSjo+jpQbpwFXgP1OvQZeAke9/5xfalPBAjcfeAT0OJW2NmwPru1tKljgUqmnwEKnTkk6OY6UG2fakr5K6YsJfapijOuyJd2V0isr+2MS3Hrggec5Y2ACKTdmw3AhfVq4XdLbuv4Ctxx4XFjyAdjatLoFLsck70vLx2pJuTElzZnIf1C/pBzi/0ZErPYFP/MDqFrd4r49wCXg4V9U7ZaSBrf75AAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../common/static/images/eleven/8.png":
/*!********************************************!*\
  !*** ../common/static/images/eleven/8.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAABSklEQVQ4ja2TTStFURSGHx/p5iPpTIwNVvmYKErJxP0DYm4gJUYGykRJTJRkxMRIKRPyBxiIMhPh1jvgF5wkrpCB9m3f2vc6TjnXHuzWevdez1prr3YDNS4za4+iaC2Kops4jot1/wA8BMa921JfI2wmgJ1LessMNLNeYCuQ8m7LBDSzHHAA5LzUI+nTGY0pQS7ZGVAAFiQ9B8ebQJ+3VyUVygdpFe4Bw8A0cGVmQz7RGDDr7zwAy2FQ4pTNbBQ4qZK/gHVgDujwWpuk11SgmbUCL959AraBxYTnyUs6rY6vaNnMXILrQJqStASMAI+Bvp8E+wEEVoAub+9IOnaGpEugH9gFLoDJJFhFy2bWDdx79xYYlPT+W2Aq0MyagA+vOciApLu/wtwqtxxOdD4rrFShmTUDRe8fSZrICitV6D400AlsuKnWAgP4BquLXtd6cTeLAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../common/static/images/eleven/9.png":
/*!********************************************!*\
  !*** ../common/static/images/eleven/9.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAKCAYAAABblxXYAAAAk0lEQVQoU6XQzQ3CMAxA4RfJdxiBETi3ILEBGYER6EbdgLBBpcj3jsIG4UCRXPoTNbyjLX+K4lJK/FNdnz3ggQPQq8a7K0EN5IHdz7qRhbtJGci2X0U3QLZ+ghZCAE+gVY1B+EAX4FYIBSCoxtd36Krq5IHH+u2oWcgmwwtzZSGbAB1wndltgmwCtMBx+M+uFLK9Aef5OAY9glvtAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../common/static/images/logoOne.png":
/*!*******************************************!*\
  !*** ../common/static/images/logoOne.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../common/ui/eleven.style.js":
/*!************************************!*\
  !*** ../common/ui/eleven.style.js ***!
  \************************************/
/*! exports provided: LogoImageContainer, ParticleContainer, NormalClockWrapper, MainContentSection, ContentWrapper, ContactFormWrap, NotifyButton, FooterSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoImageContainer", function() { return LogoImageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleContainer", function() { return ParticleContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalClockWrapper", function() { return NormalClockWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentSection", function() { return MainContentSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormWrap", function() { return ContactFormWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyButton", function() { return NotifyButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterSection", function() { return FooterSection; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LogoImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "elevenstyle__LogoImageContainer",
  componentId: "sc-1ymt0wl-0"
})(["text-align:center;padding-top:40px;@media (max-width:1600px){padding-top:30px;}img{margin:0;}"]);
const MainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "elevenstyle__MainWrapper",
  componentId: "sc-1ymt0wl-1"
})(["background:#fff;position:relative;height:100%;min-height:100vh;overflow:hidden;display:flex;align-items:center;justify-content:space-between;flex-direction:column;"]);
const ParticleContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "elevenstyle__ParticleContainer",
  componentId: "sc-1ymt0wl-2"
})(["position:absolute;width:100%;height:100%;opacity:0.85;particle{position:absolute;width:100%;height:100%;top:0px;left:0px;}"]);
const NormalClockWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "elevenstyle__NormalClockWrapper",
  componentId: "sc-1ymt0wl-3"
})(["position:relative;display:flex;justify-content:center;align-items:center;width:50%;@media (max-width:1440px){margin-bottom:70px;}@media (max-width:1199px){width:100%;margin-top:0px;margin-bottom:55px;}@media (max-width:600px){margin-bottom:20px;width:100%;}.NormalClock{width:550px;@media (max-width:600px){width:100%;}.NormalUnitContainer{background:transparent;@media (max-width:600px){width:100px;}@media (max-width:420px){width:80px;}.NormalupperCard{span{font-size:60px;font-family:'DM Sans';color:#000;font-weight:700;line-height:0.8;text-align:center;letter-spacing:0.025em;@media (max-width:1440px){font-size:36px;line-height:46px;}@media (max-width:600px){font-size:30px;line-height:36px;}}}.NormallowerCard{span{font-size:60px;font-family:'DM Sans';color:#000;font-weight:700;line-height:0.8;text-align:center;letter-spacing:0.025em;@media (max-width:1440px){font-size:36px;line-height:46px;}@media (max-width:600px){font-size:30px;line-height:36px;}}}.NormalCard{span{font-size:60px;font-family:'DM Sans';color:#000;font-weight:700;line-height:0.8;text-align:center;letter-spacing:0.025em;@media (max-width:1440px){font-size:36px;line-height:46px;}@media (max-width:600px){font-size:30px;line-height:36px;}}}.digitLabel{font-size:14px;font-family:'DM Sans';color:rgb(0,0,0);font-weight:bold;text-transform:uppercase;text-align:center;letter-spacing:2px;@media (max-width:1440px){margin-top:5px;}@media (max-width:600px){letter-spacing:1px;}@media (max-width:420px){font-size:12px;}}}}"]);
const MainContentSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "elevenstyle__MainContentSection",
  componentId: "sc-1ymt0wl-4"
})(["display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden;padding:60px 0;width:100%;@media (max-width:1199px){flex-direction:column;}@media (max-width:1099px){height:100%;min-height:65vh;}.mainContainer{z-index:99;position:relative;}"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "elevenstyle__ContentWrapper",
  componentId: "sc-1ymt0wl-5"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:50%;margin-left:120px;@media (max-width:1199px){width:100%;margin-left:0px;align-items:center;}p{font-size:18px;font-family:'DM Sans';color:rgb(0,0,0);font-weight:700;line-height:33px;position:relative;padding-left:70px;@media (max-width:600px){font-size:14px;padding-left:50px;line-height:26px;}&::before{content:'';display:block;border-top:2px solid rgb(0,0,0);width:48px;position:absolute;left:0;top:16px;@media (max-width:600px){width:36px;top:12px;}}@media (max-width:480px){margin-bottom:10px;}}h2{font-size:48px;font-family:'DM Sans';color:#000;line-height:1.35;text-align:left;max-width:520px;font-weight:700;letter-spacing:-0.5px;margin-bottom:30px;@media (max-width:1440px){font-size:36px;max-width:570px;margin-bottom:25px;}@media (max-width:1199px){text-align:center;}@media (max-width:768px){font-size:30px;}@media (max-width:480px){font-size:20px;max-width:100%;}}"]);
const ContactFormWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "elevenstyle__ContactFormWrap",
  componentId: "sc-1ymt0wl-6"
})(["@media (max-width:600px){width:100%;}form{display:flex;flex-direction:column;max-width:100%;margin-top:15px;z-index:2;@media (max-width:1440px){margin-top:15px;flex-direction:column;}@media (max-width:600px){flex-direction:column;width:100%;}@media (max-width:575px){flex-direction:column;align-items:center;margin-bottom:25px;button{width:100%;}}.field-wrapper{width:100%;@media (max-width:600px){width:100%;}input{background-color:transparent;border:2px solid #000;height:48px;border-radius:5px;width:420px;@media (max-width:1440px){width:310px;}@media (max-width:1199px){text-align:center;width:100%;}&::placeholder{font-size:15px;font-family:'Roboto';color:rgb(0,0,0);}&:focus{outline:none;}}}button{font-size:18px;font-family:'DM Sans';color:rgb(0,0,0);font-weight:700;line-height:33px;position:relative;background:transparent;transition:all 0.2s ease-in-out;position:relative;padding-left:0;padding-right:0;justify-content:flex-start;width:fit-content;min-width:95px;height:51px;padding-left:0;padding-right:0;margin-left:0;margin-right:0;margin-top:15px;margin-bottom:0;@media (max-width:1199px){min-width:100%;justify-content:center;}&::before{content:'';position:absolute;bottom:0px;width:100%;height:2px;transition:all 0.2s ease-in-out;transition-duration:0.75s;opacity:0;}&::after{content:'';position:absolute;bottom:0px;width:100%;height:2px;transition:all 0.2s ease-in-out;transition-duration:0.75s;opacity:1;left:0;background-color:#000;}span.btn-text{padding-left:0;padding-right:0;}&:hover{box-shadow:none;background:transparent;}}}.feedback{left:0%;bottom:-120px;}"]);
const NotifyButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "elevenstyle__NotifyButton",
  componentId: "sc-1ymt0wl-7"
})(["padding-top:50px;@media (max-width:1440px){padding-top:15px;}@media (max-width:600px){padding-top:0px;}button{font-size:18px;font-family:'DM Sans';color:rgb(0,0,0);font-weight:700;line-height:33px;position:relative;background:transparent;transition:all 0.2s ease-in-out;position:relative;padding-left:0;padding-right:0;@media (max-width:480px){font-size:16px;}&::before{content:'';position:absolute;bottom:0px;width:0px;height:2px;transition:all 0.2s ease-in-out;transition-duration:0.75s;opacity:0;}&::after{content:'';position:absolute;bottom:0px;width:0px;height:2px;transition:all 0.2s ease-in-out;transition-duration:0.75s;opacity:0;left:0;background-color:#000;}&:hover{&::before{width:100%;opacity:1;}&::after{width:100%;opacity:1;}}span.btn-text{padding-left:0;padding-right:0;}}"]);
const FooterSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "elevenstyle__FooterSection",
  componentId: "sc-1ymt0wl-8"
})(["position:relative;padding-bottom:40px;@media (max-width:1600px){padding-bottom:30px;}.social_profiles{justify-content:center;.social_profile_item{border-radius:50%;background-color:#e5e5e5;width:46px;height:46px;display:flex;justify-content:center;align-items:center;cursor:pointer;transition:all 0.5s ease;a{color:#000;font-size:17px;}&:hover{background-color:#000;a{color:#fff;}}}}p{margin-top:15px;font-size:14px;font-family:'Roboto';color:rgb(142,147,154);line-height:2.357;text-align:center;margin-bottom:0;}"]);
/* harmony default export */ __webpack_exports__["default"] = (MainWrapper);

/***/ }),

/***/ "../components/Animation/index.js":
/*!****************************************!*\
  !*** ../components/Animation/index.js ***!
  \****************************************/
/*! exports provided: AnimSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimSpinner", function() { return AnimSpinner; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const spinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:rotate(0deg);}50%{transform:rotate(180deg);opacity:0.5;}100%{transform:rotate(360deg);}"]);
const AnimSpinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["animation:", " 1s linear infinite;"], spinner);


/***/ }),

/***/ "../components/Button/button.style.js":
/*!********************************************!*\
  !*** ../components/Button/button.style.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "buttonstyle__ButtonStyle",
  componentId: "sc-rnuphx-0"
})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:#ffffff;background-color:#028489;min-height:48px;min-width:48px;border-radius:3px;font-family:inherit;font-size:16px;font-weight:500;text-decoration:none;text-transform:capitalize;padding-top:8px;padding-bottom:8px;padding-left:15px;padding-right:15px;border:0;transition:all 0.3s ease;@media (max-width:480px){font-size:15px;}span.btn-text{padding-left:4px;padding-right:4px;}span.btn-icon{display:flex;> div{display:flex !important;}}&:focus{outline:none;}&.is-material{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}&.is-loading{.btn-text{padding-left:8px;padding-right:8px;}}"]);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ __webpack_exports__["default"] = (ButtonStyle);

/***/ }),

/***/ "../components/Button/index.js":
/*!*************************************!*\
  !*** ../components/Button/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.style */ "../components/Button/button.style.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader */ "../components/Loader/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["type", "title", "icon", "disabled", "iconPosition", "onClick", "loader", "loaderColor", "isMaterial", "isLoading", "className"];
var _jsxFileName = "C:\\Users\\Owner\\Desktop\\deadline\\coming\\components\\Button\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Button = _ref => {
  let {
    type,
    title,
    icon,
    disabled,
    iconPosition,
    onClick,
    loader,
    loaderColor,
    isMaterial,
    isLoading,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  // Add all classs to an array
  const addAllClasses = ['reusecore__button']; // isLoading prop checking

  if (isLoading) {
    addAllClasses.push('is-loading');
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // Checking button loading state


  const buttonIcon = isLoading !== false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: loader ? loader : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      loaderColor: loaderColor || '#30C56D'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 28
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 7
  }, undefined) : icon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
    className: "btn-icon",
    children: icon
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 15
  }, undefined); // set icon position

  const position = iconPosition || 'right';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_button_style__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({
    type: type,
    className: addAllClasses.join(' '),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick
  }, props), {}, {
    children: [position === 'left' && buttonIcon, title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
      className: "btn-text",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: title,
        defaultMessage: "button"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, undefined), position === 'right' && buttonIcon]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, undefined);
};

Button.propTypes = {
  /** ClassName of the button */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Add icon */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['button', 'submit', 'reset']),

  /** Add icon */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /** Add loader */
  loader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /** Add Material effect */
  isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Button Loading state */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Button Loading state */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** If true button will be disabled */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Adjust your icon and loader position [if you use loader] */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['left', 'right']),

  /** Variant change button shape */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['textButton', 'outlined', 'fab', 'extendedFab']),

  /** primary || secondary || warning || error  change text and border color.
   *  And primaryWithBg || secondaryWithBg || warningWithBg || errorWithBg change text, border and background color */
  colors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['primary', 'secondary', 'warning', 'error', 'primaryWithBg', 'secondaryWithBg', 'warningWithBg', 'errorWithBg']),

  /**
   * Gets called when the user clicks on the button
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "../components/ContactForm/ConatctForm.style.js":
/*!******************************************************!*\
  !*** ../components/ContactForm/ConatctForm.style.js ***!
  \******************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "ConatctFormstyle__Form",
  componentId: "sc-1oadt3-0"
})(["display:flex;max-width:100%;margin-top:40px;z-index:2;@media (max-width:1440px){margin-top:40px;}@media (max-width:600px){flex-direction:column;width:100%;margin-top:25px;}@media (max-width:575px){flex-direction:column;align-items:center;margin-bottom:25px;button{width:100%;}}button{margin-left:15px;margin-right:15px;border-radius:28px;display:flex;align-items:center;justify-content:center:background-image:-moz-linear-gradient( -31deg,rgb(86,204,242) 0%,rgb(47,128,237) 100% );background-image:-webkit-linear-gradient( -31deg,rgb(86,204,242) 0%,rgb(47,128,237) 100% );background-image:-ms-linear-gradient( -31deg,rgb(86,204,242) 0%,rgb(47,128,237) 100% );padding:13px 33px 15px 34px;height:48px;transition:all 0.5s ease;&:hover{box-shadow:0px 5px 11px 0 rgba(47,128,237,0.57);}.btn-text{padding:0;}@media (max-width:600px){margin-left:0;margin-top:15px;margin-right:0;}}"]);

/***/ }),

/***/ "../components/ContactForm/ContactForm.js":
/*!************************************************!*\
  !*** ../components/ContactForm/ContactForm.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _deadline_common_hooks_useTimeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deadline/common/hooks/useTimeout */ "../common/hooks/useTimeout.js");
/* harmony import */ var _TextField_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TextField/TextField */ "../components/TextField/TextField.js");
/* harmony import */ var _Button___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/ */ "../components/Button/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader */ "../components/Loader/index.js");
/* harmony import */ var _ConatctForm_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConatctForm.style */ "../components/ContactForm/ConatctForm.style.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Owner\\Desktop\\deadline\\coming\\components\\ContactForm\\ContactForm.js";







function ContactForm() {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: success,
    1: setSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: pending,
    1: setPending
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    start
  } = Object(_deadline_common_hooks_useTimeout__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
    if (error) setError(false);
    if (success) setSuccess(false);
  }, 3500);

  const handleSubmit = async e => {
    e.preventDefault();
    setPending(true); // const response = await fetch(
    //   'https://api.sendgrid.com/v3/marketing/contacts',
    //   {
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    //     },
    //     method: 'PUT',
    //     body: JSON.stringify({
    //       list_ids: [],
    //       contacts: [{ email: value }],
    //     }),
    //   }
    // );
    // const data = await response.json();
    // console.log(data, 'data');
    // if (data.job_id) {
    //   setPending(false);
    //   setSuccess(true);
    //   start();
    //   setValue('');
    // } else if (data.errors.length) {
    //   setPending(false);
    //   setError(true);
    //   start();
    // }

    console.log('contact form');
    setTimeout(function () {
      setPending(false);
      setSuccess(true);
      setError(false);
      start();
      setValue('');
    }, 2000);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ConatctForm_style__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_TextField_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "user_email",
      placeholder: "placeholder",
      type: "email",
      required: "required",
      value: value,
      error: error,
      errorMessage: "errorMessage",
      successMessage: "successMsg",
      success: success,
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Button___WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "submit",
      title: "buttonText" // style={{backgroundColor: "#e76f51", color: "#fff"}}
      ,
      isLoading: pending,
      loader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
        loaderColor: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "../components/Loader/index.js":
/*!*************************************!*\
  !*** ../components/Loader/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.style */ "../components/Loader/loader.style.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["loaderColor", "className"];
var _jsxFileName = "C:\\Users\\Owner\\Desktop\\deadline\\coming\\components\\Loader\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Loader = _ref => {
  let {
    loaderColor,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  // Add all classs to an array
  const addAllClasses = ['reusecore__loader']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_loader_style__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({
    className: addAllClasses.join(' '),
    loaderColor: loaderColor
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

Loader.propTypes = {
  /** ClassName of the Loader */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Set loader width in number || string */
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),

  /** Set loader height in number || string */
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),

  /** Set color for loader */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Loader.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "../components/Loader/loader.style.js":
/*!********************************************!*\
  !*** ../components/Loader/loader.style.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Animation */ "../components/Animation/index.js");


const LoaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "loaderstyle__LoaderStyle",
  componentId: "sc-28rpel-0"
})(["display:inline-flex;width:14px;height:14px;border-radius:50%;overflow:hidden;border-width:2px;border-style:solid;border-color:", ";border-top-color:transparent !important;", ""], props => props.loaderColor ? props.loaderColor : '#000000', _Animation__WEBPACK_IMPORTED_MODULE_1__["AnimSpinner"]);
LoaderStyle.displayName = 'LoaderStyle';
/* harmony default export */ __webpack_exports__["default"] = (LoaderStyle);

/***/ }),

/***/ "../components/NormalClock/NormalClock.css":
/*!*************************************************!*\
  !*** ../components/NormalClock/NormalClock.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../components/NormalClock/NormalClock.js":
/*!************************************************!*\
  !*** ../components/NormalClock/NormalClock.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NormalClock_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NormalClock.css */ "../components/NormalClock/NormalClock.css");
/* harmony import */ var _NormalClock_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NormalClock_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Owner\\Desktop\\deadline\\coming\\components\\NormalClock\\NormalClock.js";


 // function component



const StaticCard = ({
  position,
  digit
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: position,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
      children: digit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
}; // function component


const NormalUnitContainer = ({
  digit,
  unit = 'time',
  countdown
}) => {
  // assign digit values
  let currentDigit = digit;
  let previousDigit;

  if (countdown) {
    previousDigit = digit + 1; // to prevent a negative value

    if (unit !== 'hours') {
      previousDigit = previousDigit === 60 ? 59 : previousDigit;
    } else {
      previousDigit = previousDigit === 24 ? 23 : previousDigit;
    }
  } // add zero


  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }

  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: 'NormalUnitContainer',
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(StaticCard, {
      position: 'NormalupperCard',
      digit: currentDigit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "digitLabel",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: unit,
          defaultValue: "unit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};

function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor(t / (1000 * 60 * 60) % 24);
  let minutes = Math.floor(t / 1000 / 60 % 60);
  let seconds = Math.floor(t / 1000 % 60);
  return {
    time: t,
    days,
    hours,
    minutes,
    seconds
  };
} // class component


class NormalClock extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    const {
      days,
      hours,
      minutes,
      seconds
    } = getTimeRemaining(this.props.countdown);

    if (days !== this.state.days) {
      this.setState({
        days
      });
    } // on hour change, update hours and shuffle state


    if (hours !== this.state.hours) {
      this.setState({
        hours
      });
    } // on minute change, update minutes and shuffle state


    if (minutes !== this.state.minutes) {
      this.setState({
        minutes
      });
    } // on second change, update seconds and shuffle state


    if (seconds !== this.state.seconds) {
      this.setState({
        seconds
      });
    }
  }

  render() {
    // state object destructuring
    const {
      days,
      hours,
      minutes,
      seconds
    } = this.state;
    const {
      countdown,
      divider
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: 'NormalClock',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(NormalUnitContainer, {
        countdown: countdown,
        unit: 'days',
        digit: days
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this), divider ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
        className: "dividerColon",
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 20
      }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(NormalUnitContainer, {
        countdown: countdown,
        unit: 'hours',
        digit: hours
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this), divider ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
        className: "dividerColon",
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 20
      }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(NormalUnitContainer, {
        countdown: countdown,
        unit: 'minutes',
        digit: minutes
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, this), divider ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
        className: "dividerColon",
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 20
      }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(NormalUnitContainer, {
        countdown: countdown,
        unit: 'seconds',
        digit: seconds
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NormalClock);

/***/ }),

/***/ "../components/TextField/TextField.js":
/*!********************************************!*\
  !*** ../components/TextField/TextField.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_md_ic_check_circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/md/ic_check_circle */ "react-icons-kit/md/ic_check_circle");
/* harmony import */ var react_icons_kit_md_ic_check_circle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_check_circle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit_md_ic_cancel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit/md/ic_cancel */ "react-icons-kit/md/ic_cancel");
/* harmony import */ var react_icons_kit_md_ic_cancel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_cancel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_reveal_HeadShake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-reveal/HeadShake */ "react-reveal/HeadShake");
/* harmony import */ var react_reveal_HeadShake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_reveal_HeadShake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
const _excluded = ["label", "id", "helpText", "error", "success", "defaultLabel", "type", "placeholder", "name", "value", "onBlur", "onFocus", "onChange", "className", "errorMessage", "successMessage"];
var _jsxFileName = "C:\\Users\\Owner\\Desktop\\deadline\\coming\\components\\TextField\\TextField.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









 //styled-components for stylings


const FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "TextField__FieldWrapper",
  componentId: "sc-1qgjuys-0"
})(["position:relative;@media (max-width:600px){width:100%;}"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.label.withConfig({
  displayName: "TextField__Label",
  componentId: "sc-1qgjuys-1"
})([""]);
const HelpText = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.span.withConfig({
  displayName: "TextField__HelpText",
  componentId: "sc-1qgjuys-2"
})([""]);
const InputFeedback = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "TextField__InputFeedback",
  componentId: "sc-1qgjuys-3"
})(["color:", ";position:absolute;border-radius:5px;background-color:", ";font-size:14px;font-family:'Roboto';color:rgb(250,251,255);left:", ";bottom:-60px;box-shadow:", ";padding:6px 16px;transition:all 250ms linear;width:90%;text-align:center;z-index:99;@media (max-width:600px){left:5%;bottom:-110px;}i{position:absolute;top:4px;}span{padding-left:20px;padding-right:20px;}"], props => props.success ? 'rgb(250, 251, 255)' : 'rgb(250, 251, 255)', props => props.success ? 'rgb(14, 158, 105)' : 'rgb(246, 86, 86)', props => props.success ? '17%' : '0', props => props.success ? '0px 5px 18.8px 1.2px rgba(17, 182, 122, 0.5)' : '0px 5px 18.8px 1.2px rgba(246, 86, 86, 0.35)');
const Input = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.input.withConfig({
  displayName: "TextField__Input",
  componentId: "sc-1qgjuys-4"
})(["background-color:rgb(239,245,249);border:transparent;height:48px;border-radius:28px;padding-left:30px;width:316px;padding-right:30px;@media (max-width:600px){width:100%;}&::placeholder{font-size:15px;font-family:'Roboto';color:rgb(142,147,154);}&:focus{outline:none;}"]); // react-components

function TextField(_ref) {
  let {
    label,
    id,
    helpText,
    error,
    success,
    defaultLabel,
    type,
    placeholder,
    name,
    value,
    onBlur,
    onFocus,
    onChange,
    className,
    errorMessage,
    successMessage
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(FieldWrapper, {
    className: `field-wrapper ${className ? className : ''}`.trim(),
    children: [label && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(Label, {
      htmlFor: id,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
        id: label,
        defaultMessage: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
      id: placeholder,
      defaultMessage: placeholder,
      children: placeholder => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(Input, _objectSpread({
        placeholder: placeholder,
        id: id,
        type: type,
        name: name,
        value: value,
        onChange: onChange,
        autoComplete: "off"
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, this), helpText && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(HelpText, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
        id: helpText,
        defaultMessage: helpText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }, this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_reveal_HeadShake__WEBPACK_IMPORTED_MODULE_6___default.a, {
      duration: 1000,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(InputFeedback, {
        error: true,
        className: "feedback",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          icon: react_icons_kit_md_ic_cancel__WEBPACK_IMPORTED_MODULE_4__["ic_cancel"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          id: "errorMsg",
          defaultMessage: "errorMessage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }, this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
      bottom: true,
      duration: 2000,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(InputFeedback, {
        success: true,
        className: "feedback",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          icon: react_icons_kit_md_ic_check_circle__WEBPACK_IMPORTED_MODULE_3__["ic_check_circle"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          id: successMessage,
          defaultMessage: "successMessage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }, this);
}
/** Inout prop type checking. */

TextField.propTypes = {
  /** className of the Input component. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Set input label value. */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** The input value, required for a controlled component. */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Set input type of the input element. Default type is text. */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['text', 'email', 'number', 'password']),

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/** Inout default type. */

Input.defaultProps = {
  type: 'text'
};

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "../node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "../node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (false ? undefined : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../node_modules/next/dist/client/normalize-trailing-slash.js":
/*!********************************************************************!*\
  !*** ../node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "../node_modules/next/dist/client/request-idle-callback.js":
/*!*****************************************************************!*\
  !*** ../node_modules/next/dist/client/request-idle-callback.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "../node_modules/next/dist/client/route-loader.js":
/*!********************************************************!*\
  !*** ../node_modules/next/dist/client/route-loader.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "../node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Router", {
  enumerable: true,
  get: function () {
    return _router.default;
  }
});
Object.defineProperty(exports, "withRouter", {
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
});
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "../node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/dist/client/use-intersection.js":
/*!************************************************************!*\
  !*** ../node_modules/next/dist/client/use-intersection.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "../node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "../node_modules/next/dist/shared/lib/router/router.js":
/*!*************************************************************!*\
  !*** ../node_modules/next/dist/shared/lib/router/router.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "../node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "../node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./utils/resolve-rewrites"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "../node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!******************************************************************************!*\
  !*** ../node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../node_modules/next/node_modules/react-is/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/next/node_modules/react-is/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "./components/Container/Container.js":
/*!*******************************************!*\
  !*** ./components/Container/Container.js ***!
  \*******************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Container",
  componentId: "sc-nw1xe2-0"
})(["max-width:1200px;margin:0 auto;width:85%;@media (min-width:601px){width:90%;}@media (min-width:993px){width:80%;}"]);

/***/ }),

/***/ "./components/SocialShare/SocialShare.js":
/*!***********************************************!*\
  !*** ./components/SocialShare/SocialShare.js ***!
  \***********************************************/
/*! exports provided: SocialShare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialShare", function() { return SocialShare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/ionicons/socialDribbbleOutline */ "react-icons-kit/ionicons/socialDribbbleOutline");
/* harmony import */ var react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Owner\\Desktop\\deadline\\coming\\nextjs\\components\\SocialShare\\SocialShare.js";






const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "SocialShare__Wrapper",
  componentId: "sc-1fc6rpe-0"
})(["position:relative;display:flex;align-items:center;flex-wrap:wrap;"]);
const Item = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "SocialShare__Item",
  componentId: "sc-1fc6rpe-1"
})(["margin:0 9px;a{color:#fff;transition:0.15s ease-in-out;&:hover{color:#3444f1;}}"]);
const SocialShare = ({
  items = [],
  className,
  iconSize = 22
}) => {
  if (!items) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Wrapper, {
    className: `social_profiles ${className ? className : ''}`.trim(),
    children: items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Item, {
      className: "social_profile_item",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: item.url || '#',
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_icons_kit__WEBPACK_IMPORTED_MODULE_2___default.a, {
            icon: item.icon || react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_3__["socialDribbbleOutline"],
            size: iconSize
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, undefined)
    }, `social-item-${item.id}`, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
}; // export default SocialShare;

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Container, SocialShare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Container_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container/Container */ "./components/Container/Container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _Container_Container__WEBPACK_IMPORTED_MODULE_0__["Container"]; });

/* harmony import */ var _SocialShare_SocialShare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialShare/SocialShare */ "./components/SocialShare/SocialShare.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocialShare", function() { return _SocialShare_SocialShare__WEBPACK_IMPORTED_MODULE_1__["SocialShare"]; });




/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _deadline_common_LanguageSwitcher_context_language_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deadline/common/LanguageSwitcher/context/language.provider */ "../common/LanguageSwitcher/context/language.provider.js");
/* harmony import */ var _deadline_common_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @deadline/common/LanguageSwitcher */ "../common/LanguageSwitcher/index.js");
/* harmony import */ var _deadline_common_LanguageSwitcher_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @deadline/common/LanguageSwitcher/config */ "../common/LanguageSwitcher/config.js");
/* harmony import */ var _deadline_components_NormalClock_NormalClock_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @deadline/components/NormalClock/NormalClock.js */ "../components/NormalClock/NormalClock.js");
/* harmony import */ var _deadline_common_ui_eleven_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @deadline/common/ui/eleven.style */ "../common/ui/eleven.style.js");
/* harmony import */ var _deadline_common_static_images_logoOne_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @deadline/common/static/images/logoOne.png */ "../common/static/images/logoOne.png");
/* harmony import */ var _deadline_common_static_images_logoOne_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_deadline_common_static_images_logoOne_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _deadline_common_data_social_share_three__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @deadline/common/data/social-share/three */ "../common/data/social-share/three.js");
/* harmony import */ var _deadline_common_data_translation_eleven_en_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @deadline/common/data/translation/eleven/en.json */ "../common/data/translation/eleven/en.json");
var _deadline_common_data_translation_eleven_en_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! @deadline/common/data/translation/eleven/en.json */ "../common/data/translation/eleven/en.json", 1);
/* harmony import */ var _deadline_common_data_translation_eleven_ar_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @deadline/common/data/translation/eleven/ar.json */ "../common/data/translation/eleven/ar.json");
var _deadline_common_data_translation_eleven_ar_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! @deadline/common/data/translation/eleven/ar.json */ "../common/data/translation/eleven/ar.json", 1);
/* harmony import */ var _deadline_common_data_translation_eleven_es_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @deadline/common/data/translation/eleven/es.json */ "../common/data/translation/eleven/es.json");
var _deadline_common_data_translation_eleven_es_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! @deadline/common/data/translation/eleven/es.json */ "../common/data/translation/eleven/es.json", 1);
/* harmony import */ var _deadline_common_data_translation_eleven_de_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @deadline/common/data/translation/eleven/de.json */ "../common/data/translation/eleven/de.json");
var _deadline_common_data_translation_eleven_de_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! @deadline/common/data/translation/eleven/de.json */ "../common/data/translation/eleven/de.json", 1);
/* harmony import */ var _deadline_common_data_translation_eleven_zh_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @deadline/common/data/translation/eleven/zh.json */ "../common/data/translation/eleven/zh.json");
var _deadline_common_data_translation_eleven_zh_json__WEBPACK_IMPORTED_MODULE_17___namespace = /*#__PURE__*/__webpack_require__.t(/*! @deadline/common/data/translation/eleven/zh.json */ "../common/data/translation/eleven/zh.json", 1);
/* harmony import */ var _deadline_common_data_translation_eleven_he_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @deadline/common/data/translation/eleven/he.json */ "../common/data/translation/eleven/he.json");
var _deadline_common_data_translation_eleven_he_json__WEBPACK_IMPORTED_MODULE_18___namespace = /*#__PURE__*/__webpack_require__.t(/*! @deadline/common/data/translation/eleven/he.json */ "../common/data/translation/eleven/he.json", 1);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _deadline_components_ContactForm_ContactForm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @deadline/components/ContactForm/ContactForm */ "../components/ContactForm/ContactForm.js");
/* harmony import */ var _deadline_components_Button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @deadline/components/Button */ "../components/Button/index.js");
/* harmony import */ var _deadline_common_static_images_eleven_2_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @deadline/common/static/images/eleven/2.png */ "../common/static/images/eleven/2.png");
/* harmony import */ var _deadline_common_static_images_eleven_2_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_deadline_common_static_images_eleven_2_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _deadline_common_static_images_eleven_3_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @deadline/common/static/images/eleven/3.png */ "../common/static/images/eleven/3.png");
/* harmony import */ var _deadline_common_static_images_eleven_3_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_deadline_common_static_images_eleven_3_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _deadline_common_static_images_eleven_6_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @deadline/common/static/images/eleven/6.png */ "../common/static/images/eleven/6.png");
/* harmony import */ var _deadline_common_static_images_eleven_6_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_deadline_common_static_images_eleven_6_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _deadline_common_static_images_eleven_7_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @deadline/common/static/images/eleven/7.png */ "../common/static/images/eleven/7.png");
/* harmony import */ var _deadline_common_static_images_eleven_7_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_deadline_common_static_images_eleven_7_png__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _deadline_common_static_images_eleven_8_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @deadline/common/static/images/eleven/8.png */ "../common/static/images/eleven/8.png");
/* harmony import */ var _deadline_common_static_images_eleven_8_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_deadline_common_static_images_eleven_8_png__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _deadline_common_static_images_eleven_9_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @deadline/common/static/images/eleven/9.png */ "../common/static/images/eleven/9.png");
/* harmony import */ var _deadline_common_static_images_eleven_9_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_deadline_common_static_images_eleven_9_png__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__);
var _jsxFileName = "C:\\Users\\Owner\\Desktop\\deadline\\coming\\nextjs\\pages\\index.js";












 // Language translation files















 // Language translation Config



const messages = {
  en: _deadline_common_data_translation_eleven_en_json__WEBPACK_IMPORTED_MODULE_13__,
  ar: _deadline_common_data_translation_eleven_ar_json__WEBPACK_IMPORTED_MODULE_14__,
  es: _deadline_common_data_translation_eleven_es_json__WEBPACK_IMPORTED_MODULE_15__,
  de: _deadline_common_data_translation_eleven_de_json__WEBPACK_IMPORTED_MODULE_16__,
  zh: _deadline_common_data_translation_eleven_zh_json__WEBPACK_IMPORTED_MODULE_17__,
  he: _deadline_common_data_translation_eleven_he_json__WEBPACK_IMPORTED_MODULE_18__
};
const deadline = new Date(Date.parse(new Date()) + 22 * 24 * 60 * 60 * 1000);

const ParticlesComponent = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(react_particles_js__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: "particle",
      params: {
        particles: {
          number: {
            value: 14,
            density: {
              enable: true,
              value_area: 1400
            }
          },
          shape: {
            type: ['images'],
            images: [{
              src: `${_deadline_common_static_images_eleven_2_png__WEBPACK_IMPORTED_MODULE_22___default.a}`,
              width: 15,
              height: 15
            }, {
              src: `${_deadline_common_static_images_eleven_3_png__WEBPACK_IMPORTED_MODULE_23___default.a}`,
              width: 45,
              height: 40
            }, {
              src: `${_deadline_common_static_images_eleven_6_png__WEBPACK_IMPORTED_MODULE_24___default.a}`,
              width: 26,
              height: 26
            }, {
              src: `${_deadline_common_static_images_eleven_7_png__WEBPACK_IMPORTED_MODULE_25___default.a}`,
              width: 54,
              height: 30
            }, {
              src: `${_deadline_common_static_images_eleven_8_png__WEBPACK_IMPORTED_MODULE_26___default.a}`,
              width: 44,
              height: 30
            }, {
              src: `${_deadline_common_static_images_eleven_9_png__WEBPACK_IMPORTED_MODULE_27___default.a}`,
              width: 50,
              height: 30
            }]
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 1,
              sync: false
            }
          },
          size: {
            value: 10,
            random: false
          },
          line_linked: {
            enable: false
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            bounce: true,
            attract: {
              enable: true,
              rotateX: 100,
              rotateY: 400
            }
          }
        },
        retina_detect: true
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

const IndexPage = () => {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleContact = () => {
    setVisible(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(_deadline_common_LanguageSwitcher_context_language_provider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    messages: messages,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])("link", {
          href: "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])("link", {
          href: "https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])("link", {
          href: "https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_3__["NextSeo"], {
        title: "The most affordable way to buy used cars for anyone.",
        description: "Crasemba the most affordable way to buy used cars for anyone, cheap cars, cheap used cars, used cars, used, bad credit, credit, bad"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(_deadline_common_ui_eleven_style__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(_deadline_common_ui_eleven_style__WEBPACK_IMPORTED_MODULE_10__["ParticleContainer"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(ParticlesComponent, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(_deadline_common_ui_eleven_style__WEBPACK_IMPORTED_MODULE_10__["LogoImageContainer"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: '/eleven',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])("img", {
                src: "carsemba_logo.svg",
                width: 150,
                alt: "logo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_19__["Container"], {
          className: "mainContainer",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(_deadline_common_ui_eleven_style__WEBPACK_IMPORTED_MODULE_10__["MainContentSection"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(_deadline_common_ui_eleven_style__WEBPACK_IMPORTED_MODULE_10__["NormalClockWrapper"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(_deadline_components_NormalClock_NormalClock_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
                countdown: deadline
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(_deadline_common_ui_eleven_style__WEBPACK_IMPORTED_MODULE_10__["ContentWrapper"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
                  id: "ticker"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])("h2", {
                id: "mainMessage",
                style: {
                  textAlign: "left",
                  padding: "20px 0",
                  lineHeight: '1.2em'
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])("b", {
                  style: {
                    color: "#e76f51"
                  },
                  children: "Carsemba Inc."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 65
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])("p", {
                  style: {
                    fontSize: 25,
                    textAlign: "left",
                    lineHeight: '1.3em'
                  },
                  children: "the most affordable way to buy used cars for anyone."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 71
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 17
              }, undefined), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(_deadline_common_ui_eleven_style__WEBPACK_IMPORTED_MODULE_10__["ContactFormWrap"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(_deadline_components_ContactForm_ContactForm__WEBPACK_IMPORTED_MODULE_20__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 19
              }, undefined) : '', !visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(_deadline_common_ui_eleven_style__WEBPACK_IMPORTED_MODULE_10__["NotifyButton"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(_deadline_components_Button__WEBPACK_IMPORTED_MODULE_21__["default"], {
                  type: "submit",
                  title: "notifyText",
                  onClick: toggleContact
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 19
              }, undefined) : '']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(_deadline_common_ui_eleven_style__WEBPACK_IMPORTED_MODULE_10__["FooterSection"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
              id: "copyrightText"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxDEV"])(_deadline_common_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_7__["default"], {
        languageConfig: _deadline_common_LanguageSwitcher_config__WEBPACK_IMPORTED_MODULE_8__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/resolve-rewrites":
/*!************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/resolve-rewrites.js" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "@formatjs/intl-pluralrules/locale-data/ar":
/*!************************************************************!*\
  !*** external "@formatjs/intl-pluralrules/locale-data/ar" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@formatjs/intl-pluralrules/locale-data/ar");

/***/ }),

/***/ "@formatjs/intl-pluralrules/locale-data/de":
/*!************************************************************!*\
  !*** external "@formatjs/intl-pluralrules/locale-data/de" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@formatjs/intl-pluralrules/locale-data/de");

/***/ }),

/***/ "@formatjs/intl-pluralrules/locale-data/en":
/*!************************************************************!*\
  !*** external "@formatjs/intl-pluralrules/locale-data/en" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@formatjs/intl-pluralrules/locale-data/en");

/***/ }),

/***/ "@formatjs/intl-pluralrules/locale-data/es":
/*!************************************************************!*\
  !*** external "@formatjs/intl-pluralrules/locale-data/es" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@formatjs/intl-pluralrules/locale-data/es");

/***/ }),

/***/ "@formatjs/intl-pluralrules/locale-data/he":
/*!************************************************************!*\
  !*** external "@formatjs/intl-pluralrules/locale-data/he" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@formatjs/intl-pluralrules/locale-data/he");

/***/ }),

/***/ "@formatjs/intl-pluralrules/locale-data/zh":
/*!************************************************************!*\
  !*** external "@formatjs/intl-pluralrules/locale-data/zh" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@formatjs/intl-pluralrules/locale-data/zh");

/***/ }),

/***/ "@formatjs/intl-pluralrules/polyfill":
/*!******************************************************!*\
  !*** external "@formatjs/intl-pluralrules/polyfill" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@formatjs/intl-pluralrules/polyfill");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons-kit":
/*!**********************************!*\
  !*** external "react-icons-kit" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "react-icons-kit/ionicons/socialDribbbleOutline":
/*!*****************************************************************!*\
  !*** external "react-icons-kit/ionicons/socialDribbbleOutline" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialDribbbleOutline");

/***/ }),

/***/ "react-icons-kit/ionicons/socialFacebook":
/*!**********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialFacebook" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialFacebook");

/***/ }),

/***/ "react-icons-kit/ionicons/socialGithub":
/*!********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialGithub" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialGithub");

/***/ }),

/***/ "react-icons-kit/ionicons/socialGoogleplusOutline":
/*!*******************************************************************!*\
  !*** external "react-icons-kit/ionicons/socialGoogleplusOutline" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialGoogleplusOutline");

/***/ }),

/***/ "react-icons-kit/ionicons/socialTwitter":
/*!*********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialTwitter" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialTwitter");

/***/ }),

/***/ "react-icons-kit/md/ic_cancel":
/*!***********************************************!*\
  !*** external "react-icons-kit/md/ic_cancel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_cancel");

/***/ }),

/***/ "react-icons-kit/md/ic_check_circle":
/*!*****************************************************!*\
  !*** external "react-icons-kit/md/ic_check_circle" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_check_circle");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-reveal/HeadShake":
/*!*****************************************!*\
  !*** external "react-reveal/HeadShake" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/HeadShake");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly8vLi4vY29tbW9uL0xhbmd1YWdlU3dpdGNoZXIvU3dpdGNoZXJCdXR0b24vU3dpdGNoZXJCdXR0b24uc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbW1vbi9MYW5ndWFnZVN3aXRjaGVyL1N3aXRjaGVyQnV0dG9uL2Nyb3NzLWJ0bi5zdmciLCJ3ZWJwYWNrOi8vLy4uL2NvbW1vbi9MYW5ndWFnZVN3aXRjaGVyL1N3aXRjaGVyQnV0dG9uL2xhbmd1YWdlLWJ0bi5zdmciLCJ3ZWJwYWNrOi8vLy4uL2NvbW1vbi9MYW5ndWFnZVN3aXRjaGVyL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi4vY29tbW9uL0xhbmd1YWdlU3dpdGNoZXIvY29udGV4dC9sYW5ndWFnZS5jb250ZXh0LmpzIiwid2VicGFjazovLy8uLi9jb21tb24vTGFuZ3VhZ2VTd2l0Y2hlci9jb250ZXh0L2xhbmd1YWdlLnByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uLi9jb21tb24vTGFuZ3VhZ2VTd2l0Y2hlci9jb250ZXh0L2xhbmd1YWdlLnJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbW1vbi9MYW5ndWFnZVN3aXRjaGVyL2ZsYWcvY2hpbmEuc3ZnIiwid2VicGFjazovLy8uLi9jb21tb24vTGFuZ3VhZ2VTd2l0Y2hlci9mbGFnL2dlcm1hbnkuc3ZnIiwid2VicGFjazovLy8uLi9jb21tb24vTGFuZ3VhZ2VTd2l0Y2hlci9mbGFnL2lzcmFlbC5zdmciLCJ3ZWJwYWNrOi8vLy4uL2NvbW1vbi9MYW5ndWFnZVN3aXRjaGVyL2ZsYWcvc2F1ZGkucG5nIiwid2VicGFjazovLy8uLi9jb21tb24vTGFuZ3VhZ2VTd2l0Y2hlci9mbGFnL3NwYWluLnN2ZyIsIndlYnBhY2s6Ly8vLi4vY29tbW9uL0xhbmd1YWdlU3dpdGNoZXIvZmxhZy91cy5zdmciLCJ3ZWJwYWNrOi8vLy4uL2NvbW1vbi9MYW5ndWFnZVN3aXRjaGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9jb21tb24vTGFuZ3VhZ2VTd2l0Y2hlci9ydGwuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbW1vbi9kYXRhL3NvY2lhbC1zaGFyZS90aHJlZS5qcyIsIndlYnBhY2s6Ly8vLi4vY29tbW9uL2hvb2tzL3VzZUNsaWNrT3V0c2lkZS5qcyIsIndlYnBhY2s6Ly8vLi4vY29tbW9uL2hvb2tzL3VzZVRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbW1vbi9zdGF0aWMvaW1hZ2VzL2VsZXZlbi8yLnBuZyIsIndlYnBhY2s6Ly8vLi4vY29tbW9uL3N0YXRpYy9pbWFnZXMvZWxldmVuLzMucG5nIiwid2VicGFjazovLy8uLi9jb21tb24vc3RhdGljL2ltYWdlcy9lbGV2ZW4vNi5wbmciLCJ3ZWJwYWNrOi8vLy4uL2NvbW1vbi9zdGF0aWMvaW1hZ2VzL2VsZXZlbi83LnBuZyIsIndlYnBhY2s6Ly8vLi4vY29tbW9uL3N0YXRpYy9pbWFnZXMvZWxldmVuLzgucG5nIiwid2VicGFjazovLy8uLi9jb21tb24vc3RhdGljL2ltYWdlcy9lbGV2ZW4vOS5wbmciLCJ3ZWJwYWNrOi8vLy4uL2NvbW1vbi9zdGF0aWMvaW1hZ2VzL2xvZ29PbmUucG5nIiwid2VicGFjazovLy8uLi9jb21tb24vdWkvZWxldmVuLnN0eWxlLmpzIiwid2VicGFjazovLy8uLi9jb21wb25lbnRzL0FuaW1hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnN0eWxlLmpzIiwid2VicGFjazovLy8uLi9jb21wb25lbnRzL0J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybS9Db25hdGN0Rm9ybS5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybS9Db250YWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvTG9hZGVyL2xvYWRlci5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9Ob3JtYWxDbG9jay9Ob3JtYWxDbG9jay5qcyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9UZXh0RmllbGQvVGV4dEZpZWxkLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250YWluZXIvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29jaWFsU2hhcmUvU29jaWFsU2hhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvbG9jYWxlLWRhdGEvYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ybWF0anMvaW50bC1wbHVyYWxydWxlcy9sb2NhbGUtZGF0YS9kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3JtYXRqcy9pbnRsLXBsdXJhbHJ1bGVzL2xvY2FsZS1kYXRhL2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvbG9jYWxlLWRhdGEvZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ybWF0anMvaW50bC1wbHVyYWxydWxlcy9sb2NhbGUtZGF0YS9oZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3JtYXRqcy9pbnRsLXBsdXJhbHJ1bGVzL2xvY2FsZS1kYXRhL3poXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNlb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zLWtpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zLWtpdC9pb25pY29ucy9zb2NpYWxEcmliYmJsZU91dGxpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvaW9uaWNvbnMvc29jaWFsRmFjZWJvb2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvaW9uaWNvbnMvc29jaWFsR2l0aHViXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMta2l0L2lvbmljb25zL3NvY2lhbEdvb2dsZXBsdXNPdXRsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMta2l0L2lvbmljb25zL3NvY2lhbFR3aXR0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfY2FuY2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMta2l0L21kL2ljX2NoZWNrX2NpcmNsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWludGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wYXJ0aWNsZXMtanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZXZlYWwvRmFkZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJldmVhbC9IZWFkU2hha2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkFuaW1hdGlvbiIsImtleWZyYW1lcyIsIkVudmF0b0J1dHRvbldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJpZCIsImxhbmd1YWdlIiwiaWNvbiIsInVzIiwiZ2VybWFueSIsInNwYWluIiwic2F1ZGkiLCJjaGluZXNlIiwiaXNyYWVsIiwiTGFuZ3VhZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInJlcXVpcmUiLCJMYW5ndWFnZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJtZXNzYWdlcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwibGFuZ3VhZ2VSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwidG9nZ2xlTGFuZ3VhZ2UiLCJsYW5nIiwidHlwZSIsInBheWxvYWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidXNlRWZmZWN0IiwibG9jYWxMYW5nIiwiZ2V0SXRlbSIsIm5hdmlnYXRvciIsInNwbGl0IiwiYWN0aW9uIiwiTGFuZ3VhZ2VTd2l0Y2hlciIsImxhbmd1YWdlQ29uZmlnIiwidXNlQ29udGV4dCIsImNvbnRhaW5lciIsInVzZVJlZiIsInNob3dTd2l0Y2hlciIsInNldFNob3dTd2l0Y2hlciIsInVzZVN0YXRlIiwiaGFuZGxlT3V0c2lkZUNsaWNrIiwidXNlQ2xpY2tPdXRzaWRlIiwiaGFuZGxlU3dpdGNoZXIiLCJ1c2VDYWxsYmFjayIsIkNyb3NzSW1hZ2UiLCJMYW5nSW1hZ2UiLCJTZWxlY3RMYW5ndWFnZSIsImNvbmZpZyIsImhhbmRsZVRvZ2dsZUxhbmd1YWdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIml0ZW0iLCJpc1NlbGVjdGVkIiwicG9pbnRlckV2ZW50cyIsIkxhbmd1YWdlQnV0dG9uIiwiYnV0dG9uIiwiU3dpdGNoZXJDb250YWluZXIiLCJTd2l0Y2hlckhlYWRlciIsImgzIiwiU3dpdGNoZXJDb250ZW50IiwiU3dpdGNoZXJGb290ZXIiLCJXcmFwcGVyIiwiSW5qZWN0UlRMIiwiU09DSUFMX1BST0ZJTEVTIiwic29jaWFsRmFjZWJvb2siLCJ1cmwiLCJzb2NpYWxUd2l0dGVyIiwic29jaWFsR2l0aHViIiwic29jaWFsR29vZ2xlcGx1c091dGxpbmUiLCJvbiIsIm9iaiIsImFyZ3MiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRlZmF1bHRFdmVudHMiLCJ1c2VPdXRzaWRlQ2xpY2siLCJyZWYiLCJvbk91dHNpZGVDbGljayIsImV2ZW50cyIsInNhdmVkQ2FsbGJhY2siLCJjdXJyZW50IiwiaGFuZGxlciIsImV2ZW50IiwiZWwiLCJjb250YWlucyIsImV2ZW50TmFtZSIsImRvY3VtZW50IiwidXNlVGltZW91dCIsImNiIiwidGltZW91dERlbGF5TXMiLCJpc1RpbWVvdXRBY3RpdmUiLCJzZXRJc1RpbWVvdXRBY3RpdmUiLCJzYXZlZFJlZkNhbGxiYWNrIiwiY2FsbGJhY2siLCJjbGVhciIsInN0YXJ0IiwidGltZW91dCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzdG9wIiwiaXNBY3RpdmUiLCJMb2dvSW1hZ2VDb250YWluZXIiLCJNYWluV3JhcHBlciIsInNlY3Rpb24iLCJQYXJ0aWNsZUNvbnRhaW5lciIsIk5vcm1hbENsb2NrV3JhcHBlciIsIk1haW5Db250ZW50U2VjdGlvbiIsIkNvbnRlbnRXcmFwcGVyIiwiQ29udGFjdEZvcm1XcmFwIiwiTm90aWZ5QnV0dG9uIiwiRm9vdGVyU2VjdGlvbiIsInNwaW5uZXIiLCJBbmltU3Bpbm5lciIsImNzcyIsIkJ1dHRvblN0eWxlIiwiZGlzcGxheU5hbWUiLCJCdXR0b24iLCJ0aXRsZSIsImRpc2FibGVkIiwiaWNvblBvc2l0aW9uIiwib25DbGljayIsImxvYWRlciIsImxvYWRlckNvbG9yIiwiaXNNYXRlcmlhbCIsImlzTG9hZGluZyIsImNsYXNzTmFtZSIsInByb3BzIiwiYWRkQWxsQ2xhc3NlcyIsInB1c2giLCJidXR0b25JY29uIiwicG9zaXRpb24iLCJqb2luIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2YiLCJvYmplY3QiLCJib29sIiwidmFyaWFudCIsImNvbG9ycyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJGb3JtIiwiZm9ybSIsIkNvbnRhY3RGb3JtIiwic2V0VmFsdWUiLCJlcnJvciIsInNldEVycm9yIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJwZW5kaW5nIiwic2V0UGVuZGluZyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2hhbmdlIiwiTG9hZGVyIiwid2lkdGgiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJoZWlnaHQiLCJMb2FkZXJTdHlsZSIsInNwYW4iLCJTdGF0aWNDYXJkIiwiZGlnaXQiLCJOb3JtYWxVbml0Q29udGFpbmVyIiwidW5pdCIsImNvdW50ZG93biIsImN1cnJlbnREaWdpdCIsInByZXZpb3VzRGlnaXQiLCJnZXRUaW1lUmVtYWluaW5nIiwiZW5kdGltZSIsInQiLCJEYXRlIiwicGFyc2UiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInRpbWUiLCJOb3JtYWxDbG9jayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJjb21wb25lbnREaWRNb3VudCIsInRpbWVySUQiLCJzZXRJbnRlcnZhbCIsInVwZGF0ZVRpbWUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFySW50ZXJ2YWwiLCJzZXRTdGF0ZSIsInJlbmRlciIsImRpdmlkZXIiLCJGaWVsZFdyYXBwZXIiLCJMYWJlbCIsImxhYmVsIiwiSGVscFRleHQiLCJJbnB1dEZlZWRiYWNrIiwiSW5wdXQiLCJpbnB1dCIsIlRleHRGaWVsZCIsImhlbHBUZXh0IiwiZGVmYXVsdExhYmVsIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwib25CbHVyIiwib25Gb2N1cyIsIm9uQ2hhbmdlIiwiZXJyb3JNZXNzYWdlIiwic3VjY2Vzc01lc3NhZ2UiLCJ0cmltIiwiaWNfY2FuY2VsIiwiaWNfY2hlY2tfY2lyY2xlIiwiQ29udGFpbmVyIiwiSXRlbSIsIlNvY2lhbFNoYXJlIiwiaXRlbXMiLCJpY29uU2l6ZSIsInNvY2lhbERyaWJiYmxlT3V0bGluZSIsImVuIiwibG9jYWxFbmciLCJhciIsImxvY2FsQXIiLCJlcyIsImxvY2FsRXMiLCJkZSIsImxvY2FsRGUiLCJ6aCIsImxvY2FsQ24iLCJoZSIsImxvY2FsSWwiLCJkZWFkbGluZSIsIlBhcnRpY2xlc0NvbXBvbmVudCIsInBhcnRpY2xlcyIsImRlbnNpdHkiLCJlbmFibGUiLCJ2YWx1ZV9hcmVhIiwic2hhcGUiLCJpbWFnZXMiLCJzcmMiLCJQYXJ0aWNsZTIiLCJQYXJ0aWNsZTMiLCJQYXJ0aWNsZTYiLCJQYXJ0aWNsZTciLCJQYXJ0aWNsZTgiLCJQYXJ0aWNsZTkiLCJvcGFjaXR5IiwicmFuZG9tIiwiYW5pbSIsInNwZWVkIiwib3BhY2l0eV9taW4iLCJzeW5jIiwic2l6ZSIsImxpbmVfbGlua2VkIiwibW92ZSIsImRpcmVjdGlvbiIsInN0cmFpZ2h0IiwiYm91bmNlIiwiYXR0cmFjdCIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicmV0aW5hX2RldGVjdCIsIkluZGV4UGFnZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidG9nZ2xlQ29udGFjdCIsInRleHRBbGlnbiIsInBhZGRpbmciLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHNFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsbUVBQUgsdUZBQWY7QUFTQSxNQUFNQyxtQkFBbUIsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5bUJBcUJISixTQXJCRyxDQUF6QjtBQWlEZUUsa0ZBQWYsRTs7Ozs7Ozs7Ozs7QUM1REEscUNBQXFDLGdsQzs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLDR0Rzs7Ozs7Ozs7Ozs7O0FDQXJDO0FBQUE7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QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL19uZXh0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBBbmltYXRpb24gPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KSBzY2FsZSguOCk7XHJcbiAgfVxyXG4gIHRve1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMSk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRW52YXRvQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMzNweDtcclxuICByaWdodDogMjBweDtcclxuICB3aWR0aDogNjVweDtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogOTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNDcsIDEyOCwgMjM3KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICYuc3RvcEFuaW1hdGlvbiB7XHJcbiAgICBhbmltYXRpb246IDA7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjJweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBhbmltYXRpb246IDAuN3MgJHtBbmltYXRpb259IGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuZW52YXRvLWJ1eS1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnZhdG9CdXR0b25XcmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJajgrRFFvOGMzWm5JSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlrTmhjR0ZmTVNJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpSUhacFpYZENiM2c5SWpBZ01DQXlNVEl1T1RneUlESXhNaTQ1T0RJaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURJeE1pNDVPRElnTWpFeUxqazRNanNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaUlIZHBaSFJvUFNJMU1USndlQ0lnYUdWcFoyaDBQU0kxTVRKd2VDSWdZMnhoYzNNOUlpSStQR2MrUEdjZ2FXUTlJa05zYjNObElqNE5DZ2s4Y0dGMGFDQmtQU0pOTVRNeExqZ3dOQ3d4TURZdU5Ea3hiRGMxTGprek5pMDNOUzQ1TXpaak5pNDVPUzAyTGprNUxEWXVPVGt0TVRndU16SXpMREF0TWpVdU16RXlJQ0FnWXkwMkxqazVMVFl1T1RrdE1UZ3VNekl5TFRZdU9Ua3RNalV1TXpFeUxEQnNMVGMxTGprek55dzNOUzQ1TXpkTU16QXVOVFUwTERVdU1qUXlZeTAyTGprNUxUWXVPVGt0TVRndU16SXlMVFl1T1RrdE1qVXVNekV5TERCakxUWXVPVGc1TERZdU9Ua3ROaTQ1T0Rrc01UZ3VNekl6TERBc01qVXVNekV5SUNBZ2JEYzFMamt6Tnl3M05TNDVNelpNTlM0eU5ESXNNVGd5TGpReU4yTXROaTQ1T0Rrc05pNDVPUzAyTGprNE9Td3hPQzR6TWpNc01Dd3lOUzR6TVRKak5pNDVPU3cyTGprNUxERTRMak15TWl3MkxqazVMREkxTGpNeE1pd3diRGMxTGprek55MDNOUzQ1TXpkc056VXVPVE0zTERjMUxqa3pOeUFnSUdNMkxqazRPU3cyTGprNUxERTRMak15TWl3MkxqazVMREkxTGpNeE1pd3dZell1T1RrdE5pNDVPU3cyTGprNUxURTRMak15TWl3d0xUSTFMak14TWt3eE16RXVPREEwTERFd05pNDBPVEY2SWlCa1lYUmhMVzl5YVdkcGJtRnNQU0lqTURBd01EQXdJaUJqYkdGemN6MGlZV04wYVhabExYQmhkR2dpSUdSaGRHRXRiMnhrWDJOdmJHOXlQU0lqTURBd01EQXdJaUJtYVd4c1BTSWpSa1pHUmtaR0lpOCtEUW84TDJjK1BDOW5QaUE4TDNOMlp6NE5DZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJajgrRFFvOGMzWm5JSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlreGhlV1Z5WHpFaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdOVEV5SURVeE1pSWdjM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ05URXlJRFV4TWpzaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlJSGRwWkhSb1BTSTFNVEp3ZUNJZ2FHVnBaMmgwUFNJMU1USndlQ0lnWTJ4aGMzTTlJaUkrUEdjK1BHYytEUW9KUEdjK0RRb0pDVHh3YjJ4NVoyOXVJSEJ2YVc1MGN6MGlNVE00TGpjeExERXpOeUF4TXpJdU1qa3NNVE0zSURFeU1DNHlPVE1zTVRrM0lERTFNQzQzTURjc01UazNJQ0FnSWlCa1lYUmhMVzl5YVdkcGJtRnNQU0lqTURBd01EQXdJaUJqYkdGemN6MGlZV04wYVhabExYQmhkR2dpSUdSaGRHRXRiMnhrWDJOdmJHOXlQU0lqTURBd01EQXdJaUJtYVd4c1BTSWpSa1pHUmtaR0lpOCtEUW9KUEM5blBnMEtQQzluUGp4blBnMEtDVHhuUGcwS0NRazhjR0YwYUNCa1BTSk5Nemd4TGpNM05Dd3lOVGRqTmk0ME56Y3NNVGN1TXprNUxERTFMakE1TWl3ek1TNDBPRE1zTWpRdU5qSTJMRFF6TGpRMk4yTTVMalV6TkMweE1TNDVPRFFzTVRrdU1UUTVMVEkyTGpBMk9Td3lOUzQyTWpZdE5ETXVORFkzU0RNNE1TNHpOelI2SWlCa1lYUmhMVzl5YVdkcGJtRnNQU0lqTURBd01EQXdJaUJqYkdGemN6MGlZV04wYVhabExYQmhkR2dpSUdSaGRHRXRiMnhrWDJOdmJHOXlQU0lqTURBd01EQXdJaUJtYVd4c1BTSWpSa1pHUmtaR0lpOCtEUW9KUEM5blBnMEtQQzluUGp4blBnMEtDVHhuUGcwS0NRazhjR0YwYUNCa1BTSk5ORFkzTERreFNESTRNQzQzTVRkc016Z3VPRFF5TERNeE1TNDJOemxqTUM0Mk9EY3NNVEl1TnpRNExUSXVOems0TERJMExqYzFMVEV4TGpFeE9Dd3pOQzR4TkRaTU1qUXlMalkyTXl3MU1USklORFkzWXpJMExqZ3hOQ3d3TERRMUxUSXdMakU0Tml3ME5TMDBOVll4TXpjZ0lDQWdRelV4TWl3eE1USXVNVGcyTERRNU1TNDRNVFFzT1RFc05EWTNMRGt4ZWlCTk5EWTNMREkxTjJndE5DNHdNRFpqTFRndU5UTTFMREkzTGpNNE15MHlNaTR3Tnl3ME9DNDRNUzB6Tmk0eE16WXNOalV1TnpBeUlDQWdJR014TVM0d01Ua3NNVEF1TURjMExESXlMamd3TWl3eE9DNHpNemdzTXpRdU5URTNMREkzTGpVNU5HTTJMalEyTERVdU1UY3hMRGN1TlRFMUxERTBMall3TkN3eUxqTXlPU3d5TVM0d056bGpMVFV1TVRZeUxEWXVORFkxTFRFMExqWXpNaXczTGpVeE15MHlNUzR3Tnprc01pNHpNamtnSUNBZ1l5MHhNaTQzTWprdE1UQXVNRFEzTFRJMExqWTNOeTB4T0M0ME5UY3RNell1TmpJMUxUSTVMalF5TVdNdE1URXVPVFE0TERFd0xqazJOQzB5TWk0NE9UWXNNVGt1TXpjMExUTTFMall5TlN3eU9TNDBNakZqTFRZdU5EUTNMRFV1TVRnMExURTFMamt4Tnl3MExqRXpOaTB5TVM0d056a3RNaTR6TWprZ0lDQWdZeTAxTGpFNE5pMDJMalEzTlMwMExqRXpNUzB4TlM0NU1EZ3NNaTR6TWprdE1qRXVNRGM1WXpFeExqY3hOUzA1TGpJMU5pd3lNaTQwT1RndE1UY3VOVElzTXpNdU5URTNMVEkzTGpVNU5HTXRNVFF1TURZMkxURTJMamc1TVMweU5pNDJNREl0TXpndU16RTRMVE0xTGpFek5pMDJOUzQzTURJZ0lDQWdTRE0wTm1NdE9DNHlPVEVzTUMweE5TMDJMamN3T1MweE5TMHhOWE0yTGpjd09TMHhOU3d4TlMweE5XZzBOWFl0TVRWak1DMDRMakk1TVN3MkxqY3dPUzB4TlN3eE5TMHhOV000TGpJNU1Td3dMREUxTERZdU56QTVMREUxTERFMWRqRTFhRFEyWXpndU1qa3hMREFzTVRVc05pNDNNRGtzTVRVc01UVWdJQ0FnVXpRM05TNHlPVEVzTWpVM0xEUTJOeXd5TlRkNklpQmtZWFJoTFc5eWFXZHBibUZzUFNJak1EQXdNREF3SWlCamJHRnpjejBpWVdOMGFYWmxMWEJoZEdnaUlHUmhkR0V0YjJ4a1gyTnZiRzl5UFNJak1EQXdNREF3SWlCbWFXeHNQU0lqUmtaR1JrWkdJaTgrRFFvSlBDOW5QZzBLUEM5blBqeG5QZzBLQ1R4blBnMEtDUWs4Y0dGMGFDQmtQU0pOTWpRMExqRTJOQ3d6T1M0ME1UbERNalF4TGpNMk5pd3hOaTQ1TkRnc01qSXlMakUyTWl3d0xERTVPUzQxTVRZc01FZzBOVU15TUM0eE9EWXNNQ3d3TERJd0xqRTROaXd3TERRMWRqTXpNbU13TERJMExqZ3hOQ3d5TUM0eE9EWXNORFVzTkRVc05EVWdJQ0FnWXpnNUxqWTNMREFzTVRVMExqRTNOeXd3TERJek5pNDFOVEVzTUdNMExqTTNOaTAxTGpBd01pdzRMakEwTkMwNExqRXpOQ3c0TGpFNU9TMHhOQzQyTmpORE1qZzVMamM0T0N3ME1EVXVOeXd5TkRRdU16WTNMRFF4TGpBME15d3lORFF1TVRZMExETTVMalF4T1hvZ0lDQWdJRTB4T0RNdU9UUTBMREk0Tmk0M01EZGpMVGN1T1RVMExERXVOak0zTFRFMkxqQXhNUzB6TGpVeU55MHhOeTQyTlRFdE1URXVOell6VERFMU5pNDNNRFlzTWpJM2FDMDBNaTQwTVRGc0xUa3VOVGczTERRM0xqazBOQ0FnSUNCakxURXVOakV4TERndU1URTFMVGt1TkRNMExERXpMalEwTnkweE55NDJOVEVzTVRFdU56WXpZeTA0TGpFeE5TMHhMall5TmkweE15NHpPRGt0T1M0MU1qRXRNVEV1TnpZekxURTNMalkxTVd3eU9TNDVPVGt0TVRVd0lDQWdJRU14TURZdU5qazVMREV4TWk0d05UUXNNVEV5TGpnMU1pd3hNRGNzTVRJd0xERXdOMmd6TVdNM0xqRTBPQ3d3TERFekxqTXdNU3cxTGpBMU5Dd3hOQzQzTURjc01USXVNRFUyYkRNd0xERTFNQ0FnSUNCRE1UazNMak16TXl3eU56Y3VNVGcyTERFNU1pNHdOaXd5T0RVdU1EZ3hMREU0TXk0NU5EUXNNamcyTGpjd04zb2lJR1JoZEdFdGIzSnBaMmx1WVd3OUlpTXdNREF3TURBaUlHTnNZWE56UFNKaFkzUnBkbVV0Y0dGMGFDSWdaR0YwWVMxdmJHUmZZMjlzYjNJOUlpTXdNREF3TURBaUlHWnBiR3c5SWlOR1JrWkdSa1lpTHo0TkNnazhMMmMrRFFvOEwyYytQR2MrRFFvSlBHYytEUW9KQ1R4d1lYUm9JR1E5SWsweE56VXVNall4TERRMU1td3lMalUzTkN3eU1DNDFPREZqTVM0M01UWXNNVE11TnpnekxERXdMamczTkN3eU55NDRNemdzTWpVdU9UTTRMRE0wTGpnMU5tTXlPQzQwTWpndE16RXVNamswTERFeExqSXlPUzB4TWk0ek5qSXNOVEF1TXpVNUxUVTFMalF6TjBneE56VXVNall4ZWlBZ0lDQWlJR1JoZEdFdGIzSnBaMmx1WVd3OUlpTXdNREF3TURBaUlHTnNZWE56UFNKaFkzUnBkbVV0Y0dGMGFDSWdaR0YwWVMxdmJHUmZZMjlzYjNJOUlpTXdNREF3TURBaUlHWnBiR3c5SWlOR1JrWkdSa1lpTHo0TkNnazhMMmMrRFFvOEwyYytQQzluUGlBOEwzTjJaejROQ2c9PVwiIiwiaW1wb3J0IHVzIGZyb20gJy4vZmxhZy91cy5zdmcnO1xyXG5pbXBvcnQgZ2VybWFueSBmcm9tICcuL2ZsYWcvZ2VybWFueS5zdmcnO1xyXG5pbXBvcnQgc3BhaW4gZnJvbSAnLi9mbGFnL3NwYWluLnN2Zyc7XHJcbmltcG9ydCBzYXVkaSBmcm9tICcuL2ZsYWcvc2F1ZGkucG5nJztcclxuaW1wb3J0IGNoaW5lc2UgZnJvbSAnLi9mbGFnL2NoaW5hLnN2Zyc7XHJcbmltcG9ydCBpc3JhZWwgZnJvbSAnLi9mbGFnL2lzcmFlbC5zdmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIGlkOiAnZW4nLFxyXG4gICAgbGFuZ3VhZ2U6ICdlbicsXHJcbiAgICBpY29uOiB1cyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnZGUnLFxyXG4gICAgbGFuZ3VhZ2U6ICdkZScsXHJcbiAgICBpY29uOiBnZXJtYW55LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdlcycsXHJcbiAgICBsYW5ndWFnZTogJ2VzJyxcclxuICAgIGljb246IHNwYWluLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdhcicsXHJcbiAgICBsYW5ndWFnZTogJ2FyJyxcclxuICAgIGljb246IHNhdWRpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICd6aCcsXHJcbiAgICBsYW5ndWFnZTogJ3poJyxcclxuICAgIGljb246IGNoaW5lc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2hlJyxcclxuICAgIGxhbmd1YWdlOiAnaGUnLFxyXG4gICAgaWNvbjogaXNyYWVsLFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMYW5ndWFnZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VDb250ZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGFuZ3VhZ2VDb250ZXh0IGZyb20gJy4vbGFuZ3VhZ2UuY29udGV4dCc7XHJcbmltcG9ydCBsYW5ndWFnZVJlZHVjZXIsIHsgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9sYW5ndWFnZS5yZWR1Y2VyJztcclxuaW1wb3J0IHsgSW50bFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtaW50bCc7XHJcbmltcG9ydCB7IEluamVjdFJUTCB9IGZyb20gJy4uL3J0bCc7XHJcblxyXG5yZXF1aXJlKCdAZm9ybWF0anMvaW50bC1wbHVyYWxydWxlcy9wb2x5ZmlsbCcpO1xyXG5yZXF1aXJlKCdAZm9ybWF0anMvaW50bC1wbHVyYWxydWxlcy9sb2NhbGUtZGF0YS9hcicpO1xyXG5yZXF1aXJlKCdAZm9ybWF0anMvaW50bC1wbHVyYWxydWxlcy9sb2NhbGUtZGF0YS9lbicpO1xyXG5yZXF1aXJlKCdAZm9ybWF0anMvaW50bC1wbHVyYWxydWxlcy9sb2NhbGUtZGF0YS9kZScpO1xyXG5yZXF1aXJlKCdAZm9ybWF0anMvaW50bC1wbHVyYWxydWxlcy9sb2NhbGUtZGF0YS9lcycpO1xyXG5yZXF1aXJlKCdAZm9ybWF0anMvaW50bC1wbHVyYWxydWxlcy9sb2NhbGUtZGF0YS96aCcpO1xyXG5yZXF1aXJlKCdAZm9ybWF0anMvaW50bC1wbHVyYWxydWxlcy9sb2NhbGUtZGF0YS9oZScpO1xyXG5cclxuY29uc3QgTGFuZ3VhZ2VQcm92aWRlciA9ICh7IGNoaWxkcmVuLCBtZXNzYWdlcyB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGxhbmd1YWdlUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCB0b2dnbGVMYW5ndWFnZSA9IChsYW5nKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdDVVJSRU5UX0xBTkdVQUdFJywgcGF5bG9hZDogbGFuZyB9KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5nJywgbGFuZyk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbG9jYWxMYW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmcnKTtcclxuICAgIGlmIChsb2NhbExhbmcpIHtcclxuICAgICAgdG9nZ2xlTGFuZ3VhZ2UobG9jYWxMYW5nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvZ2dsZUxhbmd1YWdlKG5hdmlnYXRvci5sYW5ndWFnZS5zcGxpdCgnLScpWzBdKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCB0b2dnbGVMYW5ndWFnZSwgZGlzcGF0Y2ggfX0+XHJcbiAgICAgIDxJbnRsUHJvdmlkZXIgbG9jYWxlPXtzdGF0ZS5sYW5nfSBtZXNzYWdlcz17bWVzc2FnZXNbc3RhdGUubGFuZ119PlxyXG4gICAgICAgIDxJbmplY3RSVEwgbGFuZz17c3RhdGUubGFuZ30+e2NoaWxkcmVufTwvSW5qZWN0UlRMPlxyXG4gICAgICA8L0ludGxQcm92aWRlcj5cclxuICAgIDwvTGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlUHJvdmlkZXI7XHJcbiIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbGFuZzogJ2VuJyxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGFuZ3VhZ2VSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdDVVJSRU5UX0xBTkdVQUdFJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsYW5nOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0TkNqd2hMUzBnUjJWdVpYSmhkRzl5T2lCQlpHOWlaU0JKYkd4MWMzUnlZWFJ2Y2lBeE9TNHdMakFzSUZOV1J5QkZlSEJ2Y25RZ1VHeDFaeTFKYmlBdUlGTldSeUJXWlhKemFXOXVPaUEyTGpBd0lFSjFhV3hrSURBcElDQXRMVDROQ2p4emRtY2dkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlUR0Y1WlhKZk1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpRFFvSklIWnBaWGRDYjNnOUlpMDBPU0F4TkRFZ05URXlJRFV4TWlJZ2MzUjViR1U5SW1WdVlXSnNaUzFpWVdOclozSnZkVzVrT201bGR5QXRORGtnTVRReElEVXhNaUExTVRJN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajROQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStEUW9KTG5OME1IdG1hV3hzT2lORU9EQXdNamM3ZlEwS0NTNXpkREY3Wm1sc2JEb2pSa1pFUVRRME8zME5Dand2YzNSNWJHVStEUW84WTJseVkyeGxJR05zWVhOelBTSnpkREFpSUdONFBTSXlNRGNpSUdONVBTSXpPVGNpSUhJOUlqSTFOaUl2UGcwS1BHYytEUW9KUEhCdmJIbG5iMjRnWTJ4aGMzTTlJbk4wTVNJZ2NHOXBiblJ6UFNJNU1TNHhMREk1Tmk0NElERXhNeTR5TERNMk5DNDRJREU0TkM0M0xETTJOQzQ0SURFeU5pNDVMRFF3Tmk0NUlERTBPU3cwTnpRdU9TQTVNUzR4TERRek1pNDVJRE16TGpJc05EYzBMamtnTlRVdU5DdzBNRFl1T1NBTkNna0pMVEl1TlN3ek5qUXVPQ0EyT1N3ek5qUXVPQ0FKSWk4K0RRb0pQSEJ2YkhsbmIyNGdZMnhoYzNNOUluTjBNU0lnY0c5cGJuUnpQU0l5TlRRdU5TdzFNemN1TlNBeU16Y3VOaXcxTVRZdU55QXlNVEl1Tml3MU1qWXVOQ0F5TWpjdU1TdzFNRE11T1NBeU1UQXVNaXcwT0RNZ01qTTJMakVzTkRnNUxqa2dNalV3TGpjc05EWTNMalFnTWpVeUxqRXNORGswTGpJZ0RRb0pDVEkzT0M0eExEVXdNUzR4SURJMU15dzFNVEF1TnlBSklpOCtEUW9KUEhCdmJIbG5iMjRnWTJ4aGMzTTlJbk4wTVNJZ2NHOXBiblJ6UFNJeU9EZ3VNU3cwTnpZdU5TQXlPVFl1TVN3ME5UQXVPU0F5TnpRdU1pdzBNelV1TkNBek1ERXNORE0xSURNd09DNDVMRFF3T1M0MElETXhOeTQyTERRek5DNDRJRE0wTkM0MExEUXpOQzQxSURNeU1pNDVMRFExTUM0MUlBMEtDUWt6TXpFdU5TdzBOelV1T1NBek1Ea3VOaXcwTmpBdU5DQUpJaTgrRFFvSlBIQnZiSGxuYjI0Z1kyeGhjM005SW5OME1TSWdjRzlwYm5SelBTSXpNek11TkN3ek1qZ3VPU0F6TWpFdU5pd3pOVE1nTXpRd0xqZ3NNemN4TGpjZ016RTBMak1zTXpZM0xqa2dNekF5TGpVc016a3hMamtnTWprM0xqa3NNelkxTGpVZ01qY3hMak1zTXpZeExqY2dNamsxTGpFc016UTVMaklnRFFvSkNUSTVNQzQxTERNeU1pNDNJRE13T1M0M0xETTBNUzQwSUFraUx6NE5DZ2s4Y0c5c2VXZHZiaUJqYkdGemN6MGljM1F4SWlCd2IybHVkSE05SWpJMU5TNHlMREkxTlM0NUlESTFNeTR5TERJNE1pNDJJREkzT0M0eExESTVNaTQzSURJMU1pd3lPVGt1TVNBeU5UQXVNU3d6TWpVdU9TQXlNellzTXpBekxqRWdNakE1TGprc016QTVMalVnTWpJM0xqSXNNamc1SUEwS0NRa3lNVE1zTWpZMkxqTWdNak0zTGprc01qYzJMalFnQ1NJdlBnMEtQQzluUGcwS1BDOXpkbWMrRFFvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZzBLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREU1TGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnMEtQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJR2xrUFNKTVlYbGxjbDh4SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSU5DZ2tnZG1sbGQwSnZlRDBpTUNBd0lEVXhNaUExTVRJaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURVeE1pQTFNVEk3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNE5Danh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU5HUmtSQk5EUTdJaUJrUFNKTk1UVXVPVEl6TERNME5TNHdORE5ETlRJdU1EazBMRFEwTWk0MU1qY3NNVFExTGpreU9TdzFNVElzTWpVMkxEVXhNbk15TURNdU9UQTJMVFk1TGpRM015d3lOREF1TURjM0xURTJOaTQ1TlRkTU1qVTJMRE15TWk0M09ETU5DZ2xNTVRVdU9USXpMRE0wTlM0d05ETjZJaTgrRFFvOGNHRjBhQ0JrUFNKTk1qVTJMREJETVRRMUxqa3lPU3d3TERVeUxqQTVOQ3cyT1M0ME56SXNNVFV1T1RJekxERTJOaTQ1TlRkTU1qVTJMREU0T1M0eU1UZHNNalF3TGpBM055MHlNaTR5TmpGRE5EVTVMamt3Tml3Mk9TNDBOeklzTXpZMkxqQTNNU3d3TERJMU5pd3dlaUl2UGcwS1BIQmhkR2dnYzNSNWJHVTlJbVpwYkd3NkkwUTRNREF5TnpzaUlHUTlJazB4TlM0NU1qTXNNVFkyTGprMU4wTTFMall6TXl3eE9UUXVOamtzTUN3eU1qUXVOamcyTERBc01qVTJjelV1TmpNekxEWXhMak14TERFMUxqa3lNeXc0T1M0d05ETm9ORGd3TGpFMU5RMEtDVU0xTURZdU16WTRMRE14Tnk0ek1TdzFNVElzTWpnM0xqTXhOQ3cxTVRJc01qVTJjeTAxTGpZek1pMDJNUzR6TVMweE5TNDVNak10T0RrdU1EUXpTREUxTGpreU0zb2lMejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZzBLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREU1TGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnMEtQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJR2xrUFNKTVlYbGxjbDh4SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSU5DZ2tnZG1sbGQwSnZlRDBpTUNBd0lEVXhNaUExTVRJaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURVeE1pQTFNVEk3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNE5DanhqYVhKamJHVWdjM1I1YkdVOUltWnBiR3c2STBZd1JqQkdNRHNpSUdONFBTSXlOVFlpSUdONVBTSXlOVFlpSUhJOUlqSTFOaUl2UGcwS1BHYytEUW9KUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2SXpBd05USkNORHNpSUdROUlrMHpOVEl1TXprekxESXdNQzR6TkRoSU1qZzRMakV6VERJMU5pd3hORFF1TmprMmJDMHpNaTR4TWprc05UVXVOalV5YUMwMk5DNHlOalJNTVRreExqYzBNU3d5TlRac0xUTXlMakV6TkN3MU5TNDJOVEpvTmpRdU1qWTBEUW9KQ1V3eU5UWXNNelkzTGpNd05Hd3pNaTR4TXkwMU5TNDJOVEpvTmpRdU1qWXpURE15TUM0eU5Ua3NNalUyVERNMU1pNHpPVE1zTWpBd0xqTTBPSG9nVFRJNU5TNDBOelVzTWpVMmJDMHhPUzQzTXpZc016UXVNVGc0YUMwek9TNDBOelZNTWpFMkxqVXlOU3d5TlRac01Ua3VOek00TFRNMExqRTRPQTBLQ1Fsb016a3VORGMxVERJNU5TNDBOelVzTWpVMmVpQk5NalUyTERFNE55NDJNak5zTnk0ek5EWXNNVEl1TnpJMGFDMHhOQzQyT1V3eU5UWXNNVGczTGpZeU0zb2dUVEU1Tmk0M09EWXNNakl4TGpneE1tZ3hOQzQyT1RKc0xUY3VNelEyTERFeUxqY3lORXd4T1RZdU56ZzJMREl5TVM0NE1USjZEUW9KQ1NCTk1UazJMamM0Tml3eU9UQXVNVGc0YkRjdU16UTNMVEV5TGpjeU5HdzNMak0wTml3eE1pNDNNalJJTVRrMkxqYzRObm9nVFRJMU5pd3pNalF1TXpjMmJDMDNMak0wTlMweE1pNDNNalJvTVRRdU5qa3hUREkxTml3ek1qUXVNemMyZWlCTk16RTFMakl4TkN3eU9UQXVNVGc0YUMweE5DNDJPVElOQ2drSmJEY3VNelEzTFRFeUxqY3lORXd6TVRVdU1qRTBMREk1TUM0eE9EaDZJRTB6TURBdU5USXlMREl5TVM0NE1USm9NVFF1TmpreWJDMDNMak0wTml3eE1pNDNNalJNTXpBd0xqVXlNaXd5TWpFdU9ERXllaUl2UGcwS0NUeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTXdNRFV5UWpRN0lpQmtQU0pOTkRFMUxqTTFOeXcxTlM0Mk5USklPVFl1TmpRell5MHlNeTR6TmpNc01UZ3VOakE0TFRRekxqTTVPU3cwTVM0eU1TMDFPUzR3Tmprc05qWXVOemd6YURRek5pNDROVElOQ2drSlF6UTFPQzQzTlRVc09UWXVPRFl6TERRek9DNDNNVGtzTnpRdU1qWXNOREUxTGpNMU55dzFOUzQyTlRKNklpOCtEUW9KUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2SXpBd05USkNORHNpSUdROUlrMDVOaTQyTkRNc05EVTJMak0wT0dnek1UZ3VOekV6WXpJekxqTTJNeTB4T0M0Mk1EZ3NORE11TXprNUxUUXhMakl4TERVNUxqQTJPUzAyTmk0M09ETklNemN1TlRjMERRb0pDVU0xTXk0eU5EVXNOREUxTGpFek55dzNNeTR5T0RFc05ETTNMamMwTERrMkxqWTBNeXcwTlRZdU16UTRlaUl2UGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BDOXpkbWMrRFFvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NhdWRpLWIxN2FhNTEzNTRlNDAzM2Q2OTBhMjI1MjhiNWRhZTcwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGcwS1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURFNUxqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZzBLUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUdsa1BTSk1ZWGxsY2w4eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCNFBTSXdjSGdpSUhrOUlqQndlQ0lOQ2drZ2RtbGxkMEp2ZUQwaU1DQXdJRFV4TWlBMU1USWlJSE4wZVd4bFBTSmxibUZpYkdVdFltRmphMmR5YjNWdVpEcHVaWGNnTUNBd0lEVXhNaUExTVRJN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajROQ2p4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lOR1JrUkJORFE3SWlCa1BTSk5NQ3d5TlRaak1Dd3pNUzR6TVRRc05TNDJNek1zTmpFdU16RXNNVFV1T1RJekxEZzVMakEwTTB3eU5UWXNNelkzTGpNd05Hd3lOREF1TURjM0xUSXlMakkyTVEwS0NVTTFNRFl1TXpZM0xETXhOeTR6TVN3MU1USXNNamczTGpNeE5DdzFNVElzTWpVMmN5MDFMall6TXkwMk1TNHpNUzB4TlM0NU1qTXRPRGt1TURRelRESTFOaXd4TkRRdU5qazJUREUxTGpreU15d3hOall1T1RVM1F6VXVOak16TERFNU5DNDJPU3d3TERJeU5DNDJPRFlzTUN3eU5UWjZJaTgrRFFvOFp6NE5DZ2s4Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qUkRnd01ESTNPeUlnWkQwaVRUUTVOaTR3Tnpjc01UWTJMamsxTjBNME5Ua3VPVEEyTERZNUxqUTNNeXd6TmpZdU1EY3hMREFzTWpVMkxEQlROVEl1TURrMExEWTVMalEzTXl3eE5TNDVNak1zTVRZMkxqazFOMGcwT1RZdU1EYzNlaUl2UGcwS0NUeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTkVPREF3TWpjN0lpQmtQU0pOTVRVdU9USXpMRE0wTlM0d05ETkROVEl1TURrMExEUTBNaTQxTWpjc01UUTFMamt5T1N3MU1USXNNalUyTERVeE1uTXlNRE11T1RBMkxUWTVMalEzTXl3eU5EQXVNRGMzTFRFMk5pNDVOVGRJTVRVdU9USXplaUl2UGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BDOXpkbWMrRFFvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZzBLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREU1TGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnMEtQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJR2xrUFNKTVlYbGxjbDh4SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSU5DZ2tnZG1sbGQwSnZlRDBpTUNBd0lEVXhNaUExTVRJaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURVeE1pQTFNVEk3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNE5DanhqYVhKamJHVWdjM1I1YkdVOUltWnBiR3c2STBZd1JqQkdNRHNpSUdONFBTSXlOVFlpSUdONVBTSXlOVFlpSUhJOUlqSTFOaUl2UGcwS1BHYytEUW9KUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STBRNE1EQXlOenNpSUdROUlrMHlORFF1T0Rjc01qVTJTRFV4TW1Nd0xUSXpMakV3TmkwekxqQTRMVFExTGpRNUxUZ3VPREU1TFRZMkxqYzRNMGd5TkRRdU9EZFdNalUyZWlJdlBnMEtDVHh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU5FT0RBd01qYzdJaUJrUFNKTk1qUTBMamczTERFeU1pNDBNelZvTWpJNUxqVTFObU10TVRVdU5qY3hMVEkxTGpVM01pMHpOUzQzTURndE5EZ3VNVGMxTFRVNUxqQTNMVFkyTGpjNE0wZ3lORFF1T0RkV01USXlMalF6TlhvaUx6NE5DZ2s4Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qUkRnd01ESTNPeUlnWkQwaVRUSTFOaXcxTVRKak5qQXVNalE1TERBc01URTFMall5TmkweU1DNDRNalFzTVRVNUxqTTFOaTAxTlM0Mk5USklPVFl1TmpRMFF6RTBNQzR6TnpRc05Ea3hMakUzTml3eE9UVXVOelV4TERVeE1pd3lOVFlzTlRFeWVpSXZQZzBLQ1R4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lORU9EQXdNamM3SWlCa1BTSk5NemN1TlRjMExETTRPUzQxTmpWb05ETTJMamcxTW1NeE1pNDFPREV0TWpBdU5USTVMREl5TGpNek9DMDBNaTQ1Tmprc01qZ3VOelUxTFRZMkxqYzRNMGc0TGpneE9RMEtDUWxETVRVdU1qTTJMRE0wTmk0MU9UWXNNalF1T1RrekxETTJPUzR3TXpZc016Y3VOVGMwTERNNE9TNDFOalY2SWk4K0RRbzhMMmMrRFFvOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvak1EQTFNa0kwT3lJZ1pEMGlUVEV4T0M0MU9EUXNNemt1T1RjNGFESXpMak15T1d3dE1qRXVOeXd4TlM0M05qVnNPQzR5T0Rrc01qVXVOVEE1YkMweU1TNDJPVGt0TVRVdU56WTFURGcxTGpFd05DdzRNUzR5TlRKc055NHhOaTB5TWk0d016Y05DZ2xETnpNdU1UVTRMRGMxTGpFekxEVTJMalF4TWl3NU15NDNOellzTkRJdU5qRXlMREV4TkM0MU5USm9OeTQwTnpWc0xURXpMamd4TXl3eE1DNHdNelZqTFRJdU1UVXlMRE11TlRrdE5DNHlNVFlzTnk0eU16Y3ROaTR4T1RRc01UQXVPVE00YkRZdU5UazJMREl3TGpNd01Xd3RNVEl1TXpBMkxUZ3VPVFF4RFFvSll5MHpMakExT1N3MkxqUTRNUzAxTGpnMU55d3hNeTR4TURndE9DNHpOeklzTVRrdU9EY3piRGN1TWpZM0xESXlMak0yT0dneU5pNDRNakpzTFRJeExqY3NNVFV1TnpZMWJEZ3VNamc1TERJMUxqVXdPV3d0TWpFdU5qazVMVEUxTGpjMk5Xd3RNVEl1T1RrNExEa3VORFEwRFFvSlF6QXVOamM0TERJek5DNDFNemNzTUN3eU5EVXVNVGc1TERBc01qVTJhREkxTm1Nd0xURTBNUzR6T0RRc01DMHhOVGd1TURVeUxEQXRNalUyUXpJd05TNDBNamdzTUN3eE5UZ3VNamcxTERFMExqWTNMREV4T0M0MU9EUXNNemt1T1RjNGVpQk5NVEk0TGpVd01pd3lNekF1TkEwS0NXd3RNakV1TmprNUxURTFMamMyTlV3NE5TNHhNRFFzTWpNd0xqUnNPQzR5T0RrdE1qVXVOVEE1YkMweU1TNDNMVEUxTGpjMk5XZ3lOaTQ0TWpKc09DNHlPRGd0TWpVdU5UQTViRGd1TWpnNExESTFMalV3T1dneU5pNDRNakpzTFRJeExqY3NNVFV1TnpZMVRERXlPQzQxTURJc01qTXdMalI2RFFvSklFMHhNakF1TWpFekxERXpNQzR6TVRkc09DNHlPRGtzTWpVdU5UQTViQzB5TVM0Mk9Ua3RNVFV1TnpZMWJDMHlNUzQyT1Rrc01UVXVOelkxYkRndU1qZzVMVEkxTGpVd09Xd3RNakV1TnkweE5TNDNOalZvTWpZdU9ESXliRGd1TWpnNExUSTFMalV3T1d3NExqSTRPQ3d5TlM0MU1EbG9Nall1T0RJeURRb0pUREV5TUM0eU1UTXNNVE13TGpNeE4zb2dUVEl5TUM0ek1qZ3NNak13TGpSc0xUSXhMalk1T1MweE5TNDNOalZNTVRjMkxqa3pMREl6TUM0MGJEZ3VNamc1TFRJMUxqVXdPV3d0TWpFdU55MHhOUzQzTmpWb01qWXVPREl5YkRndU1qZzRMVEkxTGpVd09XdzRMakk0T0N3eU5TNDFNRGxvTWpZdU9ESXlEUW9KYkMweU1TNDNMREUxTGpjMk5Vd3lNakF1TXpJNExESXpNQzQwZWlCTk1qRXlMakF6T1N3eE16QXVNekUzYkRndU1qZzVMREkxTGpVd09Xd3RNakV1TmprNUxURTFMamMyTld3dE1qRXVOams1TERFMUxqYzJOV3c0TGpJNE9TMHlOUzQxTURsc0xUSXhMamN0TVRVdU56WTFhREkyTGpneU1nMEtDV3c0TGpJNE9DMHlOUzQxTURsc09DNHlPRGdzTWpVdU5UQTVhREkyTGpneU1rd3lNVEl1TURNNUxERXpNQzR6TVRkNklFMHlNVEl1TURNNUxEVTFMamMwTTJ3NExqSTRPU3d5TlM0MU1EbHNMVEl4TGpZNU9TMHhOUzQzTmpWTU1UYzJMamt6TERneExqSTFNbXc0TGpJNE9TMHlOUzQxTURrTkNnbHNMVEl4TGpjdE1UVXVOelkxYURJMkxqZ3lNbXc0TGpJNE9DMHlOUzQxTURsc09DNHlPRGdzTWpVdU5UQTVhREkyTGpneU1rd3lNVEl1TURNNUxEVTFMamMwTTNvaUx6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p3dmMzWm5QZzBLXCIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XHJcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcclxuaW1wb3J0IEVudmF0b0J1dHRvbldyYXBwZXIgZnJvbSAnLi9Td2l0Y2hlckJ1dHRvbi9Td2l0Y2hlckJ1dHRvbi5zdHlsZSc7XHJcbmltcG9ydCBMYW5ndWFnZUNvbnRleHQgZnJvbSAnLi9jb250ZXh0L2xhbmd1YWdlLmNvbnRleHQnO1xyXG5pbXBvcnQgQ3Jvc3NJbWFnZSBmcm9tICcuL1N3aXRjaGVyQnV0dG9uL2Nyb3NzLWJ0bi5zdmcnO1xyXG5pbXBvcnQgTGFuZ0ltYWdlIGZyb20gJy4vU3dpdGNoZXJCdXR0b24vbGFuZ3VhZ2UtYnRuLnN2Zyc7XHJcbmltcG9ydCB1c2VDbGlja091dHNpZGUgZnJvbSAnLi4vaG9va3MvdXNlQ2xpY2tPdXRzaWRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmd1YWdlU3dpdGNoZXIoeyBsYW5ndWFnZUNvbmZpZyB9KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgc3RhdGU6IHsgbGFuZyB9LFxyXG4gICAgdG9nZ2xlTGFuZ3VhZ2UsXHJcbiAgfSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KTtcclxuICBjb25zdCBjb250YWluZXIgPSB1c2VSZWYoKTtcclxuICBjb25zdCBbc2hvd1N3aXRjaGVyLCBzZXRTaG93U3dpdGNoZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGZ1bmN0aW9uIGhhbmRsZU91dHNpZGVDbGljaygpIHtcclxuICAgIHNldFNob3dTd2l0Y2hlcihmYWxzZSk7XHJcbiAgfVxyXG4gIHVzZUNsaWNrT3V0c2lkZShjb250YWluZXIsIGhhbmRsZU91dHNpZGVDbGljayk7XHJcbiAgY29uc3QgaGFuZGxlU3dpdGNoZXIgPSB1c2VDYWxsYmFjayhcclxuICAgICgpID0+IHNldFNob3dTd2l0Y2hlcihzaG93U3dpdGNoZXIgPT4gIXNob3dTd2l0Y2hlciksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlciByZWY9e2NvbnRhaW5lcn0+XHJcbiAgICAgIHtzaG93U3dpdGNoZXIgJiYgKFxyXG4gICAgICAgIDxGYWRlIGJvdHRvbSBkdXJhdGlvbj17ODAwfT5cclxuICAgICAgICAgIDxTd2l0Y2hlckNvbnRhaW5lciBjbGFzc05hbWU9e3Nob3dTd2l0Y2hlciA/ICdhY3RpdmUnIDogJyd9PlxyXG4gICAgICAgICAgICA8U3dpdGNoZXJIZWFkZXI+XHJcbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIGlkPVwiaGVhZGVyVGV4dFwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT17J0NoYW5nZSBMYW5ndWFnZSd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Td2l0Y2hlckhlYWRlcj5cclxuICAgICAgICAgICAgPFN3aXRjaGVyQ29udGVudD5cclxuICAgICAgICAgICAgICA8U2VsZWN0TGFuZ3VhZ2VcclxuICAgICAgICAgICAgICAgIGxhbmc9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVMYW5ndWFnZT17dG9nZ2xlTGFuZ3VhZ2V9XHJcbiAgICAgICAgICAgICAgICBjb25maWc9e2xhbmd1YWdlQ29uZmlnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU3dpdGNoZXJDb250ZW50PlxyXG4gICAgICAgICAgICA8U3dpdGNoZXJGb290ZXI+XHJcbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJsYW5ndWFnZVRleHRcIiBkZWZhdWx0TWVzc2FnZT17J0xhbmd1YWdlJ30gLz5cclxuICAgICAgICAgICAgICA8c3Bhbj46IDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJsYW5ndWFnZU5hbWVcIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9eydDb3VudHJ5IE5hbWUnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU3dpdGNoZXJGb290ZXI+XHJcbiAgICAgICAgICA8L1N3aXRjaGVyQ29udGFpbmVyPlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgKX1cclxuICAgICAgPEVudmF0b0J1dHRvbldyYXBwZXJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVTd2l0Y2hlcn1cclxuICAgICAgICBjbGFzc05hbWU9e3Nob3dTd2l0Y2hlciA/ICdzdG9wQW5pbWF0aW9uJyA6ICcnfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZyBzcmM9e3Nob3dTd2l0Y2hlciA/IENyb3NzSW1hZ2UgOiBMYW5nSW1hZ2V9IGFsdD1cInN3aXRjaGVyXCIgLz5cclxuICAgICAgPC9FbnZhdG9CdXR0b25XcmFwcGVyPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuZnVuY3Rpb24gU2VsZWN0TGFuZ3VhZ2UoeyB0b2dnbGVMYW5ndWFnZSwgbGFuZywgY29uZmlnID0gW10gfSkge1xyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZUxhbmd1YWdlID0gZSA9PiB7XHJcbiAgICB0b2dnbGVMYW5ndWFnZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSwgJ3N3aXRjaGVyJyk7XHJcbiAgfTtcclxuICByZXR1cm4gY29uZmlnLm1hcChpdGVtID0+IHtcclxuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBpdGVtLmlkID09PSBsYW5nO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExhbmd1YWdlQnV0dG9uXHJcbiAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgIGNsYXNzTmFtZT17aXNTZWxlY3RlZCA/ICdhY3RpdmUnIDogJyd9XHJcbiAgICAgICAgdmFsdWU9e2l0ZW0ubGFuZ3VhZ2V9XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlTGFuZ3VhZ2V9XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nIHNyYz17aXRlbS5pY29ufSBhbHQ9XCJmbGFnXCIgc3R5bGU9e3sgcG9pbnRlckV2ZW50czogJ25vbmUnIH19IC8+XHJcbiAgICAgIDwvTGFuZ3VhZ2VCdXR0b24+XHJcbiAgICApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBMYW5ndWFnZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gYDtcclxuY29uc3QgU3dpdGNoZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDkwcHg7XHJcbiAgcmlnaHQ6IDRweDtcclxuICB3aWR0aDogMzcwcHg7XHJcbiAgaGVpZ2h0OiAxODVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggcmdiYSg3MywgMTI5LCAyMDYsIDAuMTUpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBoZWlnaHQ6IDE5NXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDQ1cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG4gIH1cclxuYDtcclxuY29uc3QgU3dpdGNoZXJIZWFkZXIgPSBzdHlsZWQuaDNgXHJcbiAgYmFja2dyb3VuZDogI2YwZjRmODtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdETSBTYW5zJztcclxuICBjb2xvcjogcmdiKDIzLCAyOCwgNDUpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbmA7XHJcbmNvbnN0IFN3aXRjaGVyQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMjBweCAzMHB4IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDI1cHggMzBweCAwcHg7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYig0NywgMTI4LCAyMzcpO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDM4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTd2l0Y2hlckZvb3RlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnRE0gU2Fucyc7XHJcbiAgICBjb2xvcjogcmdiKDIzLCAyOCwgNDUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6IHJnYigyMywgMjgsIDQ1KTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgei1pbmRleDogOTk5OTtcclxuYDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSW5qZWN0UlRMID0gc3R5bGVkLmRpdmBcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgJHsoeyBsYW5nIH0pID0+XHJcbiAgICAobGFuZyA9PT0gJ2FyJyB8fCBsYW5nID09PSAnaGUnKSAmJlxyXG4gICAgYFxyXG4gICAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7ICAgIFxyXG4gICAgYH1cclxuYDtcclxuIiwiaW1wb3J0IHsgc29jaWFsVHdpdHRlciB9IGZyb20gJ3JlYWN0LWljb25zLWtpdC9pb25pY29ucy9zb2NpYWxUd2l0dGVyJztcclxuaW1wb3J0IHsgc29jaWFsRmFjZWJvb2sgfSBmcm9tICdyZWFjdC1pY29ucy1raXQvaW9uaWNvbnMvc29jaWFsRmFjZWJvb2snO1xyXG5pbXBvcnQgeyBzb2NpYWxHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy1raXQvaW9uaWNvbnMvc29jaWFsR2l0aHViJztcclxuaW1wb3J0IHsgc29jaWFsR29vZ2xlcGx1c091dGxpbmUgfSBmcm9tICdyZWFjdC1pY29ucy1raXQvaW9uaWNvbnMvc29jaWFsR29vZ2xlcGx1c091dGxpbmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNPQ0lBTF9QUk9GSUxFUyA9IFtcclxuICB7XHJcbiAgICBpZDogJzEnLFxyXG4gICAgaWNvbjogc29jaWFsRmFjZWJvb2ssXHJcbiAgICB1cmw6ICcvdGhyZWUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICcyJyxcclxuICAgIGljb246IHNvY2lhbFR3aXR0ZXIsXHJcbiAgICB1cmw6ICcvdGhyZWUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICczJyxcclxuICAgIGljb246IHNvY2lhbEdpdGh1YixcclxuICAgIHVybDogJy90aHJlZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzQnLFxyXG4gICAgaWNvbjogc29jaWFsR29vZ2xlcGx1c091dGxpbmUsXHJcbiAgICB1cmw6ICcvdGhyZWUnLFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3Qgb24gPSAob2JqLCAuLi5hcmdzKSA9PiBvYmouYWRkRXZlbnRMaXN0ZW5lciguLi5hcmdzKTtcclxuXHJcbmV4cG9ydCBjb25zdCBvZmYgPSAob2JqLCAuLi5hcmdzKSA9PiBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lciguLi5hcmdzKTtcclxuXHJcbmNvbnN0IGRlZmF1bHRFdmVudHMgPSBbJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0J107XHJcblxyXG5jb25zdCB1c2VPdXRzaWRlQ2xpY2sgPSAocmVmLCBvbk91dHNpZGVDbGljaywgZXZlbnRzID0gZGVmYXVsdEV2ZW50cykgPT4ge1xyXG4gIGNvbnN0IHNhdmVkQ2FsbGJhY2sgPSB1c2VSZWYob25PdXRzaWRlQ2xpY2spO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzYXZlZENhbGxiYWNrLmN1cnJlbnQgPSBvbk91dHNpZGVDbGljaztcclxuICB9LCBbb25PdXRzaWRlQ2xpY2tdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlciA9IGV2ZW50ID0+IHtcclxuICAgICAgY29uc3QgeyBjdXJyZW50OiBlbCB9ID0gcmVmO1xyXG4gICAgICBlbCAmJiAhZWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiBzYXZlZENhbGxiYWNrLmN1cnJlbnQoZXZlbnQpO1xyXG4gICAgfTtcclxuICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50cykge1xyXG4gICAgICBvbihkb2N1bWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50cykge1xyXG4gICAgICAgIG9mZihkb2N1bWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbZXZlbnRzLCByZWZdKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZU91dHNpZGVDbGljaztcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVGltZW91dChjYiwgdGltZW91dERlbGF5TXMgPSAwKSB7XHJcbiAgY29uc3QgW2lzVGltZW91dEFjdGl2ZSwgc2V0SXNUaW1lb3V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzYXZlZFJlZkNhbGxiYWNrID0gdXNlUmVmKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzYXZlZFJlZkNhbGxiYWNrLmN1cnJlbnQgPSBjYjtcclxuICB9LCBbY2JdKTtcclxuXHJcbiAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XHJcbiAgICBzYXZlZFJlZkNhbGxiYWNrLmN1cnJlbnQgJiYgc2F2ZWRSZWZDYWxsYmFjay5jdXJyZW50KCk7XHJcbiAgICBjbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXIoKSB7XHJcbiAgICBzZXRJc1RpbWVvdXRBY3RpdmUoZmFsc2UpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgIHNldElzVGltZW91dEFjdGl2ZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNUaW1lb3V0QWN0aXZlKSB7XHJcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgdGltZW91dERlbGF5TXMpO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSwgW2lzVGltZW91dEFjdGl2ZSwgY2FsbGJhY2ssIHRpbWVvdXREZWxheU1zXSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNsZWFyLFxyXG4gICAgc3RhcnQsXHJcbiAgICBzdG9wOiBjbGVhcixcclxuICAgIGlzQWN0aXZlOiBpc1RpbWVvdXRBY3RpdmUsXHJcbiAgfTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCVUFBQUFWQ0FZQUFBQ3BGNldXQUFBQk9FbEVRVlE0amRYVXNVdFhVUmpHOFk4aDRaQ0xTS2c1dnkwT2dvdVFvQ2hGZzZOcGM3a0tyVUYvUVVzSTV1Z1NJZEpxRUZqWllKdjlBKzlmME9Ea3BLSVFsODV2dnU5Z1F3OGNMdWM5My90d3pubmVlMVVVRVhzUmNSa1JheFgrVHNtVng3aUxoUW84WERSOWhpZllMZkszcjZHS1kwUXM0aW0yTS9OM0gxODkva2M4d0QxczljSFZvQTV4anU5Ri9qL1JVRVI4d0FyV00vTWtJcGF3ajgrWnVlbHZVTyt3Z1JlWitTVWk3dU1iTHJHY21lY1IwZlh3UVhkRjNaMnVZN0laYS8wNDBlb0REWmpWTnA5cFl3NFBXNjE3ZjZwanUvU2Y0eEhldDhWdGpMU2REUFN5R2I1dDh4OTRqU3VjdHRvT1J2SHpuNFJVYmY1eHpPSTRNMi82K0dxZkhyWHhwZ0pYVGEvYjg2SUNWei9UTHRuQXJ5Si8rNm9HTlQvNG4yYm1XUjlmUGY0blRHTU1yL3JnYWxCZlc2T2Y5Skw0QXg2d1ExRWZoNHN0QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjBBQUFBY0NBWUFBQUNkejdTcUFBQUIra2xFUVZSSWliMlhUVXRWVVJTR242NFZGbjFSSWtJaklkNUdFbGhKcERaVUI1SkU0MzVBME1CUnMyWk5HZ1FGL1lDZ1A2Qk90QVlOMGdqNndtRytPR2pTUk93REs1SW9pWDFaQjQ2SFU5cTVzQmRjenQ2THRYbnVXbnU5ZTU5RE1rbDd5R2d0U1ZlQkxVa0R1YkF0NEVHTTcrV0V2b3J4QlVsN2MwR1hZbndRT0pzTCtxdzBIOGtGZlF2OGlQbG9GcWp0bjhETG1BL3ZKQjlKaHlSMWR3U05aN0d2UGNEcEd0QkpTZGNselFNZlUyVWtUVFdGRnQyNldQSmRBdDZGYnFmaWQ2NW03VTFndGdtMFhVcEpoNEV2a2JtQmZVQi9UZndtc0FIMEFtbGJqdHJlL0Y5b3U3eTJ2d0xMNFZNRnVBNDhCSzRBSjREYjRkOFBERFhKdEh3WVBBSUdZN3dhcFpzRG50ditYUVJKV2lxdEdhbElibGUyclZNbDlVWEpWdjYyV0ZJWDhBazRBankyUGRFUmRMY21hUUVZai8wOVhxNUV6WjlNYXZoc2U2M3dOVDFyRndPYXNoMG85VU5SaVdIZ2NuVCtxZkJQMjc3ZktiU3dVVW1wNDhjQ01obDZyOW8xb0ExdFd0N3VLRzJTMWxwa1hIZEt2UTlwSlVWc1JiOThhOVVFN21paHpkY1IxMXNCSnY4dDRJenRKTDI3NFUrc2kzUlEzbVIzZ0puSTVHbklhODcyaDBwY1dWTHBRbm5TR0dwN1Z0SUJvTXYyOTMrRXJzUUIwMU5jblZsZXlDVE5SSk9sSy9SWW96MXRZTVVwbGlvem1BdTZUV0s1b0cvS2J5ZFpvTFovQVM5aWVqNVhwc21tNDNrakl6TStYNEEvL2h5RlpzRlBhZG9BQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQklBQUFBU0NBWUFBQUJXem81WEFBQUJtMGxFUVZRNGpaMlVUWWlPVVJUSGYvUE82Mk5CaHNhV2tuNHJ3cEN5bXZJeFJYWmtSU3haUzltd3NiZXdzN0lnaS9HUkxTVmhvNURFUXY4U0tTa05rWldQUWZmdFB0UGp6Ump2bk1Wem5uUHVQYi8rM1h2T1pUWlR4OVJQNnIxbWk3cEczZjYza2s0N1VEZXJ5MnU0SGxnR2JGVVhxVjNnSVhCYlBUQXJTRDBNUEFJZTFOUmw0Q2d3a2VRck1BMU1BVCtCai8yZ2J1dC91dm9mNVpQa08zQytXVXp5UzkwSWpDUjVwNDRBdTRGYlNUNzhRVlUzMUExem1ucFJMZkFyUFVYcUxtQWJjRGJKMC8rQlZIdFovZXRHeFpkS1BqNEFwS2tkYlovUk5XQUhjSGRRVUpJcGRSM3dkbWpRNGo1Ris0Q3J3S3VPT3FRdW5pZHJ1UHBPNmFQU3VaL1Y4VUVwU1NhQk1XQkx0M2J3d3FKMG51ZjBoTnJaUmNraDRNSWdnSExMNm52MVlBOVVlaWZKcGJvNDBiN1NPV3d2c0JMWVE5L1FuZ0p1QWpmK29XSllYVkREWThBWjRHUUoyclBXekV0dklOV2x3QkhnVHBMbjZoTGdXWGtSMUUxSlhnQ25tK0laUlVuT0FXdUIvVFYxQWlpNTZ6VmVBYXdHeWpPenFsOXRXMUdCTmZOVDdESHdEYmhmMTk2b080dWlKTDNjakFHL0FiSmdmRmZWK1huVkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNVQUFBQUtDQVlBQUFBelpKZmdBQUFCODBsRVFWUTRqWTJVUzRpUFlSVEdmNFBjd3QrSUpsSFVjQ1FqbDRWSklrTXVqWlNOTEpTRnBheG1aV1BIMm1yV0ZsaWdYRkl1TTROY0krV1NKQTlsTTJVaHlnSTFHenIxL1BQT045LzgvYy9xZmM4NXovcys3L09jNyt1SWlCdkFOdUNncENIYWlJaFlDb3dBYzRCZGt0NjNpZXNGOHI1UjQ3N1Y5VTBCZGdQemdHc1JzYVdOZ3hlWjBDcGdDVEFjRWN2YXdLMEZiZ0dKM3dEY2pJaTVrNUU2NGZVc042NXJjWEFEdUcxQ3pVaGlkeU9pcXdWdUJYQUg2Q3pTbTREckVURmpBaWxKWjREVDNxZGlJeEd4c3ViZzJaWitvMVAzVTEydnU0MXIxT0RTNmh5THhVNmRCZDU0M1FkY2pvaXBKYWFqQUE4Q3g3eE56emRMR25WdE9uQVY2SGY5UmM0RThEdlZCWFk2L3h6WUlla1gvNnhPOG10Y3Z3Z2NCaFlBVDREbTQ4OERSeVQ5cVpMSzlUbURNajRDT1dQZmdRdkFJZWZmNVFzbGZTMFV2QWYwdXA3enRzL2pNR1NiOER3ZGtEUldLUGpNOW1jTVNqbytqcFFicHdGWGdQMU92UVplQWtlOS81eGZhbFBCQWpjZmVBVDBPSlcyTm13UHJ1MXRLbGpnVXFtbndFS25Ua2s2T1k2VUcyZmFrcjVLNllzSmZhcGlqT3V5SmQyVjBpc3IrMk1TM0hyZ2dlYzVZMkFDS1RkbXczQWhmVnE0WGRMYnV2NEN0eHg0WEZqeUFkamF0TG9GTHNjazcwdkx4MnBKdVRFbHpabklmMUMvcEJ6aS8wWkVyUFlGUC9NRHFGcmQ0cjQ5d0NYZzRWOVU3WmFTQnJmNzVBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFRQ0FZQUFBQVdHRjhiQUFBQlNrbEVRVlE0amEyVFRTdEZVUlNHSHgvcDVpUHBUSXdOVnZtWUtFckp4UDBEWW00Z0pVWUd5a1JKVEpSa3hNUklLUlB5QnhpSU1oUGgxanZnRjV3a3JwQ0I5bTNmMnZjNlRqblhIdXpXZXZkZXoxcHJyM1lETlM0emE0K2lhQzJLb3BzNGpvdDEvd0E4Qk1hOTIxSmZJMndtZ0oxTGVzc01OTE5lWUN1UThtN0xCRFN6SEhBQTVMelVJK25UR1kwcFFTN1pHVkFBRmlROUI4ZWJRSiszVnlVVnlnZHBGZTRCdzhBMGNHVm1RejdSR0REcjd6d0F5MkZRNHBUTmJCUTRxWksvZ0hWZ0R1andXcHVrMTFTZ21iVUNMOTU5QXJhQnhZVG55VXM2clk2dmFObk1YSUxyUUpxU3RBU01BSStCdnA4RSt3RUVWb0F1Yis5SU9uYUdwRXVnSDlnRkxvREpKRmhGeTJiV0RkeDc5eFlZbFBUK1cyQXEwTXlhZ0Erdk9jaUFwTHUvd3R3cXR4eE9kRDRyckZTaG1UVURSZThmU1pySUNpdFY2RDQwMEFsc3VLbldBZ1A0QnF1TFh0ZDZjVGVMQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlVBQUFBS0NBWUFBQUJibHhYWUFBQUFrMGxFUVZRb1U2WFF6UTNDTUF4QTRSZkpkeGlCRVRpM0lMRUJHWUVSNkViZGdMQkJwY2ozanNJRzRVQ1JYUG9UTmJ5akxYK0s0bEpLL0ZOZG56M2dnUVBRcThhN0swRU41SUhkejdxUmhidEpHY2kyWDBVM1FMWitnaFpDQUUrZ1ZZMUIrRUFYNEZZSUJTQ294dGQzNktycTVJSEgrdTJvV2NnbXd3dHpaU0diQUIxd25kbHRnbXdDdE1CeCtNK3VGTEs5QWVmNU9BWTlnbHZ0QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSWdBQUFBZkNBWUFBQUE4MllXcEFBQUxpVWxFUVZSNG5PMmJmMnhkWlJuSFArZkh2YmMvNzNyYm5nTWJHMmlIMlRRSWd4WWl4aUdTVGczRWdNRWlKa0NJTVYxRUF5S1NvWW4rUTZJcndkOFNYQ0VESkpDNG9hS01iYTRWQkFrSXJoR0dHOHk2T3RpNnpIdTc5ZWZhOWQ1enoydmVjOS9UdnZmMGRuVFFicFR0YWQ2YysrT2NlOTczZWI3biszeWY1NXdhdTJvZmZQTGMxTVBWbzk1SHZEd0x3UElRbGdCVERoL2theHRNMHpkeXRtbU14Sk5wMDh6dDltTDIvc0d5QmJ1UHhDcDI5cFduQmhMV0dINE1zakViUHc2MTVnRGR5VVhjbTdvQ0cwRmM1Tmx4eDltY3R2bGw5bXY5MTE1dEhLMWdlZjN0WUIyRjNLY2dueThBdy9KQkNCQ0FKZGVWdzgwUFF5eE9nSWE4elhnOE9YSW9YL2Y4NFhKMzQ3OFN5eDRldGVKVU1ZSVJISFRhNXJ1Wm1MbmhaOGV1cCtQZ0ZrYTlxNkR5RllqRndLclVSamxZWldCVlEyd2gyQ213S3NDeVNIQzRhbEh1cFN2UEc5MzgwQlVqMjE0K04vdld0UU4ya25Femhua2FKUFBlVE5zWXA5N3FaVTl1T1J0NmY4WGVRMnVnOGltSUh3UmlZRkFZcHR5cXRCTzhOOEMwQ3NDSkxZWllQVzd1NVVzdUcxbjN4S2RIWG5yRU14T01HbVZZcDBFeXIwMHFqU0NFZFZhYVBJTE5mYXQ1ZnM5bUtUb2d1UVVNQXd4ekVpU21Pa29PSFRqeWRmeERZSi9Gc3FPUDNIVDU4S2EvakJqbHZHMVg0bUV5YmxpbnVxL25wWm5ocFBNWVZKcERWSmtEL0gya21ZMjc3K2Z3d1BWUTh5VEVoa0VHMktRWUtGS2pUTHdPR1NZQjhZOVQ3VzI5NGtzajI3YWM1WTlSSWFSMkdUM1ZmVDB2TFFDSUNQNGtTRXhNdzJPUnZZLzl1Y1U4MnQzR2E5MzNROVZMVUxtVG9KelJBV0pvYVNlc2VvSVVaRUg4a3l3ZitlWG43ei8wMkhmcmpTT3N5TytmVmY4WWhqRnZoK3U2SWh6Nkdselg3WWgrN3JwdW8rdTZlMXpYUGV5NmJzdHNyWG1tTnBGaVJCRlFER3J0UG14empLY08zc0NtN1UvaGVVdWc3by9xQ0JtaENIdE1wQjhGRWt1Q1pBbXJqcXo3NFVmRndYUGZxSERmRlJCYzExMmpPelFjanVPRW84TnhuTFdPNHpUT0l2N2VUN1lXYUFCU1FPdUpucGNwRUJQQVFBTkxYcGlVbVdNNDlrSCtNWHd4RDd6OGEzcmZ1aFhPM0FybGZWSndhS3doSXVsSEZKZ2wxZ0Q1Ly9DMTRjMC82NDhuNW1vTnpjQWFZTHNDUzJxdVRuU1NyRXM3YmMrSm5vSTVXV09JS1grK0tLU1FSYkZlRG5sSjFyLytQWjU3L21Fby94ODR6eFNvSXhTd2tsRXNuVkZrcWhrUFdPU0MzRE5YbmUwUG5ERUw4NVVPNnRSR1YrVDdaZ1dVaGxrNDEvdkNNcG5NWFlBK1RxalpLUFlJUjJqNlp6NFd0ZlpoanZnSm5qeHdEZnUybnNQVksrK2xlc25UTUxnU2pJUUNoRDlaMFZpS1VheUZtUDRyTkdkM1hnTk42OTdqNHRyVDZYUWJTb05JVTR6Um9xZzRwZWg0QTlBMGYyRlJiSmxNcHUxa25kc1dHbmNRZ0VFRVl3cWJZQkkzeHpuYjNNK3JJOHZwM3ZvTHZuTFIrU3kvL0VjdzNBQ2pTOEU4cXJGSHlDUUZobW5LN1Z3SnZGZUFUTEZNSnRNdmdlTTRqbVNURGdXU1JzZHhXak9aVEh0MGY4ZHhtaFhUaEpvbFlLVk1Kck54dW5NNGp0T2k5dGQxam1Td2pabE1waVR0S3hacmpaeEg3dDk1UE90VHY5T2kzbmFGeDBjL1Y2TlZyZTBkeitlNmJrcWJYNWlXZ3pXbDArbUpOZGxSa1JwYThON1F4YXNFQ2NGWUdFdHp5S3RpWGRjdFhIYmdmTDc0aGU5RGZRY01yU3cwMEF3bUdTVmdraW9XKzcwZk94N0hISzlsTXBrdXgzSHUwa0FvRno4QkVNVTBhNmNSZXEwS1lLc1U0UFJqTm1oTzEwMStKc1h4NmlnUUpUaW51UmhhMVJ5UHh4clV2RkZwSmd5NC9ubWJlaDBWNnEzVHpLOVpyU3VxMTRJMXVhNjdPcDFPQjhlWU9qQkNIdkVuMHM0a3QranY4OEtneGg1bWdUM0lwZ09mNGI0SEh5Szl0d1ZxL2dZTUZpcVlVSTlJa05oblVpc09Mbm5YMForaFJSelJHQkdzNnpSdzlHZzVQZFF4MHJsUmticzJja1cycVdQMDg2eFREdGVkcjRPam4ySzl0SmJadHpWcS9xRkc2NG5NcjBHYlg2UEd0S2kxaEdzS0w0NTFydXNHdmpKRkVSZzBjQmdoYUZEc1VheFZQQXppNUdqaXYzUW1HMWh4NFhvMnBINE8zZzdJdndpR3JYVmdrNVF6VURFSGppbGxPcVUyTW5sRmgzUXNhWGVwek90cU5LbkFoL3UzTXNrZU9xQ2FwR0JVeDZ5bVdEQzJhSzkxY0xSbk1wbmFUQ2F6U3AxbmxSYUUyYmJWYWwzeVhFc2pJTlpaYzRQMnVpbWRUa3UyYUpOYnBkdkMrVWttU1psRTJLTzRtaUd5VmFsRzNvYnhCZFU1ajUxTHF0bjFVOEZnZzhlWEs3L09IZWQwTUJhN0FMd1h3TXFDWlJhQVltWHpjK1NZbVpqdW9OWFIvVldsRUY1MWE3U3ZWb1ZEVHoxTUZZN0JGYXF1enZCcTdWUkEwby9wWkc0cWtjNFNla3VmWDNpaHRHanprNkFvcWdLVjlnam5GMXdnZGhRRXZ0SWVUQ2w4VlVWamdKWDNxYzVuMmI0OHlaYTdVMVFkOWxoK1lKRFI4aEYrVXJ1U2JRdit3Ry82N3VIQ3NmdkFYZ1RXWXNrb0ovTm1qQzRVWlY0KzFyNHBHV2lwYVhRMlVxa2ovSjNtRXZtYmlGWXBLWHBsSUIzSG1XMnhQa1dJU3ZGY1lwMTYrWitTVGNnU3Y2WHYwemhGcEViWm91aDdBMktlVDVtZjQ4V0xVdnoxOWlUSmd4NWxnM2x5Q1lNWWVWYU05L0pxUlMyZldIdzM5d3hkekcxRE40TjNnSkd5eitXcVpzMGZ4elE5U05FK1NjTU1OVUFRZkpWbTFpZ0dPdDRHM0xHYVdsMGxCT1dKdHBsMFpWTTJFVEdLcGozOFNGcUplM2tTdnNkemw5Ynk3SGVxcWQzclVUYnFrMDhVQktrRWtHZVpyUEQ2U01mSytkWVoxN09qK3NQOHVPOU9hdnpYMDNQdEFLVTFRdXVLcGdVVnRDbWxid2tMZzl1aEJiSmZCYlpUdmU1UjM3OGJlejgwOHRwbjBKbnR0Nk1zVVZ6QnFMYTdBWlU1RDBQNGJMN1NvZXVHQ3B4LzU0amw4dVJqQlZDSm9JTmFhTEhuVEpOYXhraU43Mk45MVFyK1dmRW90NDl1M1hQakhLNVc1WCtkSFhRZzlJVDNNMmJhZEZKZ0M4SFJIdFVUMDdUMGRZYzNsNkorVlZHY3JOc0IrZ1hURXpZZGoyVm1OSzBRU1RFU0hGVlpMOUFtbTY2cFovc05sZFR2eVJITCtnZzdCTVhrTXlGQzNiVHpEU05nbEF0eUIraTJLN2twMWZMQ1hLeFlCa29GVXkvZHVpS2lMUXlVM0hkSzNwVkJVL2R4T2pSOW9BZXhsSjRvUmRFNklGcW51WUU0RjJYdVRFMmYzeHJWTENzeWRYTzBRNDNtWXBGcVVDUlc4NFpCTXBzbFo4RHZiM1RZOWRrRWk5N01CcjBORVNzSTFnQVVsdmJRVUxoVk4vREdMWXV6L1JGWkZ2OEpGcjdYQmJiS1NWTUlLbUhYTkxKUGo2bzhkR3RUcFdoS05iY2F0RlRScUhSRzZLeVFLZlNyVFFhN1J3bS9zUHlkRW1pWjBoekhhZGMwaXdSY20wcE5xVWluODRTYm1uK2J0dDd0cnV1MmEvTnIwVXAyeVRDZDlsUlJLaWFxbFpwc2xrSGI0bmRmcmVQdFMrS2N0U3Nic0VZQUNBbUFDV0FVd0NEVVUyWkNCNGtoOEUxMm00alhaOEVoRGUrUXYyWFFyeXRSa2tySHJGWTlpakJRcFJpZ1hXTWV5UnByZGNkRnFvSitOYUx6dVV0cnk2ZEtBR202NDA2SXlaSmVNVnZ6TVVTN25OOTFGS1VZVFp6bURVRXFtMk1nWnZQNE4xMzJYcHpBNmM0RndCQXFwZmc2VytqRG5CeCsrQWdBM0RtSGkrOVVETkdrbWtRbEcxSHFYc3VxVXJwQXNjNTF1czVRdnpQZC9wM3F1MUJ6TkpZNHJwUVlqaDUzVWt6NlNRRzVsSy9rdkplR1BSTGpBYnQ3S0EvVnZ1R3JleTArTmJseGVzdmpQSGFidzlCQ0UyZGZsbnhjQkhkdWhGMTRIdFdYK3NQMkM0Q1JuNXVGcmRRa1FtMzl3bll6Y0pVODJSc3R5MmJOSDhmelZGVFVWSnFZNkkxTWQ4TXROSldTd2l1K1ZIVTBLK2M1a1NaRWdSRGtFMnRoZXBVcEpUb0ZvMTBDeEJEVlFmVWlmSkplanA0RkNUWjhvNDdST29PNjNoeCtRaFNBRUFiZkZ2aFdNUmdtdCtGeklRRkFoakNGdkFjenhDd0Q1TFNkR0p2UUlJWVFwTHdjTyt2TGVmemI5WmlHVDkwK0NRN1ZXWjNRR0lXZVNKQ2MxTlB0UXBXM3VsRDFMVEVHWElwdkRKMk81ZncxVzVheGxpOVlJRnZuaTZwNTRwWWE0am1mNm40ditCZktva2NJOVg5NzBIVUhrNDB5OWVpaC9LZWF5NEhkcDdxRDU3dVo4YnhQTXUveFlzTUNmbnRyTFltamdtUmZIbDg5RVJaSVdFTmpEeVU4Snh0am1sZ3R2Ri92STVhZEJzY0h3K3hxUDFlOTdid2FucjQ1U1YzYW8zeFVNWWVsQjEwVVA1QnNDcTB4RnBTN1I0VWgvZ3o4QU1TT1U5MnBIeVN6dDF4WTI3M3QycXJxTTNvOVlXZnpBVGpDUHNiRU52aHZmd3pmeE1kZ0ZKTUJMTkdMd1pzWVlqdnduS3llVG5WbmZ1QU0rRCtRaW10T3VVS3dmd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nb0ltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBNYWluV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFBhcnRpY2xlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuODU7XHJcbiAgcGFydGljbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBOb3JtYWxDbG9ja1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuTm9ybWFsQ2xvY2sge1xyXG4gICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLk5vcm1hbFVuaXRDb250YWluZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5Ob3JtYWx1cHBlckNhcmQge1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJztcclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuTm9ybWFsbG93ZXJDYXJkIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRE0gU2Fucyc7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMC44O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLk5vcm1hbENhcmQge1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJztcclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZGlnaXRMYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRE0gU2Fucyc7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBNYWluQ29udGVudFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwOTlweCkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNjV2aDtcclxuICB9XHJcbiAgLm1haW5Db250YWluZXIge1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogMTIwcHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0RNIFNhbnMnO1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogNzBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICB9XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2IoMCwgMCwgMCk7XHJcbiAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMTZweDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgdG9wOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWF4LXdpZHRoOiA1MjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDU3MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IENvbnRhY3RGb3JtV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZmllbGQtd3JhcHBlciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHdpZHRoOiA0MjBweDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAgICAgICB3aWR0aDogMzEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnRE0gU2Fucyc7XHJcbiAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICBtaW4td2lkdGg6IDk1cHg7XHJcbiAgICAgIGhlaWdodDogNTFweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNzVzO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjc1cztcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgfVxyXG4gICAgICBzcGFuLmJ0bi10ZXh0IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mZWVkYmFjayB7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIGJvdHRvbTogLTEyMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZnlCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0RNIFNhbnMnO1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICB3aWR0aDogMHB4O1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNzVzO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjc1cztcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNwYW4uYnRuLXRleHQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgRm9vdGVyU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNvY2lhbF9wcm9maWxlcyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5zb2NpYWxfcHJvZmlsZV9pdGVtIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG4gICAgICB3aWR0aDogNDZweDtcclxuICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgY29sb3I6IHJnYigxNDIsIDE0NywgMTU0KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjM1NztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBNYWluV3JhcHBlcjtcclxuIiwiaW1wb3J0IHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBzcGlubmVyID0ga2V5ZnJhbWVzYFxyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEFuaW1TcGlubmVyID0gY3NzYFxyXG4gIGFuaW1hdGlvbjogJHtzcGlubmVyfSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbmA7XHJcblxyXG5leHBvcnQgeyBBbmltU3Bpbm5lciB9O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IEJ1dHRvblN0eWxlID0gc3R5bGVkLmJ1dHRvbmBcclxuICAvKiBidXR0b24gZGVmYXVsdCBzdHlsZSAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjg0ODk7XHJcbiAgbWluLWhlaWdodDogNDhweDtcclxuICBtaW4td2lkdGg6IDQ4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIHNwYW4uYnRuLXRleHQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG4gIHNwYW4uYnRuLWljb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgID4gZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLyogTWF0ZXJpYWwgc3R5bGUgZ29lcyBoZXJlICovXHJcbiAgJi5pcy1tYXRlcmlhbCB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuXHJcbiAgLyogV2hlbiBidXR0b24gb24gbG9hZGluZyBzdGFnZSAqL1xyXG4gICYuaXMtbG9hZGluZyB7XHJcbiAgICAuYnRuLXRleHQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbkJ1dHRvblN0eWxlLmRpc3BsYXlOYW1lID0gJ0J1dHRvblN0eWxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblN0eWxlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcclxuaW1wb3J0IEJ1dHRvblN0eWxlIGZyb20gJy4vYnV0dG9uLnN0eWxlJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHtcclxuICB0eXBlLFxyXG4gIHRpdGxlLFxyXG4gIGljb24sXHJcbiAgZGlzYWJsZWQsXHJcbiAgaWNvblBvc2l0aW9uLFxyXG4gIG9uQ2xpY2ssXHJcbiAgbG9hZGVyLFxyXG4gIGxvYWRlckNvbG9yLFxyXG4gIGlzTWF0ZXJpYWwsXHJcbiAgaXNMb2FkaW5nLFxyXG4gIGNsYXNzTmFtZSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgLy8gQWRkIGFsbCBjbGFzc3MgdG8gYW4gYXJyYXlcclxuICBjb25zdCBhZGRBbGxDbGFzc2VzID0gWydyZXVzZWNvcmVfX2J1dHRvbiddO1xyXG5cclxuICAvLyBpc0xvYWRpbmcgcHJvcCBjaGVja2luZ1xyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIGFkZEFsbENsYXNzZXMucHVzaCgnaXMtbG9hZGluZycpO1xyXG4gIH1cclxuXHJcbiAgLy8gaXNNYXRlcmlhbCBwcm9wIGNoZWNraW5nXHJcbiAgaWYgKGlzTWF0ZXJpYWwpIHtcclxuICAgIGFkZEFsbENsYXNzZXMucHVzaCgnaXMtbWF0ZXJpYWwnKTtcclxuICB9XHJcblxyXG4gIC8vIGNsYXNzTmFtZSBwcm9wIGNoZWNraW5nXHJcbiAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgYWRkQWxsQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG5cclxuICAvLyBDaGVja2luZyBidXR0b24gbG9hZGluZyBzdGF0ZVxyXG4gIGNvbnN0IGJ1dHRvbkljb24gPVxyXG4gICAgaXNMb2FkaW5nICE9PSBmYWxzZSA/IChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIHtsb2FkZXIgPyBsb2FkZXIgOiA8TG9hZGVyIGxvYWRlckNvbG9yPXtsb2FkZXJDb2xvciB8fCAnIzMwQzU2RCd9IC8+fVxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKSA6IChcclxuICAgICAgaWNvbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJidG4taWNvblwiPntpY29ufTwvc3Bhbj5cclxuICAgICk7XHJcblxyXG4gIC8vIHNldCBpY29uIHBvc2l0aW9uXHJcbiAgY29uc3QgcG9zaXRpb24gPSBpY29uUG9zaXRpb24gfHwgJ3JpZ2h0JztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25TdHlsZVxyXG4gICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICBjbGFzc05hbWU9e2FkZEFsbENsYXNzZXMuam9pbignICcpfVxyXG4gICAgICBpY29uPXtpY29ufVxyXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgIGljb24tcG9zaXRpb249e3Bvc2l0aW9ufVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIHtwb3NpdGlvbiA9PT0gJ2xlZnQnICYmIGJ1dHRvbkljb259XHJcbiAgICAgIHt0aXRsZSAmJiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLXRleHRcIj5cclxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXt0aXRsZX0gZGVmYXVsdE1lc3NhZ2U9XCJidXR0b25cIiAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKX1cclxuICAgICAge3Bvc2l0aW9uID09PSAncmlnaHQnICYmIGJ1dHRvbkljb259XHJcbiAgICA8L0J1dHRvblN0eWxlPlxyXG4gICk7XHJcbn07XHJcblxyXG5CdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIC8qKiBDbGFzc05hbWUgb2YgdGhlIGJ1dHRvbiAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgLyoqIEFkZCBpY29uICovXHJcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnYnV0dG9uJywgJ3N1Ym1pdCcsICdyZXNldCddKSxcclxuXHJcbiAgLyoqIEFkZCBpY29uICovXHJcbiAgaWNvbjogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgLyoqIEFkZCBsb2FkZXIgKi9cclxuICBsb2FkZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gIC8qKiBBZGQgTWF0ZXJpYWwgZWZmZWN0ICovXHJcbiAgaXNNYXRlcmlhbDogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gIC8qKiBCdXR0b24gTG9hZGluZyBzdGF0ZSAqL1xyXG4gIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gIC8qKiBCdXR0b24gTG9hZGluZyBzdGF0ZSAqL1xyXG4gIGxvYWRlckNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAvKiogSWYgdHJ1ZSBidXR0b24gd2lsbCBiZSBkaXNhYmxlZCAqL1xyXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgLyoqIEFkanVzdCB5b3VyIGljb24gYW5kIGxvYWRlciBwb3NpdGlvbiBbaWYgeW91IHVzZSBsb2FkZXJdICovXHJcbiAgaWNvblBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLFxyXG5cclxuICAvKiogVmFyaWFudCBjaGFuZ2UgYnV0dG9uIHNoYXBlICovXHJcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsndGV4dEJ1dHRvbicsICdvdXRsaW5lZCcsICdmYWInLCAnZXh0ZW5kZWRGYWInXSksXHJcblxyXG4gIC8qKiBwcmltYXJ5IHx8IHNlY29uZGFyeSB8fCB3YXJuaW5nIHx8IGVycm9yICBjaGFuZ2UgdGV4dCBhbmQgYm9yZGVyIGNvbG9yLlxyXG4gICAqICBBbmQgcHJpbWFyeVdpdGhCZyB8fCBzZWNvbmRhcnlXaXRoQmcgfHwgd2FybmluZ1dpdGhCZyB8fCBlcnJvcldpdGhCZyBjaGFuZ2UgdGV4dCwgYm9yZGVyIGFuZCBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbiAgY29sb3JzOiBQcm9wVHlwZXMub25lT2YoW1xyXG4gICAgJ3ByaW1hcnknLFxyXG4gICAgJ3NlY29uZGFyeScsXHJcbiAgICAnd2FybmluZycsXHJcbiAgICAnZXJyb3InLFxyXG4gICAgJ3ByaW1hcnlXaXRoQmcnLFxyXG4gICAgJ3NlY29uZGFyeVdpdGhCZycsXHJcbiAgICAnd2FybmluZ1dpdGhCZycsXHJcbiAgICAnZXJyb3JXaXRoQmcnLFxyXG4gIF0pLFxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIGNhbGxlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYnV0dG9uXHJcbiAgICovXHJcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG4gIGRpc2FibGVkOiBmYWxzZSxcclxuICBpc01hdGVyaWFsOiBmYWxzZSxcclxuICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gIHR5cGU6ICdidXR0b24nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOlxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIC0zMWRlZyxcclxuICAgICAgcmdiKDg2LCAyMDQsIDI0MikgMCUsXHJcbiAgICAgIHJnYig0NywgMTI4LCAyMzcpIDEwMCVcclxuICAgICk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcclxuICAgICAgLTMxZGVnLFxyXG4gICAgICByZ2IoODYsIDIwNCwgMjQyKSAwJSxcclxuICAgICAgcmdiKDQ3LCAxMjgsIDIzNykgMTAwJVxyXG4gICAgKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIC0zMWRlZyxcclxuICAgICAgcmdiKDg2LCAyMDQsIDI0MikgMCUsXHJcbiAgICAgIHJnYig0NywgMTI4LCAyMzcpIDEwMCVcclxuICAgICk7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDMzcHggMTVweCAzNHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggNXB4IDExcHggMCByZ2JhKDQ3LCAxMjgsIDIzNywgMC41Nyk7XHJcbiAgICB9XHJcbiAgICAuYnRuLXRleHQge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VUaW1lb3V0IGZyb20gJ0BkZWFkbGluZS9jb21tb24vaG9va3MvdXNlVGltZW91dCc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnLi4vVGV4dEZpZWxkL1RleHRGaWVsZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uLyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyJztcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4vQ29uYXRjdEZvcm0uc3R5bGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwZW5kaW5nLCBzZXRQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IHN0YXJ0IH0gPSB1c2VUaW1lb3V0KCgpID0+IHtcclxuICAgIGlmIChlcnJvcikgc2V0RXJyb3IoZmFsc2UpO1xyXG4gICAgaWYgKHN1Y2Nlc3MpIHNldFN1Y2Nlc3MoZmFsc2UpO1xyXG4gIH0sIDM1MDApO1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0UGVuZGluZyh0cnVlKTtcclxuICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAvLyAgICdodHRwczovL2FwaS5zZW5kZ3JpZC5jb20vdjMvbWFya2V0aW5nL2NvbnRhY3RzJyxcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgLy8gICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIC8vICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5TRU5ER1JJRF9BUElfS0VZfWAsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgIC8vICAgICAgIGxpc3RfaWRzOiBbXSxcclxuICAgIC8vICAgICAgIGNvbnRhY3RzOiBbeyBlbWFpbDogdmFsdWUgfV0sXHJcbiAgICAvLyAgICAgfSksXHJcbiAgICAvLyAgIH1cclxuICAgIC8vICk7XHJcbiAgICAvLyBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSwgJ2RhdGEnKTtcclxuICAgIC8vIGlmIChkYXRhLmpvYl9pZCkge1xyXG4gICAgLy8gICBzZXRQZW5kaW5nKGZhbHNlKTtcclxuICAgIC8vICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuICAgIC8vICAgc3RhcnQoKTtcclxuICAgIC8vICAgc2V0VmFsdWUoJycpO1xyXG4gICAgLy8gfSBlbHNlIGlmIChkYXRhLmVycm9ycy5sZW5ndGgpIHtcclxuICAgIC8vICAgc2V0UGVuZGluZyhmYWxzZSk7XHJcbiAgICAvLyAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgLy8gICBzdGFydCgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdjb250YWN0IGZvcm0nKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZXRQZW5kaW5nKGZhbHNlKTtcclxuICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuICAgICAgc2V0RXJyb3IoZmFsc2UpO1xyXG4gICAgICBzdGFydCgpO1xyXG4gICAgICBzZXRWYWx1ZSgnJyk7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgaWQ9XCJ1c2VyX2VtYWlsXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgIHJlcXVpcmVkPVwicmVxdWlyZWRcIlxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICBlcnJvcj17ZXJyb3J9XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlPVwiZXJyb3JNZXNzYWdlXCJcclxuICAgICAgICBzdWNjZXNzTWVzc2FnZT1cInN1Y2Nlc3NNc2dcIlxyXG4gICAgICAgIHN1Y2Nlc3M9e3N1Y2Nlc3N9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIHRpdGxlPVwiYnV0dG9uVGV4dFwiXHJcbiAgICAgICAgLy8gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI2U3NmY1MVwiLCBjb2xvcjogXCIjZmZmXCJ9fVxyXG4gICAgICAgIGlzTG9hZGluZz17cGVuZGluZ31cclxuICAgICAgICBsb2FkZXI9ezxMb2FkZXIgbG9hZGVyQ29sb3I9XCJ3aGl0ZVwiIC8+fVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExvYWRlclN0eWxlIGZyb20gJy4vbG9hZGVyLnN0eWxlJztcclxuXHJcbmNvbnN0IExvYWRlciA9ICh7IGxvYWRlckNvbG9yLCBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IHtcclxuICAvLyBBZGQgYWxsIGNsYXNzcyB0byBhbiBhcnJheVxyXG4gIGNvbnN0IGFkZEFsbENsYXNzZXMgPSBbJ3JldXNlY29yZV9fbG9hZGVyJ107XHJcblxyXG4gIC8vIGNsYXNzTmFtZSBwcm9wIGNoZWNraW5nXHJcbiAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgYWRkQWxsQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9hZGVyU3R5bGVcclxuICAgICAgY2xhc3NOYW1lPXthZGRBbGxDbGFzc2VzLmpvaW4oJyAnKX1cclxuICAgICAgbG9hZGVyQ29sb3I9e2xvYWRlckNvbG9yfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Mb2FkZXIucHJvcFR5cGVzID0ge1xyXG4gIC8qKiBDbGFzc05hbWUgb2YgdGhlIExvYWRlciAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgLyoqIFNldCBsb2FkZXIgd2lkdGggaW4gbnVtYmVyIHx8IHN0cmluZyAqL1xyXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcblxyXG4gIC8qKiBTZXQgbG9hZGVyIGhlaWdodCBpbiBudW1iZXIgfHwgc3RyaW5nICovXHJcbiAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcblxyXG4gIC8qKiBTZXQgY29sb3IgZm9yIGxvYWRlciAqL1xyXG4gIGxvYWRlckNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuTG9hZGVyLmRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQW5pbVNwaW5uZXIgfSBmcm9tICcuLi9BbmltYXRpb24nO1xyXG5cclxuY29uc3QgTG9hZGVyU3R5bGUgPSBzdHlsZWQuc3BhbmBcclxuICAvKiBsb2FkZXIgZGVmYXVsdCBzdHlsZSAqL1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiAxNHB4O1xyXG4gIGhlaWdodDogMTRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMubG9hZGVyQ29sb3IgPyBwcm9wcy5sb2FkZXJDb2xvciA6ICcjMDAwMDAwJyl9O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcblxyXG4gIC8qIGFuaW1hdGlvbiBnb2VzIGhlcmUgKi9cclxuICAke0FuaW1TcGlubmVyfVxyXG5gO1xyXG5cclxuTG9hZGVyU3R5bGUuZGlzcGxheU5hbWUgPSAnTG9hZGVyU3R5bGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyU3R5bGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9Ob3JtYWxDbG9jay5jc3MnO1xyXG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XHJcbi8vIGZ1bmN0aW9uIGNvbXBvbmVudFxyXG5jb25zdCBTdGF0aWNDYXJkID0gKHsgcG9zaXRpb24sIGRpZ2l0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3Bvc2l0aW9ufT5cclxuICAgICAgPHNwYW4+e2RpZ2l0fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBmdW5jdGlvbiBjb21wb25lbnRcclxuY29uc3QgTm9ybWFsVW5pdENvbnRhaW5lciA9ICh7IGRpZ2l0LCB1bml0ID0gJ3RpbWUnLCBjb3VudGRvd24gfSkgPT4ge1xyXG4gIC8vIGFzc2lnbiBkaWdpdCB2YWx1ZXNcclxuICBsZXQgY3VycmVudERpZ2l0ID0gZGlnaXQ7XHJcbiAgbGV0IHByZXZpb3VzRGlnaXQ7XHJcbiAgaWYgKGNvdW50ZG93bikge1xyXG4gICAgcHJldmlvdXNEaWdpdCA9IGRpZ2l0ICsgMTtcclxuXHJcbiAgICAvLyB0byBwcmV2ZW50IGEgbmVnYXRpdmUgdmFsdWVcclxuICAgIGlmICh1bml0ICE9PSAnaG91cnMnKSB7XHJcbiAgICAgIHByZXZpb3VzRGlnaXQgPSBwcmV2aW91c0RpZ2l0ID09PSA2MCA/IDU5IDogcHJldmlvdXNEaWdpdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByZXZpb3VzRGlnaXQgPSBwcmV2aW91c0RpZ2l0ID09PSAyNCA/IDIzIDogcHJldmlvdXNEaWdpdDtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gYWRkIHplcm9cclxuICBpZiAoY3VycmVudERpZ2l0IDwgMTApIHtcclxuICAgIGN1cnJlbnREaWdpdCA9IGAwJHtjdXJyZW50RGlnaXR9YDtcclxuICB9XHJcbiAgaWYgKHByZXZpb3VzRGlnaXQgPCAxMCkge1xyXG4gICAgcHJldmlvdXNEaWdpdCA9IGAwJHtwcmV2aW91c0RpZ2l0fWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eydOb3JtYWxVbml0Q29udGFpbmVyJ30+XHJcbiAgICAgIDxTdGF0aWNDYXJkIHBvc2l0aW9uPXsnTm9ybWFsdXBwZXJDYXJkJ30gZGlnaXQ9e2N1cnJlbnREaWdpdH0gLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlnaXRMYWJlbFwiPlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXt1bml0fSBkZWZhdWx0VmFsdWU9XCJ1bml0XCIgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lUmVtYWluaW5nKGVuZHRpbWUpIHtcclxuICBsZXQgdCA9IERhdGUucGFyc2UoZW5kdGltZSkgLSBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpO1xyXG4gIGxldCBkYXlzID0gTWF0aC5mbG9vcih0IC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICBsZXQgaG91cnMgPSBNYXRoLmZsb29yKCh0IC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCk7XHJcbiAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0IC8gMTAwMCAvIDYwKSAlIDYwKTtcclxuICBsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHQgLyAxMDAwKSAlIDYwKTtcclxuICByZXR1cm4ge1xyXG4gICAgdGltZTogdCxcclxuICAgIGRheXMsXHJcbiAgICBob3VycyxcclxuICAgIG1pbnV0ZXMsXHJcbiAgICBzZWNvbmRzLFxyXG4gIH07XHJcbn1cclxuXHJcbi8vIGNsYXNzIGNvbXBvbmVudFxyXG5jbGFzcyBOb3JtYWxDbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRheXM6IDAsXHJcbiAgICAgIGhvdXJzOiAwLFxyXG4gICAgICBtaW51dGVzOiAwLFxyXG4gICAgICBzZWNvbmRzOiAwLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy50aW1lcklEID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVUaW1lKCksIDUwKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySUQpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVGltZSgpIHtcclxuICAgIGNvbnN0IHsgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSA9IGdldFRpbWVSZW1haW5pbmcoXHJcbiAgICAgIHRoaXMucHJvcHMuY291bnRkb3duXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChkYXlzICE9PSB0aGlzLnN0YXRlLmRheXMpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF5cyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb24gaG91ciBjaGFuZ2UsIHVwZGF0ZSBob3VycyBhbmQgc2h1ZmZsZSBzdGF0ZVxyXG4gICAgaWYgKGhvdXJzICE9PSB0aGlzLnN0YXRlLmhvdXJzKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGhvdXJzLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIG9uIG1pbnV0ZSBjaGFuZ2UsIHVwZGF0ZSBtaW51dGVzIGFuZCBzaHVmZmxlIHN0YXRlXHJcbiAgICBpZiAobWludXRlcyAhPT0gdGhpcy5zdGF0ZS5taW51dGVzKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1pbnV0ZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gb24gc2Vjb25kIGNoYW5nZSwgdXBkYXRlIHNlY29uZHMgYW5kIHNodWZmbGUgc3RhdGVcclxuICAgIGlmIChzZWNvbmRzICE9PSB0aGlzLnN0YXRlLnNlY29uZHMpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc2Vjb25kcyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAvLyBzdGF0ZSBvYmplY3QgZGVzdHJ1Y3R1cmluZ1xyXG4gICAgY29uc3QgeyBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHsgY291bnRkb3duLCBkaXZpZGVyIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9eydOb3JtYWxDbG9jayd9PlxyXG4gICAgICAgIDxOb3JtYWxVbml0Q29udGFpbmVyIGNvdW50ZG93bj17Y291bnRkb3dufSB1bml0PXsnZGF5cyd9IGRpZ2l0PXtkYXlzfSAvPlxyXG4gICAgICAgIHtkaXZpZGVyID8gPHNwYW4gY2xhc3NOYW1lPVwiZGl2aWRlckNvbG9uXCI+Ojwvc3Bhbj4gOiAnJ31cclxuICAgICAgICA8Tm9ybWFsVW5pdENvbnRhaW5lclxyXG4gICAgICAgICAgY291bnRkb3duPXtjb3VudGRvd259XHJcbiAgICAgICAgICB1bml0PXsnaG91cnMnfVxyXG4gICAgICAgICAgZGlnaXQ9e2hvdXJzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2RpdmlkZXIgPyA8c3BhbiBjbGFzc05hbWU9XCJkaXZpZGVyQ29sb25cIj46PC9zcGFuPiA6ICcnfVxyXG4gICAgICAgIDxOb3JtYWxVbml0Q29udGFpbmVyXHJcbiAgICAgICAgICBjb3VudGRvd249e2NvdW50ZG93bn1cclxuICAgICAgICAgIHVuaXQ9eydtaW51dGVzJ31cclxuICAgICAgICAgIGRpZ2l0PXttaW51dGVzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2RpdmlkZXIgPyA8c3BhbiBjbGFzc05hbWU9XCJkaXZpZGVyQ29sb25cIj46PC9zcGFuPiA6ICcnfVxyXG4gICAgICAgIDxOb3JtYWxVbml0Q29udGFpbmVyXHJcbiAgICAgICAgICBjb3VudGRvd249e2NvdW50ZG93bn1cclxuICAgICAgICAgIHVuaXQ9eydzZWNvbmRzJ31cclxuICAgICAgICAgIGRpZ2l0PXtzZWNvbmRzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vcm1hbENsb2NrO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0JztcclxuaW1wb3J0IHsgaWNfY2hlY2tfY2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L21kL2ljX2NoZWNrX2NpcmNsZSc7XHJcbmltcG9ydCB7IGljX2NhbmNlbCB9IGZyb20gJ3JlYWN0LWljb25zLWtpdC9tZC9pY19jYW5jZWwnO1xyXG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XHJcbmltcG9ydCBIZWFkU2hha2UgZnJvbSAncmVhY3QtcmV2ZWFsL0hlYWRTaGFrZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XHJcblxyXG4vL3N0eWxlZC1jb21wb25lbnRzIGZvciBzdHlsaW5nc1xyXG5jb25zdCBGaWVsZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgYDtcclxuY29uc3QgSGVscFRleHQgPSBzdHlsZWQuc3BhbmBgO1xyXG5jb25zdCBJbnB1dEZlZWRiYWNrID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogJHtwcm9wcyA9PlxyXG4gICAgcHJvcHMuc3VjY2VzcyA/ICdyZ2IoMjUwLCAyNTEsIDI1NSknIDogJ3JnYigyNTAsIDI1MSwgMjU1KSd9O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxyXG4gICAgcHJvcHMuc3VjY2VzcyA/ICdyZ2IoMTQsIDE1OCwgMTA1KScgOiAncmdiKDI0NiwgODYsIDg2KSd9O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgY29sb3I6IHJnYigyNTAsIDI1MSwgMjU1KTtcclxuICBsZWZ0OiAke3Byb3BzID0+IChwcm9wcy5zdWNjZXNzID8gJzE3JScgOiAnMCcpfTtcclxuICBib3R0b206IC02MHB4O1xyXG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT5cclxuICAgIHByb3BzLnN1Y2Nlc3NcclxuICAgICAgPyAnMHB4IDVweCAxOC44cHggMS4ycHggcmdiYSgxNywgMTgyLCAxMjIsIDAuNSknXHJcbiAgICAgIDogJzBweCA1cHggMTguOHB4IDEuMnB4IHJnYmEoMjQ2LCA4NiwgODYsIDAuMzUpJ307XHJcbiAgcGFkZGluZzogNnB4IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGxpbmVhcjtcclxuICB3aWR0aDogOTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiA5OTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgYm90dG9tOiAtMTEwcHg7XHJcbiAgfVxyXG4gIGkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgfVxyXG4gIHNwYW4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDI0NSwgMjQ5KTtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBib3JkZXItcmFkaXVzOiAyOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICB3aWR0aDogMzE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBjb2xvcjogcmdiKDE0MiwgMTQ3LCAxNTQpO1xyXG4gIH1cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gcmVhY3QtY29tcG9uZW50c1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0RmllbGQoe1xyXG4gIGxhYmVsLFxyXG4gIGlkLFxyXG4gIGhlbHBUZXh0LFxyXG4gIGVycm9yLFxyXG4gIHN1Y2Nlc3MsXHJcbiAgZGVmYXVsdExhYmVsLFxyXG4gIHR5cGUsXHJcbiAgcGxhY2Vob2xkZXIsXHJcbiAgbmFtZSxcclxuICB2YWx1ZSxcclxuICBvbkJsdXIsXHJcbiAgb25Gb2N1cyxcclxuICBvbkNoYW5nZSxcclxuICBjbGFzc05hbWUsXHJcbiAgZXJyb3JNZXNzYWdlLFxyXG4gIHN1Y2Nlc3NNZXNzYWdlLFxyXG4gIC4uLnByb3BzXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZpZWxkV3JhcHBlclxyXG4gICAgICBjbGFzc05hbWU9e2BmaWVsZC13cmFwcGVyICR7Y2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyd9YC50cmltKCl9XHJcbiAgICA+XHJcbiAgICAgIHtsYWJlbCAmJiAoXHJcbiAgICAgICAgPExhYmVsIGh0bWxGb3I9e2lkfT5cclxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtsYWJlbH0gZGVmYXVsdE1lc3NhZ2U9e2xhYmVsfSAvPlxyXG4gICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICl9XHJcbiAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtwbGFjZWhvbGRlcn0gZGVmYXVsdE1lc3NhZ2U9e3BsYWNlaG9sZGVyfT5cclxuICAgICAgICB7cGxhY2Vob2xkZXIgPT4gKFxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Zvcm1hdHRlZE1lc3NhZ2U+XHJcbiAgICAgIHtoZWxwVGV4dCAmJiAoXHJcbiAgICAgICAgPEhlbHBUZXh0PlxyXG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2hlbHBUZXh0fSBkZWZhdWx0TWVzc2FnZT17aGVscFRleHR9IC8+XHJcbiAgICAgICAgPC9IZWxwVGV4dD5cclxuICAgICAgKX1cclxuICAgICAge2Vycm9yICYmIChcclxuICAgICAgICA8SGVhZFNoYWtlIGR1cmF0aW9uPXsxMDAwfT5cclxuICAgICAgICAgIDxJbnB1dEZlZWRiYWNrIGVycm9yIGNsYXNzTmFtZT1cImZlZWRiYWNrXCI+XHJcbiAgICAgICAgICAgIDxJY29uIGljb249e2ljX2NhbmNlbH0gLz5cclxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJlcnJvck1zZ1wiIGRlZmF1bHRNZXNzYWdlPVwiZXJyb3JNZXNzYWdlXCIgLz5cclxuICAgICAgICAgIDwvSW5wdXRGZWVkYmFjaz5cclxuICAgICAgICA8L0hlYWRTaGFrZT5cclxuICAgICAgKX1cclxuICAgICAge3N1Y2Nlc3MgJiYgKFxyXG4gICAgICAgIDxGYWRlIGJvdHRvbSBkdXJhdGlvbj17MjAwMH0+XHJcbiAgICAgICAgICA8SW5wdXRGZWVkYmFjayBzdWNjZXNzIGNsYXNzTmFtZT1cImZlZWRiYWNrXCI+XHJcbiAgICAgICAgICAgIDxJY29uIGljb249e2ljX2NoZWNrX2NpcmNsZX0gLz5cclxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcclxuICAgICAgICAgICAgICBpZD17c3VjY2Vzc01lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9XCJzdWNjZXNzTWVzc2FnZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0lucHV0RmVlZGJhY2s+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICApfVxyXG4gICAgPC9GaWVsZFdyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuLyoqIElub3V0IHByb3AgdHlwZSBjaGVja2luZy4gKi9cclxuVGV4dEZpZWxkLnByb3BUeXBlcyA9IHtcclxuICAvKiogY2xhc3NOYW1lIG9mIHRoZSBJbnB1dCBjb21wb25lbnQuICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAvKiogU2V0IGlucHV0IGxhYmVsIHZhbHVlLiAqL1xyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAvKiogVGhlIGlucHV0IHZhbHVlLCByZXF1aXJlZCBmb3IgYSBjb250cm9sbGVkIGNvbXBvbmVudC4gKi9cclxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgLyoqIFNldCBpbnB1dCB0eXBlIG9mIHRoZSBpbnB1dCBlbGVtZW50LiBEZWZhdWx0IHR5cGUgaXMgdGV4dC4gKi9cclxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWyd0ZXh0JywgJ2VtYWlsJywgJ251bWJlcicsICdwYXNzd29yZCddKSxcclxuXHJcbiAgLyoqXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cclxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgLlxyXG4gICAqL1xyXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbi8qKiBJbm91dCBkZWZhdWx0IHR5cGUuICovXHJcbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcclxuICB0eXBlOiAndGV4dCcsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICBzY3JvbGwgPSBmYWxzZVxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcm91dGVyLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBsZXQgY2hpbGQ6IGFueVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICB0cnkge1xuICAgICAgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjaGlsZCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIH1cbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmXG4gICAgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmXG4gICAgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSkgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmXG4gICAgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbik6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzIGFzIGFueVxuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlOiBQcm9taXNlPHZvaWQ+IHwgdW5kZWZpbmVkXG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICA7KGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgbXMpXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgbXMpXG4gICAgICApXG4gICAgfVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPVxuICAgIG5ldyBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+KChyZXNvbHZlKSA9PiB7XG4gICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICAgIGNiICYmIGNiKClcbiAgICAgIH1cbiAgICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPHN0cmluZywgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnQ+ID1cbiAgICBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8c3RyaW5nLCBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5PiA9XG4gICAgbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgLnRoZW4oKHsgc2NyaXB0cywgY3NzIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICAgIF0gYXMgY29uc3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCkgPT4gKHtcbiAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV0sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICByb3V0ZUZpbGVzUHJvbWlzZSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICcuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgdHlwZSB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyIH1cblxuZXhwb3J0IHR5cGUgeyBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG4gICdkb21haW5Mb2NhbGVzJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dIGFzIGNvbnN0XG5leHBvcnQgdHlwZSBSb3V0ZXJFdmVudCA9IHR5cGVvZiByb3V0ZXJFdmVudHNbbnVtYmVyXVxuXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vc2hhcmVkL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChcbiAgICBDb21wb3NlZENvbXBvbmVudCBhcyBhbnlcbiAgKS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgUm91dGVyRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGVyJ1xuaW1wb3J0IHR5cGUgeyBEb21haW5Mb2NhbGUgfSBmcm9tICcuLi8uLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIG5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPVxuICAgIHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVbXVxuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJlxuICAgICAgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlclxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fFxuICAgICAgICBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKVxuICAgICAgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArXG4gICAgICAgICAgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKVxuICAgIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBsZXQgYmFzZTogVVJMXG4gIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuXG4gIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKVxuICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoXG4gICAgPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpXG4gICAgOiB1cmxBc1N0cmluZ1xuXG4gIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/JylcblxuICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYFxuICAgIClcbiAgICBjb25zdCBub3JtYWxpemVkVXJsID0gbm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90bylcbiAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmxcbiAgfVxuXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cblxuICB0cnkge1xuICAgIGJhc2UgPSBuZXcgVVJMKFxuICAgICAgdXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSxcbiAgICAgICdodHRwOi8vbidcbiAgICApXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJylcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKFxuICAgICAgcmVzb2x2ZUFzID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXSA6IHJlc29sdmVkSHJlZlxuICAgICkgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlW11cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXI8Um91dGVyRXZlbnQ+XG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZVtdXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXI8Um91dGVyRXZlbnQ+ID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlW11cbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgIChzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwKSB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0geyBsb2NhbGUgfVxuICAgICAgICA7KG9wdGlvbnMgYXMgYW55KS5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhcyAhPT0gcGF0aG5hbWVcblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgb3B0aW9uc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID1cbiAgICAgIHVybCA9PT0gYXMgfHwgKG9wdGlvbnMgYXMgYW55KS5faCB8fCAob3B0aW9ucyBhcyBhbnkpLl9zaG91bGRSZXNvbHZlSHJlZlxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKFxuICAgICAgIShvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiZcbiAgICAgICFsb2NhbGVDaGFuZ2VcbiAgICApIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgOyhvcHRpb25zIGFzIGFueSkuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUpXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUpXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwgPz8gIWlzVmFsaWRTaGFsbG93Um91dGVcbiAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8geyB4OiAwLCB5OiAwIH0gOiBudWxsXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgPz8gcmVzZXRTY3JvbGxcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6ICh0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSksXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogODUlO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDFweCkge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5M3B4KSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEljb24gZnJvbSAncmVhY3QtaWNvbnMta2l0JztcclxuaW1wb3J0IHsgc29jaWFsRHJpYmJibGVPdXRsaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L2lvbmljb25zL3NvY2lhbERyaWJiYmxlT3V0bGluZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDAgOXB4O1xyXG4gIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzM0NDRmMTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU29jaWFsU2hhcmUgPSAoeyBpdGVtcyA9IFtdLCBjbGFzc05hbWUsIGljb25TaXplID0gMjIgfSkgPT4ge1xyXG4gIGlmICghaXRlbXMpIHJldHVybiBudWxsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlciBjbGFzc05hbWU9e2Bzb2NpYWxfcHJvZmlsZXMgJHtjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJ31gLnRyaW0oKX0+XHJcbiAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgPEl0ZW0ga2V5PXtgc29jaWFsLWl0ZW0tJHtpdGVtLmlkfWB9IGNsYXNzTmFtZT1cInNvY2lhbF9wcm9maWxlX2l0ZW1cIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0udXJsIHx8ICcjJ30+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxJY29uIGljb249e2l0ZW0uaWNvbiB8fCBzb2NpYWxEcmliYmJsZU91dGxpbmV9IHNpemU9e2ljb25TaXplfSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9JdGVtPlxyXG4gICAgICApKX1cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgU29jaWFsU2hhcmU7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vQ29udGFpbmVyL0NvbnRhaW5lcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU29jaWFsU2hhcmUvU29jaWFsU2hhcmUnO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnO1xyXG5pbXBvcnQgTGFuZ3VhZ2VQcm92aWRlciBmcm9tICdAZGVhZGxpbmUvY29tbW9uL0xhbmd1YWdlU3dpdGNoZXIvY29udGV4dC9sYW5ndWFnZS5wcm92aWRlcic7XHJcbmltcG9ydCBMYW5ndWFnZVN3aXRjaGVyIGZyb20gJ0BkZWFkbGluZS9jb21tb24vTGFuZ3VhZ2VTd2l0Y2hlcic7XHJcbmltcG9ydCBsYW5ndWFnZUNvbmZpZyBmcm9tICdAZGVhZGxpbmUvY29tbW9uL0xhbmd1YWdlU3dpdGNoZXIvY29uZmlnJztcclxuaW1wb3J0IE5vcm1hbENsb2NrIGZyb20gJ0BkZWFkbGluZS9jb21wb25lbnRzL05vcm1hbENsb2NrL05vcm1hbENsb2NrLmpzJztcclxuaW1wb3J0IE1haW5XcmFwcGVyLCB7XHJcbiAgTWFpbkNvbnRlbnRTZWN0aW9uLFxyXG4gIE5vcm1hbENsb2NrV3JhcHBlcixcclxuICBGb290ZXJTZWN0aW9uLFxyXG4gIENvbnRhY3RGb3JtV3JhcCxcclxuICBMb2dvSW1hZ2VDb250YWluZXIsXHJcbiAgUGFydGljbGVDb250YWluZXIsXHJcbiAgQ29udGVudFdyYXBwZXIsXHJcbiAgTm90aWZ5QnV0dG9uLFxyXG59IGZyb20gJ0BkZWFkbGluZS9jb21tb24vdWkvZWxldmVuLnN0eWxlJztcclxuXHJcbmltcG9ydCBMb2dvSW1hZ2UgZnJvbSAnQGRlYWRsaW5lL2NvbW1vbi9zdGF0aWMvaW1hZ2VzL2xvZ29PbmUucG5nJztcclxuaW1wb3J0IHsgU09DSUFMX1BST0ZJTEVTIH0gZnJvbSAnQGRlYWRsaW5lL2NvbW1vbi9kYXRhL3NvY2lhbC1zaGFyZS90aHJlZSc7XHJcbi8vIExhbmd1YWdlIHRyYW5zbGF0aW9uIGZpbGVzXHJcbmltcG9ydCBsb2NhbEVuZyBmcm9tICdAZGVhZGxpbmUvY29tbW9uL2RhdGEvdHJhbnNsYXRpb24vZWxldmVuL2VuLmpzb24nO1xyXG5pbXBvcnQgbG9jYWxBciBmcm9tICdAZGVhZGxpbmUvY29tbW9uL2RhdGEvdHJhbnNsYXRpb24vZWxldmVuL2FyLmpzb24nO1xyXG5pbXBvcnQgbG9jYWxFcyBmcm9tICdAZGVhZGxpbmUvY29tbW9uL2RhdGEvdHJhbnNsYXRpb24vZWxldmVuL2VzLmpzb24nO1xyXG5pbXBvcnQgbG9jYWxEZSBmcm9tICdAZGVhZGxpbmUvY29tbW9uL2RhdGEvdHJhbnNsYXRpb24vZWxldmVuL2RlLmpzb24nO1xyXG5pbXBvcnQgbG9jYWxDbiBmcm9tICdAZGVhZGxpbmUvY29tbW9uL2RhdGEvdHJhbnNsYXRpb24vZWxldmVuL3poLmpzb24nO1xyXG5pbXBvcnQgbG9jYWxJbCBmcm9tICdAZGVhZGxpbmUvY29tbW9uL2RhdGEvdHJhbnNsYXRpb24vZWxldmVuL2hlLmpzb24nO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFNvY2lhbFNoYXJlIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICdAZGVhZGxpbmUvY29tcG9uZW50cy9Db250YWN0Rm9ybS9Db250YWN0Rm9ybSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQGRlYWRsaW5lL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IFBhcnRpY2xlMiBmcm9tICdAZGVhZGxpbmUvY29tbW9uL3N0YXRpYy9pbWFnZXMvZWxldmVuLzIucG5nJztcclxuaW1wb3J0IFBhcnRpY2xlMyBmcm9tICdAZGVhZGxpbmUvY29tbW9uL3N0YXRpYy9pbWFnZXMvZWxldmVuLzMucG5nJztcclxuaW1wb3J0IFBhcnRpY2xlNiBmcm9tICdAZGVhZGxpbmUvY29tbW9uL3N0YXRpYy9pbWFnZXMvZWxldmVuLzYucG5nJztcclxuaW1wb3J0IFBhcnRpY2xlNyBmcm9tICdAZGVhZGxpbmUvY29tbW9uL3N0YXRpYy9pbWFnZXMvZWxldmVuLzcucG5nJztcclxuaW1wb3J0IFBhcnRpY2xlOCBmcm9tICdAZGVhZGxpbmUvY29tbW9uL3N0YXRpYy9pbWFnZXMvZWxldmVuLzgucG5nJztcclxuaW1wb3J0IFBhcnRpY2xlOSBmcm9tICdAZGVhZGxpbmUvY29tbW9uL3N0YXRpYy9pbWFnZXMvZWxldmVuLzkucG5nJztcclxuLy8gTGFuZ3VhZ2UgdHJhbnNsYXRpb24gQ29uZmlnXHJcbmNvbnN0IG1lc3NhZ2VzID0ge1xyXG4gIGVuOiBsb2NhbEVuZyxcclxuICBhcjogbG9jYWxBcixcclxuICBlczogbG9jYWxFcyxcclxuICBkZTogbG9jYWxEZSxcclxuICB6aDogbG9jYWxDbixcclxuICBoZTogbG9jYWxJbCxcclxufTtcclxuXHJcbmNvbnN0IGRlYWRsaW5lID0gbmV3IERhdGUoRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKSArIDIyICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcblxyXG5jb25zdCBQYXJ0aWNsZXNDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQYXJ0aWNsZXNcclxuICAgICAgICBjbGFzc05hbWU9XCJwYXJ0aWNsZVwiXHJcbiAgICAgICAgcGFyYW1zPXt7XHJcbiAgICAgICAgICBwYXJ0aWNsZXM6IHtcclxuICAgICAgICAgICAgbnVtYmVyOiB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IDE0LFxyXG4gICAgICAgICAgICAgIGRlbnNpdHk6IHsgZW5hYmxlOiB0cnVlLCB2YWx1ZV9hcmVhOiAxNDAwIH0sXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFsnaW1hZ2VzJ10sXHJcbiAgICAgICAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHNyYzogYCR7UGFydGljbGUyfWAsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNSxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHNyYzogYCR7UGFydGljbGUzfWAsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NSxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHNyYzogYCR7UGFydGljbGU2fWAsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHNyYzogYCR7UGFydGljbGU3fWAsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1NCxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHNyYzogYCR7UGFydGljbGU4fWAsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NCxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBzcmM6IGAke1BhcnRpY2xlOX1gLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IHtcclxuICAgICAgICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICAgICAgICByYW5kb206IHRydWUsXHJcbiAgICAgICAgICAgICAgYW5pbTogeyBlbmFibGU6IGZhbHNlLCBzcGVlZDogMSwgb3BhY2l0eV9taW46IDEsIHN5bmM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNpemU6IHtcclxuICAgICAgICAgICAgICB2YWx1ZTogMTAsXHJcbiAgICAgICAgICAgICAgcmFuZG9tOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb3ZlOiB7XHJcbiAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHNwZWVkOiAxLFxyXG4gICAgICAgICAgICAgIGRpcmVjdGlvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgIHJhbmRvbTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGJvdW5jZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBhdHRyYWN0OiB7IGVuYWJsZTogdHJ1ZSwgcm90YXRlWDogMTAwLCByb3RhdGVZOiA0MDAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZXRpbmFfZGV0ZWN0OiB0cnVlLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB0b2dnbGVDb250YWN0ID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExhbmd1YWdlUHJvdmlkZXIgbWVzc2FnZXM9e21lc3NhZ2VzfT5cclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgey8qIExvYWQgZ29vZ2xlIGZvbnRzICovfVxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MTAwLDEwMGksMzAwLDMwMGksNDAwLDQwMGksNTAwLDUwMGksNzAwLDcwMGksOTAwLDkwMGlcIlxyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNvbWZvcnRhYTozMDAsNDAwLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RE0rU2Fuczo0MDAsNTAwLDcwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxOZXh0U2VvXHJcbiAgICAgICAgICB0aXRsZT1cIlRoZSBtb3N0IGFmZm9yZGFibGUgd2F5IHRvIGJ1eSB1c2VkIGNhcnMgZm9yIGFueW9uZS5cIlxyXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJDcmFzZW1iYSB0aGUgbW9zdCBhZmZvcmRhYmxlIHdheSB0byBidXkgdXNlZCBjYXJzIGZvciBhbnlvbmUsIGNoZWFwIGNhcnMsIGNoZWFwIHVzZWQgY2FycywgdXNlZCBjYXJzLCB1c2VkLCBiYWQgY3JlZGl0LCBjcmVkaXQsIGJhZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TWFpbldyYXBwZXI+XHJcbiAgICAgICAgICA8UGFydGljbGVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxQYXJ0aWNsZXNDb21wb25lbnQgLz5cclxuICAgICAgICAgIDwvUGFydGljbGVDb250YWluZXI+XHJcbiAgICAgICAgICA8TG9nb0ltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnL2VsZXZlbid9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJjYXJzZW1iYV9sb2dvLnN2Z1wiIHdpZHRoPXsxNTB9IGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Mb2dvSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1haW5Db250YWluZXJcIj5cclxuICAgICAgICAgICAgPE1haW5Db250ZW50U2VjdGlvbj5cclxuICAgICAgICAgICAgICA8Tm9ybWFsQ2xvY2tXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPE5vcm1hbENsb2NrIGNvdW50ZG93bj17ZGVhZGxpbmV9IC8+XHJcbiAgICAgICAgICAgICAgPC9Ob3JtYWxDbG9ja1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwidGlja2VyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxoMiBpZD1cIm1haW5NZXNzYWdlXCIgc3R5bGU9e3t0ZXh0QWxpZ246IFwibGVmdFwiLCBwYWRkaW5nOiBcIjIwcHggMFwiLCBsaW5lSGVpZ2h0OiAnMS4yZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxiIHN0eWxlPXt7Y29sb3I6XCIjZTc2ZjUxXCJ9fT5DYXJzZW1iYSBJbmMuPC9iPjxiciAvPjxwIHN0eWxlPXt7Zm9udFNpemU6IDI1LCB0ZXh0QWxpZ246IFwibGVmdFwiLCBsaW5lSGVpZ2h0OiAnMS4zZW0nfX0+dGhlIG1vc3QgYWZmb3JkYWJsZSB3YXkgdG8gYnV5IHVzZWQgY2FycyBmb3IgYW55b25lLjwvcD5cclxuICAgICAgICAgICAgICAgICAgey8qIDxGb3JtYXR0ZWRNZXNzYWdlIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIHt2aXNpYmxlID8gKFxyXG4gICAgICAgICAgICAgICAgICA8Q29udGFjdEZvcm1XcmFwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWN0Rm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbnRhY3RGb3JtV3JhcD5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHshdmlzaWJsZSA/IChcclxuICAgICAgICAgICAgICAgICAgPE5vdGlmeUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwibm90aWZ5VGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb250YWN0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTm90aWZ5QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgICAgICAgICAgPC9NYWluQ29udGVudFNlY3Rpb24+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgIDxGb290ZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICB7LyogPFNvY2lhbFNoYXJlIGl0ZW1zPXtTT0NJQUxfUFJPRklMRVN9IC8+ICovfVxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImNvcHlyaWdodFRleHRcIiAvPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L0Zvb3RlclNlY3Rpb24+XHJcbiAgICAgICAgPC9NYWluV3JhcHBlcj5cclxuICAgICAgICA8TGFuZ3VhZ2VTd2l0Y2hlciBsYW5ndWFnZUNvbmZpZz17bGFuZ3VhZ2VDb25maWd9IC8+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8L0xhbmd1YWdlUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3JtYXRqcy9pbnRsLXBsdXJhbHJ1bGVzL2xvY2FsZS1kYXRhL2FyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3JtYXRqcy9pbnRsLXBsdXJhbHJ1bGVzL2xvY2FsZS1kYXRhL2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3JtYXRqcy9pbnRsLXBsdXJhbHJ1bGVzL2xvY2FsZS1kYXRhL2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3JtYXRqcy9pbnRsLXBsdXJhbHJ1bGVzL2xvY2FsZS1kYXRhL2VzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3JtYXRqcy9pbnRsLXBsdXJhbHJ1bGVzL2xvY2FsZS1kYXRhL2hlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3JtYXRqcy9pbnRsLXBsdXJhbHJ1bGVzL2xvY2FsZS1kYXRhL3poXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3JtYXRqcy9pbnRsLXBsdXJhbHJ1bGVzL3BvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2VvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zLWtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy1raXQvaW9uaWNvbnMvc29jaWFsRHJpYmJibGVPdXRsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zLWtpdC9pb25pY29ucy9zb2NpYWxGYWNlYm9va1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy1raXQvaW9uaWNvbnMvc29jaWFsR2l0aHViXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zLWtpdC9pb25pY29ucy9zb2NpYWxHb29nbGVwbHVzT3V0bGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy1raXQvaW9uaWNvbnMvc29jaWFsVHdpdHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfY2FuY2VsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zLWtpdC9tZC9pY19jaGVja19jaXJjbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW50bFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wYXJ0aWNsZXMtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmV2ZWFsL0ZhZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmV2ZWFsL0hlYWRTaGFrZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==