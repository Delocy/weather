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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst About = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [weatherData, setWeatherData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const API_KEY = \"42466030b943aa032ef02e4851947b6a\";\n    const API_URL = \"https://api.openweathermap.org/geo/1.0/direct?q=\".concat(searchInput, \"&limit=1&units={metric}&appid=\").concat(API_KEY);\n    const handleSearch = async ()=>{\n        try {\n            setError(\"\");\n            const geocodingResponse = await fetch(API_URL);\n            const geocodingData = await geocodingResponse.json();\n            if (geocodingData.length > 0) {\n                const { lat , lon  } = geocodingData[0];\n                const ONE_CALL_API_URL = \"https://api.openweathermap.org/data/2.5/onecall?lat=\".concat(lat, \"&lon=\").concat(lon, \"&appid=\").concat(API_KEY);\n                const response = await fetch(ONE_CALL_API_URL);\n                if (response.ok) {\n                    const data = await response.json();\n                    console.log(data);\n                    setWeatherData(data);\n                } else {\n                    setError(\"Error fetching weather data\");\n                }\n            } else {\n                setError(\"City not found\");\n            }\n        } catch (error) {\n            setError(\"An error occurred\");\n            console.error(\"Error fetching weather data:\", error);\n        }\n    };\n    const getRainStartTime = (hourlyData)=>{\n        const rainyHour = hourlyData.find((hour)=>hour.weather[0].main === \"Rain\");\n        return rainyHour ? new Date(rainyHour.dt * 1000).toLocaleTimeString(\"en-US\", {\n            hour: \"numeric\",\n            minute: \"numeric\"\n        }) : \"unknown\";\n    };\n    const getRainEndTime = (hourlyData)=>{\n        let rainyPeriodStarted = false;\n        let endTime = \"unknown\";\n        for (const hour of hourlyData){\n            if (hour.weather[0].main === \"Rain\") {\n                if (!rainyPeriodStarted) {\n                    rainyPeriodStarted = true;\n                    endTime = new Date(hour.dt * 1000).toLocaleTimeString(\"en-US\", {\n                        hour: \"numeric\",\n                        minute: \"numeric\"\n                    });\n                }\n            } else if (rainyPeriodStarted) {\n                endTime = new Date(hour.dt * 1000).toLocaleTimeString(\"en-US\", {\n                    hour: \"numeric\",\n                    minute: \"numeric\"\n                });\n                break;\n            }\n        }\n        return endTime;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.navVariants,\n                    initial: \"hidden\",\n                    whileInView: \"show\",\n                    className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].xPaddings, \" py-8 relative\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/clouds.jpeg\",\n                            alt: \"hero_cover\",\n                            className: \"w-full sm:h-[300px] h-[200px] object-cover relative\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 w-1/2 flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Search for a city\",\n                                    value: searchInput,\n                                    onChange: (e)=>setSearchInput(e.target.value),\n                                    className: \"px-4 py-2 border w-full bg-white\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSearch,\n                                    className: \"ml-2 px-8 py-4 bg-zinc-800 text-white hover:bg-blue-800\",\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined),\n                error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined) : weatherData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 p-4 bg-white rounded-lg shadow-md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-4\",\n                            children: \"Weather in \".concat(weatherData.timezone, \": \").concat(weatherData.current.weather[0].description, \" \").concat(weatherData.current.temp)\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-4\",\n                            children: \"Daily Summary: \".concat(weatherData.daily[0].weather[0].main, \" \").concat(weatherData.daily[0].weather[0].description)\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, undefined),\n                        weatherData.hourly && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Likely rainy period from\",\n                                \" \",\n                                getRainStartTime(weatherData.hourly),\n                                \" to \",\n                                getRainEndTime(weatherData.hourly)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"Fz4My7bB9VfB1I6A0LCij8kUsV8=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMnO1xuaW1wb3J0IHsgbmF2VmFyaWFudHMgfSBmcm9tICcuLi91dGlscy9tb3Rpb24nO1xuXG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt3ZWF0aGVyRGF0YSwgc2V0V2VhdGhlckRhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IEFQSV9LRVkgPSAnNDI0NjYwMzBiOTQzYWEwMzJlZjAyZTQ4NTE5NDdiNmEnO1xuICBjb25zdCBBUElfVVJMID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7c2VhcmNoSW5wdXR9JmxpbWl0PTEmdW5pdHM9e21ldHJpY30mYXBwaWQ9JHtBUElfS0VZfWA7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRFcnJvcignJyk7XG4gICAgICBjb25zdCBnZW9jb2RpbmdSZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9VUkwpO1xuICAgICAgY29uc3QgZ2VvY29kaW5nRGF0YSA9IGF3YWl0IGdlb2NvZGluZ1Jlc3BvbnNlLmpzb24oKTtcbiAgXG4gICAgICBpZiAoZ2VvY29kaW5nRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHsgbGF0LCBsb24gfSA9IGdlb2NvZGluZ0RhdGFbMF07XG4gICAgICAgIGNvbnN0IE9ORV9DQUxMX0FQSV9VUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPSR7QVBJX0tFWX1gO1xuICBcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChPTkVfQ0FMTF9BUElfVVJMKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgIHNldFdlYXRoZXJEYXRhKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVycm9yKCdFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGEnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyb3IoJ0NpdHkgbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgd2VhdGhlciBkYXRhOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0UmFpblN0YXJ0VGltZSA9IChob3VybHlEYXRhKSA9PiB7XG4gICAgY29uc3QgcmFpbnlIb3VyID0gaG91cmx5RGF0YS5maW5kKGhvdXIgPT4gaG91ci53ZWF0aGVyWzBdLm1haW4gPT09IFwiUmFpblwiKTtcbiAgICByZXR1cm4gcmFpbnlIb3VyXG4gICAgICA/IG5ldyBEYXRlKHJhaW55SG91ci5kdCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICBtaW51dGU6IFwibnVtZXJpY1wiXG4gICAgICAgIH0pXG4gICAgICA6IFwidW5rbm93blwiO1xuICB9O1xuICBcbiAgY29uc3QgZ2V0UmFpbkVuZFRpbWUgPSAoaG91cmx5RGF0YSkgPT4ge1xuICAgIGxldCByYWlueVBlcmlvZFN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBsZXQgZW5kVGltZSA9IFwidW5rbm93blwiO1xuICBcbiAgICBmb3IgKGNvbnN0IGhvdXIgb2YgaG91cmx5RGF0YSkge1xuICAgICAgaWYgKGhvdXIud2VhdGhlclswXS5tYWluID09PSBcIlJhaW5cIikge1xuICAgICAgICBpZiAoIXJhaW55UGVyaW9kU3RhcnRlZCkge1xuICAgICAgICAgIHJhaW55UGVyaW9kU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgZW5kVGltZSA9IG5ldyBEYXRlKGhvdXIuZHQgKiAxMDAwKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIG1pbnV0ZTogXCJudW1lcmljXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyYWlueVBlcmlvZFN0YXJ0ZWQpIHtcbiAgICAgICAgZW5kVGltZSA9IG5ldyBEYXRlKGhvdXIuZHQgKiAxMDAwKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgICAgbWludXRlOiBcIm51bWVyaWNcIlxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICByZXR1cm4gZW5kVGltZTtcbiAgfTsgIFxuICBcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctNXhsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICB2YXJpYW50cz17bmF2VmFyaWFudHN9XG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy54UGFkZGluZ3N9IHB5LTggcmVsYXRpdmVgfVxuICAgICAgICA+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL2Nsb3Vkcy5qcGVnXCJcbiAgICAgICAgICAgIGFsdD1cImhlcm9fY292ZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHNtOmgtWzMwMHB4XSBoLVsyMDBweF0gb2JqZWN0LWNvdmVyIHJlbGF0aXZlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvNCBsZWZ0LTEvNCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvNCAtdHJhbnNsYXRlLXktMS80IHctMS8yIGZsZXhcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhIGNpdHlcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoSW5wdXR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyIHctZnVsbCBiZy13aGl0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgcHgtOCBweS00IGJnLXppbmMtODAwIHRleHQtd2hpdGUgaG92ZXI6YmctYmx1ZS04MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIHtlcnJvciA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgey8qIERpc3BsYXkgZXJyb3IgbWVzc2FnZSAqL31cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj57ZXJyb3J9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiB3ZWF0aGVyRGF0YSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHAtNCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICAgIHsvKiBEaXNwbGF5IHdlYXRoZXIgaW5mb3JtYXRpb24gKi99XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPntgV2VhdGhlciBpbiAke3dlYXRoZXJEYXRhLnRpbWV6b25lfTogJHt3ZWF0aGVyRGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb259ICR7d2VhdGhlckRhdGEuY3VycmVudC50ZW1wfWB9PC9wPlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBEaXNwbGF5IGRhaWx5IHN1bW1hcnkgKi99XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPntgRGFpbHkgU3VtbWFyeTogJHt3ZWF0aGVyRGF0YS5kYWlseVswXS53ZWF0aGVyWzBdLm1haW59ICR7d2VhdGhlckRhdGEuZGFpbHlbMF0ud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gfTwvcD5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogRmluZCB0aGUgcmFuZ2Ugb2YgcmFpbnkgaG91cnMgKi99XG4gICAgICAgICAge3dlYXRoZXJEYXRhLmhvdXJseSAmJiAoXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgTGlrZWx5IHJhaW55IHBlcmlvZCBmcm9te1wiIFwifVxuICAgICAgICAgICAgICB7Z2V0UmFpblN0YXJ0VGltZSh3ZWF0aGVyRGF0YS5ob3VybHkpfVxuICAgICAgICAgICAgICB7XCIgdG8gXCJ9XG4gICAgICAgICAgICAgIHtnZXRSYWluRW5kVGltZSh3ZWF0aGVyRGF0YS5ob3VybHkpfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwibmF2VmFyaWFudHMiLCJBYm91dCIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJ3ZWF0aGVyRGF0YSIsInNldFdlYXRoZXJEYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsIkFQSV9LRVkiLCJBUElfVVJMIiwiaGFuZGxlU2VhcmNoIiwiZ2VvY29kaW5nUmVzcG9uc2UiLCJmZXRjaCIsImdlb2NvZGluZ0RhdGEiLCJqc29uIiwibGVuZ3RoIiwibGF0IiwibG9uIiwiT05FX0NBTExfQVBJX1VSTCIsInJlc3BvbnNlIiwib2siLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImdldFJhaW5TdGFydFRpbWUiLCJob3VybHlEYXRhIiwicmFpbnlIb3VyIiwiZmluZCIsImhvdXIiLCJ3ZWF0aGVyIiwibWFpbiIsIkRhdGUiLCJkdCIsInRvTG9jYWxlVGltZVN0cmluZyIsIm1pbnV0ZSIsImdldFJhaW5FbmRUaW1lIiwicmFpbnlQZXJpb2RTdGFydGVkIiwiZW5kVGltZSIsInNlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInhQYWRkaW5ncyIsImltZyIsInNyYyIsImFsdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsInRpbWV6b25lIiwiY3VycmVudCIsImRlc2NyaXB0aW9uIiwidGVtcCIsImRhaWx5IiwiaG91cmx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/About.jsx\n"));

/***/ })

});