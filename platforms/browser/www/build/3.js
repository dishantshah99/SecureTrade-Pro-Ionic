webpackJsonp([3],{

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideodetailsPageModule", function() { return VideodetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videodetails__ = __webpack_require__(530);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VideodetailsPageModule = /** @class */ (function () {
    function VideodetailsPageModule() {
    }
    VideodetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__videodetails__["a" /* VideodetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__videodetails__["a" /* VideodetailsPage */]),
            ],
        })
    ], VideodetailsPageModule);
    return VideodetailsPageModule;
}());

//# sourceMappingURL=videodetails.module.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideodetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(131);
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
 * Generated class for the VideodetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideodetailsPage = /** @class */ (function () {
    function VideodetailsPage(navCtrl, navParams, iappb, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iappb = iappb;
        this.api = api;
        this.videodetails = navParams.data;
        console.log("videodetails", this.videodetails);
        var videotemp = this.videodetails[0].VIDEO.split("/");
        console.log("video code", videotemp);
        this.FINALVIDEOURL = "https://www.youtube.com/embed/" + videotemp[videotemp.length - 1];
        console.log("final url", this.FINALVIDEOURL);
    }
    VideodetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideodetailsPage');
    };
    VideodetailsPage.prototype.openbrowser = function (LINK) {
        // const browser = this.iappb.create(LINK);
        // browser.on('loadstop').subscribe(event => {
        //     browser.insertCSS({code: "body{color: red;"});
        // });
        window.open(LINK, '_system');
    };
    VideodetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-videodetails',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\videodetails\videodetails.html"*/'<!--\n\n  Generated template for the VideodetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Video Details</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <div *ngFor="let i of videodetails">\n\n        <iframe style="width: 100%;height: 200px;" frameborder="0" allowfullscreen [src]="api.safeurl(FINALVIDEOURL)"></iframe>\n\n        <!--<p [innerHTML]="i.VIDEO"></p>-->\n\n        <!--<video width="100%" height="200" controls>-->\n\n            <!--<source [src]="FINALVIDEOURL" type="video/mp4">-->\n\n            <!--Your browser does not support the video tag.-->\n\n        <!--</video>-->\n\n\n\n        <ion-label style="font-weight: bold;font-size: 18px;">{{i.TITLE}}</ion-label>\n\n        <p [innerHTML]="i.DESCRIPTION"></p>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\videodetails\videodetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], VideodetailsPage);
    return VideodetailsPage;
}());

//# sourceMappingURL=videodetails.js.map

/***/ })

});
//# sourceMappingURL=3.js.map