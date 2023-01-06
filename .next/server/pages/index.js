"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/languageDetector.js":
/*!*********************************!*\
  !*** ./lib/languageDetector.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_language_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-language-detector */ \"next-language-detector\");\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../next-i18next.config */ \"./next-i18next.config.js\");\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_language_detector__WEBPACK_IMPORTED_MODULE_0__]);\nnext_language_detector__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_language_detector__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    supportedLngs: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.locales),\n    fallbackLng: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.defaultLocale)\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbGFuZ3VhZ2VEZXRlY3Rvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXFEO0FBQ0g7QUFFbEQsaUVBQWVBLGtFQUFnQkEsQ0FBQztJQUM5QkUsZUFBZUQsMEVBQTBCO0lBQ3pDSSxhQUFhSixnRkFBZ0M7QUFDL0MsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUvLi9saWIvbGFuZ3VhZ2VEZXRlY3Rvci5qcz84MmI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsYW5ndWFnZURldGVjdG9yIGZyb20gJ25leHQtbGFuZ3VhZ2UtZGV0ZWN0b3InXG5pbXBvcnQgaTE4bmV4dENvbmZpZyBmcm9tICcuLi9uZXh0LWkxOG5leHQuY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBsYW5ndWFnZURldGVjdG9yKHtcbiAgc3VwcG9ydGVkTG5nczogaTE4bmV4dENvbmZpZy5pMThuLmxvY2FsZXMsXG4gIGZhbGxiYWNrTG5nOiBpMThuZXh0Q29uZmlnLmkxOG4uZGVmYXVsdExvY2FsZVxufSkiXSwibmFtZXMiOlsibGFuZ3VhZ2VEZXRlY3RvciIsImkxOG5leHRDb25maWciLCJzdXBwb3J0ZWRMbmdzIiwiaTE4biIsImxvY2FsZXMiLCJmYWxsYmFja0xuZyIsImRlZmF1bHRMb2NhbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/languageDetector.js\n");

/***/ }),

/***/ "./lib/redirect.js":
/*!*************************!*\
  !*** ./lib/redirect.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Redirect\": () => (/* binding */ Redirect),\n/* harmony export */   \"getRedirect\": () => (/* binding */ getRedirect),\n/* harmony export */   \"useRedirect\": () => (/* binding */ useRedirect)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _languageDetector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./languageDetector */ \"./lib/languageDetector.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_languageDetector__WEBPACK_IMPORTED_MODULE_3__]);\n_languageDetector__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst useRedirect = (to)=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    to = to || router.asPath;\n    console.log(\"hey\", to);\n    // language detection\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const detectedLng = _languageDetector__WEBPACK_IMPORTED_MODULE_3__[\"default\"].detect();\n        if (to.startsWith(\"/\" + detectedLng) && router.route === \"/404\") {\n            // prevent endless loop\n            router.replace(\"/\" + detectedLng + router.route);\n            return;\n        }\n        _languageDetector__WEBPACK_IMPORTED_MODULE_3__[\"default\"].cache(detectedLng);\n        router.replace(\"/\" + detectedLng + to);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\nconst Redirect = ()=>{\n    useRedirect();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n// eslint-disable-next-line react/display-name\nconst getRedirect = (to)=>()=>{\n        useRedirect(to);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    };\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcmVkaXJlY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWtDO0FBQ007QUFDVTtBQUUzQyxNQUFNRyxjQUFjLENBQUNDLEtBQU87SUFDakMsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCRyxLQUFLQSxNQUFNQyxPQUFPQyxNQUFNO0lBRXhCQyxRQUFRQyxHQUFHLENBQUMsT0FBTUo7SUFFbEIscUJBQXFCO0lBQ3JCSixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVMsY0FBY1AsZ0VBQXVCO1FBQzNDLElBQUlFLEdBQUdPLFVBQVUsQ0FBQyxNQUFNRixnQkFBZ0JKLE9BQU9PLEtBQUssS0FBSyxRQUFRO1lBQy9ELHVCQUF1QjtZQUN2QlAsT0FBT1EsT0FBTyxDQUFDLE1BQU1KLGNBQWNKLE9BQU9PLEtBQUs7WUFDL0M7UUFDRixDQUFDO1FBQ0RWLCtEQUFzQixDQUFDTztRQUN2QkosT0FBT1EsT0FBTyxDQUFDLE1BQU1KLGNBQWNMO0lBQ3JDO0lBRUEscUJBQU87QUFDVCxFQUFFO0FBRUssTUFBTVcsV0FBVyxJQUFNO0lBQzVCWjtJQUNBLHFCQUFPO0FBQ1QsRUFBRTtBQUVGLDhDQUE4QztBQUN2QyxNQUFNYSxjQUFjLENBQUNaLEtBQU8sSUFBTTtRQUN2Q0QsWUFBWUM7UUFDWixxQkFBTztJQUNULEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLy4vbGliL3JlZGlyZWN0LmpzPzgzZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBsYW5ndWFnZURldGVjdG9yIGZyb20gXCIuL2xhbmd1YWdlRGV0ZWN0b3JcIjtcblxuZXhwb3J0IGNvbnN0IHVzZVJlZGlyZWN0ID0gKHRvKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB0byA9IHRvIHx8IHJvdXRlci5hc1BhdGg7XG5cbiAgY29uc29sZS5sb2coJ2hleScsdG8pO1xuXG4gIC8vIGxhbmd1YWdlIGRldGVjdGlvblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRldGVjdGVkTG5nID0gbGFuZ3VhZ2VEZXRlY3Rvci5kZXRlY3QoKTtcbiAgICBpZiAodG8uc3RhcnRzV2l0aChcIi9cIiArIGRldGVjdGVkTG5nKSAmJiByb3V0ZXIucm91dGUgPT09IFwiLzQwNFwiKSB7XG4gICAgICAvLyBwcmV2ZW50IGVuZGxlc3MgbG9vcFxuICAgICAgcm91dGVyLnJlcGxhY2UoXCIvXCIgKyBkZXRlY3RlZExuZyArIHJvdXRlci5yb3V0ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxhbmd1YWdlRGV0ZWN0b3IuY2FjaGUoZGV0ZWN0ZWRMbmcpO1xuICAgIHJvdXRlci5yZXBsYWNlKFwiL1wiICsgZGV0ZWN0ZWRMbmcgKyB0byk7XG4gIH0pO1xuXG4gIHJldHVybiA8PjwvPjtcbn07XG5cbmV4cG9ydCBjb25zdCBSZWRpcmVjdCA9ICgpID0+IHtcbiAgdXNlUmVkaXJlY3QoKTtcbiAgcmV0dXJuIDw+PC8+O1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxuZXhwb3J0IGNvbnN0IGdldFJlZGlyZWN0ID0gKHRvKSA9PiAoKSA9PiB7XG4gIHVzZVJlZGlyZWN0KHRvKTtcbiAgcmV0dXJuIDw+PC8+O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJsYW5ndWFnZURldGVjdG9yIiwidXNlUmVkaXJlY3QiLCJ0byIsInJvdXRlciIsImFzUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJkZXRlY3RlZExuZyIsImRldGVjdCIsInN0YXJ0c1dpdGgiLCJyb3V0ZSIsInJlcGxhY2UiLCJjYWNoZSIsIlJlZGlyZWN0IiwiZ2V0UmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/redirect.js\n");

