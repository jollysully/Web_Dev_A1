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
exports.id = "pages/api/listCourses";
exports.ids = ["pages/api/listCourses"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./pages/api/listCourses.js":
/*!**********************************!*\
  !*** ./pages/api/listCourses.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ listAllCourses)\n/* harmony export */ });\nfunction listAllCourses(req, res) {\n    // get the client\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"password12\",\n        port: 3306,\n        database: \"wse\"\n    });\n    connection.query(\"SELECT * FROM courses;\", function(err, results, fields) {\n        res.status(200).json(results);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGlzdENvdXJzZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLGNBQWMsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFN0MsaUJBQWlCO0lBQ2pCLE1BQU1DLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDO0lBSS9CLG9DQUFvQztJQUNwQyxNQUFNQyxVQUFVLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQWdCLENBQUM7UUFDMUNDLElBQUksRUFBRSxXQUFXO1FBQ2pCQyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxRQUFRLEVBQUUsWUFBWTtRQUN0QkMsSUFBSSxFQUFFLElBQUk7UUFDVkMsUUFBUSxFQUFFLEtBQUs7S0FFbEIsQ0FBQztJQUVGTixVQUFVLENBQUNPLEtBQUssQ0FDWix3QkFBd0IsRUFDeEIsU0FBU0MsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRTtRQUUzQmIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUNKLENBQUM7QUFFRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL2xpc3RDb3Vyc2VzLmpzPzk3MGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdEFsbENvdXJzZXMocmVxLCByZXMpIHtcclxuICBcclxuICAgIC8vIGdldCB0aGUgY2xpZW50XHJcbiAgICBjb25zdCBteXNxbCA9IHJlcXVpcmUoJ215c3FsMicpO1xyXG5cclxuXHJcblxyXG4gICAgLy8gY3JlYXRlIHRoZSBjb25uZWN0aW9uIHRvIGRhdGFiYXNlXHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgIHVzZXI6ICdyb290JyxcclxuICAgIHBhc3N3b3JkOiAncGFzc3dvcmQxMicsXHJcbiAgICBwb3J0OiAzMzA2LFxyXG4gICAgZGF0YWJhc2U6ICd3c2UnXHJcblxyXG59KTtcclxuXHJcbmNvbm5lY3Rpb24ucXVlcnkoXHJcbiAgICBcIlNFTEVDVCAqIEZST00gY291cnNlcztcIixcclxuICAgIGZ1bmN0aW9uKGVyciwgcmVzdWx0cywgZmllbGRzKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0cyk7XHJcbiAgICB9XHJcbik7XHJcblxyXG59Il0sIm5hbWVzIjpbImxpc3RBbGxDb3Vyc2VzIiwicmVxIiwicmVzIiwibXlzcWwiLCJyZXF1aXJlIiwiY29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwicG9ydCIsImRhdGFiYXNlIiwicXVlcnkiLCJlcnIiLCJyZXN1bHRzIiwiZmllbGRzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/listCourses.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/listCourses.js"));
module.exports = __webpack_exports__;

})();