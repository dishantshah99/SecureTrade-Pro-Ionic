webpackJsonp([42],{

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageModule", function() { return ChangepasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword__ = __webpack_require__(493);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangepasswordPageModule = /** @class */ (function () {
    function ChangepasswordPageModule() {
    }
    ChangepasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */]]
        })
    ], ChangepasswordPageModule);
    return ChangepasswordPageModule;
}());

//# sourceMappingURL=changepassword.module.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
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



var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(navCtrl, navParams, api, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.login_details = JSON.parse(localStorage.getItem("login_details"));
        console.log("local_data", this.login_details);
        // console.log("after api Store Password", this.login_details.user_data.PASSWORD);
        this.local_password = localStorage.getItem("password");
        console.log("Local password", this.local_password);
    }
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
    };
    ChangepasswordPage.prototype.presentToast = function (msg) {
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
    ChangepasswordPage.prototype.changepassword = function () {
        var _this = this;
        this.login_details = JSON.parse(localStorage.getItem("login_details"));
        this.id = this.login_details.user_data.ID;
        this.password = this.login_details.user_data.PASSWORD;
        console.log("Store Password", this.password);
        this.OLDPASSWORD = this.oldpswd.value;
        this.NEWPASSWORD = this.newpswd.value;
        this.CONFIRMPASSWORD = this.cnfmpswd.value;
        console.log("old", this.OLDPASSWORD);
        console.log("new", this.NEWPASSWORD);
        console.log("confim", this.CONFIRMPASSWORD);
        if (this.OLDPASSWORD == '') {
            this.presentToast("Please Enter Old Password");
        }
        else if (this.OLDPASSWORD != this.local_password) {
            this.presentToast("Old password does not match");
        }
        else if (this.NEWPASSWORD == '') {
            this.presentToast("Please Enter New Password");
        }
        else if (this.CONFIRMPASSWORD == '') {
            this.presentToast("Please Enter Confirm Password");
        }
        else if (this.CONFIRMPASSWORD != this.NEWPASSWORD && this.NEWPASSWORD != this.CONFIRMPASSWORD) {
            this.presentToast("Confirm password does not match");
        }
        else if (this.local_password == this.NEWPASSWORD && this.NEWPASSWORD == this.local_password) {
            this.presentToast("Password does not Same");
        }
        else {
            this.loading = this.loadingCtrl.create({ content: "please wait..." });
            this.loading.present();
            this.api.changePassword(this.id, this.CONFIRMPASSWORD, "changepass")
                .then(function (data) {
                _this.loading.dismiss();
                _this.apiData = data;
                console.log("forgot", _this.apiData.data);
                console.log("lastpassword", _this.CONFIRMPASSWORD);
                console.log("id", _this.id);
                _this.items = _this.apiData.data;
                if (_this.apiData.status == 200) {
                    _this.navCtrl.setRoot('HomePage');
                    localStorage.setItem("password", _this.NEWPASSWORD);
                    _this.presentToast("password Changed successfully");
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
                console.log("after api Store Password", _this.password);
            }).catch();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
    ], ChangepasswordPage.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('oldpassword'),
        __metadata("design:type", Object)
    ], ChangepasswordPage.prototype, "oldpswd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('newpassword'),
        __metadata("design:type", Object)
    ], ChangepasswordPage.prototype, "newpswd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('confirmpassword'),
        __metadata("design:type", Object)
    ], ChangepasswordPage.prototype, "cnfmpswd", void 0);
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changepassword',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\changepassword\changepassword.html"*/'<!--\n\n  Generated template for the ChangepasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Change Password</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background-color: #ededed">\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n\n\n            <p>\n\n                <ion-item>\n\n\n\n                    <!--<fa-icon name="lock" color="primary" item-left size="1x"></fa-icon>-->\n\n                    <img  src="assets/imgs/lock.png" item-left style="width: 25px;height: 25px;">\n\n                    <ion-input style="border-bottom: 1px solid #ed3954;" type="password" placeholder="Old Password" #oldpassword></ion-input>\n\n                    <!--<fa-icon name="eye" color="primary" item-right size="1x"></fa-icon>-->\n\n\n\n                </ion-item>\n\n            </p>\n\n\n\n            <p>\n\n                <ion-item>\n\n\n\n                    <!--<fa-icon name="lock" color="primary" item-left size="1x"></fa-icon>-->\n\n                    <img  src="assets/imgs/lock.png" item-left style="width: 25px;height: 25px;">\n\n                    <ion-input style="border-bottom: 1px solid #ed3954;" type="password" placeholder="New Password" #newpassword></ion-input>\n\n                    <!--<fa-icon name="eye" color="primary" item-right size="1x"></fa-icon>-->\n\n\n\n                </ion-item>\n\n            </p>\n\n\n\n            <p>\n\n                <ion-item>\n\n\n\n                    <!--<fa-icon name="lock" color="primary" item-left size="1x"></fa-icon>-->\n\n                    <img  src="assets/imgs/lock.png" item-left style="width: 25px;height: 25px;">\n\n                    <ion-input style="border-bottom: 1px solid #ed3954;" type="password" placeholder="Confirm Password" #confirmpassword></ion-input>\n\n\n\n                    <!--<fa-icon name="eye" color="primary" item-right size="1x"></fa-icon>-->\n\n\n\n\n\n                </ion-item>\n\n            </p>\n\n\n\n            <p>\n\n                <ion-row col-12 style="padding: 21px;">\n\n                    <ion-col col-12 align="center">\n\n                        <!--<button ion-button full class="login-button login"><span style="color: #ffff;" (click)="changepassword()">Change Password</span></button>-->\n\n                        <!--<button ion-button full  class="pass-button">Change Password</button>-->\n\n                        <button  ion-button color="primary" (click)="changepassword()" style="color: #ffff;border-radius: 30px;font-size: 15px;">Change Password</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </p>\n\n\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\changepassword\changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ })

});
//# sourceMappingURL=42.js.map