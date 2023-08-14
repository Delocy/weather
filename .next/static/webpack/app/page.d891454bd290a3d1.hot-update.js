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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst About = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [weatherData, setWeatherData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const API_KEY = \"42466030b943aa032ef02e4851947b6a\";\n    const API_URL = \"https://api.openweathermap.org/geo/1.0/direct?q=\".concat(searchInput, \"&limit=1&appid=\").concat(API_KEY);\n    const handleSearch = async ()=>{\n        try {\n            setError(\"\");\n            const geocodingResponse = await fetch(API_URL);\n            const geocodingData = await geocodingResponse.json();\n            if (geocodingData.length > 0) {\n                const { lat , lon  } = geocodingData[0];\n                const ONE_CALL_API_URL = \"https://api.openweathermap.org/data/2.5/onecall?lat=\".concat(lat, \"&lon=\").concat(lon, \"&units=metric&appid=\").concat(API_KEY);\n                const response = await fetch(ONE_CALL_API_URL);\n                if (response.ok) {\n                    const data = await response.json();\n                    console.log(data);\n                    setWeatherData(data);\n                } else {\n                    setError(\"Error fetching weather data\");\n                }\n            } else {\n                setError(\"City not found\");\n            }\n        } catch (error) {\n            setError(\"An error occurred\");\n            console.error(\"Error fetching weather data:\", error);\n        }\n    };\n    const getRainStartTime = (hourlyData)=>{\n        const rainyHour = hourlyData.find((hour)=>hour.weather[0].main === \"Rain\");\n        return rainyHour ? new Date(rainyHour.dt * 1000).toLocaleTimeString(\"en-US\", {\n            hour: \"numeric\",\n            minute: \"numeric\"\n        }) : \"unknown\";\n    };\n    const getRainEndTime = (hourlyData)=>{\n        let rainyPeriodStarted = false;\n        let endTime = \"unknown\";\n        for (const hour of hourlyData){\n            if (hour.weather[0].main === \"Rain\") {\n                if (!rainyPeriodStarted) {\n                    rainyPeriodStarted = true;\n                    endTime = new Date(hour.dt * 1000).toLocaleTimeString(\"en-US\", {\n                        hour: \"numeric\",\n                        minute: \"numeric\"\n                    });\n                }\n            } else if (rainyPeriodStarted) {\n                endTime = new Date(hour.dt * 1000).toLocaleTimeString(\"en-US\", {\n                    hour: \"numeric\",\n                    minute: \"numeric\"\n                });\n                break;\n            }\n        }\n        return endTime;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.navVariants,\n                    initial: \"hidden\",\n                    whileInView: \"show\",\n                    className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].xPaddings, \" py-8 relative\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/clouds.jpeg\",\n                            alt: \"hero_cover\",\n                            className: \" sm:h-[300px] h-[200px] object-cover relative\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 w-1/2 flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Search for a city\",\n                                    value: searchInput,\n                                    onChange: (e)=>setSearchInput(e.target.value),\n                                    className: \"px-4 py-2 border w-full bg-white\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSearch,\n                                    className: \"ml-2 px-8 py-4 bg-zinc-800 text-white hover:bg-blue-800\",\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined),\n                error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined) : weatherData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 p-4 bg-white rounded-lg shadow-md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-4\",\n                            children: \"Weather in \".concat(weatherData.timezone, \": \").concat(weatherData.current.weather[0].description)\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-4\",\n                            children: \"Current Temperature: \".concat(weatherData.current.temp, \"\\xb0C\")\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-4\",\n                            children: \"Daily Summary: \".concat(weatherData.daily[0].weather[0].main, \" \").concat(weatherData.daily[0].weather[0].description)\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 123,\n                            columnNumber: 11\n                        }, undefined),\n                        weatherData.hourly && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Likely rainy period from\",\n                                \" \",\n                                getRainStartTime(weatherData.hourly),\n                                \" to \",\n                                getRainEndTime(weatherData.hourly)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"Fz4My7bB9VfB1I6A0LCij8kUsV8=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9BYm91dC5qc3g/MjZjNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcyc7XG5pbXBvcnQgeyBuYXZWYXJpYW50cyB9IGZyb20gJy4uL3V0aWxzL21vdGlvbic7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3dlYXRoZXJEYXRhLCBzZXRXZWF0aGVyRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgQVBJX0tFWSA9ICc0MjQ2NjAzMGI5NDNhYTAzMmVmMDJlNDg1MTk0N2I2YSc7XG4gIGNvbnN0IEFQSV9VUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtzZWFyY2hJbnB1dH0mbGltaXQ9MSZhcHBpZD0ke0FQSV9LRVl9YDtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldEVycm9yKCcnKTtcbiAgICAgIGNvbnN0IGdlb2NvZGluZ1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJX1VSTCk7XG4gICAgICBjb25zdCBnZW9jb2RpbmdEYXRhID0gYXdhaXQgZ2VvY29kaW5nUmVzcG9uc2UuanNvbigpO1xuICBcbiAgICAgIGlmIChnZW9jb2RpbmdEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgeyBsYXQsIGxvbiB9ID0gZ2VvY29kaW5nRGF0YVswXTtcbiAgICAgICAgY29uc3QgT05FX0NBTExfQVBJX1VSTCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9bWV0cmljJmFwcGlkPSR7QVBJX0tFWX1gO1xuICBcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChPTkVfQ0FMTF9BUElfVVJMKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgIHNldFdlYXRoZXJEYXRhKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVycm9yKCdFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGEnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyb3IoJ0NpdHkgbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgd2VhdGhlciBkYXRhOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0UmFpblN0YXJ0VGltZSA9IChob3VybHlEYXRhKSA9PiB7XG4gICAgY29uc3QgcmFpbnlIb3VyID0gaG91cmx5RGF0YS5maW5kKGhvdXIgPT4gaG91ci53ZWF0aGVyWzBdLm1haW4gPT09IFwiUmFpblwiKTtcbiAgICByZXR1cm4gcmFpbnlIb3VyXG4gICAgICA/IG5ldyBEYXRlKHJhaW55SG91ci5kdCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICBtaW51dGU6IFwibnVtZXJpY1wiXG4gICAgICAgIH0pXG4gICAgICA6IFwidW5rbm93blwiO1xuICB9O1xuICBcbiAgY29uc3QgZ2V0UmFpbkVuZFRpbWUgPSAoaG91cmx5RGF0YSkgPT4ge1xuICAgIGxldCByYWlueVBlcmlvZFN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBsZXQgZW5kVGltZSA9IFwidW5rbm93blwiO1xuICBcbiAgICBmb3IgKGNvbnN0IGhvdXIgb2YgaG91cmx5RGF0YSkge1xuICAgICAgaWYgKGhvdXIud2VhdGhlclswXS5tYWluID09PSBcIlJhaW5cIikge1xuICAgICAgICBpZiAoIXJhaW55UGVyaW9kU3RhcnRlZCkge1xuICAgICAgICAgIHJhaW55UGVyaW9kU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgZW5kVGltZSA9IG5ldyBEYXRlKGhvdXIuZHQgKiAxMDAwKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIG1pbnV0ZTogXCJudW1lcmljXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyYWlueVBlcmlvZFN0YXJ0ZWQpIHtcbiAgICAgICAgZW5kVGltZSA9IG5ldyBEYXRlKGhvdXIuZHQgKiAxMDAwKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgICAgbWludXRlOiBcIm51bWVyaWNcIlxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICByZXR1cm4gZW5kVGltZTtcbiAgfTsgIFxuICBcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctNXhsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICB2YXJpYW50cz17bmF2VmFyaWFudHN9XG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy54UGFkZGluZ3N9IHB5LTggcmVsYXRpdmVgfVxuICAgICAgICA+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL2Nsb3Vkcy5qcGVnXCJcbiAgICAgICAgICAgIGFsdD1cImhlcm9fY292ZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHNtOmgtWzMwMHB4XSBoLVsyMDBweF0gb2JqZWN0LWNvdmVyIHJlbGF0aXZlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvNCBsZWZ0LTEvNCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvNCAtdHJhbnNsYXRlLXktMS80IHctMS8yIGZsZXhcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhIGNpdHlcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoSW5wdXR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyIHctZnVsbCBiZy13aGl0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgcHgtOCBweS00IGJnLXppbmMtODAwIHRleHQtd2hpdGUgaG92ZXI6YmctYmx1ZS04MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIHtlcnJvciA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgey8qIERpc3BsYXkgZXJyb3IgbWVzc2FnZSAqL31cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj57ZXJyb3J9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiB3ZWF0aGVyRGF0YSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHAtNCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICAgIHsvKiBEaXNwbGF5IHdlYXRoZXIgaW5mb3JtYXRpb24gKi99XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPntgV2VhdGhlciBpbiAke3dlYXRoZXJEYXRhLnRpbWV6b25lfTogJHt3ZWF0aGVyRGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb259YH08L3A+XG5cbiAgICAgICAgICB7LyogRGlzcGxheSBjdXJyZW50IFRlbXAgICovfVxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTRcIj57YEN1cnJlbnQgVGVtcGVyYXR1cmU6ICR7d2VhdGhlckRhdGEuY3VycmVudC50ZW1wfcKwQ2B9PC9wPlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBEaXNwbGF5IGRhaWx5IHN1bW1hcnkgKi99XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPntgRGFpbHkgU3VtbWFyeTogJHt3ZWF0aGVyRGF0YS5kYWlseVswXS53ZWF0aGVyWzBdLm1haW59ICR7d2VhdGhlckRhdGEuZGFpbHlbMF0ud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gfTwvcD5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogRmluZCB0aGUgcmFuZ2Ugb2YgcmFpbnkgaG91cnMgKi99XG4gICAgICAgICAge3dlYXRoZXJEYXRhLmhvdXJseSAmJiAoXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgTGlrZWx5IHJhaW55IHBlcmlvZCBmcm9te1wiIFwifVxuICAgICAgICAgICAgICB7Z2V0UmFpblN0YXJ0VGltZSh3ZWF0aGVyRGF0YS5ob3VybHkpfVxuICAgICAgICAgICAgICB7XCIgdG8gXCJ9XG4gICAgICAgICAgICAgIHtnZXRSYWluRW5kVGltZSh3ZWF0aGVyRGF0YS5ob3VybHkpfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwibmF2VmFyaWFudHMiLCJBYm91dCIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJ3ZWF0aGVyRGF0YSIsInNldFdlYXRoZXJEYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsIkFQSV9LRVkiLCJBUElfVVJMIiwiaGFuZGxlU2VhcmNoIiwiZ2VvY29kaW5nUmVzcG9uc2UiLCJmZXRjaCIsImdlb2NvZGluZ0RhdGEiLCJqc29uIiwibGVuZ3RoIiwibGF0IiwibG9uIiwiT05FX0NBTExfQVBJX1VSTCIsInJlc3BvbnNlIiwib2siLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImdldFJhaW5TdGFydFRpbWUiLCJob3VybHlEYXRhIiwicmFpbnlIb3VyIiwiZmluZCIsImhvdXIiLCJ3ZWF0aGVyIiwibWFpbiIsIkRhdGUiLCJkdCIsInRvTG9jYWxlVGltZVN0cmluZyIsIm1pbnV0ZSIsImdldFJhaW5FbmRUaW1lIiwicmFpbnlQZXJpb2RTdGFydGVkIiwiZW5kVGltZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInhQYWRkaW5ncyIsImltZyIsInNyYyIsImFsdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsInRpbWV6b25lIiwiY3VycmVudCIsImRlc2NyaXB0aW9uIiwidGVtcCIsImRhaWx5IiwiaG91cmx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/About.jsx\n"));

/***/ })

});