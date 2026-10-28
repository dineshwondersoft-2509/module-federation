"use strict";
(self["webpackChunkhost"] = self["webpackChunkhost"] || []).push([["src_bootstrap_js"],{

/***/ "./src/App.jsx"
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var _components_RemoteWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/RemoteWrapper */ "./src/components/RemoteWrapper.jsx");
/* harmony import */ var _components_AngularRemoteWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AngularRemoteWrapper */ "./src/components/AngularRemoteWrapper.jsx");
/* harmony import */ var _pages_Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Dashboard */ "./src/pages/Dashboard.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");






const UsersApp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_users_UsersApp").then(() => (__webpack_require__.t(/*! users/UsersApp */ "webpack/container/remote/users/UsersApp", 23))));
const OrdersApp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_orders_OrdersApp").then(() => (__webpack_require__.t(/*! orders/OrdersApp */ "webpack/container/remote/orders/OrdersApp", 23))));
function App() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "shell",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("aside", {
        className: "sidebar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "brand",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            children: "MF Dashboard"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
            children: "Module Federation"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("nav", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
            to: "/",
            end: true,
            children: "Dashboard"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
            to: "/users",
            children: "Users"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
            to: "/orders",
            children: "Orders"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
            to: "/analytics",
            children: "Analytics (Angular)"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: "sidebar-note",
          children: ["Host :3000", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Users :3001", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Orders :3002", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "API :3003", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Analytics :3004 (Angular)"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "main",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("header", {
          className: "topbar",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            children: "Local JSON API at localhost:3003"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("main", {
          className: "content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
              path: "/",
              element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_pages_Dashboard__WEBPACK_IMPORTED_MODULE_4__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
              path: "/users/*",
              element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_RemoteWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
                name: "Users",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(UsersApp, {})
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
              path: "/orders/*",
              element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_RemoteWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
                name: "Orders",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(OrdersApp, {})
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
              path: "/analytics/*",
              element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_RemoteWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
                name: "Analytics (Angular)",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_AngularRemoteWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {})
              })
            })]
          })
        })]
      })]
    })
  });
}

/***/ },

/***/ "./src/bootstrap.js"
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.jsx");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");





const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('root'));
root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {})
}));

/***/ },

/***/ "./src/components/AngularRemoteWrapper.jsx"
/*!*************************************************!*\
  !*** ./src/components/AngularRemoteWrapper.jsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AngularRemoteWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");


function AngularRemoteWrapper({
  moduleName = './AnalyticsApp'
}) {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let unmountFn = null;
    __webpack_require__.e(/*! import() */ "webpack_container_remote_analytics_AnalyticsApp").then(() => (__webpack_require__.t(/*! analytics/AnalyticsApp */ "webpack/container/remote/analytics/AnalyticsApp", 23))).then(m => {
      // Handle moduleName if dynamic or default
      const mountFn = m.mount || m.default || m;
      if (containerRef.current && typeof mountFn === 'function') {
        const instance = mountFn(containerRef.current);
        unmountFn = instance?.destroy || instance?.unmount;
      }
    }).catch(err => {
      console.error('Failed to load Angular remote:', err);
    });
    return () => {
      if (typeof unmountFn === 'function') {
        try {
          unmountFn();
        } catch (e) {}
      }
    };
  }, [moduleName]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ref: containerRef,
    style: {
      width: '100%'
    }
  });
}

/***/ },

