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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst About = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [weatherData, setWeatherData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const API_KEY = \"42466030b943aa032ef02e4851947b6a\";\n    const API_URL = \"https://api.openweathermap.org/geo/1.0/direct?q=\".concat(searchInput, \"&limit=1&appid=\").concat(API_KEY);\n    const handleSearch = async ()=>{\n        try {\n            setError(\"\");\n            const geocodingResponse = await fetch(API_URL);\n            const geocodingData = await geocodingResponse.json();\n            if (geocodingData.length > 0) {\n                const { lat , lon  } = geocodingData[0];\n                const ONE_CALL_API_URL = \"https://api.openweathermap.org/data/2.5/onecall?lat=\".concat(lat, \"&lon=\").concat(lon, \"&appid=\").concat(API_KEY);\n                const response = await fetch(ONE_CALL_API_URL);\n                if (response.ok) {\n                    const data = await response.json();\n                    console.log(data);\n                    setWeatherData(data);\n                } else {\n                    setError(\"Error fetching weather data\");\n                }\n            } else {\n                setError(\"City not found\");\n            }\n        } catch (error) {\n            setError(\"An error occurred\");\n            console.error(\"Error fetching weather data:\", error);\n        }\n    };\n    const getRainStartTime = (hourlyData)=>{\n        const rainyHour = hourlyData.find((hour)=>hour.weather[0].main === \"Rain\");\n        return rainyHour ? new Date(rainyHour.dt * 1000).toLocaleTimeString(\"en-US\", {\n            hour: \"numeric\",\n            minute: \"numeric\"\n        }) : \"unknown\";\n    };\n    const getRainEndTime = (hourlyData)=>{\n        let rainyPeriodStarted = false;\n        let endTime = \"unknown\";\n        for (const hour of hourlyData){\n            if (hour.weather[0].main === \"Rain\") {\n                if (!rainyPeriodStarted) {\n                    rainyPeriodStarted = true;\n                    endTime = new Date(hour.dt * 1000).toLocaleTimeString(\"en-US\", {\n                        hour: \"numeric\",\n                        minute: \"numeric\"\n                    });\n                }\n            } else if (rainyPeriodStarted) {\n                endTime = new Date(hour.dt * 1000).toLocaleTimeString(\"en-US\", {\n                    hour: \"numeric\",\n                    minute: \"numeric\"\n                });\n                break;\n            }\n        }\n        return endTime;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.navVariants,\n                    initial: \"hidden\",\n                    whileInView: \"show\",\n                    className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].xPaddings, \" py-8 relative\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/clouds.jpeg\",\n                            alt: \"hero_cover\",\n                            className: \"w-full sm:h-[300px] h-[200px] object-cover relative\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 w-1/2 flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Search for a city\",\n                                    value: searchInput,\n                                    onChange: (e)=>setSearchInput(e.target.value),\n                                    className: \"px-4 py-2 border w-full bg-white\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSearch,\n                                    className: \"ml-2 px-8 py-4 bg-zinc-800 text-white hover:bg-blue-800\",\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, undefined),\n                error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, undefined) : weatherData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Weather in \".concat(weatherData.timezone, \": \").concat(weatherData.current.weather[0].description)\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 118,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Daily Summary: \".concat(weatherData.daily[0].weather[0].main, \" \").concat(weatherData.daily[0].weather[0].description)\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 121,\n                            columnNumber: 5\n                        }, undefined),\n                        weatherData.hourly && weatherData.hourly.find((hour)=>hour.weather[0].main === \"Rain\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"It's likely to start raining around\",\n                                \" \",\n                                new Date(weatherData.hourly.find((hour)=>hour.weather[0].main === \"Rain\").dt * 1000).toLocaleTimeString(\"en-US\", {\n                                    hour: \"numeric\",\n                                    minute: \"numeric\"\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 126,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"Fz4My7bB9VfB1I6A0LCij8kUsV8=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dDQUlBLElBQUk7Ozs7Ozs7Ozs7OztBQUlkO0dBcElNakM7S0FBQUE7QUFzSU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvQWJvdXQuanN4PzI2YzQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMnO1xuaW1wb3J0IHsgbmF2VmFyaWFudHMgfSBmcm9tICcuLi91dGlscy9tb3Rpb24nO1xuXG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt3ZWF0aGVyRGF0YSwgc2V0V2VhdGhlckRhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IEFQSV9LRVkgPSAnNDI0NjYwMzBiOTQzYWEwMzJlZjAyZTQ4NTE5NDdiNmEnO1xuICBjb25zdCBBUElfVVJMID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7c2VhcmNoSW5wdXR9JmxpbWl0PTEmYXBwaWQ9JHtBUElfS0VZfWA7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRFcnJvcignJyk7XG4gICAgICBjb25zdCBnZW9jb2RpbmdSZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9VUkwpO1xuICAgICAgY29uc3QgZ2VvY29kaW5nRGF0YSA9IGF3YWl0IGdlb2NvZGluZ1Jlc3BvbnNlLmpzb24oKTtcbiAgXG4gICAgICBpZiAoZ2VvY29kaW5nRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHsgbGF0LCBsb24gfSA9IGdlb2NvZGluZ0RhdGFbMF07XG4gICAgICAgIGNvbnN0IE9ORV9DQUxMX0FQSV9VUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPSR7QVBJX0tFWX1gO1xuICBcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChPTkVfQ0FMTF9BUElfVVJMKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgIHNldFdlYXRoZXJEYXRhKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVycm9yKCdFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGEnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyb3IoJ0NpdHkgbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgd2VhdGhlciBkYXRhOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0UmFpblN0YXJ0VGltZSA9IChob3VybHlEYXRhKSA9PiB7XG4gICAgY29uc3QgcmFpbnlIb3VyID0gaG91cmx5RGF0YS5maW5kKGhvdXIgPT4gaG91ci53ZWF0aGVyWzBdLm1haW4gPT09IFwiUmFpblwiKTtcbiAgICByZXR1cm4gcmFpbnlIb3VyXG4gICAgICA/IG5ldyBEYXRlKHJhaW55SG91ci5kdCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICBtaW51dGU6IFwibnVtZXJpY1wiXG4gICAgICAgIH0pXG4gICAgICA6IFwidW5rbm93blwiO1xuICB9O1xuICBcbiAgY29uc3QgZ2V0UmFpbkVuZFRpbWUgPSAoaG91cmx5RGF0YSkgPT4ge1xuICAgIGxldCByYWlueVBlcmlvZFN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBsZXQgZW5kVGltZSA9IFwidW5rbm93blwiO1xuICBcbiAgICBmb3IgKGNvbnN0IGhvdXIgb2YgaG91cmx5RGF0YSkge1xuICAgICAgaWYgKGhvdXIud2VhdGhlclswXS5tYWluID09PSBcIlJhaW5cIikge1xuICAgICAgICBpZiAoIXJhaW55UGVyaW9kU3RhcnRlZCkge1xuICAgICAgICAgIHJhaW55UGVyaW9kU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgZW5kVGltZSA9IG5ldyBEYXRlKGhvdXIuZHQgKiAxMDAwKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIG1pbnV0ZTogXCJudW1lcmljXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyYWlueVBlcmlvZFN0YXJ0ZWQpIHtcbiAgICAgICAgZW5kVGltZSA9IG5ldyBEYXRlKGhvdXIuZHQgKiAxMDAwKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgICAgbWludXRlOiBcIm51bWVyaWNcIlxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICByZXR1cm4gZW5kVGltZTtcbiAgfTtcbiAgXG4gIFxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy01eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIHZhcmlhbnRzPXtuYXZWYXJpYW50c31cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnhQYWRkaW5nc30gcHktOCByZWxhdGl2ZWB9XG4gICAgICAgID5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvY2xvdWRzLmpwZWdcIlxuICAgICAgICAgICAgYWx0PVwiaGVyb19jb3ZlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgc206aC1bMzAwcHhdIGgtWzIwMHB4XSBvYmplY3QtY292ZXIgcmVsYXRpdmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS80IGxlZnQtMS80IHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS80IC10cmFuc2xhdGUteS0xLzQgdy0xLzIgZmxleFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgY2l0eVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXIgdy1mdWxsIGJnLXdoaXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBweC04IHB5LTQgYmctemluYy04MDAgdGV4dC13aGl0ZSBob3ZlcjpiZy1ibHVlLTgwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAge2Vycm9yID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICB7LyogRGlzcGxheSBlcnJvciBtZXNzYWdlICovfVxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPntlcnJvcn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IHdlYXRoZXJEYXRhID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICB7LyogRGlzcGxheSB3ZWF0aGVyIGluZm9ybWF0aW9uICovfVxuICAgIDxwPntgV2VhdGhlciBpbiAke3dlYXRoZXJEYXRhLnRpbWV6b25lfTogJHt3ZWF0aGVyRGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb259YH08L3A+XG4gICAgXG4gICAgey8qIERpc3BsYXkgZGFpbHkgc3VtbWFyeSAqL31cbiAgICA8cD57YERhaWx5IFN1bW1hcnk6ICR7d2VhdGhlckRhdGEuZGFpbHlbMF0ud2VhdGhlclswXS5tYWlufSAke3dlYXRoZXJEYXRhLmRhaWx5WzBdLndlYXRoZXJbMF0uZGVzY3JpcHRpb259YH08L3A+XG4gICAgXG4gICAgey8qIEZpbmQgdGhlIG5leHQgcmFpbnkgcGVyaW9kICovfVxuICAgIHt3ZWF0aGVyRGF0YS5ob3VybHkgJiZcbiAgICAgIHdlYXRoZXJEYXRhLmhvdXJseS5maW5kKGhvdXIgPT4gaG91ci53ZWF0aGVyWzBdLm1haW4gPT09IFwiUmFpblwiKSAmJiAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIEl0J3MgbGlrZWx5IHRvIHN0YXJ0IHJhaW5pbmcgYXJvdW5ke1wiIFwifVxuICAgICAgICAgIHtuZXcgRGF0ZShcbiAgICAgICAgICAgIHdlYXRoZXJEYXRhLmhvdXJseS5maW5kKGhvdXIgPT4gaG91ci53ZWF0aGVyWzBdLm1haW4gPT09IFwiUmFpblwiKS5kdCAqIDEwMDBcbiAgICAgICAgICApLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgbWludXRlOiBcIm51bWVyaWNcIlxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3A+XG4gICAgICApfVxuICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXSwibmFtZXMiOlsibW90aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIm5hdlZhcmlhbnRzIiwiQWJvdXQiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0Iiwid2VhdGhlckRhdGEiLCJzZXRXZWF0aGVyRGF0YSIsImVycm9yIiwic2V0RXJyb3IiLCJBUElfS0VZIiwiQVBJX1VSTCIsImhhbmRsZVNlYXJjaCIsImdlb2NvZGluZ1Jlc3BvbnNlIiwiZmV0Y2giLCJnZW9jb2RpbmdEYXRhIiwianNvbiIsImxlbmd0aCIsImxhdCIsImxvbiIsIk9ORV9DQUxMX0FQSV9VUkwiLCJyZXNwb25zZSIsIm9rIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRSYWluU3RhcnRUaW1lIiwiaG91cmx5RGF0YSIsInJhaW55SG91ciIsImZpbmQiLCJob3VyIiwid2VhdGhlciIsIm1haW4iLCJEYXRlIiwiZHQiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJtaW51dGUiLCJnZXRSYWluRW5kVGltZSIsInJhaW55UGVyaW9kU3RhcnRlZCIsImVuZFRpbWUiLCJzZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudHMiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ4UGFkZGluZ3MiLCJpbWciLCJzcmMiLCJhbHQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInAiLCJ0aW1lem9uZSIsImN1cnJlbnQiLCJkZXNjcmlwdGlvbiIsImRhaWx5IiwiaG91cmx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/About.jsx\n"));

/***/ })

});