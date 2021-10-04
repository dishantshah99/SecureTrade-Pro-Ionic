webpackJsonp([50],{

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisoryServicesPageModule", function() { return AdvisoryServicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advisory_services__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdvisoryServicesPageModule = /** @class */ (function () {
    function AdvisoryServicesPageModule() {
    }
    AdvisoryServicesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__advisory_services__["a" /* AdvisoryServicesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__advisory_services__["a" /* AdvisoryServicesPage */]),
            ],
        })
    ], AdvisoryServicesPageModule);
    return AdvisoryServicesPageModule;
}());

//# sourceMappingURL=advisory-services.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvisoryServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {LiveChartsPage} from "../live-charts/live-charts";
/**
 * Generated class for the AdvisoryServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdvisoryServicesPage = /** @class */ (function () {
    function AdvisoryServicesPage(navCtrl, loadingCtrl, toastCtrl, navParams, api, device) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.api = api;
        this.device = device;
        this.loading = this.loadingCtrl.create({ content: "please wait..." });
        //  this.loading.present();
        this.login_details = JSON.parse(localStorage.getItem("login_data"));
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Please Wait...'
            });
            this.loading.present();
        }
        this.api.advisoryCategory()
            .then(function (data) {
            // this.users = data;
            _this.apiData = data;
            _this.loading.dismiss();
            if (_this.apiData.status == 200) {
                _this.items = _this.apiData.data;
                console.log("advisory123", _this.items);
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
        }).catch();
    }
    AdvisoryServicesPage.prototype.goToSubAdvisery = function (item) {
        var _this = this;
        this.Localdate = localStorage.getItem("advisoryTodaydate");
        this.currentDate = new Date().toLocaleDateString();
        console.log("currentDate", this.currentDate);
        if (this.currentDate == this.Localdate) {
            this.navCtrl.push('SubAdvisoryPage', item);
        }
        else {
            localStorage.setItem('advisoryTodaydate', this.currentDate);
            this.api.verifyVersion(this.device.uuid, this.login_details.user_data.ID)
                .then(function (data) {
                // this.users = data;
                _this.verifydata = data;
                if (_this.verifydata.status == 200) {
                    console.log("App CHECK_USER_LOGIN", _this.verifydata.data[0].CHECK_USER_LOGIN);
                    _this.userchack = _this.verifydata.data[0].CHECK_USER_LOGIN;
                    if (_this.userchack == 0) {
                        localStorage.removeItem("login_details");
                        _this.login_details = JSON.parse(localStorage.getItem("login_data"));
                        console.log("logDetail_logout", _this.login_details);
                        _this.navCtrl.setRoot('SignloginPage');
                    }
                    else {
                        console.log("dsrewfdsf", item);
                        _this.navCtrl.push('SubAdvisoryPage', item);
                    }
                }
                else {
                }
            }).catch();
        }
    };
    AdvisoryServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdvisoryServicesPage');
    };
    AdvisoryServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-advisory-services',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\advisory-services\advisory-services.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Advisory Services</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page" >\n\n\n\n    <ion-card *ngFor="let item of [1,2,3]"(click)="goToSubAdvisery(item)" >\n\n        <img src="assets/imgs/advisory_icon.png"/>\n\n        <div class="card-title" >\n\n            <button ion-button class="button">{{item.ADVISORYNAME || \'NSE\'}}</button>\n\n        </div>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\advisory-services\advisory-services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */]])
    ], AdvisoryServicesPage);
    return AdvisoryServicesPage;
}());

//# sourceMappingURL=advisory-services.js.map

/***/ })

});
//# sourceMappingURL=50.js.map