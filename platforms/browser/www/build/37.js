webpackJsonp([37],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponcodePageModule", function() { return CouponcodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__couponcode__ = __webpack_require__(495);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CouponcodePageModule = /** @class */ (function () {
    function CouponcodePageModule() {
    }
    CouponcodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__couponcode__["a" /* CouponcodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__couponcode__["a" /* CouponcodePage */]),
            ],
        })
    ], CouponcodePageModule);
    return CouponcodePageModule;
}());

//# sourceMappingURL=couponcode.module.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponcodePage; });
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
 * Generated class for the CouponcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CouponcodePage = /** @class */ (function () {
    function CouponcodePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CouponcodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CouponcodePage');
    };
    CouponcodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-couponcode',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\couponcode\couponcode.html"*/'<!--\n\n  Generated template for the CouponcodePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Coupon code</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div style="margin-top: 10px " id="cloud-layer">\n\n    <ion-row style="padding-left: 20px;padding-right: 20px">\n\n      <ion-col>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-input type="text" placeholder="Coupon Code" [value]="numberset" style="color: #000000;margin-left: 10px;" autocomplete="off" [autocomplete]="false"></ion-input>\n\n\n\n\n\n          </ion-item>\n\n\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color="primary">\n\n    <ion-row col-12 style="padding: 0px;">\n\n      <!--<ion-col col-6>-->\n\n      <!--<div><span style="font-weight: bold; font-size: 16px ;color: #0093DD" (click)="skipbtn()">SKIP</span></div>-->\n\n      <!--</ion-col>-->\n\n      <ion-col col-12 (click)="Loginbtn()">\n\n        <div style="text-align: center;" ><span style="font-weight: bold; font-size: 16px ;color: #ffffff;">APPLY</span></div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\couponcode\couponcode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], CouponcodePage);
    return CouponcodePage;
}());

//# sourceMappingURL=couponcode.js.map

/***/ })

});
//# sourceMappingURL=37.js.map