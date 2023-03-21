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
exports.id = "pages/api/getEnrolledStudents";
exports.ids = ["pages/api/getEnrolledStudents"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./pages/api/getEnrolledStudents.js":
/*!******************************************!*\
  !*** ./pages/api/getEnrolledStudents.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getEnrolledStudents)\n/* harmony export */ });\nfunction getEnrolledStudents(req, res) {\n    console.log(\"get enrolled page ID Query \" + req.query.id);\n    let currentID = req.query.id;\n    // get the client\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"password12\",\n        port: 3306,\n        database: \"wse\"\n    });\n    connection.query(\"SELECT * FROM students where enrolledin = '\" + currentID + \"';\", function(err, results, fields) {\n        console.log(results);\n        res.status(200).json(results);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0RW5yb2xsZWRTdHVkZW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsbUJBQW1CLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBRWxEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBR0gsR0FBRyxDQUFDSSxLQUFLLENBQUNDLEVBQUUsQ0FBQyxDQUFDO0lBRTFELElBQUlDLFNBQVMsR0FBR04sR0FBRyxDQUFDSSxLQUFLLENBQUNDLEVBQUU7SUFFNUIsaUJBQWlCO0lBQ2pCLE1BQU1FLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDO0lBSS9CLG9DQUFvQztJQUNwQyxNQUFNQyxVQUFVLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQWdCLENBQUM7UUFDMUNDLElBQUksRUFBRSxXQUFXO1FBQ2pCQyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxRQUFRLEVBQUUsWUFBWTtRQUN0QkMsSUFBSSxFQUFFLElBQUk7UUFDVkMsUUFBUSxFQUFFLEtBQUs7S0FFbEIsQ0FBQztJQUVGTixVQUFVLENBQUNMLEtBQUssQ0FDWiw2Q0FBNkMsR0FBQ0UsU0FBUyxHQUFDLElBQUksRUFDNUQsU0FBU1UsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRTtRQUUzQmhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyxPQUFPLENBQUMsQ0FBQztRQUNyQmhCLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSCxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQ0osQ0FBQztBQUVGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvZ2V0RW5yb2xsZWRTdHVkZW50cy5qcz8xMTIxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEVucm9sbGVkU3R1ZGVudHMocmVxLCByZXMpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImdldCBlbnJvbGxlZCBwYWdlIElEIFF1ZXJ5IFwiICsgcmVxLnF1ZXJ5LmlkKTtcclxuXHJcbiAgICBsZXQgY3VycmVudElEID0gcmVxLnF1ZXJ5LmlkO1xyXG4gIFxyXG4gICAgLy8gZ2V0IHRoZSBjbGllbnRcclxuICAgIGNvbnN0IG15c3FsID0gcmVxdWlyZSgnbXlzcWwyJyk7XHJcblxyXG5cclxuXHJcbiAgICAvLyBjcmVhdGUgdGhlIGNvbm5lY3Rpb24gdG8gZGF0YWJhc2VcclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgdXNlcjogJ3Jvb3QnLFxyXG4gICAgcGFzc3dvcmQ6ICdwYXNzd29yZDEyJyxcclxuICAgIHBvcnQ6IDMzMDYsXHJcbiAgICBkYXRhYmFzZTogJ3dzZSdcclxuXHJcbn0pO1xyXG5cclxuY29ubmVjdGlvbi5xdWVyeShcclxuICAgIFwiU0VMRUNUICogRlJPTSBzdHVkZW50cyB3aGVyZSBlbnJvbGxlZGluID0gJ1wiK2N1cnJlbnRJRCtcIic7XCIsXHJcbiAgICBmdW5jdGlvbihlcnIsIHJlc3VsdHMsIGZpZWxkcykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdHMpO1xyXG4gICAgfVxyXG4pO1xyXG5cclxufSJdLCJuYW1lcyI6WyJnZXRFbnJvbGxlZFN0dWRlbnRzIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiaWQiLCJjdXJyZW50SUQiLCJteXNxbCIsInJlcXVpcmUiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJwb3J0IiwiZGF0YWJhc2UiLCJlcnIiLCJyZXN1bHRzIiwiZmllbGRzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getEnrolledStudents.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getEnrolledStudents.js"));
module.exports = __webpack_exports__;

})();