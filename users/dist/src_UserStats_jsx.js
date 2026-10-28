"use strict";
(self["webpackChunkusers"] = self["webpackChunkusers"] || []).push([["src_UserStats_jsx"],{

/***/ "./src/UserStats.jsx"
/*!***************************!*\
  !*** ./src/UserStats.jsx ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserStats)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiBase */ "./src/apiBase.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");



function UserStats() {
  const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    total: 0,
    active: 0,
    admins: 0
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const apiBase = (0,_apiBase__WEBPACK_IMPORTED_MODULE_1__["default"])();
    fetch(`${apiBase}/users`).then(res => res.json()).then(data => {
      const active = data.filter(u => u.status === 'active').length;
      const admins = data.filter(u => u.role === 'Admin').length;
      setStats({
        total: data.length,
        active,
        admins
      });
    }).catch(err => console.error('UserStats fetch error:', err));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "card",
    style: {
      padding: '16px',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
      style: {
        margin: '0 0 12px 0',
        fontSize: '16px',
        color: '#1e293b'
      },
      children: "\uD83D\uDC64 User Analytics Widget (Users Remote)"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: {
          padding: '10px',
          background: '#f8fafc',
          borderRadius: '8px',
          textAlign: 'center'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            fontSize: '12px',
            color: '#64748b'
          },
          children: "Total Users"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#0f172a'
          },
          children: stats.total
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: {
          padding: '10px',
          background: '#f0fdf4',
          borderRadius: '8px',
          textAlign: 'center'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            fontSize: '12px',
            color: '#166534'
          },
          children: "Active Users"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#15803d'
          },
          children: stats.active
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: {
          padding: '10px',
          background: '#eff6ff',
          borderRadius: '8px',
          textAlign: 'center'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            fontSize: '12px',
            color: '#1e40af'
          },
          children: "Admins"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#1d4ed8'
          },
          children: stats.admins
        })]
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
//# sourceMappingURL=src_UserStats_jsx.js.map