/***/ "./src/components/AngularWidgetWrapper.jsx"
/*!*************************************************!*\
  !*** ./src/components/AngularWidgetWrapper.jsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AngularWidgetWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");


function AngularWidgetWrapper({
  widgetName
}) {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let unmountFn = null;
    const loadWidget = async () => {
      try {
        let m;
        if (widgetName === 'RevenueChart') {
          m = await __webpack_require__.e(/*! import() */ "webpack_container_remote_analytics_AnalyticsRevenueChart").then(() => (__webpack_require__.t(/*! analytics/AnalyticsRevenueChart */ "webpack/container/remote/analytics/AnalyticsRevenueChart", 23)));
        } else if (widgetName === 'UserMetrics') {
          m = await __webpack_require__.e(/*! import() */ "webpack_container_remote_analytics_AnalyticsUserMetrics").then(() => (__webpack_require__.t(/*! analytics/AnalyticsUserMetrics */ "webpack/container/remote/analytics/AnalyticsUserMetrics", 23)));
        } else if (widgetName === 'RealtimeWidget') {
          m = await __webpack_require__.e(/*! import() */ "webpack_container_remote_analytics_AnalyticsRealtimeWidget").then(() => (__webpack_require__.t(/*! analytics/AnalyticsRealtimeWidget */ "webpack/container/remote/analytics/AnalyticsRealtimeWidget", 23)));
        }
        const mountFn = m?.mountRevenueChart || m?.mountUserMetrics || m?.mountRealtimeWidget || m?.default || m;
        if (containerRef.current && typeof mountFn === 'function') {
          const instance = mountFn(containerRef.current);
          unmountFn = instance?.destroy || instance?.unmount;
        }
      } catch (err) {
        console.error(`Error loading Angular widget ${widgetName}:`, err);
      }
    };
    loadWidget();
    return () => {
      if (typeof unmountFn === 'function') {
        try {
          unmountFn();
        } catch (e) {}
      }
    };
  }, [widgetName]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ref: containerRef,
    style: {
      width: '100%'
    }
  });
}

/***/ },

/***/ "./src/components/ErrorBoundary.jsx"
/*!******************************************!*\
  !*** ./src/components/ErrorBoundary.jsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");


class ErrorBoundary extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  render() {
    if (this.state.error) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "remote-error",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
          children: [this.props.name, " failed to load"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "The remote is fetched at runtime. Start it on its port, then refresh."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "muted",
          children: this.state.error.message
        })]
      });
    }
    return this.props.children;
  }
}

/***/ },

/***/ "./src/components/RemoteWrapper.jsx"
/*!******************************************!*\
  !*** ./src/components/RemoteWrapper.jsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RemoteWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorBoundary */ "./src/components/ErrorBoundary.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");



function RemoteWrapper({
  name,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
        className: "muted",
        children: [name, " is loading\u2026"]
      }),
      children: children
    })
  });
}

/***/ },

/***/ "./src/pages/Dashboard.jsx"
/*!*********************************!*\
  !*** ./src/pages/Dashboard.jsx ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AngularWidgetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AngularWidgetWrapper */ "./src/components/AngularWidgetWrapper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");



const UserStats = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_users_UserStats").then(() => (__webpack_require__.t(/*! users/UserStats */ "webpack/container/remote/users/UserStats", 23))));
const UserProfileCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_users_UserProfileCard").then(() => (__webpack_require__.t(/*! users/UserProfileCard */ "webpack/container/remote/users/UserProfileCard", 23))));
const UserActivityLog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_users_UserActivityLog").then(() => (__webpack_require__.t(/*! users/UserActivityLog */ "webpack/container/remote/users/UserActivityLog", 23))));
const OrderSummaryWidget = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_orders_OrderSummaryWidget").then(() => (__webpack_require__.t(/*! orders/OrderSummaryWidget */ "webpack/container/remote/orders/OrderSummaryWidget", 23))));
const RecentOrdersTable = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_orders_RecentOrdersTable").then(() => (__webpack_require__.t(/*! orders/RecentOrdersTable */ "webpack/container/remote/orders/RecentOrdersTable", 23))));
const OrderTracker = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_orders_OrderTracker").then(() => (__webpack_require__.t(/*! orders/OrderTracker */ "webpack/container/remote/orders/OrderTracker", 23))));
function Dashboard() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "mfe-page host-home",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "mfe-heading",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
        children: "Unified Multi-Framework Dashboard"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
        children: ["Host App (:3000) orchestrating remote components from ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
          children: "Users (React :3001)"
        }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
          children: "Orders (React :3002)"
        }), ", and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
          children: "Analytics (Angular 17 :3004)"
        }), "."]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '16px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            padding: '16px',
            background: '#fff',
            borderRadius: '12px'
          },
          children: "Loading User Stats..."
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(UserStats, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            padding: '16px',
            background: '#fff',
            borderRadius: '12px'
          },
          children: "Loading Order Summary..."
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(OrderSummaryWidget, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_AngularWidgetWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
        widgetName: "RealtimeWidget"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '16px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: "Loading User Profile..."
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(UserProfileCard, {
          userId: 1
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: "Loading User Activity..."
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(UserActivityLog, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: "Loading Order Tracker..."
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(OrderTracker, {
          orderId: 101
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '16px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: "Loading Recent Orders..."
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RecentOrdersTable, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_AngularWidgetWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
        widgetName: "RevenueChart"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_AngularWidgetWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
        widgetName: "UserMetrics"
      })]
    })]
  });
}

