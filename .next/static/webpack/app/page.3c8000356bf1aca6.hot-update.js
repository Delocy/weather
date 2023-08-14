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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst weatherImages = {\n    \"Clear\": \"/Clear.png\",\n    \"Few clouds\": \"/Few_clouds.png\",\n    \"Scattered clouds\": \"/Scattered_clouds.png\",\n    \"Broken clouds\": \"/Scattered_clouds.png\",\n    \"Shower rain\": \"/Shower_rain.png\",\n    \"Rain\": \"/Rain.jpeg\",\n    \"Thunderstorm\": \"/Thunderstorm.png\",\n    \"Snow\": \"/Snow.png\",\n    \"Mist\": \"/Mist.png\"\n};\nconst About = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [weatherData, setWeatherData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const API_KEY = \"42466030b943aa032ef02e4851947b6a\";\n    const API_URL = \"https://api.openweathermap.org/geo/1.0/direct?q=\".concat(searchInput, \"&limit=1&appid=\").concat(API_KEY);\n    const handleSearch = async ()=>{\n        try {\n            setError(\"\");\n            const geocodingResponse = await fetch(API_URL);\n            const geocodingData = await geocodingResponse.json();\n            if (geocodingData.length > 0) {\n                const { lat , lon  } = geocodingData[0];\n                const ONE_CALL_API_URL = \"https://api.openweathermap.org/data/2.5/onecall?lat=\".concat(lat, \"&lon=\").concat(lon, \"&units=metric&appid=\").concat(API_KEY);\n                const response = await fetch(ONE_CALL_API_URL);\n                if (response.ok) {\n                    const data = await response.json();\n                    console.log(data);\n                    setWeatherData(data);\n                } else {\n                    setError(\"Error fetching weather data\");\n                }\n            } else {\n                setError(\"City not found\");\n            }\n        } catch (error) {\n            setError(\"An error occurred\");\n            console.error(\"Error fetching weather data:\", error);\n        }\n    };\n    const getRainStartTime = (hourlyData)=>{\n        const rainyHour = hourlyData.find((hour)=>hour.weather[0].main === \"Rain\");\n        return rainyHour ? new Date(rainyHour.dt * 1000).toLocaleTimeString(\"en-US\", {\n            hour: \"numeric\",\n            minute: \"numeric\"\n        }) : \"unknown\";\n    };\n    const getRainEndTime = (hourlyData)=>{\n        let rainyPeriodStarted = false;\n        let endTime = \"unknown\";\n        for (const hour of hourlyData){\n            if (hour.weather[0].main === \"Rain\") {\n                if (!rainyPeriodStarted) {\n                    rainyPeriodStarted = true;\n                    endTime = new Date(hour.dt * 1000).toLocaleTimeString(\"en-US\", {\n                        hour: \"numeric\",\n                        minute: \"numeric\"\n                    });\n                }\n            } else if (rainyPeriodStarted) {\n                endTime = new Date(hour.dt * 1000).toLocaleTimeString(\"en-US\", {\n                    hour: \"numeric\",\n                    minute: \"numeric\"\n                });\n                break;\n            }\n        }\n        return endTime;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.navVariants,\n                initial: \"hidden\",\n                whileInView: \"show\",\n                className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].xPaddings, \" py-8 relative\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/clouds.jpeg\",\n                        alt: \"hero_cover\",\n                        className: \"w-full sm:h-[300px] h-[200px] object-cover relative\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 w-1/2 flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Search for a city\",\n                                value: searchInput,\n                                onChange: (e)=>setSearchInput(e.target.value),\n                                className: \"px-4 py-2 border w-full bg-white\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSearch,\n                                className: \"ml-2 px-8 py-4 bg-zinc-800 text-white hover:bg-blue-800\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, undefined),\n                    error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-red-500\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined) : weatherData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full sm:w-1/2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mb-4\",\n                                        children: \"Weather in \".concat(weatherData.timezone, \": \").concat(weatherData.current.weather[0].description)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mb-4\",\n                                        children: \"Current Temperature: \".concat(weatherData.current.temp, \"\\xb0C\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mb-4\",\n                                        children: \"Daily Summary: \".concat(weatherData.daily[0].weather[0].main, \" - \").concat(weatherData.daily[0].weather[0].description)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                        lineNumber: 131,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    weatherData.hourly && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Likely rainy period from\",\n                                            \" \",\n                                            getRainStartTime(weatherData.hourly),\n                                            \" to \",\n                                            getRainEndTime(weatherData.hourly)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                        lineNumber: 133,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                lineNumber: 128,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full sm:w-1/2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: weatherImages[weatherData.daily[0].weather[0].main],\n                                    alt: \"Weather\",\n                                    className: \"w-f h-f\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 142,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                lineNumber: 141,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, undefined) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                lineNumber: 95,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n            lineNumber: 94,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"Fz4My7bB9VfB1I6A0LCij8kUsV8=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akMsaUJBQWlCcEIsWUFBWTJELE1BQU07NENBQ25DOzRDQUNBNUIsZUFBZS9CLFlBQVkyRCxNQUFNOzs7Ozs7Ozs7Ozs7OzBDQUl4Qyw4REFBQ3ZCO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDTTtvQ0FDQ0MsS0FBSzlDLGFBQWEsQ0FBQ0ksWUFBWTBELEtBQUssQ0FBQyxFQUFFLENBQUNqQyxPQUFPLENBQUMsRUFBRSxDQUFDQyxJQUFJLENBQUM7b0NBQ3hEaUIsS0FBSTtvQ0FDSlIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FLaEIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZDtHQXJJTXRDO0tBQUFBO0FBdUlOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlY3Rpb25zL0Fib3V0LmpzeD8yNmM0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzJztcbmltcG9ydCB7IG5hdlZhcmlhbnRzIH0gZnJvbSAnLi4vdXRpbHMvbW90aW9uJztcblxuY29uc3Qgd2VhdGhlckltYWdlcyA9IHtcbiAgJ0NsZWFyJzogJy9DbGVhci5wbmcnLFxuICAnRmV3IGNsb3Vkcyc6ICcvRmV3X2Nsb3Vkcy5wbmcnLFxuICAnU2NhdHRlcmVkIGNsb3Vkcyc6ICcvU2NhdHRlcmVkX2Nsb3Vkcy5wbmcnLFxuICAnQnJva2VuIGNsb3Vkcyc6ICcvU2NhdHRlcmVkX2Nsb3Vkcy5wbmcnLFxuICAnU2hvd2VyIHJhaW4nOiAnL1Nob3dlcl9yYWluLnBuZycsXG4gICdSYWluJzogJy9SYWluLmpwZWcnLFxuICAnVGh1bmRlcnN0b3JtJzogJy9UaHVuZGVyc3Rvcm0ucG5nJyxcbiAgJ1Nub3cnOiAnL1Nub3cucG5nJyxcbiAgJ01pc3QnOiAnL01pc3QucG5nJyxcbn07XG5cblxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbd2VhdGhlckRhdGEsIHNldFdlYXRoZXJEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBBUElfS0VZID0gJzQyNDY2MDMwYjk0M2FhMDMyZWYwMmU0ODUxOTQ3YjZhJztcbiAgY29uc3QgQVBJX1VSTCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke3NlYXJjaElucHV0fSZsaW1pdD0xJmFwcGlkPSR7QVBJX0tFWX1gO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0RXJyb3IoJycpO1xuICAgICAgY29uc3QgZ2VvY29kaW5nUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfVVJMKTtcbiAgICAgIGNvbnN0IGdlb2NvZGluZ0RhdGEgPSBhd2FpdCBnZW9jb2RpbmdSZXNwb25zZS5qc29uKCk7XG4gIFxuICAgICAgaWYgKGdlb2NvZGluZ0RhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB7IGxhdCwgbG9uIH0gPSBnZW9jb2RpbmdEYXRhWzBdO1xuICAgICAgICBjb25zdCBPTkVfQ0FMTF9BUElfVVJMID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZ1bml0cz1tZXRyaWMmYXBwaWQ9JHtBUElfS0VZfWA7XG4gIFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE9ORV9DQUxMX0FQSV9VUkwpO1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgc2V0V2VhdGhlckRhdGEoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0RXJyb3IoJ0Vycm9yIGZldGNoaW5nIHdlYXRoZXIgZGF0YScpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcignQ2l0eSBub3QgZm91bmQnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkJyk7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGE6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRSYWluU3RhcnRUaW1lID0gKGhvdXJseURhdGEpID0+IHtcbiAgICBjb25zdCByYWlueUhvdXIgPSBob3VybHlEYXRhLmZpbmQoaG91ciA9PiBob3VyLndlYXRoZXJbMF0ubWFpbiA9PT0gXCJSYWluXCIpO1xuICAgIHJldHVybiByYWlueUhvdXJcbiAgICAgID8gbmV3IERhdGUocmFpbnlIb3VyLmR0ICogMTAwMCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICAgIG1pbnV0ZTogXCJudW1lcmljXCJcbiAgICAgICAgfSlcbiAgICAgIDogXCJ1bmtub3duXCI7XG4gIH07XG4gIFxuICBjb25zdCBnZXRSYWluRW5kVGltZSA9IChob3VybHlEYXRhKSA9PiB7XG4gICAgbGV0IHJhaW55UGVyaW9kU3RhcnRlZCA9IGZhbHNlO1xuICAgIGxldCBlbmRUaW1lID0gXCJ1bmtub3duXCI7XG4gIFxuICAgIGZvciAoY29uc3QgaG91ciBvZiBob3VybHlEYXRhKSB7XG4gICAgICBpZiAoaG91ci53ZWF0aGVyWzBdLm1haW4gPT09IFwiUmFpblwiKSB7XG4gICAgICAgIGlmICghcmFpbnlQZXJpb2RTdGFydGVkKSB7XG4gICAgICAgICAgcmFpbnlQZXJpb2RTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICBlbmRUaW1lID0gbmV3IERhdGUoaG91ci5kdCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgbWludXRlOiBcIm51bWVyaWNcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJhaW55UGVyaW9kU3RhcnRlZCkge1xuICAgICAgICBlbmRUaW1lID0gbmV3IERhdGUoaG91ci5kdCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICBtaW51dGU6IFwibnVtZXJpY1wiXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIHJldHVybiBlbmRUaW1lO1xuICB9OyAgXG4gIFxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy02eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIHZhcmlhbnRzPXtuYXZWYXJpYW50c31cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnhQYWRkaW5nc30gcHktOCByZWxhdGl2ZWB9XG4gICAgICAgID5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvY2xvdWRzLmpwZWdcIlxuICAgICAgICAgICAgYWx0PVwiaGVyb19jb3ZlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgc206aC1bMzAwcHhdIGgtWzIwMHB4XSBvYmplY3QtY292ZXIgcmVsYXRpdmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS80IGxlZnQtMS80IHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS80IC10cmFuc2xhdGUteS0xLzQgdy0xLzIgZmxleFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgY2l0eVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXIgdy1mdWxsIGJnLXdoaXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBweC04IHB5LTQgYmctemluYy04MDAgdGV4dC13aGl0ZSBob3ZlcjpiZy1ibHVlLTgwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIHtlcnJvciA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgey8qIERpc3BsYXkgZXJyb3IgbWVzc2FnZSAqL31cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj57ZXJyb3J9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiB3ZWF0aGVyRGF0YSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHAtNCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZCBmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LTEvMlwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00XCI+e2BXZWF0aGVyIGluICR7d2VhdGhlckRhdGEudGltZXpvbmV9OiAke3dlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPntgQ3VycmVudCBUZW1wZXJhdHVyZTogJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXB9wrBDYH08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTRcIj57YERhaWx5IFN1bW1hcnk6ICR7d2VhdGhlckRhdGEuZGFpbHlbMF0ud2VhdGhlclswXS5tYWlufSAtICR7d2VhdGhlckRhdGEuZGFpbHlbMF0ud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gfTwvcD5cbiAgICAgICAgICAgICAge3dlYXRoZXJEYXRhLmhvdXJseSAmJiAoXG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBMaWtlbHkgcmFpbnkgcGVyaW9kIGZyb217XCIgXCJ9XG4gICAgICAgICAgICAgICAgICB7Z2V0UmFpblN0YXJ0VGltZSh3ZWF0aGVyRGF0YS5ob3VybHkpfVxuICAgICAgICAgICAgICAgICAge1wiIHRvIFwifVxuICAgICAgICAgICAgICAgICAge2dldFJhaW5FbmRUaW1lKHdlYXRoZXJEYXRhLmhvdXJseSl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LTEvMlwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXt3ZWF0aGVySW1hZ2VzW3dlYXRoZXJEYXRhLmRhaWx5WzBdLndlYXRoZXJbMF0ubWFpbl19XG4gICAgICAgICAgICAgICAgYWx0PVwiV2VhdGhlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mIGgtZlwiXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXSwibmFtZXMiOlsibW90aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIm5hdlZhcmlhbnRzIiwid2VhdGhlckltYWdlcyIsIkFib3V0Iiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsIndlYXRoZXJEYXRhIiwic2V0V2VhdGhlckRhdGEiLCJlcnJvciIsInNldEVycm9yIiwiQVBJX0tFWSIsIkFQSV9VUkwiLCJoYW5kbGVTZWFyY2giLCJnZW9jb2RpbmdSZXNwb25zZSIsImZldGNoIiwiZ2VvY29kaW5nRGF0YSIsImpzb24iLCJsZW5ndGgiLCJsYXQiLCJsb24iLCJPTkVfQ0FMTF9BUElfVVJMIiwicmVzcG9uc2UiLCJvayIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0UmFpblN0YXJ0VGltZSIsImhvdXJseURhdGEiLCJyYWlueUhvdXIiLCJmaW5kIiwiaG91ciIsIndlYXRoZXIiLCJtYWluIiwiRGF0ZSIsImR0IiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwibWludXRlIiwiZ2V0UmFpbkVuZFRpbWUiLCJyYWlueVBlcmlvZFN0YXJ0ZWQiLCJlbmRUaW1lIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInZhcmlhbnRzIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3IiwieFBhZGRpbmdzIiwiaW1nIiwic3JjIiwiYWx0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwidGltZXpvbmUiLCJjdXJyZW50IiwiZGVzY3JpcHRpb24iLCJ0ZW1wIiwiZGFpbHkiLCJob3VybHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/About.jsx\n"));

/***/ })

});