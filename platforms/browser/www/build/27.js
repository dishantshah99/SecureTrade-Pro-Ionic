webpackJsonp([27],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveChartsPageModule", function() { return LiveChartsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_charts__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LiveChartsPageModule = /** @class */ (function () {
    function LiveChartsPageModule() {
    }
    LiveChartsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__live_charts__["a" /* LiveChartsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__live_charts__["a" /* LiveChartsPage */]),
            ],
        })
    ], LiveChartsPageModule);
    return LiveChartsPageModule;
}());

//# sourceMappingURL=live-charts.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveChartsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {AdvisoryServicesPage} from "../advisory-services/advisory-services";


var LiveChartsPage = /** @class */ (function () {
    function LiveChartsPage(navCtrl, navParams, globalApi, loadingCtrl, device, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalApi = globalApi;
        this.loadingCtrl = loadingCtrl;
        this.device = device;
        this.toastCtrl = toastCtrl;
        this.type = 3;
        this.HIDELIVE = false;
        this.login_details = JSON.parse(localStorage.getItem("login_details"));
        // console.log("data", navParams.data);
        if (this.navParams.data == 0) {
            this.title = "Message Board";
            this.type = 0;
            if (globalApi.MESSAGE_BOARD_PURCHSE == true) {
                this.HIDELIVE = true;
            }
            else {
                this.HIDELIVE = false;
            }
        }
        else if (this.navParams.data == 2) {
            this.title = "Auto Advisory";
            this.type = 2;
            if (globalApi.AUTO_ADVICERY_PURCHSE == true) {
                this.HIDELIVE = true;
            }
            else {
                this.HIDELIVE = false;
            }
        }
        else if (this.navParams.data == 3) {
            this.title = "Algo Live Chart";
            this.type = 3;
            if (globalApi.ALGO_LIVECHART_PURCHSE == true) {
                this.HIDELIVE = true;
            }
            else {
                this.HIDELIVE = false;
            }
        }
        else {
            this.title = "Live Chart";
            this.type = 1;
            if (globalApi.LIVE_CHART_PURCHSE == true) {
                this.HIDELIVE = true;
            }
            else {
                this.HIDELIVE = false;
            }
        }
        // Commented by Dishant. Date: 23-08-2018 11:52:14 Comment: add date condi.
        // localStorage.setItem('Todaydate', "");
        /* this.Localdate1 = localStorage.getItem("Todaydate1");
         this.Localdate2 = localStorage.getItem("Todaydate2");
         this.Localdate3 = localStorage.getItem("Todaydate3");
         this.currentDate = new Date().toLocaleDateString();
         console.log("currentDate",this.currentDate);*/
    }
    LiveChartsPage.prototype.chartSelected = function (number, item, title) {
        // this.Localdate1 = localStorage.getItem("Todaydate1");
        // this.Localdate2 = localStorage.getItem("Todaydate2");
        // this.Localdate3 = localStorage.getItem("Todaydate3");
        // this.currentDate = new Date().toLocaleDateString();
        // console.log("currentDate", this.currentDate);
        if (item == 'LIVE') {
            if (this.HIDELIVE == true) {
                this.navCtrl.push('ChartsPage', { number: number, selected: item, title: title, type: this.type });
            }
            else {
                this.navCtrl.push('SubscribeplanPage', '1');
            }
        }
        else if (item == 'EOD') {
            this.navCtrl.push('ChartsPage', { number: number, selected: item, title: title, type: this.type });
        }
    };
    LiveChartsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-live-charts',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\live-charts\live-charts.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title style="margin-top: 5%">{{title}}</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="outer-content">\n\n    <div *ngIf="type == 0">\n\n        <!--Message Board-->\n\n        <div>\n\n            <p style="padding: 5px;margin-left: 5px;font-weight: bold" class="nse-txt">MESSAGE BOARD LIVE<span><sup><ion-badge style="font-size: 8px;padding: 5px;margin: 5px;">Premium</ion-badge></sup></span></p>\n\n            <ion-card class="ion-cards" (click)="chartSelected(1,\'LIVE\',\'NSE CASH\')">\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g1.png" style="height: 50px; width: 50px" class="fa-icons" item-start>\n\n                    <!--<fa-icon color="primary" name="bar-chart" class="fa-icons" style="background-color: #0bca00" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">NSE CASH</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-card>\n\n\n\n            <ion-card class="ion-cards" (click)="chartSelected(2,\'LIVE\',\'F&O\')">\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g2.png" style="height: 50px; width: 50px" class="fa-icons" item-start>\n\n                    <!--<fa-icon color="primary" name="line-chart" class="fa-icons" style="background-color: #ca3757;" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">F&O</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-card>\n\n\n\n            <ion-card class="ion-cards" (click)="chartSelected(3,\'LIVE\',\'MCX\')">\n\n\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g3.png" class="fa-icons" style="height: 50px; width: 50px" item-start>\n\n                    <!--<fa-icon color="primary" name="signal" class="fa-icons" style="background-color: #ed3954" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">MCX</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n\n\n                </ion-item>\n\n            </ion-card>\n\n        </div>\n\n        <div>\n\n            <p style="padding: 5px;margin-left: 5px;font-weight: bold" class="nse-txt">MESSAGE BOARD EOD<span><sup><ion-badge style="font-size: 8px;padding: 5px;margin: 5px;background-color: green">Free</ion-badge></sup></span></p>\n\n            <ion-card class="ion-cards" (click)="chartSelected(1,\'EOD\',\'NSE CASH\')">\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g1.png" style="height: 50px; width: 50px" class="fa-icons" item-start>\n\n                    <!--<fa-icon color="primary" name="bar-chart" class="fa-icons" style="background-color: #0bca00" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">NSE CASH</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-card>\n\n\n\n            <ion-card class="ion-cards" (click)="chartSelected(2,\'EOD\',\'F&O\')">\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g2.png" style="height: 50px; width: 50px" class="fa-icons" item-start>\n\n                    <!--<fa-icon color="primary" name="line-chart" class="fa-icons" style="background-color: #ca3757;" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">F&O</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-card>\n\n\n\n            <ion-card class="ion-cards" (click)="chartSelected(3,\'EOD\',\'MCX\')">\n\n\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g3.png" class="fa-icons" style="height: 50px; width: 50px" item-start>\n\n                    <!--<fa-icon color="primary" name="signal" class="fa-icons" style="background-color: #ed3954" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">MCX</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n\n\n                </ion-item>\n\n            </ion-card>\n\n        </div>\n\n    </div>\n\n\n\n    <div *ngIf="type == 1">\n\n        <!--Live chart-->\n\n        <div>\n\n            <p style="padding: 5px;margin-left: 5px;font-weight: bold" class="nse-txt">\n\n                LIVE CHART <span><sup><ion-badge style="font-size: 8px;padding: 5px;margin: 5px;">Premium</ion-badge></sup></span>\n\n            </p>\n\n\n\n            <ion-card class="ion-cards" (click)="chartSelected(1,\'LIVE\',\'NSE CASH\')">\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g4.png" style="height: 50px; width: 50px" class="fa-icons" item-start>\n\n                    <!--<fa-icon color="primary" name="bar-chart" class="fa-icons" style="background-color: #0bca00" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">NSE CASH</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-card>\n\n\n\n            <ion-card class="ion-cards" (click)="chartSelected(2,\'LIVE\',\'F&O\')">\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g5.png" style="height: 50px; width: 50px" class="fa-icons" item-start>\n\n                    <!--<fa-icon color="primary" name="line-chart" class="fa-icons" style="background-color: #ca3757;" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">F&O</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-card>\n\n\n\n            <ion-card class="ion-cards" (click)="chartSelected(3,\'LIVE\',\'MCX\')">\n\n\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g6.png" class="fa-icons" style="height: 50px; width: 50px" item-start>\n\n                    <!--<fa-icon color="primary" name="signal" class="fa-icons" style="background-color: #ed3954" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">MCX</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n\n\n                </ion-item>\n\n            </ion-card>\n\n        </div>\n\n        <div>\n\n            <p style="padding: 5px;margin-left: 5px;font-weight: bold" class="nse-txt">\n\n                EOD CHART <span><sup><ion-badge style="font-size: 8px;padding: 5px;margin: 5px;background-color: green">Free</ion-badge></sup></span>\n\n            </p>\n\n            <ion-card class="ion-cards" (click)="chartSelected(1,\'EOD\',\'NSE CASH\')">\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g4.png" style="height: 50px; width: 50px" class="fa-icons" item-start>\n\n                    <!--<fa-icon color="primary" name="bar-chart" class="fa-icons" style="background-color: #0bca00" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">NSE CASH</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-card>\n\n\n\n            <ion-card class="ion-cards" (click)="chartSelected(2,\'EOD\',\'F&O\')">\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g5.png" style="height: 50px; width: 50px" class="fa-icons" item-start>\n\n                    <!--<fa-icon color="primary" name="line-chart" class="fa-icons" style="background-color: #ca3757;" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">F&O</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-card>\n\n\n\n            <ion-card class="ion-cards" (click)="chartSelected(3,\'EOD\',\'MCX\')">\n\n\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g6.png" class="fa-icons" style="height: 50px; width: 50px" item-start>\n\n                    <!--<fa-icon color="primary" name="signal" class="fa-icons" style="background-color: #ed3954" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">MCX</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n\n\n                </ion-item>\n\n            </ion-card>\n\n        </div>\n\n\n\n        <!--<div>\n\n            <p style="padding: 5px;margin-left: 5px;font-weight: bold" class="nse-txt">\n\n                LIVE CHART\n\n            </p>\n\n\n\n            <ion-row>\n\n                <ion-col col-4>\n\n                    <ion-card class="cardcss" style="background-color: #f4f4f4" (click)="chartSelected(1,\'LIVE\',\'NSE CASH\')">\n\n                        <img class="ion-cardimg" src="assets/imgs/g1.png">\n\n                        <ion-label class="ionlabel">NSE CASH</ion-label>\n\n                    </ion-card>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                    <ion-card class="cardcss" style="background-color: #f4f4f4" (click)="chartSelected(2,\'LIVE\',\'F&O\')">\n\n                        <img class="ion-cardimg" src="assets/imgs/g2.png">\n\n                        <ion-label class="ionlabel">F&O</ion-label>\n\n                    </ion-card>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                    <ion-card class="cardcss" style="background-color: #f4f4f4" (click)="chartSelected(3,\'LIVE\',\'MCX\')">\n\n                        <img class="ion-cardimg" src="assets/imgs/g3.png">\n\n                        <ion-label class="ionlabel">MCX</ion-label>\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n        </div>\n\n        <div>\n\n            <p style="padding: 5px;margin-left: 5px;font-weight: bold" class="nse-txt">\n\n                EOD CHART\n\n            </p>\n\n            <ion-row>\n\n                <ion-col col-4>\n\n                    <ion-card class="cardcss" style="background-color: #f4f4f4" (click)="chartSelected(1,\'EOD\',\'NSE CASH\')">\n\n                        <img class="ion-cardimg" src="assets/imgs/g1.png">\n\n                        <ion-label class="ionlabel">NSE CASH</ion-label>\n\n                    </ion-card>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                    <ion-card class="cardcss" style="background-color: #f4f4f4" (click)="chartSelected(2,\'EOD\',\'F&O\')">\n\n                        <img class="ion-cardimg" src="assets/imgs/g2.png">\n\n                        <ion-label class="ionlabel">F&O</ion-label>\n\n                    </ion-card>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                    <ion-card class="cardcss" style="background-color: #f4f4f4" (click)="chartSelected(3,\'EOD\',\'MCX\')">\n\n                        <img class="ion-cardimg" src="assets/imgs/g3.png">\n\n                        <ion-label class="ionlabel">MCX</ion-label>\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n        </div>-->\n\n    </div>\n\n\n\n    <div *ngIf="type == 2">\n\n        <!--Auto Advisory-->\n\n        <div>\n\n            <p style="padding: 5px;margin-left: 5px;font-weight: bold" class="nse-txt">\n\n                LIVE CHART <span><sup><ion-badge style="font-size: 8px;padding: 5px;margin: 5px;">Premium</ion-badge></sup></span>\n\n            </p>\n\n\n\n            <ion-card class="ion-cards" (click)="chartSelected(1,\'LIVE\',\'NSE CASH\')">\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g1.png" style="height: 50px; width: 50px" class="fa-icons" item-start>\n\n                    <!--<fa-icon color="primary" name="bar-chart" class="fa-icons" style="background-color: #0bca00" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">NSE CASH</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-card>\n\n\n\n            <ion-card class="ion-cards" (click)="chartSelected(2,\'LIVE\',\'F&O\')">\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g2.png" style="height: 50px; width: 50px" class="fa-icons" item-start>\n\n                    <!--<fa-icon color="primary" name="line-chart" class="fa-icons" style="background-color: #ca3757;" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">F&O</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-card>\n\n\n\n            <ion-card class="ion-cards" (click)="chartSelected(3,\'LIVE\',\'MCX\')">\n\n\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g3.png" class="fa-icons" style="height: 50px; width: 50px" item-start>\n\n                    <!--<fa-icon color="primary" name="signal" class="fa-icons" style="background-color: #ed3954" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">MCX</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n\n\n                </ion-item>\n\n            </ion-card>\n\n        </div>\n\n        <div>\n\n            <p style="padding: 5px;margin-left: 5px;font-weight: bold" class="nse-txt">\n\n                EOD CHART <span><sup><ion-badge style="font-size: 8px;padding: 5px;margin: 5px;background-color: green">Free</ion-badge></sup></span>\n\n            </p>\n\n            <ion-card class="ion-cards" (click)="chartSelected(1,\'EOD\',\'NSE CASH\')">\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g1.png" style="height: 50px; width: 50px" class="fa-icons" item-start>\n\n                    <!--<fa-icon color="primary" name="bar-chart" class="fa-icons" style="background-color: #0bca00" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">NSE CASH</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-card>\n\n\n\n            <ion-card class="ion-cards" (click)="chartSelected(2,\'EOD\',\'F&O\')">\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g2.png" style="height: 50px; width: 50px" class="fa-icons" item-start>\n\n                    <!--<fa-icon color="primary" name="line-chart" class="fa-icons" style="background-color: #ca3757;" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">F&O</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-card>\n\n\n\n            <ion-card class="ion-cards" (click)="chartSelected(3,\'EOD\',\'MCX\')">\n\n\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g3.png" class="fa-icons" style="height: 50px; width: 50px" item-start>\n\n                    <!--<fa-icon color="primary" name="signal" class="fa-icons" style="background-color: #ed3954" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">MCX</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n\n\n                </ion-item>\n\n            </ion-card>\n\n        </div>\n\n    </div>\n\n\n\n    <div *ngIf="type == 3">\n\n        <!--Algo chart-->\n\n        <div>\n\n            <p style="padding: 5px;margin-left: 5px;font-weight: bold" class="nse-txt">\n\n                ALGO LIVE CHART <span><sup><ion-badge style="font-size: 8px;padding: 5px;margin: 5px;">Premium</ion-badge></sup></span>\n\n            </p>\n\n\n\n            <ion-card class="ion-cards" (click)="chartSelected(1,\'LIVE\',\'NSE CASH\')">\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g1.png" style="height: 50px; width: 50px" class="fa-icons" item-start>\n\n                    <!--<fa-icon color="primary" name="bar-chart" class="fa-icons" style="background-color: #0bca00" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">NSE CASH</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-card>\n\n\n\n            <ion-card class="ion-cards" (click)="chartSelected(2,\'LIVE\',\'F&O\')">\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g2.png" style="height: 50px; width: 50px" class="fa-icons" item-start>\n\n                    <!--<fa-icon color="primary" name="line-chart" class="fa-icons" style="background-color: #ca3757;" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">F&O</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-card>\n\n\n\n            <ion-card class="ion-cards" (click)="chartSelected(3,\'LIVE\',\'MCX\')">\n\n\n\n                <ion-item>\n\n\n\n                    <img src="assets/imgs/g3.png" class="fa-icons" style="height: 50px; width: 50px" item-start>\n\n                    <!--<fa-icon color="primary" name="signal" class="fa-icons" style="background-color: #ed3954" item-start></fa-icon>-->\n\n                    <h4 style="font-weight: bold; color:#ed3954 ">MCX</h4>\n\n                    <!--<p>Refresh Every Second</p>-->\n\n                    <ion-icon name="ios-arrow-forward" style="color: #939393" large item-end></ion-icon>\n\n\n\n                </ion-item>\n\n            </ion-card>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\live-charts\live-charts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
    ], LiveChartsPage);
    return LiveChartsPage;
}());

//# sourceMappingURL=live-charts.js.map

/***/ })

});
//# sourceMappingURL=27.js.map