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
exports.id = "pages/[locale]/testimonials";
exports.ids = ["pages/[locale]/testimonials"];
exports.modules = {

/***/ "./lib/getStatic.js":
/*!**************************!*\
  !*** ./lib/getStatic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getI18nPaths\": () => (/* binding */ getI18nPaths),\n/* harmony export */   \"getI18nProps\": () => (/* binding */ getI18nProps),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"makeStaticProps\": () => (/* binding */ makeStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-i18next/serverSideTranslations */ \"next-i18next/serverSideTranslations\");\n/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../next-i18next.config */ \"./next-i18next.config.js\");\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getI18nPaths = ()=>_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.locales.map((lng)=>({\n            params: {\n                locale: lng\n            }\n        }));\nconst getStaticPaths = ()=>({\n        fallback: false,\n        paths: getI18nPaths()\n    });\nasync function getI18nProps(ctx, ns = [\n    \"common\"\n]) {\n    const locale = ctx?.params?.locale;\n    let props = {\n        ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale, ns)\n    };\n    return props;\n}\nfunction makeStaticProps(ns = []) {\n    return async function getStaticProps(ctx) {\n        return {\n            props: await getI18nProps(ctx, ns)\n        };\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2V0U3RhdGljLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZFO0FBQzFCO0FBRTVDLE1BQU1FLGVBQWUsSUFDMUJELDRFQUE4QixDQUFDLENBQUNLLE1BQVM7WUFDdkNDLFFBQVE7Z0JBQ05DLFFBQVFGO1lBQ1Y7UUFDRixJQUFJO0FBRUMsTUFBTUcsaUJBQWlCLElBQU87UUFDbkNDLFVBQVUsS0FBSztRQUNmQyxPQUFPVDtJQUNULEdBQUc7QUFFSSxlQUFlVSxhQUFhQyxHQUFHLEVBQUVDLEtBQUs7SUFBQztDQUFTLEVBQUU7SUFDdkQsTUFBTU4sU0FBU0ssS0FBS04sUUFBUUM7SUFDNUIsSUFBSU8sUUFBUTtRQUNWLEdBQUksTUFBTWYsMkZBQXNCQSxDQUFDUSxRQUFRTSxHQUFHO0lBQzlDO0lBQ0EsT0FBT0M7QUFDVCxDQUFDO0FBRU0sU0FBU0MsZ0JBQWdCRixLQUFLLEVBQUUsRUFBRTtJQUN2QyxPQUFPLGVBQWVHLGVBQWVKLEdBQUcsRUFBRTtRQUN4QyxPQUFPO1lBQ0xFLE9BQU8sTUFBTUgsYUFBYUMsS0FBS0M7UUFDakM7SUFDRjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLy4vbGliL2dldFN0YXRpYy5qcz85ZTlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlcnZlclNpZGVUcmFuc2xhdGlvbnMgfSBmcm9tIFwibmV4dC1pMThuZXh0L3NlcnZlclNpZGVUcmFuc2xhdGlvbnNcIjtcbmltcG9ydCBpMThuZXh0Q29uZmlnIGZyb20gXCIuLi9uZXh0LWkxOG5leHQuY29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRJMThuUGF0aHMgPSAoKSA9PlxuICBpMThuZXh0Q29uZmlnLmkxOG4ubG9jYWxlcy5tYXAoKGxuZykgPT4gKHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIGxvY2FsZTogbG5nLFxuICAgIH0sXG4gIH0pKTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gKCkgPT4gKHtcbiAgZmFsbGJhY2s6IGZhbHNlLFxuICBwYXRoczogZ2V0STE4blBhdGhzKCksXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEkxOG5Qcm9wcyhjdHgsIG5zID0gW1wiY29tbW9uXCJdKSB7XG4gIGNvbnN0IGxvY2FsZSA9IGN0eD8ucGFyYW1zPy5sb2NhbGU7XG4gIGxldCBwcm9wcyA9IHtcbiAgICAuLi4oYXdhaXQgc2VydmVyU2lkZVRyYW5zbGF0aW9ucyhsb2NhbGUsIG5zKSksXG4gIH07XG4gIHJldHVybiBwcm9wcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdGF0aWNQcm9wcyhucyA9IFtdKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjdHgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IGF3YWl0IGdldEkxOG5Qcm9wcyhjdHgsIG5zKSxcbiAgICB9O1xuICB9O1xufVxuXG4iXSwibmFtZXMiOlsic2VydmVyU2lkZVRyYW5zbGF0aW9ucyIsImkxOG5leHRDb25maWciLCJnZXRJMThuUGF0aHMiLCJpMThuIiwibG9jYWxlcyIsIm1hcCIsImxuZyIsInBhcmFtcyIsImxvY2FsZSIsImdldFN0YXRpY1BhdGhzIiwiZmFsbGJhY2siLCJwYXRocyIsImdldEkxOG5Qcm9wcyIsImN0eCIsIm5zIiwicHJvcHMiLCJtYWtlU3RhdGljUHJvcHMiLCJnZXRTdGF0aWNQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/getStatic.js\n");

