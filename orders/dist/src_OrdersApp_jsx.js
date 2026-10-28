"use strict";
(self["webpackChunkorders"] = self["webpackChunkorders"] || []).push([["src_OrdersApp_jsx"],{

/***/ "./src/OrdersApp.jsx"
/*!***************************!*\
  !*** ./src/OrdersApp.jsx ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrdersApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");




function formatMoney(amount) {
  return `$${Number(amount).toFixed(2)}`;
}
function OrdersApp() {
  const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    Promise.all([(0,_api__WEBPACK_IMPORTED_MODULE_1__.getOrders)(), (0,_api__WEBPACK_IMPORTED_MODULE_1__.getUsers)()]).then(([nextOrders, nextUsers]) => {
      setOrders(nextOrders);
      setUsers(nextUsers);
    }).catch(err => setError(err.message)).finally(() => setLoading(false));
  }, []);
  const userNames = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return Object.fromEntries(users.map(user => [user.id, user.name]));
  }, [users]);
  const stats = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const byStatus = {
      paid: 0,
      pending: 0,
      refunded: 0
    };
    let revenue = 0;
    orders.forEach(order => {
      byStatus[order.status] = (byStatus[order.status] || 0) + 1;
      if (order.status === 'paid') {
        revenue += Number(order.amount);
      }
    });
    const maxStatus = Math.max(...Object.values(byStatus), 1);
    return {
      byStatus,
      revenue,
      maxStatus,
      total: orders.length
    };
  }, [orders]);
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "mfe-page",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        className: "muted",
        children: "Loading orders\u2026"
      })
    });
  }
  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "mfe-page",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
        className: "error-text",
        children: ["Could not load orders. Is json-server running on port 3003? ", error]
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "mfe-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "mfe-heading",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
        children: "Orders"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        children: "Loaded from the Orders remote. Totals use paid orders only."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "stat-grid",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
        className: "stat-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          children: "Total orders"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: stats.total
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
        className: "stat-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          children: "Paid revenue"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: formatMoney(stats.revenue)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
        className: "stat-card stat-wide",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          children: "Status breakdown"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
          className: "bar-list",
          children: Object.entries(stats.byStatus).map(([status, count]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "bar-label",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: `badge badge-${status}`,
                children: status
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                children: count
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "bar-track",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: `bar-fill bar-${status}`,
                style: {
                  width: `${count / stats.maxStatus * 100}%`
                }
              })
            })]
          }, status))
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "table-wrap",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
              children: "ID"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
              children: "Customer"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
              children: "Product"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
              children: "Amount"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
              children: "Status"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
              children: "Date"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
          children: orders.map(order => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
              children: ["#", order.id]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              children: userNames[order.userId] || `User ${order.userId}`
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              children: order.product
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              children: formatMoney(order.amount)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: `badge badge-${order.status}`,
                children: order.status
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              children: order.date
            })]
          }, order.id))
        })]
      })
    })]
  });
}

/***/ },

/***/ "./src/api.js"
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_BASE: () => (/* binding */ API_BASE),
/* harmony export */   getOrders: () => (/* binding */ getOrders),
/* harmony export */   getUsers: () => (/* binding */ getUsers)
/* harmony export */ });
/* harmony import */ var _apiBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiBase */ "./src/apiBase.js");

const API_BASE = (0,_apiBase__WEBPACK_IMPORTED_MODULE_0__.resolveApiBase)();
async function getOrders() {
  const response = await fetch(`${API_BASE}/orders`);
  if (!response.ok) {
    throw new Error(`API /orders failed (${response.status})`);
  }
  return response.json();
}
async function getUsers() {
  const response = await fetch(`${API_BASE}/users`);
  if (!response.ok) {
    throw new Error(`API /users failed (${response.status})`);
  }
  return response.json();
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
  --success: #16a34a;
  --warning: #d97706;
  --danger: #dc2626;
}

* {
  box-sizing: border-box;
}

html,
body,
#root {
  margin: 0;
  min-height: 100%;
}

body {
  font-family: "Segoe UI", system-ui, sans-serif;
  color: var(--text);
  background: var(--bg);
}

.standalone-shell {
  padding: 0 0 32px;
}

.standalone-banner {
  background: #0f766e;
  color: #ccfbf1;
  padding: 10px 20px;
  font-size: 13px;
  letter-spacing: 0.02em;
}

