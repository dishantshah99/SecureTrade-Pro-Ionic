webpackJsonp([21],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtppopupPageModule", function() { return OtppopupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otppopup__ = __webpack_require__(511);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OtppopupPageModule = /** @class */ (function () {
    function OtppopupPageModule() {
    }
    OtppopupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__otppopup__["a" /* OtppopupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__otppopup__["a" /* OtppopupPage */]),
            ],
        })
    ], OtppopupPageModule);
    return OtppopupPageModule;
}());

//# sourceMappingURL=otppopup.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtppopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(52);
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
 * Generated class for the OtppopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtppopupPage = /** @class */ (function () {
    function OtppopupPage(navCtrl, navParams, viewCtrl, renderer, callNumber, loadingCtrl, api, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.renderer = renderer;
        this.callNumber = callNumber;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'custom-popup', true);
        console.log("OTP", viewCtrl.data.otp);
        this.mainotp = viewCtrl.data.otp;
        console.log("userid", viewCtrl.data.userid);
        this.userid = viewCtrl.data.userid;
        console.log("mobileno", viewCtrl.data.mobileno);
        this.mobileno = viewCtrl.data.mobileno;
        this.loading = this.loadingCtrl.create({ content: "please wait..." });
    }
    OtppopupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtppopupPage');
    };
    OtppopupPage.prototype.opencall = function (number) {
        this.launchDialer(number);
    };
    OtppopupPage.prototype.launchDialer = function (n) {
        window.open("tel:" + n);
        this.callNumber.callNumber(n, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
        console.log("dialNo", this.callNumber);
    };
    OtppopupPage.prototype.resend = function () {
        var _this = this;
        this.loading.present();
        this.api.forgotPassword(this.mobileno)
            .then(function (data) {
            console.log(data);
            _this.apiData = data;
            _this.loading.dismiss();
            console.log("forgot", _this.apiData.data);
            console.log("apidata123", _this.apiData.status);
            if (_this.apiData.status == 200) {
                _this.loading.dismiss();
                console.log("status", "fggcjnbhjmnbh");
                console.log("otp23445t65", _this.apiData.data[0].OTP);
                _this.userid = _this.apiData.data[0].ID;
                _this.mainotp = _this.apiData.data[0].OTP;
                //this.submitOTP(this.apiData.data[0].OTP, this.userid);
            }
            else if (_this.apiData.status == 404) {
                _this.api.presentToast(_this.apiData.message);
            }
            else if (_this.apiData.status == 440) {
                _this.api.presentToast(_this.apiData.message);
                localStorage.removeItem("login_apiData");
                _this.navCtrl.setRoot('LoginPage');
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
        }).catch();
    };
    OtppopupPage.prototype.confirmbtn = function () {
        if (this.otp.value == '') {
            this.presentToast("Please Enter OTP");
            return false;
        }
        else if (this.otp.value != this.mainotp) {
            this.presentToast("Please Enter Valid OTP");
            return false;
        }
        else {
            this.viewCtrl.dismiss();
            this.changpassword(this.userid);
        }
    };
    OtppopupPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 1000,
            position: 'bottom',
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    OtppopupPage.prototype.changpassword = function (userid) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Forgot Password',
            message: "",
            inputs: [
                {
                    name: 'NewPassword',
                    placeholder: 'New Password.',
                    type: 'password'
                },
                {
                    name: 'confirmpassword',
                    placeholder: 'Confirm Password.',
                    type: 'password'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirm',
                    handler: function (data) {
                        if (data.NewPassword == '') {
                            _this.presentToast("Please Enter New Password");
                            prompt.present();
                            return false;
                        }
                        else if (data.confirmpassword == '') {
                            _this.presentToast("Please enter Confirm Password");
                            prompt.present();
                            return false;
                        }
                        else if (data.confirmpassword != data.NewPassword) {
                            _this.presentToast("Confirm Password does not match");
                            prompt.present();
                            return false;
                        }
                        else {
                            _this.api.changePassword(userid, data.confirmpassword, "changepass")
                                .then(function (data) {
                                console.log(data);
                                _this.apiData = data;
                                console.log("forgot", _this.apiData.data);
                                _this.items = _this.apiData.data;
                                if (_this.apiData.status == 200) {
                                    _this.presentToast("Passward Changed Sucessfully ");
                                    var rootPage = 'LoginPage';
                                    _this.navCtrl.setRoot(rootPage);
                                }
                                else if (_this.apiData.status == 404) {
                                    _this.api.presentToast(_this.apiData.message);
                                }
                                else if (_this.apiData.status == 440) {
                                    _this.api.presentToast(_this.apiData.message);
                                    localStorage.removeItem("login_apiData");
                                    _this.navCtrl.setRoot('LoginPage');
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
                            }).catch();
                        }
                        console.log('Send OTP clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('otp'),
        __metadata("design:type", Object)
    ], OtppopupPage.prototype, "otp", void 0);
    OtppopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otppopup',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\otppopup\otppopup.html"*/'<div style="background: #ed3954">\n\n<ion-card style="width: 90%; position: fixed; z-index: 60;align-content: center;margin: 5%;margin-top: 40%; border-radius: 10px;" >\n\n  <div style="padding: 20px;">\n\n    <ion-label style="text-align: center">Enter OTP</ion-label>\n\n\n\n    <ion-input placeholder="Enter otp here" style="margin-top: 10px;" type="number" #otp></ion-input>\n\n      <hr style="background:#ed3954">\n\n    <ion-label style="margin-top: 10px; text-align: center;" text-wrap (click)="launchDialer(\'9662015683\')">IF Dont get OTP, please Do call on 9662015683</ion-label>\n\n\n\n      <ion-row style="margin-top: 20px;">\n\n          <ion-col col-6>\n\n              <button ion-button class="register-btn" color="opposite" style="width: 100%; text-transform: none;" (click)="resend()">Resend</button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n              <button ion-button class="register-btn" color="opposite" style="width: 100%; text-transform: none;" (click)="confirmbtn()">Confirm</button>\n\n          </ion-col>\n\n      </ion-row>\n\n  </div>\n\n</ion-card>\n\n</div>'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\otppopup\otppopup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
    ], OtppopupPage);
    return OtppopupPage;
}());

//# sourceMappingURL=otppopup.js.map

/***/ })

});
//# sourceMappingURL=21.js.map