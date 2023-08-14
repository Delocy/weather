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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exploreWorlds\": function() { return /* binding */ exploreWorlds; },\n/* harmony export */   \"insights\": function() { return /* binding */ insights; },\n/* harmony export */   \"newFeatures\": function() { return /* binding */ newFeatures; },\n/* harmony export */   \"socials\": function() { return /* binding */ socials; },\n/* harmony export */   \"startingFeatures\": function() { return /* binding */ startingFeatures; }\n/* harmony export */ });\nconst exploreWorlds = [\n    {\n        id: \"world-1\",\n        imgUrl: \"/planet-01.png\",\n        title: \"The Hogwarts\"\n    },\n    {\n        id: \"world-2\",\n        imgUrl: \"/planet-02.png\",\n        title: \"The Upside Down\"\n    },\n    {\n        id: \"world-3\",\n        imgUrl: \"/planet-03.png\",\n        title: \"Kadirojo Permai\"\n    },\n    {\n        id: \"world-4\",\n        imgUrl: \"/planet-04.png\",\n        title: \"Paradise Island\"\n    },\n    {\n        id: \"world-5\",\n        imgUrl: \"/planet-05.png\",\n        title: \"Hawkins Labs\"\n    }\n];\nconst startingFeatures = [\n    \"Find a world that suits you and you want to enter\",\n    \"Enter the world by reading basmalah to be safe\",\n    \"No need to beat around the bush, just stay on the gas and have fun\"\n];\nconst newFeatures = [\n    {\n        imgUrl: \"/vrpano.svg\",\n        title: \"Real-Time\",\n        subtitle: \"Track current weather conditions in real-time\"\n    },\n    {\n        imgUrl: \"/headset.svg\",\n        title: \"Educational\",\n        subtitle: \"Learn about the science behind weather patterns, climate trends, and more with our informative articles and guides. Weather does not have to be a mystery!\"\n    }\n];\nconst insights = [\n    {\n        imgUrl: \"/planet-06.png\",\n        title: \"Unraveling Weather Phenomena: Exploring Nature's Atmospheric Marvels\",\n        subtitle: \"Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.\"\n    },\n    {\n        imgUrl: \"/planet-07.png\",\n        title: \"Climate Chronicles: Navigating the Past, Understanding the Present, Shaping the Future\",\n        subtitle: \"Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum\"\n    },\n    {\n        imgUrl: \"/planet-08.png\",\n        title: \"Weather Wonders: The Science Behind the Seasons, Storms, and Sunsets\",\n        subtitle: \"Delving into the Mechanics of Seasonal Changes, Thunderstorm Development, and the Artistry of Atmospheric Optical Phenomena\"\n    }\n];\nconst socials = [\n    {\n        name: \"twitter\",\n        url: \"/twitter.svg\"\n    },\n    {\n        name: \"linkedin\",\n        url: \"/linkedin.svg\"\n    },\n    {\n        name: \"instagram\",\n        url: \"/instagram.svg\"\n    },\n    {\n        name: \"facebook\",\n        url: \"/facebook.svg\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxNQUFNQSxnQkFBZ0I7SUFDM0I7UUFDRUMsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7Q0FDRCxDQUFDO0FBRUssTUFBTUMsbUJBQW1CO0lBQzlCO0lBQ0E7SUFDQTtDQUNELENBQUM7QUFFSyxNQUFNQyxjQUFjO0lBQ3pCO1FBQ0VILFFBQVE7UUFDUkMsT0FBTztRQUNQRyxVQUNJO0lBQ047SUFDQTtRQUNFSixRQUFRO1FBQ1JDLE9BQU87UUFDUEcsVUFDSTtJQUNOO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLFdBQVc7SUFDdEI7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7SUFDTjtJQUNBO1FBQ0VKLFFBQVE7UUFDUkMsT0FBTztRQUNQRyxVQUNJO0lBQ047SUFDQTtRQUNFSixRQUFRO1FBQ1JDLE9BQU87UUFDUEcsVUFDQTtJQUNGO0NBQ0QsQ0FBQztBQUVLLE1BQU1FLFVBQVU7SUFDckI7UUFDRUMsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLEtBQUs7SUFDUDtJQUNBO1FBQ0VELE1BQU07UUFDTkMsS0FBSztJQUNQO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7Q0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnN0YW50cy9pbmRleC5qcz8zNzM3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBleHBsb3JlV29ybGRzID0gW1xuICB7XG4gICAgaWQ6ICd3b3JsZC0xJyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTAxLnBuZycsXG4gICAgdGl0bGU6ICdUaGUgSG9nd2FydHMnLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC0yJyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTAyLnBuZycsXG4gICAgdGl0bGU6ICdUaGUgVXBzaWRlIERvd24nLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC0zJyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTAzLnBuZycsXG4gICAgdGl0bGU6ICdLYWRpcm9qbyBQZXJtYWknLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC00JyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTA0LnBuZycsXG4gICAgdGl0bGU6ICdQYXJhZGlzZSBJc2xhbmQnLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC01JyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTA1LnBuZycsXG4gICAgdGl0bGU6ICdIYXdraW5zIExhYnMnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHN0YXJ0aW5nRmVhdHVyZXMgPSBbXG4gICdGaW5kIGEgd29ybGQgdGhhdCBzdWl0cyB5b3UgYW5kIHlvdSB3YW50IHRvIGVudGVyJyxcbiAgJ0VudGVyIHRoZSB3b3JsZCBieSByZWFkaW5nIGJhc21hbGFoIHRvIGJlIHNhZmUnLFxuICAnTm8gbmVlZCB0byBiZWF0IGFyb3VuZCB0aGUgYnVzaCwganVzdCBzdGF5IG9uIHRoZSBnYXMgYW5kIGhhdmUgZnVuJyxcbl07XG5cbmV4cG9ydCBjb25zdCBuZXdGZWF0dXJlcyA9IFtcbiAge1xuICAgIGltZ1VybDogJy92cnBhbm8uc3ZnJyxcbiAgICB0aXRsZTogJ1JlYWwtVGltZScsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICdUcmFjayBjdXJyZW50IHdlYXRoZXIgY29uZGl0aW9ucyBpbiByZWFsLXRpbWUnLFxuICB9LFxuICB7XG4gICAgaW1nVXJsOiAnL2hlYWRzZXQuc3ZnJyxcbiAgICB0aXRsZTogJ0VkdWNhdGlvbmFsJyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ0xlYXJuIGFib3V0IHRoZSBzY2llbmNlIGJlaGluZCB3ZWF0aGVyIHBhdHRlcm5zLCBjbGltYXRlIHRyZW5kcywgYW5kIG1vcmUgd2l0aCBvdXIgaW5mb3JtYXRpdmUgYXJ0aWNsZXMgYW5kIGd1aWRlcy4gV2VhdGhlciBkb2VzIG5vdCBoYXZlIHRvIGJlIGEgbXlzdGVyeSEnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGluc2lnaHRzID0gW1xuICB7XG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wNi5wbmcnLFxuICAgIHRpdGxlOiBcIlVucmF2ZWxpbmcgV2VhdGhlciBQaGVub21lbmE6IEV4cGxvcmluZyBOYXR1cmUncyBBdG1vc3BoZXJpYyBNYXJ2ZWxzXCIsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICdNYWduYSBldGlhbSB0ZW1wb3Igb3JjaSBldSBsb2JvcnRpcyBlbGVtZW50dW0gbmliaCB0ZWxsdXMgbW9sZXN0aWUuIERpYW0gbWFlY2VuYXMgc2VkIGVuaW0gdXQgc2VtIHZpdmVycmEgYWxpcXVlLicsXG4gIH0sXG4gIHtcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTA3LnBuZycsXG4gICAgdGl0bGU6ICdDbGltYXRlIENocm9uaWNsZXM6IE5hdmlnYXRpbmcgdGhlIFBhc3QsIFVuZGVyc3RhbmRpbmcgdGhlIFByZXNlbnQsIFNoYXBpbmcgdGhlIEZ1dHVyZScsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICdWaXRhZSBjb25ndWUgZXUgY29uc2VxdWF0IGFjIGZlbGlzIGRvbmVjLiBFdCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIENvbnZhbGxpcyB0ZWxsdXMgaWQgaW50ZXJkdW0nLFxuICB9LFxuICB7XG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wOC5wbmcnLFxuICAgIHRpdGxlOiAnV2VhdGhlciBXb25kZXJzOiBUaGUgU2NpZW5jZSBCZWhpbmQgdGhlIFNlYXNvbnMsIFN0b3JtcywgYW5kIFN1bnNldHMnLFxuICAgIHN1YnRpdGxlOlxuICAgIFwiRGVsdmluZyBpbnRvIHRoZSBNZWNoYW5pY3Mgb2YgU2Vhc29uYWwgQ2hhbmdlcywgVGh1bmRlcnN0b3JtIERldmVsb3BtZW50LCBhbmQgdGhlIEFydGlzdHJ5IG9mIEF0bW9zcGhlcmljIE9wdGljYWwgUGhlbm9tZW5hXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc29jaWFscyA9IFtcbiAge1xuICAgIG5hbWU6ICd0d2l0dGVyJyxcbiAgICB1cmw6ICcvdHdpdHRlci5zdmcnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2xpbmtlZGluJyxcbiAgICB1cmw6ICcvbGlua2VkaW4uc3ZnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxuICAgIHVybDogJy9pbnN0YWdyYW0uc3ZnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdmYWNlYm9vaycsXG4gICAgdXJsOiAnL2ZhY2Vib29rLnN2ZycsXG4gIH0sXG5dO1xuIl0sIm5hbWVzIjpbImV4cGxvcmVXb3JsZHMiLCJpZCIsImltZ1VybCIsInRpdGxlIiwic3RhcnRpbmdGZWF0dXJlcyIsIm5ld0ZlYXR1cmVzIiwic3VidGl0bGUiLCJpbnNpZ2h0cyIsInNvY2lhbHMiLCJuYW1lIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/index.js\n"));

/***/ })

});