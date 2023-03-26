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
exports.id = "pages/api/saveChat";
exports.ids = ["pages/api/saveChat"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/saveChat.js":
/*!*******************************!*\
  !*** ./pages/api/saveChat.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ saveChat)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction saveChat(req, res) {\n    // catching the variables\n    const username = req.body.username;\n    const comment = req.body.comment;\n    const uri = \"mongodb://root:example@0.0.0.0:6666\";\n    // create mongo connection client\n    const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\n    async function run() {\n        try {\n            const database = client.db(\"courses\");\n            const col = database.collection(\"chats\");\n            // create a document to insert\n            const doc = {\n                username: username,\n                content: comment\n            };\n            const result = await col.insertOne(doc);\n            console.log(`A document was inserted with the _id: ${result.insertedId}`);\n        } finally{\n            await client.close();\n        }\n    }\n    run().catch(console.dir);\n    // return back the records\n    res.status(200).json(username + \"\" + comment);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2F2ZUNoYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXRCLFNBQVNDLFFBQVEsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFekMseUJBQXlCO0lBQ3ZCLE1BQU1DLFFBQVEsR0FBR0YsR0FBRyxDQUFDRyxJQUFJLENBQUNELFFBQVE7SUFDbEMsTUFBTUUsT0FBTyxHQUFHSixHQUFHLENBQUNHLElBQUksQ0FBQ0MsT0FBTztJQUdwQyxNQUFNQyxHQUFHLEdBQUcscUNBQXFDO0lBRWpELGlDQUFpQztJQUNqQyxNQUFNQyxNQUFNLEdBQUcsSUFBSVIsZ0RBQVcsQ0FBQ08sR0FBRyxDQUFDO0lBR25DLGVBQWVFLEdBQUcsR0FBRztRQUNuQixJQUFJO1lBQ0YsTUFBTUMsUUFBUSxHQUFHRixNQUFNLENBQUNHLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFFckMsTUFBTUMsR0FBRyxHQUFHRixRQUFRLENBQUNHLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFFeEMsOEJBQThCO1lBQzlCLE1BQU1DLEdBQUcsR0FBRztnQkFDVlYsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQlcsT0FBTyxFQUFFVCxPQUFPO2FBQ2pCO1lBQ0QsTUFBTVUsTUFBTSxHQUFHLE1BQU1KLEdBQUcsQ0FBQ0ssU0FBUyxDQUFDSCxHQUFHLENBQUM7WUFFdkNJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsc0NBQXNDLEVBQUVILE1BQU0sQ0FBQ0ksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVFLFNBQVU7WUFDUixNQUFNWixNQUFNLENBQUNhLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBR0RaLEdBQUcsRUFBRSxDQUFDYSxLQUFLLENBQUNKLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDLENBQUM7SUFHckIsMEJBQTBCO0lBQzFCcEIsR0FBRyxDQUFDcUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNyQixRQUFRLEdBQUMsRUFBRSxHQUFDRSxPQUFPLENBQUMsQ0FBQztBQUk5QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL3NhdmVDaGF0LmpzP2EzYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJyBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNhdmVDaGF0KHJlcSwgcmVzKSB7XHJcblxyXG4gIC8vIGNhdGNoaW5nIHRoZSB2YXJpYWJsZXNcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLmJvZHkudXNlcm5hbWU7XHJcbiAgICBjb25zdCBjb21tZW50ID0gcmVxLmJvZHkuY29tbWVudDtcclxuIFxyXG5cclxuY29uc3QgdXJpID0gXCJtb25nb2RiOi8vcm9vdDpleGFtcGxlQDAuMC4wLjA6NjY2NlwiO1xyXG5cclxuLy8gY3JlYXRlIG1vbmdvIGNvbm5lY3Rpb24gY2xpZW50XHJcbmNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmkpO1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YWJhc2UgPSBjbGllbnQuZGIoXCJjb3Vyc2VzXCIpO1xyXG5cclxuICAgIGNvbnN0IGNvbCA9IGRhdGFiYXNlLmNvbGxlY3Rpb24oXCJjaGF0c1wiKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgYSBkb2N1bWVudCB0byBpbnNlcnRcclxuICAgIGNvbnN0IGRvYyA9IHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBjb250ZW50OiBjb21tZW50LFxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29sLmluc2VydE9uZShkb2MpO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhgQSBkb2N1bWVudCB3YXMgaW5zZXJ0ZWQgd2l0aCB0aGUgX2lkOiAke3Jlc3VsdC5pbnNlcnRlZElkfWApO1xyXG5cclxuICB9IGZpbmFsbHkge1xyXG4gICAgYXdhaXQgY2xpZW50LmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxucnVuKCkuY2F0Y2goY29uc29sZS5kaXIpO1xyXG4gICBcclxuXHJcbiAgICAvLyByZXR1cm4gYmFjayB0aGUgcmVjb3Jkc1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlcm5hbWUrXCJcIitjb21tZW50KTtcclxuXHJcblxyXG5cclxufSJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInNhdmVDaGF0IiwicmVxIiwicmVzIiwidXNlcm5hbWUiLCJib2R5IiwiY29tbWVudCIsInVyaSIsImNsaWVudCIsInJ1biIsImRhdGFiYXNlIiwiZGIiLCJjb2wiLCJjb2xsZWN0aW9uIiwiZG9jIiwiY29udGVudCIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJpbnNlcnRlZElkIiwiY2xvc2UiLCJjYXRjaCIsImRpciIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/saveChat.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/saveChat.js"));
module.exports = __webpack_exports__;

})();