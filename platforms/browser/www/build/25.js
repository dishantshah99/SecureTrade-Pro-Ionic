webpackJsonp([25],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MywalletPageModule", function() { return MywalletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mywallet__ = __webpack_require__(508);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MywalletPageModule = /** @class */ (function () {
    function MywalletPageModule() {
    }
    MywalletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mywallet__["a" /* MywalletPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mywallet__["a" /* MywalletPage */]),
            ],
        })
    ], MywalletPageModule);
    return MywalletPageModule;
}());

//# sourceMappingURL=mywallet.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MywalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screenshot__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MywalletPage = /** @class */ (function () {
    function MywalletPage(navCtrl, loadingCtrl, navParams, api, socialSharing, screenshot) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.api = api;
        this.socialSharing = socialSharing;
        this.screenshot = screenshot;
        this.loading = this.loadingCtrl.create({ content: "please wait..." });
        this.loading.present();
        this.login_details = JSON.parse(localStorage.getItem("login_details"));
        console.log("logDetail", this.login_details);
        this.REFERRER_USER = this.login_details.user_data.REFCODE;
        console.log("REFERRER_USER", this.REFERRER_USER);
        this.api.walletListDisplay(this.login_details.user_data.ID)
            .then(function (data) {
            _this.apiData = data;
            _this.amount = _this.apiData.data;
            console.log("balance", _this.amount);
        }).catch();
        this.api.walletHistry(this.login_details.user_data.ID)
            .then(function (data) {
            _this.apiData = data;
            _this.items = _this.apiData.data;
            console.log("walletList", _this.items);
            _this.loading.dismiss();
        }).catch();
    }
    MywalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MywalletPage');
    };
    MywalletPage.prototype.gotoSubscribe = function () {
        this.navCtrl.push('SubscribeplanPage');
    };
    MywalletPage.prototype.shareInfo = function () {
        /*  this.socialSharing.share("Istri-Westri " + "\n" + "Hello").then(() => {
  
          }).catch(() => {
  
          });*/
        var _this = this;
        //  this.socialSharing.share("Hello", null, null, null);
        this.socialSharing.share("Secure Trade \n Your Ref. Code is : " + this.REFERRER_USER, "Demo subject", "", "https://play.google.com/store/apps/details?id=&hl=en%22").then(function () {
            console.log("Share Contant", _this.socialSharing);
        }).catch(function () {
        });
    };
    MywalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mywallet',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\mywallet\mywallet.html"*/'<!--\n\n  Generated template for the MywalletPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>My Wallet</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="login-content">\n\n\n\n    <div class="ion-row">\n\n\n\n        <ion-row>\n\n\n\n            <ion-col>\n\n\n\n                <ion-label class="lable lable-style">Your Current Balance is :</ion-label>\n\n\n\n                <ion-item class="ion-item">\n\n\n\n                    <img src="assets/imgs/rupee_icon.png" class="fa-icons" item-left/>\n\n\n\n                    <!--<fa-icon class="fa-icons" name="rupee" item-left medium></fa-icon>-->\n\n                    <ion-label class="lable lable-style" style="margin-top: 7px">{{amount}}</ion-label>\n\n                    <!--<ion-input type="text" value="{{amount}}" disabled></ion-input>-->\n\n\n\n                </ion-item>\n\n\n\n                <ion-label class="lable lable-style">Your Ref. Code is :</ion-label>\n\n\n\n                <ion-item class="ion-item">\n\n\n\n                    <!--<ion-icon name="leaf" item-left primary></ion-icon>-->\n\n\n\n                    <img src="assets/imgs/ref_code_icon.png" class="fa-icons" item-left/>\n\n\n\n                    <!--<fa-icon class="fa-icons" name="code" item-left primary></fa-icon>-->\n\n\n\n                    <ion-label style="width: 100%; color: #ed3954 ; font-weight: bold;" text-wrap>{{REFERRER_USER}}</ion-label>\n\n                    <!--<ion-input type="text"  value="{{REFERRER_USER}}" disabled></ion-input>-->\n\n                    <!--<fa-icon class="fa-icons" item-right primary name="share-alt" (click)="shareInfo()"></fa-icon>-->\n\n\n\n                    <img src="assets/imgs/share_icon.png"  class="fa-icons" (click)="shareInfo()" item-right/>\n\n\n\n                </ion-item>\n\n\n\n            </ion-col>\n\n\n\n            <ion-col>\n\n\n\n                <button ion-button class="login-button login" (click)="gotoSubscribe()">Subscribe Now</button>\n\n\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n    </div>\n\n\n\n    <div>\n\n        <ion-card class="ion-cards" *ngFor="let item of items">\n\n            <ion-item style="margin-bottom: 0px">\n\n                <!--<ion-icon name="date"></ion-icon>-->\n\n                <img src="assets/imgs/user_icon.png" item-left  style="margin: 0px 4px 13px 0;"class="fa-icons"/>\n\n\n\n                <!--<fa-icon class="fa-icons fa-icons" style="margin: 0px 4px 13px 0;" name="user" item-left medium></fa-icon>-->\n\n\n\n                <h4 style="font-weight: bold; color:#ed3954 ">New register</h4>\n\n\n\n                <p>Type :\n\n\n\n                    <small> New Register</small>\n\n\n\n                </p>\n\n\n\n                <img src="assets/imgs/rupee_icon.png" class="fa-icons" item-right/>\n\n\n\n                <!--<fa-icon class="fa-icons" item-right primary name="rupee"></fa-icon>-->\n\n\n\n                <label item-right style="margin: 0px;color: #666;">Amount : {{item.AMOUNT}}</label>\n\n\n\n            </ion-item>\n\n\n\n        </ion-card>\n\n\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\mywallet\mywallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_screenshot__["a" /* Screenshot */]])
    ], MywalletPage);
    return MywalletPage;
}());

//# sourceMappingURL=mywallet.js.map

/***/ })

});
//# sourceMappingURL=25.js.map