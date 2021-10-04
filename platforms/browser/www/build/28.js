webpackJsonp([28],{

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeZonePageModule", function() { return KnowledgeZonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__knowledge_zone__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KnowledgeZonePageModule = /** @class */ (function () {
    function KnowledgeZonePageModule() {
    }
    KnowledgeZonePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__knowledge_zone__["a" /* KnowledgeZonePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__knowledge_zone__["a" /* KnowledgeZonePage */]),
            ],
        })
    ], KnowledgeZonePageModule);
    return KnowledgeZonePageModule;
}());

//# sourceMappingURL=knowledge-zone.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnowledgeZonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screenshot__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(131);
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
 * Generated class for the KnowledgeZonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KnowledgeZonePage = /** @class */ (function () {
    function KnowledgeZonePage(navCtrl, loadingCtrl, plt, navParams, globalApi, iappb, screenshot, socialSharing, toastctrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.plt = plt;
        this.navParams = navParams;
        this.globalApi = globalApi;
        this.iappb = iappb;
        this.screenshot = screenshot;
        this.socialSharing = socialSharing;
        this.toastctrl = toastctrl;
        this.free = "freevideo";
        this.defaultImage = "assets/imgs/app_background.png";
        this.hide = false;
        this.loading = this.loadingCtrl.create({ content: "please wait..." });
        this.loading.present();
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Please Wait...'
            });
            this.loading.present();
        }
        this.globalApi.videocategory()
            .then(function (data) {
            // this.users = data;
            _this.apiData = data;
            _this.loading.dismiss();
            if (_this.apiData.status == 200) {
                _this.category = _this.apiData.data;
                //    this.checkReportLink();
                console.log("category", _this.category);
            }
            else {
                _this.apiData.ErrorApi(_this.apiData.status, _this.apiData.message);
            }
        }).catch();
    }
    KnowledgeZonePage.prototype.opendetails = function (id) {
        var _this = this;
        this.hide = true;
        this.loading = this.loadingCtrl.create({ content: "please wait..." });
        this.loading.present();
        this.globalApi.videocategorydetails(id)
            .then(function (data) {
            // this.users = data;
            _this.apiData2 = data;
            _this.loading.dismiss();
            if (_this.apiData2.status == 200) {
                _this.videodetails = _this.apiData2.data;
                console.log("videodetails", _this.videodetails);
            }
            else {
                _this.apiData.ErrorApi(_this.apiData2.status, _this.apiData2.message);
            }
            // this.loading.dismiss();
        }).catch();
    };
    KnowledgeZonePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            if (_this.hide == true) {
                _this.hide = false;
            }
            else {
                _this.navCtrl.pop();
            }
        };
        this.plt.registerBackButtonAction(function (e) {
            if (_this.hide == true) {
                _this.hide = false;
            }
            else {
                _this.navCtrl.pop();
            }
        });
    };
    KnowledgeZonePage.prototype.openvideolink = function (id) {
        var _this = this;
        this.loading = this.loadingCtrl.create({ content: "please wait..." });
        this.loading.present();
        this.globalApi.videocategorydetailslink(id)
            .then(function (data) {
            // this.users = data;
            _this.apiData3 = data;
            _this.loading.dismiss();
            if (_this.apiData3.status == 200) {
                _this.videolink = _this.apiData3.data;
                console.log("videolink", _this.videolink);
                _this.LINK = _this.videolink[0].VIDEO;
                console.log("video link", _this.LINK);
                _this.navCtrl.push('VideodetailsPage', _this.videolink);
                // const browser = this.iappb.create(this.LINK);
                // browser.on('loadstop').subscribe(event => {
                //     browser.insertCSS({ code: "body{color: red;" });
                // });
                // browser.close();
            }
            else {
                _this.apiData.ErrorApi(_this.apiData3.status, _this.apiData3.message);
            }
            // this.loading.dismiss();
        }).catch();
    };
    KnowledgeZonePage.prototype.shareScreenshot = function () {
        // this.globalApi.SharescrrenshotContent(this.screenshot, this.socialSharing, this.screen, this.globalApi.playstorelink);
    };
    KnowledgeZonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KnowledgeZonePage');
    };
    KnowledgeZonePage.prototype.openvideolist = function () {
        this.hide = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Navbar */])
    ], KnowledgeZonePage.prototype, "navBar", void 0);
    KnowledgeZonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-knowledge-zone',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\knowledge-zone\knowledge-zone.html"*/'<!--\n\n  Generated template for the KnowledgeZonePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Video</ion-title>\n\n        <!--<span style="float: right; color: white;font-weight: bold;" end><ion-icon name="md-share" style=" margin-left: 0px; margin-right: 17px; margin-top: 4px; " (click)="shareScreenshot()"></ion-icon></span>-->\n\n    </ion-navbar>\n\n    <!--<ion-toolbar no-border-top>-->\n\n    <!--<ion-segment [(ngModel)]="free">-->\n\n    <!--<ion-segment-button value="freevideo">-->\n\n    <!--Free Video-->\n\n    <!--</ion-segment-button>-->\n\n    <!--<ion-segment-button value="premiumvideo">-->\n\n    <!--Premium Video-->\n\n    <!--</ion-segment-button>-->\n\n    <!--</ion-segment>-->\n\n    <!--</ion-toolbar>-->\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <div>\n\n        <ion-list *ngIf="hide == false">\n\n            <ion-list *ngFor="let item of category" style=" margin: 0px 0px 0px;" (tap)="opendetails(item.ID)">\n\n                <ion-card class="card" type="button">\n\n                    <img [src]="item.IMAGE" style="width: 100%;height: 200px;">\n\n                    <ion-item>\n\n                        <h2 style="color: #ed3954;">{{item.CATEGORYNAME}}</h2>\n\n                    </ion-item>\n\n                </ion-card>\n\n            </ion-list>\n\n        </ion-list>\n\n\n\n        <ion-list *ngIf="hide == true">\n\n            <ion-list *ngFor="let item of videodetails" style="margin: 0px 0px 0px;" (tap)="openvideolink(item.ID)">\n\n                <ion-card class="card">\n\n                    <img src="{{item.IMAGE}}" style="border-bottom: 1px solid #8b8b8b;width: 348px;height: 225px"/>\n\n                    <ion-item>\n\n                        <h2 style="color: #ed3954;">{{item.TITLE}}</h2>\n\n                        <p style="font-size: 0.7em;">{{item.DATE}}</p>\n\n                    </ion-item>\n\n                </ion-card>\n\n\n\n            </ion-list>\n\n        </ion-list>\n\n\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\knowledge-zone\knowledge-zone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_screenshot__["a" /* Screenshot */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
    ], KnowledgeZonePage);
    return KnowledgeZonePage;
}());

//# sourceMappingURL=knowledge-zone.js.map

/***/ })

});
//# sourceMappingURL=28.js.map