.mfe-page {
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

.stat-wide {
  grid-column: span 2;
}

.bar-list {
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.bar-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  font-size: 13px;
}

.bar-track {
  height: 8px;
  background: #f1f5f9;
  border-radius: 999px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: 999px;
}

.bar-paid {
  background: var(--success);
}

.bar-pending {
  background: var(--warning);
}

.bar-refunded {
  background: var(--danger);
}

.table-wrap {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  font-size: 14px;
}

th {
  background: #f8fafc;
  color: var(--muted);
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

tr:last-child td {
  border-bottom: none;
}

.badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
}

.badge-paid {
  background: #dcfce7;
  color: var(--success);
}

.badge-refunded {
  background: #fee2e2;
  color: var(--danger);
}

.badge-pending {
  background: #ffedd5;
  color: var(--warning);
}

.muted {
  color: var(--muted);
}

.error-text {
  color: var(--danger);
}

@media (max-width: 700px) {
  .stat-wide {
    grid-column: span 1;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;;EAGE,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,8CAA8C;EAC9C,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,+BAA+B;EAC/B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,UAAU;EACV,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;EACvB,+BAA+B;EAC/B,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,yBAAyB;AAC3B;;AAEA;;EAEE,gBAAgB;EAChB,kBAAkB;EAClB,sCAAsC;EACtC,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,oBAAoB;EACpB,eAAe;EACf,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF","sourcesContent":[":root {\r\n  --bg: #f4f6fb;\r\n  --card: #ffffff;\r\n  --text: #0f172a;\r\n  --muted: #64748b;\r\n  --border: #e2e8f0;\r\n  --accent: #4f46e5;\r\n  --success: #16a34a;\r\n  --warning: #d97706;\r\n  --danger: #dc2626;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody,\r\n#root {\r\n  margin: 0;\r\n  min-height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: \"Segoe UI\", system-ui, sans-serif;\r\n  color: var(--text);\r\n  background: var(--bg);\r\n}\r\n\r\n.standalone-shell {\r\n  padding: 0 0 32px;\r\n}\r\n\r\n.standalone-banner {\r\n  background: #0f766e;\r\n  color: #ccfbf1;\r\n  padding: 10px 20px;\r\n  font-size: 13px;\r\n  letter-spacing: 0.02em;\r\n}\r\n\r\n.mfe-page {\r\n  padding: 24px;\r\n}\r\n\r\n.mfe-heading h1 {\r\n  margin: 0 0 4px;\r\n  font-size: 24px;\r\n}\r\n\r\n.mfe-heading p {\r\n  margin: 0 0 20px;\r\n  color: var(--muted);\r\n}\r\n\r\n.stat-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\r\n  gap: 16px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.stat-card {\r\n  background: var(--card);\r\n  border: 1px solid var(--border);\r\n  border-radius: 10px;\r\n  padding: 16px 18px;\r\n}\r\n\r\n.stat-card span {\r\n  color: var(--muted);\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.04em;\r\n}\r\n\r\n.stat-card strong {\r\n  display: block;\r\n  margin-top: 8px;\r\n  font-size: 28px;\r\n}\r\n\r\n.stat-wide {\r\n  grid-column: span 2;\r\n}\r\n\r\n.bar-list {\r\n  list-style: none;\r\n  margin: 12px 0 0;\r\n  padding: 0;\r\n  display: grid;\r\n  gap: 10px;\r\n}\r\n\r\n.bar-label {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 4px;\r\n  font-size: 13px;\r\n}\r\n\r\n.bar-track {\r\n  height: 8px;\r\n  background: #f1f5f9;\r\n  border-radius: 999px;\r\n  overflow: hidden;\r\n}\r\n\r\n.bar-fill {\r\n  height: 100%;\r\n  border-radius: 999px;\r\n}\r\n\r\n.bar-paid {\r\n  background: var(--success);\r\n}\r\n\r\n.bar-pending {\r\n  background: var(--warning);\r\n}\r\n\r\n.bar-refunded {\r\n  background: var(--danger);\r\n}\r\n\r\n.table-wrap {\r\n  background: var(--card);\r\n  border: 1px solid var(--border);\r\n  border-radius: 10px;\r\n  overflow: auto;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n}\r\n\r\nth,\r\ntd {\r\n  text-align: left;\r\n  padding: 12px 16px;\r\n  border-bottom: 1px solid var(--border);\r\n  font-size: 14px;\r\n}\r\n\r\nth {\r\n  background: #f8fafc;\r\n  color: var(--muted);\r\n  font-weight: 600;\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.04em;\r\n}\r\n\r\ntr:last-child td {\r\n  border-bottom: none;\r\n}\r\n\r\n.badge {\r\n  display: inline-block;\r\n  padding: 2px 8px;\r\n  border-radius: 999px;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.badge-paid {\r\n  background: #dcfce7;\r\n  color: var(--success);\r\n}\r\n\r\n.badge-refunded {\r\n  background: #fee2e2;\r\n  color: var(--danger);\r\n}\r\n\r\n.badge-pending {\r\n  background: #ffedd5;\r\n  color: var(--warning);\r\n}\r\n\r\n.muted {\r\n  color: var(--muted);\r\n}\r\n\r\n.error-text {\r\n  color: var(--danger);\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .stat-wide {\r\n    grid-column: span 1;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/runtime/api.js"
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

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


/***/ },

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }

}]);
//# sourceMappingURL=src_OrdersApp_jsx.js.map