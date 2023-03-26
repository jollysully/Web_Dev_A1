"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getChats";
exports.ids = ["pages/api/getChats"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/getChats.js":
/*!*******************************!*\
  !*** ./pages/api/getChats.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getchats)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getchats(req, res) {\n    // Replace the uri string with your MongoDB deployment's connection string.\n    const uri = \"mongodb://root:example@0.0.0.0:6666\";\n    // create mongo connection client\n    const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\n    async function run() {\n        try {\n            const database = client.db(\"courses\");\n            const movies = database.collection(\"chats\");\n            const query = {};\n            const options = {};\n            const cursor = movies.find(query, options);\n            let buffer = \"\";\n            cursor.forEach((element)=>{\n                console.log(element);\n                buffer = buffer + element;\n                res.status(200).json(element);\n            });\n        } finally{\n        //await client.close();\n        }\n    }\n    run().catch(console.dir);\n} //mongodb://root:example@localhost:6666/\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q2hhdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXZCLFNBQVNDLFFBQVEsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDekMsMkVBQTJFO0lBQzNFLE1BQU1DLEdBQUcsR0FBRyxxQ0FBcUM7SUFFakQsaUNBQWlDO0lBQ2pDLE1BQU1DLE1BQU0sR0FBRyxJQUFJTCxnREFBVyxDQUFDSSxHQUFHLENBQUM7SUFFbkMsZUFBZUUsR0FBRyxHQUFHO1FBQ25CLElBQUk7WUFDRixNQUFNQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0csRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNyQyxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUUzQyxNQUFNQyxLQUFLLEdBQUcsRUFBRztZQUNqQixNQUFNQyxPQUFPLEdBQUcsRUFFZjtZQUVELE1BQU1DLE1BQU0sR0FBR0osTUFBTSxDQUFDSyxJQUFJLENBQUNILEtBQUssRUFBRUMsT0FBTyxDQUFDO1lBRTFDLElBQUlHLE1BQU0sR0FBRyxFQUFFO1lBRWZGLE1BQU0sQ0FBQ0csT0FBTyxDQUFDQyxDQUFBQSxPQUFPLEdBQUk7Z0JBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCRixNQUFNLEdBQUdBLE1BQU0sR0FBR0UsT0FBTyxDQUFDO2dCQUUxQmQsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNKLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBTUgsU0FBVTtRQUNSLHVCQUF1QjtRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUVEWCxHQUFHLEVBQUUsQ0FBQ2dCLEtBQUssQ0FBQ0osT0FBTyxDQUFDSyxHQUFHLENBQUMsQ0FBQztBQUMzQixDQUFDLENBSUQsd0NBQXdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL2dldENoYXRzLmpzP2IxZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Y2hhdHMocmVxLCByZXMpIHtcclxuICAvLyBSZXBsYWNlIHRoZSB1cmkgc3RyaW5nIHdpdGggeW91ciBNb25nb0RCIGRlcGxveW1lbnQncyBjb25uZWN0aW9uIHN0cmluZy5cclxuICBjb25zdCB1cmkgPSBcIm1vbmdvZGI6Ly9yb290OmV4YW1wbGVAMC4wLjAuMDo2NjY2XCI7XHJcblxyXG4gIC8vIGNyZWF0ZSBtb25nbyBjb25uZWN0aW9uIGNsaWVudFxyXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmkpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhYmFzZSA9IGNsaWVudC5kYihcImNvdXJzZXNcIik7XHJcbiAgICAgIGNvbnN0IG1vdmllcyA9IGRhdGFiYXNlLmNvbGxlY3Rpb24oXCJjaGF0c1wiKTtcclxuXHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0geyB9O1xyXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xyXG5cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGN1cnNvciA9IG1vdmllcy5maW5kKHF1ZXJ5LCBvcHRpb25zKTtcclxuXHJcbiAgICAgIGxldCBidWZmZXIgPSAnJztcclxuXHJcbiAgICAgIGN1cnNvci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgICAgIGJ1ZmZlciA9IGJ1ZmZlciArIGVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIFxyXG4gICAgICBcclxuXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAvL2F3YWl0IGNsaWVudC5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcnVuKCkuY2F0Y2goY29uc29sZS5kaXIpO1xyXG59XHJcbiAgICBcclxuXHJcblxyXG4vL21vbmdvZGI6Ly9yb290OmV4YW1wbGVAbG9jYWxob3N0OjY2NjYvIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiZ2V0Y2hhdHMiLCJyZXEiLCJyZXMiLCJ1cmkiLCJjbGllbnQiLCJydW4iLCJkYXRhYmFzZSIsImRiIiwibW92aWVzIiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwib3B0aW9ucyIsImN1cnNvciIsImZpbmQiLCJidWZmZXIiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwiY2F0Y2giLCJkaXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getChats.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getChats.js"));
module.exports = __webpack_exports__;

})();