/***/ }),

/***/ "./next-i18next.config.js":
/*!********************************!*\
  !*** ./next-i18next.config.js ***!
  \********************************/
/***/ ((module) => {

eval("\nmodule.exports = {\n    // https://www.i18next.com/overview/configuration-options#logging\n    // debug: process.env.NODE_ENV === \"development\",\n    i18n: {\n        defaultLocale: \"en\",\n        locales: [\n            \"en\",\n            \"es\",\n            \"pr\",\n            \"tr\"\n        ],\n        reloadOnPrerender: true\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LWkxOG5leHQuY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBQTtBQUFBQSxPQUFPQyxPQUFPLEdBQUc7SUFDZixpRUFBaUU7SUFDakUsaURBQWlEO0lBQ2pEQyxNQUFNO1FBQ0pDLGVBQWU7UUFDZkMsU0FBUztZQUFDO1lBQU07WUFBTTtZQUFNO1NBQUs7UUFDakNDLG1CQUFtQixJQUFJO0lBQ3pCO0FBSUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLy4vbmV4dC1pMThuZXh0LmNvbmZpZy5qcz8xY2I5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBodHRwczovL3d3dy5pMThuZXh0LmNvbS9vdmVydmlldy9jb25maWd1cmF0aW9uLW9wdGlvbnMjbG9nZ2luZ1xuICAvLyBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcbiAgaTE4bjoge1xuICAgIGRlZmF1bHRMb2NhbGU6IFwiZW5cIixcbiAgICBsb2NhbGVzOiBbXCJlblwiLCBcImVzXCIsIFwicHJcIiwgXCJ0clwiXSxcbiAgICByZWxvYWRPblByZXJlbmRlcjogdHJ1ZSxcbiAgfSxcbiAgLy8gcmVsb2FkT25QcmVyZW5kZXI6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXG4gIC8vIHNlcmlhbGl6ZUNvbmZpZzogZmFsc2UsXG4gIC8vIGxvYWRlcjogZmFsc2Vcbn07XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImkxOG4iLCJkZWZhdWx0TG9jYWxlIiwibG9jYWxlcyIsInJlbG9hZE9uUHJlcmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./next-i18next.config.js\n");

/***/ }),

