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

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    console.log(\"login api page called...\");\n    // Get just the username and password and put them into variables.\n    const username = req.body.username;\n    const pass = req.body.password;\n    console.log(\"username is: \" + username);\n    console.log(\"password  is: \" + pass);\n    var validator = __webpack_require__(/*! validator */ \"validator\");\n    validator.isAscii(username);\n    var testResult1 = validator.isAscii(username);\n    console.log(\"is ascii username: \" + testResult1);\n    var testResult2 = validator.isEmpty(username);\n    console.log(\"username is blank: \" + testResult2);\n    var testResult3 = validator.isEmail(username);\n    console.log(\"is username a email: \" + testResult3);\n    var testResult4 = validator.isURL(username);\n    console.log(\"is username a URL: \" + testResult4);\n    var testResult5 = validator.isLowercase(username);\n    console.log(\"is username lowercase: \" + testResult5);\n    //pass\n    var testResult6 = validator.isEmpty(pass);\n    console.log(\"Password is blank: \" + testResult6);\n    var testResult7 = validator.isURL(pass);\n    console.log(\"is password a URL: \" + testResult7);\n    if (testResult1 == true && testResult2 == false && testResult3 == false && testResult4 == false && testResult5 == true && testResult6 == false && testResult7 == false) {\n        // get the client\n        const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n        // create the connection to database\n        const connection = mysql.createConnection({\n            host: \"localhost\",\n            user: \"root\",\n            password: \"password12\",\n            port: 3306,\n            database: \"wse\"\n        });\n        connection.query(\"SELECT * FROM adminlogin WHERE username = '\" + username + \"' and pass = '\" + pass + \"' LIMIT 1;\", function(err, results, fields) {\n            if (results.length == 1) {\n                res.status(200).json(\"ok\");\n            } else {\n                res.status(200).json(\"fail\");\n            }\n        });\n    } else {\n        res.status(200).json(\"not valid please try again..\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxJQUFHLENBQUMsRUFBQztnQkFDbEJoQyxHQUFHLENBQUNpQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUUvQixPQUFPO2dCQUNIbEMsR0FBRyxDQUFDaUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsQ0FBQztRQUNMLENBQUMsQ0FDSixDQUFDO0lBRUYsT0FBUztRQUFDbEMsR0FBRyxDQUFDaUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUFBLENBQUM7QUFDaEUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImxvZ2luIGFwaSBwYWdlIGNhbGxlZC4uLlwiKTtcclxuICAgXHJcbiAgXHJcbiAgXHJcbiAgICAvLyBHZXQganVzdCB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGFuZCBwdXQgdGhlbSBpbnRvIHZhcmlhYmxlcy5cclxuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLmJvZHkudXNlcm5hbWU7XHJcbiAgICBjb25zdCBwYXNzID0gcmVxLmJvZHkucGFzc3dvcmQ7XHJcbiAgXHJcbiAgICBjb25zb2xlLmxvZyhcInVzZXJuYW1lIGlzOiBcIisgdXNlcm5hbWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJwYXNzd29yZCAgaXM6IFwiKyBwYXNzKTtcclxuXHJcbiAgICB2YXIgdmFsaWRhdG9yID0gcmVxdWlyZSgndmFsaWRhdG9yJyk7XHJcbiAgdmFsaWRhdG9yLmlzQXNjaWkodXNlcm5hbWUpO1xyXG5cclxuICB2YXIgdGVzdFJlc3VsdDEgPSB2YWxpZGF0b3IuaXNBc2NpaSh1c2VybmFtZSk7XHJcbiAgY29uc29sZS5sb2coXCJpcyBhc2NpaSB1c2VybmFtZTogXCIgKyB0ZXN0UmVzdWx0MSk7XHJcblxyXG4gIHZhciB0ZXN0UmVzdWx0MiA9IHZhbGlkYXRvci5pc0VtcHR5KHVzZXJuYW1lKTtcclxuICBjb25zb2xlLmxvZyhcInVzZXJuYW1lIGlzIGJsYW5rOiBcIiArIHRlc3RSZXN1bHQyKTtcclxuXHJcbiAgdmFyIHRlc3RSZXN1bHQzID0gdmFsaWRhdG9yLmlzRW1haWwodXNlcm5hbWUpO1xyXG4gIGNvbnNvbGUubG9nKFwiaXMgdXNlcm5hbWUgYSBlbWFpbDogXCIgKyB0ZXN0UmVzdWx0Myk7XHJcblxyXG4gIHZhciB0ZXN0UmVzdWx0NCA9IHZhbGlkYXRvci5pc1VSTCh1c2VybmFtZSk7XHJcbiAgY29uc29sZS5sb2coXCJpcyB1c2VybmFtZSBhIFVSTDogXCIgKyB0ZXN0UmVzdWx0NCk7XHJcblxyXG4gIHZhciB0ZXN0UmVzdWx0NSA9IHZhbGlkYXRvci5pc0xvd2VyY2FzZSh1c2VybmFtZSk7XHJcbiAgY29uc29sZS5sb2coXCJpcyB1c2VybmFtZSBsb3dlcmNhc2U6IFwiICsgdGVzdFJlc3VsdDUpO1xyXG5cclxuXHJcblxyXG4gIC8vcGFzc1xyXG4gIHZhciB0ZXN0UmVzdWx0NiA9IHZhbGlkYXRvci5pc0VtcHR5KHBhc3MpO1xyXG4gIGNvbnNvbGUubG9nKFwiUGFzc3dvcmQgaXMgYmxhbms6IFwiICsgdGVzdFJlc3VsdDYpO1xyXG5cclxuICB2YXIgdGVzdFJlc3VsdDcgPSB2YWxpZGF0b3IuaXNVUkwocGFzcyk7XHJcbiAgY29uc29sZS5sb2coXCJpcyBwYXNzd29yZCBhIFVSTDogXCIgKyB0ZXN0UmVzdWx0Nyk7XHJcbiAgXHJcbiAgaWYodGVzdFJlc3VsdDEgPT0gdHJ1ZSAmJiB0ZXN0UmVzdWx0MiA9PSBmYWxzZSAmJiB0ZXN0UmVzdWx0MyA9PSBmYWxzZSAmJiB0ZXN0UmVzdWx0NCA9PSBmYWxzZSAmJiB0ZXN0UmVzdWx0NSA9PSB0cnVlICYmIHRlc3RSZXN1bHQ2ID09IGZhbHNlICYmIHRlc3RSZXN1bHQ3ID09IGZhbHNlKSB7XHJcbiAgICAvLyBnZXQgdGhlIGNsaWVudFxyXG4gICAgY29uc3QgbXlzcWwgPSByZXF1aXJlKCdteXNxbDInKTtcclxuXHJcblxyXG5cclxuICAgIC8vIGNyZWF0ZSB0aGUgY29ubmVjdGlvbiB0byBkYXRhYmFzZVxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgICB1c2VyOiAncm9vdCcsXHJcbiAgICBwYXNzd29yZDogJ3Bhc3N3b3JkMTInLFxyXG4gICAgcG9ydDogMzMwNixcclxuICAgIGRhdGFiYXNlOiAnd3NlJ1xyXG5cclxufSk7XHJcblxyXG5jb25uZWN0aW9uLnF1ZXJ5KFxyXG4gICAgXCJTRUxFQ1QgKiBGUk9NIGFkbWlubG9naW4gV0hFUkUgdXNlcm5hbWUgPSAnXCIrdXNlcm5hbWUrXCInIGFuZCBwYXNzID0gJ1wiK3Bhc3MrXCInIExJTUlUIDE7XCIsXHJcbiAgICBmdW5jdGlvbihlcnIsIHJlc3VsdHMsIGZpZWxkcykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHJlc3VsdHMubGVuZ3RoID09MSl7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKFwib2tcIik7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKFwiZmFpbFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG59ICAgZWxzZSB7cmVzLnN0YXR1cygyMDApLmpzb24oXCJub3QgdmFsaWQgcGxlYXNlIHRyeSBhZ2Fpbi4uXCIpO31cclxufSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInVzZXJuYW1lIiwiYm9keSIsInBhc3MiLCJwYXNzd29yZCIsInZhbGlkYXRvciIsInJlcXVpcmUiLCJpc0FzY2lpIiwidGVzdFJlc3VsdDEiLCJ0ZXN0UmVzdWx0MiIsImlzRW1wdHkiLCJ0ZXN0UmVzdWx0MyIsImlzRW1haWwiLCJ0ZXN0UmVzdWx0NCIsImlzVVJMIiwidGVzdFJlc3VsdDUiLCJpc0xvd2VyY2FzZSIsInRlc3RSZXN1bHQ2IiwidGVzdFJlc3VsdDciLCJteXNxbCIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwb3J0IiwiZGF0YWJhc2UiLCJxdWVyeSIsImVyciIsInJlc3VsdHMiLCJmaWVsZHMiLCJsZW5ndGgiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

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