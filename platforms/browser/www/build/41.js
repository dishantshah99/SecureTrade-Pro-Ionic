webpackJsonp([41],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Charts2PageModule", function() { return Charts2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charts2__ = __webpack_require__(496);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Charts2PageModule = /** @class */ (function () {
    function Charts2PageModule() {
    }
    Charts2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__charts2__["a" /* Charts2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__charts2__["a" /* Charts2Page */]),
            ],
        })
    ], Charts2PageModule);
    return Charts2PageModule;
}());

//# sourceMappingURL=charts2.module.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Charts2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screenshot__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import {DdlModel2Page} from "../ddl-model2/ddl-model2";
/**
 * Generated class for the Charts2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Charts2Page = /** @class */ (function () {
    /**
     * Created by Tapan.
     * Date: 21-05-2018 16:39:48
     * Comment: To display live chart image by user selected
     */
    function Charts2Page(navCtrl, navParams, http, modal, socialSharing, screenshot, api, imageViewerCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.modal = modal;
        this.socialSharing = socialSharing;
        this.screenshot = screenshot;
        this.api = api;
        this.imageViewerCtrl = imageViewerCtrl;
        this.loadingCtrl = loadingCtrl;
        if (navParams.data == 1) {
            this.title = "NSE CASH";
        }
        else if (navParams.data == 2) {
            this.title = "NSE FO";
        }
        else if (navParams.data == 3) {
            this.title = "MCX";
        }
    }
    Charts2Page.prototype.presentImage = function (myImage) {
        this.imageViewer = this.imageViewerCtrl.create(myImage, { enableBackdropDismiss: true });
        this.imageViewer.present();
    };
    //visible = false;
    Charts2Page.prototype.openModaleod = function () {
        //this.visible = !this.visible;
        var _this = this;
        var myModalOption = {
            enableBackdropDismiss: false
        };
        var myModalData = { CHART_TYPE: this.navParams.data };
        var myModal = this.modal.create('DdlModel2Page', myModalData, myModalOption);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            //I have dismissed
            console.log("I have dismissed", data);
            if (data != '') {
                var time = new Date();
                var timeStamp = time.getTime();
                _this.imageOrgUrl = data.EODURL;
                _this.title = data.EODIMAGENAME;
                _this.imageUrl = _this.imageOrgUrl + "?t=" + timeStamp;
                _this.set_Intervaleod();
            }
        });
        myModal.onWillDismiss(function (data) {
            //I am about to dismiss
            // console.log("I am about to dismiss", data);
        });
    };
    Charts2Page.prototype.set_Intervaleod = function () {
        var _this = this;
        this.interval = setInterval(function () {
            var time = new Date();
            var timeStamp = time.getTime();
            _this.imageUrl = _this.imageOrgUrl + "?t=" + timeStamp;
            // this.http.get(imageUrl).subscribe(data => {
            //     console.log(data);
            // }, err => {
            //     console.log(err);
            // });
            console.log(_this.imageUrl);
        }, 2000);
    };
    Charts2Page.prototype.clear_Interval = function () {
        clearInterval(this.interval);
        this.imageUrl = "";
    };
    Charts2Page.prototype.shareScreenShot = function () {
        this.socialSharing.share("Secure Trade", "Demo subject", "", "https://play.google.com/store/apps/details?id=&hl=en%22").then(function () {
        }).catch(function () {
        });
    };
    Charts2Page.prototype.shareScreenshot = function () {
        this.api.SharescrrenshotContent(this.screenshot, this.socialSharing, this.screen, this.api.playstorelink);
    };
    Charts2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-charts2',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\charts2\charts2.html"*/'<!--\n\n  Generated template for the Charts2Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>{{title}}\n\n            <!--<span style="float: right;"> <ion-icon name="md-share" style="" item-end></ion-icon></span>-->\n\n        </ion-title>\n\n        <span style="float: right; color: white" end ><ion-icon name="md-share" style=" margin-left: 17px; margin-right: 17px; margin-top: 4px;font-weight: bold; font-size: 22px; " (click)="shareScreenshot()"></ion-icon></span>\n\n\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-row style="background-color: white">\n\n        <ion-col>\n\n            <ion-label class="select-option" style="background-color: #ffffff;" (click)="openModaleod()">\n\n                <ion-icon style="margin-right: 8px; color: #ed3954" name="ios-apps" item-right ></ion-icon>\n\n                {{title}}\n\n                <span style="float: right;"><ion-icon Style="color: #ed3954;font-weight: bold;" name="ios-search" item-end></ion-icon></span>\n\n                <!--<span style="float: right;">\n\n                    <ion-icon [name]="visible ? \'arrow-drop up-circle\' :\'arrow-drop down-circle\'"></ion-icon>\n\n                </span>-->\n\n            </ion-label>\n\n\n\n            <!--<ion-img style="width: 100%;" [height]="imageHeight" src="{{ imageUrl }}"></ion-img>-->\n\n            <img src="{{imageUrl}}" style="width: 100%;margin-top: 137px;" #myImage (click)="presentImage(myImage)">\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\charts2\charts2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_screenshot__["a" /* Screenshot */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], Charts2Page);
    return Charts2Page;
}());

//# sourceMappingURL=charts2.js.map

/***/ })

});
//# sourceMappingURL=41.js.map