webpackJsonp([52],{

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMessagesPageModule", function() { return AdminMessagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_messages__ = __webpack_require__(482);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminMessagesPageModule = /** @class */ (function () {
    function AdminMessagesPageModule() {
    }
    AdminMessagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_messages__["a" /* AdminMessagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_messages__["a" /* AdminMessagesPage */]),
            ],
        })
    ], AdminMessagesPageModule);
    return AdminMessagesPageModule;
}());

//# sourceMappingURL=admin-messages.module.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMessagesPage; });
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



var AdminMessagesPage = /** @class */ (function () {
    function AdminMessagesPage(navCtrl, navParams, loadingCtrl, api, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.TYPE = navParams.data.TYPE;
        this.title = navParams.data.DISPLAY;
        this.GetList();
    }
    AdminMessagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminMessagesPage');
    };
    AdminMessagesPage.prototype.GetList = function () {
        var _this = this;
        console.log("TYPE", this.TYPE);
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Please Wait...'
            });
            this.loading.present();
        }
        this.api.rssfeed(this.TYPE)
            .then(function (data) {
            console.log(data);
            _this.apiData = data;
            _this.loading.dismissAll();
            if (_this.apiData.status == 200) {
                console.log("admin", _this.apiData);
                _this.items = _this.apiData.data;
                console.log("adminMassage", _this.items);
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
            // }else if(this.apiData.status == 404){
            //
            //     this.api.presentToast("No Any Record Found",this.toastCtrl);
            //     this.loading.dismissAll();
            // }
        }).catch();
    };
    AdminMessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-messages',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\admin-messages\admin-messages.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>{{title}}</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div>\n\n        <ion-card class="ion-cards" *ngFor="let item of items">\n\n\n\n            <ion-row>\n\n\n\n                <ion-col col-2>\n\n\n\n                    <!--<p style="text-align: justify; padding: 5px;">-->\n\n                    <!--<fa-icon class="fa-icons" style="color:#ed3954" name="bell" item-left medium></fa-icon>-->\n\n\n\n                    <!--</p>-->\n\n                    <p style="text-align: justify; padding: 5px;">\n\n                        <!--<fa-icon class="fa-icons" style="color:#ed3954" name="bell" item-left medium></fa-icon>-->\n\n                        <ion-icon name="logo-rss" class="fa-icons" style="color:#ed3954" item-left></ion-icon>\n\n                    </p>\n\n                </ion-col>\n\n\n\n                <ion-col col-10>\n\n\n\n                    <div class="date">\n\n\n\n                        <h3 text-wrap>{{item.title}}</h3>\n\n                        <p style="margin-top: 10px;" [innerHTML]="item.description"></p>\n\n\n\n                        <!--<fa-icon class="new-data" item-right primary name="calendar"></fa-icon>-->\n\n                        <ion-item>\n\n                        <img src="assets/imgs/calendar.png" item-right  class="new-data"/>\n\n                        <label item-right class="lab" style="color: #8b8b8b; padding: 5px; text-align: left;" text-wrap>{{item.pubDate}}</label>\n\n                        </ion-item>\n\n                    </div>\n\n\n\n                </ion-col>\n\n\n\n            </ion-row>\n\n\n\n        </ion-card>\n\n\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\admin-messages\admin-messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
    ], AdminMessagesPage);
    return AdminMessagesPage;
}());

//# sourceMappingURL=admin-messages.js.map

/***/ })

});
//# sourceMappingURL=52.js.map