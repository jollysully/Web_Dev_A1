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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getEnrolledStudents)\n/* harmony export */ });\nfunction getEnrolledStudents(req, res) {\n    console.log(\"get enrolled page ID for query \" + req.query.id);\n    let sid = req.query.id;\n    // get the client\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"password12\",\n        port: 3306,\n        database: \"wse\"\n    });\n    connection.query(\"SELECT * FROM students where sid = '\" + sid + \"';\", function(err, results, fields) {\n        console.log(\"sending back the results\");\n        console.log(results);\n        res.status(200).json(results);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0RW5yb2xsZWRTdHVkZW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsbUJBQW1CLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBRWxEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQ0FBaUMsR0FBR0gsR0FBRyxDQUFDSSxLQUFLLENBQUNDLEVBQUUsQ0FBQyxDQUFDO0lBRTlELElBQUlDLEdBQUcsR0FBR04sR0FBRyxDQUFDSSxLQUFLLENBQUNDLEVBQUU7SUFFdEIsaUJBQWlCO0lBQ2pCLE1BQU1FLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDO0lBSS9CLG9DQUFvQztJQUNwQyxNQUFNQyxVQUFVLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQWdCLENBQUM7UUFDMUNDLElBQUksRUFBRSxXQUFXO1FBQ2pCQyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxRQUFRLEVBQUUsWUFBWTtRQUN0QkMsSUFBSSxFQUFFLElBQUk7UUFDVkMsUUFBUSxFQUFFLEtBQUs7S0FFbEIsQ0FBQztJQUVGTixVQUFVLENBQUNMLEtBQUssQ0FDWixzQ0FBc0MsR0FBQ0UsR0FBRyxHQUFDLElBQUksRUFDL0MsU0FBU1UsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRTtRQUUzQmhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDeENELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyxPQUFPLENBQUMsQ0FBQztRQUNyQmhCLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSCxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQ0osQ0FBQztBQUVGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvZ2V0RW5yb2xsZWRTdHVkZW50cy5qcz8xMTIxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEVucm9sbGVkU3R1ZGVudHMocmVxLCByZXMpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImdldCBlbnJvbGxlZCBwYWdlIElEIGZvciBxdWVyeSBcIiArIHJlcS5xdWVyeS5pZCk7XHJcblxyXG4gICAgbGV0IHNpZCA9IHJlcS5xdWVyeS5pZDtcclxuICBcclxuICAgIC8vIGdldCB0aGUgY2xpZW50XHJcbiAgICBjb25zdCBteXNxbCA9IHJlcXVpcmUoJ215c3FsMicpO1xyXG5cclxuXHJcblxyXG4gICAgLy8gY3JlYXRlIHRoZSBjb25uZWN0aW9uIHRvIGRhdGFiYXNlXHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgIHVzZXI6ICdyb290JyxcclxuICAgIHBhc3N3b3JkOiAncGFzc3dvcmQxMicsXHJcbiAgICBwb3J0OiAzMzA2LFxyXG4gICAgZGF0YWJhc2U6ICd3c2UnXHJcblxyXG59KTtcclxuXHJcbmNvbm5lY3Rpb24ucXVlcnkoXHJcbiAgICBcIlNFTEVDVCAqIEZST00gc3R1ZGVudHMgd2hlcmUgc2lkID0gJ1wiK3NpZCtcIic7XCIsXHJcbiAgICBmdW5jdGlvbihlcnIsIHJlc3VsdHMsIGZpZWxkcykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBiYWNrIHRoZSByZXN1bHRzXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdHMpO1xyXG4gICAgfVxyXG4pO1xyXG5cclxufSJdLCJuYW1lcyI6WyJnZXRFbnJvbGxlZFN0dWRlbnRzIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiaWQiLCJzaWQiLCJteXNxbCIsInJlcXVpcmUiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJwb3J0IiwiZGF0YWJhc2UiLCJlcnIiLCJyZXN1bHRzIiwiZmllbGRzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getEnrolledStudents.js\n");

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