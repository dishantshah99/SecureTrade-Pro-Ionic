webpackJsonp([47],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailPageModule", function() { return BlogDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_detail__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BlogDetailPageModule = /** @class */ (function () {
    function BlogDetailPageModule() {
    }
    BlogDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__blog_detail__["a" /* BlogDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__blog_detail__["a" /* BlogDetailPage */]),
            ],
        })
    ], BlogDetailPageModule);
    return BlogDetailPageModule;
}());

//# sourceMappingURL=blog-detail.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
 * Generated class for the BlogDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BlogDetailPage = /** @class */ (function () {
    function BlogDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = navParams.data.TITLE;
        // console.log("title", this.title);
        this.date = navParams.data.DATE;
        this.description = navParams.data.DESCRIPTION;
        this.BLOG_LINK = navParams.data.BLOG_LINK;
        this.image = navParams.data.IMAGE || 'assets/imgs/app_background.png';
        console.log("title", this.title);
        console.log("date", this.date);
        console.log("discription", this.description);
        console.log("image", this.image);
        this.SelectedBloggid = navParams.data.ID;
        console.log("discription", this.SelectedBloggid);
    }
    BlogDetailPage.prototype.openlink = function () {
        window.open(this.BLOG_LINK, '_system');
    };
    BlogDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blog-detail',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\blog-detail\blog-detail.html"*/'<!--\n\n  Generated template for the BlogDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Blog Details</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-card>\n\n        <img src="{{image}}" style="width: 348px;height: 225px">\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-label style="padding: 5px;white-space: normal;text-align: start;font-size: 16px;font-weight: bold;">{{title}}</ion-label>\n\n        <ion-item>\n\n            <!--<fa-icon class="fa-icons fa-icons" name="calendar" style="margin: 0px;" item-left medium></fa-icon>-->\n\n            <ion-icon class="fa-icons" name="md-calendar" color="Appcolor5" item-left medium></ion-icon>\n\n\n\n            <ion-label style="margin: 0px;font-size: 1.4rem;">{{date || \'02/02/2019\'}}</ion-label>\n\n        </ion-item>\n\n\n\n        <ion-card-content class="card-content" style="    padding-top: 5px;">\n\n            <p [innerHTML]="description"></p>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n<ion-footer align="center" *ngIf="BLOG_LINK != null">\n\n    <ion-label style="color: deepskyblue;font-size: 16px;font-weight: bold;" (tap)="openlink()">Read more</ion-label>\n\n</ion-footer>'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\blog-detail\blog-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], BlogDetailPage);
    return BlogDetailPage;
}());

//# sourceMappingURL=blog-detail.js.map

/***/ })

});
//# sourceMappingURL=47.js.map