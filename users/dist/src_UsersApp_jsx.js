"use strict";
(self["webpackChunkusers"] = self["webpackChunkusers"] || []).push([["src_UsersApp_jsx"],{

/***/ "./src/UserDetail.jsx"
/*!****************************!*\
  !*** ./src/UserDetail.jsx ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserDetail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");




function formatMoney(amount) {
  return `$${Number(amount).toFixed(2)}`;
}
function UserDetail() {
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLoading(true);
    Promise.all([(0,_api__WEBPACK_IMPORTED_MODULE_2__.getUser)(id), (0,_api__WEBPACK_IMPORTED_MODULE_2__.getOrdersByUser)(id)]).then(([nextUser, nextOrders]) => {
      setUser(nextUser);
      setOrders(nextOrders);
    }).catch(err => setError(err.message)).finally(() => setLoading(false));
  }, [id]);
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: "muted",
      children: "Loading user\u2026"
    });
  }
  if (error || !user) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
      className: "error-text",
      children: ["Could not load this user. ", error || 'Not found.']
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: "..",
        className: "back-link",
        children: "\u2190 All users"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "detail-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        children: user.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("dl", {
        className: "detail-grid",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
            children: "Email"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dd", {
            children: user.email
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
            children: "Role"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dd", {
            children: user.role
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
            children: "Status"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dd", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: `badge badge-${user.status}`,
              children: user.status
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
            children: "City"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dd", {
            children: user.city
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
            children: "Joined"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dd", {
            children: user.joined
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
      className: "section-title",
      children: "Orders for this user"
    }), orders.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: "muted",
      children: "No orders."
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "table-wrap",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
              children: "ID"
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

/***/ "./src/UserList.jsx"
/*!**************************!*\
  !*** ./src/UserList.jsx ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");




function UserList() {
  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_api__WEBPACK_IMPORTED_MODULE_2__.getUsers)().then(setUsers).catch(err => setError(err.message)).finally(() => setLoading(false));
  }, []);
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: "muted",
      children: "Loading users\u2026"
    });
  }
  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
      className: "error-text",
      children: ["Could not load users. Is json-server running on port 3003? ", error]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "table-wrap",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: "Name"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: "Email"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: "Role"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: "Status"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: "City"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
        children: users.map(user => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
              to: `${user.id}`,
              children: user.name
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: user.email
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: user.role
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: `badge badge-${user.status}`,
              children: user.status
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: user.city
          })]
        }, user.id))
      })]
    })
  });
}

/***/ },

/***/ "./src/UsersApp.jsx"
/*!**************************!*\
  !*** ./src/UsersApp.jsx ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UsersApp)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var _UserList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList */ "./src/UserList.jsx");
/* harmony import */ var _UserDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserDetail */ "./src/UserDetail.jsx");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");





function UsersApp() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "mfe-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "mfe-heading",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
        children: "Users"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "Loaded from the Users remote. Data harinisri comes from json-server."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Routes, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
        index: true,
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_UserList__WEBPACK_IMPORTED_MODULE_1__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
        path: ":id",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_UserDetail__WEBPACK_IMPORTED_MODULE_2__["default"], {})
      })]
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
/* harmony export */   getOrdersByUser: () => (/* binding */ getOrdersByUser),
/* harmony export */   getUser: () => (/* binding */ getUser),
/* harmony export */   getUsers: () => (/* binding */ getUsers)
/* harmony export */ });
/* harmony import */ var _apiBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiBase */ "./src/apiBase.js");

const API_BASE = (0,_apiBase__WEBPACK_IMPORTED_MODULE_0__.resolveApiBase)();
async function getJson(path) {
  const response = await fetch(`${API_BASE}${path}`);
  if (!response.ok) {
    throw new Error(`API ${path} failed (${response.status})`);
  }
  return response.json();
}
function getUsers() {
  return getJson('/users');
}
function getUser(id) {
  return getJson(`/users/${id}`);
}
function getOrdersByUser(userId) {
  return getJson(`/orders?userId=${userId}`);
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
  --inactive: #64748b;
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
  background: #312e81;
  color: #e0e7ff;
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

a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
}

a:hover {
  text-decoration: underline;
}

.badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
}

.badge-active,
.badge-paid {
  background: #dcfce7;
  color: var(--success);
}

.badge-inactive,
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

