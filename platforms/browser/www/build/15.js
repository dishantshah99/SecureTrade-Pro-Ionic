webpackJsonp([15],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssfeedPageModule", function() { return RssfeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rssfeed__ = __webpack_require__(517);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RssfeedPageModule = /** @class */ (function () {
    function RssfeedPageModule() {
    }
    RssfeedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rssfeed__["a" /* RssfeedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rssfeed__["a" /* RssfeedPage */]),
            ],
        })
    ], RssfeedPageModule);
    return RssfeedPageModule;
}());

//# sourceMappingURL=rssfeed.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssfeedPage; });
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
 * Generated class for the RssfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RssfeedPage = /** @class */ (function () {
    function RssfeedPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.getapidata();
    }
    RssfeedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RssfeedPage');
    };
    RssfeedPage.prototype.getapidata = function () {
        var _this = this;
        this.api.Startloader();
        this.api.rssfeed("")
            .then(function (data) {
            _this.api.Stoploader();
            _this.apiData = data;
            if (_this.apiData.status == 200) {
                _this.news = _this.apiData.data;
                console.log("news", _this.news);
            }
            else {
                _this.api.ErrorApi(_this.apiData.status, _this.apiData.message);
            }
        }).catch();
    };
    RssfeedPage.prototype.opendetailspage = function (TYPE) {
        this.navCtrl.push('AdminMessagesPage', TYPE);
    };
    RssfeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rssfeed',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\rssfeed\rssfeed.html"*/'<!--\n\n  Generated template for the RssfeedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Rss Feed</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-row>\n\n        <ion-col col-6 *ngFor="let i of news" style="padding: 2px;">\n\n            <ion-card style="border-radius: 2px;background-color: #ed3954;height: 100%;width: 100%;margin: 0px;" (click)="opendetailspage(i)">\n\n                <ion-label style="text-align: center;margin: 30px 8px 13px;color: white">\n\n                    {{i.DISPLAY}}\n\n                </ion-label>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <!--<ion-grid>-->\n\n    <!--<ion-row>-->\n\n    <!--<ion-col col-12 *ngFor="let i of news">-->\n\n    <!--<button style="font-weight: bold;" ion-button full class="content-btn" (click)="opendetailspage(i.TYPE)">{{i.DISPLAY}}</button>-->\n\n    <!--</ion-col>-->\n\n    <!--</ion-row>-->\n\n    <!--</ion-grid>-->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\rssfeed\rssfeed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], RssfeedPage);
    return RssfeedPage;
}());

//# sourceMappingURL=rssfeed.js.map

/***/ })

});
//# sourceMappingURL=15.js.map