/***/ }),

/***/ "./next-i18next.config.js":
/*!********************************!*\
  !*** ./next-i18next.config.js ***!
  \********************************/
/***/ ((module) => {

eval("\nmodule.exports = {\n    // https://www.i18next.com/overview/configuration-options#logging\n    // debug: process.env.NODE_ENV === \"development\",\n    i18n: {\n        defaultLocale: \"en\",\n        locales: [\n            \"en\",\n            \"es\",\n            \"pr\",\n            \"tr\"\n        ],\n        reloadOnPrerender: true\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LWkxOG5leHQuY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBQTtBQUFBQSxPQUFPQyxPQUFPLEdBQUc7SUFDZixpRUFBaUU7SUFDakUsaURBQWlEO0lBQ2pEQyxNQUFNO1FBQ0pDLGVBQWU7UUFDZkMsU0FBUztZQUFDO1lBQU07WUFBTTtZQUFNO1NBQUs7UUFDakNDLG1CQUFtQixJQUFJO0lBQ3pCO0FBSUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLy4vbmV4dC1pMThuZXh0LmNvbmZpZy5qcz8xY2I5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBodHRwczovL3d3dy5pMThuZXh0LmNvbS9vdmVydmlldy9jb25maWd1cmF0aW9uLW9wdGlvbnMjbG9nZ2luZ1xuICAvLyBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcbiAgaTE4bjoge1xuICAgIGRlZmF1bHRMb2NhbGU6IFwiZW5cIixcbiAgICBsb2NhbGVzOiBbXCJlblwiLCBcImVzXCIsIFwicHJcIiwgXCJ0clwiXSxcbiAgICByZWxvYWRPblByZXJlbmRlcjogdHJ1ZSxcbiAgfSxcbiAgLy8gcmVsb2FkT25QcmVyZW5kZXI6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXG4gIC8vIHNlcmlhbGl6ZUNvbmZpZzogZmFsc2UsXG4gIC8vIGxvYWRlcjogZmFsc2Vcbn07XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImkxOG4iLCJkZWZhdWx0TG9jYWxlIiwibG9jYWxlcyIsInJlbG9hZE9uUHJlcmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./next-i18next.config.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_redirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/redirect */ \"./lib/redirect.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_redirect__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_redirect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_redirect__WEBPACK_IMPORTED_MODULE_0__.Redirect);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQztBQUMxQyxpRUFBZUEsbURBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJy4uL2xpYi9yZWRpcmVjdCdcbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0XG4iXSwibmFtZXMiOlsiUmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "next-language-detector":
/*!*****************************************!*\
  !*** external "next-language-detector" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("next-language-detector");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();