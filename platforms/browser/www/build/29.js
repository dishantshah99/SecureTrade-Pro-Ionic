webpackJsonp([29],{

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepagefreePageModule", function() { return HomepagefreePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepagefree__ = __webpack_require__(504);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomepagefreePageModule = /** @class */ (function () {
    function HomepagefreePageModule() {
    }
    HomepagefreePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__homepagefree__["a" /* HomepagefreePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__homepagefree__["a" /* HomepagefreePage */]),
            ],
        })
    ], HomepagefreePageModule);
    return HomepagefreePageModule;
}());

//# sourceMappingURL=homepagefree.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepagefreePage; });
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
 * Generated class for the HomepagefreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomepagefreePage = /** @class */ (function () {
    function HomepagefreePage(navCtrl, navParams, platform, globalApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.globalApi = globalApi;
    }
    HomepagefreePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomepagefreePage');
    };
    HomepagefreePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function (data) {
            console.log('Back data', _this.navCtrl.getActive(true));
            if (_this.navCtrl.getActive(true).id == "HomepagefreePage") {
                if (_this.navParams.data == {}) {
                    _this.globalApi.Exitpopapp();
                }
                else {
                    _this.navCtrl.pop();
                }
            }
            else {
                _this.navCtrl.pop();
            }
        });
    };
    HomepagefreePage.prototype.opensubscribe = function (type, page) {
        if (page == 1) {
            if (this.globalApi.LIVE_RATE_PURCHSE == false) {
                this.navCtrl.push('SubscribeplanPage', type);
            }
            else {
                this.navCtrl.popToRoot();
            }
        }
        if (page == 2) {
            if (this.globalApi.MESSAGE_BOARD_PURCHSE == false) {
                this.navCtrl.push('SubscribeplanPage', type);
            }
            else {
                this.navCtrl.push('LiveChartsPage', 0);
            }
        }
        if (page == 3) {
            if (this.globalApi.LIVE_CHART_PURCHSE == false) {
                this.navCtrl.push('SubscribeplanPage', type);
            }
            else {
                this.navCtrl.push('LiveChartsPage', 1);
            }
        }
        if (page == 4) {
            if (this.globalApi.AUTO_ADVICERY_PURCHSE == false) {
                this.navCtrl.push('SubscribeplanPage', type);
            }
            else {
                this.navCtrl.push('AutoadvisoryPage');
            }
        }
        if (page == 5) {
            this.navCtrl.push('SubscribeplanPage', type);
        }
    };
    HomepagefreePage.prototype.chartSelected = function (type) {
        if (type == 2) {
            if (this.globalApi.AUTO_ADVICERY_PURCHSE == false) {
                this.navCtrl.push('SubscribeplanPage', '1');
            }
            else {
                this.navCtrl.push('AutoadvisoryPage');
            }
        }
        else {
            this.navCtrl.push('LiveChartsPage', type);
        }
    };
    HomepagefreePage.prototype.openblog = function () {
        this.navCtrl.push('BlogPage');
    };
    HomepagefreePage.prototype.openvideo = function () {
        this.navCtrl.push('KnowledgeZonePage');
    };
    HomepagefreePage.prototype.openbroker = function () {
        this.navCtrl.push('BrokerPage');
    };
    HomepagefreePage.prototype.opentrading = function () {
        this.navCtrl.push('TradingPage');
    };
    HomepagefreePage.prototype.openrssfeed = function () {
        this.navCtrl.push('RssfeedPage');
    };
    HomepagefreePage.prototype.opencash = function () {
        this.navCtrl.push('CashrssPage');
    };
    HomepagefreePage.prototype.openfuture = function () {
        this.navCtrl.push('FuturerssPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Navbar */])
    ], HomepagefreePage.prototype, "navBar", void 0);
    HomepagefreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-homepagefree',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\homepagefree\homepagefree.html"*/'<!--\n\n  Generated template for the HomepagefreePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button color="white" menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title style="margin-top: 5%">Securetrade Pro</ion-title>\n\n\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-item no-lines style="background-color: transparent;height: 30px;">\n\n        <img style="width: 20px;height: 20px;" item-start src="assets/imgs/p3.png">\n\n        <ion-label style="font-size: 18px;color: #f57f17">Premium Services</ion-label>\n\n        <ion-badge item-end style="color: white;background-color: #f57f17" (tap)="opensubscribe(\'3\',5)">Buy Now</ion-badge>\n\n    </ion-item>\n\n    <ion-row>\n\n        <ion-col col-6 align="center">\n\n            <div style="background-color: rgba(245,88,244,0.32);border-radius: 50%;width: fit-content;margin: auto;" (tap)="opensubscribe(\'1\',1)">\n\n                <div style="text-align: center;margin: 20px auto;">\n\n                    <img src="assets/imgs/d9.png" style="height: 60px;width: 60px;border-radius: 50%;background-color: #f558f4;padding: 10px;margin: 10px;">\n\n                </div>\n\n            </div>\n\n            <p style="margin-top: -10px;">Live Rate</p>\n\n        </ion-col>\n\n        <ion-col col-6 align="center">\n\n            <div style="background-color: rgba(181,15,25,0.32);border-radius: 50%;width: fit-content;margin: auto;" (tap)="opensubscribe(\'1\',2)">\n\n                <div style="text-align: center;margin: 20px auto;">\n\n                    <img src="assets/imgs/d1.png" style="height: 60px;width: 60px;border-radius: 50%;background-color: #b50f19;padding: 10px;margin: 10px;">\n\n                </div>\n\n            </div>\n\n            <p style="margin-top: -10px;">Message Board</p>\n\n        </ion-col>\n\n        <ion-col col-6 align="center">\n\n            <div style="background-color: rgba(60,181,98,0.32);border-radius: 50%;width: fit-content;margin: auto;" (tap)="opensubscribe(\'2\',3)">\n\n                <div style="text-align: center;margin: 20px auto;">\n\n                    <img src="assets/imgs/d7.png" style="height: 60px;width: 60px;border-radius: 50%;background-color: #3cb562;padding: 10px;margin: 10px;">\n\n                </div>\n\n            </div>\n\n            <p style="margin-top: -10px;">Live Chart</p>\n\n        </ion-col>\n\n        <ion-col col-6 align="center">\n\n            <div style="background-color: rgba(181,84,60,0.32);border-radius: 50%;width: fit-content;margin: auto;" (tap)="opensubscribe(\'3\',4)">\n\n                <div style="text-align: center;margin: 20px auto;">\n\n                    <img src="assets/imgs/d8.png" style="height: 60px;width: 60px;border-radius: 50%;background-color: #b5543c;padding: 10px;margin: 10px;">\n\n                </div>\n\n            </div>\n\n            <p style="margin-top: -10px;">Auto Advisory</p>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <!--<ion-item no-lines style="background-color: transparent;height: 30px;">\n\n        &lt;!&ndash;<img style="width: 20px;height: 20px;" item-start src="assets/imgs/g3.png">&ndash;&gt;\n\n        <ion-label style="font-size: 16px;">EOD</ion-label>\n\n    </ion-item>-->\n\n    <div align="center" style="padding: 10px;">\n\n        <img style="width: 20px;height: 20px;margin: -3px;" item-start src="assets/imgs/g3.png"><span style="font-size: 18px;padding: 10px;">Life Time Free Services</span>\n\n        <!--<p style="font-size: 18px;margin: 0px;">EOD</p>-->\n\n    </div>\n\n    <ion-row>\n\n        <ion-col col-6 align="center">\n\n            <div style="background-color: rgba(245,61,61,0.32);border-radius: 50%;width: fit-content;margin: auto;" (tap)="chartSelected(0)">\n\n                <div style="text-align: center;margin: 20px auto;">\n\n                    <img src="assets/imgs/d1.png" style="height: 60px;width: 60px;border-radius: 50%;background-color: #f53d3d;padding: 10px;margin: 10px;">\n\n                </div>\n\n            </div>\n\n            <p style="margin-top: -10px;">Message Board</p>\n\n        </ion-col>\n\n        <ion-col col-6 align="center">\n\n            <div style="background-color: rgba(181,127,49,0.32);border-radius: 50%;width: fit-content;margin: auto;" (tap)="chartSelected(1)">\n\n                <div style="text-align: center;margin: 20px auto;">\n\n                    <img src="assets/imgs/g1.png" style="height: 60px;width: 60px;border-radius: 50%;background-color: #b57f31;padding: 10px;margin: 10px;">\n\n                </div>\n\n            </div>\n\n            <p style="margin-top: -10px;">EOD Charts</p>\n\n        </ion-col>\n\n        <ion-col col-6 align="center">\n\n            <div style="background-color: rgba(49,66,245,0.32);border-radius: 50%;width: fit-content;margin: auto;" (tap)="openblog()">\n\n                <div style="text-align: center;margin: 20px auto;">\n\n                    <img src="assets/imgs/d4.png" style="height: 60px;width: 60px;border-radius: 50%;background-color: #3142f5;padding: 10px;margin: 10px;">\n\n                </div>\n\n            </div>\n\n            <p style="margin-top: -10px;">Blog</p>\n\n        </ion-col>\n\n        <ion-col col-6 align="center">\n\n            <div style="background-color: rgba(102,181,56,0.32);border-radius: 50%;width: fit-content;margin: auto;" (tap)="openvideo()">\n\n                <div style="text-align: center;margin: 20px auto;">\n\n                    <img src="assets/imgs/d5.png" style="height: 60px;width: 60px;border-radius: 50%;background-color: #66b538;padding: 10px;margin: 10px;">\n\n                </div>\n\n            </div>\n\n            <p style="margin-top: -10px;">Video</p>\n\n        </ion-col>\n\n        <ion-col col-6 align="center">\n\n            <div style="background-color: rgba(80,104,181,0.32);border-radius: 50%;width: fit-content;margin: auto;" (tap)="opentrading()">\n\n                <div style="text-align: center;margin: 20px auto;">\n\n                    <img src="assets/imgs/d10.png" style="height: 60px;width: 60px;border-radius: 50%;background-color: #5068b5;padding: 10px;margin: 10px;">\n\n                </div>\n\n            </div>\n\n            <p style="margin-top: -10px;">Trading</p>\n\n        </ion-col>\n\n        <ion-col col-6 align="center">\n\n            <div style="background-color: rgba(181,125,64,0.32);border-radius: 50%;width: fit-content;margin: auto;" (tap)="openbroker()">\n\n                <div style="text-align: center;margin: 20px auto;">\n\n                    <img src="assets/imgs/d13.png" style="height: 60px;width: 60px;border-radius: 50%;background-color: #b57d40;padding: 10px;margin: 10px;">\n\n                </div>\n\n            </div>\n\n            <p style="margin-top: -10px;">Broker</p>\n\n        </ion-col>\n\n    </ion-row>\n\n    <!-- <ion-row>\n\n         <ion-col col-6>\n\n             <ion-card style="background-color: #f4f4f4" (tap)="chartSelected(0)">\n\n                 <img src="assets/imgs/d1.png">\n\n                 <ion-label class="title">Message Board</ion-label>\n\n             </ion-card>\n\n         </ion-col>\n\n         <ion-col col-6>\n\n             <ion-card style="background-color: #f4f4f4" (tap)="chartSelected(1)">\n\n                 <img src="assets/imgs/g1.png">\n\n                 <ion-label class="title">EOD Charts</ion-label>\n\n             </ion-card>\n\n         </ion-col>\n\n         &lt;!&ndash; <ion-col col-4>\n\n              <ion-card style="background-color: #f4f4f4" (tap)="chartSelected(2)">\n\n                  <img src="assets/imgs/d3.png">\n\n                  <ion-label class="title">Auto Advisory</ion-label>\n\n              </ion-card>\n\n          </ion-col>&ndash;&gt;\n\n     </ion-row>\n\n -->\n\n    <!-- <ion-item no-lines style="background-color: transparent;height: 30px;">\n\n         <img style="width: 20px;height: 20px;" item-start src="assets/imgs/p4.png">\n\n         <ion-label style="font-size: 16px;">RSS Feeds</ion-label>\n\n     </ion-item>\n\n\n\n     <ion-row>\n\n         <ion-col col-4>\n\n             <ion-card style="background-color: #f4f4f4" (tap)="openrssfeed()">\n\n                 <img src="assets/imgs/d6.png">\n\n                 <ion-label class="title">Rss Feed</ion-label>\n\n             </ion-card>\n\n         </ion-col>\n\n         <ion-col col-4>\n\n             <ion-card style="background-color: #f4f4f4" (tap)="opencash()">\n\n                 <img src="assets/imgs/d11.png">\n\n                 <ion-label class="title">Cash Market Data</ion-label>\n\n             </ion-card>\n\n         </ion-col>\n\n         <ion-col col-4>\n\n             <ion-card style="background-color: #f4f4f4" (tap)="openfuture()">\n\n                 <img src="assets/imgs/d12.png">\n\n                 <ion-label class="title">Future Market Data</ion-label>\n\n             </ion-card>\n\n         </ion-col>\n\n     </ion-row>\n\n -->\n\n   <!-- <div align="center" style="padding: 10px;">\n\n        <img style="width: 20px;height: 20px;margin: -3px;" item-start src="assets/imgs/p2.png"><span style="font-size: 18px;padding: 10px;">Others</span>\n\n        &lt;!&ndash;<p style="font-size: 18px;margin: 0px;">EOD</p>&ndash;&gt;\n\n    </div>\n\n    <ion-row>\n\n        <ion-col col-6 align="center">\n\n            <div style="background-color: rgba(49,66,245,0.32);border-radius: 50%;width: fit-content;margin: auto;" (tap)="chartSelected(0)">\n\n                <div style="text-align: center;margin: 20px auto;">\n\n                    <img src="assets/imgs/d4.png" style="height: 60px;width: 60px;border-radius: 50%;background-color: #3142f5;padding: 10px;margin: 10px;">\n\n                </div>\n\n            </div>\n\n            <p style="margin-top: -10px;">Blog</p>\n\n        </ion-col>\n\n        <ion-col col-6 align="center">\n\n            <div style="background-color: rgba(102,181,56,0.32);border-radius: 50%;width: fit-content;margin: auto;" (tap)="chartSelected(1)">\n\n                <div style="text-align: center;margin: 20px auto;">\n\n                    <img src="assets/imgs/d5.png" style="height: 60px;width: 60px;border-radius: 50%;background-color: #66b538;padding: 10px;margin: 10px;">\n\n                </div>\n\n            </div>\n\n            <p style="margin-top: -10px;">Video</p>\n\n        </ion-col>\n\n        <ion-col col-6 align="center">\n\n            <div style="background-color: rgba(80,104,181,0.32);border-radius: 50%;width: fit-content;margin: auto;" (tap)="chartSelected(1)">\n\n                <div style="text-align: center;margin: 20px auto;">\n\n                    <img src="assets/imgs/d10.png" style="height: 60px;width: 60px;border-radius: 50%;background-color: #5068b5;padding: 10px;margin: 10px;">\n\n                </div>\n\n            </div>\n\n            <p style="margin-top: -10px;">Trading</p>\n\n        </ion-col>\n\n        <ion-col col-6 align="center">\n\n            <div style="background-color: rgba(181,125,64,0.32);border-radius: 50%;width: fit-content;margin: auto;" (tap)="chartSelected(1)">\n\n                <div style="text-align: center;margin: 20px auto;">\n\n                    <img src="assets/imgs/d13.png" style="height: 60px;width: 60px;border-radius: 50%;background-color: #b57d40;padding: 10px;margin: 10px;">\n\n                </div>\n\n            </div>\n\n            <p style="margin-top: -10px;">Broker</p>\n\n        </ion-col>\n\n    </ion-row>-->\n\n  <!--  <ion-item no-lines style="background-color: transparent;height: 30px;">\n\n        <img style="width: 20px;height: 20px;" item-start src="assets/imgs/p2.png">\n\n        <ion-label style="font-size: 16px;">Others</ion-label>\n\n    </ion-item>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n            <ion-card style="background-color: #f4f4f4" (tap)="openblog()">\n\n                <img src="assets/imgs/d4.png">\n\n                <ion-label class="title">Blog</ion-label>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n            <ion-card style="background-color: #f4f4f4" (tap)="openvideo()">\n\n                <img src="assets/imgs/d5.png">\n\n                <ion-label class="title">Video</ion-label>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n            <ion-card style="background-color: #f4f4f4" (tap)="opentrading()">\n\n                <img src="assets/imgs/d10.png">\n\n                <ion-label class="title">Trading</ion-label>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n            <ion-card style="background-color: #f4f4f4" (tap)="openbroker()">\n\n                <img src="assets/imgs/d13.png">\n\n                <ion-label class="title">Broker</ion-label>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row>-->\n\n  <!--  <ion-row>\n\n        <ion-col col-6>\n\n            <ion-card style="background-color: #f4f4f4" (tap)="opensubscribe(\'1\',1)">\n\n                <img src="assets/imgs/d9.png">\n\n                <ion-label class="title" style="font-size: 16px;">Live Rate</ion-label>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n            <ion-card style="background-color: #f4f4f4" (tap)="opensubscribe(\'1\',2)">\n\n                <img src="assets/imgs/d1.png">\n\n                <ion-label class="title" style="font-size: 16px;">Message Board</ion-label>\n\n            </ion-card>\n\n        </ion-col>\n\n\n\n        <ion-col col-6>\n\n            <ion-card style="background-color: #f4f4f4" (tap)="opensubscribe(\'2\',3)">\n\n                <img src="assets/imgs/d7.png">\n\n                <ion-label class="title" style="font-size: 16px;">Live Chart</ion-label>\n\n            </ion-card>\n\n        </ion-col>\n\n\n\n        <ion-col col-6>\n\n            <ion-card style="background-color: #f4f4f4" (tap)="opensubscribe(\'3\',4)">\n\n                <img src="assets/imgs/d8.png">\n\n                <ion-label class="title" style="font-size: 16px;">Auto Advisory</ion-label>\n\n            </ion-card>\n\n        </ion-col>\n\n\n\n    </ion-row>-->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\homepagefree\homepagefree.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], HomepagefreePage);
    return HomepagefreePage;
}());

//# sourceMappingURL=homepagefree.js.map

/***/ })

});
//# sourceMappingURL=29.js.map