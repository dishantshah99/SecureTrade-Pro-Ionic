webpackJsonp([23],{

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionselectPageModule", function() { return OptionselectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__optionselect__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OptionselectPageModule = /** @class */ (function () {
    function OptionselectPageModule() {
    }
    OptionselectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__optionselect__["a" /* OptionselectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__optionselect__["a" /* OptionselectPage */]),
            ],
        })
    ], OptionselectPageModule);
    return OptionselectPageModule;
}());

//# sourceMappingURL=optionselect.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionselectPage; });
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
 * Generated class for the OptionselectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OptionselectPage = /** @class */ (function () {
    function OptionselectPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.CALL = 'CALL';
        this.OPTIONSELECTED = [];
        console.log("OPTION data", this.api.WATCHLISTDATA);
        this.OPTIONSELECTED = this.api.WATCHLISTDATA.SYMBOL.OPTION;
        this.getselecteddata();
    }
    OptionselectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OptionselectPage');
    };
    OptionselectPage.prototype.getselecteddata = function () {
        var _this = this;
        this.api.Startloader();
        this.api.oprionselecteddata(this.api.OPTIONSELECTEDDATA.SYMBOL, this.api.OPTIONSELECTEDDATA.SYMBOL_TYPE)
            .then(function (data) {
            console.log("oprionselecteddata data", data);
            _this.data = data;
            _this.api.Stoploader();
            if (_this.data.status == 200) {
                _this.CALLDATA = _this.data.symbol_data.CALL;
                _this.CALLDATANEW = _this.data.symbol_data.CALL;
                _this.PUTDATA = _this.data.symbol_data.PUT;
                _this.PUTDATANEW = _this.data.symbol_data.PUT;
            }
            else {
                _this.api.ErrorApi(_this.data.status, _this.data.message);
            }
        }).catch();
    };
    OptionselectPage.prototype.changedata = function (SYMBOL, TOKEN, TYPE, STATUS) {
        console.log("selected SYMBOL", SYMBOL);
        console.log("selected STATUS", STATUS);
        console.log("selected TYPE", TYPE);
        console.log("selected TOKEN", TOKEN);
        if (STATUS == true) {
            for (var i = 0; i < this.CALLDATA.length; i++) {
                // console.log("this.CASHDATA[i].SYMBOL", this.CASHDATA[i].SYMBOL + " = "+SYMBOL);
                if (this.CALLDATA[i].TOKEN == TOKEN) {
                    this.CALLDATA[i].IS_SELECTED = true;
                    var data = {
                        "SYMBOL": this.CALLDATA[i].SYMBOL,
                        "FUT_OPT_DATE_MONTH": this.CALLDATA[i].FUT_OPT_DATE_MONTH,
                        "TOKEN": this.CALLDATA[i].TOKEN,
                        "STRIKE": this.CALLDATA[i].STRIKE,
                        "OPTION_TYPE": this.CALLDATA[i].OPTION_TYPE
                    };
                    this.OPTIONSELECTED.push(data);
                }
            }
            for (var i = 0; i < this.PUTDATA.length; i++) {
                if (this.PUTDATA[i].TOKEN == TOKEN) {
                    this.PUTDATA[i].IS_SELECTED = true;
                    var data = {
                        "SYMBOL": this.PUTDATA[i].SYMBOL,
                        "FUT_OPT_DATE_MONTH": this.PUTDATA[i].FUT_OPT_DATE_MONTH,
                        "TOKEN": this.PUTDATA[i].TOKEN,
                        "STRIKE": this.PUTDATA[i].STRIKE,
                        "OPTION_TYPE": this.PUTDATA[i].OPTION_TYPE
                    };
                    this.OPTIONSELECTED.push(data);
                }
            }
        }
        else if (STATUS == false) {
            for (var i = 0; i < this.CALLDATA.length; i++) {
                // console.log("this.CASHDATA[i].SYMBOL", this.CASHDATA[i].SYMBOL + " = "+SYMBOL);
                if (this.CALLDATA[i].TOKEN == TOKEN) {
                    this.CALLDATA[i].IS_SELECTED = false;
                    for (var j = 0; j < this.OPTIONSELECTED.length; j++) {
                        if (this.OPTIONSELECTED[j].TOKEN == this.CALLDATA[i].TOKEN) {
                            this.OPTIONSELECTED.splice(j, 1);
                        }
                    }
                }
                if (this.PUTDATA[i].TOKEN == TOKEN) {
                    this.PUTDATA[i].IS_SELECTED = false;
                    for (var j = 0; j < this.OPTIONSELECTED.length; j++) {
                        if (this.OPTIONSELECTED[j].TOKEN == this.PUTDATA[i].TOKEN) {
                            this.OPTIONSELECTED.splice(j, 1);
                        }
                    }
                }
            }
        }
        console.log("OPTIONSELECTED data", this.OPTIONSELECTED);
    };
    OptionselectPage.prototype.watchlistupdateapi = function () {
        var _this = this;
        this.api.Startloader();
        this.api.watchlistupdate("1", this.api.WATCHLISTNAME, [], [], this.api.WATCHLISTID, this.OPTIONSELECTED, [])
            .then(function (data) {
            console.log("watchlistupdateapi data", data);
            _this.data = data;
            _this.api.Stoploader();
            if (_this.data.status == 200) {
                _this.api.presentToast(_this.data.message);
                _this.navCtrl.popToRoot();
            }
            else {
                _this.api.ErrorApi(_this.data.status, _this.data.message);
            }
        }).catch();
    };
    OptionselectPage.prototype.initializeItems1 = function (ev) {
        var val;
        console.log(ev);
        if (ev.data != null) {
            val = ev.target.value.trim();
        }
        else {
            val = "";
            this.CALLDATANEW = this.CALLDATA;
        }
        if (val && val.trim() !== '') {
            this.CALLDATANEW = this.CALLDATA.filter(function (item) {
                return (item.STRIKE.toLowerCase().indexOf(val.toLowerCase()) == 0);
            });
        }
    };
    OptionselectPage.prototype.initializeItems2 = function (ev) {
        var val;
        console.log(ev);
        if (ev.data != null) {
            val = ev.target.value.trim();
        }
        else {
            val = "";
            this.PUTDATANEW = this.PUTDATA;
        }
        if (val && val.trim() !== '') {
            this.PUTDATANEW = this.PUTDATA.filter(function (item) {
                return (item.STRIKE.toLowerCase().indexOf(val.toLowerCase()) == 0);
            });
        }
    };
    OptionselectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-optionselect',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\optionselect\optionselect.html"*/'<!--\n\n  Generated template for the OptionselectPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Search Symbol</ion-title>\n\n    </ion-navbar>\n\n\n\n    <ion-toolbar no-border-top no-padding style=" min-height: 30px !important;height: 30px;padding-bottom: 0 !important;">\n\n        <ion-segment [(ngModel)]="CALL">\n\n            <ion-segment-button value="CALL">\n\n                CALL\n\n            </ion-segment-button>\n\n            <ion-segment-button value="PUT">\n\n                PUT\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n    <ion-navbar [ngSwitch]="CALL">\n\n        <ion-searchbar *ngSwitchCase="\'CALL\'" placeholder="Search Symbol" (ionInput)="initializeItems1($event)" style="border-radius: 50px;" no-margin no-padding #search></ion-searchbar>\n\n        <ion-searchbar *ngSwitchCase="\'PUT\'" placeholder="Search Symbol" (ionInput)="initializeItems2($event)" style="border-radius: 50px;" no-margin no-padding #search></ion-searchbar>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div [ngSwitch]="CALL" style="height: 100%;">\n\n        <div *ngSwitchCase="\'CALL\'">\n\n            <ion-list *ngFor="let i of CALLDATANEW" no-margin>\n\n                <ion-item no-lines no-border>\n\n                    <div item-start>\n\n                        <h3 style="font-weight: bold;">{{i.SYMBOL}}</h3>\n\n                        <p style="color: #999999;font-size: 12px;">{{i.COMPANY +" "+ i.FUT_OPT_DATE_MONTH +" "+ i.STRIKE + " "+ i.DISPLAY_OPTION_TYPE}}</p>\n\n                    </div>\n\n                    <ion-checkbox [checked]="i.IS_SELECTED" (click)="changedata(i.SYMBOL,i.TOKEN,i.SYMBOL_TYPE,i.IS_SELECTED)" [(ngModel)]="i.IS_SELECTED" item-end style="width: fit-content"></ion-checkbox>\n\n                </ion-item>\n\n                <hr no-margin no-padding>\n\n            </ion-list>\n\n\n\n            <ion-infinite-scroll (ionInfinite)="doInfinite($event,\'cash\')">\n\n                <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n            </ion-infinite-scroll>\n\n        </div>\n\n        <div *ngSwitchCase="\'PUT\'">\n\n            <ion-list *ngFor="let i of PUTDATANEW" no-margin>\n\n                <ion-item no-lines no-border>\n\n                    <div item-start>\n\n                        <h3 style="font-weight: bold;">{{i.SYMBOL}}</h3>\n\n                        <p style="color: #999999;font-size: 12px;">{{i.COMPANY +" "+ i.FUT_OPT_DATE_MONTH +" "+ i.STRIKE + " "+ i.DISPLAY_OPTION_TYPE}}</p>\n\n                    </div>\n\n                    <ion-checkbox [checked]="i.IS_SELECTED" (click)="changedata(i.SYMBOL,i.TOKEN,i.SYMBOL_TYPE,i.IS_SELECTED)" [(ngModel)]="i.IS_SELECTED" item-end style="width: fit-content"></ion-checkbox>\n\n                </ion-item>\n\n                <hr no-margin no-padding>\n\n            </ion-list>\n\n\n\n            <ion-infinite-scroll (ionInfinite)="doInfinite($event,\'cash\')">\n\n                <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n            </ion-infinite-scroll>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n<ion-footer>\n\n    <button ion-button *ngIf="type != 0" full (click)="watchlistupdateapi()"> Save</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\optionselect\optionselect.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], OptionselectPage);
    return OptionselectPage;
}());

//# sourceMappingURL=optionselect.js.map

/***/ })

});
//# sourceMappingURL=23.js.map