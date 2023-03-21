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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction handler(req, res) {\n    console.log(\"register api page called...\");\n    console.log(req.body);\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"password12\",\n        port: 3306,\n        database: \"wse\"\n    });\n    const firstname = req.body.firstname;\n    const lastname = req.body.lastname;\n    const email = req.body.email;\n    const address = req.body.address;\n    const telephone = req.body.telephone;\n    const enrolledin = req.body.enrolledin;\n    console.log(\"firstname is: \" + firstname);\n    console.log(\"lastname  is: \" + lastname);\n    console.log(\"email is:\" + email);\n    console.log(\"address is :\" + address);\n    console.log(\"telephone is:\" + telephone);\n    console.log(\"enrolledin is:\" + enrolledin);\n    // simple query\n    ;\n    connection.query(\"INSERT INTO `students` (firstname, lastname, email, address, telephone, enrolledin) VALUES ('\" + firstname + \"','\" + lastname + \"','\" + email + \"','\" + address + \"','\" + telephone + \"', '\" + enrolledin + \"');\", function(err, results, fields) {\n        //error handler\n        if (err) {\n            console.log(err);\n            res.status(200).json(\"fail\" + err.sqlMessage);\n            return;\n        } else {\n            res.status(200).json(\"ok\");\n        }\n    });\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXRCLFNBQVNDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFFM0NELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBRXRCLE1BQU1DLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDO0lBRWpDLG9DQUFvQztJQUNwQyxNQUFNQyxVQUFVLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQWdCLENBQUM7UUFDeENDLElBQUksRUFBRSxXQUFXO1FBQ2pCQyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxRQUFRLEVBQUUsWUFBWTtRQUN0QkMsSUFBSSxFQUFFLElBQUk7UUFDVkMsUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQztJQUVBLE1BQU1DLFNBQVMsR0FBR2QsR0FBRyxDQUFDSSxJQUFJLENBQUNVLFNBQVM7SUFDcEMsTUFBTUMsUUFBUSxHQUFHZixHQUFHLENBQUNJLElBQUksQ0FBQ1csUUFBUTtJQUNsQyxNQUFNQyxLQUFLLEdBQUdoQixHQUFHLENBQUNJLElBQUksQ0FBQ1ksS0FBSztJQUM1QixNQUFNQyxPQUFPLEdBQUdqQixHQUFHLENBQUNJLElBQUksQ0FBQ2EsT0FBTztJQUNoQyxNQUFNQyxTQUFTLEdBQUdsQixHQUFHLENBQUNJLElBQUksQ0FBQ2MsU0FBUztJQUNwQyxNQUFNQyxVQUFVLEdBQUduQixHQUFHLENBQUNJLElBQUksQ0FBQ2UsVUFBVTtJQUl0Q2pCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixHQUFFVyxTQUFTLENBQUMsQ0FBQztJQUN6Q1osT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUVZLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDYixPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEdBQUdhLEtBQUssQ0FBQyxDQUFDO0lBQ2pDZCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLEdBQUdjLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDZixPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEdBQUdlLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDaEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUdnQixVQUFVLENBQUMsQ0FBQztJQUczQyxlQUFlOztJQUduQlosVUFBVSxDQUFDYSxLQUFLLENBRVosK0ZBQStGLEdBQUNOLFNBQVMsR0FBQyxLQUFLLEdBQUNDLFFBQVEsR0FBQyxLQUFLLEdBQUNDLEtBQUssR0FBQyxLQUFLLEdBQUNDLE9BQU8sR0FBQyxLQUFLLEdBQUNDLFNBQVMsR0FBQyxNQUFNLEdBQUNDLFVBQVUsR0FBQyxLQUFLLEVBQzFMLFNBQVNFLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQ25CO1FBQ0UsZUFBZTtRQUNmLElBQUlGLEdBQUcsRUFBRTtZQUNQbkIsT0FBTyxDQUFDQyxHQUFHLENBQUNrQixHQUFHLENBQUMsQ0FBQztZQUNqQnBCLEdBQUcsQ0FBQ3VCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBR0osR0FBRyxDQUFDSyxVQUFVLENBQUMsQ0FBQztZQUVoRCxPQUFNO1FBQ04sT0FFSztZQUFDekIsR0FBRyxDQUFDdUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFBQSxDQUFDO0lBRWhELENBQUMsQ0FDQTtBQUFBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanM/MTc0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyIGFwaSBwYWdlIGNhbGxlZC4uLlwiKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XHJcblxyXG4gICAgY29uc3QgbXlzcWwgPSByZXF1aXJlKCdteXNxbDInKTtcclxuXHJcbiAgLy8gY3JlYXRlIHRoZSBjb25uZWN0aW9uIHRvIGRhdGFiYXNlXHJcbiAgY29uc3QgY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgICB1c2VyOiAncm9vdCcsXHJcbiAgICBwYXNzd29yZDogJ3Bhc3N3b3JkMTInLFxyXG4gICAgcG9ydDogMzMwNixcclxuICAgIGRhdGFiYXNlOiAnd3NlJ1xyXG4gIH0pO1xyXG5cclxuICAgIGNvbnN0IGZpcnN0bmFtZSA9IHJlcS5ib2R5LmZpcnN0bmFtZTtcclxuICAgIGNvbnN0IGxhc3RuYW1lID0gcmVxLmJvZHkubGFzdG5hbWU7XHJcbiAgICBjb25zdCBlbWFpbCA9IHJlcS5ib2R5LmVtYWlsO1xyXG4gICAgY29uc3QgYWRkcmVzcyA9IHJlcS5ib2R5LmFkZHJlc3M7XHJcbiAgICBjb25zdCB0ZWxlcGhvbmUgPSByZXEuYm9keS50ZWxlcGhvbmU7XHJcbiAgICBjb25zdCBlbnJvbGxlZGluID0gcmVxLmJvZHkuZW5yb2xsZWRpbjtcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJmaXJzdG5hbWUgaXM6IFwiKyBmaXJzdG5hbWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJsYXN0bmFtZSAgaXM6IFwiKyBsYXN0bmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImVtYWlsIGlzOlwiICsgZW1haWwpO1xyXG4gICAgY29uc29sZS5sb2coXCJhZGRyZXNzIGlzIDpcIiArIGFkZHJlc3MpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0ZWxlcGhvbmUgaXM6XCIgKyB0ZWxlcGhvbmUpO1xyXG4gICAgY29uc29sZS5sb2coXCJlbnJvbGxlZGluIGlzOlwiICsgZW5yb2xsZWRpbik7XHJcbiAgICBcclxuXHJcbiAgICAvLyBzaW1wbGUgcXVlcnlcclxuO1xyXG5cclxuY29ubmVjdGlvbi5xdWVyeShcclxuICAgIFxyXG4gICAgXCJJTlNFUlQgSU5UTyBgc3R1ZGVudHNgIChmaXJzdG5hbWUsIGxhc3RuYW1lLCBlbWFpbCwgYWRkcmVzcywgdGVsZXBob25lLCBlbnJvbGxlZGluKSBWQUxVRVMgKCdcIitmaXJzdG5hbWUrXCInLCdcIitsYXN0bmFtZStcIicsJ1wiK2VtYWlsK1wiJywnXCIrYWRkcmVzcytcIicsJ1wiK3RlbGVwaG9uZStcIicsICdcIitlbnJvbGxlZGluK1wiJyk7XCIsXHJcbiAgICBmdW5jdGlvbihlcnIsIHJlc3VsdHMsIGZpZWxkcylcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL2Vycm9yIGhhbmRsZXJcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oXCJmYWlsXCIgKyBlcnIuc3FsTWVzc2FnZSk7XHJcbiAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgIGVsc2Uge3Jlcy5zdGF0dXMoMjAwKS5qc29uKFwib2tcIik7fVxyXG4gICAgIFxyXG4gIH1cclxuICApfTsgIl0sIm5hbWVzIjpbIlJvdXRlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIm15c3FsIiwicmVxdWlyZSIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsInBvcnQiLCJkYXRhYmFzZSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJhZGRyZXNzIiwidGVsZXBob25lIiwiZW5yb2xsZWRpbiIsInF1ZXJ5IiwiZXJyIiwicmVzdWx0cyIsImZpZWxkcyIsInN0YXR1cyIsImpzb24iLCJzcWxNZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.js\n");

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