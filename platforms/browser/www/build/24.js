webpackJsonp([24],{

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsearchPageModule", function() { return OptionsearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__optionsearch__ = __webpack_require__(509);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OptionsearchPageModule = /** @class */ (function () {
    function OptionsearchPageModule() {
    }
    OptionsearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__optionsearch__["a" /* OptionsearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__optionsearch__["a" /* OptionsearchPage */]),
            ],
        })
    ], OptionsearchPageModule);
    return OptionsearchPageModule;
}());

//# sourceMappingURL=optionsearch.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsearchPage; });
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
 * Generated class for the OptionsearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OptionsearchPage = /** @class */ (function () {
    function OptionsearchPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.OPTIONDATA = api.symboldata.OPTION;
    }
    OptionsearchPage.prototype.selectdata = function (i) {
        this.api.OPTIONSELECTEDDATA = i;
        this.navCtrl.push('OptionselectPage');
    };
    OptionsearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OptionsearchPage');
    };
    OptionsearchPage.prototype.initializeItems3 = function (ev) {
        var val;
        console.log(ev);
        if (ev.data != null) {
            val = ev.target.value.trim();
        }
        else {
            val = "";
            for (var i = 0; i < 30; i++) {
                this.OPTIONDATANEW.push(this.OPTIONDATA[i]);
                this.position = i;
                this.OPTION_VAL = 0;
            }
        }
        if (val && val.trim() !== '') {
            this.OPTION_SEARCH_DATA = this.OPTIONDATA.filter(function (item) {
                return (item.SYMBOL.toLowerCase().indexOf(val.toLowerCase()) == 0);
            });
            console.log("this.OPTION_SEARCH_DATA", this.OPTION_SEARCH_DATA);
            if (this.OPTION_SEARCH_DATA.length > 0) {
                this.OPTIONDATANEW = [];
                for (var i = 0; i < 60; i++) {
                    if (this.OPTION_SEARCH_DATA[i]) {
                        this.OPTIONDATANEW.push(this.OPTION_SEARCH_DATA[i]);
                        this.OPTION_VAL = 1;
                    }
                }
            }
            console.log("OPTIONDATANEW DATA", this.OPTIONDATANEW);
        }
    };
    OptionsearchPage.prototype.doInfinite = function (infiniteScroll, type) {
        var _this = this;
        console.log("position", this.position);
        console.log('Begin async operation');
        setTimeout(function () {
            _this.position++;
            var count = (_this.position + 30);
            for (var i = _this.position; i < count; i++) {
                if (type = 'option') {
                    if (_this.OPTION_VAL == 1) {
                        if (_this.OPTIONDATA[i]) {
                            _this.OPTIONDATANEW.push(_this.OPTION_SEARCH_DATA[i]);
                            _this.position = i;
                        }
                    }
                    else {
                        if (_this.OPTIONDATA[i]) {
                            _this.OPTIONDATANEW.push(_this.OPTIONDATA[i]);
                            _this.position = i;
                        }
                    }
                }
            }
            infiniteScroll.complete();
            console.log("this.OPTIONDATANEW", _this.OPTIONDATANEW);
            console.log('Async operation has ended');
        }, 500);
    };
    OptionsearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-optionsearch',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\optionsearch\optionsearch.html"*/'<!--\n\n  Generated template for the OptionsearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Search Symbol</ion-title>\n\n    </ion-navbar>\n\n    <ion-searchbar placeholder="Search Symbol" (ionInput)="initializeItems3($event)" style="border-radius: 50px;" no-margin no-padding #search></ion-searchbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div >\n\n        <ion-list *ngFor="let j of OPTIONDATANEW">\n\n            <ion-item no-lines no-border (click)="selectdata(j)">\n\n                <div item-start>\n\n                    <h3 style="font-weight: bold;">{{j.SYMBOL}}</h3>\n\n                    <!--<p style="color: #999999;font-size: 12px;">{{j.COMPANY +" "+ j.FUT_OPT_DATE_MONTH +" "+ j.STRIKE + " "+ j.DISPLAY_OPTION_TYPE}}</p>-->\n\n                </div>\n\n            </ion-item>\n\n            <hr no-margin no-padding>\n\n        </ion-list>\n\n\n\n        <ion-infinite-scroll (ionInfinite)="doInfinite($event,\'option\')">\n\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n        </ion-infinite-scroll>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\optionsearch\optionsearch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], OptionsearchPage);
    return OptionsearchPage;
}());

//# sourceMappingURL=optionsearch.js.map

/***/ })

});
//# sourceMappingURL=24.js.map