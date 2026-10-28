"use strict";
(self["webpackChunkorders"] = self["webpackChunkorders"] || []).push([["src_OrderSummaryWidget_jsx"],{

/***/ "./src/OrderSummaryWidget.jsx"
/*!************************************!*\
  !*** ./src/OrderSummaryWidget.jsx ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderSummaryWidget)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiBase */ "./src/apiBase.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");



function OrderSummaryWidget() {
  const [metrics, setMetrics] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    revenue: 0,
    total: 0,
    pending: 0
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const apiBase = (0,_apiBase__WEBPACK_IMPORTED_MODULE_1__.resolveApiBase)();
    fetch(`${apiBase}/orders`).then(res => res.json()).then(data => {
      const revenue = data.filter(o => o.status === 'paid').reduce((sum, o) => sum + o.amount, 0);
      const pending = data.filter(o => o.status === 'pending').length;
      setMetrics({
        revenue,
        total: data.length,
        pending
      });
    }).catch(err => console.error('OrderSummaryWidget error:', err));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: {
      padding: '16px',
      background: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
      style: {
        margin: '0 0 12px 0',
        fontSize: '16px',
        color: '#1e293b'
      },
      children: "\uD83D\uDCE6 Orders Summary (Orders Remote)"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: {
          padding: '10px',
          background: '#ecfdf5',
          borderRadius: '8px',
          textAlign: 'center'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            fontSize: '12px',
            color: '#047857'
          },
          children: "Total Revenue"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#065f46'
          },
          children: ["$", metrics.revenue]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: {
          padding: '10px',
          background: '#fef3c7',
          borderRadius: '8px',
          textAlign: 'center'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            fontSize: '12px',
            color: '#b45309'
          },
          children: "Total Orders"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#92400e'
          },
          children: metrics.total
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: {
          padding: '10px',
          background: '#fff7ed',
          borderRadius: '8px',
          textAlign: 'center'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            fontSize: '12px',
            color: '#c2410c'
          },
          children: "Pending Orders"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#9a3412'
          },
          children: metrics.pending
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
//# sourceMappingURL=src_OrderSummaryWidget_jsx.js.map