/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \***************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --bg: #f4f6fb;
  --card: #ffffff;
  --text: #0f172a;
  --muted: #64748b;
  --border: #e2e8f0;
  --accent: #4f46e5;
  --sidebar: #1e293b;
  --sidebar-text: #cbd5e1;
  --success: #16a34a;
  --danger: #dc2626;
}

* {
  box-sizing: border-box;
}

html,
body,
#root {
  margin: 0;
  height: 100%;
}

body {
  font-family: "Segoe UI", system-ui, sans-serif;
  color: var(--text);
  background: var(--bg);
}

.shell {
  display: flex;
  min-height: 100%;
}

.sidebar {
  width: 220px;
  background: var(--sidebar);
  color: #fff;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.brand span {
  display: block;
  font-weight: 700;
  font-size: 16px;
}

.brand small {
  color: var(--sidebar-text);
  font-size: 12px;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.sidebar a {
  color: var(--sidebar-text);
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 14px;
}

.sidebar a:hover,
.sidebar a.active {
  background: #334155;
  color: #fff;
}

.sidebar-note {
  margin-top: auto;
  color: #94a3b8;
  font-size: 12px;
  line-height: 1.6;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.topbar {
  background: var(--card);
  border-bottom: 1px solid var(--border);
  padding: 12px 24px;
  color: var(--muted);
  font-size: 13px;
}

.content {
  flex: 1;
}

.mfe-page {
  padding: 24px;
}

.host-home {
  padding: 24px;
}

.mfe-heading h1 {
  margin: 0 0 4px;
  font-size: 24px;
}

.mfe-heading p {
  margin: 0 0 20px;
  color: var(--muted);
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}

.stat-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px 18px;
  color: inherit;
  text-decoration: none;
  display: block;
}

a.stat-card:hover {
  border-color: var(--accent);
}

.stat-card span {
  color: var(--muted);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.stat-card strong {
  display: block;
  margin-top: 8px;
  font-size: 28px;
}

.stat-card em {
  display: block;
  margin-top: 8px;
  font-style: normal;
  color: var(--accent);
  font-size: 13px;
  font-weight: 600;
}

.info-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 18px 20px;
}

.info-card h2 {
  margin: 0 0 8px;
  font-size: 16px;
}

.info-card ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.7;
}

.info-card code {
  font-size: 13px;
  background: #f1f5f9;
  padding: 1px 5px;
  border-radius: 4px;
  color: var(--text);
}

.muted {
  color: var(--muted);
  padding: 24px;
}

.error-text {
  color: var(--danger);
  padding: 24px;
}

.remote-error {
  margin: 24px;
  padding: 20px;
  border: 1px solid #fecaca;
  background: #fef2f2;
  border-radius: 10px;
}

.remote-error h2 {
  margin: 0 0 8px;
  font-size: 18px;
}

.remote-error p {
  margin: 0 0 8px;
}

