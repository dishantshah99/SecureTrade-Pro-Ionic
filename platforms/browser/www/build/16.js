webpackJsonp([16],{

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseHistoryPageModule", function() { return PurchaseHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purchase_history__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PurchaseHistoryPageModule = /** @class */ (function () {
    function PurchaseHistoryPageModule() {
    }
    PurchaseHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__purchase_history__["a" /* PurchaseHistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__purchase_history__["a" /* PurchaseHistoryPage */]),
            ],
        })
    ], PurchaseHistoryPageModule);
    return PurchaseHistoryPageModule;
}());

//# sourceMappingURL=purchase-history.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseHistoryPage; });
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
 * Generated class for the PurchaseHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PurchaseHistoryPage = /** @class */ (function () {
    function PurchaseHistoryPage(navCtrl, navParams, loadingCtrl, api, toastctrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.toastctrl = toastctrl;
        this.GetList();
    }
    PurchaseHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PurchaseHistoryPage');
    };
    PurchaseHistoryPage.prototype.GetList = function () {
        var _this = this;
        this.api.Startloader();
        this.api.purchaseHistory()
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
    PurchaseHistoryPage.prototype.opendetailsdata = function (name, id) {
        this.navCtrl.push('PurchacehistoryPage', { ID: id, TITLE: name });
    };
    PurchaseHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-purchase-history',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\purchase-history\purchase-history.html"*/'<!--\n\n  Generated template for the PurchaseHistoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Purchase History</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content style="background-color: #ededed">\n\n    <!--<ion-card class="card-border" *ngFor="let item of items">-->\n\n    <!--<ion-row>-->\n\n    <!--<ion-col col-6="">-->\n\n    <!--<h4 style="color: #040063;font-size: 13px;font-weight: bold;">Combo Plan 12M-->\n\n    <!--</h4>-->\n\n    <!--<ion-icon name="ios-calendar" size="  font-size: 1em;" style="color: #040063;padding: 3px;"></ion-icon>-->\n\n    <!--<span style="color: #404040; font-size: 11.5px;padding: 0px 68px 0px 2px;font-weight: bold;">Month : {{item.MONTH}}</span>-->\n\n    <!--<ion-icon name="ios-calendar" size="1x" style="color: #040063;padding: 3px;"></ion-icon>-->\n\n    <!--<span style="color: #404040; font-size: 11.5px;padding: 0px 2px 0px 2px;font-weight: bold;">From Date : {{item.FROMDATE}}</span>-->\n\n    <!--<fa-icon name="rupee" class="fa-icons" size="1x" style="color: #040063;padding: 3px;font-size: 18px;"></fa-icon>-->\n\n    <!--<span style="color: #404040; font-size: 11.5px;padding: 0px 0px -1px 2px;font-weight: bold;">Plan Amount : {{item.PLANAMOUNT}}</span>-->\n\n    <!--&lt;!&ndash;&lt;!&ndash;<p style="color: #040063;font-size: small;">Rec Price &ensp;&ensp;&ensp;&ensp;   </p>&ndash;&gt;&ndash;&gt;-->\n\n\n\n    <!--</ion-col>-->\n\n\n\n    <!--<ion-col col-6>-->\n\n    <!--<h4 style="color: #040063;font-size: 13px;margin-left: 110px;font-weight: bold;">Combo-->\n\n    <!--</h4>-->\n\n    <!--<fa-icon name="rupee" class="fa-icons" size="1x" style="color: #040063;padding: 3px;font-size:18px;"></fa-icon>-->\n\n    <!--<span style="color: #404040; font-size: 11.5px;padding: 0px 6px 0px 2px;font-weight: bold;">Wallet Amount : {{item.WALLETAMOUNT}}</span>-->\n\n    <!--<ion-icon name="ios-calendar" size="1x" style="color: #040063;padding: 3px;"></ion-icon>-->\n\n    <!--<span style="color: #404040; font-size: 11.8px;padding: 0px 8px 0px 2px;font-weight: bold;">Exp Date : {{item.EXPIRYDATE}}</span>-->\n\n    <!--<fa-icon name="rupee" class="fa-icons" size="1x" style="color: #040063;padding: 3px;font-size: 18px;"></fa-icon>-->\n\n    <!--<span style="color: #404040; font-size: 11.5px;padding: 0px 0px 0px 2px;font-weight: bold;">Paid Amount : {{item.PAIDAMOUNT}}</span>-->\n\n\n\n    <!--</ion-col>-->\n\n\n\n    <!--</ion-row>-->\n\n\n\n    <!--</ion-card>-->\n\n\n\n    <ion-card class="card-border" *ngFor="let item of items" (tap)="opendetailsdata(item.MAIN_TYPE,item.PURCHASE_NO)">\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <ion-label style="color: #040063;font-size: 13px;font-weight: bold;">{{item.MAIN_TYPE}}</ion-label>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <ion-label align="end" style="color: #040063;font-size: 13px;font-weight: bold;">{{item.PLAN_STATUS}}</ion-label>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row style="margin-top: -20px">\n\n            <ion-col col-6>\n\n                <ion-label style="color: #404040; font-size: 11.5px;font-weight: bold;">Purchase no : {{item.PURCHASE_NO}}</ion-label>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <ion-label align="end" style="color: #404040; font-size: 11.5px;padding: 0px 6px 0px 2px;font-weight: bold;"> Type : {{item.PURCHASE_TYPE}}</ion-label>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row style="margin-top: -25px;">\n\n            <ion-col col-8>\n\n                <ion-label style="color: #404040; font-size: 11.5px;padding: 0px 2px 0px 2px;font-weight: bold;"> Purchase date: {{item.PURCHASE_DATE_TIME}}</ion-label>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n            <ion-label align="end" style="color: #404040; font-size: 11.8px;padding: 0px 8px 0px 2px;font-weight: bold;"> Month: {{item.SUBSCRIBE_FOR}}</ion-label>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row style="margin-top: -25px;">\n\n            <ion-col col-6>\n\n                <ion-label style="color: #404040; font-size: 11.5px;padding: 0px 0px 0px 2px;font-weight: bold;"> Plan Amount : {{item.TOTAL_AMOUNT}}</ion-label>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <ion-label align="end" style="color: #404040; font-size: 11.5px;padding: 0px 0px 0px 2px;font-weight: bold;"> Paid Amount : {{item.PAID_AMOUNT}}</ion-label>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row style="margin-top: -25px;">\n\n            <ion-col col-12>\n\n                <ion-label style="color: #404040; font-size: 11.5px;padding: 0px 0px 0px 2px;font-weight: bold;width: 100%">Comment : {{item.PURCHASE_COMMENT}}</ion-label>\n\n            </ion-col>\n\n\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\purchase-history\purchase-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
    ], PurchaseHistoryPage);
    return PurchaseHistoryPage;
}());

//# sourceMappingURL=purchase-history.js.map

/***/ })

});
//# sourceMappingURL=16.js.map