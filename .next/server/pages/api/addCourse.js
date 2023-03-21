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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction handler(req, res) {\n    console.log(\"addcourse api page called...\");\n    console.log(req.body);\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"password12\",\n        port: 3306,\n        database: \"wse\"\n    });\n    //res.status(200).json(\"ok\");\n    //catching the data entered on client side (register page)\n    const Title = req.body.Title;\n    const Description = req.body.Description;\n    const nfq = req.body.nfq;\n    const courseyear = req.body.courseyear;\n    console.log(\"Title is: \" + Title);\n    console.log(\"Description  is: \" + Description);\n    console.log(\"nfq is :\" + nfq);\n    console.log(\"courseyear is:\" + courseyear);\n    // simple query\n    ;\n    connection.query(\"INSERT INTO `courses` (Title, Description, nfq, courseyear) VALUES ('\" + Title + \"','\" + Description + \"','\" + nfq + \"','\" + courseyear + \"');\", function(err, results, fields) {\n        //error handler\n        if (err) {\n            console.log(err);\n            res.status(200).json(\"fail\" + err.sqlMessage);\n            return;\n        } else {\n            res.status(200).json(\"ok\");\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkQ291cnNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztBQUV0QixTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBRTVDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUV0QixNQUFNQyxLQUFLLEdBQUdDLG1CQUFPLENBQUMsc0JBQVEsQ0FBQztJQUVqQyxvQ0FBb0M7SUFDcEMsTUFBTUMsVUFBVSxHQUFHRixLQUFLLENBQUNHLGdCQUFnQixDQUFDO1FBQ3hDQyxJQUFJLEVBQUUsV0FBVztRQUNqQkMsSUFBSSxFQUFFLE1BQU07UUFDWkMsUUFBUSxFQUFFLFlBQVk7UUFDdEJDLElBQUksRUFBRSxJQUFJO1FBQ1ZDLFFBQVEsRUFBRSxLQUFLO0tBQ2hCLENBQUM7SUFFQSw2QkFBNkI7SUFFN0IsMERBQTBEO0lBQzFELE1BQU1DLEtBQUssR0FBR2QsR0FBRyxDQUFDSSxJQUFJLENBQUNVLEtBQUs7SUFDNUIsTUFBTUMsV0FBVyxHQUFHZixHQUFHLENBQUNJLElBQUksQ0FBQ1csV0FBVztJQUN4QyxNQUFNQyxHQUFHLEdBQUdoQixHQUFHLENBQUNJLElBQUksQ0FBQ1ksR0FBRztJQUN4QixNQUFNQyxVQUFVLEdBQUdqQixHQUFHLENBQUNJLElBQUksQ0FBQ2EsVUFBVTtJQUd0Q2YsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxHQUFFVyxLQUFLLENBQUMsQ0FBQztJQUNqQ1osT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLEdBQUVZLFdBQVcsQ0FBQyxDQUFDO0lBQzlDYixPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEdBQUdhLEdBQUcsQ0FBQyxDQUFDO0lBQzlCZCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBR2MsVUFBVSxDQUFDLENBQUM7SUFFM0MsZUFBZTs7SUFHbkJWLFVBQVUsQ0FBQ1csS0FBSyxDQUVkLHVFQUF1RSxHQUFDSixLQUFLLEdBQUMsS0FBSyxHQUFDQyxXQUFXLEdBQUMsS0FBSyxHQUFDQyxHQUFHLEdBQUMsS0FBSyxHQUFDQyxVQUFVLEdBQUMsS0FBSyxFQUNoSSxTQUFTRSxHQUFHLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUNuQjtRQUNFLGVBQWU7UUFDZixJQUFJRixHQUFHLEVBQUU7WUFDUGpCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZ0IsR0FBRyxDQUFDLENBQUM7WUFDakJsQixHQUFHLENBQUNxQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxNQUFNLEdBQUdKLEdBQUcsQ0FBQ0ssVUFBVSxDQUFDLENBQUM7WUFFaEQsT0FBTTtRQUNOLE9BRUs7WUFBQ3ZCLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQUEsQ0FBQztJQUVoRCxDQUFDLENBQ0E7QUFBQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL2FkZENvdXJzZS5qcz8wODM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYWRkY291cnNlIGFwaSBwYWdlIGNhbGxlZC4uLlwiKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XHJcblxyXG4gICAgY29uc3QgbXlzcWwgPSByZXF1aXJlKCdteXNxbDInKTtcclxuXHJcbiAgLy8gY3JlYXRlIHRoZSBjb25uZWN0aW9uIHRvIGRhdGFiYXNlXHJcbiAgY29uc3QgY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgICB1c2VyOiAncm9vdCcsXHJcbiAgICBwYXNzd29yZDogJ3Bhc3N3b3JkMTInLFxyXG4gICAgcG9ydDogMzMwNixcclxuICAgIGRhdGFiYXNlOiAnd3NlJ1xyXG4gIH0pO1xyXG5cclxuICAgIC8vcmVzLnN0YXR1cygyMDApLmpzb24oXCJva1wiKTtcclxuXHJcbiAgICAvL2NhdGNoaW5nIHRoZSBkYXRhIGVudGVyZWQgb24gY2xpZW50IHNpZGUgKHJlZ2lzdGVyIHBhZ2UpXHJcbiAgICBjb25zdCBUaXRsZSA9IHJlcS5ib2R5LlRpdGxlO1xyXG4gICAgY29uc3QgRGVzY3JpcHRpb24gPSByZXEuYm9keS5EZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IG5mcSA9IHJlcS5ib2R5Lm5mcTtcclxuICAgIGNvbnN0IGNvdXJzZXllYXIgPSByZXEuYm9keS5jb3Vyc2V5ZWFyO1xyXG4gICAgXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJUaXRsZSBpczogXCIrIFRpdGxlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRGVzY3JpcHRpb24gIGlzOiBcIisgRGVzY3JpcHRpb24pO1xyXG4gICAgY29uc29sZS5sb2coXCJuZnEgaXMgOlwiICsgbmZxKTtcclxuICAgIGNvbnNvbGUubG9nKFwiY291cnNleWVhciBpczpcIiArIGNvdXJzZXllYXIpO1xyXG4gICAgXHJcbiAgICAvLyBzaW1wbGUgcXVlcnlcclxuO1xyXG5cclxuY29ubmVjdGlvbi5xdWVyeShcclxuICAgIFxyXG4gIFwiSU5TRVJUIElOVE8gYGNvdXJzZXNgIChUaXRsZSwgRGVzY3JpcHRpb24sIG5mcSwgY291cnNleWVhcikgVkFMVUVTICgnXCIrVGl0bGUrXCInLCdcIitEZXNjcmlwdGlvbitcIicsJ1wiK25mcStcIicsJ1wiK2NvdXJzZXllYXIrXCInKTtcIixcclxuICBmdW5jdGlvbihlcnIsIHJlc3VsdHMsIGZpZWxkcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC8vZXJyb3IgaGFuZGxlclxyXG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihcImZhaWxcIiArIGVyci5zcWxNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBlbHNlIHtyZXMuc3RhdHVzKDIwMCkuanNvbihcIm9rXCIpO31cclxuICAgXHJcbn1cclxuKX0gIl0sIm5hbWVzIjpbIlJvdXRlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIm15c3FsIiwicmVxdWlyZSIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsInBvcnQiLCJkYXRhYmFzZSIsIlRpdGxlIiwiRGVzY3JpcHRpb24iLCJuZnEiLCJjb3Vyc2V5ZWFyIiwicXVlcnkiLCJlcnIiLCJyZXN1bHRzIiwiZmllbGRzIiwic3RhdHVzIiwianNvbiIsInNxbE1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addCourse.js\n");

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