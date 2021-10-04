webpackJsonp([12],{

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAdvisoryPageModule", function() { return SubAdvisoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_advisory__ = __webpack_require__(521);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubAdvisoryPageModule = /** @class */ (function () {
    function SubAdvisoryPageModule() {
    }
    SubAdvisoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sub_advisory__["a" /* SubAdvisoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sub_advisory__["a" /* SubAdvisoryPage */]),
            ],
        })
    ], SubAdvisoryPageModule);
    return SubAdvisoryPageModule;
}());

//# sourceMappingURL=sub-advisory.module.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubAdvisoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screenshot__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__imagedisplay_imagedisplay__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubAdvisoryPage = /** @class */ (function () {
    function SubAdvisoryPage(navCtrl, loadingCtrl, alertCtrl, navParams, api, socialSharing, screenshot, toastctrl, modal) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.api = api;
        this.socialSharing = socialSharing;
        this.screenshot = screenshot;
        this.toastctrl = toastctrl;
        this.modal = modal;
        this.current = "current";
        this.green = '#19b330';
        this.loading = this.loadingCtrl.create({ content: "please wait..." });
        //this.loading.present();
        this.title = navParams.data.ADVISORYNAME;
        console.log("navParams.data", navParams.data);
        console.log("fgvghbh", this.title);
        this.SelectedAdvisoryId = navParams.data.ID;
        console.log("fgvghbh", navParams.data.ID);
        console.log("image", navParams.data.ADVISORYIMAGE);
        this.GetList(this.SelectedAdvisoryId);
        this.GetCurrentList(this.SelectedAdvisoryId);
    }
    SubAdvisoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubAdvisoryPage');
    };
    SubAdvisoryPage.prototype.GetList = function (ADVISORYID) {
        var _this = this;
        console.log("past", ADVISORYID);
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Please Wait...'
            });
            this.loading.present();
        }
        this.api.advisorySubList(ADVISORYID)
            .then(function (data) {
            _this.loading.dismiss();
            _this.apiData = data;
            if (_this.apiData.status == 200) {
                console.log("admin", _this.apiData);
                _this.items = _this.apiData.data;
                console.log("advisorySubList", _this.items);
            }
            else if (_this.apiData.status == 404) {
                _this.api.presentToast(_this.apiData.message);
            }
            else if (_this.apiData.status == 440) {
                _this.api.presentToast(_this.apiData.message);
                localStorage.removeItem("login_apiData");
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
    };
    SubAdvisoryPage.prototype.GetCurrentList = function (ADVISORYID) {
        var _this = this;
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Please Wait...'
            });
            this.loading.present();
        }
        console.log("cuttent", ADVISORYID);
        this.api.advusoryCuttentList(ADVISORYID)
            .then(function (data) {
            _this.loading.dismiss();
            _this.apidata2 = data;
            if (_this.apidata2.status == 200) {
                console.log("admin", _this.apiData);
                _this.items2 = _this.apidata2.data;
                console.log("advisorycurrentSubList", _this.items);
            }
            else if (_this.apidata2.status == 404) {
                _this.api.presentToast(_this.apidata2.message);
            }
            else if (_this.apidata2.status == 440) {
                _this.api.presentToast(_this.apidata2.message);
                localStorage.removeItem("login_apidata2");
                _this.navCtrl.setRoot('SignloginPage');
            }
            else if (_this.apidata2.status == 304) {
                _this.api.presentToast(_this.apidata2.message);
                window.open(_this.api.playstorelink, '_system');
            }
            else if (_this.apidata2.status == 530) {
                _this.api.presentToast(_this.apidata2.message);
                _this.api.Exitapp();
            }
            else {
                _this.api.presentToast(_this.apidata2.message);
            }
            // this.loading.dismiss();
        }).catch();
    };
    SubAdvisoryPage.prototype.imageDisplay = function (image, title) {
        this.img = image;
        if (this.img == "" || this.img == "null" || this.img == null) {
        }
        else {
            this.openModal(image, title);
        }
        /*  console.log(image);

  this.img = image;

  if (this.img == "" || this.img == "null" || this.img == null) {

  } else {
      let confirm = this.alertCtrl.create({
          title: 'Secure Trade',
          message: '<img src={{image}}>',
          buttons: [

              {
                  text: 'ok',
                  handler: () => {

                  }
              }
          ],
          cssClass: 'alert-ios .alert-button '
      });
      confirm.present();
  }*/
    };
    SubAdvisoryPage.prototype.openModal = function (image, title) {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__imagedisplay_imagedisplay__["a" /* Imagedisplay */], { image: image, title: title }, { showBackdrop: true, enableBackdropDismiss: true });
        modal.present();
    };
    /* imageDisplay(image) {
         if (image.){

         }else {

         }

         let confirm = this.alertCtrl.create({
             title: 'Secure Trade',
             message: '<img src=assets/imgs/advisory_icon.png>',
             buttons: [

                 {
                     text: 'ok',
                     handler: () => {

                     }
                 }
             ],
             cssClass: 'alert-ios .alert-button '
         });
         confirm.present();
     }*/
    SubAdvisoryPage.prototype.shareInfo = function () {
        this.socialSharing.share("Secure Trade", "Demo subject", "", "https://play.google.com/store/apps/details?id=&hl=en%22").then(function () {
        }).catch(function () {
        });
    };
    SubAdvisoryPage.prototype.shareScreenshot = function () {
        this.api.SharescrrenshotContent(this.screenshot, this.socialSharing, this.screen, this.api.playstorelink);
    };
    SubAdvisoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sub-advisory',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\sub-advisory\sub-advisory.html"*/'<!--\n\n  Generated template for the SubAdvisoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n\n\n        <ion-title>{{title}}\n\n\n\n        </ion-title>\n\n        <span style="float: right; color: white;" end><ion-icon name="md-share" style=" margin-left: 17px; margin-right: 17px; margin-top: 4px;font-weight: bold; font-size: 22px;" (click)="shareScreenshot()"></ion-icon></span>\n\n\n\n    </ion-navbar>\n\n\n\n    <ion-toolbar no-border-top>\n\n\n\n        <ion-segment [(ngModel)]="current">\n\n            <ion-segment-button value="current">\n\n                CURRENT\n\n            </ion-segment-button>\n\n            <ion-segment-button value="past">\n\n                PAST\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div [ngSwitch]="current">\n\n\n\n        <!--current tab for html-->\n\n\n\n        <ion-list *ngSwitchCase="\'current\'">\n\n            <ion-list *ngFor="let item of items2">\n\n\n\n                <ion-card (click)="imageDisplay(item.ADVISORYIMAGE,item.COMPANYNAME)">\n\n                    <ion-item>\n\n                        <ion-row>\n\n                            <ion-col col-4="">\n\n                                <div style="padding: 0px"><img col-md-6 style="width: 80px; height: 70px; padding: 0px" src="{{item.ADVISORYLOGO}}"/>\n\n                                </div>\n\n                                <p style="margin-top: 8px;font-size: 10px;color: #040063;">{{item.DATE}} {{item.TIME}} </p>\n\n                            </ion-col>\n\n\n\n                            <ion-col col-8>\n\n\n\n                                <h4 style="color: #040063;font-size: 1.5rem;">{{item.COMPANYNAME}}\n\n\n\n                                    <span style="float: right;">\n\n\n\n                                    <button ion-button small color="secondary" *ngIf="item.TYPE==\'Buy\'" class="sell-button">{{item.TYPE}}</button>\n\n\n\n                                    <button ion-button small color="danger" *ngIf="item.TYPE==\'Sell\'" class="sell-button">{{item.TYPE}}</button>\n\n\n\n                                    </span>\n\n                                </h4>\n\n                                <div>\n\n                                    <ion-row>\n\n                                        <ion-col col-6>\n\n                                            <p style="color: #040063">Init. Price</p>\n\n                                            <p style="color: #040063">Target 1</p>\n\n                                            <p style="color: #040063">Target 2</p>\n\n                                            <p style="color: #040063">Stop Loss</p>\n\n                                        </ion-col>\n\n                                        <ion-col col-6>\n\n                                            <p style="color: #040063">{{item.INITPRICE}}</p>\n\n                                            <p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">{{item.TARGET1}}</p>\n\n                                            <p style="color: #040063; background-color: #19b330;color: #040063;" *ngIf="item.TARGET1HIT == \'HIT\'">{{item.TARGET1}}</p>\n\n                                            <p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">{{item.TARGET2}}</p>\n\n                                            <p style="color: #040063; background-color: #19b330;color: #040063;" *ngIf="item.TARGET1HIT == \'HIT\'">{{item.TARGET2}}</p>\n\n                                            <p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">{{item.STOPLOSS}}</p>\n\n                                            <p style="color: #040063; background-color: #f53d3d;color: #040063;" *ngIf="item.TARGET1HIT == \'HIT\'">{{item.STOPLOSS}}</p>\n\n                                        </ion-col>\n\n                                    </ion-row>\n\n                                </div>\n\n                                <!--<p style="color: #040063">Init. Price&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.INITPRICE}} </p>-->\n\n                                <!--<p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">Target 1&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.TARGET1}}</p>-->\n\n                                <!--<p style="background-color: #19b330;color: #040063;width: 170px;" *ngIf="item.TARGET1HIT == \'HIT\'">Target 1&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.TARGET1}}</p>-->\n\n                                <!--<p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">Target 2&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.TARGET2}}</p>-->\n\n                                <!--<p style="background-color: #19b330;color: #040063;width: 170px;" *ngIf="item.TARGET2HIT == \'HIT\'">Target 2&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.TARGET2}}</p>-->\n\n                                <!--<p style="color: #040063">Stop Loss&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.STOPLOSS}}</p>-->\n\n                                <!--<p style="color: #040063">Time {{item.TIME}}</p>-->\n\n                            </ion-col>\n\n\n\n                        </ion-row>\n\n                    </ion-item>\n\n                </ion-card>\n\n\n\n            </ion-list>\n\n        </ion-list>\n\n\n\n        <!--past tab for html-->\n\n\n\n        <ion-list *ngSwitchCase="\'past\'">\n\n\n\n            <ion-list *ngFor="let item of items">\n\n                <ion-card (click)="imageDisplay(item.ADVISORYIMAGE,item.COMPANYNAME)">\n\n                    <ion-item>\n\n                        <ion-row>\n\n                            <ion-col col-4="">\n\n                                <div style="padding: 0px"><img col-md-6 style="width: 80px; height: 70px; padding: 0px" src="{{item.ADVISORYLOGO}}"/>\n\n                                </div>\n\n                                <p style="margin-top: 8px;font-size: 10px;color: #040063;">{{item.DATE}} {{item.TIME}} </p>\n\n                            </ion-col>\n\n\n\n                            <ion-col col-8>\n\n                                <h4 style="color: #040063;font-size: 1.5rem;">{{item.COMPANYNAME}}\n\n\n\n                                    <span style="float: right;">\n\n                                    <button ion-button small color="secondary" *ngIf="item.TYPE==\'Buy\'" class="sell-button">{{item.TYPE}}</button>\n\n\n\n                                    <button ion-button small color="danger" *ngIf="item.TYPE==\'Sell\'" class="sell-button">{{item.TYPE}}</button>\n\n                                    </span>\n\n                                </h4>\n\n                                <div>\n\n                                    <ion-row>\n\n                                        <ion-col col-6>\n\n                                            <p style="color: #040063">Init. Price</p>\n\n                                            <p style="color: #040063">Target 1</p>\n\n                                            <p style="color: #040063">Target 2</p>\n\n                                            <p style="color: #040063">Stop Loss</p>\n\n                                        </ion-col>\n\n                                        <ion-col col-6>\n\n                                            <p style="color: #040063">{{item.INITPRICE}}</p>\n\n                                            <p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">{{item.TARGET1}}</p>\n\n                                            <p style="color: #040063; background-color: #19b330;color: #040063;" *ngIf="item.TARGET1HIT == \'HIT\'">{{item.TARGET1}}</p>\n\n                                            <p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">{{item.TARGET2}}</p>\n\n                                            <p style="color: #040063; background-color: #19b330;color: #040063;" *ngIf="item.TARGET1HIT == \'HIT\'">{{item.TARGET2}}</p>\n\n                                            <p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">{{item.STOPLOSS}}</p>\n\n                                            <p style="color: #040063; background-color: #f53d3d;color: #040063;" *ngIf="item.TARGET1HIT == \'HIT\'">{{item.STOPLOSS}}</p>\n\n                                        </ion-col>\n\n                                    </ion-row>\n\n                                </div>\n\n                                <!--<p style="color: #040063">Init. Price&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.INITPRICE}} </p>-->\n\n                                <!--<p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">Target 1&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.TARGET1}}</p>-->\n\n                                <!--<p style="background-color: #19b330;color: #040063;width: 170px;" *ngIf="item.TARGET1HIT == \'HIT\'">Target 1&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.TARGET1}}</p>-->\n\n                                <!--<p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">Target 2&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.TARGET2}}</p>-->\n\n                                <!--<p style="background-color: #19b330;color: #040063;width: 170px;" *ngIf="item.TARGET2HIT == \'HIT\'">Target 2&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.TARGET2}}</p>-->\n\n                                <!--<p style="color: #040063">Stop Loss&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.STOPLOSS}}</p>-->\n\n\n\n                                <!--<p style="color: #040063;font-size: small;">Init. Price &ensp;&ensp;&ensp;&ensp;&ensp; {{item.INITPRICE}} </p>\n\n                                <p style="color: #040063;font-size: small;">Target 1 &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; {{item.TARGET1}}</p>\n\n                                <p style="color: #040063;font-size: small;">Target 2 &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; {{item.TARGET2}}</p>\n\n                                <p style="color: #040063;font-size: small;">Stop Loss&ensp;&ensp;&ensp;&ensp;&ensp; {{item.STOPLOSS}}</p>-->\n\n                                <!--<p style="color: #040063;font-size: small;">Time {{item.TIME}}</p>-->\n\n                            </ion-col>\n\n\n\n                        </ion-row>\n\n                    </ion-item>\n\n                </ion-card>\n\n            </ion-list>\n\n\n\n        </ion-list>\n\n\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\sub-advisory\sub-advisory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_screenshot__["a" /* Screenshot */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], SubAdvisoryPage);
    return SubAdvisoryPage;
}());

//# sourceMappingURL=sub-advisory.js.map

/***/ })

});
//# sourceMappingURL=12.js.map