webpackJsonp([54],{

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-messages/admin-messages.module": [
		427,
		52
	],
	"../pages/adminmsg/adminmsg.module": [
		428,
		51
	],
	"../pages/advisory-services/advisory-services.module": [
		429,
		50
	],
	"../pages/advisorysearch/advisorysearch.module": [
		430,
		49
	],
	"../pages/autoadvisory/autoadvisory.module": [
		432,
		48
	],
	"../pages/blog-detail/blog-detail.module": [
		431,
		47
	],
	"../pages/blog/blog.module": [
		433,
		46
	],
	"../pages/broker/broker.module": [
		434,
		45
	],
	"../pages/brokerdetails/brokerdetails.module": [
		435,
		44
	],
	"../pages/cashrss/cashrss.module": [
		436,
		43
	],
	"../pages/changepassword/changepassword.module": [
		438,
		42
	],
	"../pages/charts/charts.module": [
		439,
		40
	],
	"../pages/charts2/charts2.module": [
		441,
		41
	],
	"../pages/comingsoon/comingsoon.module": [
		437,
		39
	],
	"../pages/contactus/contactus.module": [
		442,
		38
	],
	"../pages/couponcode/couponcode.module": [
		440,
		37
	],
	"../pages/ddl-modal/ddl-modal.module": [
		443,
		36
	],
	"../pages/ddl-model2/ddl-model2.module": [
		444,
		35
	],
	"../pages/eod-chart/eod-chart.module": [
		445,
		34
	],
	"../pages/fundamental-calls/fundamental-calls.module": [
		446,
		33
	],
	"../pages/fundamental-report/fundamental-report.module": [
		447,
		32
	],
	"../pages/futurerss/futurerss.module": [
		448,
		31
	],
	"../pages/home/home.module": [
		449,
		30
	],
	"../pages/homepagefree/homepagefree.module": [
		450,
		29
	],
	"../pages/imagedisplay/imagedisplay.module": [
		209
	],
	"../pages/knowledge-zone/knowledge-zone.module": [
		451,
		28
	],
	"../pages/live-charts/live-charts.module": [
		452,
		27
	],
	"../pages/live-chat/live-chat.module": [
		453,
		26
	],
	"../pages/login/login.module": [
		454,
		53
	],
	"../pages/mywallet/mywallet.module": [
		455,
		25
	],
	"../pages/optionsearch/optionsearch.module": [
		456,
		24
	],
	"../pages/optionselect/optionselect.module": [
		457,
		23
	],
	"../pages/otppopup/otppopup.module": [
		458,
		21
	],
	"../pages/otppopup2/otppopup2.module": [
		480,
		22
	],
	"../pages/popover/popover.module": [
		459,
		20
	],
	"../pages/productlist/productlist.module": [
		460,
		19
	],
	"../pages/profilesetting/profilesetting.module": [
		461,
		18
	],
	"../pages/purchacehistory/purchacehistory.module": [
		462,
		17
	],
	"../pages/purchase-history/purchase-history.module": [
		463,
		16
	],
	"../pages/rssfeed/rssfeed.module": [
		464,
		15
	],
	"../pages/setting/setting.module": [
		465,
		14
	],
	"../pages/signlogin/signlogin.module": [
		466,
		13
	],
	"../pages/signup/signup.module": [
		467,
		0
	],
	"../pages/sub-advisory/sub-advisory.module": [
		468,
		12
	],
	"../pages/subknowledge/subknowledge.module": [
		469,
		11
	],
	"../pages/subscribeplan/subscribeplan.module": [
		471,
		10
	],
	"../pages/symbolpopup/symbolpopup.module": [
		470,
		9
	],
	"../pages/trading-resources/trading-resources.module": [
		473,
		8
	],
	"../pages/trading/trading.module": [
		472,
		7
	],
	"../pages/trialpage/trialpage.module": [
		474,
		6
	],
	"../pages/uploaddocument/uploaddocument.module": [
		475,
		5
	],
	"../pages/verifynumber/verifynumber.module": [
		476,
		4
	],
	"../pages/videodetails/videodetails.module": [
		477,
		3
	],
	"../pages/watchlist/watchlist.module": [
		478,
		2
	],
	"../pages/webview/webview.module": [
		479,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 187;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagedisplayModule", function() { return ImagedisplayModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imagedisplay__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImagedisplayModule = /** @class */ (function () {
    function ImagedisplayModule() {
    }
    ImagedisplayModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__imagedisplay__["a" /* Imagedisplay */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__imagedisplay__["a" /* Imagedisplay */]),
            ],
        })
    ], ImagedisplayModule);
    return ImagedisplayModule;
}());

//# sourceMappingURL=imagedisplay.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RgtsLiverateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RgtsLiverateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RgtsLiverateProvider = /** @class */ (function () {
    function RgtsLiverateProvider(http, https) {
        this.http = http;
        this.https = https;
        console.log('Hello RgtsLiverateProvider Provider');
    }
    RgtsLiverateProvider.prototype.Liverateapi = function (URL) {
        var _this = this;
        var data = {};
        return new Promise(function (resolve, reject) {
            _this.https.setDataSerializer("json");
            _this.https.get(URL, data, {})
                .then(function (data) {
                console.log("api Liverateapi data", data);
                var success_data = data;
                resolve(success_data.data);
            }, function (err) {
                console.log("api Liverateapi err", err);
                reject(err);
            });
        });
    };
    RgtsLiverateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], RgtsLiverateProvider);
    return RgtsLiverateProvider;
}());

//# sourceMappingURL=rgts-liverate.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Imagedisplay; });
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



// import {LoginPage} from "../login/login";

/**
 * Generated class for the OtppopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Imagedisplay = /** @class */ (function () {
    function Imagedisplay(navCtrl, navParams, viewCtrl, renderer, callNumber, loadingCtrl, api, alertCtrl, toastCtrl) {
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
        console.log("image", viewCtrl.data.image);
        this.image = viewCtrl.data.image;
        console.log("title", viewCtrl.data.title);
        this.title = viewCtrl.data.title;
    }
    Imagedisplay.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Imagedisplay');
    };
    Imagedisplay.prototype.closepopup = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('otp'),
        __metadata("design:type", Object)
    ], Imagedisplay.prototype, "otp", void 0);
    Imagedisplay = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-imagedisplay',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\imagedisplay\imagedisplay.html"*/'<ion-card style="width: 90%; position: fixed; z-index: 60;align-content: center;margin: 5%;margin-top: 40%; border-radius: 10px;" >\n\n  <div style="padding: 20px;">\n\n <ion-title>{{this.title}}</ion-title>\n\n <img style="height: 250px; width: auto; margin-top: 10px;" src="{{this.image}}"/>\n\n <button ion-button end style="margin-bottom: 0px; background: #ed3954; margin-top: 10px; border-radius: 5px;" (click)="closepopup()">close</button>\n\n  </div>\n\n</ion-card>\n\n\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\imagedisplay\imagedisplay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
    ], Imagedisplay);
    return Imagedisplay;
}());

