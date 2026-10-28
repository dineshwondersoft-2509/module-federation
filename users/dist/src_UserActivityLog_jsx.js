"use strict";
(self["webpackChunkusers"] = self["webpackChunkusers"] || []).push([["src_UserActivityLog_jsx"],{

/***/ "./src/UserActivityLog.jsx"
/*!*********************************!*\
  !*** ./src/UserActivityLog.jsx ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserActivityLog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiBase */ "./src/apiBase.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");



function UserActivityLog() {
  const [activities, setActivities] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const apiBase = (0,_apiBase__WEBPACK_IMPORTED_MODULE_1__["default"])();
    fetch(`${apiBase}/users`).then(res => res.json()).then(data => {
      const logs = data.map((u, i) => ({
        id: u.id,
        user: u.name,
        action: i % 2 === 0 ? 'Logged in' : 'Updated profile',
        time: `${(i + 1) * 12} mins ago`
      }));
      setActivities(logs.slice(0, 4));
    }).catch(err => console.error('UserActivityLog error:', err));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: {
      padding: '16px',
      background: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e2e8f0'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
      style: {
        margin: '0 0 12px 0',
        fontSize: '15px',
        color: '#1e293b'
      },
      children: "\u26A1 Recent User Activities"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      },
      children: activities.map(act => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '13px',
          paddingBottom: '6px',
          borderBottom: '1px solid #f1f5f9'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
            children: act.user
          }), " ", act.action]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          style: {
            color: '#94a3b8',
            fontSize: '12px'
          },
          children: act.time
        })]
      }, act.id))
    })]
  });
}

/***/ },

/***/ "./src/apiBase.js"
/*!************************!*\
  !*** ./src/apiBase.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveApiBase: () => (/* binding */ resolveApiBase)
/* harmony export */ });
function resolveApiBase() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  const viaGateway = protocol === 'https:' || port === '8080' || port === '443' || port === '';
  if (viaGateway) {
    const originPort = port ? `:${port}` : '';
    return `${protocol}//${hostname}${originPort}/api`;
  }
  return `${protocol}//${hostname}:3003`;
}

/***/ }

}]);
//# sourceMappingURL=src_UserActivityLog_jsx.js.map