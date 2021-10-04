webpackJsonp([38],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function() { return ContactusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactus__ = __webpack_require__(497);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactusPageModule = /** @class */ (function () {
    function ContactusPageModule() {
    }
    ContactusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contactus__["a" /* ContactusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contactus__["a" /* ContactusPage */]),
            ],
        })
    ], ContactusPageModule);
    return ContactusPageModule;
}());

//# sourceMappingURL=contactus.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(255);
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
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactusPage = /** @class */ (function () {
    function ContactusPage(navCtrl, platform, toastCtrl, emailComposer, socialSharing, navParams, alertCtrl, api, callNumber, loadingCtrl) {
        // this.login_details = JSON.parse(localStorage.getItem("login_details"));
        // console.log("logDetail", this.login_details);
        // this.REFERRER_USER = this.login_details.user_data.REFCODE;
        // console.log("REFERRER_USER", this.REFERRER_USER);
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.emailComposer = emailComposer;
        this.socialSharing = socialSharing;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.callNumber = callNumber;
        this.loadingCtrl = loadingCtrl;
        // this.api.walletListDisplay(this.login_details.user_data.ID)
        //     .then(data => {
        //
        //         this.apiData = data;
        //
        //         console.log("Api list", this.apiData);
        //
        //         this.amount = this.apiData.data;
        //
        //         console.log("balance", this.amount);
        //
        //     }).catch();
    }
    ContactusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactusPage');
    };
    ContactusPage.prototype.showConfirm = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: '',
            message: "Submit Query",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Query Here'
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
                    text: 'Submit',
                    handler: function (data) {
                        console.log('Submit  clicked');
                        console.log(JSON.stringify(data));
                        console.log("input", data.title);
                        _this.login_details = JSON.parse(localStorage.getItem("login_details"));
                        console.log("userId", _this.login_details.user_data.ID);
                        _this.REFERRER_USER = _this.login_details.user_data.REFCODE;
                        console.log("REFERRER_USER", _this.REFERRER_USER);
                        if (data.title == '') {
                            _this.presentToast("Please enter Query");
                            prompt.present();
                            return false;
                        }
                        else {
                            _this.loading = _this.loadingCtrl.create({ content: "please wait..." });
                            _this.loading.present();
                            _this.api.submitQuery(_this.login_details.user_data.ID, data.title, "contact_add")
                                .then(function (data) {
                                _this.loading.dismiss();
                                console.log("abc", data);
                                _this.apiData = data;
                                if (_this.apiData.status == 200) {
                                    _this.navCtrl.setRoot('HomePage');
                                    _this.presentToast(_this.apiData.message);
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
                                console.log("dfgdfgdfgdf", _this.apiData);
                                // let rootPage = ContactusPage;
                                // this.nav.setRoot(rootPage);
                                console.log("balance", _this.amount);
                            }).catch();
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ContactusPage.prototype.openUrl = function (url) {
        window.open(url, '_system', 'location=yes');
    };
    ContactusPage.prototype.launchDialer = function (n) {
        window.open("tel:" + n);
        this.callNumber.callNumber(n, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
        console.log("dialNo", this.callNumber);
    };
    ContactusPage.prototype.presentToast = function (msg) {
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
    ContactusPage.prototype.sendEmail = function () {
        var email = {
            to: 'connect@securetrade.in',
        };
        this.emailComposer.open(email);
    };
    ContactusPage.prototype.sendMail = function () {
        var email = {
            to: 'hasmukh18@gmail.com',
        };
        this.emailComposer.open(email);
    };
    ContactusPage.prototype.shareInfo = function () {
        var data = "SecureTrade Pro + '\n + Email : connect@securetrade.in + \n + Mobile no : +91 9904500251 ";
        this.socialSharing.share(data, "", "", this.api.playstorelink).then(function () {
        }).catch(function () {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('query'),
        __metadata("design:type", Object)
    ], ContactusPage.prototype, "querY", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
    ], ContactusPage.prototype, "nav", void 0);
    ContactusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contactus',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\contactus\contactus.html"*/'<ion-header xmlns:mailto="http://www.w3.org/1999/xhtml" xmlns:mailto="http://www.w3.org/1999/xhtml" xmlns:mailto="http://www.w3.org/1999/xhtml">\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Get In Touch</ion-title>\n\n        <!--<ion-icon name="md-share" style=" margin-left: 17px; margin-right: 17px; margin-top: 4px;font-weight: bold; "></ion-icon>-->\n\n        <span style="float: right; color: white;font-weight: bold;" end><ion-icon name="md-share" style=" margin-left: 17px; margin-right: 20px; margin-top: 4px;font-weight: bold; " (click)="shareInfo()"></ion-icon></span>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background-color: #ededed">\n\n\n\n    <ion-card>\n\n\n\n        <ion-card-header color="primary">\n\n            Call Us :\n\n        </ion-card-header>\n\n\n\n        <ion-card-content>\n\n\n\n            <p style="margin-top: -15px">\n\n                <ion-item style="padding-left: 0px">\n\n                    <ion-item>\n\n                        <!--<fa-icon name="phone" size="1x"></fa-icon>-->\n\n                        <img src="assets/imgs/phone.png" style="width: 20px;height: 20px;" item-start>\n\n                        <span style="margin-left: 10px;" (click)="launchDialer(\'7041944934\')">+91 7041944934</span>\n\n                    </ion-item>\n\n                </ion-item>\n\n            </p>\n\n\n\n            <!-- <p style="margin-top: -15px">\n\n                 <ion-item style="padding-left: 0px">\n\n                     <ion-item>\n\n                         &lt;!&ndash;<fa-icon name="phone" size="1x"></fa-icon>&ndash;&gt;\n\n                         <img src="assets/imgs/phone.png" style="width: 20px;height: 20px;" item-start>\n\n                         <span style="margin-left: 10px;" (click)="launchDialer(\'7878066466\')">+91 7878066466</span>\n\n                     </ion-item>\n\n                 </ion-item>\n\n             </p>-->\n\n            <!--\n\n                        <p style="margin-top: -15px">\n\n                            <ion-item style="padding-left: 0px">\n\n                                <ion-item>\n\n                                    &lt;!&ndash;<fa-icon name="phone" size="1x"></fa-icon>&ndash;&gt;\n\n                                    <img src="assets/imgs/phone.png" style="width: 20px;height: 20px;" item-start>\n\n                                    <span style="margin-left: 10px;" (click)="launchDialer(\'9228165071\')">+91 9228165071</span>\n\n                                </ion-item>\n\n                            </ion-item>\n\n                        </p>-->\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n\n\n        <ion-card-header color="primary">\n\n            Email Us :\n\n        </ion-card-header>\n\n\n\n        <ion-card-content>\n\n\n\n            <p style="margin-top: -15px">\n\n                <ion-item style="padding-left: 0px">\n\n                    <ion-item>\n\n                        <img src="assets/imgs/envelope.png" style="width: 20px;height: 20px;" item-start>\n\n                        <span style="margin-left: 10px;" (click)="sendEmail()">connect@securetrade.in</span>\n\n                    </ion-item>\n\n                </ion-item>\n\n            </p>\n\n            <p style="margin-top: -15px">\n\n                <ion-item style="padding-left: 0px">\n\n                    <ion-item>\n\n                        <img src="assets/imgs/envelope.png" style="width: 20px;height: 20px;" item-start>\n\n                        <span style="margin-left: 10px;" (click)="sendMail()">hasmukh18@gmail.com</span>\n\n                    </ion-item>\n\n                </ion-item>\n\n            </p>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header color="primary">\n\n            Follow Us on :\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <ion-icon name="logo-facebook" style="margin: 5px;font-size: 38px;color: cornflowerblue" (click)="openUrl(\'https://www.facebook.com/profile.php?id=100033561763822\')"></ion-icon>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <ion-icon name="logo-twitter" style="margin: 5px;font-size: 38px;color: deepskyblue" (click)="openUrl(\'https://twitter.com/secure_tradein\')"></ion-icon>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <ion-icon name="logo-instagram" style="margin: 5px;font-size: 38px;color: #9236C9;" (click)="openUrl(\'https://www.instagram.com/securetradetraining18/\')"></ion-icon>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <ion-icon name="logo-youtube" style="margin: 5px;font-size: 38px;color: red;" (click)="openUrl(\'https://www.youtube.com/user/hasmukh181818\')"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\contactus\contactus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], ContactusPage);
    return ContactusPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ })

});
//# sourceMappingURL=38.js.map