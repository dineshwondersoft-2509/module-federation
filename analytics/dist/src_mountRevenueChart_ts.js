"use strict";
(self["webpackChunkanalytics"] = self["webpackChunkanalytics"] || []).push([["src_mountRevenueChart_ts"],{

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

/***/ "./src/mountRevenueChart.ts"
/*!**********************************!*\
  !*** ./src/mountRevenueChart.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsRevenueChartComponent: () => (/* binding */ AnalyticsRevenueChartComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   mountRevenueChart: () => (/* binding */ mountRevenueChart)
/* harmony export */ });
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ "webpack/sharing/consume/default/zone.js/zone.js");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "webpack/sharing/consume/default/@angular/core/@angular/core");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "webpack/sharing/consume/default/@angular/common/@angular/common");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "webpack/sharing/consume/default/@angular/platform-browser/@angular/platform-browser");
/* harmony import */ var _app_apiBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/apiBase */ "./src/app/apiBase.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;





let AnalyticsRevenueChartComponent = class AnalyticsRevenueChartComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.categories = [];
        this.loading = true;
    }
    ngOnInit() {
        const apiBase = (0,_app_apiBase__WEBPACK_IMPORTED_MODULE_4__.resolveApiBase)();
        fetch(`${apiBase}/orders`)
            .then((res) => res.json())
            .then((orders) => {
            const map = {};
            orders.forEach((o) => {
                map[o.product] = (map[o.product] || 0) + o.amount;
            });
            const total = Object.values(map).reduce((a, b) => a + b, 0) || 1;
            this.categories = Object.keys(map).map((name) => ({
                name,
                revenue: map[name],
                percent: Math.round((map[name] / total) * 100),
            }));
            this.loading = false;
            this.cdr.detectChanges();
        })
            .catch((err) => console.error('RevenueChart error:', err));
    }
};
AnalyticsRevenueChartComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-analytics-revenue-chart',
        standalone: true,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
        template: `
    <div style="padding: 16px; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; font-family: sans-serif;">
      <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #1e293b;">📊 Revenue by Category (Angular Remote)</h3>
      <div *ngIf="loading" style="color: #64748b; font-size: 13px;">Loading Revenue Chart...</div>
      <div *ngIf="!loading" style="display: flex; flex-direction: column; gap: 8px;">
        <div *ngFor="let item of categories" style="display: flex; flex-direction: column; gap: 4px;">
          <div style="display: flex; justify-content: space-between; font-size: 13px;">
            <span>{{ item.name }}</span>
            <strong>\${{ item.revenue }} ({{ item.percent }}%)</strong>
          </div>
          <div style="width: 100%; height: 8px; background: #f1f5f9; border-radius: 4px; overflow: hidden;">
            <div [style.width.%]="item.percent" style="height: 100%; background: #3b82f6; border-radius: 4px;"></div>
          </div>
        </div>
      </div>
    </div>
  `,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef) === "function" ? _a : Object])
], AnalyticsRevenueChartComponent);

function mountRevenueChart(container) {
    container.innerHTML = '<app-analytics-revenue-chart></app-analytics-revenue-chart>';
    let appRef = null;
    (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(AnalyticsRevenueChartComponent)
        .then((ref) => {
        appRef = ref;
    })
        .catch((err) => console.error('Bootstrap error:', err));
    return {
        destroy: () => {
            if (appRef && typeof appRef.destroy === 'function') {
                try {
                    appRef.destroy();
                }
                catch (e) { }
            }
            container.innerHTML = '';
        },
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mountRevenueChart);


/***/ }

}]);
//# sourceMappingURL=src_mountRevenueChart_ts.js.map