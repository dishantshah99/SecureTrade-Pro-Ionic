webpackJsonp([2],{

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistPageModule", function() { return WatchlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watchlist__ = __webpack_require__(531);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WatchlistPageModule = /** @class */ (function () {
    function WatchlistPageModule() {
    }
    WatchlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__watchlist__["a" /* WatchlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__watchlist__["a" /* WatchlistPage */]),
            ],
        })
    ], WatchlistPageModule);
    return WatchlistPageModule;
}());

//# sourceMappingURL=watchlist.module.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchlistPage; });
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
 * Generated class for the WatchlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WatchlistPage = /** @class */ (function () {
    function WatchlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WatchlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WatchlistPage');
    };
    WatchlistPage.prototype.openproductlist = function () {
        this.navCtrl.push('ProductlistPage');
    };
    WatchlistPage.prototype.openedit = function () {
        this.navCtrl.push('ProductlistPage');
    };
    WatchlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-watchlist',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\watchlist\watchlist.html"*/'<!--\n\n  Generated template for the WatchlistPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n    <ion-title>Watchlist</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-list>\n\n            <ion-item>\n\n                <input class="searchbar-input" style="border: 1px solid #ddd; padding: 7px; font-size: 14px;" dir="auto" placeholder="Enter watchlist Name" type="search"\n\n                       autocomplete="off" autocorrect="off" spellcheck="false">\n\n            </ion-item>\n\n        </ion-list>\n\n    <!--<div style="text-align: center; margin-top: -20px;">-->\n\n        <!--<ion-col align="center" class="col">-->\n\n            <!--<ion-badge style="background-color: #ed3954!important;color:white!important;font-size: 12px; padding: 7px 7px;" class="badge badge-md">Intraday</ion-badge>-->\n\n        <!--</ion-col>-->\n\n        <!--<ion-col align="center" class="col">-->\n\n            <!--<ion-badge class="badge badge-md" style="background: #fff; border: 1px solid #349ade; color: #349ade;font-size: 12px; padding: 7px 7px;">BTST</ion-badge>-->\n\n        <!--</ion-col>-->\n\n        <!--<ion-col align="center" class="col">-->\n\n            <!--<ion-badge class="badge badge-md" style="background: #fff; border: 1px solid #349ade; color: #349ade;font-size: 12px; padding: 7px 7px;">Position</ion-badge>-->\n\n        <!--</ion-col>-->\n\n        <!--<div style="clear:both; height: 10px; border-bottom: 1px solid #ddd; margin-bottom: 10px;"></div>-->\n\n        <!--<ion-col align="center" class="col">-->\n\n            <!--<ion-badge style="background-color: #ed3954!important;color:white!important; font-size: 12px; padding: 7px 7px; " class="badge badge-md">Bull/Bar Trade</ion-badge>-->\n\n        <!--</ion-col>-->\n\n        <!--<ion-col align="center" class="col">-->\n\n            <!--<ion-badge class="badge badge-md" style="background: #fff; border: 1px solid #349ade; color: #349ade; font-size: 12px; padding: 7px 7px;">Power Bull/Bear Trade</ion-badge>-->\n\n        <!--</ion-col>-->\n\n        <!--<ion-col align="center" class="col">-->\n\n            <!--<ion-badge style="background-color: #ed3954!important;color:white!important; font-size: 12px; padding: 7px 7px;" class="badge badge-md">Magic Trade</ion-badge>-->\n\n        <!--</ion-col>-->\n\n    <!--</div>-->\n\n    </ion-list>\n\n    <!--<ion-row style="height: fit-content" *ngIf="type == 2">-->\n\n        <!--<ion-col align="center">-->\n\n            <!--<ion-badge style="background-color: #ed3954!important;color:white!important;">Intraday</ion-badge>-->\n\n        <!--</ion-col>-->\n\n\n\n        <!--<ion-col align="center">-->\n\n            <!--<ion-badge>BTST</ion-badge>-->\n\n        <!--</ion-col>-->\n\n        <!--<ion-col align="center">-->\n\n            <!--<ion-badge>Position</ion-badge>-->\n\n        <!--</ion-col>-->\n\n    <!--</ion-row>-->\n\n    <!--<div style="border-bottom: 1px solid #ddd;margin: 2px 0px;"></div>-->\n\n    <!--<ion-row style="height: fit-content" *ngIf="type == 2">-->\n\n        <!--<ion-col align="center">-->\n\n            <!--<ion-badge style="background-color: #ed3954!important;color:white!important;">Bull/Bar Trade</ion-badge>-->\n\n        <!--</ion-col>-->\n\n\n\n        <!--<ion-col align="center">-->\n\n            <!--<ion-badge>Power Bull/Bear Trade</ion-badge>-->\n\n        <!--</ion-col>-->\n\n        <!--<ion-col align="center">-->\n\n            <!--<ion-badge style="background-color: #ed3954!important;color:white!important;">Magic Trade</ion-badge>-->\n\n        <!--</ion-col>-->\n\n    <!--</ion-row>-->\n\n\n\n   <ion-list *ngFor="let i of [1,2,3,4,5,6,7,8,9,10,11,12]">\n\n        <ion-item  no-lines no-border>\n\n            <div item-start>\n\n                <h3>YESBANK</h3>\n\n                <p>YES BACK PVT.LTD</p>\n\n            </div>\n\n            <ion-checkbox item-end style="width: fit-content"></ion-checkbox>\n\n        </ion-item>\n\n        <hr no-margin no-padding>\n\n    </ion-list>\n\n    <!--<ion-fab bottom right (click)="openproductlist()">-->\n\n        <!--<button ion-fab mini>-->\n\n            <!--<ion-icon name="add"></ion-icon>-->\n\n        <!--</button>-->\n\n    <!--</ion-fab>-->\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar color="primary">\n\n        <ion-row col-12 style="padding: 0px;">\n\n            <div style="text-align: center; display: inline-block; width: 100%;"><span style="font-weight: bold; font-size: 16px ;color: #ffffff">SAVE</span></div>\n\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\watchlist\watchlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], WatchlistPage);
    return WatchlistPage;
}());

//# sourceMappingURL=watchlist.js.map

/***/ })

});
//# sourceMappingURL=2.js.map