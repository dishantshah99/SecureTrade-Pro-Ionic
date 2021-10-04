webpackJsonp([46],{

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageModule", function() { return BlogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog__ = __webpack_require__(488);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BlogPageModule = /** @class */ (function () {
    function BlogPageModule() {
    }
    BlogPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__blog__["a" /* BlogPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__blog__["a" /* BlogPage */]),
            ],
        })
    ], BlogPageModule);
    return BlogPageModule;
}());

//# sourceMappingURL=blog.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPage; });
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



var BlogPage = /** @class */ (function () {
    function BlogPage(navCtrl, navParams, loadingCtrl, api, toastcontroller) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.toastcontroller = toastcontroller;
        this.loading = this.loadingCtrl.create({ content: "please wait..." });
        this.loading.present();
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Please Wait...'
            });
            this.loading.present();
        }
        this.api.news()
            .then(function (data) {
            // this.users = data;
            _this.apiData = data;
            _this.loading.dismiss();
            if (_this.apiData.status == 200) {
                _this.news = _this.apiData.data;
                // this.checkReportLink();
                console.log("news", _this.news);
            }
            else {
                api.ErrorApi(_this.apiData.status, _this.apiData.message);
            }
        }).catch();
    }
    BlogPage.prototype.goToBlogdetail = function (item) {
        console.log("blogdetail", item);
        this.navCtrl.push('BlogDetailPage', item);
    };
    BlogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blog',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\blog\blog.html"*/'<!--\n\n  Generated template for the BlogPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Blog</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <ion-card *ngFor="let item of news" (click)="goToBlogdetail(item)">\n\n\n\n        <img src="{{item.IMAGE || \'assets/imgs/app_background.png\'}}" style="width: 348px;height: 225px">\n\n\n\n        <ion-item>\n\n\n\n            <ion-icon class="fa-icons" name="md-paper" color="Appcolor5" item-left medium></ion-icon>\n\n            <!--<fa-icon class="fa-icons" name="newspaper-o" item-left medium></fa-icon>-->\n\n            <h2>{{item.TITLE}}</h2>\n\n\n\n        </ion-item>\n\n\n\n        <!--<ion-card-content class="card-content" style=" padding-top: 5px;">-->\n\n            <!--<ion-item>-->\n\n                <!--<ion-textarea rows="6" disabled fixed style="height: 50px;" [innerHTML]="item.DESCRIPTION"></ion-textarea>-->\n\n            <!--</ion-item>-->\n\n            <!--&lt;!&ndash;<ion-label style="color: gray; min-height: 100%; min-width: 100%;" fixed  [innerHTML]="item.DESCRIPTION">&ndash;&gt;-->\n\n            <!--&lt;!&ndash;&lt;!&ndash;{{[innerHTML]=item.DESCRIPTION}}&ndash;&gt;&ndash;&gt;-->\n\n            <!--&lt;!&ndash;</ion-label>&ndash;&gt;-->\n\n            <!--&lt;!&ndash;<p class="item-text-wrap" style="max-height: 50px" [innerHTML]="item.DESCRIPTION" fixed></p>&ndash;&gt;-->\n\n        <!--</ion-card-content>-->\n\n\n\n        <ion-row>\n\n\n\n            <ion-col align="end">\n\n                <ion-icon name="calendar" style="color: #ed3954;" icon-right>\n\n                    <span style="margin-left: 8px;font-size: 14px; color: #404040">{{item.DATE}}</span></ion-icon>\n\n                <!--</button>-->\n\n            </ion-col>\n\n\n\n            <!--<ion-col>-->\n\n            <!--<button ion-button class="read-more" (click)="goToBlogdetail(item)">Read More</button>-->\n\n            <!--</ion-col>-->\n\n\n\n        </ion-row>\n\n\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\blog\blog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
    ], BlogPage);
    return BlogPage;
}());

//# sourceMappingURL=blog.js.map

/***/ })

});
//# sourceMappingURL=46.js.map