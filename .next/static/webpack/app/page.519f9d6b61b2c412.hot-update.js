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

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exploreWorlds\": function() { return /* binding */ exploreWorlds; },\n/* harmony export */   \"insights\": function() { return /* binding */ insights; },\n/* harmony export */   \"newFeatures\": function() { return /* binding */ newFeatures; },\n/* harmony export */   \"socials\": function() { return /* binding */ socials; },\n/* harmony export */   \"startingFeatures\": function() { return /* binding */ startingFeatures; }\n/* harmony export */ });\nconst exploreWorlds = [\n    {\n        id: \"world-1\",\n        imgUrl: \"/planet-01.png\",\n        title: \"The Hogwarts\"\n    },\n    {\n        id: \"world-2\",\n        imgUrl: \"/planet-02.png\",\n        title: \"The Upside Down\"\n    },\n    {\n        id: \"world-3\",\n        imgUrl: \"/planet-03.png\",\n        title: \"Kadirojo Permai\"\n    },\n    {\n        id: \"world-4\",\n        imgUrl: \"/planet-04.png\",\n        title: \"Paradise Island\"\n    },\n    {\n        id: \"world-5\",\n        imgUrl: \"/planet-05.png\",\n        title: \"Hawkins Labs\"\n    }\n];\nconst startingFeatures = [\n    \"Find a world that suits you and you want to enter\",\n    \"Enter the world by reading basmalah to be safe\",\n    \"No need to beat around the bush, just stay on the gas and have fun\"\n];\nconst newFeatures = [\n    {\n        imgUrl: \"/vrpano.svg\",\n        title: \"Real-Time\",\n        subtitle: \"Track current weather conditions in real-time\"\n    },\n    {\n        imgUrl: \"/headset.svg\",\n        title: \"Educational\",\n        subtitle: \"Learn about the science behind weather patterns, climate trends, and more with our informative articles and guides. Weather does not have to be a mystery!\"\n    }\n];\nconst insights = [\n    {\n        imgUrl: \"/cloudformation.jpeg\",\n        title: \"Unraveling Weather Phenomena: Exploring Nature's Atmospheric Marvels\",\n        subtitle: \"A Dive into the Fascinating World of Weather Patterns, Cloud Formations, and Atmospheric Events\"\n    },\n    {\n        imgUrl: \"/climateChange.jpeg\",\n        title: \"Climate Chronicles: Navigating the Past, Understanding the Present, Shaping the Future\",\n        subtitle: \"Discovering the Intricacies of Climate Change, Historical Weather Data, and Sustainable Solutions\"\n    },\n    {\n        imgUrl: \"/seasonsChange.webp\",\n        title: \"Weather Wonders: The Science Behind the Seasons, Storms, and Sunsets\",\n        subtitle: \"Delving into the Mechanics of Seasonal Changes, Thunderstorm Development, and the Artistry of Atmospheric Optical Phenomena\"\n    }\n];\nconst socials = [\n    {\n        name: \"twitter\",\n        url: \"/twitter.svg\"\n    },\n    {\n        name: \"linkedin\",\n        url: \"/linkedin.svg\"\n    },\n    {\n        name: \"instagram\",\n        url: \"/instagram.svg\"\n    },\n    {\n        name: \"facebook\",\n        url: \"/facebook.svg\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxNQUFNQSxnQkFBZ0I7SUFDM0I7UUFDRUMsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7Q0FDRCxDQUFDO0FBRUssTUFBTUMsbUJBQW1CO0lBQzlCO0lBQ0E7SUFDQTtDQUNELENBQUM7QUFFSyxNQUFNQyxjQUFjO0lBQ3pCO1FBQ0VILFFBQVE7UUFDUkMsT0FBTztRQUNQRyxVQUNJO0lBQ047SUFDQTtRQUNFSixRQUFRO1FBQ1JDLE9BQU87UUFDUEcsVUFDSTtJQUNOO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLFdBQVc7SUFDdEI7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7SUFDTjtJQUNBO1FBQ0VKLFFBQVE7UUFDUkMsT0FBTztRQUNQRyxVQUNJO0lBQ047SUFDQTtRQUNFSixRQUFRO1FBQ1JDLE9BQU87UUFDUEcsVUFDSTtJQUNOO0NBQ0QsQ0FBQztBQUVLLE1BQU1FLFVBQVU7SUFDckI7UUFDRUMsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLEtBQUs7SUFDUDtJQUNBO1FBQ0VELE1BQU07UUFDTkMsS0FBSztJQUNQO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7Q0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnN0YW50cy9pbmRleC5qcz8zNzM3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBleHBsb3JlV29ybGRzID0gW1xuICB7XG4gICAgaWQ6ICd3b3JsZC0xJyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTAxLnBuZycsXG4gICAgdGl0bGU6ICdUaGUgSG9nd2FydHMnLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC0yJyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTAyLnBuZycsXG4gICAgdGl0bGU6ICdUaGUgVXBzaWRlIERvd24nLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC0zJyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTAzLnBuZycsXG4gICAgdGl0bGU6ICdLYWRpcm9qbyBQZXJtYWknLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC00JyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTA0LnBuZycsXG4gICAgdGl0bGU6ICdQYXJhZGlzZSBJc2xhbmQnLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC01JyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTA1LnBuZycsXG4gICAgdGl0bGU6ICdIYXdraW5zIExhYnMnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHN0YXJ0aW5nRmVhdHVyZXMgPSBbXG4gICdGaW5kIGEgd29ybGQgdGhhdCBzdWl0cyB5b3UgYW5kIHlvdSB3YW50IHRvIGVudGVyJyxcbiAgJ0VudGVyIHRoZSB3b3JsZCBieSByZWFkaW5nIGJhc21hbGFoIHRvIGJlIHNhZmUnLFxuICAnTm8gbmVlZCB0byBiZWF0IGFyb3VuZCB0aGUgYnVzaCwganVzdCBzdGF5IG9uIHRoZSBnYXMgYW5kIGhhdmUgZnVuJyxcbl07XG5cbmV4cG9ydCBjb25zdCBuZXdGZWF0dXJlcyA9IFtcbiAge1xuICAgIGltZ1VybDogJy92cnBhbm8uc3ZnJyxcbiAgICB0aXRsZTogJ1JlYWwtVGltZScsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICdUcmFjayBjdXJyZW50IHdlYXRoZXIgY29uZGl0aW9ucyBpbiByZWFsLXRpbWUnLFxuICB9LFxuICB7XG4gICAgaW1nVXJsOiAnL2hlYWRzZXQuc3ZnJyxcbiAgICB0aXRsZTogJ0VkdWNhdGlvbmFsJyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ0xlYXJuIGFib3V0IHRoZSBzY2llbmNlIGJlaGluZCB3ZWF0aGVyIHBhdHRlcm5zLCBjbGltYXRlIHRyZW5kcywgYW5kIG1vcmUgd2l0aCBvdXIgaW5mb3JtYXRpdmUgYXJ0aWNsZXMgYW5kIGd1aWRlcy4gV2VhdGhlciBkb2VzIG5vdCBoYXZlIHRvIGJlIGEgbXlzdGVyeSEnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGluc2lnaHRzID0gW1xuICB7XG4gICAgaW1nVXJsOiAnL2Nsb3VkZm9ybWF0aW9uLmpwZWcnLFxuICAgIHRpdGxlOiBcIlVucmF2ZWxpbmcgV2VhdGhlciBQaGVub21lbmE6IEV4cGxvcmluZyBOYXR1cmUncyBBdG1vc3BoZXJpYyBNYXJ2ZWxzXCIsXG4gICAgc3VidGl0bGU6XG4gICAgICAgIFwiQSBEaXZlIGludG8gdGhlIEZhc2NpbmF0aW5nIFdvcmxkIG9mIFdlYXRoZXIgUGF0dGVybnMsIENsb3VkIEZvcm1hdGlvbnMsIGFuZCBBdG1vc3BoZXJpYyBFdmVudHNcIixcbiAgfSxcbiAge1xuICAgIGltZ1VybDogJy9jbGltYXRlQ2hhbmdlLmpwZWcnLFxuICAgIHRpdGxlOiAnQ2xpbWF0ZSBDaHJvbmljbGVzOiBOYXZpZ2F0aW5nIHRoZSBQYXN0LCBVbmRlcnN0YW5kaW5nIHRoZSBQcmVzZW50LCBTaGFwaW5nIHRoZSBGdXR1cmUnLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICBcIkRpc2NvdmVyaW5nIHRoZSBJbnRyaWNhY2llcyBvZiBDbGltYXRlIENoYW5nZSwgSGlzdG9yaWNhbCBXZWF0aGVyIERhdGEsIGFuZCBTdXN0YWluYWJsZSBTb2x1dGlvbnNcIixcbiAgfSxcbiAge1xuICAgIGltZ1VybDogJy9zZWFzb25zQ2hhbmdlLndlYnAnLFxuICAgIHRpdGxlOiAnV2VhdGhlciBXb25kZXJzOiBUaGUgU2NpZW5jZSBCZWhpbmQgdGhlIFNlYXNvbnMsIFN0b3JtcywgYW5kIFN1bnNldHMnLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICBcIkRlbHZpbmcgaW50byB0aGUgTWVjaGFuaWNzIG9mIFNlYXNvbmFsIENoYW5nZXMsIFRodW5kZXJzdG9ybSBEZXZlbG9wbWVudCwgYW5kIHRoZSBBcnRpc3RyeSBvZiBBdG1vc3BoZXJpYyBPcHRpY2FsIFBoZW5vbWVuYVwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNvY2lhbHMgPSBbXG4gIHtcbiAgICBuYW1lOiAndHdpdHRlcicsXG4gICAgdXJsOiAnL3R3aXR0ZXIuc3ZnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdsaW5rZWRpbicsXG4gICAgdXJsOiAnL2xpbmtlZGluLnN2ZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnaW5zdGFncmFtJyxcbiAgICB1cmw6ICcvaW5zdGFncmFtLnN2ZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZmFjZWJvb2snLFxuICAgIHVybDogJy9mYWNlYm9vay5zdmcnLFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJleHBsb3JlV29ybGRzIiwiaWQiLCJpbWdVcmwiLCJ0aXRsZSIsInN0YXJ0aW5nRmVhdHVyZXMiLCJuZXdGZWF0dXJlcyIsInN1YnRpdGxlIiwiaW5zaWdodHMiLCJzb2NpYWxzIiwibmFtZSIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants/index.js\n"));

/***/ })

});