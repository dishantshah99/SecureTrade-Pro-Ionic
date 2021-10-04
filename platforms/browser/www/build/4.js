webpackJsonp([4],{

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifynumberPageModule", function() { return VerifynumberPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verifynumber__ = __webpack_require__(529);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerifynumberPageModule = /** @class */ (function () {
    function VerifynumberPageModule() {
    }
    VerifynumberPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verifynumber__["a" /* VerifynumberPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verifynumber__["a" /* VerifynumberPage */]),
            ],
        })
    ], VerifynumberPageModule);
    return VerifynumberPageModule;
}());

//# sourceMappingURL=verifynumber.module.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifynumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerifynumberPage = /** @class */ (function () {
    function VerifynumberPage(navCtrl, navParams, api, viewCtrl, loadingCtrl, callNumber, toastCtrl, plt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.callNumber = callNumber;
        this.toastCtrl = toastCtrl;
        this.plt = plt;
        this.login_data = JSON.parse(localStorage.getItem("login_data"));
        console.log("Local Data", this.login_data);
        this.number = this.login_data.data.MOBILE;
    }
    VerifynumberPage.prototype.launchDialer = function (n) {
        window.open("tel:" + n);
        this.callNumber.callNumber(n, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
        console.log("dialNo", this.callNumber);
    };
    VerifynumberPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifynumberPage');
    };
    VerifynumberPage.prototype.registration = function () {
        var _this = this;
        // this.navCtrl.push('SignupPage')
        if (this.otpno.value == '') {
            this.api.presentToast("Enter OTP");
        }
        else {
            this.loading = this.loadingCtrl.create({ content: "please wait..." });
            this.api.verifyOTP(this.otpno.value).then(function (result) {
                _this.data = result;
                console.log("JSON ");
                _this.loading.dismiss();
                if (_this.data.status == 200) {
                    if (_this.data.data[0].NAME == null) {
                        var data = {
                            data: _this.data.data[0],
                            verify: 0
                        };
                        localStorage.setItem('login_data', JSON.stringify(data));
                        _this.login_data = JSON.parse(localStorage.getItem("login_data"));
                        console.log("Local Data", _this.login_data);
                        _this.navCtrl.setRoot('SignupPage');
                    }
                    else {
                        var data = {
                            data: _this.data.data[0],
                            verify: 1
                        };
                        localStorage.setItem('login_data', JSON.stringify(data));
                        _this.login_data = JSON.parse(localStorage.getItem("login_data"));
                        console.log("Local Data", _this.login_data);
                        _this.api.title = _this.login_data.data.NAME;
                        _this.api.Mobile = _this.login_data.data.MOBILE;
                        _this.api.type = _this.login_data.data.REFCODE;
                        _this.api.profileimage = _this.login_data.data.PROFILEIMAGE;
                        _this.api.isLogin = true;
                        _this.getsymboldata();
                        // this.navCtrl.setRoot('HomePage');
                    }
                    _this.api.presentToast(_this.data.message);
                    // this.api.UID = this.login_data.data.ID;
                    // this.api.DEPARTMENT = this.login_data.data.DEPARTMENT;
                }
                else {
                    _this.api.ErrorApi(_this.data.status, _this.data.message);
                }
            }, function (err) {
                // console.log(err);
                _this.loading.dismiss();
            });
        }
    };
    VerifynumberPage.prototype.getsymboldata = function () {
        var _this = this;
        this.api.splashscreenapi().then(function (data) {
            // this.users = data;
            _this.plandata = data;
            console.log("planDATA", _this.plandata);
            if (_this.plandata.status == '200') {
                localStorage.removeItem("NSECASH");
                localStorage.removeItem("NSEFO");
                localStorage.removeItem("MCX");
                localStorage.setItem("NSECASH", JSON.stringify(_this.plandata.symbol.NSECASH));
                localStorage.setItem("NSEFO", JSON.stringify(_this.plandata.symbol.NSEFO));
                localStorage.setItem("MCX", JSON.stringify(_this.plandata.symbol.MCX));
                var datapass = {
                    ALGO_LIVECHART_PURCHSE: _this.plandata.ALGO_LIVECHART_PURCHSE,
                    AUTO_ADVICERY_PURCHSE: _this.plandata.AUTO_ADVICERY_PURCHSE,
                    LIVE_CHART_PURCHSE: _this.plandata.LIVE_CHART_PURCHSE,
                    LIVE_RATE_PURCHSE: _this.plandata.LIVE_RATE_PURCHSE,
                    MESSAGE_BOARD_PURCHSE: _this.plandata.MESSAGE_BOARD_PURCHSE
                };
                localStorage.setItem("PURCHASE", JSON.stringify(datapass));
                _this.api.ALGO_LIVECHART_PURCHSE = _this.plandata.ALGO_LIVECHART_PURCHSE;
                _this.api.AUTO_ADVICERY_PURCHSE = _this.plandata.AUTO_ADVICERY_PURCHSE;
                _this.api.LIVE_CHART_PURCHSE = _this.plandata.LIVE_CHART_PURCHSE;
                _this.api.LIVE_RATE_PURCHSE = _this.plandata.LIVE_RATE_PURCHSE;
                _this.api.MESSAGE_BOARD_PURCHSE = _this.plandata.MESSAGE_BOARD_PURCHSE;
                if (_this.api.LIVE_CHART_PURCHSE == false) {
                    _this.navCtrl.setRoot('HomepagefreePage');
                }
                else {
                    _this.navCtrl.setRoot('HomePage');
                }
            }
            else {
                _this.api.ErrorApi(_this.plandata.status, _this.plandata.message);
            }
        }).catch();
    };
    VerifynumberPage.prototype.resend = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({ content: "please wait..." });
        this.loading.present();
        console.log("number", this.number);
        if (this.number != "") {
            this.api.Resendotpapi().then(function (result) {
                _this.redata = result;
                _this.loading.dismiss();
                if (_this.redata.status == 200) {
                    _this.api.presentToast(_this.redata.message);
                    // this.api.OTP = this.redata.otp
                }
                else {
                    _this.api.ErrorApi(_this.redata.status, _this.redata.message);
                }
            }, function (err) {
                console.log(err);
                // this.api.presentToast(err);
            });
        }
    };
    VerifynumberPage.prototype.editnumber = function () {
        this.navCtrl.push('LoginPage', this.number);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('otp'),
        __metadata("design:type", Object)
    ], VerifynumberPage.prototype, "otpno", void 0);
    VerifynumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verifynumber',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\verifynumber\verifynumber.html"*/'<!--\n\n  Generated template for the VerifynumberPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Verify OTP</ion-title>\n\n        <!--<ion-icon name="ios-close" style=" color: #ffffff; float: right; margin-right: 10px; zoom:2.0;" (click)="closeModal()"></ion-icon>-->\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <div>\n\n        <h5 style="color: #8b8b8b; margin-left: 30px;">Please wait.</h5>\n\n        <h5 style="color : #8b8b8b; margin-left: 30px; margin-top: -5px">We will verify the OTP sent to </h5>\n\n        <ion-item no-lines style="background-color: transparent" (click)="editnumber()" transparent>\n\n            <ion-label style="color: #8b8b8b; margin-left: 15px; margin-top: -5px; font-weight: bold">{{number || 1234567890}}</ion-label>\n\n            <ion-icon item-end style="color: #8b8b8b; font-size: 20px; margin-top: -2px;" name="md-create"></ion-icon>\n\n        </ion-item>\n\n            <ion-row style="margin-top: 50px">\n\n                <ion-col col-12>\n\n                    <ion-item  no-padding style="background-color: transparent">\n\n                        <!--<ion-label>Username</ion-label>-->\n\n                        <ion-input style="color: #000000; font-weight: bold; font-size: 18px;" text-center type="number" [value]="api.OTP"  placeholder="Enter 4-digit OTP" #otp></ion-input>\n\n                        <!--#otp-->\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n        <ion-label style="margin-top: 10px; text-align: center;" text-wrap (click)="launchDialer(\'7041944934\')">IF Dont get OTP, please Do call on 7041944934</ion-label>\n\n    </div>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar color="primary">\n\n        <ion-row col-12 style="padding: 0px;">\n\n            <ion-col col-6>\n\n                <div><span style="color: #fff; font-weight: bold; font-size: 16px;margin-left: 10% " (click)="resend()">RESEND</span></div>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <div><span style="color: #fff; font-weight: bold; font-size: 16px ;margin-left:56%" (click)="registration()">VERIFY</span></div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\verifynumber\verifynumber.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */]])
    ], VerifynumberPage);
    return VerifynumberPage;
}());

//# sourceMappingURL=verifynumber.js.map

/***/ })

});
//# sourceMappingURL=4.js.map