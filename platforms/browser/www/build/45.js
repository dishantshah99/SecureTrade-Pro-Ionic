webpackJsonp([45],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerPageModule", function() { return BrokerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__broker__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BrokerPageModule = /** @class */ (function () {
    function BrokerPageModule() {
    }
    BrokerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__broker__["a" /* BrokerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__broker__["a" /* BrokerPage */]),
            ],
        })
    ], BrokerPageModule);
    return BrokerPageModule;
}());

//# sourceMappingURL=broker.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(68);
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
 * Generated class for the BrokerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BrokerPage = /** @class */ (function () {
    function BrokerPage(navCtrl, navParams, iappb, device) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iappb = iappb;
        this.device = device;
    }
    BrokerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BrokerPage');
    };
    BrokerPage.prototype.webview = function (url, title) {
        console.log("title : ", title);
        console.log("url", url);
        // if (this.device.version >= '9') {
        window.open(url, '_system');
        // } else {
        //     const browser = this.iappb.create(url);
        //     browser.on('loadstop').subscribe(event => {
        //         browser.insertCSS({code: "body{color: red;"});
        //     });
        // }
        // browser.close();
        // this.navCtrl.push('SubknowledgePage', {"url": url, "title": title});
    };
    BrokerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-broker',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\broker\broker.html"*/'<!--\n\n  Generated template for the BrokerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Broker</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <table style="width: 100%;height: 100%">\n\n        <tr>\n\n            <th (click)="webview(\'http://app.aliceblueonline.com/OpenAccount.aspx?C=MN335\',\'Alice Blue\')">\n\n                <img style="width: auto;height: auto;" src="assets/imgs/b5.png">\n\n                <!--<ion-label style="color: white">Profit Mart</ion-label>-->\n\n            </th>\n\n            <th (click)="webview(\'http://partners.fyers.in/AP0352\',\'Fyers\')">\n\n                <img style="width: auto;height: auto;" src="assets/imgs/b6.png">\n\n                <!--<ion-label style="color: white">Upstox</ion-label>-->\n\n            </th>\n\n        </tr>\n\n        <tr>\n\n            <th (click)="webview(\'https://www.tradejini.com/custom/common/index.php?pid=I0241\',\'Trade jini\')">\n\n                <img style="width: auto;height: auto;" src="assets/imgs/b1.png">\n\n                <!--<ion-label style="color: white">Profit Mart</ion-label>-->\n\n            </th>\n\n            <th (click)="webview(\'https://upstox.com/open-demat-account/?f=GVJ1\',\'Upstox\')">\n\n                <img style="width: auto;height: auto;" src="assets/imgs/b2.jpg">\n\n                <!--<ion-label style="color: white">Upstox</ion-label>-->\n\n            </th>\n\n        </tr>\n\n        <tr>\n\n            <th (click)="webview(\'https://www.5paisa.com/register-page?ReferralCode=56577924\',\'5 Paisa\')">\n\n                <img style="width: auto;height: 100px;" src="assets/imgs/b3.jpg">\n\n                <!--<ion-label style="color: white">5 Paisa</ion-label>-->\n\n            </th>\n\n            <th (click)="webview(\'https://zerodha.com/open-account?c=ZMPORO\',\'Zerodha\')">\n\n                <img style="width: auto;height: auto;" src="assets/imgs/b4.jpg">\n\n                <!--<ion-label style="color: white">Zerodha</ion-label>-->\n\n            </th>\n\n        </tr>\n\n    </table>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\broker\broker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */]])
    ], BrokerPage);
    return BrokerPage;
}());

//# sourceMappingURL=broker.js.map

/***/ })

});
//# sourceMappingURL=45.js.map