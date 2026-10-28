"use strict";
(self["webpackChunkusers"] = self["webpackChunkusers"] || []).push([["src_UserProfileCard_jsx"],{

/***/ "./src/UserProfileCard.jsx"
/*!*********************************!*\
  !*** ./src/UserProfileCard.jsx ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserProfileCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiBase */ "./src/apiBase.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");



function UserProfileCard({
  userId = 1
}) {
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const apiBase = (0,_apiBase__WEBPACK_IMPORTED_MODULE_1__["default"])();
    fetch(`${apiBase}/users/${userId}`).then(res => res.json()).then(data => setUser(data)).catch(err => console.error('UserProfileCard error:', err));
  }, [userId]);
  if (!user) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    style: {
      padding: '12px'
    },
    children: "Loading Profile..."
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: {
      padding: '16px',
      background: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: {
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: '#3b82f6',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '18px'
      },
      children: user.name.charAt(0)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
        style: {
          margin: 0,
          fontSize: '15px',
          color: '#0f172a'
        },
        children: user.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        style: {
          margin: '2px 0 0 0',
          fontSize: '13px',
          color: '#64748b'
        },
        children: user.email
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
        style: {
          display: 'inline-block',
          marginTop: '6px',
          padding: '2px 8px',
          borderRadius: '12px',
          fontSize: '11px',
          fontWeight: '600',
          background: user.role === 'Admin' ? '#fef3c7' : '#e0f2fe',
          color: user.role === 'Admin' ? '#92400e' : '#0369a1'
        },
        children: [user.role, " \u2022 ", user.status]
      })]
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
//# sourceMappingURL=src_UserProfileCard_jsx.js.map