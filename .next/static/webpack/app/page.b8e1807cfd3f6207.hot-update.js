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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst About = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [weatherData, setWeatherData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const API_KEY = \"42466030b943aa032ef02e4851947b6a\";\n    const API_URL = \"https://api.openweathermap.org/geo/1.0/direct?q=\".concat(searchInput, \"&limit=1&appid=\").concat(API_KEY);\n    const handleSearch = async ()=>{\n        try {\n            setError(\"\");\n            const geocodingResponse = await fetch(API_URL);\n            const geocodingData = await geocodingResponse.json();\n            if (geocodingData.length > 0) {\n                const { lat , lon  } = geocodingData[0];\n                const ONE_CALL_API_URL = \"https://api.openweathermap.org/data/2.5/onecall?lat=\".concat(lat, \"&lon=\").concat(lon, \"&appid=\").concat(API_KEY);\n                const response = await fetch(ONE_CALL_API_URL);\n                if (response.ok) {\n                    const data = await response.json();\n                    setWeatherData(data);\n                } else {\n                    setError(\"Error fetching weather data\");\n                }\n            } else {\n                setError(\"City not found\");\n            }\n        } catch (error) {\n            setError(\"An error occurred\");\n            console.error(\"Error fetching weather data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.navVariants,\n                    initial: \"hidden\",\n                    whileInView: \"show\",\n                    className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].xPaddings, \" py-8 relative\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/clouds.jpeg\",\n                            alt: \"hero_cover\",\n                            className: \"w-full sm:h-[300px] h-[200px] object-cover relative\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 w-1/2 flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Search for a city\",\n                                    value: searchInput,\n                                    onChange: (e)=>setSearchInput(e.target.value),\n                                    className: \"px-4 py-2 border w-full bg-white\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSearch,\n                                    className: \"ml-2 px-8 py-4 bg-zinc-800 text-white hover:bg-blue-800\",\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined),\n                error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined) : weatherData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Weather in \".concat(weatherData.timezone, \": \").concat(weatherData.current.weather[0].description)\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined),\n                        weatherData.daily && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Daily Summary: \".concat(weatherData.daily[0].dt)\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"Fz4My7bB9VfB1I6A0LCij8kUsV8=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9BYm91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUV1QztBQUNDO0FBRVQ7QUFDZTtBQUU5QyxNQUFNSyxRQUFRLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUMsSUFBSTtJQUNuRCxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVUsVUFBVTtJQUNoQixNQUFNQyxVQUFVLG1EQUFnRkQsT0FBN0JOLGFBQVksbUJBQXlCLE9BQVJNO0lBRWhHLE1BQU1FLGVBQWUsVUFBWTtRQUMvQixJQUFJO1lBQ0ZILFNBQVM7WUFDVCxNQUFNSSxvQkFBb0IsTUFBTUMsTUFBTUg7WUFDdEMsTUFBTUksZ0JBQWdCLE1BQU1GLGtCQUFrQkcsSUFBSTtZQUVsRCxJQUFJRCxjQUFjRSxNQUFNLEdBQUcsR0FBRztnQkFDNUIsTUFBTSxFQUFFQyxJQUFHLEVBQUVDLElBQUcsRUFBRSxHQUFHSixhQUFhLENBQUMsRUFBRTtnQkFDckMsTUFBTUssbUJBQW1CLHVEQUFrRUQsT0FBWEQsS0FBSSxTQUFvQlIsT0FBYlMsS0FBSSxXQUFpQixPQUFSVDtnQkFFeEcsTUFBTVcsV0FBVyxNQUFNUCxNQUFNTTtnQkFDN0IsSUFBSUMsU0FBU0MsRUFBRSxFQUFFO29CQUNmLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0wsSUFBSTtvQkFDaENULGVBQWVnQjtnQkFDakIsT0FBTztvQkFDTGQsU0FBUztnQkFDWCxDQUFDO1lBQ0gsT0FBTztnQkFDTEEsU0FBUztZQUNYLENBQUM7UUFDSCxFQUFFLE9BQU9ELE9BQU87WUFDZEMsU0FBUztZQUNUZSxRQUFRaEIsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDaEQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDaUI7a0JBQ0MsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDN0IscURBQVU7b0JBQ1Q4QixVQUFVMUIsc0RBQVdBO29CQUNyQjJCLFNBQVE7b0JBQ1JDLGFBQVk7b0JBQ1pILFdBQVcsR0FBb0IsT0FBakIxQix5REFBZ0IsRUFBQzs7c0NBRS9CLDhEQUFDK0I7NEJBQ0NDLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pQLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDUTtvQ0FDQ0MsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsT0FBT2xDO29DQUNQbUMsVUFBVSxDQUFDQyxJQUFNbkMsZUFBZW1DLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDOUNYLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ2U7b0NBQ0NDLFNBQVMvQjtvQ0FDVGUsV0FBVTs4Q0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUtKbkIsc0JBQ0QsOERBQUNrQjtvQkFBSUMsV0FBVTs4QkFFYiw0RUFBQ2lCO3dCQUFFakIsV0FBVTtrQ0FBZ0JuQjs7Ozs7Ozs7OztnQ0FFN0JGLDRCQUNGLDhEQUFDb0I7b0JBQUlDLFdBQVU7O3NDQUViLDhEQUFDaUI7c0NBQUcsY0FBdUN0QyxPQUF6QkEsWUFBWXVDLFFBQVEsRUFBQyxNQUErQyxPQUEzQ3ZDLFlBQVl3QyxPQUFPLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLFdBQVc7Ozs7Ozt3QkFDcEYxQyxZQUFZMkMsS0FBSyxrQkFDaEIsOERBQUNMO3NDQUFHLGtCQUEwQyxPQUF4QnRDLFlBQVkyQyxLQUFLLENBQUMsRUFBRSxDQUFDQyxFQUFFOzs7Ozs7Ozs7OztnQ0FHL0MsSUFBSTs7Ozs7Ozs7Ozs7O0FBSWQ7R0FqRk0vQztLQUFBQTtBQW1GTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9BYm91dC5qc3g/MjZjNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcyc7XG5pbXBvcnQgeyBuYXZWYXJpYW50cyB9IGZyb20gJy4uL3V0aWxzL21vdGlvbic7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3dlYXRoZXJEYXRhLCBzZXRXZWF0aGVyRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgQVBJX0tFWSA9ICc0MjQ2NjAzMGI5NDNhYTAzMmVmMDJlNDg1MTk0N2I2YSc7XG4gIGNvbnN0IEFQSV9VUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtzZWFyY2hJbnB1dH0mbGltaXQ9MSZhcHBpZD0ke0FQSV9LRVl9YDtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldEVycm9yKCcnKTtcbiAgICAgIGNvbnN0IGdlb2NvZGluZ1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJX1VSTCk7XG4gICAgICBjb25zdCBnZW9jb2RpbmdEYXRhID0gYXdhaXQgZ2VvY29kaW5nUmVzcG9uc2UuanNvbigpO1xuICBcbiAgICAgIGlmIChnZW9jb2RpbmdEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgeyBsYXQsIGxvbiB9ID0gZ2VvY29kaW5nRGF0YVswXTtcbiAgICAgICAgY29uc3QgT05FX0NBTExfQVBJX1VSTCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9JHtBUElfS0VZfWA7XG4gIFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE9ORV9DQUxMX0FQSV9VUkwpO1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIHNldFdlYXRoZXJEYXRhKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVycm9yKCdFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGEnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyb3IoJ0NpdHkgbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgd2VhdGhlciBkYXRhOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy01eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIHZhcmlhbnRzPXtuYXZWYXJpYW50c31cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnhQYWRkaW5nc30gcHktOCByZWxhdGl2ZWB9XG4gICAgICAgID5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvY2xvdWRzLmpwZWdcIlxuICAgICAgICAgICAgYWx0PVwiaGVyb19jb3ZlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgc206aC1bMzAwcHhdIGgtWzIwMHB4XSBvYmplY3QtY292ZXIgcmVsYXRpdmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS80IGxlZnQtMS80IHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS80IC10cmFuc2xhdGUteS0xLzQgdy0xLzIgZmxleFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgY2l0eVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXIgdy1mdWxsIGJnLXdoaXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBweC04IHB5LTQgYmctemluYy04MDAgdGV4dC13aGl0ZSBob3ZlcjpiZy1ibHVlLTgwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAge2Vycm9yID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICB7LyogRGlzcGxheSBlcnJvciBtZXNzYWdlICovfVxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPntlcnJvcn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IHdlYXRoZXJEYXRhID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICB7LyogRGlzcGxheSB3ZWF0aGVyIGluZm9ybWF0aW9uICovfVxuICAgICAgICAgIDxwPntgV2VhdGhlciBpbiAke3dlYXRoZXJEYXRhLnRpbWV6b25lfTogJHt3ZWF0aGVyRGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb259YH08L3A+XG4gICAgICAgICAge3dlYXRoZXJEYXRhLmRhaWx5ICYmIChcbiAgICAgICAgICAgIDxwPntgRGFpbHkgU3VtbWFyeTogJHt3ZWF0aGVyRGF0YS5kYWlseVswXS5kdH1gfTwvcD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXSwibmFtZXMiOlsibW90aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIm5hdlZhcmlhbnRzIiwiQWJvdXQiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0Iiwid2VhdGhlckRhdGEiLCJzZXRXZWF0aGVyRGF0YSIsImVycm9yIiwic2V0RXJyb3IiLCJBUElfS0VZIiwiQVBJX1VSTCIsImhhbmRsZVNlYXJjaCIsImdlb2NvZGluZ1Jlc3BvbnNlIiwiZmV0Y2giLCJnZW9jb2RpbmdEYXRhIiwianNvbiIsImxlbmd0aCIsImxhdCIsImxvbiIsIk9ORV9DQUxMX0FQSV9VUkwiLCJyZXNwb25zZSIsIm9rIiwiZGF0YSIsImNvbnNvbGUiLCJzZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudHMiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ4UGFkZGluZ3MiLCJpbWciLCJzcmMiLCJhbHQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInAiLCJ0aW1lem9uZSIsImN1cnJlbnQiLCJ3ZWF0aGVyIiwiZGVzY3JpcHRpb24iLCJkYWlseSIsImR0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/About.jsx\n"));

/***/ })

});