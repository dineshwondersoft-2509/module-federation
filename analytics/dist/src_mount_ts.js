"use strict";
(self["webpackChunkanalytics"] = self["webpackChunkanalytics"] || []).push([["src_mount_ts"],{

/***/ "./src/app/analytics.component.ts"
/*!****************************************!*\
  !*** ./src/app/analytics.component.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsComponent: () => (/* binding */ AnalyticsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "webpack/sharing/consume/default/@angular/core/@angular/core");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "webpack/sharing/consume/default/@angular/common/@angular/common");
/* harmony import */ var _apiBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiBase */ "./src/app/apiBase.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;



let AnalyticsComponent = class AnalyticsComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.orders = [];
        this.users = [];
        this.loading = true;
        this.filterStatus = 'all';
        this.totalRevenue = 0;
        this.avgOrderValue = 0;
        this.activeUserCount = 0;
        this.activeUserPercentage = 0;
        this.paidOrderCount = 0;
        this.paidOrderPercentage = 0;
        this.productBreakdown = [];
        this.roleBreakdown = [];
    }
    ngOnInit() {
        this.fetchData();
    }
    ngAfterViewInit() {
        this.loadReactRemotes();
    }
    async loadReactRemotes() {
        try {
            // Dynamically load React remotes when Analytics acts as a Host
            // @ts-ignore
            const [{ default: UserStats }, { default: OrderSummaryWidget }, React, ReactDOM] = await Promise.all([
                // @ts-ignore
                __webpack_require__.e(/*! import() */ "webpack_container_remote_users_UserStats").then(() => (__webpack_require__.t(/*! users/UserStats */ "webpack/container/remote/users/UserStats", 23))),
                // @ts-ignore
                __webpack_require__.e(/*! import() */ "webpack_container_remote_orders_OrderSummaryWidget").then(() => (__webpack_require__.t(/*! orders/OrderSummaryWidget */ "webpack/container/remote/orders/OrderSummaryWidget", 23))),
                __webpack_require__.e(/*! import() */ "vendors-node_modules_react_index_js").then(() => (__webpack_require__.t(/*! react */ "../node_modules/react/index.js", 23))),
                Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react_index_js"), __webpack_require__.e("vendors-node_modules_react-dom_client_js")]).then(() => (__webpack_require__.t(/*! react-dom/client */ "../node_modules/react-dom/client.js", 19)))
            ]);
            if (this.userStatsContainer?.nativeElement) {
                const root = ReactDOM.createRoot(this.userStatsContainer.nativeElement);
                root.render(React.createElement(UserStats));
            }
            if (this.orderSummaryContainer?.nativeElement) {
                const root = ReactDOM.createRoot(this.orderSummaryContainer.nativeElement);
                root.render(React.createElement(OrderSummaryWidget));
            }
        }
        catch (err) {
            console.warn('Analytics Host: Error loading React remotes:', err);
        }
    }
    async fetchData() {
        const apiBase = (0,_apiBase__WEBPACK_IMPORTED_MODULE_2__.resolveApiBase)();
        try {
            const [ordersRes, usersRes] = await Promise.all([
                fetch(`${apiBase}/orders`),
                fetch(`${apiBase}/users`)
            ]);
            if (ordersRes.ok && usersRes.ok) {
                this.orders = await ordersRes.json();
                this.users = await usersRes.json();
                this.calculateMetrics();
            }
        }
        catch (err) {
            console.error('Error fetching analytics data:', err);
        }
        finally {
            this.loading = false;
            this.cdr.detectChanges();
        }
    }
    calculateMetrics() {
        const paidOrders = this.orders.filter(o => o.status === 'paid');
        this.totalRevenue = paidOrders.reduce((sum, o) => sum + o.amount, 0);
        this.avgOrderValue = this.orders.length > 0
            ? Math.round(this.orders.reduce((sum, o) => sum + o.amount, 0) / this.orders.length)
            : 0;
        this.activeUserCount = this.users.filter(u => u.status === 'active').length;
        this.activeUserPercentage = this.users.length > 0
            ? Math.round((this.activeUserCount / this.users.length) * 100)
            : 0;
        this.paidOrderCount = paidOrders.length;
        this.paidOrderPercentage = this.orders.length > 0
            ? Math.round((paidOrders.length / this.orders.length) * 100)
            : 0;
        const productMap = {};
        this.orders.forEach(o => {
            productMap[o.product] = (productMap[o.product] || 0) + o.amount;
        });
        const totalProductRev = Object.values(productMap).reduce((a, b) => a + b, 0) || 1;
        this.productBreakdown = Object.keys(productMap).map(name => ({
            name,
            revenue: productMap[name],
            percentage: Math.round((productMap[name] / totalProductRev) * 100)
        })).sort((a, b) => b.revenue - a.revenue);
        const roleMap = {};
        this.users.forEach(u => {
            roleMap[u.role] = (roleMap[u.role] || 0) + 1;
        });
        const totalUsers = this.users.length || 1;
        this.roleBreakdown = Object.keys(roleMap).map(role => ({
            role,
            count: roleMap[role],
            percentage: Math.round((roleMap[role] / totalUsers) * 100)
        }));
    }
    get filteredOrders() {
        if (this.filterStatus === 'all')
            return this.orders;
        return this.orders.filter(o => o.status === this.filterStatus);
    }
    setFilter(status) {
        this.filterStatus = status;
    }
    getUserName(userId) {
        const user = this.users.find(u => u.id === userId);
        return user ? user.name : `User #${userId}`;
    }
};
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('userStatsContainer', { static: false }),
    __metadata("design:type", typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef) === "function" ? _b : Object)
], AnalyticsComponent.prototype, "userStatsContainer", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('orderSummaryContainer', { static: false }),
    __metadata("design:type", typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef) === "function" ? _c : Object)
], AnalyticsComponent.prototype, "orderSummaryContainer", void 0);
AnalyticsComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
        selector: 'app-analytics-root',
        standalone: true,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
        template: `
    <div class="analytics-card">
      <div class="header-row">
        <div class="title-group">
          <h2>
            <span>Executive Analytics & Intelligence</span>
          </h2>
          <p>Real-time metrics rendered by Angular MFE (Acts as Remote & Host)</p>
        </div>
        <span class="badge-angular">Angular 17 (Remote & Host :3004)</span>
      </div>

      <div *ngIf="loading" class="loading-spinner">
        <span>Loading live analytics data...</span>
      </div>

      <div *ngIf="!loading">
        <!-- KPI Cards -->
        <div class="kpi-grid">
          <div class="kpi-card">
            <div class="kpi-label">Total Revenue</div>
            <div class="kpi-value">\${{ totalRevenue }}</div>
            <div class="kpi-sub">Across {{ orders.length }} total orders</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Active Users</div>
            <div class="kpi-value">{{ activeUserCount }} / {{ users.length }}</div>
            <div class="kpi-sub">{{ activeUserPercentage }}% active user rate</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Successful Payments</div>
            <div class="kpi-value">{{ paidOrderCount }}</div>
            <div class="kpi-sub">{{ paidOrderPercentage }}% fulfillment rate</div>
          </div>
        </div>

        <!-- Embedded React Remotes Section (Analytics acting as Host) -->
        <div class="chart-box" style="margin-top: 1rem; margin-bottom: 1.5rem; background: #faf5ff; border: 1px solid #e9d5ff;">
          <h3 style="color: #6b21a8; margin: 0 0 1rem 0;">🔮 React Micro-Frontend Remotes Consumed Inside Angular Host</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
            <div #userStatsContainer></div>
            <div #orderSummaryContainer></div>
          </div>
        </div>

        <!-- Charts Section -->
        <div class="charts-row">
          <!-- Product Revenue Breakdown -->
          <div class="chart-box">
            <h3>Revenue by Product Category</h3>
            <div class="bar-group">
              <div *ngFor="let p of productBreakdown; let i = index" class="bar-item">
                <div class="bar-info">
                  <span>{{ p.name }}</span>
                  <span>\${{ p.revenue }} ({{ p.percentage }}%)</span>
                </div>
                <div class="bar-track">
                  <div
                    class="bar-fill"
                    [class.bar-fill-red]="i % 5 === 0"
                    [class.bar-fill-blue]="i % 5 === 1"
                    [class.bar-fill-purple]="i % 5 === 2"
                    [class.bar-fill-emerald]="i % 5 === 3"
                    [class.bar-fill-amber]="i % 5 === 4"
                    [style.width.%]="p.percentage"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- User Roles Breakdown -->
          <div class="chart-box">
            <h3>User Distribution by Role</h3>
            <div class="bar-group">
              <div *ngFor="let r of roleBreakdown" class="bar-item">
                <div class="bar-info">
                  <span>{{ r.role }}</span>
                  <span>{{ r.count }} users ({{ r.percentage }}%)</span>
                </div>
                <div class="bar-track">
                  <div
                    class="bar-fill bar-fill-blue"
                    [style.width.%]="r.percentage"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Filterable Order Analytics Table -->
        <div class="chart-box">
          <div class="header-row" style="margin-bottom: 1rem;">
            <h3 style="margin: 0;">Recent Transactions Stream</h3>
            <div class="filter-pills">
              <button
                class="pill-btn"
                [class.active]="filterStatus === 'all'"
                (click)="setFilter('all')"
              >
                All ({{ orders.length }})
              </button>
              <button
                class="pill-btn"
                [class.active]="filterStatus === 'paid'"
                (click)="setFilter('paid')"
              >
                Paid
              </button>
              <button
                class="pill-btn"
                [class.active]="filterStatus === 'pending'"
                (click)="setFilter('pending')"
              >
                Pending
              </button>
              <button
                class="pill-btn"
                [class.active]="filterStatus === 'refunded'"
                (click)="setFilter('refunded')"
              >
                Refunded
              </button>
            </div>
          </div>

          <table class="data-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let o of filteredOrders">
                <td>#{{ o.id }}</td>
                <td>{{ getUserName(o.userId) }}</td>
                <td>{{ o.product }}</td>
                <td>{{ o.date }}</td>
                <td>
                  <span
                    class="status-badge"
                    [class.status-paid]="o.status === 'paid'"
                    [class.status-pending]="o.status === 'pending'"
                    [class.status-refunded]="o.status === 'refunded'"
                  >
                    {{ o.status }}
                  </span>
                </td>
                <td><strong>\${{ o.amount }}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
        styleUrls: ['./analytics.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef) === "function" ? _a : Object])
], AnalyticsComponent);



/***/ },

/***/ "./src/app/apiBase.ts"
/*!****************************!*\
  !*** ./src/app/apiBase.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveApiBase: () => (/* binding */ resolveApiBase)
/* harmony export */ });
function resolveApiBase() {
    const { protocol, hostname, port } = window.location;
    const viaGateway = protocol === 'https:' || port === '8080' || port === '443' || port === '';
    if (viaGateway) {
        const originPort = port ? `:${port}` : '';
        return `${protocol}//${hostname}${originPort}/api`;
    }
    return `${protocol}//${hostname}:3003`;
}


/***/ },

/***/ "./src/mount.ts"
/*!**********************!*\
  !*** ./src/mount.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   mount: () => (/* binding */ mount)
/* harmony export */ });
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ "webpack/sharing/consume/default/zone.js/zone.js");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "webpack/sharing/consume/default/@angular/platform-browser/@angular/platform-browser");
/* harmony import */ var _app_analytics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/analytics.component */ "./src/app/analytics.component.ts");



function mount(container) {
    container.innerHTML = '<app-analytics-root></app-analytics-root>';
    let appRef = null;
    (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.bootstrapApplication)(_app_analytics_component__WEBPACK_IMPORTED_MODULE_2__.AnalyticsComponent)
        .then((ref) => {
        appRef = ref;
    })
        .catch((err) => console.error('Error bootstrapping Angular analytics app:', err));
    return {
        destroy: () => {
            if (appRef && typeof appRef.destroy === 'function') {
                try {
                    appRef.destroy();
                }
                catch (e) {
                    console.warn('Error destroying Angular application:', e);
                }
            }
        },
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mount);


/***/ }

}]);
//# sourceMappingURL=src_mount_ts.js.map