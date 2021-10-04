webpackJsonp([43],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashrssPageModule", function() { return CashrssPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cashrss__ = __webpack_require__(491);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CashrssPageModule = /** @class */ (function () {
    function CashrssPageModule() {
    }
    CashrssPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cashrss__["a" /* CashrssPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cashrss__["a" /* CashrssPage */]),
            ],
        })
    ], CashrssPageModule);
    return CashrssPageModule;
}());

//# sourceMappingURL=cashrss.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CashrssPage; });
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
 * Generated class for the CashrssPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CashrssPage = /** @class */ (function () {
    function CashrssPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CashrssPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CashrssPage');
    };
    CashrssPage.prototype.webview = function (url, title) {
        console.log("title123 : ", title);
        console.log("url", url);
        this.navCtrl.push('SubknowledgePage', { "url": url, "title": title });
    };
    CashrssPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cashrss',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\cashrss\cashrss.html"*/'<!--\n\n  Generated template for the CashrssPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Cash Market Data</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <!--<ion-grid>-->\n\n    <!--<ion-row>-->\n\n    <!--<ion-col col-12>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://www.mastertrust.co.in/Market/Gainers.aspx\',\'Top Gainer\')">Top Gainer</button>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://www.mastertrust.co.in/Market/Losers.aspx\',\'Top Loser\')">Top Loser</button>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://www.mastertrust.co.in/Market/AdvDec.aspx\',\'Advance Decline\')">Advance Decline</button>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://www.mastertrust.co.in/Market/FIIActivities.aspx\',\'Fii Investment\')">Fii Investment</button>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://www.mastertrust.co.in/Market/OnlyBuyers.aspx\',\'Only Buyer\')">Only Buyer</button>-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="webview(\'https://www.mastertrust.co.in/Market/OnlySellers.aspx\',\'Only Seller\')">Only Seller</button>-->\n\n    <!--</ion-col>-->\n\n    <!--</ion-row>-->\n\n    <!--</ion-grid>-->\n\n\n\n    <table style="width: 100%;height: 100%">\n\n        <tr>\n\n            <th (click)="webview(\'https://www.mastertrust.co.in/Market/Gainers.aspx\',\'Top Gainer\')">\n\n                <ion-label style="color: white">Top Gainer</ion-label>\n\n            </th>\n\n            <th (click)="webview(\'https://www.mastertrust.co.in/Market/Losers.aspx\',\'Top Loser\')">\n\n                <ion-label style="color: white">Top Loser</ion-label>\n\n            </th>\n\n        </tr>\n\n        <tr>\n\n            <th (click)="webview(\'https://www.mastertrust.co.in/Market/AdvDec.aspx\',\'Advance Decline\')">\n\n                <ion-label style="color: white">Advance Decline</ion-label>\n\n            </th>\n\n            <th (click)="webview(\'https://www.mastertrust.co.in/Market/FIIActivities.aspx\',\'Fii Investment\')">\n\n                <ion-label style="color: white">Fii Investment</ion-label>\n\n            </th>\n\n        </tr>\n\n        <tr>\n\n            <th (click)="webview(\'https://www.mastertrust.co.in/Market/OnlyBuyers.aspx\',\'Only Buyer\')">\n\n                <ion-label style="color: white">Only Buyer</ion-label>\n\n            </th>\n\n            <th (click)="webview(\'https://www.mastertrust.co.in/Market/OnlySellers.aspx\',\'Only Seller\')">\n\n                <ion-label style="color: white">Only Seller</ion-label>\n\n            </th>\n\n        </tr>\n\n    </table>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\cashrss\cashrss.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], CashrssPage);
    return CashrssPage;
}());

//# sourceMappingURL=cashrss.js.map

/***/ })

});
//# sourceMappingURL=43.js.map