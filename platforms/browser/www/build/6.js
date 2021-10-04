webpackJsonp([6],{

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrialpagePageModule", function() { return TrialpagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trialpage__ = __webpack_require__(527);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrialpagePageModule = /** @class */ (function () {
    function TrialpagePageModule() {
    }
    TrialpagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trialpage__["a" /* TrialpagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trialpage__["a" /* TrialpagePage */]),
            ],
        })
    ], TrialpagePageModule);
    return TrialpagePageModule;
}());

//# sourceMappingURL=trialpage.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrialpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(132);
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
 * Generated class for the TrialpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrialpagePage = /** @class */ (function () {
    function TrialpagePage(navCtrl, navParams, callNumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.live_chart_info = "NSE Cash , Futures and MCX Live Charts <br> Premier Buy sell Signal Software <br> Data Will be updated 15-30 second Delayed <br> Exclusive Training will be given and videos will be given <br> Be updated with Secure Trade/online <br> Originally Software Price is 45000 annually <br> 5 min Charts will be display with 15 -30 sec delayed <br> No Data Cost , Software Cost , No VPS Cost <br> Cost Effective Advance Day Trading Charts";
        this.Advisory_service_info = "Advisory Call <br> Equity Cash <br> Futures Call <br> BTST/Positional and Swing Call <br> Option Call <br> Kindly Follow Strict Stop Loss if cant then do nott Trade <br> Pure Technical Analysis Charts base Call <br> Its come with Logic Why Buy or Sell with Chart Images <br> Live Chat with Expert real time <br> No SMS only real time Alert will be provided";
        this.knowledge_zone_info = "Learning Zone <br> Tutorials will be provided to Monthly Basis <br> Topic will be decided by Admin but related to market and trading only <br> It is strictly confidential <br> Will be focus on Option Trading , Money Management , Trading Psychology etc <br> Images , Video’s will be given <br> Trading Journal will be provided on demand basis";
        this.planname = navParams.data;
        console.log("Plan name", this.planname);
        if (this.planname == "Live Signal") {
            this.plantext = this.live_chart_info;
        }
        else if (this.planname == "Advisory Services") {
            this.plantext = this.Advisory_service_info;
        }
        else if (this.planname == "Knowledge Zone") {
            this.plantext = this.knowledge_zone_info;
        }
    }
    TrialpagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrialpagePage');
    };
    TrialpagePage.prototype.callus = function () {
        this.launchDialer("7414966199");
    };
    TrialpagePage.prototype.launchDialer = function (n) {
        window.open("tel:" + n);
        this.callNumber.callNumber(n, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
        console.log("dialNo", this.callNumber);
    };
    TrialpagePage.prototype.subsribe = function () {
        this.navCtrl.push('SubscribeplanPage');
    };
    TrialpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trialpage',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\trialpage\trialpage.html"*/'<!--\n\n  Generated template for the TrialpagePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Subscribe Now</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-icon ios="ios-information-circle" md="md-information-circle" item-start style="margin-top: 15px; margin-left: 4px;"></ion-icon>\n\n      </ion-col>\n\n      <ion-col col-11>\n\n        <div text-wrap text-justify>\n\n          <ion-label [innerHtml]=plantext></ion-label>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer style="background: #ed3954">\n\n  <ion-row>\n\n    <ion-col col-6 style="background: white">\n\n      <button ion-button full style="margin-bottom: 0px; width: 100%; background: #ed3954; margin-top: 8px; border-radius: 5px;" (click)="callus()">Call Us</button>\n\n    </ion-col>\n\n    <ion-col col-6 style="background: white">\n\n      <button ion-button full style="margin-bottom: 0px; width: 100%; background: #ed3954; margin-top: 8px; border-radius: 5px; " (click)="subsribe()">Subscribe Plan</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\trialpage\trialpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], TrialpagePage);
    return TrialpagePage;
}());

//# sourceMappingURL=trialpage.js.map

/***/ })

});
//# sourceMappingURL=6.js.map