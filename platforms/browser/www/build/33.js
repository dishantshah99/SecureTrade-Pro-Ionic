webpackJsonp([33],{

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundamentalCallsPageModule", function() { return FundamentalCallsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fundamental_calls__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FundamentalCallsPageModule = /** @class */ (function () {
    function FundamentalCallsPageModule() {
    }
    FundamentalCallsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fundamental_calls__["a" /* FundamentalCallsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fundamental_calls__["a" /* FundamentalCallsPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], FundamentalCallsPageModule);
    return FundamentalCallsPageModule;
}());

//# sourceMappingURL=fundamental-calls.module.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundamentalCallsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(131);
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
 * Generated class for the FundamentalCallsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FundamentalCallsPage = /** @class */ (function () {
    function FundamentalCallsPage(navCtrl, popoverCtrl, socialSharing, loadingCtrl, navParams, api, toastctrl, in_app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.api = api;
        this.toastctrl = toastctrl;
        this.in_app = in_app;
        this.loading = this.loadingCtrl.create({ content: "please wait..." });
        this.loading.present();
        this.api.fundamentalCall()
            .then(function (data) {
            // this.users = data;
            _this.apiData = data;
            _this.loading.dismiss();
            if (_this.apiData.status == 200) {
                _this.items = _this.apiData.data;
            }
            else if (_this.apiData.status == 404) {
                _this.api.presentToast(_this.apiData.message);
            }
            else if (_this.apiData.status == 440) {
                _this.api.presentToast(_this.apiData.message);
                localStorage.removeItem("login_data");
                _this.navCtrl.setRoot('SignloginPage');
            }
            else if (_this.apiData.status == 304) {
                _this.api.presentToast(_this.apiData.message);
                window.open(_this.api.playstorelink, '_system');
            }
            else if (_this.apiData.status == 530) {
                _this.api.presentToast(_this.apiData.message);
                _this.api.Exitapp();
            }
            else {
                _this.api.presentToast(_this.apiData.message);
            }
            //    this.checkReportLink();
        }).catch();
        // this.loading.dismiss();
    }
    FundamentalCallsPage.prototype.openUrl = function (title, url) {
        window.open(url, '_system', 'location=yes');
        // this.in_app.create(url, '_system');
        // this.navCtrl.push("FundamentalReportPage", {"url": url, "title": title});
    };
    FundamentalCallsPage.prototype.presentPopover = function (myEvent) {
        this.popover = this.popoverCtrl.create('PopoverPage', this.popover);
        this.popover.present({
            ev: myEvent
        });
    };
    FundamentalCallsPage.prototype.shareInfo = function () {
        this.socialSharing.share("Secure Trade", "Demo subject", "", "https://play.google.com/store/apps/details?id=&hl=en%22").then(function () {
        }).catch(function () {
        });
    };
    FundamentalCallsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fundamental-calls',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\fundamental-calls\fundamental-calls.html"*/'<!--\n\n  Generated template for the FundamentalCallsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Fundamental Calls\n\n        </ion-title>\n\n        <span style="float: right; color: white" end><ion-icon name="md-more" style="margin-left: 17px; margin-right: 17px; margin-top: 4px; font-weight: bold; font-size: 23px;" (click)=" presentPopover($event)"></ion-icon></span>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background-color: #ededed">\n\n    <div *ngFor="let item of items">\n\n\n\n        <ion-list>\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-row>\n\n                        <ion-col col-4="">\n\n                            <div style="padding: 0px"><img col-md-6 style="width: 80px; height: 70px; padding: 0px" src="{{item.LOGOIMAGE}}"/>\n\n                            </div>\n\n                            <p style="margin-top: 8px;font-size: small;">{{item.DATE}}</p>\n\n                        </ion-col>\n\n\n\n                        <ion-col col-8>\n\n                                <h4 style="color: #040063;font-size: 1.5rem;">{{item.COMPANYNAME}}\n\n\n\n                                    <span style="float: right;">\n\n                                    <button ion-button small color="secondary" *ngIf="item.TYPE==\'Buy\'" class="sell-button">{{item.TYPE}}</button>\n\n\n\n                                    <button ion-button small color="danger" *ngIf="item.TYPE==\'Sell\'" class="sell-button">{{item.TYPE}}</button>\n\n                                    </span>\n\n                                </h4>\n\n                                <p style="color: #040063;font-size: small;">Rec Price &ensp;&ensp;&ensp;&ensp;  {{item.RECOMMANDEDPRICE}} </p>\n\n                                <p style="color: #040063;font-size: small;">Target &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; {{item.TARGET}}</p>\n\n                                <p style="color: #040063;font-size: small;">Upside &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.UPSIDE}}</p>\n\n                                <p id="Reportlink" style="color: #040063;font-size: small;">Report Link &ensp;&ensp;&ensp; <a href="#" style="color: blue" (click)="openUrl(item.COMPANYNAME, item.REPORTLINK)" *ngIf="item.REPORTLINK!=\'\'">Click Here</a></p>\n\n\n\n                        </ion-col>\n\n\n\n                    </ion-row>\n\n                </ion-item>\n\n            </ion-card>\n\n        </ion-list>\n\n\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\fundamental-calls\fundamental-calls.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], FundamentalCallsPage);
    return FundamentalCallsPage;
}());

//# sourceMappingURL=fundamental-calls.js.map

/***/ })

});
//# sourceMappingURL=33.js.map