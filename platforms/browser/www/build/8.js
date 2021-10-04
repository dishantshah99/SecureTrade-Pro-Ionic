webpackJsonp([8],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradingResourcesPageModule", function() { return TradingResourcesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trading_resources__ = __webpack_require__(526);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TradingResourcesPageModule = /** @class */ (function () {
    function TradingResourcesPageModule() {
    }
    TradingResourcesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trading_resources__["a" /* TradingResourcesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trading_resources__["a" /* TradingResourcesPage */]),
            ],
        })
    ], TradingResourcesPageModule);
    return TradingResourcesPageModule;
}());

//# sourceMappingURL=trading-resources.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradingResourcesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(52);
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
 * Generated class for the TradingResourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TradingResourcesPage = /** @class */ (function () {
    function TradingResourcesPage(platform, navCtrl, navParams, api) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
    }
    TradingResourcesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TradingResourcesPage');
    };
    TradingResourcesPage.prototype.webviewTrade = function (url, title) {
        console.log("title123 : ", title);
        console.log("url", url);
        this.api.Openurl(url);
        // window.open(url, '_system');
        //  this.navCtrl.push('SubknowledgePage',{"url" : url, "title":title});
    };
    TradingResourcesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trading-resources',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\trading-resources\trading-resources.html"*/'<!--\n\n  Generated template for the TradingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Trading Resources</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button style="font-weight: bold;" ion-button full style="background-color: #ed3954" class="content-btn" (click)="webviewTrade(\'https://nseindia.com/\',\'NSE INDIA\')">NSE INDIA\n\n                    <ion-icon style="margin-left: auto" name="ios-arrow-dropright-circle-outline"></ion-icon>\n\n                </button>\n\n                <button style="font-weight: bold;" ion-button full style="background-color: #ed3954" class="content-btn" (click)="webviewTrade(\'http://www.bseindia.com/\',\'BSE Money\')">BSE INDIA\n\n                    <ion-icon style="margin-left: auto" name="ios-arrow-dropright-circle-outline"></ion-icon>\n\n                </button>\n\n                <button style="font-weight: bold;" ion-button full style="background-color: #ed3954" class="content-btn" (click)="webviewTrade(\'https://www.mcxindia.com/\',\'MCX INDIA\')">MCX INDIA\n\n                    <ion-icon style="margin-left: auto" name="ios-arrow-dropright-circle-outline"></ion-icon>\n\n                </button>\n\n\n\n                <button style="font-weight: bold;" ion-button full style="background-color: #ed3954" class="content-btn" (click)="webviewTrade(\'http://money.rediff.com/index.html\',\'REDIFF MONEY\')">REDIFF MONEY\n\n                    <ion-icon style="margin-left: auto" name="ios-arrow-dropright-circle-outline"></ion-icon>\n\n                </button>\n\n\n\n\n\n                <button style="font-weight: bold;" ion-button full style="background-color: #ed3954" class="content-btn"  (click)="webviewTrade(\'http://www.moneycontrol.com/\',\'MONEY CONTROL\')">MONEY CONTROL\n\n                    <ion-icon style="margin-left: auto" name="ios-arrow-dropright-circle-outline"></ion-icon>\n\n                </button>\n\n\n\n                <button style="font-weight: bold;" ion-button full style="background-color: #ed3954" class="content-btn"  (click)="webviewTrade(\'https://finance.yahoo.com/\',\'YAHOO FINANCE\')">YAHOO FINANCE\n\n                    <ion-icon style="margin-left: auto" name="ios-arrow-dropright-circle-outline"></ion-icon>\n\n                </button>\n\n\n\n                <button ion-button full style="background-color: #ed3954" class="content-btn"  style="font-weight: bold;" (click)="webviewTrade(\'http://economictimes.indiatimes.com/\',\'ECONOMIC TIME\')">ECONOMIC TIME\n\n                    <ion-icon style="margin-left: auto" name="ios-arrow-dropright-circle-outline"></ion-icon>\n\n                </button>\n\n                <button ion-button full style="background-color: #ed3954" class="content-btn" style="font-weight: bold;" (click)="webviewTrade(\'http://www.marketonmobile.com/\',\'MARKET ON MOBILE\')">MARKET ON MOBILE\n\n                    <ion-icon style="margin-left: auto" name="ios-arrow-dropright-circle-outline"></ion-icon>\n\n                </button>\n\n\n\n                <button ion-button full style="background-color: #ed3954" class="content-btn" style="font-weight: bold;" (click)="webviewTrade(\'https://www.investing.com/\',\'Insvesting Nifty Chart\')">Insvesting Nifty Chart\n\n                    <ion-icon style="margin-left: auto" name="ios-arrow-dropright-circle-outline"></ion-icon>\n\n                </button>\n\n                <button ion-button full style="background-color: #ed3954" class="content-btn" style="font-weight: bold;" (click)="webviewTrade(\'http://www.tradersedgeindia.com/\',\'TECHNICAL ANALYSIS BASIC\')">TECHNICAL ANALYSIS BASIC\n\n                    <ion-icon style="margin-left: auto" name="ios-arrow-dropright-circle-outline"></ion-icon>\n\n                </button>\n\n                <button ion-button full style="background-color: #ed3954" class="content-btn" style="font-weight: bold;" (click)="webviewTrade(\'http://www.indiainfoline.com/\',\'INDIA INFOLINE\')">INDIA INFOLINE\n\n                    <ion-icon style="margin-left: auto" name="ios-arrow-dropright-circle-outline"></ion-icon>\n\n                </button>\n\n\n\n                <button ion-button full style="background-color: #ed3954" class="content-btn" style="font-weight: bold;" (click)="webviewTrade(\'https://www.forexfactory.com/\',\'FOREX FACTORY\')">FOREX FACTORY\n\n                    <ion-icon style="margin-left: auto" name="ios-arrow-dropright-circle-outline"></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\trading-resources\trading-resources.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], TradingResourcesPage);
    return TradingResourcesPage;
}());

//# sourceMappingURL=trading-resources.js.map

/***/ })

});
//# sourceMappingURL=8.js.map