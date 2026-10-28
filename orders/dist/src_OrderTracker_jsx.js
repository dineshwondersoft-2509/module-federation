"use strict";
(self["webpackChunkorders"] = self["webpackChunkorders"] || []).push([["src_OrderTracker_jsx"],{

/***/ "./src/OrderTracker.jsx"
/*!******************************!*\
  !*** ./src/OrderTracker.jsx ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderTracker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");


function OrderTracker({
  orderId = 101
}) {
  const steps = [{
    label: 'Order Placed',
    done: true,
    time: '10:00 AM'
  }, {
    label: 'Payment Verified',
    done: true,
    time: '10:02 AM'
  }, {
    label: 'Processing',
    done: true,
    time: '10:15 AM'
  }, {
    label: 'Out for Delivery',
    done: false,
    time: 'Pending'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    style: {
      padding: '16px',
      background: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e2e8f0'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h4", {
      style: {
        margin: '0 0 12px 0',
        fontSize: '15px',
        color: '#1e293b'
      },
      children: ["\uD83D\uDE9A Live Order Tracker (#", orderId, ")"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      children: steps.map((step, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        style: {
          textAlign: 'center',
          flex: 1,
          position: 'relative'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          style: {
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            margin: '0 auto 6px auto',
            background: step.done ? '#10b981' : '#e2e8f0',
            color: step.done ? '#fff' : '#64748b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '12px'
          },
          children: step.done ? '✓' : idx + 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          style: {
            fontSize: '12px',
            fontWeight: step.done ? '600' : 'normal',
            color: step.done ? '#0f172a' : '#94a3b8'
          },
          children: step.label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          style: {
            fontSize: '10px',
            color: '#94a3b8'
          },
          children: step.time
        })]
      }, idx))
    })]
  });
}

/***/ }

}]);
//# sourceMappingURL=src_OrderTracker_jsx.js.map