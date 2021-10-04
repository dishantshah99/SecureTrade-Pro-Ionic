webpackJsonp([35],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdlModel2PageModule", function() { return DdlModel2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ddl_model2__ = __webpack_require__(499);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DdlModel2PageModule = /** @class */ (function () {
    function DdlModel2PageModule() {
    }
    DdlModel2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ddl_model2__["a" /* DdlModel2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ddl_model2__["a" /* DdlModel2Page */]),
            ],
        })
    ], DdlModel2PageModule);
    return DdlModel2PageModule;
}());

//# sourceMappingURL=ddl-model2.module.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DdlModel2Page; });
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
 * Generated class for the DdlModel2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DdlModel2Page = /** @class */ (function () {
    function DdlModel2Page(view, navParams, globalApi, loadingCtrl, device) {
        this.view = view;
        this.navParams = navParams;
        this.globalApi = globalApi;
        this.loadingCtrl = loadingCtrl;
        this.device = device;
        this.displayIcon = false;
        // console.log("charttype", view.data.CHART_TYPE);
        this.login_details = JSON.parse(localStorage.getItem("login_data"));
        console.log("logDetail", this.login_details);
        // this.loading = this.loadingCtrl.create({content: "please wait..."});
        // this.loading.present();
    }
    DdlModel2Page.prototype.ionViewDidEnter = function () {
        this.initializeItems2();
    };
    // ionViewWillEnter(){
    //     this.initializeItems2();
    // }
    DdlModel2Page.prototype.initializeItems2 = function () {
        var _this = this;
        if (localStorage.getItem("NSECASH") != "" || localStorage.getItem("NSEFO") != "" || localStorage.getItem("MCX") != "") {
            // this.loading.dismiss();
            console.log("Enter Local Part");
            if (this.view.data.CHART_TYPE == 1) {
                this.itemsInitial = JSON.parse(localStorage.getItem("NSECASH"));
                // this.items = JSON.parse(localStorage.getItem("NSECASH"));
                // this.itemsInitial = this.apiData.data[0].NSECASH;
                // this.items = this.apiData.data[0].NSECASH;
                this.title = "NSC Cash";
                console.log("nsecashlist", this.items);
            }
            else if (this.view.data.CHART_TYPE == 2) {
                this.itemsInitial = JSON.parse(localStorage.getItem("NSEFO"));
                // this.items = JSON.parse(localStorage.getItem("NSEFO"));
                // this.itemsInitial = this.apiData.data[0].NSEFO;
                // this.items = this.apiData.data[0].NSEFO;
                this.title = "NSC FO";
                console.log("nsefolist", this.items);
            }
            else if (this.view.data.CHART_TYPE == 3) {
                this.itemsInitial = JSON.parse(localStorage.getItem("MCX"));
                // this.items = JSON.parse(localStorage.getItem("MCX"));
                // this.itemsInitial = this.apiData.data[0].MCX;
                // this.items = this.apiData.data[0].MCX;
                this.title = "MCX";
                console.log("MCX", this.items);
            }
        }
        else {
            // this.loading = this.loadingCtrl.create({content: "please wait..."});
            // this.loading.present();
            this.globalApi.verifyVersion(this.device.uuid, this.login_details.user_data.ID)
                .then(function (data) {
                // this.loading.dismiss();
                if (_this.view.data.CHART_TYPE == 1) {
                    _this.apiData = data;
                    _this.itemsInitial = _this.apiData.data[0].NSECASH;
                    // this.items = this.apiData.data[0].NSECASH;
                    _this.title = "NSC Cash";
                    // console.log("nsecashleodist", this.items);
                }
                else if (_this.view.data.CHART_TYPE == 2) {
                    _this.apiData = data;
                    _this.itemsInitial = _this.apiData.data[0].NSEFO;
                    // this.items = this.apiData.data[0].NSEFO;
                    _this.title = "FO Cash";
                    // console.log("nsefoeodlist", this.items);
                }
                else if (_this.view.data.CHART_TYPE == 3) {
                    _this.apiData = data;
                    _this.itemsInitial = _this.apiData.data[0].MCX;
                    // this.items = this.apiData.data[0].MCX;
                    _this.title = "MCX Cash";
                    // console.log("mcxeodlist", this.items);
                }
            });
        }
    };
    DdlModel2Page.prototype.getItemseod = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        this.items = this.itemsInitial;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.itemsInitial.filter(function (item) {
                return (item.EODIMAGENAME.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    DdlModel2Page.prototype.selectedSymboleod = function (itemSelected) {
        // console.log(itemSelected);
        this.closeModaleod(itemSelected);
    };
    DdlModel2Page.prototype.closeModaleod = function (dataFromModal) {
        // console.log(dataFromModal);
        this.view.dismiss(dataFromModal);
    };
    DdlModel2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ddl-model2',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\ddl-model2\ddl-model2.html"*/'<!--\n\n  Generated template for the DdlModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title color="primary">{{title}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="closeModaleod(\'\')">Close</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content scroll=false>\n\n  <ion-grid>\n\n    <!-- Row 2 Scrollable list -->\n\n    <ion-searchbar class="searchbar-ios-primary" (ionInput)="getItemseod($event)"></ion-searchbar>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-scroll style="width:100%;height:100%" scrollY="true">\n\n          <ion-list scroll="true" radio-group>\n\n            <ion-item *ngFor="let item of items ">\n\n              <ion-label color="dark">{{ item.EODIMAGENAME }}</ion-label>\n\n              <ion-radio value="{{ item.EODIMAGENAME }}" (ionSelect)="selectedSymboleod(item)"></ion-radio>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-scroll>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<!--<ion-content>-->\n\n\n\n<!--&lt;!&ndash;<ion-list>-->\n\n<!--<button ion-item *ngFor="let item of items" (click)="selectedSymbol(item)">-->\n\n<!--{{ item.LIVENAME }} &lt;!&ndash;<ion-icon name="checkmark" style="float: right;" *ngIf="!displayIcon"></ion-icon>&ndash;&gt;-->\n\n<!--</button>-->\n\n<!--</ion-list>&ndash;&gt;-->\n\n\n\n<!--<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>-->\n\n<!--<ion-list radio-group>-->\n\n\n\n<!--<ion-item *ngFor="let item of items">-->\n\n<!--<ion-label color="dark">{{ item.LIVENAME }}</ion-label>-->\n\n<!--<ion-radio value="{{ item.LIVENAME }}" (ionSelect)="selectedSymbol(item)"></ion-radio>-->\n\n<!--</ion-item>-->\n\n<!--</ion-list>-->\n\n\n\n\n\n<!--</ion-content>-->\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\ddl-model2\ddl-model2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */]])
    ], DdlModel2Page);
    return DdlModel2Page;
}());

//# sourceMappingURL=ddl-model2.js.map

/***/ })

});
//# sourceMappingURL=35.js.map