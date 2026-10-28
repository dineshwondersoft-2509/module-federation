"use strict";
(self["webpackChunkanalytics"] = self["webpackChunkanalytics"] || []).push([["src_mountUserMetrics_ts"],{

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

/***/ "./src/mountUserMetrics.ts"
/*!*********************************!*\
  !*** ./src/mountUserMetrics.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsUserMetricsComponent: () => (/* binding */ AnalyticsUserMetricsComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   mountUserMetrics: () => (/* binding */ mountUserMetrics)
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





let AnalyticsUserMetricsComponent = class AnalyticsUserMetricsComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.roles = [];
        this.loading = true;
    }
    ngOnInit() {
        const apiBase = (0,_app_apiBase__WEBPACK_IMPORTED_MODULE_4__.resolveApiBase)();
        fetch(`${apiBase}/users`)
            .then((res) => res.json())
            .then((users) => {
            const map = {};
            users.forEach((u) => {
                map[u.role] = (map[u.role] || 0) + 1;
            });
            this.roles = Object.keys(map).map((name) => ({ name, count: name ? map[name] : 0 }));
            this.loading = false;
            this.cdr.detectChanges();
        })
            .catch((err) => console.error('UserMetrics error:', err));
    }
};
AnalyticsUserMetricsComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-analytics-user-metrics',
        standalone: true,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
        template: `
    <div style="padding: 16px; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; font-family: sans-serif;">
      <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #1e293b;">👥 User Role Metrics (Angular Remote)</h3>
      <div *ngIf="loading" style="color: #64748b; font-size: 13px;">Loading User Metrics...</div>
      <div *ngIf="!loading" style="display: flex; flex-direction: column; gap: 8px;">
        <div *ngFor="let role of roles" style="display: flex; justify-content: space-between; align-items: center; padding: 8px; background: #f8fafc; border-radius: 6px; font-size: 13px;">
          <span><strong>{{ role.name }}</strong></span>
          <span style="background: #e2e8f0; padding: 2px 8px; border-radius: 10px; font-weight: 600;">{{ role.count }} users</span>
        </div>
      </div>
    </div>
  `,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef) === "function" ? _a : Object])
], AnalyticsUserMetricsComponent);

function mountUserMetrics(container) {
    container.innerHTML = '<app-analytics-user-metrics></app-analytics-user-metrics>';
    let appRef = null;
    (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(AnalyticsUserMetricsComponent)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mountUserMetrics);


/***/ }

}]);
//# sourceMappingURL=src_mountUserMetrics_ts.js.map