webpackJsonp([11],{

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubknowledgePageModule", function() { return SubknowledgePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subknowledge__ = __webpack_require__(522);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubknowledgePageModule = /** @class */ (function () {
    function SubknowledgePageModule() {
    }
    SubknowledgePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__subknowledge__["a" /* SubknowledgePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__subknowledge__["a" /* SubknowledgePage */]),
            ],
        })
    ], SubknowledgePageModule);
    return SubknowledgePageModule;
}());

//# sourceMappingURL=subknowledge.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubknowledgePage; });
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



var SubknowledgePage = /** @class */ (function () {
    function SubknowledgePage(navCtrl, navParams, sanitizer, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.loadingCtrl = loadingCtrl;
        this.loading = this.loadingCtrl.create({ content: "please wait..." });
        this.loading.present();
        this.title = this.navParams.data.title;
        console.log("name123123", this.title);
    }
    SubknowledgePage.prototype.ionViewDidLoad = function () {
        this.trustedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.navParams.data.url);
        this.loading.dismiss();
        // this.title = this.navParams.data;
        // console.log("log",this.title);
    };
    SubknowledgePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subknowledge',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\subknowledge\subknowledge.html"*/'<!--\n\n  Generated template for the SubknowledgePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content scroll="true" overflow-scroll="true">\n\n    <div class="scroll-wrapper">\n\n    <iframe height="100%" width="100%" [src]="trustedVideoUrl" frameborder="0" allowfullscreen></iframe>\n\n    </div>\n\n    <!--<iframe width="100%" height="100%" class=\'webPage\' name="eventsPage" id=\'filecontainer\' src={{URL}}}>-->\n\n    <!--</iframe>-->\n\n</ion-content>'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\subknowledge\subknowledge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], SubknowledgePage);
    return SubknowledgePage;
}());

//# sourceMappingURL=subknowledge.js.map

/***/ })

});
//# sourceMappingURL=11.js.map