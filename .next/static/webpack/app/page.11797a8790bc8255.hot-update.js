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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst About = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [weatherData, setWeatherData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const API_KEY = \"42466030b943aa032ef02e4851947b6a\";\n    const API_URL = \"https://api.openweathermap.org/geo/1.0/direct?q=\".concat(searchInput, \"&limit=1&appid=\").concat(API_KEY);\n    const handleSearch = async ()=>{\n        try {\n            setError(\"\");\n            const geocodingResponse = await fetch(API_URL);\n            const geocodingData = await geocodingResponse.json();\n            if (geocodingData.length > 0) {\n                const { lat , lon  } = geocodingData[0];\n                const ONE_CALL_API_URL = \"https://api.openweathermap.org/data/3.0/onecall?lat=\".concat(lat, \"&lon=\").concat(lon, \"&appid=\").concat(API_KEY);\n                const response = await fetch(ONE_CALL_API_URL);\n                if (response.ok) {\n                    const data = await response.json();\n                    setWeatherData(data);\n                } else {\n                    setError(\"Error fetching weather data\");\n                }\n            } else {\n                setError(\"City not found\");\n            }\n        } catch (error) {\n            setError(\"An error occurred\");\n            console.error(\"Error fetching weather data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.navVariants,\n                    initial: \"hidden\",\n                    whileInView: \"show\",\n                    className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].xPaddings, \" py-8 relative\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/clouds.jpeg\",\n                            alt: \"hero_cover\",\n                            className: \"w-full sm:h-[300px] h-[200px] object-cover relative\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 w-1/2 flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Search for a city\",\n                                    value: searchInput,\n                                    onChange: (e)=>setSearchInput(e.target.value),\n                                    className: \"px-4 py-2 border w-full bg-white\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSearch,\n                                    className: \"ml-2 px-8 py-4 bg-zinc-800 text-white hover:bg-blue-800\",\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined),\n                error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined) : weatherData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Weather in \".concat(weatherData.timezone, \": \").concat(weatherData.current.weather[0].description, \" - \").concat(weatherData.timezone)\n                    }, void 0, false, {\n                        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"Fz4My7bB9VfB1I6A0LCij8kUsV8=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9BYm91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUV1QztBQUNDO0FBRVQ7QUFDZTtBQUU5QyxNQUFNSyxRQUFRLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUMsSUFBSTtJQUNuRCxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVUsVUFBVTtJQUNoQixNQUFNQyxVQUFVLG1EQUFnRkQsT0FBN0JOLGFBQVksbUJBQXlCLE9BQVJNO0lBRWhHLE1BQU1FLGVBQWUsVUFBWTtRQUMvQixJQUFJO1lBQ0ZILFNBQVM7WUFDVCxNQUFNSSxvQkFBb0IsTUFBTUMsTUFBTUg7WUFDdEMsTUFBTUksZ0JBQWdCLE1BQU1GLGtCQUFrQkcsSUFBSTtZQUVsRCxJQUFJRCxjQUFjRSxNQUFNLEdBQUcsR0FBRztnQkFDNUIsTUFBTSxFQUFFQyxJQUFHLEVBQUVDLElBQUcsRUFBRSxHQUFHSixhQUFhLENBQUMsRUFBRTtnQkFDckMsTUFBTUssbUJBQW1CLHVEQUFrRUQsT0FBWEQsS0FBSSxTQUFvQlIsT0FBYlMsS0FBSSxXQUFpQixPQUFSVDtnQkFFeEcsTUFBTVcsV0FBVyxNQUFNUCxNQUFNTTtnQkFDN0IsSUFBSUMsU0FBU0MsRUFBRSxFQUFFO29CQUNmLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0wsSUFBSTtvQkFDaENULGVBQWVnQjtnQkFDakIsT0FBTztvQkFDTGQsU0FBUztnQkFDWCxDQUFDO1lBQ0gsT0FBTztnQkFDTEEsU0FBUztZQUNYLENBQUM7UUFDSCxFQUFFLE9BQU9ELE9BQU87WUFDZEMsU0FBUztZQUNUZSxRQUFRaEIsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDaEQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDaUI7a0JBQ0MsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDN0IscURBQVU7b0JBQ1Q4QixVQUFVMUIsc0RBQVdBO29CQUNyQjJCLFNBQVE7b0JBQ1JDLGFBQVk7b0JBQ1pILFdBQVcsR0FBb0IsT0FBakIxQix5REFBZ0IsRUFBQzs7c0NBRS9CLDhEQUFDK0I7NEJBQ0NDLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pQLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDUTtvQ0FDQ0MsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsT0FBT2xDO29DQUNQbUMsVUFBVSxDQUFDQyxJQUFNbkMsZUFBZW1DLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDOUNYLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ2U7b0NBQ0NDLFNBQVMvQjtvQ0FDVGUsV0FBVTs4Q0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUtKbkIsc0JBQ0QsOERBQUNrQjtvQkFBSUMsV0FBVTs4QkFFYiw0RUFBQ2lCO3dCQUFFakIsV0FBVTtrQ0FBZ0JuQjs7Ozs7Ozs7OztnQ0FFN0JGLDRCQUNGLDhEQUFDb0I7b0JBQUlDLFdBQVU7OEJBRWIsNEVBQUNpQjtrQ0FBRyxjQUF1Q3RDLE9BQXpCQSxZQUFZdUMsUUFBUSxFQUFDLE1BQW9EdkMsT0FBaERBLFlBQVl3QyxPQUFPLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLFdBQVcsRUFBQyxPQUEwQixPQUFyQjFDLFlBQVl1QyxRQUFROzs7Ozs7Ozs7O2dDQUUvRyxJQUFJOzs7Ozs7Ozs7Ozs7QUFJZDtHQTlFTTFDO0tBQUFBO0FBZ0ZOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlY3Rpb25zL0Fib3V0LmpzeD8yNmM0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzJztcbmltcG9ydCB7IG5hdlZhcmlhbnRzIH0gZnJvbSAnLi4vdXRpbHMvbW90aW9uJztcblxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbd2VhdGhlckRhdGEsIHNldFdlYXRoZXJEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBBUElfS0VZID0gJzQyNDY2MDMwYjk0M2FhMDMyZWYwMmU0ODUxOTQ3YjZhJztcbiAgY29uc3QgQVBJX1VSTCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke3NlYXJjaElucHV0fSZsaW1pdD0xJmFwcGlkPSR7QVBJX0tFWX1gO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0RXJyb3IoJycpO1xuICAgICAgY29uc3QgZ2VvY29kaW5nUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfVVJMKTtcbiAgICAgIGNvbnN0IGdlb2NvZGluZ0RhdGEgPSBhd2FpdCBnZW9jb2RpbmdSZXNwb25zZS5qc29uKCk7XG4gIFxuICAgICAgaWYgKGdlb2NvZGluZ0RhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB7IGxhdCwgbG9uIH0gPSBnZW9jb2RpbmdEYXRhWzBdO1xuICAgICAgICBjb25zdCBPTkVfQ0FMTF9BUElfVVJMID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzMuMC9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD0ke0FQSV9LRVl9YDtcbiAgXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goT05FX0NBTExfQVBJX1VSTCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgc2V0V2VhdGhlckRhdGEoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0RXJyb3IoJ0Vycm9yIGZldGNoaW5nIHdlYXRoZXIgZGF0YScpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcignQ2l0eSBub3QgZm91bmQnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkJyk7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGE6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LTV4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgdmFyaWFudHM9e25hdlZhcmlhbnRzfVxuICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgIHdoaWxlSW5WaWV3PVwic2hvd1wiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMueFBhZGRpbmdzfSBweS04IHJlbGF0aXZlYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9jbG91ZHMuanBlZ1wiXG4gICAgICAgICAgICBhbHQ9XCJoZXJvX2NvdmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBzbTpoLVszMDBweF0gaC1bMjAwcHhdIG9iamVjdC1jb3ZlciByZWxhdGl2ZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzQgbGVmdC0xLzQgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzQgLXRyYW5zbGF0ZS15LTEvNCB3LTEvMiBmbGV4XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBjaXR5XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlciB3LWZ1bGwgYmctd2hpdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNofVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIHB4LTggcHktNCBiZy16aW5jLTgwMCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWJsdWUtODAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICB7ZXJyb3IgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgIHsvKiBEaXNwbGF5IGVycm9yIG1lc3NhZ2UgKi99XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+e2Vycm9yfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogd2VhdGhlckRhdGEgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgIHsvKiBEaXNwbGF5IHdlYXRoZXIgaW5mb3JtYXRpb24gKi99XG4gICAgICAgICAgPHA+e2BXZWF0aGVyIGluICR7d2VhdGhlckRhdGEudGltZXpvbmV9OiAke3dlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbn0gLSAke3dlYXRoZXJEYXRhLnRpbWV6b25lfWB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXSwibmFtZXMiOlsibW90aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIm5hdlZhcmlhbnRzIiwiQWJvdXQiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0Iiwid2VhdGhlckRhdGEiLCJzZXRXZWF0aGVyRGF0YSIsImVycm9yIiwic2V0RXJyb3IiLCJBUElfS0VZIiwiQVBJX1VSTCIsImhhbmRsZVNlYXJjaCIsImdlb2NvZGluZ1Jlc3BvbnNlIiwiZmV0Y2giLCJnZW9jb2RpbmdEYXRhIiwianNvbiIsImxlbmd0aCIsImxhdCIsImxvbiIsIk9ORV9DQUxMX0FQSV9VUkwiLCJyZXNwb25zZSIsIm9rIiwiZGF0YSIsImNvbnNvbGUiLCJzZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudHMiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ4UGFkZGluZ3MiLCJpbWciLCJzcmMiLCJhbHQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInAiLCJ0aW1lem9uZSIsImN1cnJlbnQiLCJ3ZWF0aGVyIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/About.jsx\n"));

/***/ })

});