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

/***/ "./sections/About.jsx":
/*!****************************!*\
  !*** ./sections/About.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst About = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [weatherData, setWeatherData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const API_KEY = \"42466030b943aa032ef02e4851947b6a\";\n    const API_URL = \"https://api.openweathermap.org/data/2.5/weather?q=\".concat(searchInput, \"&appid=\").concat(API_KEY);\n    const handleSearch = async ()=>{\n        try {\n            const response = await fetch(API_URL);\n            const data = await response.json();\n            setWeatherData(data);\n        } catch (error) {\n            console.error(\"Error fetching weather data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.navVariants,\n                    initial: \"hidden\",\n                    whileInView: \"show\",\n                    className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].xPaddings, \" py-8 relative\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/clouds.jpeg\",\n                            alt: \"hero_cover\",\n                            className: \"w-full sm:h-[300px] h-[200px] object-cover relative\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 w-1/2 flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Search for a city\",\n                                    value: searchInput,\n                                    onChange: (e)=>setSearchInput(e.target.value),\n                                    className: \"px-4 py-2 border w-full bg-white\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>{\n                                        // Handle city search logic here, e.g., fetch weather data\n                                        console.log(\"Searching for city: \".concat(searchInput));\n                                    },\n                                    className: \"ml-2 px-8 py-4 bg-zinc-800 text-white hover:bg-blue-800\",\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                weatherData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Weather in \".concat(weatherData.name, \": \").concat(weatherData.weather[0].description)\n                    }, void 0, false, {\n                        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"vicKWN96vveuk+9xpQ6VcHkRLYE=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9BYm91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUV1QztBQUNDO0FBRVQ7QUFDZTtBQUU5QyxNQUFNSyxRQUFRLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUMsSUFBSTtJQUVuRCxNQUFNUSxVQUFVO0lBQ2hCLE1BQU1DLFVBQVUscURBQTBFRCxPQUFyQkosYUFBWSxXQUFpQixPQUFSSTtJQUUxRixNQUFNRSxlQUFlLFVBQVk7UUFDL0IsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTUg7WUFDN0IsTUFBTUksT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDUCxlQUFlTTtRQUNqQixFQUFFLE9BQU9FLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDaEQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRTtrQkFDQyw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNyQixxREFBVTtvQkFDVHNCLFVBQVVsQixzREFBV0E7b0JBQ3JCbUIsU0FBUTtvQkFDUkMsYUFBWTtvQkFDWkgsV0FBVyxHQUFvQixPQUFqQmxCLHlEQUFnQixFQUFDOztzQ0FFL0IsOERBQUN1Qjs0QkFDQ0MsS0FBSTs0QkFDSkMsS0FBSTs0QkFDSlAsV0FBVTs7Ozs7O3NDQUVaLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNRO29DQUNDQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPMUI7b0NBQ1AyQixVQUFVLENBQUNDLElBQU0zQixlQUFlMkIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29DQUM5Q1gsV0FBVTs7Ozs7OzhDQUVaLDhEQUFDZTtvQ0FDQ0MsU0FBUyxJQUFNO3dDQUNiLDBEQUEwRDt3Q0FDMURuQixRQUFRb0IsR0FBRyxDQUFDLHVCQUFtQyxPQUFaaEM7b0NBQ3JDO29DQUNBZSxXQUFVOzhDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBTUpiLDZCQUNDLDhEQUFDWTtvQkFBSUMsV0FBVTs4QkFFYiw0RUFBQ2tCO2tDQUFHLGNBQW1DL0IsT0FBckJBLFlBQVlnQyxJQUFJLEVBQUMsTUFBdUMsT0FBbkNoQyxZQUFZaUMsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRjtHQTVETXJDO0tBQUFBO0FBOEROLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlY3Rpb25zL0Fib3V0LmpzeD8yNmM0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzJztcbmltcG9ydCB7IG5hdlZhcmlhbnRzIH0gZnJvbSAnLi4vdXRpbHMvbW90aW9uJztcblxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbd2VhdGhlckRhdGEsIHNldFdlYXRoZXJEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IEFQSV9LRVkgPSAnNDI0NjYwMzBiOTQzYWEwMzJlZjAyZTQ4NTE5NDdiNmEnO1xuICBjb25zdCBBUElfVVJMID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtzZWFyY2hJbnB1dH0mYXBwaWQ9JHtBUElfS0VZfWA7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9VUkwpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldFdlYXRoZXJEYXRhKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGE6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy01eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIHZhcmlhbnRzPXtuYXZWYXJpYW50c31cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnhQYWRkaW5nc30gcHktOCByZWxhdGl2ZWB9XG4gICAgICAgID5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvY2xvdWRzLmpwZWdcIlxuICAgICAgICAgICAgYWx0PVwiaGVyb19jb3ZlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgc206aC1bMzAwcHhdIGgtWzIwMHB4XSBvYmplY3QtY292ZXIgcmVsYXRpdmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS80IGxlZnQtMS80IHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS80IC10cmFuc2xhdGUteS0xLzQgdy0xLzIgZmxleFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgY2l0eVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXIgdy1mdWxsIGJnLXdoaXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgY2l0eSBzZWFyY2ggbG9naWMgaGVyZSwgZS5nLiwgZmV0Y2ggd2VhdGhlciBkYXRhXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFNlYXJjaGluZyBmb3IgY2l0eTogJHtzZWFyY2hJbnB1dH1gKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBweC04IHB5LTQgYmctemluYy04MDAgdGV4dC13aGl0ZSAgaG92ZXI6YmctYmx1ZS04MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIHsvKiBEaXNwbGF5IHdlYXRoZXIgZGF0YSBoZXJlIGJhc2VkIG9uIHRoZSByZXNwb25zZSAqL31cbiAgICAgICAge3dlYXRoZXJEYXRhICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgIHsvKiBEaXNwbGF5IHdlYXRoZXIgaW5mb3JtYXRpb24gKi99XG4gICAgICAgICAgICA8cD57YFdlYXRoZXIgaW4gJHt3ZWF0aGVyRGF0YS5uYW1lfTogJHt3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWB9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG5cblxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJuYXZWYXJpYW50cyIsIkFib3V0Iiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsIndlYXRoZXJEYXRhIiwic2V0V2VhdGhlckRhdGEiLCJBUElfS0VZIiwiQVBJX1VSTCIsImhhbmRsZVNlYXJjaCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsInNlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInhQYWRkaW5ncyIsImltZyIsInNyYyIsImFsdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwibG9nIiwicCIsIm5hbWUiLCJ3ZWF0aGVyIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/About.jsx\n"));

/***/ })

});