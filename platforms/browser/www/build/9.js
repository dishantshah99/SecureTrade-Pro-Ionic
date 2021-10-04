webpackJsonp([9],{

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolpopupPageModule", function() { return SymbolpopupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__symbolpopup__ = __webpack_require__(523);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SymbolpopupPageModule = /** @class */ (function () {
    function SymbolpopupPageModule() {
    }
    SymbolpopupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__symbolpopup__["a" /* SymbolpopupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__symbolpopup__["a" /* SymbolpopupPage */]),
            ],
        })
    ], SymbolpopupPageModule);
    return SymbolpopupPageModule;
}());

//# sourceMappingURL=symbolpopup.module.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SymbolpopupPage; });
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
 * Generated class for the SymbolpopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SymbolpopupPage = /** @class */ (function () {
    function SymbolpopupPage(view, navCtrl, navParams, platform, api) {
        this.view = view;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.api = api;
        this.SELECTEDCASHDATA = [];
        console.log("data", this.view.data.DATA);
        this.SELECTEDCASHDATA = this.view.data.DATA;
        this.title = this.SELECTEDCASHDATA[0].SYMBOL;
    }
    SymbolpopupPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function (data) {
            _this.view.dismiss();
        });
    };
    SymbolpopupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SymbolpopupPage');
    };
    SymbolpopupPage.prototype.closemodel2 = function () {
        this.view.dismiss();
    };
    SymbolpopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-symbolpopup',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\symbolpopup\symbolpopup.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title color="primary">{{title}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button (click)="closemodel2()">Close</button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div>\n\n        <ion-row *ngIf="SELECTEDCASHDATA.length" style="margin-top: 45%">\n\n            <ion-col col-12 style="height: fit-content;width: 100%;" *ngFor="let i of SELECTEDCASHDATA let idx = index">\n\n                <ion-card *ngIf="i.DIFF_RATE>0" style="margin-bottom: 10px;border-radius: 15px; width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.9), 0 3px 1px 0px rgba(46,125,50,0.8), 0 0px 5px 0 rgba(46,125,50,0.7);padding: 5px;"\n\n                          no-margin>\n\n                    <ion-item>\n\n                        <div item-start>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                            <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;font-size: 1.4rem;border-radius: 5px;">{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #19b330;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                        </div>\n\n                        <div item-end align="end">\n\n                            <br>\n\n                            <!--<p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.4rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-right: 25px;"> {{i.CLOSE_RATE}}</span></p>-->\n\n                            <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span></p>\n\n                            <p style="color: #222222;font-size: 1.4rem;padding: 2px;">L:{{i.LOW_RATE}}<span style="margin-left: 25px;">C:{{i.CLOSE_RATE}}</span></p>\n\n                        </div>\n\n                    </ion-item>\n\n                    <ion-row>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">BID Price</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.BID}}({{i.BIDQTY}})</p>\n\n                        </ion-col>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Ask Price</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.ASK}}({{i.ASKQTY}})</p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Volume</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.VOLUME}}</p>\n\n                        </ion-col>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Open Interest</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.OI}}</p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card>\n\n                <ion-card *ngIf="i.DIFF_RATE<0"\n\n                          style="margin-bottom: 10px;border-radius: 15px;width: 100%; box-shadow: 0 2px 2px 0 rgba(196, 23, 23, 0.14), 0 3px 1px 0px rgba(227, 16, 16, 0.2), 0 0px 5px 0 rgba(245, 12, 12, 0.12);padding: 5px;"\n\n                          no-margin no-padding\n\n                >\n\n                    <ion-item>\n\n                        <div item-start>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                            <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;;font-size: 1.4rem;border-radius: 5px">{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #f53d3d;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                        </div>\n\n                        <div item-end align="end">\n\n                            <br>\n\n                            <!--<p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.4rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-left: 25px;"> {{i.CLOSE_RATE}}</span></p>-->\n\n                            <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span></p>\n\n                            <p style="color: #222222;font-size: 1.4rem;padding: 2px;">L:{{i.LOW_RATE}}<span style="margin-left: 25px;">C:{{i.CLOSE_RATE}}</span></p>\n\n                        </div>\n\n                    </ion-item>\n\n                    <ion-row>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">BID Price</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.BID}}({{i.BIDQTY}})</p>\n\n                        </ion-col>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Ask Price</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.ASK}}({{i.ASKQTY}})</p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Volume</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.VOLUME}}</p>\n\n                        </ion-col>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Open Interest</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.OI}}</p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card>\n\n                <ion-card *ngIf="i.DIFF_RATE==0"\n\n                          style="margin-bottom: 10px;border-radius: 15px;width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.14), 0 3px 1px 0px rgba(46,125,50,0.2), 0 0px 5px 0 rgba(46,125,50,0.12);padding: 5px;" no-margin\n\n                          no-padding>\n\n                    <ion-item>\n\n                        <div item-start>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                            <p style="background-color: transparent;width: fit-content;padding: 2px;font-weight: bold;;font-size: 1.4rem;border-radius: 5px">{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                        </div>\n\n                        <div item-end align="end">\n\n                            <br>\n\n                            <!--<p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.4rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-left: 25px;"> {{i.CLOSE_RATE}}</span></p>-->\n\n                            <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span></p>\n\n                            <p style="color: #222222;font-size: 1.4rem;padding: 2px;">L:{{i.LOW_RATE}}<span style="margin-left: 25px;">C:{{i.CLOSE_RATE}}</span></p>\n\n                        </div>\n\n                    </ion-item>\n\n                    <ion-row>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">BID Price</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.BID}}({{i.BIDQTY}})</p>\n\n                        </ion-col>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Ask Price</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.ASK}}({{i.ASKQTY}})</p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Volume</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.VOLUME}}</p>\n\n                        </ion-col>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Open Interest</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.OI}}</p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card>\n\n            </ion-col>\n\n\n\n        </ion-row>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\symbolpopup\symbolpopup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], SymbolpopupPage);
    return SymbolpopupPage;
}());

//# sourceMappingURL=symbolpopup.js.map

/***/ })

});
//# sourceMappingURL=9.js.map