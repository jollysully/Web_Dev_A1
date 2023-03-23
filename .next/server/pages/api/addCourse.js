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
exports.id = "pages/api/addCourse";
exports.ids = ["pages/api/addCourse"];
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

/***/ "(api)/./pages/api/addCourse.js":
/*!********************************!*\
  !*** ./pages/api/addCourse.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction handler(req, res) {\n    console.log(\"addcourse api page called...\");\n    console.log(req.body);\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"password12\",\n        port: 3306,\n        database: \"wse\"\n    });\n    //res.status(200).json(\"ok\");\n    //catching the data entered on client side (register page)\n    const Title = req.body.Title;\n    const Description = req.body.Description;\n    const nfq = req.body.nfq;\n    const courseid = req.body.courseid;\n    console.log(\"Title is: \" + Title);\n    console.log(\"Description  is: \" + Description);\n    console.log(\"nfq is :\" + nfq);\n    console.log(\"courseid is:\" + courseid);\n    // simple query\n    ;\n    connection.query(\"INSERT INTO `courses` (Title, Description, nfq, courseid) VALUES ('\" + Title + \"','\" + Description + \"','\" + nfq + \"','\" + courseid + \"');\", function(err, results, fields) {\n        //error handler\n        if (err) {\n            console.log(err);\n            res.status(200).json(\"fail\" + err.sqlMessage);\n            return;\n        } else {\n            res.status(200).json(\"ok\");\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkQ291cnNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztBQUV0QixTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBRTVDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUV0QixNQUFNQyxLQUFLLEdBQUdDLG1CQUFPLENBQUMsc0JBQVEsQ0FBQztJQUVqQyxvQ0FBb0M7SUFDcEMsTUFBTUMsVUFBVSxHQUFHRixLQUFLLENBQUNHLGdCQUFnQixDQUFDO1FBQ3hDQyxJQUFJLEVBQUUsV0FBVztRQUNqQkMsSUFBSSxFQUFFLE1BQU07UUFDWkMsUUFBUSxFQUFFLFlBQVk7UUFDdEJDLElBQUksRUFBRSxJQUFJO1FBQ1ZDLFFBQVEsRUFBRSxLQUFLO0tBQ2hCLENBQUM7SUFFQSw2QkFBNkI7SUFFN0IsMERBQTBEO0lBQzFELE1BQU1DLEtBQUssR0FBR2QsR0FBRyxDQUFDSSxJQUFJLENBQUNVLEtBQUs7SUFDNUIsTUFBTUMsV0FBVyxHQUFHZixHQUFHLENBQUNJLElBQUksQ0FBQ1csV0FBVztJQUN4QyxNQUFNQyxHQUFHLEdBQUdoQixHQUFHLENBQUNJLElBQUksQ0FBQ1ksR0FBRztJQUN4QixNQUFNQyxRQUFRLEdBQUdqQixHQUFHLENBQUNJLElBQUksQ0FBQ2EsUUFBUTtJQUdsQ2YsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxHQUFFVyxLQUFLLENBQUMsQ0FBQztJQUNqQ1osT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLEdBQUVZLFdBQVcsQ0FBQyxDQUFDO0lBQzlDYixPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEdBQUdhLEdBQUcsQ0FBQyxDQUFDO0lBQzlCZCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLEdBQUdjLFFBQVEsQ0FBQyxDQUFDO0lBRXZDLGVBQWU7O0lBR25CVixVQUFVLENBQUNXLEtBQUssQ0FFZCxxRUFBcUUsR0FBQ0osS0FBSyxHQUFDLEtBQUssR0FBQ0MsV0FBVyxHQUFDLEtBQUssR0FBQ0MsR0FBRyxHQUFDLEtBQUssR0FBQ0MsUUFBUSxHQUFDLEtBQUssRUFDNUgsU0FBU0UsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFDbkI7UUFDRSxlQUFlO1FBQ2YsSUFBSUYsR0FBRyxFQUFFO1lBQ1BqQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2dCLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCbEIsR0FBRyxDQUFDcUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHSixHQUFHLENBQUNLLFVBQVUsQ0FBQyxDQUFDO1lBRWhELE9BQU07UUFDTixPQUVLO1lBQUN2QixHQUFHLENBQUNxQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUFBLENBQUM7SUFFaEQsQ0FBQyxDQUNBO0FBQUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9hZGRDb3Vyc2UuanM/MDgzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImFkZGNvdXJzZSBhcGkgcGFnZSBjYWxsZWQuLi5cIik7XHJcblxyXG4gICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xyXG5cclxuICAgIGNvbnN0IG15c3FsID0gcmVxdWlyZSgnbXlzcWwyJyk7XHJcblxyXG4gIC8vIGNyZWF0ZSB0aGUgY29ubmVjdGlvbiB0byBkYXRhYmFzZVxyXG4gIGNvbnN0IGNvbm5lY3Rpb24gPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgdXNlcjogJ3Jvb3QnLFxyXG4gICAgcGFzc3dvcmQ6ICdwYXNzd29yZDEyJyxcclxuICAgIHBvcnQ6IDMzMDYsXHJcbiAgICBkYXRhYmFzZTogJ3dzZSdcclxuICB9KTtcclxuXHJcbiAgICAvL3Jlcy5zdGF0dXMoMjAwKS5qc29uKFwib2tcIik7XHJcblxyXG4gICAgLy9jYXRjaGluZyB0aGUgZGF0YSBlbnRlcmVkIG9uIGNsaWVudCBzaWRlIChyZWdpc3RlciBwYWdlKVxyXG4gICAgY29uc3QgVGl0bGUgPSByZXEuYm9keS5UaXRsZTtcclxuICAgIGNvbnN0IERlc2NyaXB0aW9uID0gcmVxLmJvZHkuRGVzY3JpcHRpb247XHJcbiAgICBjb25zdCBuZnEgPSByZXEuYm9keS5uZnE7XHJcbiAgICBjb25zdCBjb3Vyc2VpZCA9IHJlcS5ib2R5LmNvdXJzZWlkO1xyXG4gICAgXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJUaXRsZSBpczogXCIrIFRpdGxlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRGVzY3JpcHRpb24gIGlzOiBcIisgRGVzY3JpcHRpb24pO1xyXG4gICAgY29uc29sZS5sb2coXCJuZnEgaXMgOlwiICsgbmZxKTtcclxuICAgIGNvbnNvbGUubG9nKFwiY291cnNlaWQgaXM6XCIgKyBjb3Vyc2VpZCk7XHJcbiAgICBcclxuICAgIC8vIHNpbXBsZSBxdWVyeVxyXG47XHJcblxyXG5jb25uZWN0aW9uLnF1ZXJ5KFxyXG4gICAgXHJcbiAgXCJJTlNFUlQgSU5UTyBgY291cnNlc2AgKFRpdGxlLCBEZXNjcmlwdGlvbiwgbmZxLCBjb3Vyc2VpZCkgVkFMVUVTICgnXCIrVGl0bGUrXCInLCdcIitEZXNjcmlwdGlvbitcIicsJ1wiK25mcStcIicsJ1wiK2NvdXJzZWlkK1wiJyk7XCIsXHJcbiAgZnVuY3Rpb24oZXJyLCByZXN1bHRzLCBmaWVsZHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAvL2Vycm9yIGhhbmRsZXJcclxuICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oXCJmYWlsXCIgKyBlcnIuc3FsTWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgZWxzZSB7cmVzLnN0YXR1cygyMDApLmpzb24oXCJva1wiKTt9XHJcbiAgIFxyXG59XHJcbil9ICJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJteXNxbCIsInJlcXVpcmUiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJwb3J0IiwiZGF0YWJhc2UiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwibmZxIiwiY291cnNlaWQiLCJxdWVyeSIsImVyciIsInJlc3VsdHMiLCJmaWVsZHMiLCJzdGF0dXMiLCJqc29uIiwic3FsTWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/addCourse.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addCourse.js"));
module.exports = __webpack_exports__;

})();