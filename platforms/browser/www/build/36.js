webpackJsonp([36],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdlModalPageModule", function() { return DdlModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ddl_modal__ = __webpack_require__(498);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DdlModalPageModule = /** @class */ (function () {
    function DdlModalPageModule() {
    }
    DdlModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ddl_modal__["a" /* DdlModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ddl_modal__["a" /* DdlModalPage */]),
            ],
        })
    ], DdlModalPageModule);
    return DdlModalPageModule;
}());

//# sourceMappingURL=ddl-modal.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DdlModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(68);
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
 * Generated class for the DdlModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DdlModalPage = /** @class */ (function () {
    function DdlModalPage(view, navParams, globalApi, loadingCtrl, device, platform) {
        this.view = view;
        this.navParams = navParams;
        this.globalApi = globalApi;
        this.loadingCtrl = loadingCtrl;
        this.device = device;
        this.platform = platform;
        this.displayIcon = false;
        this.show = false;
        this.showingicon = true;
        this.showingspinner = false;
        this.login_details = JSON.parse(localStorage.getItem("login_data"));
        console.log("logDetail", this.login_details);
        console.log("data", this.view.data.CHART_TYPE);
        this.title = this.view.data.CHART_TYPE.title;
        // this.loading = this.loadingCtrl.create({content: "please wait..."});
        // this.loading.present();
    }
    DdlModalPage.prototype.clicksync = function () {
        var _this = this;
        console.log("Enter if in click");
        this.showingicon = false;
        this.showingspinner = true;
        this.getsymboldata();
        setTimeout(function (x) {
            // this.showingicon = true
            _this.showingicon = true;
            _this.showingspinner = false;
        }, 5000);
    };
    DdlModalPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.initializeItems();
        this.platform.registerBackButtonAction(function (data) {
            _this.view.dismiss();
        });
    };
    // ionViewWillEnter(){
    //     this.initializeItems();
    // }
    DdlModalPage.prototype.initializeItems = function () {
        var _this = this;
        if (this.view.data.CHART_TYPE.type == 3) {
            if (localStorage.getItem("ALGO_CHART") != undefined) {
                this.ALGO_CHART = JSON.parse(localStorage.getItem("ALGO_CHART"));
                console.log('Enter Algo Chart', this.ALGO_CHART);
                if (this.view.data.CHART_TYPE.number == 1) {
                    this.itemsInitial = this.ALGO_CHART.ALGO_CHART_NSECASH;
                    this.items = this.ALGO_CHART.ALGO_CHART_NSECASH;
                    // this.itemsInitial = this.apiData.data[0].NSECASH;
                    // this.items = this.apiData.data[0].NSECASH;
                    console.log("ALGO_CHART_NSECASH", this.itemsInitial);
                }
                else if (this.view.data.CHART_TYPE.number == 2) {
                    this.itemsInitial = this.ALGO_CHART.ALGO_CHART_NSEFO;
                    this.items = this.ALGO_CHART.ALGO_CHART_NSEFO;
                    // this.itemsInitial = this.apiData.data[0].NSECASH;
                    // this.items = this.apiData.data[0].NSECASH;
                    console.log("ALGO_CHART_NSEFO", this.itemsInitial);
                }
                else if (this.view.data.CHART_TYPE.number == 3) {
                    this.itemsInitial = this.ALGO_CHART.ALGO_CHART_MCX;
                    this.items = this.ALGO_CHART.ALGO_CHART_MCX;
                    // this.itemsInitial = this.apiData.data[0].NSECASH;
                    // this.items = this.apiData.data[0].NSECASH;
                    console.log("ALGO_CHART_MCX", this.itemsInitial);
                }
            }
        }
        else {
            var MYSEARCHARRAY = JSON.parse(localStorage.getItem('SEARCHDATA'));
            console.log('MYSEARCHARRAY', MYSEARCHARRAY);
            if (MYSEARCHARRAY != null) {
                this.SEARCHITEM = MYSEARCHARRAY;
                if (this.view.data.CHART_TYPE.selected == "LIVE") {
                    if (this.view.data.CHART_TYPE.number == 1) {
                        if (MYSEARCHARRAY.NSECASH.length > 0) {
                            this.ITEM = MYSEARCHARRAY.NSECASH;
                        }
                    }
                    if (this.view.data.CHART_TYPE.number == 2) {
                        if (MYSEARCHARRAY.NSEFUTURE.length > 0) {
                            this.ITEM = MYSEARCHARRAY.NSEFUTURE;
                        }
                    }
                    if (this.view.data.CHART_TYPE.number == 3) {
                        if (MYSEARCHARRAY.MCX.length > 0) {
                            this.ITEM = MYSEARCHARRAY.MCX;
                        }
                    }
                }
                else {
                    if (this.view.data.CHART_TYPE.number == 1) {
                        if (MYSEARCHARRAY.NSECASHEOD.length > 0) {
                            this.ITEM = MYSEARCHARRAY.NSECASHEOD;
                        }
                    }
                    if (this.view.data.CHART_TYPE.number == 2) {
                        if (MYSEARCHARRAY.NSEFUTUREEOD.length > 0) {
                            this.ITEM = MYSEARCHARRAY.NSEFUTUREEOD;
                        }
                    }
                    if (this.view.data.CHART_TYPE.number == 3) {
                        if (MYSEARCHARRAY.MCXEOD.length > 0) {
                            this.ITEM = MYSEARCHARRAY.MCXEOD;
                        }
                    }
                }
            }
            if (localStorage.getItem("NSECASH") != undefined || localStorage.getItem("NSEFO") != undefined || localStorage.getItem("MCX") != undefined) {
                // this.loading.dismiss();
                console.log("Enter Local Part");
                if (this.view.data.CHART_TYPE.number == 1) {
                    this.itemsInitial = JSON.parse(localStorage.getItem("NSECASH"));
                    this.items = JSON.parse(localStorage.getItem("NSECASH"));
                    // this.itemsInitial = this.apiData.data[0].NSECASH;
                    // this.items = this.apiData.data[0].NSECASH;
                    console.log("nsecashlist", this.itemsInitial);
                }
                else if (this.view.data.CHART_TYPE.number == 2) {
                    this.itemsInitial = JSON.parse(localStorage.getItem("NSEFO"));
                    this.items = JSON.parse(localStorage.getItem("NSEFO"));
                    // this.itemsInitial = this.apiData.data[0].NSEFO;
                    // this.items = this.apiData.data[0].NSEFO;
                    console.log("nsefolist", this.itemsInitial);
                }
                else if (this.view.data.CHART_TYPE.number == 3) {
                    this.itemsInitial = JSON.parse(localStorage.getItem("MCX"));
                    this.items = JSON.parse(localStorage.getItem("MCX"));
                    // this.itemsInitial = this.apiData.data[0].MCX;
                    // this.items = this.apiData.data[0].MCX;
                    console.log("MCX", this.itemsInitial);
                }
            }
            else {
                this.globalApi.splashscreenapi()
                    .then(function (data) {
                    // this.loading.dismiss();
                    if (_this.view.data.CHART_TYPE.number == 1) {
                        _this.apiData = data;
                        _this.itemsInitial = _this.apiData.symbol.NSECASH;
                        _this.items = _this.apiData.symbol.NSECASH;
                        // console.log("nsecashlist", this.items);
                    }
                    else if (_this.view.data.CHART_TYPE.number == 2) {
                        _this.apiData = data;
                        _this.itemsInitial = _this.apiData.symbol.NSEFO;
                        _this.items = _this.apiData.symbol.NSEFO;
                        // console.log("nsefolist", this.items);
                    }
                    else if (_this.view.data.CHART_TYPE.number == 3) {
                        _this.apiData = data;
                        _this.itemsInitial = _this.apiData.symbol.MCX;
                        _this.items = _this.apiData.symbol.MCX;
                    }
                });
            }
        }
    };
    DdlModalPage.prototype.getItems = function (ev) {
        this.show = false;
        var val;
        console.log(ev);
        if (ev.data != null) {
            val = ev.target.value.trim();
        }
        else {
            val = "";
            this.items = this.itemsInitial;
        }
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.itemsInitial.filter(function (item) {
                return (item.COMPANY_NAME.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    DdlModalPage.prototype.selectedSymbol = function (itemSelected, type) {
        // console.log(itemSelected);
        this.closeModal(itemSelected, type);
    };
    DdlModalPage.prototype.closeModal = function (dataFromModal, type) {
        // console.log(dataFromModal);
        var data = {
            SELECTED: dataFromModal,
            TYPE: type
        };
        var NSECASH = [];
        var NSEFUTURE = [];
        var MCX = [];
        var NSECASHEOD = [];
        var NSEFUTUREEOD = [];
        var MCXEOD = [];
        var MYSEARCHARRAY = JSON.parse(localStorage.getItem('SEARCHDATA'));
        if (MYSEARCHARRAY != null) {
            NSECASH = MYSEARCHARRAY.NSECASH;
            NSEFUTURE = MYSEARCHARRAY.NSEFUTURE;
            MCX = MYSEARCHARRAY.MCX;
            NSECASHEOD = MYSEARCHARRAY.NSECASHEOD;
            NSEFUTUREEOD = MYSEARCHARRAY.NSEFUTUREEOD;
            MCXEOD = MYSEARCHARRAY.MCXEOD;
        }
        if (type.CHART_TYPE.selected == "LIVE") {
            if (type.CHART_TYPE.number == 1) {
                if (MYSEARCHARRAY != null) {
                    NSECASH = MYSEARCHARRAY.NSECASH;
                    if (NSECASH.length > 4) {
                        NSECASH.splice(0, 1);
                    }
                }
                // let addornot = NSECASH.indexOf(dataFromModal.COMPANY_NAME,NSECASH.length);
                // console.log("search add / not", addornot);
                NSECASH.push(dataFromModal);
            }
            if (type.CHART_TYPE.number == 2) {
                if (MYSEARCHARRAY != null) {
                    NSEFUTURE = MYSEARCHARRAY.NSEFUTURE;
                    if (NSEFUTURE.length > 4) {
                        NSEFUTURE.splice(0, 1);
                    }
                }
                NSEFUTURE.push(dataFromModal);
            }
            if (type.CHART_TYPE.number == 3) {
                if (MYSEARCHARRAY != null) {
                    MCX = MYSEARCHARRAY.MCX;
                    if (MCX.length > 4) {
                        MCX.splice(0, 1);
                    }
                }
                MCX.push(dataFromModal);
            }
        }
        else {
            if (type.CHART_TYPE.number == 1) {
                if (MYSEARCHARRAY != null) {
                    NSECASHEOD = MYSEARCHARRAY.NSECASHEOD;
                    if (NSECASHEOD.length > 4) {
                        NSECASHEOD.splice(0, 1);
                    }
                }
                NSECASHEOD.push(dataFromModal);
            }
            if (type.CHART_TYPE.number == 2) {
                if (MYSEARCHARRAY != null) {
                    NSEFUTUREEOD = MYSEARCHARRAY.NSEFUTUREEOD;
                    if (NSEFUTUREEOD.length > 4) {
                        NSEFUTUREEOD.splice(0, 1);
                    }
                }
                NSEFUTUREEOD.push(dataFromModal);
            }
            if (type.CHART_TYPE.number == 3) {
                if (MYSEARCHARRAY != null) {
                    MCXEOD = MYSEARCHARRAY.MCXEOD;
                    if (MCXEOD.length > 4) {
                        MCXEOD.splice(0, 1);
                    }
                }
                MCXEOD.push(dataFromModal);
            }
        }
        var array = {
            NSECASH: NSECASH,
            NSEFUTURE: NSEFUTURE,
            MCX: MCX,
            NSECASHEOD: NSECASHEOD,
            NSEFUTUREEOD: NSEFUTUREEOD,
            MCXEOD: MCXEOD
        };
        localStorage.setItem('SEARCHDATA', JSON.stringify(array));
        console.log("SEARCH DATA", JSON.parse(localStorage.getItem('SEARCHDATA')));
        this.view.dismiss(data);
    };
    DdlModalPage.prototype.showhistory = function () {
        this.show = true;
    };
    DdlModalPage.prototype.closemodel2 = function () {
        this.view.dismiss();
    };
    DdlModalPage.prototype.getsymboldata = function () {
        var _this = this;
        this.globalApi.splashscreenapi().then(function (data) {
            // this.users = data;
            _this.plandata = data;
            console.log("planDATA", _this.plandata);
            if (_this.plandata.status == '200') {
                localStorage.removeItem("NSECASH");
                localStorage.removeItem("NSEFO");
                localStorage.removeItem("MCX");
                localStorage.removeItem("PURCHASE");
                localStorage.removeItem("ALGO_CHART");
                localStorage.removeItem("URLS");
                localStorage.setItem("NSECASH", JSON.stringify(_this.plandata.symbol.NSECASH));
                localStorage.setItem("NSEFO", JSON.stringify(_this.plandata.symbol.NSEFO));
                localStorage.setItem("MCX", JSON.stringify(_this.plandata.symbol.MCX));
                localStorage.setItem("ALGO_CHART", JSON.stringify(_this.plandata.algo_chart));
                localStorage.setItem("URLS", JSON.stringify(_this.plandata.urls));
                var datapass = {
                    ALGO_LIVECHART_PURCHSE: _this.plandata.ALGO_LIVECHART_PURCHSE,
                    AUTO_ADVICERY_PURCHSE: _this.plandata.AUTO_ADVICERY_PURCHSE,
                    LIVE_CHART_PURCHSE: _this.plandata.LIVE_CHART_PURCHSE,
                    LIVE_RATE_PURCHSE: _this.plandata.LIVE_RATE_PURCHSE,
                    MESSAGE_BOARD_PURCHSE: _this.plandata.MESSAGE_BOARD_PURCHSE
                };
                localStorage.setItem("PURCHASE", JSON.stringify(datapass));
                _this.globalApi.ALGO_LIVECHART_PURCHSE = _this.plandata.ALGO_LIVECHART_PURCHSE;
                _this.globalApi.AUTO_ADVICERY_PURCHSE = _this.plandata.AUTO_ADVICERY_PURCHSE;
                _this.globalApi.LIVE_CHART_PURCHSE = _this.plandata.LIVE_CHART_PURCHSE;
                _this.globalApi.LIVE_RATE_PURCHSE = _this.plandata.LIVE_RATE_PURCHSE;
                _this.globalApi.MESSAGE_BOARD_PURCHSE = _this.plandata.MESSAGE_BOARD_PURCHSE;
                _this.initializeItems();
            }
            else {
                _this.globalApi.ErrorApi(_this.plandata.status, _this.plandata.message);
            }
        }).catch();
    };
    DdlModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ddl-modal',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\ddl-modal\ddl-modal.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title color="primary">{{title}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button (click)="closemodel2()">Close</button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content scroll=false>\n\n    <ion-grid>\n\n        <ion-searchbar class="searchbar-ios-primary" (ionInput)="getItems($event)" (ionFocus)="showhistory()"></ion-searchbar>\n\n\n\n        <div *ngIf="show && ITEM.length" style="position: absolute;z-index: 100;top: 0;width: 100%;margin-top: 18%;background-color: white">\n\n            <ion-label style="margin: 15px;font-size: 16px;font-weight: bold;">Recent Search</ion-label>\n\n            <ion-list *ngFor="let i of ITEM">\n\n                <ion-item no-lines no-border (tap)="selectedSymbol(i,this.view.data)">\n\n                    <div item-start>\n\n                        <h3>{{i.COMPANY_NAME}}</h3>\n\n                        <p>{{i.CATEGORY}}</p>\n\n                    </div>\n\n                </ion-item>\n\n            </ion-list>\n\n        </div>\n\n\n\n\n\n        <ion-list *ngFor="let i of items">\n\n            <ion-item no-lines no-border (tap)="selectedSymbol(i,this.view.data)">\n\n                <div item-start>\n\n                    <h3>{{i.COMPANY_NAME}}</h3>\n\n                    <p>{{i.CATEGORY}}</p>\n\n                </div>\n\n                <ion-checkbox *ngIf="displayIcon == true" item-end [checked]="i.IS_SELECTED == true" style="width: fit-content"></ion-checkbox>\n\n            </ion-item>\n\n            <hr no-margin no-padding>\n\n        </ion-list>\n\n\n\n    </ion-grid>\n\n\n\n    <ion-fab bottom right edge>\n\n        <button (click)="clicksync()" ion-fab mini>\n\n            <ion-spinner icon="bubbles" color="dark" *ngIf="showingspinner"></ion-spinner>\n\n            <!--<ion-icon ios="ios-sync" md="md-sync" *ngIf="showingicon" style="font-size: 30px;"></ion-icon>-->\n\n            <img src="assets/imgs/sync.png" style="height: 30px; width: 30px;" *ngIf="showingicon">\n\n        </button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\ddl-modal\ddl-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */]])
    ], DdlModalPage);
    return DdlModalPage;
}());

//# sourceMappingURL=ddl-modal.js.map

/***/ })

});
//# sourceMappingURL=36.js.map