/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostPage; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_wordpress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/wordpress */ \"./utils/wordpress.js\");\n\nvar _jsxFileName = \"/Users/wrivera/Desktop/academind-next.js-tech-blog/pages/posts/[slug].js\";\n\n\nfunction PostPage({\n  post\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container pt-5\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"text-center pb-5\",\n      children: post.title.rendered\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"card-text pb-5\",\n      dangerouslySetInnerHTML: {\n        __html: post.content.rendered\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: \"btn btn-primary\",\n        children: \"Back to Home\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, this);\n} //hey Next, these are the possible slugs\n\nasync function getStaticPaths() {\n  const paths = await (0,_utils_wordpress__WEBPACK_IMPORTED_MODULE_2__.getSlugs)(\"posts\");\n  return {\n    paths,\n    //this option below renders in the server (at request time) pages that were not rendered at build time\n    //e.g when a new blogpost is added to the app\n    fallback: 'blocking'\n  };\n} //access the router, get the id, and get the data for that post\n\nasync function getStaticProps({\n  params\n}) {\n  const post = await (0,_utils_wordpress__WEBPACK_IMPORTED_MODULE_2__.getPost)(params.slug);\n  return {\n    props: {\n      post\n    },\n    revalidate: 10 // In seconds\n\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWNoLWJsb2cvLi9wYWdlcy9wb3N0cy9bc2x1Z10uanM/ZGVjOSJdLCJuYW1lcyI6WyJQb3N0UGFnZSIsInBvc3QiLCJ0aXRsZSIsInJlbmRlcmVkIiwiX19odG1sIiwiY29udGVudCIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJnZXRTbHVncyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJnZXRQb3N0Iiwic2x1ZyIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFZSxTQUFTQSxRQUFULENBQWtCO0FBQUNDO0FBQUQsQ0FBbEIsRUFBeUI7QUFDcEMsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBQyxrQkFBZDtBQUFBLGdCQUFrQ0EsSUFBSSxDQUFDQyxLQUFMLENBQVdDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQWdDLDZCQUF1QixFQUFFO0FBQUNDLGNBQU0sRUFBRUgsSUFBSSxDQUFDSSxPQUFMLENBQWFGO0FBQXRCO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDSTtBQUFHLGlCQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSCxDLENBRUQ7O0FBQ08sZUFBZUcsY0FBZixHQUFnQztBQUVuQyxRQUFNQyxLQUFLLEdBQUcsTUFBTUMsMERBQVEsQ0FBQyxPQUFELENBQTVCO0FBRUEsU0FBTztBQUNIRCxTQURHO0FBRUg7QUFDQTtBQUNBRSxZQUFRLEVBQUU7QUFKUCxHQUFQO0FBT0QsQyxDQUVIOztBQUVPLGVBQWVDLGNBQWYsQ0FBOEI7QUFBRUM7QUFBRixDQUE5QixFQUEwQztBQUVqRCxRQUFNVixJQUFJLEdBQUcsTUFBTVcseURBQU8sQ0FBQ0QsTUFBTSxDQUFDRSxJQUFSLENBQTFCO0FBRUEsU0FBTztBQUNIQyxTQUFLLEVBQUU7QUFDUGI7QUFETyxLQURKO0FBSUhjLGNBQVUsRUFBRSxFQUpULENBSWE7O0FBSmIsR0FBUDtBQU9DIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdHMvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQge2dldFBvc3QsIGdldFNsdWdzfSBmcm9tIFwiLi4vLi4vdXRpbHMvd29yZHByZXNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RQYWdlKHtwb3N0fSl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHQtNVwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHBiLTVcIj57cG9zdC50aXRsZS5yZW5kZXJlZH08L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRleHQgcGItNVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwb3N0LmNvbnRlbnQucmVuZGVyZWR9fT48L2Rpdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+QmFjayB0byBIb21lPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbi8vaGV5IE5leHQsIHRoZXNlIGFyZSB0aGUgcG9zc2libGUgc2x1Z3NcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcblxuICAgIGNvbnN0IHBhdGhzID0gYXdhaXQgZ2V0U2x1Z3MoXCJwb3N0c1wiKTtcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIC8vdGhpcyBvcHRpb24gYmVsb3cgcmVuZGVycyBpbiB0aGUgc2VydmVyIChhdCByZXF1ZXN0IHRpbWUpIHBhZ2VzIHRoYXQgd2VyZSBub3QgcmVuZGVyZWQgYXQgYnVpbGQgdGltZVxuICAgICAgICAvL2UuZyB3aGVuIGEgbmV3IGJsb2dwb3N0IGlzIGFkZGVkIHRvIHRoZSBhcHBcbiAgICAgICAgZmFsbGJhY2s6ICdibG9ja2luZydcbiAgICB9XG4gIFxuICB9XG4gIFxuLy9hY2Nlc3MgdGhlIHJvdXRlciwgZ2V0IHRoZSBpZCwgYW5kIGdldCB0aGUgZGF0YSBmb3IgdGhhdCBwb3N0XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG5cbmNvbnN0IHBvc3QgPSBhd2FpdCBnZXRQb3N0KHBhcmFtcy5zbHVnKTtcblxucmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgIHBvc3RcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEwLCAvLyBJbiBzZWNvbmRzXG59XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_wordpress_js"], function() { return __webpack_exec__("./pages/posts/[slug].js"); });
module.exports = __webpack_exports__;

})();