@media (max-width: 720px) {
  .shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  .sidebar-note {
    display: none;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;;EAGE,SAAS;EACT,YAAY;AACd;;AAEA;EACE,8CAA8C;EAC9C,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,0BAA0B;EAC1B,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,0BAA0B;EAC1B,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,sCAAsC;EACtC,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,+BAA+B;EAC/B,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EACd,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,+BAA+B;EAC/B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;IACE,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,mBAAmB;IACnB,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,aAAa;EACf;AACF","sourcesContent":[":root {\r\n  --bg: #f4f6fb;\r\n  --card: #ffffff;\r\n  --text: #0f172a;\r\n  --muted: #64748b;\r\n  --border: #e2e8f0;\r\n  --accent: #4f46e5;\r\n  --sidebar: #1e293b;\r\n  --sidebar-text: #cbd5e1;\r\n  --success: #16a34a;\r\n  --danger: #dc2626;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody,\r\n#root {\r\n  margin: 0;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: \"Segoe UI\", system-ui, sans-serif;\r\n  color: var(--text);\r\n  background: var(--bg);\r\n}\r\n\r\n.shell {\r\n  display: flex;\r\n  min-height: 100%;\r\n}\r\n\r\n.sidebar {\r\n  width: 220px;\r\n  background: var(--sidebar);\r\n  color: #fff;\r\n  padding: 20px 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 24px;\r\n}\r\n\r\n.brand span {\r\n  display: block;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n}\r\n\r\n.brand small {\r\n  color: var(--sidebar-text);\r\n  font-size: 12px;\r\n}\r\n\r\n.sidebar nav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n}\r\n\r\n.sidebar a {\r\n  color: var(--sidebar-text);\r\n  text-decoration: none;\r\n  padding: 8px 10px;\r\n  border-radius: 8px;\r\n  font-size: 14px;\r\n}\r\n\r\n.sidebar a:hover,\r\n.sidebar a.active {\r\n  background: #334155;\r\n  color: #fff;\r\n}\r\n\r\n.sidebar-note {\r\n  margin-top: auto;\r\n  color: #94a3b8;\r\n  font-size: 12px;\r\n  line-height: 1.6;\r\n}\r\n\r\n.main {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n}\r\n\r\n.topbar {\r\n  background: var(--card);\r\n  border-bottom: 1px solid var(--border);\r\n  padding: 12px 24px;\r\n  color: var(--muted);\r\n  font-size: 13px;\r\n}\r\n\r\n.content {\r\n  flex: 1;\r\n}\r\n\r\n.mfe-page {\r\n  padding: 24px;\r\n}\r\n\r\n.host-home {\r\n  padding: 24px;\r\n}\r\n\r\n.mfe-heading h1 {\r\n  margin: 0 0 4px;\r\n  font-size: 24px;\r\n}\r\n\r\n.mfe-heading p {\r\n  margin: 0 0 20px;\r\n  color: var(--muted);\r\n}\r\n\r\n.stat-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\r\n  gap: 16px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.stat-card {\r\n  background: var(--card);\r\n  border: 1px solid var(--border);\r\n  border-radius: 10px;\r\n  padding: 16px 18px;\r\n  color: inherit;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\na.stat-card:hover {\r\n  border-color: var(--accent);\r\n}\r\n\r\n.stat-card span {\r\n  color: var(--muted);\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.04em;\r\n}\r\n\r\n.stat-card strong {\r\n  display: block;\r\n  margin-top: 8px;\r\n  font-size: 28px;\r\n}\r\n\r\n.stat-card em {\r\n  display: block;\r\n  margin-top: 8px;\r\n  font-style: normal;\r\n  color: var(--accent);\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n}\r\n\r\n.info-card {\r\n  background: var(--card);\r\n  border: 1px solid var(--border);\r\n  border-radius: 10px;\r\n  padding: 18px 20px;\r\n}\r\n\r\n.info-card h2 {\r\n  margin: 0 0 8px;\r\n  font-size: 16px;\r\n}\r\n\r\n.info-card ul {\r\n  margin: 0;\r\n  padding-left: 18px;\r\n  color: var(--muted);\r\n  line-height: 1.7;\r\n}\r\n\r\n.info-card code {\r\n  font-size: 13px;\r\n  background: #f1f5f9;\r\n  padding: 1px 5px;\r\n  border-radius: 4px;\r\n  color: var(--text);\r\n}\r\n\r\n.muted {\r\n  color: var(--muted);\r\n  padding: 24px;\r\n}\r\n\r\n.error-text {\r\n  color: var(--danger);\r\n  padding: 24px;\r\n}\r\n\r\n.remote-error {\r\n  margin: 24px;\r\n  padding: 20px;\r\n  border: 1px solid #fecaca;\r\n  background: #fef2f2;\r\n  border-radius: 10px;\r\n}\r\n\r\n.remote-error h2 {\r\n  margin: 0 0 8px;\r\n  font-size: 18px;\r\n}\r\n\r\n.remote-error p {\r\n  margin: 0 0 8px;\r\n}\r\n\r\n@media (max-width: 720px) {\r\n  .shell {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .sidebar {\r\n    width: 100%;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n  }\r\n\r\n  .sidebar-note {\r\n    display: none;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "../node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }

}]);
//# sourceMappingURL=src_bootstrap_js.js.map