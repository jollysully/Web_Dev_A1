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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "(api)/./pages/api/register.js":
/*!*******************************!*\
  !*** ./pages/api/register.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction handler(req, res) {\n    console.log(\"register api page called...\");\n    console.log(req.body);\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"password12\",\n        port: 3306,\n        database: \"wse\"\n    });\n    //res.status(200).json(\"ok\");\n    //catching the data entered on client side (register page)\n    const firstname = req.body.firstname;\n    const lastname = req.body.lastname;\n    const email = req.body.email;\n    const address = req.body.address;\n    const telephone = req.body.telephone;\n    const sid = req.body.sid;\n    console.log(\"firstname is: \" + firstname);\n    console.log(\"lastname  is: \" + lastname);\n    console.log(\"email is :\" + email);\n    console.log(\"address is:\" + address);\n    console.log(\"telephone is:\" + telephone);\n    console.log(\"enrolledin is:\" + sid);\n    // simple query\n    ;\n    connection.query(\"INSERT INTO `students` (firstname, lastname, email, address, telephone, sid) VALUES ('\" + firstname + \"','\" + lastname + \"','\" + email + \"','\" + address + \"','\" + telephone + \"','\" + sid + \"');\", function(err, results, fields) {\n        //error handler\n        if (err) {\n            console.log(err);\n            res.status(200).json(\"fail\" + err.sqlMessage);\n            return;\n        } else {\n            res.status(200).json(\"ok\");\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXRCLFNBQVNDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFFM0NELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBRXRCLE1BQU1DLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDO0lBRWpDLG9DQUFvQztJQUNwQyxNQUFNQyxVQUFVLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQWdCLENBQUM7UUFDeENDLElBQUksRUFBRSxXQUFXO1FBQ2pCQyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxRQUFRLEVBQUUsWUFBWTtRQUN0QkMsSUFBSSxFQUFFLElBQUk7UUFDVkMsUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQztJQUVBLDZCQUE2QjtJQUU3QiwwREFBMEQ7SUFDMUQsTUFBTUMsU0FBUyxHQUFHZCxHQUFHLENBQUNJLElBQUksQ0FBQ1UsU0FBUztJQUNwQyxNQUFNQyxRQUFRLEdBQUdmLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDVyxRQUFRO0lBQ2xDLE1BQU1DLEtBQUssR0FBR2hCLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDWSxLQUFLO0lBQzVCLE1BQU1DLE9BQU8sR0FBR2pCLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDYSxPQUFPO0lBQ2hDLE1BQU1DLFNBQVMsR0FBR2xCLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDYyxTQUFTO0lBQ3BDLE1BQU1DLEdBQUcsR0FBR25CLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDZSxHQUFHO0lBSXhCakIsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUVXLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDWixPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRVksUUFBUSxDQUFDLENBQUM7SUFDeENiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksR0FBR2EsS0FBSyxDQUFDLENBQUM7SUFDbENkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsR0FBR2MsT0FBTyxDQUFDLENBQUM7SUFDckNmLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsR0FBR2UsU0FBUyxDQUFDLENBQUM7SUFDekNoQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBR2dCLEdBQUcsQ0FBQyxDQUFDO0lBSXBDLGVBQWU7O0lBR25CWixVQUFVLENBQUNhLEtBQUssQ0FFZCx3RkFBd0YsR0FBQ04sU0FBUyxHQUFDLEtBQUssR0FBQ0MsUUFBUSxHQUFDLEtBQUssR0FBQ0MsS0FBSyxHQUFDLEtBQUssR0FBQ0MsT0FBTyxHQUFDLEtBQUssR0FBQ0MsU0FBUyxHQUFDLEtBQUssR0FBQ0MsR0FBRyxHQUFDLEtBQUssRUFDM0ssU0FBU0UsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFDbkI7UUFDRSxlQUFlO1FBQ2YsSUFBSUYsR0FBRyxFQUFFO1lBQ1BuQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2tCLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCcEIsR0FBRyxDQUFDdUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHSixHQUFHLENBQUNLLFVBQVUsQ0FBQyxDQUFDO1lBRWhELE9BQU07UUFDTixPQUVLO1lBQUN6QixHQUFHLENBQUN1QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUFBLENBQUM7SUFFaEQsQ0FBQyxDQUNBO0FBQUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9yZWdpc3Rlci5qcz8xNzQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXIgYXBpIHBhZ2UgY2FsbGVkLi4uXCIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuXHJcbiAgICBjb25zdCBteXNxbCA9IHJlcXVpcmUoJ215c3FsMicpO1xyXG5cclxuICAvLyBjcmVhdGUgdGhlIGNvbm5lY3Rpb24gdG8gZGF0YWJhc2VcclxuICBjb25zdCBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgIHVzZXI6ICdyb290JyxcclxuICAgIHBhc3N3b3JkOiAncGFzc3dvcmQxMicsXHJcbiAgICBwb3J0OiAzMzA2LFxyXG4gICAgZGF0YWJhc2U6ICd3c2UnXHJcbiAgfSk7XHJcblxyXG4gICAgLy9yZXMuc3RhdHVzKDIwMCkuanNvbihcIm9rXCIpO1xyXG5cclxuICAgIC8vY2F0Y2hpbmcgdGhlIGRhdGEgZW50ZXJlZCBvbiBjbGllbnQgc2lkZSAocmVnaXN0ZXIgcGFnZSlcclxuICAgIGNvbnN0IGZpcnN0bmFtZSA9IHJlcS5ib2R5LmZpcnN0bmFtZTtcclxuICAgIGNvbnN0IGxhc3RuYW1lID0gcmVxLmJvZHkubGFzdG5hbWU7XHJcbiAgICBjb25zdCBlbWFpbCA9IHJlcS5ib2R5LmVtYWlsO1xyXG4gICAgY29uc3QgYWRkcmVzcyA9IHJlcS5ib2R5LmFkZHJlc3M7XHJcbiAgICBjb25zdCB0ZWxlcGhvbmUgPSByZXEuYm9keS50ZWxlcGhvbmU7XHJcbiAgICBjb25zdCBzaWQgPSByZXEuYm9keS5zaWQ7XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZmlyc3RuYW1lIGlzOiBcIisgZmlyc3RuYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKFwibGFzdG5hbWUgIGlzOiBcIisgbGFzdG5hbWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJlbWFpbCBpcyA6XCIgKyBlbWFpbCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImFkZHJlc3MgaXM6XCIgKyBhZGRyZXNzKTtcclxuICAgIGNvbnNvbGUubG9nKFwidGVsZXBob25lIGlzOlwiICsgdGVsZXBob25lKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZW5yb2xsZWRpbiBpczpcIiArIHNpZCk7XHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIC8vIHNpbXBsZSBxdWVyeVxyXG47XHJcblxyXG5jb25uZWN0aW9uLnF1ZXJ5KFxyXG4gICAgXHJcbiAgXCJJTlNFUlQgSU5UTyBgc3R1ZGVudHNgIChmaXJzdG5hbWUsIGxhc3RuYW1lLCBlbWFpbCwgYWRkcmVzcywgdGVsZXBob25lLCBzaWQpIFZBTFVFUyAoJ1wiK2ZpcnN0bmFtZStcIicsJ1wiK2xhc3RuYW1lK1wiJywnXCIrZW1haWwrXCInLCdcIithZGRyZXNzK1wiJywnXCIrdGVsZXBob25lK1wiJywnXCIrc2lkK1wiJyk7XCIsXHJcbiAgZnVuY3Rpb24oZXJyLCByZXN1bHRzLCBmaWVsZHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAvL2Vycm9yIGhhbmRsZXJcclxuICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oXCJmYWlsXCIgKyBlcnIuc3FsTWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgZWxzZSB7cmVzLnN0YXR1cygyMDApLmpzb24oXCJva1wiKTt9XHJcbiAgIFxyXG59XHJcbil9ICJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJteXNxbCIsInJlcXVpcmUiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJwb3J0IiwiZGF0YWJhc2UiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwiYWRkcmVzcyIsInRlbGVwaG9uZSIsInNpZCIsInF1ZXJ5IiwiZXJyIiwicmVzdWx0cyIsImZpZWxkcyIsInN0YXR1cyIsImpzb24iLCJzcWxNZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/register.js"));
module.exports = __webpack_exports__;

})();