//# sourceMappingURL=imagedisplay.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, api, alertCtrl, loadingCtrl, toastCtrl, plt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.plt = plt;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.numberset = this.navParams.data;
        console.log(this.navParams.data);
        console.log('ionViewDidLoad LoginPage');
    };
    // Commented by Dishant. Date: 20-09-2018 16:00:11 Comment: Login api
    LoginPage.prototype.Loginbtn = function () {
        var _this = this;
        // this.navCtrl.push('VerifynumberPage');
        console.log("Mobile Number", this.uNumber.value);
        if (this.uNumber.value == "" || this.uNumber.value == null || this.uNumber.value == "null") {
            this.api.presentToast("Enter Mobile Number");
        }
        else if (this.uNumber.value.length < 10) {
            this.api.presentToast("Number Should not be less then 10 Digit");
        }
        else if (this.uNumber.value.length > 10) {
            this.api.presentToast("Number Should not be More then 10 Digit");
        }
        else {
            this.loading = this.loadingCtrl.create({ content: "please wait..." });
            this.loading.present();
            if (this.uNumber.value.length != "") {
                this.api.login(this.uNumber.value).then(function (result) {
                    _this.loading.dismiss();
                    _this.data = result;
                    console.log("login data", _this.data);
                    if (_this.data.status == 200) {
                        var data = {
                            data: _this.data.data[0],
                            verify: 0
                        };
                        localStorage.setItem("login_data", JSON.stringify(data));
                        console.log("Local data get", JSON.parse(localStorage.getItem("login_data")));
                        // this.api.OTP = this.data.data[0].OTP;
                        _this.navCtrl.push('VerifynumberPage');
                    }
                    else {
                        _this.api.ErrorApi(_this.data.status, _this.data.message);
                    }
                }, function (err) {
                    console.log("err", err);
                    _this.loading.dismiss();
                    _this.api.presentToast("Enter Mobile number");
                });
            }
        }
    };
    LoginPage.prototype.skipbtn = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('number'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "uNumber", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary" align="center">\n\n        <ion-title>Login</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div style="margin-top: 10px " id="cloud-layer">\n\n        <ion-row style="padding-left: 20px;padding-right: 20px">\n\n            <ion-col>\n\n                <ion-list>\n\n                    <ion-item style="border: 1px #000000 solid">\n\n                        <img item-start style="width: 25px;height: 20px; margin-top: 10px ;margin-left: 5px" src="assets/imgs/indianflag.jpg">\n\n                        <!--#number-->\n\n                        <ion-label style="color: #000000;margin-left: 5px;font-size: 18px">+91</ion-label>\n\n                        <ion-input type="number" placeholder="Enter Number" [value]="numberset" style="color: #000000;margin-left: -10px;font-size: 18px" autocomplete="off" [autocomplete]="false" #number></ion-input>\n\n                    </ion-item>\n\n\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar color="primary">\n\n        <ion-row col-12 style="padding: 0px;">\n\n            <!--<ion-col col-6>-->\n\n            <!--<div><span style="font-weight: bold; font-size: 16px ;color: #0093DD" (click)="skipbtn()">SKIP</span></div>-->\n\n            <!--</ion-col>-->\n\n            <ion-col col-12 (click)="Loginbtn()">\n\n                <div><span style="font-weight: bold; font-size: 16px ;color: #ffffff">NEXT</span></div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(274);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_screenshot__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_app_version__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_path__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_email_composer__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_img_viewer__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_imagedisplay_imagedisplay_module__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_fcm__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_local_notifications__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_rgts_liverate_rgts_liverate__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_push__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_toast__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    preloadModules: true // <- Here!
                }, {
                    links: [
                        { loadChildren: '../pages/admin-messages/admin-messages.module#AdminMessagesPageModule', name: 'AdminMessagesPage', segment: 'admin-messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adminmsg/adminmsg.module#AdminmsgPageModule', name: 'AdminmsgPage', segment: 'adminmsg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/advisory-services/advisory-services.module#AdvisoryServicesPageModule', name: 'AdvisoryServicesPage', segment: 'advisory-services', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/advisorysearch/advisorysearch.module#AdvisorysearchPageModule', name: 'AdvisorysearchPage', segment: 'advisorysearch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blog-detail/blog-detail.module#BlogDetailPageModule', name: 'BlogDetailPage', segment: 'blog-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/autoadvisory/autoadvisory.module#AutoadvisoryPageModule', name: 'AutoadvisoryPage', segment: 'autoadvisory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blog/blog.module#BlogPageModule', name: 'BlogPage', segment: 'blog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/broker/broker.module#BrokerPageModule', name: 'BrokerPage', segment: 'broker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/brokerdetails/brokerdetails.module#BrokerdetailsPageModule', name: 'BrokerdetailsPage', segment: 'brokerdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cashrss/cashrss.module#CashrssPageModule', name: 'CashrssPage', segment: 'cashrss', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comingsoon/comingsoon.module#ComingsoonPageModule', name: 'ComingsoonPage', segment: 'comingsoon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/charts/charts.module#ChartsPageModule', name: 'ChartsPage', segment: 'charts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/couponcode/couponcode.module#CouponcodePageModule', name: 'CouponcodePage', segment: 'couponcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/charts2/charts2.module#Charts2PageModule', name: 'Charts2Page', segment: 'charts2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ddl-modal/ddl-modal.module#DdlModalPageModule', name: 'DdlModalPage', segment: 'ddl-modal', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/ddl-model2/ddl-model2.module#DdlModel2PageModule', name: 'DdlModel2Page', segment: 'ddl-model2', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/eod-chart/eod-chart.module#EodChartPageModule', name: 'EodChartPage', segment: 'eod-chart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fundamental-calls/fundamental-calls.module#FundamentalCallsPageModule', name: 'FundamentalCallsPage', segment: 'fundamental-calls', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fundamental-report/fundamental-report.module#FundamentalReportPageModule', name: 'FundamentalReportPage', segment: 'fundamental-report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/futurerss/futurerss.module#FuturerssPageModule', name: 'FuturerssPage', segment: 'futurerss', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homepagefree/homepagefree.module#HomepagefreePageModule', name: 'HomepagefreePage', segment: 'homepagefree', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/imagedisplay/imagedisplay.module#ImagedisplayModule', name: 'Imagedisplay', segment: 'imagedisplay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/knowledge-zone/knowledge-zone.module#KnowledgeZonePageModule', name: 'KnowledgeZonePage', segment: 'knowledge-zone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/live-charts/live-charts.module#LiveChartsPageModule', name: 'LiveChartsPage', segment: 'live-charts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/live-chat/live-chat.module#LiveChatPageModule', name: 'LiveChatPage', segment: 'live-chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mywallet/mywallet.module#MywalletPageModule', name: 'MywalletPage', segment: 'mywallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/optionsearch/optionsearch.module#OptionsearchPageModule', name: 'OptionsearchPage', segment: 'optionsearch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/optionselect/optionselect.module#OptionselectPageModule', name: 'OptionselectPage', segment: 'optionselect', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/otppopup/otppopup.module#OtppopupPageModule', name: 'OtppopupPage', segment: 'otppopup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productlist/productlist.module#ProductlistPageModule', name: 'ProductlistPage', segment: 'productlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profilesetting/profilesetting.module#ProfilesettingPageModule', name: 'ProfilesettingPage', segment: 'profilesetting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/purchacehistory/purchacehistory.module#PurchacehistoryPageModule', name: 'PurchacehistoryPage', segment: 'purchacehistory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/purchase-history/purchase-history.module#PurchaseHistoryPageModule', name: 'PurchaseHistoryPage', segment: 'purchase-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rssfeed/rssfeed.module#RssfeedPageModule', name: 'RssfeedPage', segment: 'rssfeed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signlogin/signlogin.module#SignloginPageModule', name: 'SignloginPage', segment: 'signlogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sub-advisory/sub-advisory.module#SubAdvisoryPageModule', name: 'SubAdvisoryPage', segment: 'sub-advisory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subknowledge/subknowledge.module#SubknowledgePageModule', name: 'SubknowledgePage', segment: 'subknowledge', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/symbolpopup/symbolpopup.module#SymbolpopupPageModule', name: 'SymbolpopupPage', segment: 'symbolpopup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subscribeplan/subscribeplan.module#SubscribeplanPageModule', name: 'SubscribeplanPage', segment: 'subscribeplan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trading/trading.module#TradingPageModule', name: 'TradingPage', segment: 'trading', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trading-resources/trading-resources.module#TradingResourcesPageModule', name: 'TradingResourcesPage', segment: 'trading-resources', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trialpage/trialpage.module#TrialpagePageModule', name: 'TrialpagePage', segment: 'trialpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/uploaddocument/uploaddocument.module#UploaddocumentPageModule', name: 'UploaddocumentPage', segment: 'uploaddocument', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verifynumber/verifynumber.module#VerifynumberPageModule', name: 'VerifynumberPage', segment: 'verifynumber', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/videodetails/videodetails.module#VideodetailsPageModule', name: 'VideodetailsPage', segment: 'videodetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/watchlist/watchlist.module#WatchlistPageModule', name: 'WatchlistPage', segment: 'watchlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/webview/webview.module#WebviewPageModule', name: 'WebviewPage', segment: 'webview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/otppopup2/otppopup2.module#OtppopupPageModule2', name: 'OtppopupPage2', segment: 'otppopup2', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18_ionic_img_viewer__["b" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_19__pages_imagedisplay_imagedisplay_module__["ImagedisplayModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_screenshot__["a" /* Screenshot */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_24__providers_rgts_liverate_rgts_liverate__["a" /* RgtsLiverateProvider */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_toast__["a" /* Toast */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_local_notifications__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    // pages: Array<{ title: string, component: any , icon: any }>;
    function MyApp(platform, device, fcm, localNotifications, statusBar, splashScreen, api, push, toastCtrl, alertCtrl, modalCtrl, appVersion) {
        var _this = this;
        this.platform = platform;
        this.device = device;
        this.fcm = fcm;
        this.localNotifications = localNotifications;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.api = api;
        this.push = push;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.appVersion = appVersion;
        this.platform.ready().then(function () {
            _this.splashScreen.show();
            //refersh
            // localStorage.removeItem("login_data");
            var versionNumber = _this.appVersion.getVersionNumber().then(function (data) {
                console.log("ApplicationVersion", data);
                _this.api.current_version = data;
                localStorage.setItem('VERSITION', data);
                _this.old_app_version = data;
                //  console.log("old_app_version", this.old_app_version);
            });
            console.log("androidid", _this.device.uuid);
            _this.login_details = JSON.parse(localStorage.getItem("login_data"));
            _this.purchasedata = JSON.parse(localStorage.getItem("PURCHASE"));
            console.log("logDetail", _this.login_details);
            console.log("purchasedata", _this.purchasedata);
            if (_this.login_details != null) {
                if (_this.login_details.verify == 1) {
                    _this.api.title = _this.login_details.data.NAME;
                    _this.api.Mobile = _this.login_details.data.MOBILE;
                    _this.api.type = _this.login_details.data.REFCODE;
                    _this.api.profileimage = _this.login_details.data.PROFILE;
                    _this.api.isLogin = true;
                    _this.getsymboldata();
                    _this.getsettingdata();
                    console.log("ALGO_LIVECHART_PURCHSE", api.ALGO_LIVECHART_PURCHSE);
                }
                else {
                    _this.api.isLogin = false;
                    _this.rootPage = 'LoginPage';
                    // this.rootPage = 'HomepagefreePage';
                    _this.statusBar.styleDefault();
                    _this.splashScreen.hide();
                }
            }
            else {
                _this.api.isLogin = false;
                _this.rootPage = 'LoginPage';
                // this.rootPage = 'HomepagefreePage';
                _this.statusBar.styleDefault();
                _this.splashScreen.hide();
            }
            // used for an example of ngFor and navigation
            _this.api.pages = [
                { title: 'Dashboard', component: '', icon: "ios-home-outline" },
                { title: 'Subscribe Plan', component: 'SubscribeplanPage', icon: "ios-archive-outline" },
                { title: 'Purchase History', component: 'PurchaseHistoryPage', icon: "ios-document-outline" },
                { title: 'Live Rate', component: '', icon: "ios-radio-outline" },
                { title: 'Message Board', component: 'LiveChartsPage', icon: "ios-desktop-outline" },
                { title: 'Live Chart', component: 'LiveChartsPage', icon: "ios-podium-outline" },
                { title: 'Algo Chart', component: 'LiveChartsPage', icon: "ios-laptop-outline" },
                { title: 'Auto Advisory', component: '', icon: "ios-pulse-outline" },
                { title: 'Admin Message', component: 'AdminmsgPage', icon: "ios-notifications-outline" },
                { title: 'Video', component: 'KnowledgeZonePage', icon: "ios-film-outline" },
                { title: 'Training Video', component: '', icon: "logo-youtube" },
                { title: 'Blog', component: 'BlogPage', icon: "ios-globe-outline" },
                { title: 'RSS Feed', component: 'RssfeedPage', icon: "ios-wifi-outline" },
                // {title: 'Cash Market Data', component: 'CashrssPage', icon: "ios-analytics-outline"},
                // {title: 'Future Market Data', component: 'FuturerssPage', icon: "ios-barcode-outline"},
                { title: 'Trading', component: 'TradingPage', icon: "ios-flash-outline" },
                { title: 'Broker', component: 'BrokerPage', icon: "ios-speedometer-outline" },
                { title: 'Contact Us', component: 'ContactusPage', icon: "ios-call-outline" },
                { title: 'Whatsapp chat', component: '', icon: "logo-whatsapp" },
                { title: 'Rate Us', component: "Rating", icon: "ios-star-outline" },
                { title: 'Setting', component: 'SettingPage', icon: "ios-settings-outline" },
                { title: 'Logout ', component: "Logout", icon: "ios-exit-outline" },
            ];
        });
    }
    MyApp.prototype.getversion = function () {
        var _this = this;
        this.appVersion.getVersionNumber().then(function (data) {
            console.log("current_version", data);
            _this.api.current_version = data;
        });
    };
    MyApp.prototype.openprofile = function () {
        this.nav.push('ProfilesettingPage');
    };
    MyApp.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Logout',
            message: 'Are You Sure want Logout ?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        _this.login_details = JSON.parse(localStorage.getItem("login_details"));
                        console.log("logDetail", _this.login_details);
                        _this.api.logout()
                            .then(function (data) {
                            console.log(data);
                            localStorage.removeItem("login_details");
                            localStorage.removeItem("SEARCHDATA");
                            _this.api.isLogin = false;
                            var rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
                            _this.nav.setRoot(rootPage);
                        }).catch();
                    }
                }
            ]
        });
        confirm.present();
    };
    MyApp.prototype.rating = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: ' <img class="imgApp"   src="assets/imgs/g1.png"> <span class="textapp" style="color: #0bca00"> Rate Us </span>',
            subTitle: '<img class="imgApp" style="margin-top: -8px " src="assets/imgs/starr.png"> <img class="imgApp" src="assets/imgs/starr.png"> <img class="imgApp" src="assets/imgs/starr.png"> <img class="imgApp" src="assets/imgs/starr.png"> <img class="imgApp" src="assets/imgs/starr.png">',
            message: 'Rate Us 5 Star',
            buttons: [
                {
                    text: 'ok',
                    handler: function () {
                        window.open(_this.api.playstorelink, '_system');
                    }
                }
            ]
        });
        confirm.present();
    };
    MyApp.prototype.openPage = function (page) {
        clearInterval(this.api.live_rate_invertval);
        // this.nav.setRoot(page.component);
        console.log("pageTitle", page.component);
        if (page.component == "Logout") {
            this.showConfirm();
        }
        else if (page.component == "Rating") {
            this.rating();
        }
        else if (page.title == "Subscribe Plan") {
            this.nav.push(page.component, '1');
        }
        else if (page.title == "Live Rate") {
            if (this.api.LIVE_RATE_PURCHSE == false) {
                this.nav.push('SubscribeplanPage', '3');
            }
            else {
                this.nav.popToRoot();
            }
            this.nav.push(page.component, '1');
        }
        else if (page.title == "Message Board") {
            this.nav.push(page.component, 0);
        }
        else if (page.title == "Live Chart") {
            this.nav.push(page.component, 1);
        }
        else if (page.title == "Auto Advisory") {
            if (this.api.AUTO_ADVICERY_PURCHSE == false) {
                this.nav.push('SubscribeplanPage', '3');
            }
            else {
                this.nav.push('AutoadvisoryPage');
            }
        }
        else if (page.title == "Whatsapp chat") {
            //9228165071 change 07/02/2020 by hasmukhbhai
            var url = "https://api.whatsapp.com/send?phone=+91" + "7041944934" + "&text= i am interested ";
            console.log("Enter hear", url);
            window.open(url, '_system', 'location=yes');
            // window.open("https://api.whatsapp.com/send?phone=+919228165071&text=Hi!", 'location=yes');
        }
        else if (page.title == "Training Video") {
            //9228165071 change 07/02/2020 by hasmukhbhai
            var url = "https://www.youtube.com/playlist?list=PLswkDt3hPoEeHOzgPYZclf99S-84S9_fN";
            console.log("Enter hear", url);
            window.open(url, '_system', 'location=yes');
            // window.open("https://api.whatsapp.com/send?phone=+919228165071&text=Hi!", 'location=yes');
        }
        else if (page.title == "Dashboard") {
            this.nav.push('HomepagefreePage', 1);
        }
        else if (page.title == "Algo Chart") {
            if (this.api.ALGO_LIVECHART_PURCHSE == false) {
                this.nav.push('ContactusPage');
            }
            else {
                this.nav.push(page.component, 3);
            }
        }
        else {
            this.nav.push(page.component);
        }
        /*   if (page.component == "Logout") {
               this.showConfirm();
           } else if (page.component == "Rating") {
               this.rating();
           } else if (page.title == "Message Board") {
               if (this.api.MESSAGE_BOARD_PURCHSE == false) {
                   this.nav.push('SubscribeplanPage');
               } else {
                   this.nav.push(page.component, 0);
               }
           } else if (page.title == "Live Chart") {
               if (this.api.LIVE_RATE_PURCHSE == false) {
                   this.nav.push('SubscribeplanPage');
               } else {
                   this.nav.push(page.component, 1);
               }

           } else if (page.title == "Auto Advisory") {
               if (this.api.AUTO_ADVICERY_PURCHSE == false) {
                   this.nav.push('SubscribeplanPage');
               } else {
                   this.nav.push(page.component, 2);
               }

           } else if (page.title == "Algo Live Chart") {
               if (this.api.ALGO_LIVECHART_PURCHSE == false) {
                   this.nav.push('SubscribeplanPage');
               } else {
                   this.nav.push(page.component, 3);
               }

           } else {
               this.nav.push(page.component);
           }*/
    };
    MyApp.prototype.presentToast = function (message123) {
        var toast = this.toastCtrl.create({
            message: message123,
            duration: 3000
        });
        toast.present();
    };
    MyApp.prototype.NotificationSetup = function () {
        var _this = this;
        // to check if we have permission
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We do not have permission to send push notifications');
            }
        });
        // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
        this.push.createChannel({
            id: "NOTIFICATION_CHANNEL_NAME",
            description: "NOTIFICATION_CHANNEL_NAME",
            // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
            importance: 5
        }).then(function () { return console.log('Channel created'); });
        // Delete a channel (Android O and above)
        this.push.deleteChannel('NOTIFICATION_CHANNEL_NAME').then(function () { return console.log('Channel deleted'); });
        // Return a list of currently configured channels
        this.push.listChannels().then(function (channels) { return console.log('List of channels', channels); });
        // to initialize push notifications
        // icon: 'resources/icon.png',
        var options = {
            android: {
                senderID: '238433541074',
                sound: 'true',
                forceShow: 'true',
                clearNotifications: 'false',
                icon: 'sticon'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'true'
            }
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) { return _this.notify_handle(notification.additionalData); });
        pushObject.on('registration').subscribe(function (registration) {
            _this.api.set_token(registration);
            localStorage.setItem('FIREBASETOKAN', _this.api.FirebaseToken);
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
        pushObject.on('shareNow').subscribe(function (registration) { return console.log('Device registered', registration); });
    };
    MyApp.prototype.notify_handle = function (notification) {
        console.warn("Notificat77ion data", notification);
        if (notification.notifyType == "Blog") {
            this.nav.push('BlogPage', notification);
        }
        else if (notification.notifyType == "Video") {
            this.nav.push('KnowledgeZonePage', notification);
        }
        else if (notification.notifyType == "AdminMessage") {
            this.nav.push('AdminmsgPage', notification);
        }
        else if (notification.notifyType == "NewReferralPayment" || notification.notifyType == "NewPayment") {
            this.nav.push('PurchaseHistoryPage', notification);
        }
        else if (notification.notifyType == "Advisory") {
            if (this.api.AUTO_ADVICERY_PURCHSE == false) {
                this.nav.push('SubscribeplanPage', '3');
            }
            else {
                this.nav.push('AutoadvisoryPage', notification);
            }
        }
        else {
            this.nav.popToRoot();
        }
    };
    MyApp.prototype.checkuser = function (name, notification, tempname) {
        // this.api.chacksubscribe(this.login_details.user_data.ID).then(data => {
        //     // this.users = data;
        //     this.plandata = data;
        //     this.planlist = this.plandata.data;
        //     console.log("planlist", this.planlist);
        //     console.log("planDATA", this.plandata);
        //     if (this.plandata.status == '200') {
        //         if (this.planlist.length > -1) {
        //             for (let i = 0; i < this.planlist.length; i++) {
        //                 if (name == this.planlist[i].NAME) {
        //                     console.log(this.planlist[i].ID);
        //                     console.log("this.planname", this.planlist[i].NAME);
        //                     console.log(this.planlist[i].purchase);
        //                     this.planname = this.planlist[i].NAME;
        //                     break;
        //                 } else {
        //                     this.planname = "";
        //                 }
        //             }
        //         }
        //
        //         // this.navCtrl.push('TrialpagePage',name);
        //         if (this.planname == "Live Signal") {
        //
        //             this.nav.push('LiveChartsPage', notification);
        //
        //         } else if (this.planname == "Advisory Services" && tempname == "Advisory Services2") {
        //
        //             this.nav.push('SubAdvisoryPage', {ADVISORYNAME: notification.ADVISORYNAME, ID: notification.ADVISORYID});
        //
        //         } else if (this.planname == "Advisory Services" && tempname == '') {
        //
        //             this.nav.push('AdvisoryServicesPage', notification);
        //
        //         } else if (this.planname == "Knowledge Zone") {
        //
        //             this.nav.push('KnowledgeZonePage', notification);
        //
        //         } else {
        //             this.nav.push('TrialpagePage', name);
        //         }
        //
        //     }
        //     else if (this.plandata.status == '404') {
        //         console.log("Not Data found");
        //         this.nav.push('TrialpagePage', name);
        //     }
        //     // Commented by Dishant. Date: 26-02-2019 11:10:14 Comment: invalid key logout and go loginpage
        //     else if (this.plandata.status == '440') {
        //         this.api.presentToast(this.plandata.message);
        //         localStorage.removeItem("login_data");
        //         this.rootPage = 'LoginPage';
        //     }
        //     // Commented by Dishant. Date: 25-02-2019 16:55:30 Comment: version error open play store
        //     else if (this.plandata.status == '304') {
        //         this.api.presentToast(this.plandata.message);
        //         window.open(this.api.playstorelink, '_system');
        //     }
        //     else if (this.plandata.status == '530') {
        //         this.api.presentToast(this.plandata.message);
        //         this.api.Exitapp();
        //
        //     }
        //     // Commented by Dishant. Date: 25-02-2019 16:57:27 Comment: other massages
        //     else {
        //         this.api.presentToast(this.plandata.message);
        //     }
        //
        // }).catch();
    };
    /*  private NotificationSetup() {
          this.fcm.subscribeToTopic('marketing');

          this.fcm.getToken().then(token => {
              console.log("TOKAN", token);
              this.api.set_token(token);
              localStorage.setItem('FIREBASETOKAN', this.api.FirebaseToken);
          });

          this.fcm.onNotification().subscribe(data => {
              // this.notify_handle(data);
              if (data.wasTapped) {
                  console.log("Received in background", data);
                  this.notify_handle(data);
              } else {
                  console.log("Received in foreground", data);
                  this.localNotifications.schedule({
                      id: data.notId,
                      title: data.title,
                      text: data.body,
                      data: data,
                      smallIcon: 'sticon',
                      attachments: [data.picture],
                  });

              }
          });

          this.localNotifications.on('click').subscribe(data => {
              console.log("Enter Click", data);
              this.notify_handle(data.data);
          });
          this.fcm.onTokenRefresh().subscribe(token => {
              console.log("TOKAN Refresh", token);
              this.api.set_token(token);
              localStorage.setItem('FIREBASETOKAN', this.api.FirebaseToken);
          });

          this.fcm.unsubscribeFromTopic('marketing');
      }*/
    MyApp.prototype.getsymboldata = function () {
        var _this = this;
        this.api.splashscreenapi().then(function (data) {
            // this.users = data;
            _this.plandata = data;
            console.log("planDATA", _this.plandata);
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (_this.plandata.status == '200') {
                localStorage.removeItem("NSECASH");
                localStorage.removeItem("NSEFO");
                localStorage.removeItem("MCX");
                localStorage.removeItem("PURCHASE");
                localStorage.removeItem("ALGO_CHART");
                localStorage.removeItem("URLS");
                localStorage.setItem("NSECASH", JSON.stringify(_this.plandata.symbol.NSECASH));
                localStorage.setItem("NSEFO", JSON.stringify(_this.plandata.symbol.NSEFO));
                localStorage.setItem("MCX", JSON.stringify(_this.plandata.symbol.MCX));
                localStorage.setItem("ALGO_CHART", JSON.stringify(_this.plandata.algo_chart));
                localStorage.setItem("URLS", JSON.stringify(_this.plandata.urls));
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
                _this.purchasedata = JSON.parse(localStorage.getItem("PURCHASE"));
                _this.NotificationSetup();
                if (_this.purchasedata != null) {
                    if (_this.purchasedata.LIVE_RATE_PURCHSE == false) {
                        _this.rootPage = 'HomepagefreePage';
                    }
                    else {
                        _this.rootPage = 'HomePage';
                    }
                }
                else {
                    _this.NotificationSetup();
                    _this.rootPage = 'HomepagefreePage';
                }
            }
            else {
                _this.NotificationSetup();
                _this.rootPage = 'HomepagefreePage';
                _this.api.ErrorApi(_this.plandata.status, _this.plandata.message);
            }
        }).catch();
    };
    MyApp.prototype.getsettingdata = function () {
        var _this = this;
        this.api.settinggetapi().then(function (data) {
            // this.users = data;
            _this.setingdata = data;
            console.log("setingdata", _this.setingdata);
            if (_this.setingdata.status == '200') {
                _this.api.NSECASH_TYPE = _this.setingdata.data[0].NSE_TYPE;
                _this.api.FO_TYPE = _this.setingdata.data[0].FO_TYPE;
                _this.api.MCX_TYPE = _this.setingdata.data[0].MCX_TYPE;
                _this.api.NSECASH_REFRESH_RATE = _this.setingdata.data[0].NSE_TIME;
                _this.api.FO_REFRESH_RATE = _this.setingdata.data[0].FO_TIME;
                _this.api.MCX_REFRESH_RATE = _this.setingdata.data[0].MCX_TIME;
                _this.api.ADVISORY = _this.setingdata.data[0].ADVISORY;
                _this.api.VIDEO = _this.setingdata.data[0].VIDEO;
                _this.api.BLOG = _this.setingdata.data[0].BLOG;
                _this.api.ADMIN = _this.setingdata.data[0].ADMIN;
            }
            else {
                _this.api.ErrorApi(_this.setingdata.status, _this.setingdata.message);
            }
        }).catch();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\app\app.html"*/'<!--\n\n<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n&lt;!&ndash; Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus &ndash;&gt;\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>-->\n\n\n\n<!--*ngIf="api.isLogin"-->\n\n<ion-menu [content]="content" *ngIf="api.isLogin == true">\n\n    <ion-header>\n\n        <ion-navbar color="primary">\n\n            <ion-item (click)="openprofile()" style="background-color: #ed3954" no-lines no-border menuClose>\n\n                <img item-start style="height: 50px; width: 50px; margin-left: auto; margin-right: auto; border-radius: 50%" [src]="api.profileimage ||\'assets/imgs/user.png\'"/>\n\n                <div style="margin-left: 20px;">\n\n                    <h2 style="margin-top: 10px;color:white;">{{api.title}}</h2>\n\n                    <h3 style="margin-top: 8px;color:white;">{{api.Mobile}}</h3>\n\n                </div>\n\n            </ion-item>\n\n\n\n        </ion-navbar>\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n        <ion-list>\n\n            <button style="padding-left: 10px" menuClose ion-item *ngFor="let p of api.pages" (click)="openPage(p)">\n\n                <ion-icon [name]="p.icon" item-left style="color: #ed3954;width: 40px; text-align: center;" large no-margin></ion-icon>\n\n                <p style="font-size: 16px;font-weight: bold"> {{p.title}}</p>\n\n            </button>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__["a" /* AppVersion */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = /** @class */ (function () {
    function GlobalProvider(http, device, iab, platformos, sanitizer, toastCtrl, loadingCtrl, alertCtrl) {
        this.http = http;
        this.device = device;
        this.iab = iab;
        this.platformos = platformos;
        this.sanitizer = sanitizer;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.apiUrl = "https://securetrade.in/pro/api/app/";
        // apiUrl = 'http://192.168.1.3/CODEIGNITER/securetrade-pro/securetrade-pro-api/app/';    //offline
        this.playstorelink = "https://play.google.com/store/apps/details?id=com.securetrade.pro";
        this.isLogin = false;
        this.platform = '';
        this.current_version = '';
        this.api_key = '';
        this.auth_key = '';
        this.ALGO_LIVECHART_PURCHSE = false;
        this.AUTO_ADVICERY_PURCHSE = false;
        this.LIVE_CHART_PURCHSE = false;
        this.LIVE_RATE_PURCHSE = false;
        this.MESSAGE_BOARD_PURCHSE = false;
        this.watch_type = "DEFAULT";
        this.advisorywatch_type = "PRIVATE";
        this.watch_postion = 0;
        this.advisorywatch_postion = 0;
        // LIVECHARTIMAGEEXT = '.jpg';
        // ALGOCHARTIMAGEEXT = '.jpg';
        this.LIVECHARTIMAGEEXT = '.png';
        this.ALGOCHARTIMAGEEXT = '.png';
        console.log("WATCHLIST_POSITION", JSON.parse(localStorage.getItem('WATCHLIST_POSITION')));
        console.log("WATCHLIST_TYPE", JSON.parse(localStorage.getItem('WATCHLIST_TYPE')));
        if (JSON.parse(localStorage.getItem('WATCHLIST_POSITION')) != undefined) {
            this.watch_postion = JSON.parse(localStorage.getItem('WATCHLIST_POSITION'));
            this.watch_type = JSON.parse(localStorage.getItem('WATCHLIST_TYPE'));
        }
    }
    GlobalProvider.prototype.Startloader = function () {
        this.loading = this.loadingCtrl.create({ content: "please wait...", enableBackdropDismiss: true, dismissOnPageChange: true });
        this.loading.present();
    };
    GlobalProvider.prototype.Openurl = function (link) {
        var browser = this.iab.create(link, '_self', 'hardwareback=yes,hideurlbar=yes,mediaPlaybackRequiresUserAction=yes,toolbarcolor=#f4f4f4,hidenavigationbuttons=yes');
        browser.show();
    };
    GlobalProvider.prototype.safeurl = function (urllink) {
        var url = this.sanitizer.bypassSecurityTrustResourceUrl(urllink);
        return url;
    };
    GlobalProvider.prototype.ErrorApi = function (status, message) {
        if (status == 404) {
            this.presentToast(message);
            this.Stoploader();
            // localStorage.removeItem("login_data");
            // this.Exitapp();
        }
        else if (status == 440) {
            this.presentToast(message);
            localStorage.removeItem("login_data");
            this.Exitapp();
            // window.location.reload();
        }
        else if (status == 304) {
            this.presentToast(message);
            window.open(this.playstorelink, '_system');
        }
        else if (status == 530) {
            this.presentToast(message);
            this.Exitapp();
        }
        else {
            this.presentToast(message);
        }
    };
    GlobalProvider.prototype.Stoploader = function () {
        this.loading.dismiss();
    };
    GlobalProvider.prototype.getheaderspart = function () {
        this.gethederdata();
        // this.headerspart = {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json',
        //         'Platform': this.platform,
        //         'Current-Version': localStorage.getItem('VERSITION'),
        //         'Api-Key': this.api_key,
        //         'Auth-Key': this.auth_key,
        //         'Device-Id': this.device.uuid,
        //         'Token-Id': localStorage.getItem('FIREBASETOKAN'),
        //         'Device-Model': this.device.manufacturer + " " + this.device.model,
        //         'Os-Version': this.device.version
        //     })
        // };
        ////native_http
        this.headerspart = {
            'Content-Type': 'application/json',
            'Platform': this.platform,
            'Current-Version': (localStorage.getItem('VERSITION') == null) ? "" : localStorage.getItem('VERSITION'),
            'Api-Key': this.api_key,
            'Auth-Key': this.auth_key,
            'Device-Id': this.device.uuid,
            'Token-Id': (localStorage.getItem('FIREBASETOKAN') == null) ? "" : localStorage.getItem('FIREBASETOKAN'),
            'Device-Model': this.device.manufacturer + " " + this.device.model,
            'Os-Version': this.device.version
        };
        // this.headerspart = {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json',
        //         'Platform': "this.platform",
        //         'Current-Version': "this.current_version",
        //         'Api-Key': "this.api_key",
        //         'Auth-Key': "this.auth_key",
        //         'Device-Id': "this.device.uuid",
        //         'Token-Id': "this.FirebaseToken",
        //         'Device-Model': "this.device.manufacturer this.device.model",
        //         'Os-Version': "this.device.version"
        //     })
        // };
        console.log("headers part", this.headerspart);
        return this.headerspart;
    };
    GlobalProvider.prototype.getheaderspart2 = function () {
        this.gethederdata();
        this.headerspart = {
            'Content-Type': 'application/json',
            'Platform': this.platform,
            'Current-Version': (localStorage.getItem('VERSITION') == null) ? "" : localStorage.getItem('VERSITION'),
            'Api-Key': this.api_key,
            'Auth-Key': this.auth_key,
            'Device-Id': this.device.uuid,
            'Token-Id': (localStorage.getItem('FIREBASETOKAN') == null) ? "" : localStorage.getItem('FIREBASETOKAN'),
            'Device-Model': this.device.manufacturer + " " + this.device.model,
            'Os-Version': this.device.version
        };
        console.log("headers part", this.headerspart);
        return this.headerspart;
    };
    GlobalProvider.prototype.gethederdata = function () {
        console.log("Device Details", this.device);
        if (this.device.platform == "Android") {
            this.platform = '2';
        }
        else if (this.device.platform == "Ios") {
            this.platform = '3';
        }
        this.login_data = JSON.parse(localStorage.getItem("login_data"));
        console.log("Local Data", this.login_data);
        if (this.login_data == null || this.login_data == "" || this.login_data == "null") {
        }
        else {
            console.log("Enter If");
            if (this.login_data.data.AUTH_KEY == undefined && this.login_data.data.API_KEY == undefined) {
                this.auth_key = '';
                this.api_key = '';
            }
            else {
                this.auth_key = this.login_data.data.AUTH_KEY;
                this.api_key = this.login_data.data.API_KEY;
            }
            console.log("Auth key", this.auth_key);
            console.log("api key", this.api_key);
        }
    };
    GlobalProvider.prototype.GETMESSAGE_BOARDDATA = function (URL) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.get(URL, {}, {})
                .then(function (data) {
                console.log("api GETMESSAGE_BOARDDATA data", data);
                var success_data = data;
                resolve(success_data.data);
            }, function (err) {
                console.log("api GETMESSAGE_BOARDDATA err", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.deletesymbal = function (data) {
        var _this = this;
        console.log("login_data", JSON.stringify(data));
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + '/watchlist/single_symbol_delete', data, _this.getheaderspart2())
                .then(function (data) {
                var success_data = data;
                console.log("api deletesymbal data", success_data);
                resolve(JSON.parse(success_data.data));
            }).catch(function (err) {
                console.log("api login err", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.GETMESSAGE_BOARDDATA2 = function (data) {
        var _this = this;
        console.log('NEW preview data', data);
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'home-screen/algo_message_bord', data, _this.getheaderspart2())
                .then(function (data) {
                console.log("api GETMESSAGE_BOARDDATA data", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                console.log("api GETMESSAGE_BOARDDATA err", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.watchlistsave = function (WATCHLIST_TYPE, NAME, CASH_SYMBOL, FUTURE_SYMBOL, OPTION_SYMBOL, MCX_SYMBOL) {
        var _this = this;
        var data = {
            "WATCHLIST_MAIN_TYPE": '0',
            "WATCHLIST_TYPE": WATCHLIST_TYPE,
            "NAME": NAME,
            "CASH_SYMBOL": CASH_SYMBOL,
            "FUTURE_SYMBOL": FUTURE_SYMBOL,
            "OPTION_SYMBOL": OPTION_SYMBOL,
            "MCX_SYMBOL": MCX_SYMBOL,
        };
        console.log("preview data", data);
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'watchlist/save', data, _this.getheaderspart())
                .then(function (data) {
                console.log("api version data", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                console.log("api version err", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.watchlistupdate = function (WATCHLIST_TYPE, NAME, CASH_SYMBOL, FUTURE_SYMBOL, ID, OPTION_SYMBOL, MCX_SYMBOL) {
        var _this = this;
        var data = {
            "WATCHLIST_MAIN_TYPE": '0',
            "WATCHLIST_TYPE": WATCHLIST_TYPE,
            "NAME": NAME,
            "WATCHLISTID": ID,
            "CASH_SYMBOL": CASH_SYMBOL,
            "FUTURE_SYMBOL": FUTURE_SYMBOL,
            "OPTION_SYMBOL": OPTION_SYMBOL,
            "MCX_SYMBOL": MCX_SYMBOL,
        };
        console.log("preview data", data);
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'watchlist/update', data, _this.getheaderspart())
                .then(function (data) {
                console.log("api version data", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                console.log("api version err", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.advisorywatchlistsave = function (WATCHLIST_TYPE, NAME, CASH_SYMBOL, FUTURE_SYMBOL, MCX_SYMBOL) {
        var _this = this;
        var data = {
            "WATCHLIST_MAIN_TYPE": '1',
            "WATCHLIST_TYPE": WATCHLIST_TYPE,
            "NAME": NAME,
            "CASH_SYMBOL": CASH_SYMBOL,
            "FUTURE_SYMBOL": FUTURE_SYMBOL,
            "MCX_SYMBOL": MCX_SYMBOL
        };
        console.log("preview data", data);
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'watchlist/advisory_save', data, _this.getheaderspart())
                .then(function (data) {
                console.log("api version data", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                console.log("api version err", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.advisorywatchlistupdate = function (WATCHLIST_TYPE, NAME, CASH_SYMBOL, FUTURE_SYMBOL, ID, OPTION_SYMBOL, MCX_SYMBOL) {
        var _this = this;
        var data = {
            "WATCHLIST_MAIN_TYPE": '1',
            "WATCHLIST_TYPE": WATCHLIST_TYPE,
            "NAME": NAME,
            "WATCHLISTID": ID,
            "CASH_SYMBOL": CASH_SYMBOL,
            "FUTURE_SYMBOL": FUTURE_SYMBOL,
            "OPTION_SYMBOL": OPTION_SYMBOL,
            "MCX_SYMBOL": MCX_SYMBOL,
        };
        console.log("preview data", data);
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'watchlist/advisory_update', data, _this.getheaderspart())
                .then(function (data) {
                console.log("api version data", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                console.log("api version err", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.oprionselecteddata = function (SYMBOL, SYMBOL_TYPE) {
        var _this = this;
        var data = {
            "SYMBOL": SYMBOL,
            "SYMBOL_TYPE": SYMBOL_TYPE
        };
        console.log("preview data", data);
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'home-screen/option_symbol_details', data, _this.getheaderspart())
                .then(function (data) {
                console.log("api version data", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                console.log("api version err", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.Watchlistdelete = function (id) {
        var _this = this;
        var data = {
            "WATCHLISTID": id
        };
        console.log("preview data", data);
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'watchlist/delete', data, _this.getheaderspart())
                .then(function (data) {
                console.log("api version data", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                console.log("api version err", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.verifyVersion = function (deviceid, userid) {
        var _this = this;
        var data = {
            "ANDROIDDEVICEID": deviceid,
            "DEVICEID": localStorage.getItem("FIREBASETOKAN"),
            "UID": userid,
            "ACTION": "version"
        };
        console.log("preview data", data);
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'api.php', data, _this.getheaderspart())
                .then(function (data) {
                console.log("api version data", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                console.log("api version err", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.knowledgeZonefree = function () {
        var _this = this;
        var data = {
            "VIDEOTYPE": "Free Video",
            "ACTION": "video_list"
        };
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'api.php', data, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.knowledgeZonpremiume = function () {
        var _this = this;
        var data = {
            "VIDEOTYPE": "Premium Video",
            "ACTION": "video_list"
        };
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'api.php', data, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.settinggetapi = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'customer/setting_list', {}, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("splashscreenapi", data);
            }, function (err) {
                console.log("splashscreenapi", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.homepageapi = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'home-screen', {}, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("splashscreenapi", data);
            }, function (err) {
                console.log("splashscreenapi", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.advisorylistapi = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'watchlist/advisory_watchlist_list', {}, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("advisorylistapi", data);
            }, function (err) {
                console.log("advisorylistapi", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.advisoryshowlistapi = function (data) {
        var _this = this;
        console.log("preview data", data);
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'watchlist/algo_advisory_watchlist_list', data, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("advisorylistapi", data);
            }, function (err) {
                console.log("advisorylistapi", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.advisoryshowUPDATEapi = function (data) {
        var _this = this;
        console.log("preview data", data);
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'watchlist/advisory_preference_update', data, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("UODATE", data);
            }, function (err) {
                console.log("UPDATE", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.advisorydatalistapi = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'watchlist/advisory_watchlist_list', {}, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("advisorylistapi", data);
            }, function (err) {
                console.log("advisorylistapi", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.splashscreenapi = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'home-screen/splashscreen', {}, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("splashscreenapi", data);
            }, function (err) {
                console.log("splashscreenapi", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.videocategory = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'mst/product_category/app_category_value', {}, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("videocategory", data);
            }, function (err) {
                console.log("videocategory", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.videocategorydetails = function (CATEGORY_ID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            var data = {
                "CATEGORY_ID": CATEGORY_ID
            };
            _this.http.post(_this.apiUrl + 'video/video_list', data, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("videocategorydetails", data);
            }, function (err) {
                console.log("videocategorydetails", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.videocategorydetailslink = function (VIDEO_ID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            var data = {
                "VIDEO_ID": VIDEO_ID
            };
            _this.http.post(_this.apiUrl + 'video/video_list', data, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("videocategorydetails link", data);
            }, function (err) {
                console.log("videocategorydetails link", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.news = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'blog/app_blog_list', {}, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("free_vedio", data);
            }, function (err) {
                console.log("newsList", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.rssfeed = function (TYPE) {
        var _this = this;
        var data = {
            "TYPE": TYPE
        };
        console.log("Pass data", JSON.stringify(data));
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'home-screen/rss_feeds', data, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("free_vedio", data);
            }, function (err) {
                console.log("newsList", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.fundamentalCall = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + 'api.php?type=fundamentalcallList', {}, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("premium_vedio", data);
                console.log("fundamental", data);
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.advisoryCategory = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + 'api.php?type=advisorycategoryList', {}, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("advisory", data);
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.advisorySubList = function (ADVISORYNAME) {
        var _this = this;
        var data = {
            "ADVISORYNAME": ADVISORYNAME,
            "ACTION": "advisory_list",
            "TYPE": "past"
        };
        console.log(data);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'api.php', data, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("id", data);
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.advusoryCuttentList = function (ADVISORYNAME) {
        var _this = this;
        var data = {
            "ADVISORYNAME": ADVISORYNAME,
            "ACTION": "advisory_list",
            "TYPE": "current"
        };
        console.log(data);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'api.php', data, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("id", data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //Display user wallet list and this fun. used in Mywallwet.ts file
    GlobalProvider.prototype.walletListDisplay = function (id) {
        var _this = this;
        var data = {
            "USERID": id,
            "ACTION": "wallet_balance"
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'api.php', data, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("datawallet", data);
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.walletHistry = function (id) {
        var _this = this;
        var data = {
            "USERID": id,
            "ACTION": "wallet_list"
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'api.php', data, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("datawallet123", data);
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.signup = function (name, email, city, refcode, password) {
        var _this = this;
        var data = {
            "NAME": name,
            "EMAIL": email,
            "CITY": city,
            "REFFERED_CODE": refcode,
            "PROFILE": "",
            "PASSWORD": password,
            "TYPE": 1
        };
        console.log('previewdata', JSON.stringify(data));
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'customer/app_update_profile', data, _this.getheaderspart())
                .then(function (data) {
                console.log("register", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.login = function (username) {
        var _this = this;
        var data = {
            "MOBILE": username,
        };
        var url = this.apiUrl + 'customer/app-user-login';
        var headers = this.getheaderspart();
        console.log("login url", url);
        console.log("login data", JSON.stringify(data));
        console.log("login Header", JSON.stringify(headers));
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(url, data, headers)
                .then(function (data) {
                console.log("success login", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            })
                .catch(function (err) {
                console.log("Error login", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.purchaseHistory = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'purchase/app_purchase_plan_list', {}, _this.getheaderspart())
                .then(function (data) {
                console.log("success purchase", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            })
                .catch(function (err) {
                console.log("Error purchase", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.purchaseHistorydetails = function (PURCHASE_NO) {
        var _this = this;
        var data = {
            "PURCHASE_NO": PURCHASE_NO
        };
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'purchase/app_purchase_plan_list_details', data, _this.getheaderspart())
                .then(function (data) {
                console.log("success purchase", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            })
                .catch(function (err) {
                console.log("Error purchase", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.adminMassage = function () {
        var _this = this;
        var data = {};
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'admin_message/app_admin_msg_list', data, _this.getheaderspart())
                .then(function (data) {
                console.log("login", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.forgotPassword = function (mobileNo) {
        var _this = this;
        var data = {
            "mobileno": mobileNo,
            "ACTION": "forgotpass"
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'api.php', data, _this.getheaderspart())
                .then(function (data) {
                console.log("sdf", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.verifyOTP = function (OTP) {
        var _this = this;
        var data = {
            "OTP": OTP,
        };
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'customer/app_verify_user', data, _this.getheaderspart())
                .then(function (data) {
                console.log("verifyOTP", JSON.stringify(data));
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.Resendotpapi = function () {
        var _this = this;
        var data = {};
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'customer/app_resend_otp', data, _this.getheaderspart())
                .then(function (data) {
                console.log("verifyOTP", JSON.stringify(data));
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.logout = function () {
        var _this = this;
        var data = {};
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'customer/app_logout', data, _this.getheaderspart())
                .then(function (data) {
                console.log("verifyOTP", JSON.stringify(data));
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.changePassword = function (Id, chgpassword, action) {
        var _this = this;
        var data = {
            "CHGID": Id,
            "CHGPASSWORD": chgpassword,
            "ACTION": action
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'api.php', data, _this.getheaderspart())
                .then(function (data) {
                console.log("login", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.VerifyPayment = function (merchantId) {
        var _this = this;
        var data = {
            "PAYMENTNO": merchantId,
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'purchase/app_verify_payment', data, _this.getheaderspart())
                .then(function (data) {
                // console.log("login", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.GetWalletBalance = function (UID, action) {
        var _this = this;
        var data = {
            "USERID": UID,
            "ACTION": action
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'api.php', data, _this.getheaderspart())
                .then(function (data) {
                console.log("getbalance", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.userprofile = function () {
        var _this = this;
        var data = {};
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'customer/app_profile_details', data, _this.getheaderspart())
                .then(function (data) {
                console.log("userprofile", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.profileUpload = function (uname, uemail, ucity, uploadphoto, TYPE) {
        var _this = this;
        var data = {
            "NAME": uname,
            "EMAIL": uemail,
            "CITY": ucity,
            "REFFERED_CODE": "",
            "PROFILE": uploadphoto,
            "TYPE": TYPE
        };
        console.log("profile preview", JSON.stringify(data));
        console.log("URL", this.apiUrl + 'customer/app_update_profile');
        console.log("getheaderspart preview", JSON.stringify(this.getheaderspart()));
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'customer/app_update_profile', data, _this.getheaderspart())
                .then(function (data) {
                console.log("register", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.purchasePlan = function (MONTH) {
        var _this = this;
        var data = {
            "MONTH": MONTH
        };
        console.log("Preview data", data);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'subscription/subscription', data, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("purchaseList", data);
            }, function (err) {
                console.log("purchseList123", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.couponcodeapply = function (COUPONCODE, TOTALAMOUNT) {
        var _this = this;
        var data = {
            "COUPONCODE": COUPONCODE,
            "TOTALAMOUNT": TOTALAMOUNT
        };
        console.log("Preview data", data);
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'coupon-code/app_couponcode_verify', data, _this.getheaderspart())
                .then(function (data) {
                var success_data = data;
                resolve(JSON.parse(success_data.data));
                console.log("couponcodeapply", data);
            }, function (err) {
                console.log("couponcodeapply", err);
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.submitPlan = function (SUBSCRIBE_FOR, COUPONCODE, TOTALAMOUNT, PLANID) {
        var _this = this;
        var data = {
            "PLANID": PLANID,
            "SUBSCRIBE_FOR": SUBSCRIBE_FOR,
            "COUPONCODE": COUPONCODE,
            "TOTALAMOUNT": TOTALAMOUNT
        };
        console.log("requestdata", JSON.stringify(data));
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer("json");
            _this.http.post(_this.apiUrl + 'purchase/purchase', data, _this.getheaderspart())
                .then(function (data) {
                console.log("submitPlan", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.submitQuery = function (uid, query, action) {
        var _this = this;
        var data = {
            "USERID": uid,
            "QUERY": query,
            "ACTION": action
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'api.php', data, _this.getheaderspart())
                .then(function (data) {
                console.log("query", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.kycSubmit = function (id, adharimage, panimage, action) {
        var _this = this;
        var data = {
            "USERID": id,
            "AADHARIMAGE": adharimage,
            "PANIMAGE": panimage,
            "ACTION": action
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'api.php', data, _this.getheaderspart())
                .then(function (data) {
                console.log("kycSubmit", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.getKYCDocument = function (ID, s) {
        var _this = this;
        var data = {
            "UID": ID,
            "ACTION": s
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'api.php', data, _this.getheaderspart())
                .then(function (data) {
                console.log("documentList", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.SharescrrenshotContent = function (screenshot, socialSharing, screen, playstoreurl) {
        var login_details = JSON.parse(localStorage.getItem("login_data"));
        var share_string = "SignUp through Referral Code " + login_details.data.MY_REFFERED_CODE + "\n\n";
        screenshot.URI(50).then(function (res) {
            screen = res.URI;
            socialSharing.share(share_string + playstoreurl, "null", screen, null);
        });
    };
    GlobalProvider.prototype.getNotificationSettingData = function (UID, s) {
        var _this = this;
        var data = {
            "USERID": UID,
            "ACTION": s
        };
        console.log("requestdata", data);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'api.php', data, _this.getheaderspart())
                .then(function (data) {
                console.log("SettingData", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.updatesetting = function (UID, ADVISROYSELECTED, NEWSELECTED, VIDEOSELECTED, WALLETSELECTED, FCALSSSELECTED, ADMINNOTISELECTED, NSECASHTYPE, NSETEXT, FOTYPE, FOTEXT, FOTEXT2, MCXTYPE, MCXTEXT, s, BLOG) {
        var _this = this;
        var data = {
            // "UID": UID,
            // "ADVISORY": ADVISROYSELECTED,
            // "NEWS": NEWSELECTED,
            // "VIDEO": VIDEOSELECTED,
            // "WALLET": WALLETSELECTED,
            // "FCALLS": FCALSSSELECTED,
            // "ADMINNOTI": ADMINNOTISELECTED,
            // "NSELOADTYPE": NSECASHTYPE,
            // "NSELOADSEC": NSETEXT,
            // "FOLOADTYPE": FOTYPE,
            // "FOLOADSEC": FOTEXT,
            // "MCXLOADTYPE": MCXTYPE,
            // "MCXLOADSEC": MCXTEXT,
            // "ACTION": s
            "ADVISORY": ADVISROYSELECTED,
            "VIDEO": VIDEOSELECTED,
            "BLOG": BLOG,
            "ADMIN": ADMINNOTISELECTED,
            "NSE_TYPE": NSECASHTYPE,
            "NSE_TIME": NSETEXT,
            "FO_TYPE": FOTYPE,
            "FO_TIME": FOTEXT,
            "MCX_TYPE": MCXTYPE,
            "MCX_TIME": MCXTEXT
        };
        console.log("requestdata", data);
        console.log("requestdata", JSON.stringify(data));
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'customer/app_setting', data, _this.getheaderspart())
                .then(function (data) {
                console.log("updatesetting", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.chackthen = function (ID) {
        var _this = this;
        var data = {
            "USERID": ID,
            "ACTION": "menu_assign"
        };
        console.log("plandata preview", data);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'api.php', data, _this.getheaderspart())
                .then(function (data) {
                console.log("plandata", data);
                var success_data = data;
                resolve(JSON.parse(success_data.data));
            }, function (err) {
                reject(err);
            });
        });
    };
    GlobalProvider.prototype.set_token = function (registration) {
        this.FirebaseToken = registration.registrationId;
        console.log("this.api.TOKEN_ID", this.FirebaseToken);
    };
    GlobalProvider.prototype.Exitapp = function () {
        var _this = this;
        setTimeout(function () {
            _this.platformos.exitApp();
        }, 1000);
    };
    GlobalProvider.prototype.Exitpopapp = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            message: "Do You want Exit App?",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function (data) {
                        console.log('Saved clicked', data);
                        setTimeout(function () {
                            _this.platformos.exitApp();
                        }, 100);
                    }
                }
            ]
        });
        prompt.present();
    };
    GlobalProvider.prototype.presentToast = function (msg) {
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
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["v" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ })

},[266]);
//# sourceMappingURL=main.js.map