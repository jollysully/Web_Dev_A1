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
exports.id = "pages/api/saveGrade";
exports.ids = ["pages/api/saveGrade"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./pages/api/saveGrade.js":
/*!********************************!*\
  !*** ./pages/api/saveGrade.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SaveGrade)\n/* harmony export */ });\nfunction SaveGrade(req, res) {\n    const cid = req.body.cid;\n    const sid = req.body.sid;\n    const grade = req.body.grade;\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"password12\",\n        port: 3306,\n        database: \"wse\"\n    });\n    connection.query(\"INSERT INTO grades (sid,courseid,grade) VALUES ('\" + sid + \"','\" + cid + \"','\" + grade + \"');\", function(err, results, fields) {\n        //error handler\n        if (err) {\n            console.log(err);\n            res.status(200).json(\"fail\" + err.sqlMessage);\n            return;\n        } else {\n            res.status(200).json(\"ok\");\n        }\n    //console.log(results);\n    //res.status(200).json(results);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2F2ZUdyYWRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxTQUFTLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBR3hDLE1BQU1DLEdBQUcsR0FBR0YsR0FBRyxDQUFDRyxJQUFJLENBQUNELEdBQUc7SUFDeEIsTUFBTUUsR0FBRyxHQUFHSixHQUFHLENBQUNHLElBQUksQ0FBQ0MsR0FBRztJQUN4QixNQUFNQyxLQUFLLEdBQUdMLEdBQUcsQ0FBQ0csSUFBSSxDQUFDRSxLQUFLO0lBRzVCLE1BQU1DLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDO0lBRTdCLG9DQUFvQztJQUNwQyxNQUFNQyxVQUFVLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQWdCLENBQUM7UUFDeENDLElBQUksRUFBRSxXQUFXO1FBQ2pCQyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxRQUFRLEVBQUUsWUFBWTtRQUN0QkMsSUFBSSxFQUFFLElBQUk7UUFDVkMsUUFBUSxFQUFFLEtBQUs7S0FDbEIsQ0FBQztJQUdGTixVQUFVLENBQUNPLEtBQUssQ0FDWixtREFBbUQsR0FBQ1gsR0FBRyxHQUFDLEtBQUssR0FBQ0YsR0FBRyxHQUFDLEtBQUssR0FBQ0csS0FBSyxHQUFDLEtBQUssRUFDbkYsU0FBU1csR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRTtRQUUzQixlQUFlO1FBQ2YsSUFBSUYsR0FBRyxFQUFFO1lBQ0xHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixHQUFHLENBQUMsQ0FBQztZQUNqQmYsR0FBRyxDQUFDb0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHTixHQUFHLENBQUNPLFVBQVUsQ0FBQyxDQUFDO1lBQ2hELE9BQU07UUFDTixPQUVLO1lBQUN0QixHQUFHLENBQUNvQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUFBLENBQUM7SUFFcEMsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUVwQyxDQUFDLENBQ0osQ0FBQztBQU9OLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvc2F2ZUdyYWRlLmpzPzkwN2UiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2F2ZUdyYWRlKHJlcSwgcmVzKSB7XHJcblxyXG4gXHJcbiAgICBjb25zdCBjaWQgPSByZXEuYm9keS5jaWQ7XHJcbiAgICBjb25zdCBzaWQgPSByZXEuYm9keS5zaWQ7XHJcbiAgICBjb25zdCBncmFkZSA9IHJlcS5ib2R5LmdyYWRlO1xyXG5cclxuXHJcbiAgICBjb25zdCBteXNxbCA9IHJlcXVpcmUoJ215c3FsMicpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRoZSBjb25uZWN0aW9uIHRvIGRhdGFiYXNlXHJcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgICAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgICAgICB1c2VyOiAncm9vdCcsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdwYXNzd29yZDEyJyxcclxuICAgICAgICBwb3J0OiAzMzA2LFxyXG4gICAgICAgIGRhdGFiYXNlOiAnd3NlJ1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGNvbm5lY3Rpb24ucXVlcnkoXHJcbiAgICAgICAgXCJJTlNFUlQgSU5UTyBncmFkZXMgKHNpZCxjb3Vyc2VpZCxncmFkZSkgVkFMVUVTICgnXCIrc2lkK1wiJywnXCIrY2lkK1wiJywnXCIrZ3JhZGUrXCInKTtcIixcclxuICAgICAgICBmdW5jdGlvbihlcnIsIHJlc3VsdHMsIGZpZWxkcykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9lcnJvciBoYW5kbGVyXHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihcImZhaWxcIiArIGVyci5zcWxNZXNzYWdlKTtcclxuICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGVsc2Uge3Jlcy5zdGF0dXMoMjAwKS5qc29uKFwib2tcIik7fVxyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHRzKTtcclxuICAgICAgICAgICAgLy9yZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHRzKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICAgICAgIFxyXG4gXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgXHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyJTYXZlR3JhZGUiLCJyZXEiLCJyZXMiLCJjaWQiLCJib2R5Iiwic2lkIiwiZ3JhZGUiLCJteXNxbCIsInJlcXVpcmUiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJwb3J0IiwiZGF0YWJhc2UiLCJxdWVyeSIsImVyciIsInJlc3VsdHMiLCJmaWVsZHMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsInNxbE1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/saveGrade.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/saveGrade.js"));
module.exports = __webpack_exports__;

})();