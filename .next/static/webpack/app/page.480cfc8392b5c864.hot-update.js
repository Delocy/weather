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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst weatherImages = {\n    \"Clear\": \"/Clear.png\",\n    \"Few clouds\": \"/Few_clouds.png\",\n    \"Scattered clouds\": \"/Scattered_clouds.png\",\n    \"Broken clouds\": \"/Scattered_clouds.png\",\n    \"Shower rain\": \"/Shower_rain.png\",\n    \"Rain\": \"/Rain.jpeg\",\n    \"Thunderstorm\": \"/Thunderstorm.png\",\n    \"Snow\": \"/Snow.png\",\n    \"Mist\": \"/Mist.png\"\n};\nconst About = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [weatherData, setWeatherData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const API_KEY = \"42466030b943aa032ef02e4851947b6a\";\n    const API_URL = \"https://api.openweathermap.org/geo/1.0/direct?q=\".concat(searchInput, \"&limit=1&appid=\").concat(API_KEY);\n    const handleSearch = async ()=>{\n        try {\n            setError(\"\");\n            const geocodingResponse = await fetch(API_URL);\n            const geocodingData = await geocodingResponse.json();\n            if (geocodingData.length > 0) {\n                const { lat , lon  } = geocodingData[0];\n                const ONE_CALL_API_URL = \"https://api.openweathermap.org/data/2.5/onecall?lat=\".concat(lat, \"&lon=\").concat(lon, \"&units=metric&appid=\").concat(API_KEY);\n                const response = await fetch(ONE_CALL_API_URL);\n                if (response.ok) {\n                    const data = await response.json();\n                    console.log(data);\n                    setWeatherData(data);\n                } else {\n                    setError(\"Error fetching weather data\");\n                }\n            } else {\n                setError(\"City not found\");\n            }\n        } catch (error) {\n            setError(\"An error occurred\");\n            console.error(\"Error fetching weather data:\", error);\n        }\n    };\n    const getRainStartTime = (hourlyData)=>{\n        const rainyHour = hourlyData.find((hour)=>hour.weather[0].main === \"Rain\");\n        return rainyHour ? new Date(rainyHour.dt * 1000).toLocaleTimeString(\"en-US\", {\n            hour: \"numeric\",\n            minute: \"numeric\"\n        }) : \"unknown\";\n    };\n    const getRainEndTime = (hourlyData)=>{\n        let rainyPeriodStarted = false;\n        let endTime = \"unknown\";\n        for (const hour of hourlyData){\n            if (hour.weather[0].main === \"Rain\") {\n                if (!rainyPeriodStarted) {\n                    rainyPeriodStarted = true;\n                    endTime = new Date(hour.dt * 1000).toLocaleTimeString(\"en-US\", {\n                        hour: \"numeric\",\n                        minute: \"numeric\"\n                    });\n                }\n            } else if (rainyPeriodStarted) {\n                endTime = new Date(hour.dt * 1000).toLocaleTimeString(\"en-US\", {\n                    hour: \"numeric\",\n                    minute: \"numeric\"\n                });\n                break;\n            }\n        }\n        return endTime;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.navVariants,\n                    initial: \"hidden\",\n                    whileInView: \"show\",\n                    className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].xPaddings, \" py-8 relative\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/clouds.jpeg\",\n                            alt: \"hero_cover\",\n                            className: \"w-full sm:h-[300px] h-[200px] object-cover relative\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 w-1/2 flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Search for a city\",\n                                    value: searchInput,\n                                    onChange: (e)=>setSearchInput(e.target.value),\n                                    className: \"px-4 py-2 border w-full bg-white\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSearch,\n                                    className: \"ml-2 px-8 py-4 bg-zinc-800 text-white hover:bg-blue-800\",\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined),\n                error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, undefined) : weatherData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full sm:w-1/2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-4\",\n                                    children: \"Weather in \".concat(weatherData.timezone, \": \").concat(weatherData.current.weather[0].description)\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-4\",\n                                    children: \"Current Temperature: \".concat(weatherData.current.temp, \"\\xb0C\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-4\",\n                                    children: \"Daily Summary: \".concat(weatherData.daily[0].weather[0].main, \" - \").concat(weatherData.daily[0].weather[0].description)\n                                }, void 0, false, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 15\n                                }, undefined),\n                                weatherData.hourly && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Likely rainy period from\",\n                                        \" \",\n                                        getRainStartTime(weatherData.hourly),\n                                        \" to \",\n                                        getRainEndTime(weatherData.hourly)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                    lineNumber: 134,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 129,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full sm:w-1/2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: weatherImages[weatherData.daily[0].weather[0].main],\n                                alt: \"Weather\",\n                                className: \"w- h-[150px] object-cover\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                                lineNumber: 143,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                            lineNumber: 142,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n            lineNumber: 94,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/zares/Resume/weather/sections/About.jsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"Fz4My7bB9VfB1I6A0LCij8kUsV8=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9BYm91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUV1QztBQUNDO0FBRVQ7QUFDZTtBQUU5QyxNQUFNSyxnQkFBZ0I7SUFDcEIsU0FBUztJQUNULGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixRQUFRO0FBQ1Y7QUFHQSxNQUFNQyxRQUFRLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUMsSUFBSTtJQUNuRCxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVcsVUFBVTtJQUNoQixNQUFNQyxVQUFVLG1EQUFnRkQsT0FBN0JOLGFBQVksbUJBQXlCLE9BQVJNO0lBRWhHLE1BQU1FLGVBQWUsVUFBWTtRQUMvQixJQUFJO1lBQ0ZILFNBQVM7WUFDVCxNQUFNSSxvQkFBb0IsTUFBTUMsTUFBTUg7WUFDdEMsTUFBTUksZ0JBQWdCLE1BQU1GLGtCQUFrQkcsSUFBSTtZQUVsRCxJQUFJRCxjQUFjRSxNQUFNLEdBQUcsR0FBRztnQkFDNUIsTUFBTSxFQUFFQyxJQUFHLEVBQUVDLElBQUcsRUFBRSxHQUFHSixhQUFhLENBQUMsRUFBRTtnQkFDckMsTUFBTUssbUJBQW1CLHVEQUFrRUQsT0FBWEQsS0FBSSxTQUFpQ1IsT0FBMUJTLEtBQUksd0JBQThCLE9BQVJUO2dCQUVySCxNQUFNVyxXQUFXLE1BQU1QLE1BQU1NO2dCQUM3QixJQUFJQyxTQUFTQyxFQUFFLEVBQUU7b0JBQ2YsTUFBTUMsT0FBTyxNQUFNRixTQUFTTCxJQUFJO29CQUNoQ1EsUUFBUUMsR0FBRyxDQUFDRjtvQkFDWmhCLGVBQWVnQjtnQkFDakIsT0FBTztvQkFDTGQsU0FBUztnQkFDWCxDQUFDO1lBQ0gsT0FBTztnQkFDTEEsU0FBUztZQUNYLENBQUM7UUFDSCxFQUFFLE9BQU9ELE9BQU87WUFDZEMsU0FBUztZQUNUZSxRQUFRaEIsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDaEQ7SUFDRjtJQUVBLE1BQU1rQixtQkFBbUIsQ0FBQ0MsYUFBZTtRQUN2QyxNQUFNQyxZQUFZRCxXQUFXRSxJQUFJLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUksS0FBSztRQUNuRSxPQUFPSixZQUNILElBQUlLLEtBQUtMLFVBQVVNLEVBQUUsR0FBRyxNQUFNQyxrQkFBa0IsQ0FBQyxTQUFTO1lBQ3hETCxNQUFNO1lBQ05NLFFBQVE7UUFDVixLQUNBLFNBQVM7SUFDZjtJQUVBLE1BQU1DLGlCQUFpQixDQUFDVixhQUFlO1FBQ3JDLElBQUlXLHFCQUFxQixLQUFLO1FBQzlCLElBQUlDLFVBQVU7UUFFZCxLQUFLLE1BQU1ULFFBQVFILFdBQVk7WUFDN0IsSUFBSUcsS0FBS0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxLQUFLLFFBQVE7Z0JBQ25DLElBQUksQ0FBQ00sb0JBQW9CO29CQUN2QkEscUJBQXFCLElBQUk7b0JBQ3pCQyxVQUFVLElBQUlOLEtBQUtILEtBQUtJLEVBQUUsR0FBRyxNQUFNQyxrQkFBa0IsQ0FBQyxTQUFTO3dCQUM3REwsTUFBTTt3QkFDTk0sUUFBUTtvQkFDVjtnQkFDRixDQUFDO1lBQ0gsT0FBTyxJQUFJRSxvQkFBb0I7Z0JBQzdCQyxVQUFVLElBQUlOLEtBQUtILEtBQUtJLEVBQUUsR0FBRyxNQUFNQyxrQkFBa0IsQ0FBQyxTQUFTO29CQUM3REwsTUFBTTtvQkFDTk0sUUFBUTtnQkFDVjtnQkFDQSxLQUFNO1lBQ1IsQ0FBQztRQUNIO1FBRUEsT0FBT0c7SUFDVDtJQUVBLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVO2tCQUNqQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUM1QyxxREFBVTtvQkFDVDhDLFVBQVUxQyxzREFBV0E7b0JBQ3JCMkMsU0FBUTtvQkFDUkMsYUFBWTtvQkFDWkosV0FBVyxHQUFvQixPQUFqQnpDLHlEQUFnQixFQUFDOztzQ0FFL0IsOERBQUMrQzs0QkFDQ0MsS0FBSTs0QkFDSkMsS0FBSTs0QkFDSlIsV0FBVTs7Ozs7O3NDQUVaLDhEQUFDQzs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNTO29DQUNDQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPakQ7b0NBQ1BrRCxVQUFVLENBQUNDLElBQU1sRCxlQUFla0QsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29DQUM5Q1osV0FBVTs7Ozs7OzhDQUVaLDhEQUFDZ0I7b0NBQ0NDLFNBQVM5QztvQ0FDVDZCLFdBQVU7OENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFLSmpDLHNCQUNELDhEQUFDa0M7b0JBQUlELFdBQVU7OEJBRWIsNEVBQUNrQjt3QkFBRWxCLFdBQVU7a0NBQWdCakM7Ozs7Ozs7Ozs7Z0NBRTdCRiw0QkFDRiw4REFBQ29DO29CQUFJRCxXQUFVOztzQ0FDWCw4REFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDa0I7b0NBQUVsQixXQUFVOzhDQUFRLGNBQXVDbkMsT0FBekJBLFlBQVlzRCxRQUFRLEVBQUMsTUFBK0MsT0FBM0N0RCxZQUFZdUQsT0FBTyxDQUFDOUIsT0FBTyxDQUFDLEVBQUUsQ0FBQytCLFdBQVc7Ozs7Ozs4Q0FDdEcsOERBQUNIO29DQUFFbEIsV0FBVTs4Q0FBUSx3QkFBaUQsT0FBekJuQyxZQUFZdUQsT0FBTyxDQUFDRSxJQUFJLEVBQUM7Ozs7Ozs4Q0FDdEUsOERBQUNKO29DQUFFbEIsV0FBVTs4Q0FBUSxrQkFBNERuQyxPQUExQ0EsWUFBWTBELEtBQUssQ0FBQyxFQUFFLENBQUNqQyxPQUFPLENBQUMsRUFBRSxDQUFDQyxJQUFJLEVBQUMsT0FBaUQsT0FBNUMxQixZQUFZMEQsS0FBSyxDQUFDLEVBQUUsQ0FBQ2pDLE9BQU8sQ0FBQyxFQUFFLENBQUMrQixXQUFXOzs7Ozs7Z0NBQzNIeEQsWUFBWTJELE1BQU0sa0JBQ2pCLDhEQUFDTjs7d0NBQUU7d0NBQ3dCO3dDQUN4QmpDLGlCQUFpQnBCLFlBQVkyRCxNQUFNO3dDQUNuQzt3Q0FDQTVCLGVBQWUvQixZQUFZMkQsTUFBTTs7Ozs7Ozs7Ozs7OztzQ0FJeEMsOERBQUN2Qjs0QkFBSUQsV0FBVTtzQ0FDYiw0RUFBQ007Z0NBQ0NDLEtBQUs5QyxhQUFhLENBQUNJLFlBQVkwRCxLQUFLLENBQUMsRUFBRSxDQUFDakMsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDO2dDQUN4RGlCLEtBQUk7Z0NBQ0pSLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBS2hCLElBQUk7Ozs7Ozs7Ozs7OztBQUlkO0dBcklNdEM7S0FBQUE7QUF1SU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvQWJvdXQuanN4PzI2YzQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMnO1xuaW1wb3J0IHsgbmF2VmFyaWFudHMgfSBmcm9tICcuLi91dGlscy9tb3Rpb24nO1xuXG5jb25zdCB3ZWF0aGVySW1hZ2VzID0ge1xuICAnQ2xlYXInOiAnL0NsZWFyLnBuZycsXG4gICdGZXcgY2xvdWRzJzogJy9GZXdfY2xvdWRzLnBuZycsXG4gICdTY2F0dGVyZWQgY2xvdWRzJzogJy9TY2F0dGVyZWRfY2xvdWRzLnBuZycsXG4gICdCcm9rZW4gY2xvdWRzJzogJy9TY2F0dGVyZWRfY2xvdWRzLnBuZycsXG4gICdTaG93ZXIgcmFpbic6ICcvU2hvd2VyX3JhaW4ucG5nJyxcbiAgJ1JhaW4nOiAnL1JhaW4uanBlZycsXG4gICdUaHVuZGVyc3Rvcm0nOiAnL1RodW5kZXJzdG9ybS5wbmcnLFxuICAnU25vdyc6ICcvU25vdy5wbmcnLFxuICAnTWlzdCc6ICcvTWlzdC5wbmcnLFxufTtcblxuXG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt3ZWF0aGVyRGF0YSwgc2V0V2VhdGhlckRhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IEFQSV9LRVkgPSAnNDI0NjYwMzBiOTQzYWEwMzJlZjAyZTQ4NTE5NDdiNmEnO1xuICBjb25zdCBBUElfVVJMID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7c2VhcmNoSW5wdXR9JmxpbWl0PTEmYXBwaWQ9JHtBUElfS0VZfWA7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRFcnJvcignJyk7XG4gICAgICBjb25zdCBnZW9jb2RpbmdSZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9VUkwpO1xuICAgICAgY29uc3QgZ2VvY29kaW5nRGF0YSA9IGF3YWl0IGdlb2NvZGluZ1Jlc3BvbnNlLmpzb24oKTtcbiAgXG4gICAgICBpZiAoZ2VvY29kaW5nRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHsgbGF0LCBsb24gfSA9IGdlb2NvZGluZ0RhdGFbMF07XG4gICAgICAgIGNvbnN0IE9ORV9DQUxMX0FQSV9VUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JnVuaXRzPW1ldHJpYyZhcHBpZD0ke0FQSV9LRVl9YDtcbiAgXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goT05FX0NBTExfQVBJX1VSTCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICBzZXRXZWF0aGVyRGF0YShkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFcnJvcignRXJyb3IgZmV0Y2hpbmcgd2VhdGhlciBkYXRhJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEVycm9yKCdDaXR5IG5vdCBmb3VuZCcpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFcnJvcignQW4gZXJyb3Igb2NjdXJyZWQnKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHdlYXRoZXIgZGF0YTonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFJhaW5TdGFydFRpbWUgPSAoaG91cmx5RGF0YSkgPT4ge1xuICAgIGNvbnN0IHJhaW55SG91ciA9IGhvdXJseURhdGEuZmluZChob3VyID0+IGhvdXIud2VhdGhlclswXS5tYWluID09PSBcIlJhaW5cIik7XG4gICAgcmV0dXJuIHJhaW55SG91clxuICAgICAgPyBuZXcgRGF0ZShyYWlueUhvdXIuZHQgKiAxMDAwKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgICAgbWludXRlOiBcIm51bWVyaWNcIlxuICAgICAgICB9KVxuICAgICAgOiBcInVua25vd25cIjtcbiAgfTtcbiAgXG4gIGNvbnN0IGdldFJhaW5FbmRUaW1lID0gKGhvdXJseURhdGEpID0+IHtcbiAgICBsZXQgcmFpbnlQZXJpb2RTdGFydGVkID0gZmFsc2U7XG4gICAgbGV0IGVuZFRpbWUgPSBcInVua25vd25cIjtcbiAgXG4gICAgZm9yIChjb25zdCBob3VyIG9mIGhvdXJseURhdGEpIHtcbiAgICAgIGlmIChob3VyLndlYXRoZXJbMF0ubWFpbiA9PT0gXCJSYWluXCIpIHtcbiAgICAgICAgaWYgKCFyYWlueVBlcmlvZFN0YXJ0ZWQpIHtcbiAgICAgICAgICByYWlueVBlcmlvZFN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgIGVuZFRpbWUgPSBuZXcgRGF0ZShob3VyLmR0ICogMTAwMCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgICAgICBtaW51dGU6IFwibnVtZXJpY1wiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmFpbnlQZXJpb2RTdGFydGVkKSB7XG4gICAgICAgIGVuZFRpbWUgPSBuZXcgRGF0ZShob3VyLmR0ICogMTAwMCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICAgIG1pbnV0ZTogXCJudW1lcmljXCJcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgcmV0dXJuIGVuZFRpbWU7XG4gIH07ICBcbiAgXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LTZ4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgdmFyaWFudHM9e25hdlZhcmlhbnRzfVxuICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgIHdoaWxlSW5WaWV3PVwic2hvd1wiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMueFBhZGRpbmdzfSBweS04IHJlbGF0aXZlYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9jbG91ZHMuanBlZ1wiXG4gICAgICAgICAgICBhbHQ9XCJoZXJvX2NvdmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBzbTpoLVszMDBweF0gaC1bMjAwcHhdIG9iamVjdC1jb3ZlciByZWxhdGl2ZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzQgbGVmdC0xLzQgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzQgLXRyYW5zbGF0ZS15LTEvNCB3LTEvMiBmbGV4XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBjaXR5XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlciB3LWZ1bGwgYmctd2hpdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNofVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIHB4LTggcHktNCBiZy16aW5jLTgwMCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWJsdWUtODAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICB7ZXJyb3IgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgIHsvKiBEaXNwbGF5IGVycm9yIG1lc3NhZ2UgKi99XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+e2Vycm9yfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogd2VhdGhlckRhdGEgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBwLTQgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWQgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy0xLzJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPntgV2VhdGhlciBpbiAke3dlYXRoZXJEYXRhLnRpbWV6b25lfTogJHt3ZWF0aGVyRGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb259YH08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTRcIj57YEN1cnJlbnQgVGVtcGVyYXR1cmU6ICR7d2VhdGhlckRhdGEuY3VycmVudC50ZW1wfcKwQ2B9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00XCI+e2BEYWlseSBTdW1tYXJ5OiAke3dlYXRoZXJEYXRhLmRhaWx5WzBdLndlYXRoZXJbMF0ubWFpbn0gLSAke3dlYXRoZXJEYXRhLmRhaWx5WzBdLndlYXRoZXJbMF0uZGVzY3JpcHRpb259YH08L3A+XG4gICAgICAgICAgICAgIHt3ZWF0aGVyRGF0YS5ob3VybHkgJiYgKFxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgTGlrZWx5IHJhaW55IHBlcmlvZCBmcm9te1wiIFwifVxuICAgICAgICAgICAgICAgICAge2dldFJhaW5TdGFydFRpbWUod2VhdGhlckRhdGEuaG91cmx5KX1cbiAgICAgICAgICAgICAgICAgIHtcIiB0byBcIn1cbiAgICAgICAgICAgICAgICAgIHtnZXRSYWluRW5kVGltZSh3ZWF0aGVyRGF0YS5ob3VybHkpfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy0xLzJcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17d2VhdGhlckltYWdlc1t3ZWF0aGVyRGF0YS5kYWlseVswXS53ZWF0aGVyWzBdLm1haW5dfVxuICAgICAgICAgICAgICAgIGFsdD1cIldlYXRoZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctIGgtWzE1MHB4XSBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJuYXZWYXJpYW50cyIsIndlYXRoZXJJbWFnZXMiLCJBYm91dCIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJ3ZWF0aGVyRGF0YSIsInNldFdlYXRoZXJEYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsIkFQSV9LRVkiLCJBUElfVVJMIiwiaGFuZGxlU2VhcmNoIiwiZ2VvY29kaW5nUmVzcG9uc2UiLCJmZXRjaCIsImdlb2NvZGluZ0RhdGEiLCJqc29uIiwibGVuZ3RoIiwibGF0IiwibG9uIiwiT05FX0NBTExfQVBJX1VSTCIsInJlc3BvbnNlIiwib2siLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImdldFJhaW5TdGFydFRpbWUiLCJob3VybHlEYXRhIiwicmFpbnlIb3VyIiwiZmluZCIsImhvdXIiLCJ3ZWF0aGVyIiwibWFpbiIsIkRhdGUiLCJkdCIsInRvTG9jYWxlVGltZVN0cmluZyIsIm1pbnV0ZSIsImdldFJhaW5FbmRUaW1lIiwicmFpbnlQZXJpb2RTdGFydGVkIiwiZW5kVGltZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInhQYWRkaW5ncyIsImltZyIsInNyYyIsImFsdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsInRpbWV6b25lIiwiY3VycmVudCIsImRlc2NyaXB0aW9uIiwidGVtcCIsImRhaWx5IiwiaG91cmx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/About.jsx\n"));

/***/ })

});