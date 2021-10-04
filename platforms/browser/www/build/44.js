webpackJsonp([44],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerdetailsPageModule", function() { return BrokerdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brokerdetails__ = __webpack_require__(490);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BrokerdetailsPageModule = /** @class */ (function () {
    function BrokerdetailsPageModule() {
    }
    BrokerdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__brokerdetails__["a" /* BrokerdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__brokerdetails__["a" /* BrokerdetailsPage */]),
            ],
        })
    ], BrokerdetailsPageModule);
    return BrokerdetailsPageModule;
}());

//# sourceMappingURL=brokerdetails.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerdetailsPage; });
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
 * Generated class for the BrokerdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BrokerdetailsPage = /** @class */ (function () {
    function BrokerdetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hide = false;
        this.type = navParams.data;
        if (navParams.data == 1) {
            this.title = 'Profit Mart';
        }
        else if (navParams.data == 2) {
            this.title = 'Upstox';
        }
        else if (navParams.data == 3) {
            this.title = '5 Paisa';
        }
        else if (navParams.data == 4) {
            this.title = 'Zerodha';
        }
    }
    BrokerdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BrokerdetailsPage');
    };
    BrokerdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-brokerdetails',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\brokerdetails\brokerdetails.html"*/'<!--\n\n  Generated template for the BrokerdetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>{{title}}</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div>\n\n        <ion-list *ngIf="hide == false">\n\n            <ion-list style=" margin: 0px 0px 0px;" (tap)="opendetails()" *ngIf="type == 1">\n\n                <ion-label style="    padding: 5px;font-size: 18px;font-weight: bold;">Product & Services :-</ion-label>\n\n                <ion-card class="card" type="button" align="center">\n\n                    <div align="center">\n\n                        <img style="width: 80px;height: 80px;background-color: #EFEFEF;border-radius: 50%;padding: 5px;margin-top: 8px;" src="assets/imgs/pb1.png">\n\n                    </div>\n\n                    <ion-item>\n\n                        <h2 style="color: #ed3954;text-align: center">EQUITY</h2>\n\n                        <p style="text-align: center" text-wrap>Trading in equities with Profitmart brings you the very best of the Technology, Research, Access and Ease. It empowers you to invest in Equities by providing an anchor to guide you as\n\n                            to when,\n\n                            where and how to invest. </p>\n\n                        <div align="end">\n\n                            <p style="color: #f53d3d;font-size: 12px;">Read More.</p>\n\n                        </div>\n\n                    </ion-item>\n\n                </ion-card>\n\n\n\n                <ion-card class="card" type="button" align="center">\n\n                    <div align="center">\n\n                        <img style="width: 80px;height: 80px;background-color: #EFEFEF;border-radius: 50%;padding: 5px;margin-top: 8px;" src="assets/imgs/pb2.png">\n\n                    </div>\n\n                    <ion-item>\n\n                        <h2 style="color: #ed3954;text-align: center">COMMODITY</h2>\n\n                        <p style="text-align: center" text-wrap>Commodity derivative market has emerged as a new avenue for investors to create wealth. Today, Commodities have evolved as the next best option after stocks and bonds for diversifying the portfolio. Profitmart aims to harness the immense potential of the  </p>\n\n                        <div align="end">\n\n                            <p style="color: #f53d3d;font-size: 12px;">Read More.</p>\n\n                        </div>\n\n                    </ion-item>\n\n                </ion-card>\n\n\n\n                <ion-card class="card" type="button" align="center">\n\n                    <div align="center">\n\n                        <img style="width: 80px;height: 80px;background-color: #EFEFEF;border-radius: 50%;padding: 5px;margin-top: 8px;" src="assets/imgs/pb3.png">\n\n                    </div>\n\n                    <ion-item>\n\n                        <h2 style="color: #ed3954;text-align: center">WEALTH MANAGEMENT</h2>\n\n                        <p style="text-align: center" text-wrap>Your financial success depends on being able to put all the puzzle pieces of your life’s goals together.  Profitmart will help you assemble all the pieces to create “your” unique financial picture.  </p>\n\n                        <div align="end">\n\n                            <p style="color: #f53d3d;font-size: 12px;">Read More.</p>\n\n                        </div>\n\n                    </ion-item>\n\n                </ion-card>\n\n\n\n                <ion-card class="card" type="button" align="center">\n\n                    <div align="center">\n\n                        <img style="width: 80px;height: 80px;background-color: #EFEFEF;border-radius: 50%;padding: 5px;margin-top: 8px;" src="assets/imgs/pb4.png">\n\n                    </div>\n\n                    <ion-item>\n\n                        <h2 style="color: #ed3954;text-align: center">DEPOSITORY</h2>\n\n                        <p style="text-align: center" text-wrap>Our depository services offer you a secure, convenient, paperless and cost effective way to keep track of your investments in shares and other instruments over a period of time. </p>\n\n                        <div align="end">\n\n                            <p style="color: #f53d3d;font-size: 12px;">Read More.</p>\n\n                        </div>\n\n                    </ion-item>\n\n                </ion-card>\n\n\n\n                <ion-card class="card" type="button" align="center">\n\n                    <div align="center">\n\n                        <img style="width: 80px;height: 80px;background-color: #EFEFEF;border-radius: 50%;padding: 5px;margin-top: 8px;" src="assets/imgs/pb5.png">\n\n                    </div>\n\n                    <ion-item>\n\n                        <h2 style="color: #ed3954;text-align: center">STOCK SIP</h2>\n\n                        <p style="text-align: center" text-wrap>Stock SIP is a vehicle offered to help investor save regularly. It is just like a recurring deposit with the bank where investor put in a small amount every month.  </p>\n\n                        <div align="end">\n\n                            <p style="color: #f53d3d;font-size: 12px;">Read More.</p>\n\n                        </div>\n\n                    </ion-item>\n\n                </ion-card>\n\n\n\n                <ion-card class="card" type="button" align="center">\n\n                    <div align="center">\n\n                        <img style="width: 80px;height: 80px;background-color: #EFEFEF;border-radius: 50%;padding: 5px;margin-top: 8px;" src="assets/imgs/pb6.png">\n\n                    </div>\n\n                    <ion-item>\n\n                        <h2 style="color: #ed3954;text-align: center">CURRENCY</h2>\n\n                        <p style="text-align: center" text-wrap>The global increase in trade and foreign investments has led to inter-connection of many national economies leading to greater need for a stronger . </p>\n\n                        <div align="end">\n\n                            <p style="color: #f53d3d;font-size: 12px;">Read More.</p>\n\n                        </div>\n\n                    </ion-item>\n\n                </ion-card>\n\n\n\n\n\n            </ion-list>\n\n        </ion-list>\n\n\n\n        <ion-list *ngIf="hide == true">\n\n            <ion-list style="margin: 0px 0px 0px;" (tap)="openvideolink()">\n\n                <ion-card class="card">\n\n                    <img src="{{item.IMAGE}}" style="border-bottom: 1px solid #8b8b8b;width: 348px;height: 225px"/>\n\n                    <ion-item>\n\n                        <h2 style="color: #ed3954;">{{item.TITLE}}</h2>\n\n                        <p style="font-size: 0.7em;">{{item.DATE}}</p>\n\n                    </ion-item>\n\n                </ion-card>\n\n\n\n            </ion-list>\n\n        </ion-list>\n\n\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\brokerdetails\brokerdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], BrokerdetailsPage);
    return BrokerdetailsPage;
}());

//# sourceMappingURL=brokerdetails.js.map

/***/ })

});
//# sourceMappingURL=44.js.map