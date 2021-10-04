webpackJsonp([1],{

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebviewPageModule", function() { return WebviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__webview__ = __webpack_require__(532);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WebviewPageModule = /** @class */ (function () {
    function WebviewPageModule() {
    }
    WebviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__webview__["a" /* WebviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__webview__["a" /* WebviewPage */]),
            ],
        })
    ], WebviewPageModule);
    return WebviewPageModule;
}());

//# sourceMappingURL=webview.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebviewPage = /** @class */ (function () {
    function WebviewPage(navCtrl, navParams, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.title = navParams.data.title;
        console.log("title123", this.title);
        this.title = navParams.data.TYPE;
        this.name = navParams.data.NAME;
        this.date = navParams.data.DATE;
        this.description = navParams.data.DESCRIPTION;
        this.vedio = navParams.data.VIDEO;
        //   this.image = navParams.data.IMAGE || 'assets/imgs/app_background.png';
        this.videotemp = this.vedio.split("/");
        console.log("video code", this.videotemp);
        this.videourl = "https://www.youtube.com/embed/" + this.videotemp[this.videotemp.length - 1];
        console.log("final url", this.videourl);
        console.log("title", this.title);
        console.log("name", this.name);
        console.log("description", this.description);
        console.log("date", this.date);
        console.log("vedio", this.vedio);
        // console.log("image",this.image);
        this.Selectedvedio = navParams.data.ID;
        console.log("MainId", this.Selectedvedio);
    }
    WebviewPage.prototype.ionViewDidLoad = function () {
        this.trustedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videourl);
        this.title = this.navParams.data.TYPE;
        console.log("mainarray", this.title);
        // window.open(this.vedio, '_self');
    };
    WebviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-webview',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\webview\webview.html"*/'<!--\n\n  Generated template for the WebviewPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>{{name}}</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <ion-grid>\n\n\n\n        <!--<iframe style="height: auto; width: auto" [src]="trustedVideoUrl" frameborder="0" allowfullscreen></iframe>-->\n\n         <iframe height="315" style="margin-top: 30%" [src]="trustedVideoUrl" frameborder="0" allowfullscreen></iframe>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\webview\webview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], WebviewPage);
    return WebviewPage;
}());

//# sourceMappingURL=webview.js.map

/***/ })

});
//# sourceMappingURL=1.js.map