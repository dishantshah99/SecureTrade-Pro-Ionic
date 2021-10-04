webpackJsonp([31],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuturerssPageModule", function() { return FuturerssPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__futurerss__ = __webpack_require__(503);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FuturerssPageModule = /** @class */ (function () {
    function FuturerssPageModule() {
    }
    FuturerssPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__futurerss__["a" /* FuturerssPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__futurerss__["a" /* FuturerssPage */]),
            ],
        })
    ], FuturerssPageModule);
    return FuturerssPageModule;
}());

//# sourceMappingURL=futurerss.module.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuturerssPage; });
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
 * Generated class for the FuturerssPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FuturerssPage = /** @class */ (function () {
    function FuturerssPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FuturerssPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FuturerssPage');
    };
    FuturerssPage.prototype.webview = function (url, title) {
        console.log("title123 : ", title);
        console.log("url", url);
        this.navCtrl.push('SubknowledgePage', { "url": url, "title": title });
    };
    FuturerssPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-futurerss',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\futurerss\futurerss.html"*/'<!--\n\n  Generated template for the FuturerssPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Future Market Data</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <!--<ion-grid>-->\n\n    <!--<ion-row>-->\n\n    <!--<ion-col col-12>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://www.mastertrust.co.in/Derivatives/Gainers.aspx\',\'Top Gainer\')">Top Gainer</button>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://www.mastertrust.co.in/Derivatives/Losers.aspx\',\'Top Loser\')">Top Loser</button>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://www.mastertrust.co.in/Derivatives/HighestInPremium.aspx\',\'Highest In Premium\')">Highest In Premium</button>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://www.mastertrust.co.in/Derivatives/MostActiveCalls.aspx\',\'Most Active Calls\')">Most Active Calls</button>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://www.mastertrust.co.in/Derivatives/MostActivePuts.aspx\',\'Most Active Puts\')">Most Active Puts</button>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://www.mastertrust.co.in/Derivatives/MostActiveContracts.aspx\',\'Most Active Contracts\')">Most Active Contracts</button>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://www.mastertrust.co.in/Derivatives/OpenInterest.aspx\',\'Open Interest\')">Open Interest</button>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://www.mastertrust.co.in/Derivatives/PutCallRatio.aspx\',\'Put Call Ratio\')">Put Call Ratio</button>-->\n\n    <!--</ion-col>-->\n\n    <!--</ion-row>-->\n\n    <!--</ion-grid>-->\n\n\n\n    <table style="width: 100%;height: 100%">\n\n        <tr>\n\n            <th (click)="webview(\'https://www.mastertrust.co.in/Derivatives/Gainers.aspx\',\'Top Gainer\')">\n\n                <ion-label style="color: white">Top Gainer</ion-label>\n\n            </th>\n\n            <th (click)="webview(\'https://www.mastertrust.co.in/Derivatives/Losers.aspx\',\'Top Loser\')">\n\n                <ion-label style="color: white">Top Loser</ion-label>\n\n            </th>\n\n        </tr>\n\n        <tr>\n\n            <th (click)="webview(\'https://www.mastertrust.co.in/Derivatives/HighestInPremium.aspx\',\'Highest In Premium\')">\n\n                <ion-label style="color: white">Highest In Premium</ion-label>\n\n            </th>\n\n            <th (click)="webview(\'https://www.mastertrust.co.in/Derivatives/MostActiveCalls.aspx\',\'Most Active Calls\')">\n\n                <ion-label style="color: white">Most Active Calls</ion-label>\n\n            </th>\n\n        </tr>\n\n        <tr>\n\n            <th (click)="webview(\'https://www.mastertrust.co.in/Derivatives/MostActivePuts.aspx\',\'Most Active Puts\')">\n\n                <ion-label style="color: white">Most Active Puts</ion-label>\n\n            </th>\n\n            <th (click)="webview(\'https://www.mastertrust.co.in/Derivatives/MostActiveContracts.aspx\',\'Most Active Contracts\')">\n\n                <ion-label style="color: white">Most Active Contracts</ion-label>\n\n            </th>\n\n        </tr>\n\n        <tr>\n\n            <th (click)="webview(\'https://www.mastertrust.co.in/Derivatives/OpenInterest.aspx\',\'Open Interest\')">\n\n                <ion-label style="color: white">Open Interest</ion-label>\n\n            </th>\n\n            <th (click)="webview(\'https://www.mastertrust.co.in/Derivatives/FIIStatistics.aspx\',\'FII Statistics\')">\n\n                <ion-label style="color: white">FII Statistics</ion-label>\n\n            </th>\n\n        </tr>\n\n        <tr>\n\n            <th (click)="webview(\'https://www.mastertrust.co.in/Derivatives/PutCallRatio.aspx\',\'Put Call Ratio\')">\n\n                <ion-label style="color: white">Put Call Ratio</ion-label>\n\n            </th>\n\n            <th (click)="webview(\'https://www.mastertrust.co.in/Derivatives/GetQuotes.aspx?ptype=Q\',\'GetQuotes\')">\n\n                <ion-label style="color: white">GetQuotes</ion-label>\n\n            </th>\n\n        </tr>\n\n    </table>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\futurerss\futurerss.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], FuturerssPage);
    return FuturerssPage;
}());

//# sourceMappingURL=futurerss.js.map

/***/ })

});
//# sourceMappingURL=31.js.map