.back-link {
  font-size: 14px;
}

.detail-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 24px;
}

.detail-card h2 {
  margin: 0 0 16px;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px 24px;
  margin: 0;
}

.detail-grid dt {
  color: var(--muted);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.detail-grid dd {
  margin: 4px 0 0;
  font-size: 15px;
}

.section-title {
  margin: 0 0 12px;
  font-size: 16px;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;;EAGE,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,8CAA8C;EAC9C,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,+BAA+B;EAC/B,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,yBAAyB;AAC3B;;AAEA;;EAEE,gBAAgB;EAChB,kBAAkB;EAClB,sCAAsC;EACtC,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,oBAAoB;EACpB,eAAe;EACf,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA;;EAEE,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;;EAEE,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,+BAA+B;EAC/B,mBAAmB;EACnB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,cAAc;EACd,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB","sourcesContent":[":root {\r\n  --bg: #f4f6fb;\r\n  --card: #ffffff;\r\n  --text: #0f172a;\r\n  --muted: #64748b;\r\n  --border: #e2e8f0;\r\n  --accent: #4f46e5;\r\n  --success: #16a34a;\r\n  --warning: #d97706;\r\n  --danger: #dc2626;\r\n  --inactive: #64748b;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody,\r\n#root {\r\n  margin: 0;\r\n  min-height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: \"Segoe UI\", system-ui, sans-serif;\r\n  color: var(--text);\r\n  background: var(--bg);\r\n}\r\n\r\n.standalone-shell {\r\n  padding: 0 0 32px;\r\n}\r\n\r\n.standalone-banner {\r\n  background: #312e81;\r\n  color: #e0e7ff;\r\n  padding: 10px 20px;\r\n  font-size: 13px;\r\n  letter-spacing: 0.02em;\r\n}\r\n\r\n.mfe-page {\r\n  padding: 24px;\r\n}\r\n\r\n.mfe-heading h1 {\r\n  margin: 0 0 4px;\r\n  font-size: 24px;\r\n}\r\n\r\n.mfe-heading p {\r\n  margin: 0 0 20px;\r\n  color: var(--muted);\r\n}\r\n\r\n.table-wrap {\r\n  background: var(--card);\r\n  border: 1px solid var(--border);\r\n  border-radius: 10px;\r\n  overflow: auto;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n}\r\n\r\nth,\r\ntd {\r\n  text-align: left;\r\n  padding: 12px 16px;\r\n  border-bottom: 1px solid var(--border);\r\n  font-size: 14px;\r\n}\r\n\r\nth {\r\n  background: #f8fafc;\r\n  color: var(--muted);\r\n  font-weight: 600;\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.04em;\r\n}\r\n\r\ntr:last-child td {\r\n  border-bottom: none;\r\n}\r\n\r\na {\r\n  color: var(--accent);\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.badge {\r\n  display: inline-block;\r\n  padding: 2px 8px;\r\n  border-radius: 999px;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.badge-active,\r\n.badge-paid {\r\n  background: #dcfce7;\r\n  color: var(--success);\r\n}\r\n\r\n.badge-inactive,\r\n.badge-refunded {\r\n  background: #fee2e2;\r\n  color: var(--danger);\r\n}\r\n\r\n.badge-pending {\r\n  background: #ffedd5;\r\n  color: var(--warning);\r\n}\r\n\r\n.muted {\r\n  color: var(--muted);\r\n}\r\n\r\n.error-text {\r\n  color: var(--danger);\r\n}\r\n\r\n.back-link {\r\n  font-size: 14px;\r\n}\r\n\r\n.detail-card {\r\n  background: var(--card);\r\n  border: 1px solid var(--border);\r\n  border-radius: 10px;\r\n  padding: 20px;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.detail-card h2 {\r\n  margin: 0 0 16px;\r\n}\r\n\r\n.detail-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\r\n  gap: 12px 24px;\r\n  margin: 0;\r\n}\r\n\r\n.detail-grid dt {\r\n  color: var(--muted);\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.04em;\r\n}\r\n\r\n.detail-grid dd {\r\n  margin: 4px 0 0;\r\n  font-size: 15px;\r\n}\r\n\r\n.section-title {\r\n  margin: 0 0 12px;\r\n  font-size: 16px;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=src_UsersApp_jsx.js.map