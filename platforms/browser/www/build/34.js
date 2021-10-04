webpackJsonp([34],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EodChartPageModule", function() { return EodChartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eod_chart__ = __webpack_require__(500);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EodChartPageModule = /** @class */ (function () {
    function EodChartPageModule() {
    }
    EodChartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__eod_chart__["a" /* EodChartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__eod_chart__["a" /* EodChartPage */]),
            ],
        })
    ], EodChartPageModule);
    return EodChartPageModule;
}());

//# sourceMappingURL=eod-chart.module.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EodChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EodChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EodChartPage = /** @class */ (function () {
    function EodChartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EodChartPage.prototype.EodchartSelected = function (item) {
        if (item == 1) {
            this.navCtrl.push('Charts2Page', item);
        }
        else if (item == 2) {
            this.navCtrl.push('Charts2Page', item);
        }
        else if (item == 3) {
            this.navCtrl.push('Charts2Page', item);
        }
    };
    EodChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eod-chart',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\eod-chart\eod-chart.html"*/'<!--\n\n  Generated template for the EodChartPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>EOD Chart</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n  <ion-card class="ion-cards" (click)="EodchartSelected(1)">\n\n    <ion-item >\n\n      <!--<ion-icon name="date"></ion-icon>-->\n\n      <!--<fa-icon style="color: #757575;font-size: 26px;" class="fa-icons icons-side" [name]="p.icon" item-left small></fa-icon>-->\n\n      <img src="assets/imgs/bar_chart.png" style="background-color: #0bca00" class="fa-icons" item-start>\n\n      <!--<fa-icon color="primary" name="bar-chart" class="fa-icons" style="background-color: #0bca00" item-start></fa-icon>-->\n\n      <h4 style="font-weight: bold; color:#ed3954 ">NSE CASH EOD Signal</h4>\n\n      <p>Refresh Every Day</p>\n\n      <!--<fa-icon class="fa-icons"  item-right primary name="rupee"></fa-icon><label item-right>100</label>-->\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n  <ion-card class="ion-cards" (click)="EodchartSelected(2)">\n\n    <ion-item>\n\n      <!--<ion-icon name="date"></ion-icon>-->\n\n      <!--<fa-icon color="primary" name="line-chart" class="fa-icons" style="background-color: #ca3757;" item-start></fa-icon>-->\n\n      <img src="assets/imgs/line_chart.png" style="background-color: #ca3757" class="fa-icons" item-start>\n\n      <h4 style="font-weight: bold; color:#ed3954 ">NSE FO EOD Signal</h4>\n\n      <p>Refresh Every Day</p>\n\n      <!--<fa-icon class="fa-icons"  item-right primary name="rupee"></fa-icon><label item-right>100</label>-->\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n  <ion-card class="ion-cards" (click)="EodchartSelected(3)">\n\n\n\n    <ion-item>\n\n      <!--<ion-icon name="date"></ion-icon>-->\n\n      <img src="assets/imgs/eod_chart_icon.png" style="background-color: #ed3954" class="fa-icons" item-start>\n\n      <!--<fa-icon color="primary" name="signal" class="fa-icons" style="background-color: #ed3954" item-start></fa-icon>-->\n\n      <h4 style="font-weight: bold; color:#ed3954 ">MCX EOD Signal</h4>\n\n      <p>Refresh Every Day</p>\n\n      <!--<fa-icon class="fa-icons"  item-right primary name="rupee"></fa-icon><label item-right>100</label>-->\n\n    </ion-item>\n\n  </ion-card>\n\n  <!--<ion-list>-->\n\n\n\n    <!--<button ion-item (click)="EodchartSelected(1)">-->\n\n      <!--<ion-label color="primary">-->\n\n        <!--<ion-icon color="primary" name="md-trending-up" class="live-icon" style="background-color: #0bca00"  item-start></ion-icon>-->\n\n        <!--NSC Cash EOD Signal-->\n\n      <!--</ion-label>-->\n\n    <!--</button>-->\n\n\n\n    <!--<button ion-item (click)="EodchartSelected(2)">-->\n\n      <!--<ion-label color="primary">-->\n\n        <!--<ion-icon color="primary" name="md-stats" class="live-icon" style="background-color: #ca3757;padding-left: 13px;padding-right: 13px;" item-start></ion-icon>-->\n\n        <!--NSC FO EOD Signal-->\n\n      <!--</ion-label>-->\n\n    <!--</button>-->\n\n\n\n    <!--<button ion-item (click)="EodchartSelected(3)">-->\n\n      <!--<ion-label color="primary">-->\n\n        <!--<ion-icon color="primary" name="md-podium" class="live-icon" style="background-color: #ed3954" item-start></ion-icon>-->\n\n        <!--MCX EOD Signal-->\n\n      <!--</ion-label>-->\n\n    <!--</button>-->\n\n\n\n  <!--</ion-list>-->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\eod-chart\eod-chart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], EodChartPage);
    return EodChartPage;
}());

//# sourceMappingURL=eod-chart.js.map

/***/ })

});
//# sourceMappingURL=34.js.map