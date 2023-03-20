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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    console.log(\"login api page called...\");\n    // Get just the username and password and put them into variables.\n    const username = req.body.username;\n    const pass = req.body.password;\n    console.log(\"username is: \" + username);\n    console.log(\"password  is: \" + pass);\n    // get the client\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"password12\",\n        port: 3306,\n        database: \"wse\"\n    });\n    connection.query(\"SELECT * FROM adminlogin WHERE username = '\" + username + \"' and pass = '\" + pass + \"' LIMIT 1;\", function(err, results, fields) {\n        if (results.length == 1) {\n            res.status(200).json(\"ok\");\n        } else {\n            res.status(200).json(\"fail\");\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFdENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFJeEMsa0VBQWtFO0lBQ2xFLE1BQU1DLFFBQVEsR0FBR0osR0FBRyxDQUFDSyxJQUFJLENBQUNELFFBQVE7SUFDbEMsTUFBTUUsSUFBSSxHQUFHTixHQUFHLENBQUNLLElBQUksQ0FBQ0UsUUFBUTtJQUU5QkwsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxHQUFFQyxRQUFRLENBQUMsQ0FBQztJQUN2Q0YsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUVHLElBQUksQ0FBQyxDQUFDO0lBRXBDLGlCQUFpQjtJQUNqQixNQUFNRSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsc0JBQVEsQ0FBQztJQUkvQixvQ0FBb0M7SUFDcEMsTUFBTUMsVUFBVSxHQUFHRixLQUFLLENBQUNHLGdCQUFnQixDQUFDO1FBQzFDQyxJQUFJLEVBQUUsV0FBVztRQUNqQkMsSUFBSSxFQUFFLE1BQU07UUFDWk4sUUFBUSxFQUFFLFlBQVk7UUFDdEJPLElBQUksRUFBRSxJQUFJO1FBQ1ZDLFFBQVEsRUFBRSxLQUFLO0tBRWxCLENBQUM7SUFFRkwsVUFBVSxDQUFDTSxLQUFLLENBQ1osNkNBQTZDLEdBQUNaLFFBQVEsR0FBQyxnQkFBZ0IsR0FBQ0UsSUFBSSxHQUFDLFlBQVksRUFDekYsU0FBU1csR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRTtRQUUzQixJQUFHRCxPQUFPLENBQUNFLE1BQU0sSUFBRyxDQUFDLEVBQUM7WUFDbEJuQixHQUFHLENBQUNvQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQixPQUFPO1lBQ0hyQixHQUFHLENBQUNvQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0wsQ0FBQyxDQUNKLENBQUM7QUFFRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL2xvZ2luLmpzP2FlODgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwibG9naW4gYXBpIHBhZ2UgY2FsbGVkLi4uXCIpO1xyXG4gICBcclxuICBcclxuICBcclxuICAgIC8vIEdldCBqdXN0IHRoZSB1c2VybmFtZSBhbmQgcGFzc3dvcmQgYW5kIHB1dCB0aGVtIGludG8gdmFyaWFibGVzLlxyXG4gICAgY29uc3QgdXNlcm5hbWUgPSByZXEuYm9keS51c2VybmFtZTtcclxuICAgIGNvbnN0IHBhc3MgPSByZXEuYm9keS5wYXNzd29yZDtcclxuICBcclxuICAgIGNvbnNvbGUubG9nKFwidXNlcm5hbWUgaXM6IFwiKyB1c2VybmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkICBpczogXCIrIHBhc3MpO1xyXG4gIFxyXG4gICAgLy8gZ2V0IHRoZSBjbGllbnRcclxuICAgIGNvbnN0IG15c3FsID0gcmVxdWlyZSgnbXlzcWwyJyk7XHJcblxyXG5cclxuXHJcbiAgICAvLyBjcmVhdGUgdGhlIGNvbm5lY3Rpb24gdG8gZGF0YWJhc2VcclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgdXNlcjogJ3Jvb3QnLFxyXG4gICAgcGFzc3dvcmQ6ICdwYXNzd29yZDEyJyxcclxuICAgIHBvcnQ6IDMzMDYsXHJcbiAgICBkYXRhYmFzZTogJ3dzZSdcclxuXHJcbn0pO1xyXG5cclxuY29ubmVjdGlvbi5xdWVyeShcclxuICAgIFwiU0VMRUNUICogRlJPTSBhZG1pbmxvZ2luIFdIRVJFIHVzZXJuYW1lID0gJ1wiK3VzZXJuYW1lK1wiJyBhbmQgcGFzcyA9ICdcIitwYXNzK1wiJyBMSU1JVCAxO1wiLFxyXG4gICAgZnVuY3Rpb24oZXJyLCByZXN1bHRzLCBmaWVsZHMpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZihyZXN1bHRzLmxlbmd0aCA9PTEpe1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihcIm9rXCIpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihcImZhaWxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxufSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInVzZXJuYW1lIiwiYm9keSIsInBhc3MiLCJwYXNzd29yZCIsIm15c3FsIiwicmVxdWlyZSIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwb3J0IiwiZGF0YWJhc2UiLCJxdWVyeSIsImVyciIsInJlc3VsdHMiLCJmaWVsZHMiLCJsZW5ndGgiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();