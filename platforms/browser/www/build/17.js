webpackJsonp([17],{

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchacehistoryPageModule", function() { return PurchacehistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purchacehistory__ = __webpack_require__(515);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PurchacehistoryPageModule = /** @class */ (function () {
    function PurchacehistoryPageModule() {
    }
    PurchacehistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__purchacehistory__["a" /* PurchacehistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__purchacehistory__["a" /* PurchacehistoryPage */]),
            ],
        })
    ], PurchacehistoryPageModule);
    return PurchacehistoryPageModule;
}());

//# sourceMappingURL=purchacehistory.module.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchacehistoryPage; });
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
 * Generated class for the PurchacehistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PurchacehistoryPage = /** @class */ (function () {
    function PurchacehistoryPage(navCtrl, navParams, api, toastctrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.toastctrl = toastctrl;
        this.ID = navParams.data.ID;
        this.Title = navParams.data.TITLE;
        this.GetList();
    }
    PurchacehistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PurchacehistoryPage');
    };
    PurchacehistoryPage.prototype.GetList = function () {
        var _this = this;
        this.api.Startloader();
        this.api.purchaseHistorydetails(this.ID)
            .then(function (data) {
            console.log(data);
            _this.api.Stoploader();
            _this.apiData = data;
            console.log("purchaseHistory", _this.apiData);
            if (_this.apiData.status == 200) {
                _this.items = _this.apiData.data;
            }
            else {
                _this.api.ErrorApi(_this.apiData.status, _this.apiData.message);
            }
            // this.loading.dismissAll();
        }).catch();
    };
    PurchacehistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-purchacehistory',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\purchacehistory\purchacehistory.html"*/'<!--\n\n  Generated template for the PurchacehistoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>{{Title}}</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background-color: #ededed">\n\n    <ion-card class="card-border" *ngFor="let item of items">\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <ion-label style="color: #040063;font-size: 13px;font-weight: bold;">{{item.TYPE}}</ion-label>\n\n            </ion-col>\n\n            <!--<ion-col col-6>-->\n\n            <!--<ion-label align="end" style="color: #040063;font-size: 13px;font-weight: bold;">{{item.PLAN_STATUS}}</ion-label>-->\n\n            <!--</ion-col>-->\n\n        </ion-row>\n\n        <ion-row style="margin-top: -20px">\n\n            <ion-col col-6>\n\n                <ion-label style="color: #404040; font-size: 11.5px;font-weight: bold;">Payment no : {{item.PAYMENT_NO}}</ion-label>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <ion-label align="end" style="color: #404040; font-size: 11.5px;padding: 0px 6px 0px 2px;font-weight: bold;"> Type : {{item.PURCHASE_TYPE}}</ion-label>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row style="margin-top: -25px;">\n\n            <ion-col col-6>\n\n                <ion-label style="color: #404040; font-size: 11.5px;padding: 0px 2px 0px 2px;font-weight: bold;"> From date:{{item.FROM_DATE}}</ion-label>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <ion-label align="end" style="color: #404040; font-size: 11.8px;padding: 0px 8px 0px 2px;font-weight: bold;"> Expiry Date:{{item.TO_DATE}}</ion-label>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <!--<ion-row style="margin-top: -25px;">-->\n\n        <!--<ion-col col-6>-->\n\n        <!--<ion-label style="color: #404040; font-size: 11.5px;padding: 0px 0px 0px 2px;font-weight: bold;"> Plan Amount : {{item.TOTAL_AMOUNT}}</ion-label>-->\n\n        <!--</ion-col>-->\n\n        <!--<ion-col col-6>-->\n\n        <!--<ion-label align="end" style="color: #404040; font-size: 11.5px;padding: 0px 0px 0px 2px;font-weight: bold;"> Paid Amount : {{item.PAID_AMOUNT}}</ion-label>-->\n\n        <!--</ion-col>-->\n\n        <!--</ion-row>-->\n\n\n\n        <!--<ion-row style="margin-top: -25px;">-->\n\n        <!--<ion-col col-12>-->\n\n        <!--<ion-label style="color: #404040; font-size: 11.5px;padding: 0px 0px 0px 2px;font-weight: bold;width: 100%">Comment : {{item.PURCHASE_COMMENT}}</ion-label>-->\n\n        <!--</ion-col>-->\n\n\n\n        <!--</ion-row>-->\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\purchacehistory\purchacehistory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
    ], PurchacehistoryPage);
    return PurchacehistoryPage;
}());

//# sourceMappingURL=purchacehistory.js.map

/***/ })

});
//# sourceMappingURL=17.js.map