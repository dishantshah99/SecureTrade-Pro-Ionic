webpackJsonp([14],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]),
            ],
        })
    ], SettingPageModule);
    return SettingPageModule;
}());

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
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
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams, api, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.NseCashhide = true;
        this.Fohide = true;
        this.MCXhide = true;
        this.update_noti_setting = "update_noti_setting";
        this.hidedown = true;
        this.hiderefresh = true;
        this.repetcount = 1;
        this.hideup = false;
        this.login_details = JSON.parse(localStorage.getItem("login_details"));
        // this.UID = this.login_details.user_data.ID;
        // console.log("jsfileinclued", this.testvar);
        this.loading = this.loadingCtrl.create({ content: "please wait..." });
        this.loading.present();
        this.getsettingdata();
        // this.api.getNotificationSettingData(this.UID, "user_profile")
        //
        //     .then(data => {
        //
        //         this.NotificationResponse = data;
        //         console.log("Notification data", this.NotificationResponse);
        //         this.ADVISORY = this.NotificationResponse.data[0].ADVISORY;
        //         this.NEWS = this.NotificationResponse.data[0].NEWS;
        //         this.VIDEO = this.NotificationResponse.data[0].VIDEO;
        //         this.FCALLS = this.NotificationResponse.data[0].FCALLS;
        //         this.WALLET = this.NotificationResponse.data[0].WALLET;
        //         this.ADMINNOTI = this.NotificationResponse.data[0].ADMINNOTI;
        //         this.NSECASHTYPE = this.NotificationResponse.data[0].NSELOADTYPE;
        //         this.FOTYPE = this.NotificationResponse.data[0].FOLOADTYPE;
        //         this.MCXTYPE = this.NotificationResponse.data[0].MCXLOADTYPE;
        //         this.NSETEXT = this.NotificationResponse.data[0].NSELOADSEC;
        //         this.FOTEXT = this.NotificationResponse.data[0].FOLOADSEC;
        //         this.MCXTEXT = this.NotificationResponse.data[0].MCXLOADSEC;
        //
        //
        //         console.log("ADVISORY", this.ADVISORY);
        //         console.log("NEWS", this.NEWS);
        //         console.log("VIDEO", this.VIDEO);
        //         console.log("FCALLS", this.FCALLS);
        //         console.log("WALLET", this.WALLET);
        //         console.log("ADMINNOTI", this.ADMINNOTI);
        //         console.log("NSECASHTYPE", this.NSECASHTYPE);
        //         console.log("FOTYPE", this.FOTYPE);
        //         console.log("MCXTYPE", this.MCXTYPE);
        //         console.log("NSETEXT", this.NSETEXT);
        //         console.log("FOTEXT", this.FOTEXT);
        //         console.log("MCXTEXT", this.MCXTEXT);
        //
        //         this.FillNotificationDetail(this.ADVISORY, this.NEWS, this.VIDEO, this.FCALLS, this.WALLET, this.ADMINNOTI, this.NSECASHTYPE, this.FOTYPE, this.MCXTYPE);
        //
        //         this.loading.dismiss();
        //
        //     }).catch();
    }
    SettingPage.prototype.getsettingdata = function () {
        var _this = this;
        this.api.settinggetapi().then(function (data) {
            // this.users = data;
            _this.setingdata = data;
            console.log("setingdata", _this.setingdata);
            if (_this.setingdata.status == '200') {
                _this.loading.dismiss();
                _this.api.NSECASH_TYPE = _this.setingdata.data[0].NSE_TYPE;
                _this.api.FO_TYPE = _this.setingdata.data[0].FO_TYPE;
                _this.api.MCX_TYPE = _this.setingdata.data[0].MCX_TYPE;
                _this.api.NSECASH_REFRESH_RATE = _this.setingdata.data[0].NSE_TIME;
                _this.api.FO_REFRESH_RATE = _this.setingdata.data[0].FO_TIME;
                _this.api.MCX_REFRESH_RATE = _this.setingdata.data[0].MCX_TIME;
                _this.api.ADVISORY = _this.setingdata.data[0].ADVISORY;
                _this.api.VIDEO = _this.setingdata.data[0].VIDEO;
                _this.api.BLOG = _this.setingdata.data[0].BLOG;
                _this.api.ADMIN = _this.setingdata.data[0].ADMIN;
                _this.ADVISORY = _this.setingdata.data[0].ADVISORY;
                _this.NEWS = _this.setingdata.data[0].NEWS;
                _this.VIDEO = _this.setingdata.data[0].VIDEO;
                _this.ADMINNOTI = _this.setingdata.data[0].ADMIN;
                _this.NSECASHTYPE = _this.setingdata.data[0].NSE_TYPE;
                _this.FOTYPE = _this.setingdata.data[0].FO_TYPE;
                _this.MCXTYPE = _this.setingdata.data[0].MCX_TYPE;
                _this.NSETEXT = _this.setingdata.data[0].NSE_TIME;
                _this.FOTEXT = _this.setingdata.data[0].FO_TIME;
                _this.MCXTEXT = _this.setingdata.data[0].MCX_TIME;
                _this.FillNotificationDetail(_this.api.ADVISORY, '', _this.api.VIDEO, '', '', _this.api.ADMIN, _this.api.BLOG, _this.api.NSECASH_TYPE, _this.api.FO_TYPE, _this.api.MCX_TYPE);
            }
            else {
                _this.api.ErrorApi(_this.setingdata.status, _this.setingdata.message);
            }
        }).catch();
    };
    SettingPage.prototype.FillNotificationDetail = function (ADVISORY, NEWS, VIDEO, FCALLS, WALLET, ADMINNOTI, BLOG, NSETYPE, FOTYPE, MSXTYPE) {
        if (ADVISORY == "true") {
            this.ADVISROYSELECTED = "true";
            this.advisorychecked = true;
        }
        else {
            this.ADVISROYSELECTED = "false";
            this.advisorychecked = false;
        }
        if (NEWS == "true") {
            this.NEWSELECTED = "true";
            this.newselected = true;
        }
        else {
            this.NEWSELECTED = "false";
            this.newselected = false;
        }
        if (BLOG == "true") {
            this.BOLGSELECTED = "true";
            this.bolgselected = true;
        }
        else {
            this.BOLGSELECTED = "false";
            this.bolgselected = false;
        }
        if (VIDEO == "true") {
            this.VIDEOSELECTED = "true";
            this.videoselected = true;
        }
        else {
            this.VIDEOSELECTED = "false";
            this.videoselected = false;
        }
        if (FCALLS == "true") {
            this.FCALSSSELECTED = "true";
            this.fcalssselected = true;
        }
        else {
            this.FCALSSSELECTED = "false";
            this.fcalssselected = false;
        }
        if (WALLET == "true") {
            this.WALLETSELECTED = "true";
            this.walletselected = true;
        }
        else {
            this.WALLETSELECTED = "false";
            this.walletselected = false;
        }
        if (ADMINNOTI == "true") {
            this.ADMINNOTISELECTED = "true";
            this.adminnotiselected = true;
        }
        else {
            this.ADMINNOTISELECTED = "false";
            this.adminnotiselected = false;
        }
        if (NSETYPE == "0") {
            this.NSEAUTO = true;
            this.NSEMANUAL = false;
            this.NseCashhide = true;
        }
        else {
            this.NSEAUTO = false;
            this.NSEMANUAL = true;
            this.NseCashhide = false;
        }
        if (FOTYPE == "0") {
            this.FOAUTO = true;
            this.FOMANUAL = false;
            this.Fohide = true;
        }
        else {
            this.FOAUTO = false;
            this.FOMANUAL = true;
            this.Fohide = false;
        }
        if (MSXTYPE == "0") {
            this.MCXAUTO = true;
            this.MCXMANUAL = false;
            this.MCXhide = true;
        }
        else {
            this.MCXAUTO = false;
            this.MCXMANUAL = true;
            this.MCXhide = false;
        }
    };
    SettingPage.prototype.setradio = function (checked) {
        if (checked == "NSEAUTO") {
            this.NseCashhide = true;
            this.NSECASHTYPE = "0";
            // this.NSETEXT = 40;
            console.log("chacked NSEAUTO", checked);
        }
        else if (checked == "FOAUTO") {
            this.Fohide = true;
            this.FOTYPE = "0";
            // this.FOTEXT = 40;
            console.log("chacked FOAUTO", checked);
        }
        else if (checked == "MCXAUTO") {
            this.MCXhide = true;
            this.MCXTYPE = "0";
            // this.MCXTEXT = 40;
            console.log("chacked MCXAUTO", checked);
        }
        else if (checked == "NSEMANUAL") {
            this.NseCashhide = false;
            this.NSECASHTYPE = "1";
            // this.NSETEXT = "null";
            console.log("chacked NSEMANUAL", checked);
        }
        else if (checked == "FOMANUAL") {
            this.Fohide = false;
            this.FOTYPE = "1";
            // this.FOTEXT = "null";
            console.log("chacked FOMANUAL", checked);
        }
        else if (checked == "MCXMANUAL") {
            this.MCXhide = false;
            this.MCXTYPE = "1";
            // this.MCXTEXT = "null";
            console.log("chacked MCXMANUAL", checked);
        }
    };
    SettingPage.prototype.notify = function (event, Tono) {
        if (Tono == 1) {
            if (event.checked) {
                this.ADVISROYSELECTED = "true";
                console.log("checked", this.ADVISROYSELECTED);
            }
            else {
                this.ADVISROYSELECTED = "false";
                console.log("unchecked", this.ADVISROYSELECTED);
            }
        }
        if (Tono == 2) {
            if (event.checked) {
                this.VIDEOSELECTED = "true";
                console.log("checked", this.VIDEOSELECTED);
            }
            else {
                this.VIDEOSELECTED = "false";
                console.log("unchecked", this.VIDEOSELECTED);
            }
        }
        if (Tono == 3) {
            if (event.checked) {
                this.NEWSELECTED = "true";
                console.log("checked", this.NEWSELECTED);
            }
            else {
                this.NEWSELECTED = "false";
                console.log("unchecked", this.NEWSELECTED);
            }
        }
        if (Tono == 4) {
            if (event.checked) {
                this.FCALSSSELECTED = "true";
                console.log("checked", this.FCALSSSELECTED);
            }
            else {
                this.FCALSSSELECTED = "false";
                console.log("unchecked", this.FCALSSSELECTED);
            }
        }
        if (Tono == 5) {
            if (event.checked) {
                this.WALLETSELECTED = "true";
                console.log("checked", this.WALLETSELECTED);
            }
            else {
                this.WALLETSELECTED = "false";
                console.log("unchecked", this.WALLETSELECTED);
            }
        }
        if (Tono == 6) {
            if (event.checked) {
                this.ADMINNOTISELECTED = "true";
                console.log("checked", this.ADMINNOTISELECTED);
            }
            else {
                this.ADMINNOTISELECTED = "false";
                console.log("unchecked", this.ADMINNOTISELECTED);
            }
        }
        if (Tono == 7) {
            if (event.checked) {
                this.BOLGSELECTED = "true";
                console.log("checked", this.BOLGSELECTED);
            }
            else {
                this.BOLGSELECTED = "false";
                console.log("unchecked", this.BOLGSELECTED);
            }
        }
    };
    SettingPage.prototype.submitsetting = function () {
        var _this = this;
        if (this.NSECASHTYPE == "0" && this.NSETEXT == "null") {
            this.presentToast("Please Enter NSE CASH Refresh Time");
            console.log("Please Enter NSE CASH Refresh Time");
        }
        else if (this.NSECASHTYPE == "0" && this.NSETEXT < 5) {
            this.presentToast("Minimum Refresh Rate for NSE CASH is 5 seconds Please Enter Higher than 5 Seconds");
        }
        else if (this.FOTYPE == "0" && this.FOTEXT == "null") {
            this.presentToast("Please Enter NSE FO Refresh Time");
            console.log("Please Enter NSE FO Refresh Time");
        }
        else if (this.FOTYPE == "0" && this.FOTEXT < 5) {
            this.presentToast("Minimum Refresh Rate for FO Live Cash is 5 seconds Please Enter Higher than 5 Seconds");
        }
        else if (this.MCXTYPE == "0" && this.MCXTEXT == "null") {
            this.presentToast("Please Enter MCX Refresh Time");
        }
        else if (this.MCXTYPE == "0" && this.MCXTEXT < 5) {
            this.presentToast("Minimum Refresh Rate for MCX is 5 seconds Please Enter Higher than 5 Seconds");
        }
        else {
            this.loading = this.loadingCtrl.create({ content: "please wait..." });
            this.loading.present();
            this.api.updatesetting(this.UID, this.ADVISROYSELECTED, this.NEWSELECTED, this.VIDEOSELECTED, this.WALLETSELECTED, this.FCALSSSELECTED, this.ADMINNOTISELECTED, this.NSECASHTYPE, this.NSETEXT, this.FOTYPE, this.FOTEXT, this.FOTEXT, this.MCXTYPE, this.MCXTEXT, "update_falseti_setting", this.BOLGSELECTED)
                .then(function (data) {
                _this.loading.dismiss();
                _this.Updatedatatext = data;
                _this.getsettingdata();
                _this.presentToast("Settings updated.");
                _this.navCtrl.popToRoot();
                console.log(data);
            }).catch();
        }
        console.log("UID", this.UID);
        console.log("advisorySelected", this.ADVISROYSELECTED);
        console.log("newsSelected", this.NEWSELECTED);
        console.log("videoSelected", this.VIDEOSELECTED);
        console.log("walletSelected", this.WALLETSELECTED);
        console.log("fundamentalSelected", this.FCALSSSELECTED);
        console.log("ADMINSelected", this.ADMINNOTISELECTED);
        console.log("NSECASHTYPE", this.NSECASHTYPE);
        console.log("NSECASHDESC", this.NSETEXT);
        console.log("FOTYPE", this.FOTYPE);
        console.log("FODESC", this.FOTEXT);
        console.log("MCXTYPE", this.MCXTYPE);
        console.log("MCXDESC", this.MCXTEXT);
        console.log("update_noti_setting", this.update_noti_setting);
    };
    SettingPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom',
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('NseRefreshRate'),
        __metadata("design:type", Object)
    ], SettingPage.prototype, "NSErefreshRate", void 0);
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\setting\setting.html"*/'<!--\n\n  Generated template for the SettingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Notification</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-list style="margin-bottom: 2px;">\n\n\n\n        <ion-item>\n\n\n\n            <ion-label class="lable-style">\n\n\n\n                <!--<fa-icon style="font-size: 19px;" class="fa-icon" name="cog" item-left medium>-->\n\n\n\n                <!--</fa-icon>-->\n\n\n\n                <!--<img src="assets/imgs/setting_icon.png" item-left/>-->\n\n\n\n                <span>Notification Setting</span></ion-label>\n\n\n\n        </ion-item>\n\n\n\n        <ion-item class="items">\n\n\n\n            <ion-label> Advisory</ion-label>\n\n            <ion-toggle [checked]="advisorychecked" (ionChange)="notify($event,1)"></ion-toggle>\n\n\n\n        </ion-item>\n\n\n\n        <ion-item class="items">\n\n\n\n            <ion-label>Video</ion-label>\n\n\n\n            <ion-toggle [checked]="videoselected" (ionChange)="notify($event,2)"></ion-toggle>\n\n\n\n        </ion-item>\n\n\n\n        <ion-item class="items">\n\n\n\n            <ion-label>Blog</ion-label>\n\n\n\n            <ion-toggle [checked]="bolgselected" (ionChange)="notify($event,7)"></ion-toggle>\n\n\n\n        </ion-item>\n\n\n\n        <!--<ion-item class="items">-->\n\n            <!--<ion-label>Fundamental Call</ion-label>-->\n\n            <!--<ion-toggle [checked]="fcalssselected" (ionChange)="notify($event,4)"></ion-toggle>-->\n\n        <!--</ion-item>-->\n\n\n\n        <!--<ion-item class="items">-->\n\n            <!--<ion-label>Wallet</ion-label>-->\n\n            <!--<ion-toggle [checked]="walletselected" (ionChange)="notify($event,5)"></ion-toggle>-->\n\n        <!--</ion-item>-->\n\n\n\n        <ion-item class="items">\n\n            <ion-label>Admin</ion-label>\n\n            <ion-toggle [checked]="adminnotiselected" (ionChange)="notify($event,6)"></ion-toggle>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <!-- <accordion-list color="primary" title="Refresh Time Setting">-->\n\n\n\n    <div style="background-color: white;">\n\n        <ion-item style="background-color: white">\n\n            <ion-icon name="md-refresh" item-start></ion-icon>\n\n            <ion-label color="primary" >Refresh Time Setting</ion-label>\n\n            <ion-icon name="ios-arrow-up" item-end *ngIf="hideup"></ion-icon>\n\n            <ion-icon name="ios-arrow-down" item-end *ngIf="hidedown"></ion-icon>\n\n        </ion-item>\n\n        <div style="padding: 10px;" *ngIf="hiderefresh">\n\n            <ion-label class="lable-style">\n\n                <ion-icon name="md-refresh"></ion-icon>\n\n                NSE Cash Refresh\n\n            </ion-label>\n\n\n\n            <ion-row radio-group [(ngModel)]="NseCashRefresh" (ionChange)="setradio(NseCashRefresh)">\n\n\n\n                <ion-col>\n\n\n\n                    <ion-item>\n\n\n\n                        <ion-label>AUTO</ion-label>\n\n\n\n                        <ion-radio value="nseauto" [checked]="NSEAUTO" [value]="AUTO" (click)="setradio(\'NSEAUTO\')"></ion-radio>\n\n\n\n                    </ion-item>\n\n\n\n                </ion-col>\n\n\n\n                <ion-col>\n\n                    <ion-item>\n\n                        <ion-label>MANUAL</ion-label>\n\n                        <ion-radio value="nsemanual" [value]="MANUAL" [checked]="NSEMANUAL" (click)="setradio(\'NSEMANUAL\')"></ion-radio>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-item *ngIf="NseCashhide">\n\n                <ion-input style="border-bottom: 1px solid #ed3954;" placeholder="Enter Your Refresh Time in Seconds" FormControl="NSETEXT" [(ngModel)]="NSETEXT" type="number" [value]="NSETEXT || \'5\'"  #NseRefreshRate></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-label class="lable-style">\n\n                <ion-icon name="md-refresh"></ion-icon>\n\n                FO Refresh\n\n            </ion-label>\n\n            <ion-row radio-group [(ngModel)]="fo" (ionChange)="setradio(FORefresh)">\n\n                <ion-col>\n\n                    <ion-item>\n\n                        <ion-label>Auto</ion-label>\n\n                        <ion-radio value="foauto" [checked]="FOAUTO" (click)="setradio(\'FOAUTO\')"></ion-radio>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <ion-item>\n\n                        <ion-label>MANUAL</ion-label>\n\n                        <ion-radio value="fomanual" [checked]="FOMANUAL" (click)="setradio(\'FOMANUAL\')"></ion-radio>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-item *ngIf="Fohide">\n\n\n\n                <ion-input style="border-bottom: 1px solid #ed3954;" [(ngModel)]="FOTEXT" placeholder="Enter Your Refresh Time in Seconds" type="number" [value]="FOTEXT || \'5\'"  #NseRefreshRate></ion-input>\n\n                <!--<fa-icon name="eye" color="primary" item-right size="1x"></fa-icon>-->\n\n\n\n            </ion-item>\n\n\n\n            <ion-label class="lable-style">\n\n                <ion-icon name="md-refresh"></ion-icon>\n\n                MCX Refresh\n\n            </ion-label>\n\n            <ion-row radio-group [(ngModel)]="mxc" (ionChange)="setradio(MCXRefresh)">\n\n                <ion-col>\n\n                    <ion-item>\n\n                        <ion-label>Auto</ion-label>\n\n                        <ion-radio value="mcxauto" [checked]="MCXAUTO" (click)="setradio(\'MCXAUTO\')"></ion-radio>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <ion-item>\n\n                        <ion-label>Manual</ion-label>\n\n                        <ion-radio value="mcxmanual" [checked]="MCXMANUAL" (click)="setradio(\'MCXMANUAL\')"></ion-radio>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-item *ngIf="MCXhide">\n\n\n\n\n\n                <ion-input style="border-bottom: 1px solid #ed3954;" [(ngModel)]="MCXTEXT" placeholder="Enter Your Refresh Time in Seconds" type="number" [value]="MCXTEXT || \'5\'"  #NseRefreshRate></ion-input>\n\n                <!--<fa-icon name="eye" color="primary" item-right size="1x"></fa-icon>-->\n\n\n\n            </ion-item>\n\n        </div>\n\n    </div>\n\n    <!--</accordion-list>-->\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n\n\n    <ion-row col-12 style="padding: 0px;">\n\n        <ion-col col-12>\n\n            <button ion-button full color="primary" style="border-radius: 2px " (click)="submitsetting()">Apply</button>\n\n        </ion-col>\n\n\n\n    </ion-row>\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ })

});
//# sourceMappingURL=14.js.map