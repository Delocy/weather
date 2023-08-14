"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./components/InsightCard.jsx":
/*!************************************!*\
  !*** ./components/InsightCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\nconst InsightCard = (param)=>/*#__PURE__*/ {\n    let { imgUrl , title , subtitle , index  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_1__.fadeIn)(\"up\", \"spring\", index * 0.5, 1),\n        className: \"flex md:flex-row flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imgUrl,\n                alt: \"planet-01\",\n                className: \"md:w-[270px] w-full h-[250px] rounded-[32px] object-cover\"\n            }, void 0, false, {\n                fileName: \"/Users/zares/Resume/weather/components/InsightCard.jsx\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 md:ml-[62px] flex flex-col max-w-[650px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"font-normal lg:text-[42px] text-[26px] text-blue\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/zares/Resume/weather/components/InsightCard.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-black\",\n                                children: subtitle\n                            }, void 0, false, {\n                                fileName: \"/Users/zares/Resume/weather/components/InsightCard.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zares/Resume/weather/components/InsightCard.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/arrow.svg\",\n                            alt: \"arrow\",\n                            className: \"w-[40%] h-[40%] object-contain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/components/InsightCard.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/zares/Resume/weather/components/InsightCard.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zares/Resume/weather/components/InsightCard.jsx\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zares/Resume/weather/components/InsightCard.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n_c = InsightCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InsightCard);\nvar _c;\n$RefreshReg$(_c, \"InsightCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0luc2lnaHRDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFdUM7QUFFRTtBQUV6QyxNQUFNRSxjQUFjLHVCQUNsQjtRQURtQixFQUFFQyxPQUFNLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFQyxNQUFLLEVBQUU7V0FDckQsOERBQUNOLHFEQUFVO1FBQ1RRLFVBQVVQLHFEQUFNQSxDQUFDLE1BQU0sVUFBVUssUUFBUSxLQUFLO1FBQzlDRyxXQUFVOzswQkFFViw4REFBQ0M7Z0JBQ0NDLEtBQUtSO2dCQUNMUyxLQUFJO2dCQUNKSCxXQUFVOzs7Ozs7MEJBRVosOERBQUNGO2dCQUFJRSxXQUFVOztrQ0FDYiw4REFBQ0Y7d0JBQUlFLFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FBR0osV0FBVTswQ0FDWEw7Ozs7OzswQ0FFSCw4REFBQ1U7Z0NBQUVMLFdBQVU7MENBQ1ZKOzs7Ozs7Ozs7Ozs7a0NBSUwsOERBQUNFO3dCQUNDRSxXQUFVO2tDQUVWLDRFQUFDQzs0QkFDQ0MsS0FBSTs0QkFDSkMsS0FBSTs0QkFDSkgsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJTjtLQTlCUlA7QUFpQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnNpZ2h0Q2FyZC5qc3g/ZDhlYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgeyBmYWRlSW4gfSBmcm9tICcuLi91dGlscy9tb3Rpb24nO1xuXG5jb25zdCBJbnNpZ2h0Q2FyZCA9ICh7IGltZ1VybCwgdGl0bGUsIHN1YnRpdGxlLCBpbmRleCB9KSA9PiAoXG4gIDxtb3Rpb24uZGl2XG4gICAgdmFyaWFudHM9e2ZhZGVJbigndXAnLCAnc3ByaW5nJywgaW5kZXggKiAwLjUsIDEpfVxuICAgIGNsYXNzTmFtZT1cImZsZXggbWQ6ZmxleC1yb3cgZmxleC1jb2wgZ2FwLTRcIlxuICA+XG4gICAgPGltZ1xuICAgICAgc3JjPXtpbWdVcmx9XG4gICAgICBhbHQ9XCJwbGFuZXQtMDFcIlxuICAgICAgY2xhc3NOYW1lPVwibWQ6dy1bMjcwcHhdIHctZnVsbCBoLVsyNTBweF0gcm91bmRlZC1bMzJweF0gb2JqZWN0LWNvdmVyXCJcbiAgICAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWQ6bWwtWzYycHhdIGZsZXggZmxleC1jb2wgbWF4LXctWzY1MHB4XVwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgbGc6dGV4dC1bNDJweF0gdGV4dC1bMjZweF0gdGV4dC1ibHVlXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2g0PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC1bMTZweF0gZm9udC1ub3JtYWwgbGc6dGV4dC1bMjBweF0gdGV4dC1bMTRweF0gdGV4dC1zZWNvbmRhcnktYmxhY2tcIj5cbiAgICAgICAgICB7c3VidGl0bGV9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImxnOmZsZXggaGlkZGVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LVsxMDBweF0gaC1bMTAwcHhdIHJvdW5kZWQtZnVsbCBiZy10cmFuc3BhcmVudCBib3JkZXItWzFweF0gYm9yZGVyLXdoaXRlXCJcbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9hcnJvdy5zdmdcIlxuICAgICAgICAgIGFsdD1cImFycm93XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs0MCVdIGgtWzQwJV0gb2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbW90aW9uLmRpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluc2lnaHRDYXJkOyJdLCJuYW1lcyI6WyJtb3Rpb24iLCJmYWRlSW4iLCJJbnNpZ2h0Q2FyZCIsImltZ1VybCIsInRpdGxlIiwic3VidGl0bGUiLCJpbmRleCIsImRpdiIsInZhcmlhbnRzIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/InsightCard.jsx\n"));

/***/ })

});