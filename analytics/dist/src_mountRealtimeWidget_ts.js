"use strict";
(self["webpackChunkanalytics"] = self["webpackChunkanalytics"] || []).push([["src_mountRealtimeWidget_ts"],{

/***/ "./src/mountRealtimeWidget.ts"
/*!************************************!*\
  !*** ./src/mountRealtimeWidget.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsRealtimeWidgetComponent: () => (/* binding */ AnalyticsRealtimeWidgetComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   mountRealtimeWidget: () => (/* binding */ mountRealtimeWidget)
/* harmony export */ });
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ "webpack/sharing/consume/default/zone.js/zone.js");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "webpack/sharing/consume/default/@angular/core/@angular/core");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "webpack/sharing/consume/default/@angular/common/@angular/common");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "webpack/sharing/consume/default/@angular/platform-browser/@angular/platform-browser");
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




let AnalyticsRealtimeWidgetComponent = class AnalyticsRealtimeWidgetComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.activeRequests = 42;
        this.health = 99;
    }
    ngOnInit() {
        this.timer = setInterval(() => {
            this.activeRequests = Math.floor(Math.random() * 30) + 30;
            this.health = Math.floor(Math.random() * 2) + 98;
            this.cdr.detectChanges();
        }, 2000);
    }
    ngOnDestroy() {
        if (this.timer)
            clearInterval(this.timer);
    }
};
AnalyticsRealtimeWidgetComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-analytics-realtime-widget',
        standalone: true,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
        template: `
    <div style="padding: 16px; background: #0f172a; color: #ffffff; border-radius: 12px; font-family: sans-serif;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <h4 style="margin: 0; font-size: 14px; color: #38bdf8;">🟢 Live Realtime Traffic (Angular)</h4>
        <span style="font-size: 10px; background: #0284c7; padding: 2px 6px; border-radius: 4px;">ACTIVE</span>
      </div>
      <div style="font-size: 24px; font-weight: bold;">{{ activeRequests }} req/s</div>
      <div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">System Health: {{ health }}% • Uptime 99.9%</div>
    </div>
  `,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef) === "function" ? _a : Object])
], AnalyticsRealtimeWidgetComponent);

function mountRealtimeWidget(container) {
    container.innerHTML = '<app-analytics-realtime-widget></app-analytics-realtime-widget>';
    let appRef = null;
    (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(AnalyticsRealtimeWidgetComponent)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mountRealtimeWidget);


/***/ }

}]);
//# sourceMappingURL=src_mountRealtimeWidget_ts.js.map