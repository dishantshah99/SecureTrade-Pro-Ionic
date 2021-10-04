webpackJsonp([48],{

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoadvisoryPageModule", function() { return AutoadvisoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autoadvisory__ = __webpack_require__(487);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AutoadvisoryPageModule = /** @class */ (function () {
    function AutoadvisoryPageModule() {
    }
    AutoadvisoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__autoadvisory__["a" /* AutoadvisoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__autoadvisory__["a" /* AutoadvisoryPage */]),
            ],
        })
    ], AutoadvisoryPageModule);
    return AutoadvisoryPageModule;
}());

//# sourceMappingURL=autoadvisory.module.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoadvisoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screenshot__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(52);
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
 * Generated class for the AutoadvisoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AutoadvisoryPage = /** @class */ (function () {
    function AutoadvisoryPage(navCtrl, navParams, screenshot, api, viewCtrl, socialSharing, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.screenshot = screenshot;
        this.api = api;
        this.viewCtrl = viewCtrl;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.listshow = false;
        this.filter = false;
        this.Selecttype = '1';
        this.traderid = 1;
        this.callid = 1;
        this.Traderarray = [{ title: 'Normal Trade', select: false, id: 1, type: 'BullBear' }, { title: 'STAR Trade', select: false, id: 2, type: 'PowerBullBear' }, { title: 'Smart Trade', select: false, id: 3, type: 'Magic' }];
        this.selectedtrader = [];
        this.DATALIST = [];
        this.DATASEARCHLIST = [];
        this.DEFAULT = [];
        this.PRIVATE = [];
        this.SELECTEDTIME = 5;
        this.searchtxt = '';
        this.ADVISORY_VAL = 0;
        this.notificationdata = navParams.data;
    }
    AutoadvisoryPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter advisory');
        // this.Traderarray[0].select = true;
        // this.selectedtrader.push(this.Traderarray[0].type);
        this.getwatchlistapi();
    };
    AutoadvisoryPage.prototype.getItems = function (ev) {
        this.DATASEARCHLIST = [];
        this.DATALIST = [];
        var val;
        console.log(ev);
        if (ev == '') {
            val = this.searchtxt;
            console.log('Serch Text', val);
        }
        else {
            if (ev.data != null) {
                val = ev.target.value.trim();
            }
            else {
                val = "";
                // this.DATALIST = this.DATA.data;
                for (var i = 0; i < 15; i++) {
                    this.DATALIST.push(this.DATA.data[i]);
                    this.advisory_position = i;
                    this.ADVISORY_VAL = 0;
                }
            }
        }
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.DATASEARCHLIST = this.DATA.data.filter(function (item) {
                return (item.SYMBOL.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            for (var i = 0; i < 15; i++) {
                if (this.DATASEARCHLIST[i]) {
                    this.DATALIST.push(this.DATASEARCHLIST[i]);
                    this.ADVISORY_VAL = 1;
                }
            }
            console.log("DATALIST", this.DATALIST);
            console.log("DATASEARCHLIST", this.DATASEARCHLIST);
        }
    };
    AutoadvisoryPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log("position", this.advisory_position);
        console.log('Begin async operation');
        setTimeout(function () {
            _this.advisory_position++;
            var cash_count = (_this.advisory_position + 15);
            for (var i = _this.advisory_position; i < cash_count; i++) {
                if (_this.ADVISORY_VAL == 1) {
                    if (_this.DATASEARCHLIST[i]) {
                        _this.DATALIST.push(_this.DATASEARCHLIST[i]);
                        _this.advisory_position = i;
                    }
                }
                else {
                    if (_this.DATA.data[i]) {
                        _this.DATALIST.push(_this.DATA.data[i]);
                        _this.advisory_position = i;
                    }
                }
            }
            infiniteScroll.complete();
            console.log("this.messagenewitem", _this.DATALIST);
            console.log('Async operation has ended');
        }, 500);
    };
    AutoadvisoryPage.prototype.chartSelected = function (item, type, DATA) {
        var title;
        if (DATA.SYMBOL_TYPE == 'NSECASH') {
            title = 'NSE CASH';
            this.navCtrl.push('ChartsPage', { number: 1, selected: item, title: title, type: type, DATA: DATA, time: this.SELECTEDTIME });
        }
        else if (DATA.SYMBOL_TYPE == 'NSEFO') {
            title = 'F&O';
            this.navCtrl.push('ChartsPage', { number: 2, selected: item, title: title, type: type, DATA: DATA, time: this.SELECTEDTIME });
        }
        else {
            title = 'MCX';
            this.navCtrl.push('ChartsPage', { number: 3, selected: item, title: title, type: type, DATA: DATA, time: this.SELECTEDTIME });
        }
    };
    AutoadvisoryPage.prototype.getwatchlistapi = function () {
        var _this = this;
        this.api.advisorylistapi().then(function (data) {
            // this.users = data;
            _this.advisorydata = data;
            console.log("advisorydata", _this.advisorydata);
            if (_this.advisorydata.status == 200) {
                _this.api.Advisorywatch_list = _this.advisorydata.watch_list;
                _this.DEFAULT = _this.api.Advisorywatch_list.DEFAULT;
                _this.PRIVATE = _this.api.Advisorywatch_list.PRIVATE;
                console.log("Notification navdata", _this.navParams.data);
                if (_this.PRIVATE.length > 0 && _this.navParams.data) {
                    for (var i = 0; i < _this.PRIVATE.length; i++) {
                        if (_this.PRIVATE[i].ID == _this.navParams.data.watch_list_id) {
                            _this.api.advisorywatch_postion = i;
                        }
                    }
                }
                console.log("idx", _this.api.advisorywatch_postion);
                if (_this.api.advisorywatch_type == "DEFAULT") {
                    _this.DDL_NAME = _this.api.Advisorywatch_list.DEFAULT[_this.api.advisorywatch_postion].NAME;
                    _this.DDL_ID = _this.api.Advisorywatch_list.DEFAULT[_this.api.advisorywatch_postion].ID;
                    _this.DDL_TYPE = "DEFAULT";
                    console.log("this.api.watch_postion url", _this.api.advisorywatch_postion);
                }
                else {
                    _this.DDL_NAME = _this.api.Advisorywatch_list.PRIVATE[_this.api.advisorywatch_postion].NAME;
                    _this.DDL_ID = _this.api.Advisorywatch_list.PRIVATE[_this.api.advisorywatch_postion].ID;
                    _this.DDL_TYPE = "PRIVATE";
                    _this.traderid = _this.api.Advisorywatch_list.PRIVATE[_this.api.advisorywatch_postion].WATCH_TIMING;
                    _this.selectedtrader = [];
                    if (_this.api.Advisorywatch_list.PRIVATE[_this.api.advisorywatch_postion].BULL_BAR_TRADE == 1) {
                        _this.Traderarray[0].select = true;
                        _this.selectedtrader.push(_this.Traderarray[0].type);
                    }
                    else {
                        _this.Traderarray[0].select = false;
                    }
                    if (_this.api.Advisorywatch_list.PRIVATE[_this.api.advisorywatch_postion].POWER_BULL_BEAR_TRADE == 1) {
                        _this.Traderarray[1].select = true;
                        _this.selectedtrader.push(_this.Traderarray[1].type);
                    }
                    else {
                        _this.Traderarray[1].select = false;
                    }
                    if (_this.api.Advisorywatch_list.PRIVATE[_this.api.advisorywatch_postion].MAGIC_TRADE == 1) {
                        _this.Traderarray[2].select = true;
                        _this.selectedtrader.push(_this.Traderarray[2].type);
                    }
                    else {
                        _this.Traderarray[2].select = false;
                    }
                    console.log("selected array", _this.selectedtrader);
                    console.log("traderid", _this.traderid);
                    console.log("this.api.watch_postion url", _this.api.advisorywatch_postion);
                }
                if (_this.PRIVATE.length > 0) {
                    _this.getdatalist();
                }
            }
            else {
                _this.api.ErrorApi(_this.advisorydata.status, _this.advisorydata.message);
            }
        }).catch();
    };
    AutoadvisoryPage.prototype.getdatalist = function () {
        var _this = this;
        this.api.Startloader();
        this.DATALIST = [];
        var data = {
            "WATCHLIST_ID": this.DDL_ID,
            "TRADE": this.selectedtrader,
            "TRADER": this.traderid,
            "CALL": this.callid,
            "LIVE_EOD": "Live"
        };
        this.api.advisoryshowlistapi(data).then(function (data) {
            // this.users = data;
            _this.DATA = data;
            console.log("advisory", _this.DATA);
            if (_this.advisorydata.status == 200) {
                _this.api.Stoploader();
                if (_this.DATA.data.length > 0) {
                    for (var i = 0; i < 15; i++) {
                        if (_this.DATA.data[i]) {
                            _this.DATALIST.push(_this.DATA.data[i]);
                            _this.advisory_position = i;
                        }
                    }
                }
                // this.DATALIST = this.DATA.data;
                console.log("advisory", _this.DATALIST);
                // this.getItems('');
                console.log('notificationdata', _this.notificationdata.symbol);
                if (_this.notificationdata.symbol != undefined) {
                    _this.searchtxt = _this.notificationdata.symbol;
                    console.log('notificationdata', _this.notificationdata);
                    console.log('searchtxt', _this.searchtxt);
                    _this.getItems('');
                }
            }
            else {
                _this.api.ErrorApi(_this.DATA.status, _this.DATA.message);
            }
        }).catch();
    };
    AutoadvisoryPage.prototype.opendata = function (p, type) {
        this.api.advisorywatch_postion = p;
        this.api.advisorywatch_type = type;
        this.listshow = false;
        console.log("watch_postion", this.api.advisorywatch_postion);
        var cash;
        var future;
        if (this.api.advisorywatch_type == "DEFAULT") {
            this.DDL_NAME = this.api.Advisorywatch_list.DEFAULT[this.api.advisorywatch_postion].NAME;
            this.DDL_ID = this.api.Advisorywatch_list.DEFAULT[this.api.advisorywatch_postion].ID;
            this.DDL_TYPE = "DEFAULT";
        }
        else {
            this.DDL_NAME = this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].NAME;
            this.DDL_ID = this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].ID;
            this.traderid = this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].WATCH_TIMING;
            this.selectedtrader = [];
            if (this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].BULL_BAR_TRADE == 1) {
                this.Traderarray[0].select = true;
                this.selectedtrader.push(this.Traderarray[0].type);
            }
            else {
                this.Traderarray[0].select = false;
            }
            if (this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].POWER_BULL_BEAR_TRADE == 1) {
                this.Traderarray[1].select = true;
                this.selectedtrader.push(this.Traderarray[1].type);
            }
            else {
                this.Traderarray[1].select = false;
            }
            if (this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].MAGIC_TRADE == 1) {
                this.Traderarray[2].select = true;
                this.selectedtrader.push(this.Traderarray[2].type);
            }
            else {
                this.Traderarray[2].select = false;
            }
            console.log("selected array", this.selectedtrader);
            console.log("traderid", this.traderid);
            console.log('DDL_NAME', this.DDL_NAME);
            console.log('DDL_ID', this.DDL_ID);
            this.DDL_TYPE = "PRIVATE";
        }
        this.getdatalist();
    };
    AutoadvisoryPage.prototype.deletewatchlist = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            // title: 'Delete',
            message: "Are you sure want to delete Watchlist ?",
            buttons: [
                {
                    text: 'NO',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function (data) {
                        console.log('Saved clicked');
                        _this.deleteapi(id);
                        _this.listshow = false;
                    }
                }
            ]
        });
        prompt.present();
    };
    AutoadvisoryPage.prototype.deleteapi = function (id) {
        var _this = this;
        this.api.Startloader();
        this.api.Watchlistdelete(id).then(function (result) {
            _this.deletedata = result;
            _this.api.Stoploader();
            if (_this.deletedata.status == 200) {
                _this.api.presentToast(_this.deletedata.message);
                _this.getwatchlistapi();
            }
            else {
                _this.api.ErrorApi(_this.deletedata.status, _this.deletedata.message);
            }
        }, function (err) {
            // console.log(err);
            // this.api.presentToast("Enter Mobile number", '')
        });
    };
    AutoadvisoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AutoadvisoryPage');
    };
    AutoadvisoryPage.prototype.openwatchlist = function () {
        if (this.filter == true) {
            this.filter = false;
        }
        if (this.listshow == true) {
            this.listshow = false;
        }
        else {
            this.listshow = true;
        }
    };
    AutoadvisoryPage.prototype.commenclick = function () {
        this.listshow = false;
        this.filter = false;
    };
    AutoadvisoryPage.prototype.openwatchlistclick = function () {
        if (this.DDL_TYPE == "PRIVATE") {
            this.api.AUTOADVISORYWATCHLISTNAME = this.DDL_NAME;
            this.api.AUTOADVISORYWATCHLISTID = this.DDL_ID;
            console.log("this.api.AUTOADVISORYWATCHLISTNAME", this.api.AUTOADVISORYWATCHLISTNAME);
            console.log("this.api.AUTOADVISORYWATCHLISTID", this.api.AUTOADVISORYWATCHLISTID);
            this.api.AUTOADVISORYWATCHLISTDATA = this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion];
            this.navCtrl.push('AdvisorysearchPage', 2);
        }
        else {
            this.api.presentToast("Default Watchlist can't update");
        }
    };
    AutoadvisoryPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Watchlist Name',
            // message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Name'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked', data);
                        _this.api.AUTOADVISORYWATCHLISTNAME = data;
                        _this.listshow = false;
                        _this.navCtrl.push('AdvisorysearchPage', 1);
                    }
                }
            ]
        });
        prompt.present();
    };
    AutoadvisoryPage.prototype.seting = function () {
        this.navCtrl.push('SettingPage');
    };
    AutoadvisoryPage.prototype.shareScreenshot = function () {
        this.api.SharescrrenshotContent(this.screenshot, this.socialSharing, this.screen, this.api.playstorelink);
    };
    AutoadvisoryPage.prototype.shareInfo = function () {
        var _this = this;
        this.screenshot.URI().then(function (res) {
            _this.socialSharing.share("Secure Trade", "Demo subject", "", "https://play.google.com/store/apps/details?id=&hl=en%22").then(function () {
            });
        });
    };
    AutoadvisoryPage.prototype.changetrader = function (idx) {
        if (this.Traderarray[idx].select == true) {
            this.Traderarray[idx].select = false;
            var remove = this.selectedtrader.indexOf(this.Traderarray[idx].type);
            this.selectedtrader.splice(remove, 1);
        }
        else {
            this.Traderarray[idx].select = true;
            this.selectedtrader.push(this.Traderarray[idx].type);
        }
        console.log("selected array", this.selectedtrader);
    };
    AutoadvisoryPage.prototype.changetrade = function (number, time) {
        this.traderid = number;
        this.SELECTEDTIME = time;
    };
    AutoadvisoryPage.prototype.changecall = function (number) {
        this.callid = number;
        this.getdatalist();
    };
    AutoadvisoryPage.prototype.openfilter = function () {
        this.listshow = false;
        if (this.filter == false) {
            this.filter = true;
        }
        else {
            this.filter = false;
        }
    };
    AutoadvisoryPage.prototype.updatedata = function () {
        var _this = this;
        this.api.Startloader();
        var data = {
            "WATCHLIST_ID": this.DDL_ID,
            "TRADE": this.selectedtrader,
            "TRADER": this.traderid,
        };
        this.api.advisoryshowUPDATEapi(data).then(function (data) {
            // this.users = data;
            _this.updateDATA = data;
            console.log("advisory", _this.updateDATA);
            if (_this.advisorydata.status == 200) {
                _this.api.Stoploader();
                _this.listshow = false;
                _this.filter = false;
                _this.getdatalist();
            }
            else {
                _this.api.ErrorApi(_this.updateDATA.status, _this.updateDATA.message);
            }
        }).catch();
    };
    AutoadvisoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-autoadvisory',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\autoadvisory\autoadvisory.html"*/'<!--\n\n  Generated template for the AutoadvisoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Auto Advisory</ion-title>\n\n\n\n        <span style="float: right; color: white" end><ion-icon class="abc" name="md-settings" style="margin-left: 12px;margin-right: 16px;margin-top: 4px;font-weight: bold; font-size: 22px;" (click)="seting()"></ion-icon></span>\n\n\n\n        <span style="float: right; color: white" end><ion-icon name="md-share" style="margin-left: 17px;margin-right: 17px;margin-top: 4px; font-weight: bold; font-size: 22px;" (click)="shareScreenshot()"></ion-icon></span>\n\n\n\n    </ion-navbar>\n\n\n\n    <ion-item style="background-color: #ed3954;height: 25px;" no-margin no-padding no-lines>\n\n        <ion-item no-padding style="background-color: transparent" (tap)="openwatchlist()">\n\n            <h2 style="color: white;margin: 15px;">{{DDL_NAME}}</h2>\n\n        </ion-item>\n\n        <div item-end no-margin no-padding>\n\n            <ion-icon name="md-arrow-dropdown" style="color: white;padding: 5px;margin: 5px" (tap)="openwatchlist()"></ion-icon>\n\n            <ion-icon name="create" style="color: white;padding: 5px;;margin: 5px" (tap)="openwatchlistclick()"></ion-icon>\n\n            <!--<img *ngIf="filter == false" src="assets/imgs/filterani.gif" style="height: 35px;width: 35px;background-color: white;border-radius: 50px" (tap)="openfilter()">-->\n\n            <ion-icon *ngIf="filter == false" name="ios-funnel" class="bg-green" style="color: white;padding: 5px;;margin: 5px;border-radius: 15px;" (tap)="openfilter()"></ion-icon>\n\n            <ion-icon *ngIf="filter == true" name="md-arrow-dropup-circle" class="bg-green" style="color: white;padding: 5px;;margin: 5px" (tap)="openfilter()"></ion-icon>\n\n        </div>\n\n    </ion-item>\n\n    <ion-list style="position: absolute;z-index: 100;min-width: 80%;margin-left: 5px" *ngIf="listshow == true">\n\n        <!--<ion-item no-margin *ngFor="let i of DEFAULT let p=index" (tap)="opendata(p,\'DEFAULT\')">-->\n\n        <!--<p *ngIf="i.NAME">{{i.NAME}}</p>-->\n\n        <!--&lt;!&ndash;<ion-icon name="md-trash" item-end="" small></ion-icon>&ndash;&gt;-->\n\n        <!--</ion-item>-->\n\n        <ion-item no-margin *ngFor="let i of PRIVATE let p=index">\n\n            <p (tap)="opendata(p,\'PRIVATE\')">{{i.NAME}}</p>\n\n            <ion-icon name="md-trash" style="color: #f53d3d" item-end small (tap)="deletewatchlist(i.ID)"></ion-icon>\n\n        </ion-item>\n\n        <ion-item no-margin style="background-color: #939393" (tap)="showPrompt()">\n\n            <p style="color: black">Create New +</p>\n\n        </ion-item>\n\n    </ion-list>\n\n    <div *ngIf="PRIVATE.length > 0 && filter == true" style="position: absolute;z-index: 100;background: white;border: 3px solid #ed3954;width: 100%">\n\n        <ion-label style="margin: 5px;padding: 5px;">Trader Type</ion-label>\n\n        <ion-row style="border-bottom:1px solid #ddd;background: white;margin-left: 5px">\n\n            <ion-col align="center">\n\n                <ion-badge class="vehicle" (tap)="changetrade(1,5)" [ngClass]="{\'active\': traderid == 1}">Intraday</ion-badge>\n\n            </ion-col>\n\n\n\n            <ion-col align="center">\n\n                <ion-badge class="vehicle" (tap)="changetrade(2,15)" [ngClass]="{\'active\': traderid == 2}">BTST</ion-badge>\n\n            </ion-col>\n\n\n\n            <ion-col align="center">\n\n                <ion-badge class="vehicle" (tap)="changetrade(3,60)" [ngClass]="{\'active\': traderid == 3}">Position</ion-badge>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-label style="margin: 5px;padding: 5px;">Trade Type</ion-label>\n\n        <ion-row style="height: fit-content;background: white;">\n\n            <ion-col align="center" *ngFor="let i of Traderarray let idx = index">\n\n                <ion-badge class="vehicle" (tap)="changetrader(idx)" [ngClass]="{\'active\': i.select == true}">{{i.title}}</ion-badge>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <div align="end">\n\n            <button ion-button style="height: 27px;margin: 10px;border-radius: 5px;" (click)="updatedata()">Update</button>\n\n        </div>\n\n    </div>\n\n\n\n    <ion-row style="border-bottom:1px solid #ddd;background: white;" *ngIf="PRIVATE.length > 0">\n\n        <ion-col align="center">\n\n            <ion-badge class="vehicle" (tap)="changecall(1)" [ngClass]="{\'active\': callid == 1}">Active</ion-badge>\n\n        </ion-col>\n\n\n\n        <ion-col align="center">\n\n            <ion-badge class="vehicle" (tap)="changecall(2)" [ngClass]="{\'active\': callid == 2}">Close</ion-badge>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-item no-lines no-margin>\n\n        <ion-searchbar style="padding: 0px;" (ionInput)="getItems($event)" [(ngModel)]="searchtxt"></ion-searchbar>\n\n    </ion-item>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <!--AUTO ADVISORY-->\n\n\n\n    <ion-list style="margin-top: 15%" *ngIf="PRIVATE.length > 0" (tap)="commenclick()">\n\n        <div>\n\n            <ion-list *ngFor="let i of DATALIST">\n\n                <!--(tap)="openlivechart()"-->\n\n                <ion-card style="margin: 10px;box-shadow:rgba(46, 125, 50, 0.5) 0px 0px 2px 6px, rgba(46, 125, 50, 0.2) 0px 22px 15px 4px, rgba(48, 125, 50, 0.2) 5px 5px 5px 5px" *ngIf="i.BUY_SELL != \'Sell\'" (click)="chartSelected(\'LIVE\',10,i)">\n\n                    <h4 style="color: #040063;font-size: 1.8rem;padding: 5px;">{{i.SYMBOL}}<span style="font-size: 13px;padding: 10px;font-weight: bold">{{i.TRADE_TYPE}}</span>\n\n                        <span style="float: right;">\n\n                                    <button ion-button small color="danger" class="sell-button" *ngIf="i.BUY_SELL !=\'Buy\'">{{i.BUY_SELL}}</button>\n\n\n\n                                    <button ion-button small color="secondary" *ngIf="i.BUY_SELL==\'Buy\'" class="sell-button">{{i.BUY_SELL}}</button>\n\n\n\n                                    </span>\n\n                    </h4>\n\n                    <!--<h4 style="color: #040063;font-size: 1.5rem;padding: 5px;">{{i.SYMBOL}}</h4>-->\n\n                    <ion-row>\n\n                        <ion-col col-4>\n\n                            <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;margin: 0px;">Init. Price</p>\n\n                            <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;margin: 0px;">Target 1</p>\n\n                            <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;margin: 0px;">Target 2</p>\n\n                            <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;margin: 0px;">Target 3</p>\n\n                            <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;margin: 0px;">Stop Loss</p>\n\n                        </ion-col>\n\n                        <ion-col col-8 style="padding: 0px;">\n\n                            <p style="font-size: 12px;color: #040063;padding: 0px;border-radius: 4px;width: fit-content;">{{i.INIT}}</p>\n\n                            <p style="font-size: 12px;color: #040063;padding: 0px;border-radius: 4px;width: fit-content;" *ngIf="i.TGT1_HIT == \'None\' || i.TGT1_HIT == \'\'">{{i.TGT1 || \'\'}}</p>\n\n                            <p style="font-size: 12px;" *ngIf="i.TGT1_HIT == \'Hit\'"><span\n\n                                    style="color: #040063;padding: 0px;border-radius: 4px;width: fit-content; background-color: #19b330;color: #040063;">{{i.TGT1 || \'\'}}</span><span\n\n                                    style="font-size: 12px;font-weight: bold;padding: 0px;margin-left: 15px;">{{i.TGT1_DATETIME}}</span></p>\n\n                            <p style="font-size: 12px;color: #040063;padding: 0px;border-radius: 4px;width: fit-content;" *ngIf="i.TGT2_HIT == \'None\' || i.TGT2_HIT == \'\'">{{i.TGT2 || \'\'}}</p>\n\n                            <p style="font-size: 12px;" *ngIf="i.TGT2_HIT == \'Hit\'"><span\n\n                                    style="color: #040063;padding: 0px;border-radius: 4px;width: fit-content; background-color: #19b330;color: #040063;">{{i.TGT2 || \'\'}} </span><span\n\n                                    style="font-size: 12px;font-weight: bold;padding: 0px;margin-left: 15px;">{{i.TGT2_DATETIME}}</span></p>\n\n                            <p style="font-size: 12px;color: #040063;padding: 0px;border-radius: 4px;width: fit-content;" *ngIf="i.TGT3_HIT == \'None\' || i.TGT3_HIT == \'\'">{{i.TGT3 || \'\'}}</p>\n\n                            <p style="font-size: 12px;" *ngIf="i.TGT3_HIT == \'Hit\'"><span\n\n                                    style="color: #040063;padding: 0px;border-radius: 4px;width: fit-content; background-color: #19b330;color: #040063;">{{i.TGT3 || \'\'}} </span><span\n\n                                    style="font-size: 12px;font-weight: bold;padding: 5px;margin-left: 15px;">{{i.TGT3_DATETIME}}</span></p>\n\n                            <p style="font-size: 12px;color: #040063;padding: 0px;border-radius: 4px;width: fit-content;" *ngIf="i.TSL_HIT == \'None\' || i.TSL_HIT == \'\'">{{i.TSL || \'\'}}</p>\n\n                            <p style="font-size: 12px;" *ngIf="i.TSL_HIT == \'Hit\'"><span style="color: #ffffff;padding: 0px;border-radius: 4px;width: fit-content; background-color: #f53d3d;">{{i.TSL || \'\'}} </span><span\n\n                                    style="font-size: 12px;font-weight: bold;padding: 0px;margin-left: 15px;">{{i.TSL_DATETIME}}</span></p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <div align="end">\n\n                        <p style="color: #8b8b8b;padding: 3px;font-size: 12px;">{{i.INIT_DATETIME}}</p>\n\n                    </div>\n\n                </ion-card>\n\n\n\n                <ion-card style="margin: 10px;box-shadow:rgba(244,67,54,0.5) 0px 0px 2px 6px, rgba(244,67,54,0.2) 0px 22px 15px 4px, rgba(244,67,54,0.2) 5px 5px 5px 5px" *ngIf="i.BUY_SELL == \'Sell\'" (click)="chartSelected(\'LIVE\',10,i)">\n\n                    <h4 style="color: #040063;font-size: 1.8rem;padding: 5px;">{{i.SYMBOL}}<span style="font-size: 13px;padding: 10px;font-weight: bold">{{i.TRADE_TYPE}}</span>\n\n                        <span style="float: right;">\n\n                                    <button ion-button small color="danger" class="sell-button" *ngIf="i.BUY_SELL !=\'Buy\'">{{i.BUY_SELL}}</button>\n\n\n\n                                    <button ion-button small color="secondary" *ngIf="i.BUY_SELL==\'Buy\'" class="sell-button">{{i.BUY_SELL}}</button>\n\n\n\n                                    </span>\n\n                    </h4>\n\n                    <!--<h4 style="color: #040063;font-size: 1.5rem;padding: 5px;">{{i.SYMBOL}}</h4>-->\n\n                    <ion-row>\n\n                        <ion-col col-4>\n\n                            <p style="color: #040063;width: fit-content;font-size: 12px;margin: 0px;padding: 0px;">Init. Price</p>\n\n                            <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;margin: 0px;">Target 1</p>\n\n                            <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;margin: 0px;">Target 2</p>\n\n                            <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;margin: 0px;">Target 3</p>\n\n                            <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;margin: 0px;">Stop Loss</p>\n\n                        </ion-col>\n\n                        <ion-col col-8 style="padding: 0px;">\n\n                            <p style="font-size: 12px;color: #040063;padding: 0px;border-radius: 4px;width: fit-content;">{{i.INIT}}</p>\n\n                            <p style="font-size: 12px;color: #040063;padding: 0px;border-radius: 4px;width: fit-content;" *ngIf="i.TGT1_HIT == \'None\' || i.TGT1_HIT == \'\'">{{i.TGT1 || \'\'}}</p>\n\n                            <p style="font-size: 12px; " *ngIf="i.TGT1_HIT == \'Hit\'"><span\n\n                                    style="color: #040063;padding: 0px;border-radius: 4px;width: fit-content; background-color: #19b330;color: #040063;">{{i.TGT1 || \'\'}}</span><span\n\n                                    style="font-size: 12px;font-weight: bold;padding: 0px;margin-left: 15px;">{{i.TGT1_DATETIME}}</span></p>\n\n                            <p style="font-size: 12px;color: #040063;padding: 0px;border-radius: 4px;width: fit-content;" *ngIf="i.TGT2_HIT == \'None\' || i.TGT2_HIT == \'\'">{{i.TGT2 || \'\'}}</p>\n\n                            <p style="font-size: 12px;" *ngIf="i.TGT2_HIT == \'Hit\'"><span\n\n                                    style="color: #040063;padding: 0px;border-radius: 4px;width: fit-content; background-color: #19b330;color: #040063;">{{i.TGT2 || \'\'}} </span><span\n\n                                    style="font-size: 12px;font-weight: bold;padding: 0px;margin-left: 15px;">{{i.TGT2_DATETIME}}</span></p>\n\n                            <p style="font-size: 12px;color: #040063;padding: 0px;border-radius: 4px;width: fit-content;" *ngIf="i.TGT3_HIT == \'None\' || i.TGT3_HIT == \'\'">{{i.TGT3 || \'\'}}</p>\n\n                            <p style="font-size: 12px;" *ngIf="i.TGT3_HIT == \'Hit\'"><span\n\n                                    style="color: #040063;padding: 0px;border-radius: 4px;width: fit-content; background-color: #19b330;color: #040063;">{{i.TGT3 || \'\'}} </span><span\n\n                                    style="font-size: 12px;font-weight: bold;padding: 0px;margin-left: 15px;">{{i.TGT3_DATETIME}}</span></p>\n\n                            <p style="font-size: 12px;color: #040063;padding: 0px;border-radius: 4px;width: fit-content;" *ngIf="i.TSL_HIT == \'None\' || i.TSL_HIT == \'\'">{{i.TSL || \'\'}}</p>\n\n                            <p style="font-size: 12px;" *ngIf="i.TSL_HIT == \'Hit\'"><span style="color: #ffffff;padding: 0px;border-radius: 4px;width: fit-content; background-color: #f53d3d;">{{i.TSL || \'\'}} </span><span\n\n                                    style="font-size: 12px;font-weight: bold;padding: 0px;margin-left: 15px;">{{i.TSL_DATETIME}}</span></p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <div align="end">\n\n                        <p style="color: #8b8b8b;padding: 3px;font-size: 12px;">{{i.INIT_DATETIME}}</p>\n\n                    </div>\n\n                </ion-card>\n\n\n\n            </ion-list>\n\n        </div>\n\n    </ion-list>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\autoadvisory\autoadvisory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_screenshot__["a" /* Screenshot */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AutoadvisoryPage);
    return AutoadvisoryPage;
}());

//# sourceMappingURL=autoadvisory.js.map

/***/ })

});
//# sourceMappingURL=48.js.map