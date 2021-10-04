webpackJsonp([7],{

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradingPageModule", function() { return TradingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trading__ = __webpack_require__(525);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TradingPageModule = /** @class */ (function () {
    function TradingPageModule() {
    }
    TradingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trading__["a" /* TradingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trading__["a" /* TradingPage */]),
            ],
        })
    ], TradingPageModule);
    return TradingPageModule;
}());

//# sourceMappingURL=trading.module.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradingPage; });
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


var TradingPage = /** @class */ (function () {
    function TradingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TradingPage.prototype.webview = function (url, title) {
        console.log("title123 : ", title);
        console.log("url", url);
        this.navCtrl.push('SubknowledgePage', { "url": url, "title": title });
    };
    TradingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TradingPage');
    };
    TradingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trading',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\trading\trading.html"*/'<!--\n\n  Generated template for the TradingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Trading</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <!--<ion-grid style="height: fit-content">-->\n\n    <!--<ion-row>-->\n\n    <!--<ion-col col-12>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://docs.google.com/spreadsheets/d/1HYbp74sZjuIsMxvGac4Elq96Zho65hsxxfwEro3bJg4/pubhtml\',\'Near Day High\')">Near Day High</button>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://docs.google.com/spreadsheets/d/1HPijszRKYgoSPL48i4hJ6m0NrjeDVfiJda7Ouy5Fwbo/pubhtml\',\'Near Day Low\')">Near Day Low</button>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://docs.google.com/spreadsheets/d/1Inh7hksaCOMKTR4-4TEbGCvbggB-GxOs2960CsTIb1s/pubhtml\',\'Open & Low Same\')">Open & Low Same</button>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://docs.google.com/spreadsheets/d/1A6gTCNi5OfUpicrGtFkq387pnXbL79-Q3RLgz8xyzBg/pubhtml\',\'Open & High Same\')">Open & High Same</button>-->\n\n    <!--</ion-col>-->\n\n    <!--</ion-row>-->\n\n    <!--</ion-grid>-->\n\n\n\n    <!--<ion-grid>-->\n\n        <!--<ion-row>-->\n\n            <!--<ion-col col-6>-->\n\n                <!--<div style="text-align: center">-->\n\n                    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://docs.google.com/spreadsheets/d/1HYbp74sZjuIsMxvGac4Elq96Zho65hsxxfwEro3bJg4/pubhtml\',\'Near Day High\')">Near Day High</button>-->\n\n                <!--</div>-->\n\n            <!--</ion-col>-->\n\n            <!--<ion-col col-6>-->\n\n\n\n                <!--<div style="text-align: center">-->\n\n                    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://docs.google.com/spreadsheets/d/1HPijszRKYgoSPL48i4hJ6m0NrjeDVfiJda7Ouy5Fwbo/pubhtml\',\'Near Day Low\')">Near Day Low</button>-->\n\n                <!--</div>-->\n\n            <!--</ion-col>-->\n\n            <!--<ion-col col-6>-->\n\n\n\n                <!--<div style="text-align: center">-->\n\n                    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://docs.google.com/spreadsheets/d/1Inh7hksaCOMKTR4-4TEbGCvbggB-GxOs2960CsTIb1s/pubhtml\',\'Open & Low Same\')">Open & Low Same</button>-->\n\n                <!--</div>-->\n\n            <!--</ion-col>-->\n\n            <!--<ion-col col-6>-->\n\n                <!--<div style="text-align: center">-->\n\n                    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://docs.google.com/spreadsheets/d/1A6gTCNi5OfUpicrGtFkq387pnXbL79-Q3RLgz8xyzBg/pubhtml\',\'Open & High Same\')">Open & High Same-->\n\n                    <!--</button>-->\n\n                <!--</div>-->\n\n            <!--</ion-col>-->\n\n        <!--</ion-row>-->\n\n    <!--</ion-grid>-->\n\n\n\n    <table style="width: 100%;height: 100%">\n\n        <tr>\n\n            <th (click)="webview(\'https://docs.google.com/spreadsheets/d/1HYbp74sZjuIsMxvGac4Elq96Zho65hsxxfwEro3bJg4/pubhtml\',\'Near Day High\')">\n\n                <ion-label style="color: white">Near Day High</ion-label>\n\n            </th>\n\n            <th (click)="webview(\'https://docs.google.com/spreadsheets/d/1HPijszRKYgoSPL48i4hJ6m0NrjeDVfiJda7Ouy5Fwbo/pubhtml\',\'Near Day Low\')">\n\n                <ion-label style="color: white">Near Day Low</ion-label>\n\n            </th>\n\n        </tr>\n\n        <tr>\n\n            <th (click)="webview(\'https://docs.google.com/spreadsheets/d/1Inh7hksaCOMKTR4-4TEbGCvbggB-GxOs2960CsTIb1s/pubhtml\',\'Open & Low Same\')">\n\n                <ion-label style="color: white">Open & Low Same</ion-label>\n\n            </th>\n\n            <th (click)="webview(\'https://docs.google.com/spreadsheets/d/1A6gTCNi5OfUpicrGtFkq387pnXbL79-Q3RLgz8xyzBg/pubhtml\',\'Open & High Same\')">\n\n                <ion-label style="color: white">Open & High Same</ion-label>\n\n            </th>\n\n        </tr>\n\n    </table>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\trading\trading.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], TradingPage);
    return TradingPage;
}());

//# sourceMappingURL=trading.js.map

/***/ })

});
//# sourceMappingURL=7.js.map