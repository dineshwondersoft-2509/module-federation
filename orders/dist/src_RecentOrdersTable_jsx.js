"use strict";
(self["webpackChunkorders"] = self["webpackChunkorders"] || []).push([["src_RecentOrdersTable_jsx"],{

/***/ "./src/RecentOrdersTable.jsx"
/*!***********************************!*\
  !*** ./src/RecentOrdersTable.jsx ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecentOrdersTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiBase */ "./src/apiBase.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");



function RecentOrdersTable() {
  const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const apiBase = (0,_apiBase__WEBPACK_IMPORTED_MODULE_1__.resolveApiBase)();
    fetch(`${apiBase}/orders`).then(res => res.json()).then(data => setOrders(data.slice(0, 4))).catch(err => console.error('RecentOrdersTable error:', err));
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
      children: "\uD83D\uDED2 Recent Orders"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '13px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          style: {
            background: '#f8fafc',
            textAlign: 'left',
            borderBottom: '1px solid #e2e8f0'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            style: {
              padding: '8px'
            },
            children: "Order ID"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            style: {
              padding: '8px'
            },
            children: "Product"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            style: {
              padding: '8px'
            },
            children: "Amount"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            style: {
              padding: '8px'
            },
            children: "Status"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
        children: orders.map(o => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          style: {
            borderBottom: '1px solid #f1f5f9'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("td", {
            style: {
              padding: '8px'
            },
            children: ["#", o.id]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            style: {
              padding: '8px'
            },
            children: o.product
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("td", {
            style: {
              padding: '8px',
              fontWeight: '600'
            },
            children: ["$", o.amount]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            style: {
              padding: '8px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              style: {
                padding: '2px 8px',
                borderRadius: '10px',
                fontSize: '11px',
                fontWeight: '600',
                background: o.status === 'paid' ? '#dcfce7' : o.status === 'pending' ? '#fef9c3' : '#fee2e2',
                color: o.status === 'paid' ? '#166534' : o.status === 'pending' ? '#854d0e' : '#991b1b'
              },
              children: o.status
            })
          })]
        }, o.id))
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
//# sourceMappingURL=src_RecentOrdersTable_jsx.js.map