/***/ "./pages/[locale]/testimonials.js":
/*!****************************************!*\
  !*** ./pages/[locale]/testimonials.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* reexport safe */ _lib_getStatic__WEBPACK_IMPORTED_MODULE_2__.getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_getStatic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/getStatic */ \"./lib/getStatic.js\");\n\n\n\nconst styles = {\n    h1: \"text-3xl font-playflair mb-3\",\n    text: \"font-light font-montserrat mb-2\"\n};\nconst Testimonials = ()=>{\n    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)([\n        \"common\"\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-[40vh] bg-[url('../public/images/About/banner.jpeg')] bg-cover bg-top\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-black/[.33] p-4 w-full h-full flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-5 lg:w-1/2 text-center text-white font-playflair leading-10 tracking-wide text-5xl lg:text-6xl drop-shadow-xl\",\n                        children: t(\"testimonials-title\")\n                    }, void 0, false, {\n                        fileName: \"/home/mauro/Documents/PP/Next-i18n-SSG/pages/[locale]/testimonials.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/mauro/Documents/PP/Next-i18n-SSG/pages/[locale]/testimonials.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/mauro/Documents/PP/Next-i18n-SSG/pages/[locale]/testimonials.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-5xl mx-auto py-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                    class: \"flex flex-col items-center justify-center p-8 text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n                            class: \"max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    class: \"text-lg font-semibold text-gray-900\",\n                                    children: \"Very easy this was to integrate\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mauro/Documents/PP/Next-i18n-SSG/pages/[locale]/testimonials.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    class: \"my-4 font-light\",\n                                    children: 'If you care for your time, I hands down would go with this.\"'\n                                }, void 0, false, {\n                                    fileName: \"/home/mauro/Documents/PP/Next-i18n-SSG/pages/[locale]/testimonials.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mauro/Documents/PP/Next-i18n-SSG/pages/[locale]/testimonials.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                            class: \"flex items-center justify-center space-x-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    class: \"rounded-full w-9 h-9\",\n                                    src: \"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png\",\n                                    alt: \"profile picture\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mauro/Documents/PP/Next-i18n-SSG/pages/[locale]/testimonials.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"space-y-0.5 font-medium text-left\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: \"Bonnie Green\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/mauro/Documents/PP/Next-i18n-SSG/pages/[locale]/testimonials.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"text-sm font-light text-gray-500\",\n                                            children: \"Developer at Open AI\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/mauro/Documents/PP/Next-i18n-SSG/pages/[locale]/testimonials.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/mauro/Documents/PP/Next-i18n-SSG/pages/[locale]/testimonials.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mauro/Documents/PP/Next-i18n-SSG/pages/[locale]/testimonials.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mauro/Documents/PP/Next-i18n-SSG/pages/[locale]/testimonials.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/mauro/Documents/PP/Next-i18n-SSG/pages/[locale]/testimonials.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mauro/Documents/PP/Next-i18n-SSG/pages/[locale]/testimonials.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);\nconst getStaticProps = (0,_lib_getStatic__WEBPACK_IMPORTED_MODULE_2__.makeStaticProps)([\n    \"common\"\n]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbG9jYWxlXS90ZXN0aW1vbmlhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QztBQUN3QjtBQUV0RSxNQUFNRyxTQUFTO0lBQ2JDLElBQUk7SUFDSkMsTUFBTTtBQUNSO0FBRUEsTUFBTUMsZUFBZSxJQUFNO0lBQ3pCLE1BQU0sRUFBRUMsRUFBQyxFQUFFLEdBQUdQLDREQUFjQSxDQUFDO1FBQUM7S0FBUztJQUV2QyxxQkFDRSw4REFBQ1E7OzBCQUVDLDhEQUFDQTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNaRixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUtULDhEQUFDQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQU9DLE9BQU07O3NDQUNaLDhEQUFDQzs0QkFBV0QsT0FBTTs7OENBQ2hCLDhEQUFDRTtvQ0FBR0YsT0FBTTs4Q0FBc0M7Ozs7Ozs4Q0FHaEQsOERBQUNHO29DQUFFSCxPQUFNOzhDQUFrQjs7Ozs7Ozs7Ozs7O3NDQUk3Qiw4REFBQ0k7NEJBQVdKLE9BQU07OzhDQUNoQiw4REFBQ0s7b0NBQ0NMLE9BQU07b0NBQ05NLEtBQUk7b0NBQ0pDLEtBQUk7Ozs7Ozs4Q0FFTiw4REFBQ1Y7b0NBQUlHLE9BQU07O3NEQUNULDhEQUFDSDtzREFBSTs7Ozs7O3NEQUNMLDhEQUFDQTs0Q0FBSUcsT0FBTTtzREFBbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzVEO0FBRUEsaUVBQWVMLFlBQVlBLEVBQUM7QUFFNUIsTUFBTWEsaUJBQWlCakIsK0RBQWVBLENBQUM7SUFBQztDQUFTO0FBQ1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLy4vcGFnZXMvW2xvY2FsZV0vdGVzdGltb25pYWxzLmpzP2IzODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwibmV4dC1pMThuZXh0XCI7XG5pbXBvcnQgeyBnZXRTdGF0aWNQYXRocywgbWFrZVN0YXRpY1Byb3BzIH0gZnJvbSBcIi4uLy4uL2xpYi9nZXRTdGF0aWNcIjtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoMTogXCJ0ZXh0LTN4bCBmb250LXBsYXlmbGFpciBtYi0zXCIsXG4gIHRleHQ6IFwiZm9udC1saWdodCBmb250LW1vbnRzZXJyYXQgbWItMlwiLFxufTtcblxuY29uc3QgVGVzdGltb25pYWxzID0gKCkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFtcImNvbW1vblwiXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgey8qIEJhbm5lciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzQwdmhdICBiZy1bdXJsKCcuLi9wdWJsaWMvaW1hZ2VzL0Fib3V0L2Jhbm5lci5qcGVnJyldIGJnLWNvdmVyIGJnLXRvcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrL1suMzNdIHAtNCB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IGxnOnctMS8yIHRleHQtY2VudGVyIHRleHQtd2hpdGUgZm9udC1wbGF5ZmxhaXIgbGVhZGluZy0xMCB0cmFja2luZy13aWRlXHR0ZXh0LTV4bCBsZzp0ZXh0LTZ4bCAgZHJvcC1zaGFkb3cteGxcIj5cbiAgICAgICAgICAgIHt0KFwidGVzdGltb25pYWxzLXRpdGxlXCIpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIENvbnRlbnQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTV4bCBteC1hdXRvIHB5LTEwXCI+XG4gICAgICAgIDxmaWd1cmUgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzcz1cIm1heC13LTJ4bCBteC1hdXRvIG1iLTQgdGV4dC1ncmF5LTUwMCBsZzptYi04XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICBWZXJ5IGVhc3kgdGhpcyB3YXMgdG8gaW50ZWdyYXRlXG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJteS00IGZvbnQtbGlnaHRcIj5cbiAgICAgICAgICAgICAgSWYgeW91IGNhcmUgZm9yIHlvdXIgdGltZSwgSSBoYW5kcyBkb3duIHdvdWxkIGdvIHdpdGggdGhpcy5cIlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtM1wiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtZnVsbCB3LTkgaC05XCJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9mbG93Yml0ZS5zMy5hbWF6b25hd3MuY29tL2Jsb2Nrcy9tYXJrZXRpbmctdWkvYXZhdGFycy9rYXJlbi1uZWxzb24ucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwicHJvZmlsZSBwaWN0dXJlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS0wLjUgZm9udC1tZWRpdW0gdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxkaXY+Qm9ubmllIEdyZWVuPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXNtIGZvbnQtbGlnaHQgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgIERldmVsb3BlciBhdCBPcGVuIEFJXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWxzO1xuXG5jb25zdCBnZXRTdGF0aWNQcm9wcyA9IG1ha2VTdGF0aWNQcm9wcyhbXCJjb21tb25cIl0pO1xuZXhwb3J0IHsgZ2V0U3RhdGljUGF0aHMsIGdldFN0YXRpY1Byb3BzIH07XG4iXSwibmFtZXMiOlsidXNlVHJhbnNsYXRpb24iLCJnZXRTdGF0aWNQYXRocyIsIm1ha2VTdGF0aWNQcm9wcyIsInN0eWxlcyIsImgxIiwidGV4dCIsIlRlc3RpbW9uaWFscyIsInQiLCJkaXYiLCJjbGFzc05hbWUiLCJmaWd1cmUiLCJjbGFzcyIsImJsb2NrcXVvdGUiLCJoMyIsInAiLCJmaWdjYXB0aW9uIiwiaW1nIiwic3JjIiwiYWx0IiwiZ2V0U3RhdGljUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[locale]/testimonials.js\n");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ "next-i18next/serverSideTranslations":
/*!******************************************************!*\
  !*** external "next-i18next/serverSideTranslations" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[locale]/testimonials.js"));
module.exports = __webpack_exports__;

})();