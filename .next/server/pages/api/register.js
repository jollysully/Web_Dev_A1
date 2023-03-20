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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction handler(req, res) {\n    console.log(\"register api page called...\");\n    console.log(req.body);\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"password12\",\n        port: 3306,\n        database: \"wse\"\n    });\n    const firstname = req.body.firstname;\n    const lastname = req.body.lastname;\n    const email = req.body.email;\n    const address = req.body.address;\n    const telephone = req.body.telephone;\n    console.log(\"firstname is: \" + firstname);\n    console.log(\"lastname  is: \" + lastname);\n    console.log(\"email is:\" + email);\n    console.log(\"address is :\" + address);\n    console.log(\"telephone is:\" + telephone);\n    // simple query\n    ;\n    connection.query(\"INSERT INTO `students` (firstname, lastname, email, address, telephone) VALUES ('\" + firstname + \"','\" + lastname + \"','\" + email + \"','\" + address + \"','\" + telephone + \"');\", function(err, results, fields) {\n        //error handler\n        if (err) {\n            console.log(err);\n            res.status(200).json(\"fail\" + err.sqlMessage);\n            return;\n        } else {\n            res.status(200).json(\"ok\");\n        }\n    });\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXRCLFNBQVNDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFFM0NELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBRXRCLE1BQU1DLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDO0lBRWpDLG9DQUFvQztJQUNwQyxNQUFNQyxVQUFVLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQWdCLENBQUM7UUFDeENDLElBQUksRUFBRSxXQUFXO1FBQ2pCQyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxRQUFRLEVBQUUsWUFBWTtRQUN0QkMsSUFBSSxFQUFFLElBQUk7UUFDVkMsUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQztJQUVBLE1BQU1DLFNBQVMsR0FBR2QsR0FBRyxDQUFDSSxJQUFJLENBQUNVLFNBQVM7SUFDcEMsTUFBTUMsUUFBUSxHQUFHZixHQUFHLENBQUNJLElBQUksQ0FBQ1csUUFBUTtJQUNsQyxNQUFNQyxLQUFLLEdBQUdoQixHQUFHLENBQUNJLElBQUksQ0FBQ1ksS0FBSztJQUM1QixNQUFNQyxPQUFPLEdBQUdqQixHQUFHLENBQUNJLElBQUksQ0FBQ2EsT0FBTztJQUNoQyxNQUFNQyxTQUFTLEdBQUdsQixHQUFHLENBQUNJLElBQUksQ0FBQ2MsU0FBUztJQUlwQ2hCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixHQUFFVyxTQUFTLENBQUMsQ0FBQztJQUN6Q1osT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUVZLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDYixPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEdBQUdhLEtBQUssQ0FBQyxDQUFDO0lBQ2pDZCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLEdBQUdjLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDZixPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEdBQUdlLFNBQVMsQ0FBQyxDQUFDO0lBR3pDLGVBQWU7O0lBR25CWCxVQUFVLENBQUNZLEtBQUssQ0FFWixtRkFBbUYsR0FBQ0wsU0FBUyxHQUFDLEtBQUssR0FBQ0MsUUFBUSxHQUFDLEtBQUssR0FBQ0MsS0FBSyxHQUFDLEtBQUssR0FBQ0MsT0FBTyxHQUFDLEtBQUssR0FBQ0MsU0FBUyxHQUFDLEtBQUssRUFDNUosU0FBU0UsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFDbkI7UUFDRSxlQUFlO1FBQ2YsSUFBSUYsR0FBRyxFQUFFO1lBQ1BsQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2lCLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCbkIsR0FBRyxDQUFDc0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHSixHQUFHLENBQUNLLFVBQVUsQ0FBQyxDQUFDO1lBRWhELE9BQU07UUFDTixPQUVLO1lBQUN4QixHQUFHLENBQUNzQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUFBLENBQUM7SUFFaEQsQ0FBQyxDQUNBO0FBQUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9yZWdpc3Rlci5qcz8xNzQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXIgYXBpIHBhZ2UgY2FsbGVkLi4uXCIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuXHJcbiAgICBjb25zdCBteXNxbCA9IHJlcXVpcmUoJ215c3FsMicpO1xyXG5cclxuICAvLyBjcmVhdGUgdGhlIGNvbm5lY3Rpb24gdG8gZGF0YWJhc2VcclxuICBjb25zdCBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgIHVzZXI6ICdyb290JyxcclxuICAgIHBhc3N3b3JkOiAncGFzc3dvcmQxMicsXHJcbiAgICBwb3J0OiAzMzA2LFxyXG4gICAgZGF0YWJhc2U6ICd3c2UnXHJcbiAgfSk7XHJcblxyXG4gICAgY29uc3QgZmlyc3RuYW1lID0gcmVxLmJvZHkuZmlyc3RuYW1lO1xyXG4gICAgY29uc3QgbGFzdG5hbWUgPSByZXEuYm9keS5sYXN0bmFtZTtcclxuICAgIGNvbnN0IGVtYWlsID0gcmVxLmJvZHkuZW1haWw7XHJcbiAgICBjb25zdCBhZGRyZXNzID0gcmVxLmJvZHkuYWRkcmVzcztcclxuICAgIGNvbnN0IHRlbGVwaG9uZSA9IHJlcS5ib2R5LnRlbGVwaG9uZTtcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJmaXJzdG5hbWUgaXM6IFwiKyBmaXJzdG5hbWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJsYXN0bmFtZSAgaXM6IFwiKyBsYXN0bmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImVtYWlsIGlzOlwiICsgZW1haWwpO1xyXG4gICAgY29uc29sZS5sb2coXCJhZGRyZXNzIGlzIDpcIiArIGFkZHJlc3MpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0ZWxlcGhvbmUgaXM6XCIgKyB0ZWxlcGhvbmUpO1xyXG4gICAgXHJcblxyXG4gICAgLy8gc2ltcGxlIHF1ZXJ5XHJcbjtcclxuXHJcbmNvbm5lY3Rpb24ucXVlcnkoXHJcbiAgICBcclxuICAgIFwiSU5TRVJUIElOVE8gYHN0dWRlbnRzYCAoZmlyc3RuYW1lLCBsYXN0bmFtZSwgZW1haWwsIGFkZHJlc3MsIHRlbGVwaG9uZSkgVkFMVUVTICgnXCIrZmlyc3RuYW1lK1wiJywnXCIrbGFzdG5hbWUrXCInLCdcIitlbWFpbCtcIicsJ1wiK2FkZHJlc3MrXCInLCdcIit0ZWxlcGhvbmUrXCInKTtcIixcclxuICAgIGZ1bmN0aW9uKGVyciwgcmVzdWx0cywgZmllbGRzKVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vZXJyb3IgaGFuZGxlclxyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihcImZhaWxcIiArIGVyci5zcWxNZXNzYWdlKTtcclxuICBcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgZWxzZSB7cmVzLnN0YXR1cygyMDApLmpzb24oXCJva1wiKTt9XHJcbiAgICAgXHJcbiAgfVxyXG4gICl9OyAiXSwibmFtZXMiOlsiUm91dGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwibXlzcWwiLCJyZXF1aXJlIiwiY29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwicG9ydCIsImRhdGFiYXNlIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJlbWFpbCIsImFkZHJlc3MiLCJ0ZWxlcGhvbmUiLCJxdWVyeSIsImVyciIsInJlc3VsdHMiLCJmaWVsZHMiLCJzdGF0dXMiLCJqc29uIiwic3FsTWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.js\n");

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