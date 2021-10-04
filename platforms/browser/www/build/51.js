webpackJsonp([51],{

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminmsgPageModule", function() { return AdminmsgPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adminmsg__ = __webpack_require__(483);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminmsgPageModule = /** @class */ (function () {
    function AdminmsgPageModule() {
    }
    AdminmsgPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adminmsg__["a" /* AdminmsgPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adminmsg__["a" /* AdminmsgPage */]),
            ],
        })
    ], AdminmsgPageModule);
    return AdminmsgPageModule;
}());

//# sourceMappingURL=adminmsg.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminmsgPage; });
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



/**
 * Generated class for the AdminmsgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminmsgPage = /** @class */ (function () {
    function AdminmsgPage(navCtrl, navParams, loadingCtrl, api, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.GetList();
    }
    AdminmsgPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminMessagesPage');
    };
    AdminmsgPage.prototype.GetList = function () {
        var _this = this;
        console.log("TYPE", this.TYPE);
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Please Wait...'
            });
            this.loading.present();
        }
        this.api.adminMassage()
            .then(function (data) {
            console.log(data);
            _this.apiData = data;
            _this.loading.dismissAll();
            if (_this.apiData.status == 200) {
                console.log("admin", _this.apiData);
                _this.items = _this.apiData.data;
                console.log("adminMassage", _this.items);
            }
            else {
                _this.api.ErrorApi(_this.apiData.status, _this.apiData.message);
            }
            // }else if(this.apiData.status == 404){
            //
            //     this.api.presentToast("No Any Record Found",this.toastCtrl);
            //     this.loading.dismissAll();
            // }
        }).catch();
    };
    AdminmsgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adminmsg',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\adminmsg\adminmsg.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{"Admin Message"}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div>\n\n    <ion-card class="ion-cards" *ngFor="let item of items">\n\n\n\n      <ion-row>\n\n\n\n        <ion-col col-2>\n\n\n\n          <!--<p style="text-align: justify; padding: 5px;">-->\n\n          <!--<fa-icon class="fa-icons" style="color:#ed3954" name="bell" item-left medium></fa-icon>-->\n\n\n\n          <!--</p>-->\n\n          <p style="text-align: justify; padding: 5px;">\n\n            <!--<fa-icon class="fa-icons" style="color:#ed3954" name="bell" item-left medium></fa-icon>-->\n\n            <ion-icon name="notifications" class="fa-icons" style="color:#ed3954" item-left></ion-icon>\n\n          </p>\n\n        </ion-col>\n\n\n\n        <ion-col col-10>\n\n\n\n          <div class="date">\n\n            <img [src]="item.IMAGE_URL" style="width: 100%;height: 200px;padding: 10px;"/>\n\n            <h3 text-wrap>{{item.TITLE}}</h3>\n\n            <p style="margin-top: 10px;" [innerHTML]="item.MESSAGE"></p>\n\n\n\n            <!--<fa-icon class="new-data" item-right primary name="calendar"></fa-icon>-->\n\n            <ion-item>\n\n              <img src="assets/imgs/calendar.png" item-right class="new-data"/>\n\n              <label item-right class="lab" style="color: #8b8b8b; padding: 5px; text-align: left;" text-wrap>{{item.INSDATE}}</label>\n\n            </ion-item>\n\n          </div>\n\n\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n\n\n    </ion-card>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\adminmsg\adminmsg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
    ], AdminmsgPage);
    return AdminmsgPage;
}());

//# sourceMappingURL=adminmsg.js.map

/***/ })

});
//# sourceMappingURL=51.js.map