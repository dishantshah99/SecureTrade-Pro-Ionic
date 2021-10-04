webpackJsonp([40],{

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsPageModule", function() { return ChartsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charts__ = __webpack_require__(494);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChartsPageModule = /** @class */ (function () {
    function ChartsPageModule() {
    }
    ChartsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__charts__["a" /* ChartsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__charts__["a" /* ChartsPage */]),
            ],
        })
    ], ChartsPageModule);
    return ChartsPageModule;
}());

//# sourceMappingURL=charts.module.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screenshot__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_toast__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChartsPage = /** @class */ (function () {
    function ChartsPage(navCtrl, navParams, loadingCtrl, http, api, modal, socialSharing, screenshot, platform, toastCtrl, toast, imageViewerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.api = api;
        this.modal = modal;
        this.socialSharing = socialSharing;
        this.screenshot = screenshot;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.toast = toast;
        this.imageViewerCtrl = imageViewerCtrl;
        this.title = "Search";
        this.state = false;
        this.refreshhide = true;
        this.selectedtimeLIVE = "5";
        this.selectedtimeMESSAGE = "5";
        this.messagenewitem = [];
        this.messagesearchitem = [];
        this.MESSAGETOLIVE = 0;
        this.MESSAGE_VAL = 0;
        this.showingicon = true;
        this.showingspinner = false;
        this.number = navParams.data.number;
        this.type = navParams.data.type;
        this.title2 = navParams.data.title;
        this.selected = navParams.data.selected;
        console.log(navParams.data);
        // let backAction = platform.registerBackButtonAction(() => {
        //     console.log("second");
        //     // this.presentToast("BACK button pass")
        //     this.navCtrl.pop();
        //     backAction();
        // }, 2);
        // this.platform.ready().then(() => {
        //
        //     this.platform.registerBackButtonAction(() => {
        //         navigator['app'].exitApp();
        //     });
        // });
    }
    ChartsPage.prototype.clicksync = function () {
        var _this = this;
        console.log("Enter if in click");
        this.showingicon = false;
        this.showingspinner = true;
        this.clicknow();
        setTimeout(function (x) {
            // this.showingicon = true
            _this.showingicon = true;
            _this.showingspinner = false;
        }, 5000);
    };
    ChartsPage.prototype.openwatchlistclick = function () {
        this.navCtrl.push('WatchlistPage');
    };
    ChartsPage.prototype.openwatchlistclick2 = function () {
        this.navCtrl.push('WatchlistPage');
        // this.navCtrl.push('ProductlistPage')
    };
    ChartsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function (data) {
            console.log("MESSAGE", _this.MESSAGETOLIVE);
            if (_this.MESSAGETOLIVE == 1) {
                _this.type = 0;
                _this.navParams.data.type = 0;
                _this.MESSAGETOLIVE = 0;
                if (_this.selectedtime == '5') {
                    _this.selectedtime = '5';
                    _this.selectedtimeLIVE = '5';
                }
            }
            else {
                _this.navCtrl.pop();
            }
        });
        this.navBar.backButtonClick = function (e) {
            if (_this.MESSAGETOLIVE == 1) {
                _this.type = 0;
                _this.navParams.data.type = 0;
                _this.MESSAGETOLIVE = 0;
                if (_this.selectedtime == '5') {
                    _this.selectedtime = '5';
                    _this.selectedtimeLIVE = '5';
                }
            }
            else {
                _this.navCtrl.pop();
            }
        };
        console.log("number", this.number);
        if (this.number == 1) {
            if (this.api.NSECASH_TYPE == "0") {
                this.refreshhide = false;
                this.clear_Interval();
            }
        }
        else if (this.number == 2) {
            if (this.api.FO_TYPE == "0") {
                this.refreshhide = false;
                this.clear_Interval();
            }
        }
        else if (this.number == 3) {
            if (this.api.MCX_TYPE == "0") {
                this.refreshhide = false;
                this.clear_Interval();
            }
        }
        if (this.type == 0) {
            this.selectedtime = this.selectedtimeMESSAGE;
            this.Setmessageboarddata();
            this.setautorefresh();
        }
        else if (this.type == 1) {
            //live eod call
        }
        else if (this.type == 10) {
            this.selectedtimeLIVE = this.navParams.data.time;
            this.openlivechart2(this.navParams.data.DATA);
        }
        else {
            this.selectedtime = this.selectedtimeLIVE;
        }
        // this.platform.registerBackButtonAction((data) => {
        //     // this.navCtrl.setRoot('TabsPage');
        //     this.navCtrl.pop();
        // });
        // this.navBar.backButtonClick = (e: UIEvent) => {
        //     this.navCtrl.pop();
        // };
    };
    ChartsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 1000,
            position: 'bottom',
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ChartsPage.prototype.selecttime = function (time) {
        clearInterval(this.timer);
        this.selectedtimeLIVE = time;
        this.selectedtimeMESSAGE = time;
        this.selectedtime = time;
        this.setautorefresh();
        this.clicknowmanual();
    };
    ChartsPage.prototype.selecttime2 = function (time) {
        clearInterval(this.timer);
        this.selectedtimeLIVE = time;
        this.selectedtimeMESSAGE = time;
        this.selectedtime = time;
        this.setautorefresh();
        // this.clicknowmanual()
        this.Setmessageboarddata();
    };
    ChartsPage.prototype.getItems = function (ev) {
        var val;
        console.log(ev);
        if (ev.data != null) {
            val = ev.target.value.trim();
        }
        else {
            val = "";
            this.messagenewitem = this.messageitem.data;
            for (var i = 0; i < 15; i++) {
                this.messagenewitem.push(this.messageitem.data[i]);
                this.message_position = i;
                this.MESSAGE_VAL = 0;
            }
        }
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.messagesearchitem = this.messageitem.data.filter(function (item) {
                return (item.SYMBOL.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            if (this.messagesearchitem.length > 0) {
                this.messagenewitem = [];
                for (var i = 0; i < 15; i++) {
                    if (this.messagesearchitem[i]) {
                        this.messagenewitem.push(this.messagesearchitem[i]);
                        this.MESSAGE_VAL = 1;
                    }
                }
            }
        }
    };
    //visible = false;
    ChartsPage.prototype.openModal = function () {
        var _this = this;
        //this.visible = !this.visible;
        var myModalOption = {
            enableBackdropDismiss: false
        };
        var myModalData = { CHART_TYPE: this.navParams.data };
        var myModal = this.modal.create('DdlModalPage', myModalData, myModalOption);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            //I have dismissed
            console.log("I have dismissed", data);
            if (data != undefined) {
                // this.imageOrgUrl = "null";
                // this.imageUrl = "null";
                // let time = new Date();
                // let timeStamp = time.getTime();
                if (data.TYPE.CHART_TYPE.type == 0) {
                    //Message Board
                    // if (data.TYPE.CHART_TYPE.selected == 'LIVE') {
                    //     this.imageOrgUrl = data.SELECTED.LIVE_URL;
                    //     this.title = data.SELECTED.COMPANY_NAME;
                    //     this.imageUrl = "http://173.212.232.11:25125/csv/MB" + this.selectedtime + ".csv";
                    //
                    // } else if (data.TYPE.CHART_TYPE.selected == 'EOD') {
                    //     this.imageOrgUrl = data.SELECTED.EOD_MSG_URL;
                    //     this.title = data.SELECTED.EOD_NAME;
                    //
                    //     this.imageUrl = "http://173.212.232.11:25125/csv/MB05.csv";
                    // }
                    //
                    // // this.imageUrl = this.imageOrgUrl + "csv/MB" + this.selectedtime + ".csv";
                    //
                    // console.log("imageOrgUrl", this.imageOrgUrl);
                    // console.log("imageUrl", this.imageUrl);
                    //
                    // this.getmessageboarddata(this.imageUrl)
                }
                else if (data.TYPE.CHART_TYPE.type == 1) {
                    //Live Chart
                    if (data.TYPE.CHART_TYPE.selected == 'LIVE') {
                        _this.imageOrgUrl = data.SELECTED.LIVE_URL;
                        _this.title = data.SELECTED.COMPANY_NAME;
                    }
                    else if (data.TYPE.CHART_TYPE.selected == 'EOD') {
                        _this.imageOrgUrl = data.SELECTED.EOD_LIVECHART_URL;
                        _this.title = data.SELECTED.EOD_NAME;
                    }
                    _this.clicknow();
                    _this.clicknow();
                    // this.imageUrl = this.imageOrgUrl + this.selectedtime + "M/" + this.title + this.api.LIVECHARTIMAGEEXT + "?t=" + timeStamp;
                    // console.log("imageOrgUrl", this.imageOrgUrl);
                    // console.log("imageUrl", this.imageUrl);
                }
                else if (data.TYPE.CHART_TYPE.type == 2) {
                    //Auto Advisory
                }
                else if (data.TYPE.CHART_TYPE.type == 3) {
                    //Algo Live Chart
                    if (data.TYPE.CHART_TYPE.selected == 'LIVE') {
                        _this.imageOrgUrl = data.SELECTED.ALGO_CHART_URL;
                        _this.title = data.SELECTED.COMPANY_NAME;
                    }
                    _this.clicknow();
                    _this.clicknow();
                    // this.imageUrl = this.imageOrgUrl + this.title + this.api.ALGOCHARTIMAGEEXT + "?t=" + timeStamp;
                    // console.log("imageOrgUrl", this.imageOrgUrl);
                    // console.log("imageUrl", this.imageUrl);
                }
                _this.setautorefresh();
            }
            else {
                _this.MESSAGETOLIVE = 0;
            }
        });
        myModal.onWillDismiss(function (data) {
            //I am about to dismiss
            // console.log("I am about to dismiss", data);
        });
    };
    ChartsPage.prototype.set_Interval = function (time) {
        var _this = this;
        this.timer = this.interval = setInterval(function () {
            _this.clicknow();
        }, time);
    };
    ChartsPage.prototype.clear_Interval = function () {
        clearInterval(this.timer);
        // this.imageUrl = "";
        console.log("Clear interval");
    };
    ChartsPage.prototype.clicknow = function () {
        if (this.imageOrgUrl != undefined) {
            var time = new Date();
            var timeStamp = time.getTime();
            if (this.type == 0) {
                this.Setmessageboarddata();
            }
            else if (this.type == 1) {
                if (this.selected == 'EOD') {
                    this.imageUrl = this.imageOrgUrl + "STEOD/" + this.title + this.api.LIVECHARTIMAGEEXT + "?t=" + timeStamp;
                }
                else {
                    this.imageUrl = this.imageOrgUrl + "ST" + this.selectedtimeLIVE + "M/" + this.title + this.api.LIVECHARTIMAGEEXT + "?t=" + timeStamp;
                }
            }
            else if (this.type == 10) {
                if (this.selected == 'EOD') {
                    this.imageUrl = this.imageOrgUrl + "STEOD/" + this.title + this.api.LIVECHARTIMAGEEXT + "?t=" + timeStamp;
                }
                else {
                    this.imageUrl = this.imageOrgUrl + "ST" + this.selectedtimeLIVE + "M/" + this.title + this.api.LIVECHARTIMAGEEXT + "?t=" + timeStamp;
                }
            }
            else if (this.type == 2) {
            }
            else if (this.type == 3) {
                this.imageUrl = this.imageOrgUrl + "ST5M/" + this.title + this.api.ALGOCHARTIMAGEEXT + "?t=" + timeStamp;
            }
            console.log("image url", this.imageUrl);
            console.log("Click refresh");
        }
        else {
            console.log("Click refresh");
        }
    };
    ChartsPage.prototype.clicknowmanual = function () {
        var _this = this;
        this.api.Startloader();
        this.clicknow();
        setTimeout(function (data) {
            _this.api.Stoploader();
        }, 1000);
    };
    ChartsPage.prototype.shareScreenshot = function () {
        this.api.SharescrrenshotContent(this.screenshot, this.socialSharing, this.screen, this.api.playstorelink);
    };
    ChartsPage.prototype.seting = function () {
        this.navCtrl.push('SettingPage');
    };
    ChartsPage.prototype.shareInfo = function () {
        var _this = this;
        this.screenshot.URI().then(function (res) {
            _this.socialSharing.share("Secure Trade", "Demo subject", "", "https://play.google.com/store/apps/details?id=&hl=en%22").then(function () {
            });
        });
    };
    ChartsPage.prototype.ionViewWillLeave = function () {
        this.clear_Interval();
        console.log("This is back");
    };
    ChartsPage.prototype.presentImage = function (myImage) {
        this.imageViewer = this.imageViewerCtrl.create(myImage, { enableBackdropDismiss: true });
        this.imageViewer.present();
    };
    ChartsPage.prototype.openlivechart = function (data) {
        console.log("Messageboard chart", data);
        console.log("current this.navParams.data", this.navParams.data);
        //Live Chart
        if (this.api.LIVE_CHART_PURCHSE == false) {
            this.navCtrl.push('SubscribeplanPage', '1');
        }
        else {
            if (this.selectedtime == '5') {
                this.selectedtime = '5';
                this.selectedtimeLIVE = '5';
            }
            if (this.navParams.data.selected == "LIVE") {
                if (this.selectedtime == '1' || this.selectedtime == '3') {
                    this.toast.show("01 min and 03 min Live chart not available", '2000', 'center').subscribe(function (toast) {
                        console.log(toast);
                    });
                    // this.presentToast("01 min and 03 min Live chart not available")
                }
                else {
                    if (this.navParams.data.number == 1) {
                        var NSECASH = void 0;
                        NSECASH = JSON.parse(localStorage.getItem("NSECASH"));
                        if (NSECASH.length > 0) {
                            for (var i = 0; i < NSECASH.length; i++) {
                                if (data.SYMBOL == NSECASH[i].COMPANY_NAME) {
                                    this.imageOrgUrl = NSECASH[i].LIVE_URL;
                                    this.title = NSECASH[i].COMPANY_NAME;
                                }
                            }
                            this.type = 1;
                            this.navParams.data.type = 1;
                            this.MESSAGETOLIVE = 1;
                            this.clicknow();
                            this.clicknow();
                        }
                    }
                    else if (this.navParams.data.number == 2) {
                        var NSEFO = void 0;
                        NSEFO = JSON.parse(localStorage.getItem("NSEFO"));
                        if (NSEFO.length > 0) {
                            for (var i = 0; i < NSEFO.length; i++) {
                                if (data.SYMBOL == NSEFO[i].COMPANY_NAME) {
                                    this.imageOrgUrl = NSEFO[i].LIVE_URL;
                                    this.title = NSEFO[i].COMPANY_NAME;
                                }
                            }
                            this.type = 1;
                            this.navParams.data.type = 1;
                            this.MESSAGETOLIVE = 1;
                            this.clicknow();
                            this.clicknow();
                        }
                    }
                    else if (this.navParams.data.number == 3) {
                        var MCX = void 0;
                        MCX = JSON.parse(localStorage.getItem("MCX"));
                        if (MCX.length > 0) {
                            for (var i = 0; i < MCX.length; i++) {
                                if (data.SYMBOL == MCX[i].COMPANY_NAME) {
                                    this.imageOrgUrl = MCX[i].LIVE_URL;
                                    this.title = MCX[i].COMPANY_NAME;
                                }
                            }
                            this.type = 1;
                            this.navParams.data.type = 1;
                            this.MESSAGETOLIVE = 1;
                            this.clicknow();
                            this.clicknow();
                        }
                    }
                }
            }
            else {
                if (this.navParams.data.number == 1) {
                    var NSECASH = void 0;
                    NSECASH = JSON.parse(localStorage.getItem("NSECASH"));
                    if (NSECASH.length > 0) {
                        for (var i = 0; i < NSECASH.length; i++) {
                            if (data.SYMBOL == NSECASH[i].EOD_NAME) {
                                this.imageOrgUrl = NSECASH[i].EOD_LIVECHART_URL;
                                this.title = NSECASH[i].EOD_NAME;
                            }
                        }
                        this.type = 1;
                        this.navParams.data.type = 1;
                        this.MESSAGETOLIVE = 1;
                        this.clicknow();
                        this.clicknow();
                    }
                }
                else if (this.navParams.data.number == 2) {
                    var NSEFO = void 0;
                    NSEFO = JSON.parse(localStorage.getItem("NSEFO"));
                    if (NSEFO.length > 0) {
                        for (var i = 0; i < NSEFO.length; i++) {
                            if (data.SYMBOL == NSEFO[i].EOD_NAME) {
                                this.imageOrgUrl = NSEFO[i].EOD_LIVECHART_URL;
                                this.title = NSEFO[i].EOD_NAME;
                            }
                        }
                        this.type = 1;
                        this.navParams.data.type = 1;
                        this.MESSAGETOLIVE = 1;
                        this.clicknow();
                        this.clicknow();
                    }
                }
                else if (this.navParams.data.number == 3) {
                    var MCX = void 0;
                    MCX = JSON.parse(localStorage.getItem("MCX"));
                    if (MCX.length > 0) {
                        for (var i = 0; i < MCX.length; i++) {
                            if (data.SYMBOL == MCX[i].EOD_NAME) {
                                this.imageOrgUrl = MCX[i].EOD_LIVECHART_URL;
                                this.title = MCX[i].EOD_NAME;
                            }
                        }
                        this.type = 1;
                        this.navParams.data.type = 1;
                        this.MESSAGETOLIVE = 1;
                        this.clicknow();
                        this.clicknow();
                    }
                }
            }
        }
    };
    ChartsPage.prototype.openlivechart2 = function (data) {
        console.log("Auto advisory chart", data);
        console.log("current this.navParams.data", this.navParams.data);
        //Live Chart
        if (this.api.LIVE_CHART_PURCHSE == false) {
            this.navCtrl.push('SubscribeplanPage', '1');
        }
        else {
            if (this.selectedtime == '5') {
                this.selectedtime = '5';
                this.selectedtimeLIVE = '5';
            }
            if (this.navParams.data.selected == "LIVE") {
                if (this.selectedtime == '1' || this.selectedtime == '3') {
                    this.presentToast("01 min and 03 min Live chart not available");
                }
                else {
                    if (this.navParams.data.number == 1) {
                        var NSECASH = void 0;
                        NSECASH = JSON.parse(localStorage.getItem("NSECASH"));
                        if (NSECASH.length > 0) {
                            for (var i = 0; i < NSECASH.length; i++) {
                                if (data.SYMBOL == NSECASH[i].COMPANY_NAME) {
                                    this.imageOrgUrl = NSECASH[i].LIVE_URL;
                                    this.title = NSECASH[i].COMPANY_NAME;
                                }
                            }
                            this.type = 1;
                            this.navParams.data.type = 1;
                            this.clicknow();
                            this.clicknow();
                        }
                    }
                    else if (this.navParams.data.number == 2) {
                        var NSEFO = void 0;
                        NSEFO = JSON.parse(localStorage.getItem("NSEFO"));
                        if (NSEFO.length > 0) {
                            for (var i = 0; i < NSEFO.length; i++) {
                                if (data.SYMBOL == NSEFO[i].COMPANY_NAME) {
                                    this.imageOrgUrl = NSEFO[i].LIVE_URL;
                                    this.title = NSEFO[i].COMPANY_NAME;
                                }
                            }
                            this.type = 1;
                            this.navParams.data.type = 1;
                            this.clicknow();
                            this.clicknow();
                        }
                    }
                    else if (this.navParams.data.number == 3) {
                        var MCX = void 0;
                        MCX = JSON.parse(localStorage.getItem("MCX"));
                        if (MCX.length > 0) {
                            for (var i = 0; i < MCX.length; i++) {
                                if (data.SYMBOL == MCX[i].COMPANY_NAME) {
                                    this.imageOrgUrl = MCX[i].LIVE_URL;
                                    this.title = MCX[i].COMPANY_NAME;
                                }
                            }
                            this.type = 1;
                            this.navParams.data.type = 1;
                            this.clicknow();
                            this.clicknow();
                        }
                    }
                }
            }
            else {
                if (this.navParams.data.number == 1) {
                    var NSECASH = void 0;
                    NSECASH = JSON.parse(localStorage.getItem("NSECASH"));
                    if (NSECASH.length > 0) {
                        for (var i = 0; i < NSECASH.length; i++) {
                            if (data.SYMBOL == NSECASH[i].EOD_NAME) {
                                this.imageOrgUrl = NSECASH[i].EOD_LIVECHART_URL;
                                this.title = NSECASH[i].EOD_NAME;
                            }
                        }
                        this.type = 1;
                        this.navParams.data.type = 1;
                        this.MESSAGETOLIVE = 1;
                        this.clicknow();
                        this.clicknow();
                    }
                }
                else if (this.navParams.data.number == 2) {
                    var NSEFO = void 0;
                    NSEFO = JSON.parse(localStorage.getItem("NSEFO"));
                    if (NSEFO.length > 0) {
                        for (var i = 0; i < NSEFO.length; i++) {
                            if (data.SYMBOL == NSEFO[i].EOD_NAME) {
                                this.imageOrgUrl = NSEFO[i].EOD_LIVECHART_URL;
                                this.title = NSEFO[i].EOD_NAME;
                            }
                        }
                        this.type = 1;
                        this.navParams.data.type = 1;
                        this.MESSAGETOLIVE = 1;
                        this.clicknow();
                        this.clicknow();
                    }
                }
                else if (this.navParams.data.number == 3) {
                    var MCX = void 0;
                    MCX = JSON.parse(localStorage.getItem("MCX"));
                    if (MCX.length > 0) {
                        for (var i = 0; i < MCX.length; i++) {
                            if (data.SYMBOL == MCX[i].EOD_NAME) {
                                this.imageOrgUrl = MCX[i].EOD_LIVECHART_URL;
                                this.title = MCX[i].EOD_NAME;
                            }
                        }
                        this.type = 1;
                        this.navParams.data.type = 1;
                        this.MESSAGETOLIVE = 1;
                        this.clicknow();
                        this.clicknow();
                    }
                }
            }
        }
    };
    ChartsPage.prototype.getmessageboarddata = function (URL) {
        var _this = this;
        this.api.GETMESSAGE_BOARDDATA(URL).then(function (data) {
            console.log("MB data", data);
            _this.messagedata = data;
            var data_split = _this.messagedata.trim().split("\n");
            // this.messageitem = [];
            for (var k = 1; k < data_split.length; k++) {
                var split_comma = data_split[k].split(",");
                console.log("data_split", data_split);
                console.log("split_comma", split_comma);
                if (_this.navParams.data.selected == "LIVE") {
                    if (_this.navParams.data.number == 1) {
                        var NSECASH = void 0;
                        NSECASH = JSON.parse(localStorage.getItem("NSECASH"));
                        if (NSECASH.length > 0) {
                            for (var i = 0; i < NSECASH.length; i++) {
                                if (split_comma[0] == NSECASH[i].COMPANY_NAME) {
                                    var array = {
                                        Ticker: split_comma[0],
                                        Date: split_comma[1],
                                        Buy: split_comma[2],
                                        Short: split_comma[3],
                                        TGT1: split_comma[4],
                                        TGT2: split_comma[5],
                                        TGT3: split_comma[6],
                                        TSL: split_comma[7],
                                        CLASS: ""
                                    };
                                    _this.messageitem.push(array);
                                }
                            }
                        }
                    }
                    else if (_this.navParams.data.number == 2) {
                        var NSEFO = void 0;
                        NSEFO = JSON.parse(localStorage.getItem("NSEFO"));
                        if (NSEFO.length > 0) {
                            for (var i = 0; i < NSEFO.length; i++) {
                                if (split_comma[0] == NSEFO[i].COMPANY_NAME) {
                                    var array = {
                                        Ticker: split_comma[0],
                                        Date: split_comma[1],
                                        Buy: split_comma[2],
                                        Short: split_comma[3],
                                        TGT1: split_comma[4],
                                        TGT2: split_comma[5],
                                        TGT3: split_comma[6],
                                        TSL: split_comma[7],
                                        CLASS: ""
                                    };
                                    _this.messageitem.push(array);
                                }
                            }
                        }
                    }
                    else if (_this.navParams.data.number == 3) {
                        var MCX = void 0;
                        MCX = JSON.parse(localStorage.getItem("MCX"));
                        if (MCX.length > 0) {
                            for (var i = 0; i < MCX.length; i++) {
                                if (split_comma[0] == MCX[i].COMPANY_NAME) {
                                    var array = {
                                        Ticker: split_comma[0],
                                        Date: split_comma[1],
                                        Buy: split_comma[2],
                                        Short: split_comma[3],
                                        TGT1: split_comma[4],
                                        TGT2: split_comma[5],
                                        TGT3: split_comma[6],
                                        TSL: split_comma[7],
                                        CLASS: ""
                                    };
                                    _this.messageitem.push(array);
                                }
                            }
                        }
                    }
                }
                else {
                    if (_this.navParams.data.number == 1) {
                        var NSECASH = void 0;
                        NSECASH = JSON.parse(localStorage.getItem("NSECASH"));
                        if (NSECASH.length > 0) {
                            for (var i = 0; i < NSECASH.length; i++) {
                                if (split_comma[0] == NSECASH[i].EOD_NAME) {
                                    var array = {
                                        Ticker: split_comma[0],
                                        Date: split_comma[1],
                                        Buy: split_comma[2],
                                        Short: split_comma[3],
                                        TGT1: split_comma[4],
                                        TGT2: split_comma[5],
                                        TGT3: split_comma[6],
                                        TSL: split_comma[7],
                                        CLASS: ""
                                    };
                                    _this.messageitem.push(array);
                                }
                            }
                        }
                    }
                    else if (_this.navParams.data.number == 2) {
                        var NSEFO = void 0;
                        NSEFO = JSON.parse(localStorage.getItem("NSEFO"));
                        if (NSEFO.length > 0) {
                            for (var i = 0; i < NSEFO.length; i++) {
                                if (split_comma[0] == NSEFO[i].EOD_NAME) {
                                    var array = {
                                        Ticker: split_comma[0],
                                        Date: split_comma[1],
                                        Buy: split_comma[2],
                                        Short: split_comma[3],
                                        TGT1: split_comma[4],
                                        TGT2: split_comma[5],
                                        TGT3: split_comma[6],
                                        TSL: split_comma[7],
                                        CLASS: ""
                                    };
                                    _this.messageitem.push(array);
                                }
                            }
                        }
                    }
                    else if (_this.navParams.data.number == 3) {
                        var MCX = void 0;
                        MCX = JSON.parse(localStorage.getItem("MCX"));
                        if (MCX.length > 0) {
                            for (var i = 0; i < MCX.length; i++) {
                                if (split_comma[0] == MCX[i].EOD_NAME) {
                                    var array = {
                                        Ticker: split_comma[0],
                                        Date: split_comma[1],
                                        Buy: split_comma[2],
                                        Short: split_comma[3],
                                        TGT1: split_comma[4],
                                        TGT2: split_comma[5],
                                        TGT3: split_comma[6],
                                        TSL: split_comma[7],
                                        CLASS: ""
                                    };
                                    _this.messageitem.push(array);
                                }
                            }
                        }
                    }
                }
                _this.messagenewitem = _this.messageitem;
                console.log("final array :", _this.messageitem);
            }
        }).catch(function (err) {
        });
    };
    ChartsPage.prototype.Setmessageboarddata = function () {
        this.messageitem = [];
        this.URLS = JSON.parse(localStorage.getItem("URLS"));
        if (this.navParams.data.selected == 'LIVE') {
            if (this.number == 1) {
                this.callmessageboardapi('NSECASH', 0, this.selectedtime);
                // this.imageOrgUrl = this.URLS.MESSAGE_BOARD.URL_NSECASH_LIVE;
                // if (this.imageOrgUrl.length > 0) {
                //     for (let i = 0; i < this.imageOrgUrl.length; i++) {
                //         this.imageUrl = this.imageOrgUrl[i].LIVE_URL + "csv/MB" + this.selectedtime + ".csv";
                //         // this.getmessageboarddata(this.imageUrl);
                //
                //
                //     }
                // }
            }
            else if (this.number == 2) {
                this.callmessageboardapi('NSEFO', 0, this.selectedtime);
                // this.imageOrgUrl = this.URLS.MESSAGE_BOARD.URL_NSEFO_LIVE;
                // if (this.imageOrgUrl.length > 0) {
                //     for (let i = 0; i < this.imageOrgUrl.length; i++) {
                //         this.imageUrl = this.imageOrgUrl[i].LIVE_URL + "csv/MB" + this.selectedtime + ".csv";
                //         // this.getmessageboarddata(this.imageUrl);
                //
                //     }
                // }
            }
            else if (this.number == 3) {
                this.callmessageboardapi('MCX', 0, this.selectedtime);
                // this.imageOrgUrl = this.URLS.MESSAGE_BOARD.URL_MCX_LIVE;
                // if (this.imageOrgUrl.length > 0) {
                //     for (let i = 0; i < this.imageOrgUrl.length; i++) {
                //         this.imageUrl = this.imageOrgUrl[i].LIVE_URL + "csv/MB" + this.selectedtime + ".csv";
                //         // this.getmessageboarddata(this.imageUrl);
                //
                //     }
                // }
            }
        }
        else if (this.navParams.data.selected == 'EOD') {
            if (this.number == 1) {
                this.callmessageboardapi('NSECASH', 1, this.selectedtime);
                // this.imageOrgUrl = this.URLS.MESSAGE_BOARD.URL_NSECASH_EOD;
                // if (this.imageOrgUrl.length > 0) {
                //     for (let i = 0; i < this.imageOrgUrl.length; i++) {
                //         this.imageUrl = this.imageOrgUrl[i].EOD_MSG_URL + "csv/MBDD.csv";
                //         // this.getmessageboarddata(this.imageUrl);
                //
                //     }
                // }
            }
            else if (this.number == 2) {
                this.callmessageboardapi('NSEFO', 1, this.selectedtime);
                // this.imageOrgUrl = this.URLS.MESSAGE_BOARD.URL_NSEFO_EOD;
                // if (this.imageOrgUrl.length > 0) {
                //     for (let i = 0; i < this.imageOrgUrl.length; i++) {
                //         this.imageUrl = this.imageOrgUrl[i].EOD_MSG_URL + "csv/MBDD.csv";
                //         // this.getmessageboarddata(this.imageUrl);
                //
                //     }
                // }
            }
            else if (this.number == 3) {
                this.callmessageboardapi('MCX', 1, this.selectedtime);
                // this.imageOrgUrl = this.URLS.MESSAGE_BOARD.URL_MCX_EOD;
                // if (this.imageOrgUrl.length > 0) {
                //     for (let i = 0; i < this.imageOrgUrl.length; i++) {
                //         this.imageUrl = this.imageOrgUrl[i].EOD_MSG_URL + "csv/MBDD.csv";
                //         // this.getmessageboarddata(this.imageUrl);
                //
                //     }
                // }
            }
        }
    };
    ChartsPage.prototype.setautorefresh = function () {
        if (this.navParams.data.type == 1 || this.navParams.data.type == 0) {
            this.clear_Interval();
            if (this.api.NSECASH_TYPE == "0") {
                // this.imageUrl = this.imageOrgUrl + this.title + ".png" + "?t=" + timeStamp;
                this.set_Interval(this.api.NSECASH_REFRESH_RATE * 1000);
                console.log("NSECASH_REFRESH_RATE", this.api.NSECASH_REFRESH_RATE);
                console.log("imageOrgUrl original", this.imageUrl);
                console.log("NSECASH_TYPE AUTO");
            }
            else {
                //  this.set_Interval(2000);
                console.log("NSECASH_TYPE Manual");
            }
        }
        else if (this.navParams.data.type == 2) {
            this.clear_Interval();
            if (this.api.FO_TYPE == "0") {
                this.set_Interval(this.api.FO_REFRESH_RATE * 1000);
                console.log("FO_TYPE AUTO");
                console.log("FO_REFRESH_RATE", this.api.FO_REFRESH_RATE);
                console.log("imageOrgUrl original", this.imageUrl);
            }
            else {
                //  this.set_Interval(2000);
                console.log("FO_TYPE Manual");
            }
        }
        else if (this.navParams.data.type == 3) {
            this.clear_Interval();
            if (this.api.MCX_TYPE == "0") {
                this.set_Interval(this.api.MCX_REFRESH_RATE * 1000);
                console.log("MCX_TYPE AUTO");
                console.log("MCX_REFRESH_RATE", this.api.MCX_REFRESH_RATE);
                console.log("imageOrgUrl original", this.imageUrl);
            }
            else {
                //  this.set_Interval(2000);
                console.log("MCX_TYPE Manual");
            }
        }
    };
    ChartsPage.prototype.callmessageboardapi = function (SYMBOL_TYPE, TYPE, TIME) {
        var _this = this;
        this.messagenewitem = [];
        this.api.Startloader();
        var data = {
            "SYMBOL_TYPE": SYMBOL_TYPE,
            "TYPE": TYPE,
            "TIME": TIME
        };
        this.api.GETMESSAGE_BOARDDATA2(data).then(function (data) {
            _this.messageitem = data;
            console.log("messageitem", _this.messageitem);
            if (_this.messageitem.status == 200) {
                _this.api.Stoploader();
                for (var i = 0; i < 15; i++) {
                    _this.messagenewitem.push(_this.messageitem.data[i]);
                    _this.message_position = i;
                }
                // console.log(this.messagenewitem);
                // this.messagenewitem = this.messageitem.data;
                console.log("Massageboard NEW data", _this.messagenewitem);
            }
        }).catch(function (err) {
        });
    };
    ChartsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log("position", this.message_position);
        console.log('Begin async operation');
        setTimeout(function () {
            _this.message_position++;
            var cash_count = (_this.message_position + 15);
            for (var i = _this.message_position; i < cash_count; i++) {
                if (_this.MESSAGE_VAL == 1) {
                    if (_this.messagesearchitem[i]) {
                        _this.messagenewitem.push(_this.messagesearchitem[i]);
                        _this.message_position = i;
                    }
                }
                else {
                    if (_this.messageitem.data[i]) {
                        _this.messagenewitem.push(_this.messageitem.data[i]);
                        _this.message_position = i;
                    }
                }
            }
            infiniteScroll.complete();
            console.log("this.messagenewitem", _this.messagenewitem);
            console.log('Async operation has ended');
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Navbar */])
    ], ChartsPage.prototype, "navBar", void 0);
    ChartsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-charts',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\charts\charts.html"*/'<!--\n\n  Generated template for the ChartsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n\n\n        <ion-title>{{title2}}\n\n\n\n        </ion-title>\n\n\n\n        <span style="float: right; color: white" end><ion-icon class="abc" name="md-settings" style="margin-left: 12px;margin-right: 16px;margin-top: 4px;font-weight: bold; font-size: 22px;" (click)="seting()"></ion-icon></span>\n\n\n\n        <span style="float: right; color: white" end><ion-icon name="md-share" style="margin-left: 17px;margin-right: 17px;margin-top: 4px; font-weight: bold; font-size: 22px;" (click)="shareScreenshot()"></ion-icon></span>\n\n\n\n    </ion-navbar>\n\n\n\n    <div>\n\n        <ion-item *ngIf="type == 0" no-lines no-margin>\n\n            <!--<ion-icon item-start style="color: #ed3954" name="ios-apps" item-right></ion-icon>-->\n\n            <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n            <ion-icon style="color: #ed3954;font-weight: bold; alignment: left;" name="md-refresh" item-end (click)="clicknowmanual()" *ngIf="refreshhide"></ion-icon>\n\n        </ion-item>\n\n\n\n        <ion-row style="background-color: white; height: fit-content" *ngIf="type != 0">\n\n\n\n            <ion-col>\n\n\n\n                <ion-label class="select-option" style="background-color: #ffffff;">\n\n\n\n                    <ion-icon style="margin-right: 8px; color: #ed3954" name="ios-apps" item-right></ion-icon>\n\n\n\n                    <span (click)="openModal()" style="width: 68%;display: inline-block;">{{title}}</span>\n\n\n\n                    <span style="float: right;"> <ion-icon (click)="openModal()" Style="color: #ed3954;margin-right: 16px; font-weight: bold;" name="ios-search" item-end></ion-icon>\n\n\n\n               <!-- <ion-icon style="color: #ed3954;margin-right: 16px; font-weight: bold; alignment: left;" name="md-refresh" item-end (click)="clicknow()" *ngIf="refreshhide"></ion-icon>--></span>\n\n\n\n                </ion-label>\n\n\n\n            </ion-col>\n\n\n\n        </ion-row>\n\n\n\n        <ion-item *ngIf="type == 2" style="background-color: #ed3954;height: 25px;" no-margin no-padding no-lines>\n\n            <ion-item no-padding style="background-color: transparent">\n\n                <ion-select interface="popover" style="width: 100%; max-width: 100%;color: white">\n\n                    <ion-option [selected]="true">Watchlist</ion-option>\n\n                    <ion-option>NEFTY50</ion-option>\n\n                    <ion-option>NSE50</ion-option>\n\n                    <ion-option>BSEE50</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <div item-end no-margin no-padding>\n\n                <ion-icon name="add" style="color: white;padding: 5px;margin: 5px" (tap)="openwatchlistclick()"></ion-icon>\n\n                <ion-icon name="create" style="color: white;padding: 5px;;margin: 5px" (tap)="openwatchlistclick2()"></ion-icon>\n\n                <!--<ion-icon name="funnel" style="color: white;padding: 5px;;margin: 5px" (tap)="presentActionSheet()"></ion-icon>-->\n\n                <!--<ion-icon *ngIf="viewmode == true" name="grid" style="color: white;padding: 5px;;margin: 5px" (tap)="changeview()"></ion-icon>-->\n\n                <!--<ion-icon *ngIf="viewmode == false" name="list-box" style="color: white;padding: 5px;;margin: 5px" (tap)="changeview()"></ion-icon>-->\n\n            </div>\n\n        </ion-item>\n\n\n\n        <ion-row style="border-bottom:1px solid #ddd;" *ngIf="type == 2">\n\n            <ion-col align="center">\n\n                <ion-badge style="background-color: #ed3954!important;color:white!important;">Intraday</ion-badge>\n\n            </ion-col>\n\n\n\n            <ion-col align="center">\n\n                <ion-badge>BTST</ion-badge>\n\n            </ion-col>\n\n\n\n            <ion-col align="center">\n\n                <ion-badge>Position</ion-badge>\n\n            </ion-col>\n\n        </ion-row>\n\n        <!--<div style="border-bottom: 1px solid #ddd;margin: 2px 0px;"></div>-->\n\n        <ion-row style="height: fit-content" *ngIf="type == 2">\n\n            <ion-col align="center">\n\n                <ion-badge style="background-color: #ed3954!important;color:white!important;">Bull/Bar Trade</ion-badge>\n\n            </ion-col>\n\n\n\n            <ion-col align="center">\n\n                <ion-badge>Power Bull/Bear Trade</ion-badge>\n\n            </ion-col>\n\n\n\n            <ion-col align="center">\n\n                <ion-badge style="background-color: #ed3954!important;color:white!important;">Magic Trade</ion-badge>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row style="height: fit-content" *ngIf="type == 1 && selected == \'LIVE\'">\n\n\n\n            <ion-col align="center" (tap)="selecttime(\'5\')">\n\n                <ion-badge class="vehicle" [ngClass]="{\'active\': selectedtimeLIVE == \'5\'}">5 min</ion-badge>\n\n            </ion-col>\n\n\n\n            <ion-col align="center" (tap)="selecttime(\'15\')">\n\n                <ion-badge class="vehicle" [ngClass]="{\'active\':selectedtimeLIVE == \'15\'}">15 min</ion-badge>\n\n            </ion-col>\n\n\n\n            <ion-col align="center" (tap)="selecttime(\'60\')">\n\n                <ion-badge class="vehicle" [ngClass]="{\'active\': selectedtimeLIVE == \'60\'}">60 min</ion-badge>\n\n            </ion-col>\n\n\n\n        </ion-row>\n\n\n\n\n\n        <ion-row style="height: fit-content" *ngIf="type == 0 && selected == \'LIVE\'">\n\n            <ion-col align="center" (tap)="selecttime2(\'1\')">\n\n                <ion-badge class="vehicle" [ngClass]="{\'active\': selectedtimeMESSAGE == \'1\'}">1 min</ion-badge>\n\n            </ion-col>\n\n\n\n            <ion-col align="center" (tap)="selecttime2(\'3\')">\n\n                <ion-badge class="vehicle" [ngClass]="{\'active\': selectedtimeMESSAGE == \'3\'}">3 min</ion-badge>\n\n            </ion-col>\n\n\n\n            <ion-col align="center" (tap)="selecttime2(\'5\')">\n\n                <ion-badge class="vehicle" [ngClass]="{\'active\': selectedtimeMESSAGE == \'5\'}">5 min</ion-badge>\n\n            </ion-col>\n\n\n\n            <ion-col align="center" (tap)="selecttime2(\'15\')">\n\n                <ion-badge class="vehicle" [ngClass]="{\'active\':selectedtimeMESSAGE == \'15\'}">15 min</ion-badge>\n\n            </ion-col>\n\n\n\n            <ion-col align="center" (tap)="selecttime2(\'60\')">\n\n                <ion-badge class="vehicle" [ngClass]="{\'active\': selectedtimeMESSAGE == \'60\'}">60 min</ion-badge>\n\n            </ion-col>\n\n\n\n        </ion-row>\n\n    </div>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-fab bottom right edge *ngIf="refreshhide">\n\n        <button (click)="clicksync()" ion-fab mini>\n\n            <ion-spinner icon="bubbles" color="dark" *ngIf="showingspinner"></ion-spinner>\n\n            <!--<ion-icon ios="ios-sync" md="md-sync" *ngIf="showingicon" style="font-size: 30px;"></ion-icon>-->\n\n            <img src="assets/imgs/sync.png" style="height: 30px; width: 30px;" *ngIf="showingicon">\n\n        </button>\n\n    </ion-fab>\n\n    <!--AUTO ADVISORY-->\n\n    <!--    <div *ngIf="type == 2">\n\n            <ion-list>\n\n                <ion-row>\n\n                    <ion-col col-12 *ngFor="let i of [1,2]">\n\n                        <ion-card style="margin: 10px;" (tap)="openlivechart()">\n\n                            <h4 style="color: #040063;font-size: 1.5rem;padding: 5px;\n\n                             text-align: center; font-weight: bold; background: #349bde; color: white;">{{\'YESBANK\'}}</h4>\n\n                            <ion-row>\n\n                                <ion-col col-6>\n\n                                    <p style="color: #040063;width: fit-content;padding: 3px;"><b>Init. Price :</b></p>\n\n                                    <p style="color: #040063;width: fit-content;padding: 3px;"><b>Target 2 :</b> <span style="float: end;background: #f53d3d;  border-radius: 5px; padding: 5px; color: #fff; margin-left: 30px;">  100</span></p>\n\n                                    <p style="color: #040063;width: fit-content;padding: 3px;"><b>Stop Loss :</b></p>\n\n                                </ion-col>\n\n                                <ion-col col-6 align="center">\n\n                                    &lt;!&ndash;<p style="color: #040063">{{item.INITPRICE}}</p>\n\n                                    <p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">{{item.TARGET1}}</p>\n\n                                    <p style="color: #040063; background-color: #19b330;color: #040063;" *ngIf="item.TARGET1HIT == \'HIT\'">{{item.TARGET1}}</p>\n\n                                    <p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">{{item.TARGET2}}</p>\n\n                                    <p style="color: #040063; background-color: #19b330;color: #040063;" *ngIf="item.TARGET1HIT == \'HIT\'">{{item.TARGET2}}</p>\n\n                                    <p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">{{item.STOPLOSS}}</p>\n\n                                    <p style="color: #040063; background-color: #f53d3d;color: #040063;" *ngIf="item.TARGET1HIT == \'HIT\'">{{item.STOPLOSS}}</p>&ndash;&gt;\n\n                                    <p style="color: #040063;width: fit-content;padding: 3px;"><b>Target 1 :</b> <span style="float: end; background: #19b330; border-radius: 5px; padding: 5px; color: #fff;margin-left: 30px;">  200</span></p>\n\n                                    <p style="color: #040063;width: fit-content;padding: 3px;"><b>Target 3 :</b> <span style="float: end; background: #f53d3d; border-radius: 5px; padding: 5px; color: #fff; margin-left: 30px;">  300</span></p>\n\n\n\n\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-card>\n\n                        &lt;!&ndash;<ion-card style="margin: 10px;"(tap)="openlivechart()">&ndash;&gt;\n\n                        &lt;!&ndash;<h4 style="color: #040063;font-size: 1.5rem;padding: 5px;text-align: center; font-weight: bold; background: #349bde; color: white;">{{\'YESBANK\'}}</h4>&ndash;&gt;\n\n                        &lt;!&ndash;<ion-row>&ndash;&gt;\n\n                        &lt;!&ndash;<ion-col col-6>&ndash;&gt;\n\n                        &lt;!&ndash;<p style="color: #040063;width: fit-content;padding: 3px;">Init. Price</p>&ndash;&gt;\n\n                        &lt;!&ndash;<p style="color: #040063;width: fit-content;padding: 3px;">Target 1</p>&ndash;&gt;\n\n                        &lt;!&ndash;<p style="color: #040063;width: fit-content;padding: 3px;">Target 2</p>&ndash;&gt;\n\n                        &lt;!&ndash;<p style="color: #040063;width: fit-content;padding: 3px;">Stop Loss</p>&ndash;&gt;\n\n                        &lt;!&ndash;</ion-col>&ndash;&gt;\n\n\n\n                        &lt;!&ndash;</ion-row>&ndash;&gt;\n\n                        &lt;!&ndash;</ion-card>&ndash;&gt;\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n                &lt;!&ndash;  <ion-card-content align="center">\n\n                      <div *ngIf="type == 2">\n\n                          <ion-list *ngFor="let item of [1]">\n\n\n\n                              <ion-card (click)="imageDisplay(item.ADVISORYIMAGE,item.COMPANYNAME)">\n\n                                  <ion-item>\n\n                                      <ion-row>\n\n                                          &lt;!&ndash;<ion-col col-4="">&ndash;&gt;\n\n                                          &lt;!&ndash;<div style="padding: 0px"><img col-md-6 style="width: 80px; height: 70px; padding: 0px" src="{{item.ADVISORYLOGO}}"/>&ndash;&gt;\n\n                                          &lt;!&ndash;</div>&ndash;&gt;\n\n                                          &lt;!&ndash;<p style="margin-top: 8px;font-size: 10px;color: #040063;">{{item.DATE || \'02/02/2019\'}} {{item.TIME || \'10:10\'}} </p>&ndash;&gt;\n\n                                          &lt;!&ndash;</ion-col>&ndash;&gt;\n\n\n\n                                          <ion-col col-12>\n\n\n\n                                              <h4 style="color: #040063;font-size: 1.5rem;">{{item.COMPANYNAME || \'YESBANK\'}}\n\n\n\n                                                  <span style="float: right;">\n\n\n\n                                      &lt;!&ndash;<button ion-button small color="secondary"  class="sell-button">{{item.TYPE}}</button>&ndash;&gt;\n\n\n\n                                                      &lt;!&ndash;<button ion-button small color="danger" *ngIf="item.TYPE==\'Sell\'" class="sell-button">{{item.TYPE}}</button>&ndash;&gt;\n\n\n\n                                      </span>\n\n                                              </h4>\n\n                                              <div>\n\n                                                  <ion-row>\n\n                                                      <ion-col col-6>\n\n                                                          <p style="color: #040063;width: fit-content;padding: 3px;">Init. Price</p>\n\n                                                          <p style="color: #040063;width: fit-content;padding: 3px;">Target 1</p>\n\n                                                          <p style="color: #040063;width: fit-content;padding: 3px;">Target 2</p>\n\n                                                          <p style="color: #040063;width: fit-content;padding: 3px;">Stop Loss</p>\n\n                                                      </ion-col>\n\n                                                      <ion-col col-6>\n\n                                                          &lt;!&ndash;<p style="color: #040063">{{item.INITPRICE}}</p>\n\n                                                          <p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">{{item.TARGET1}}</p>\n\n                                                          <p style="color: #040063; background-color: #19b330;color: #040063;" *ngIf="item.TARGET1HIT == \'HIT\'">{{item.TARGET1}}</p>\n\n                                                          <p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">{{item.TARGET2}}</p>\n\n                                                          <p style="color: #040063; background-color: #19b330;color: #040063;" *ngIf="item.TARGET1HIT == \'HIT\'">{{item.TARGET2}}</p>\n\n                                                          <p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">{{item.STOPLOSS}}</p>\n\n                                                          <p style="color: #040063; background-color: #f53d3d;color: #040063;" *ngIf="item.TARGET1HIT == \'HIT\'">{{item.STOPLOSS}}</p>&ndash;&gt;\n\n                                                          <p style="color: #040063;width: fit-content;padding: 3px;border-radius: 5px;">{{item.TARGET2 || "100"}}</p>\n\n                                                          <p style="color: #040063;width: fit-content;padding: 3px;border-radius: 5px; background-color: #19b330;color: #040063;">{{item.TARGET2 || "120"}}</p>\n\n                                                          <p style="color: #040063;width: fit-content;padding: 3px;border-radius: 5px;">{{item.STOPLOSS || "90"}}</p>\n\n                                                          <p style="color: #040063; width: fit-content;padding: 3px;border-radius: 5px; background-color: #f53d3d;color: #040063;">{{item.STOPLOSS || "80"}}</p>\n\n\n\n                                                      </ion-col>\n\n                                                  </ion-row>\n\n                                              </div>\n\n                                              &lt;!&ndash;<p style="color: #040063">Init. Price&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.INITPRICE}} </p>&ndash;&gt;\n\n                                              &lt;!&ndash;<p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">Target 1&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.TARGET1}}</p>&ndash;&gt;\n\n                                              &lt;!&ndash;<p style="background-color: #19b330;color: #040063;width: 170px;" *ngIf="item.TARGET1HIT == \'HIT\'">Target 1&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.TARGET1}}</p>&ndash;&gt;\n\n                                              &lt;!&ndash;<p style="color: #040063" *ngIf="item.TARGET1HIT == \'NONE\'">Target 2&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.TARGET2}}</p>&ndash;&gt;\n\n                                              &lt;!&ndash;<p style="background-color: #19b330;color: #040063;width: 170px;" *ngIf="item.TARGET2HIT == \'HIT\'">Target 2&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.TARGET2}}</p>&ndash;&gt;\n\n                                              &lt;!&ndash;<p style="color: #040063">Stop Loss&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{{item.STOPLOSS}}</p>&ndash;&gt;\n\n                                              &lt;!&ndash;<p style="color: #040063">Time {{item.TIME}}</p>&ndash;&gt;\n\n                                          </ion-col>\n\n\n\n                                      </ion-row>\n\n                                  </ion-item>\n\n                              </ion-card>\n\n\n\n                          </ion-list>\n\n                      </div>\n\n                  </ion-card-content>&ndash;&gt;\n\n            </ion-list>\n\n        </div-->\n\n\n\n\n\n    <!--MESSAGE BOARD-->\n\n    <div *ngIf="type == 0">\n\n        <ion-list *ngFor="let i of messagenewitem">\n\n            <!--(tap)="openlivechart()"-->\n\n            <ion-card style="margin: 10px;box-shadow:rgba(46, 125, 50, 0.5) 0px 0px 2px 6px, rgba(46, 125, 50, 0.2) 0px 22px 15px 4px, rgba(48, 125, 50, 0.2) 5px 5px 5px 5px" *ngIf="i.BUY_SELL != \'Sell\'" (tap)="openlivechart(i)">\n\n                <h4 style="color: #040063;font-size: 1.2rem;padding: 5px;">{{i.SYMBOL}}\n\n                    <span style="float: right;">\n\n                                    <button ion-button small color="danger" class="sell-button" *ngIf="i.BUY_SELL !=\'Buy\'">{{i.BUY_SELL}}</button>\n\n\n\n                                    <button ion-button small color="secondary" *ngIf="i.BUY_SELL==\'Buy\'" class="sell-button">{{i.BUY_SELL}}</button>\n\n\n\n                                    </span>\n\n                </h4>\n\n                <!--<h4 style="color: #040063;font-size: 1.5rem;padding: 5px;">{{i.SYMBOL}}</h4>-->\n\n                <ion-row>\n\n                    <ion-col col-6>\n\n                        <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;">Init. Price</p>\n\n                        <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;">Target 1</p>\n\n                        <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;">Target 2</p>\n\n                        <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;">Target 3</p>\n\n                        <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;">Stop Loss</p>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;border-radius: 5px;">{{i.INIT}}</p>\n\n\n\n                        <p style="color: #040063;padding: 0px;font-size: 12px;border-radius: 4px;width: fit-content;" *ngIf="i.TGT1_HIT == \'None\' || i.TGT1_HIT == \'\'">{{i.TGT1 || \'\'}}</p>\n\n                        <p style="color: #040063;padding: 0px;font-size: 12px;border-radius: 4px;width: fit-content; background-color: #19b330;color: #040063;" *ngIf="i.TGT1_HIT == \'Hit\'">{{i.TGT1 || \'\'}}</p>\n\n                        <p style="color: #040063;padding: 0px;font-size: 12px;border-radius: 4px;width: fit-content;" *ngIf="i.TGT2_HIT == \'None\' || i.TGT2_HIT == \'\'">{{i.TGT2 || \'\'}}</p>\n\n                        <p style="color: #040063;padding: 0px;font-size: 12px;border-radius: 4px;width: fit-content; background-color: #19b330;color: #040063;" *ngIf="i.TGT2_HIT == \'Hit\'">{{i.TGT2 || \'\'}}</p>\n\n                        <p style="color: #040063;padding: 0px;font-size: 12px;border-radius: 4px;width: fit-content;" *ngIf="i.TGT3_HIT == \'None\' || i.TGT3_HIT == \'\'">{{i.TGT3 || \'\'}}</p>\n\n                        <p style="color: #040063;padding: 0px;font-size: 12px;border-radius: 4px;width: fit-content; background-color: #19b330;color: #040063;" *ngIf="i.TGT3_HIT == \'Hit\'">{{i.TGT3 || \'\'}}</p>\n\n                        <p style="color: #040063;padding: 0px;font-size: 12px;border-radius: 4px;width: fit-content;" *ngIf="i.TSL_HIT == \'None\' || i.TSL_HIT == \'\'">{{i.TSL || \'\'}}</p>\n\n                        <p style="color: #040063;padding: 0px;font-size: 12px;border-radius: 4px;width: fit-content; background-color: #f53d3d;color: #040063;" *ngIf="i.TSL_HIT == \'Hit\'">{{i.TSL || \'\'}}</p>\n\n\n\n                    </ion-col>\n\n                </ion-row>\n\n                <div align="end">\n\n                    <p style="color: #8b8b8b;padding: 3px;font-size: 12px;">{{i.INIT_DATETIME}}</p>\n\n                </div>\n\n            </ion-card>\n\n\n\n            <ion-card style="margin: 10px;box-shadow:rgba(244,67,54,0.5) 0px 0px 2px 6px, rgba(244,67,54,0.2) 0px 22px 15px 4px, rgba(244,67,54,0.2) 5px 5px 5px 5px" *ngIf="i.BUY_SELL == \'Sell\'" (tap)="openlivechart(i)">\n\n                <h4 style="color: #040063;font-size: 1.2rem;padding: 5px;">{{i.SYMBOL}}\n\n                    <span style="float: right;">\n\n                                    <button ion-button small color="danger" class="sell-button" *ngIf="i.BUY_SELL !=\'Buy\'">{{i.BUY_SELL}}</button>\n\n\n\n                                    <button ion-button small color="secondary" *ngIf="i.BUY_SELL==\'Buy\'" class="sell-button">{{i.BUY_SELL}}</button>\n\n\n\n                                    </span>\n\n                </h4>\n\n                <!--<h4 style="color: #040063;font-size: 1.5rem;padding: 5px;">{{i.SYMBOL}}</h4>-->\n\n                <ion-row>\n\n                    <ion-col col-6>\n\n                        <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;">Init. Price</p>\n\n                        <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;">Target 1</p>\n\n                        <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;">Target 2</p>\n\n                        <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;">Target 3</p>\n\n                        <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;">Stop Loss</p>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <p style="color: #040063;width: fit-content;padding: 0px;font-size: 12px;border-radius: 5px;">{{i.INIT}}</p>\n\n\n\n                        <p style="color: #040063;padding: 0px;font-size: 12px;border-radius: 4px;width: fit-content;" *ngIf="i.TGT1_HIT == \'None\' || i.TGT1_HIT == \'\'">{{i.TGT1 || \'\'}}</p>\n\n                        <p style="color: #040063;padding: 0px;font-size: 12px;border-radius: 4px;width: fit-content; background-color: #19b330;color: #040063;" *ngIf="i.TGT1_HIT == \'Hit\'">{{i.TGT1 || \'\'}}</p>\n\n                        <p style="color: #040063;padding: 0px;font-size: 12px;border-radius: 4px;width: fit-content;" *ngIf="i.TGT2_HIT == \'None\' || i.TGT2_HIT == \'\'">{{i.TGT2 || \'\'}}</p>\n\n                        <p style="color: #040063;padding: 0px;font-size: 12px;border-radius: 4px;width: fit-content; background-color: #19b330;color: #040063;" *ngIf="i.TGT2_HIT == \'Hit\'">{{i.TGT2 || \'\'}}</p>\n\n                        <p style="color: #040063;padding: 0px;font-size: 12px;border-radius: 4px;width: fit-content;" *ngIf="i.TGT3_HIT == \'None\' || i.TGT3_HIT == \'\'">{{i.TGT3 || \'\'}}</p>\n\n                        <p style="color: #040063;padding: 0px;font-size: 12px;border-radius: 4px;width: fit-content; background-color: #19b330;color: #040063;" *ngIf="i.TGT3_HIT == \'Hit\'">{{i.TGT3 || \'\'}}</p>\n\n                        <p style="color: #040063;padding: 0px;font-size: 12px;border-radius: 4px;width: fit-content;" *ngIf="i.TSL_HIT == \'None\' || i.TSL_HIT == \'\'">{{i.TSL || \'\'}}</p>\n\n                        <p style="color: #040063;padding: 0px;font-size: 12px;border-radius: 4px;width: fit-content; background-color: #f53d3d;color: #040063;" *ngIf="i.TSL_HIT == \'Hit\'">{{i.TSL || \'\'}}</p>\n\n\n\n\n\n                        <!--<p style="color: #040063;width: fit-content;padding: 3px;border-radius: 5px;">{{i.TGT1}}</p>-->\n\n                        <!--<p style="color: #040063;width: fit-content;padding: 3px;border-radius: 5px;">{{i.TGT2}}</p>-->\n\n                        <!--<p style="color: #040063;width: fit-content;padding: 3px;border-radius: 5px;">{{i.TGT3}}</p>-->\n\n                        <!--<p style="color: #040063; width: fit-content;padding: 3px;border-radius: 5px;">{{i.TSL}}</p>-->\n\n\n\n                    </ion-col>\n\n                </ion-row>\n\n                <div align="end">\n\n                    <p style="color: #8b8b8b;padding: 3px;font-size: 12px;">{{i.INIT_DATETIME}}</p>\n\n                </div>\n\n            </ion-card>\n\n        </ion-list>\n\n        <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n        </ion-infinite-scroll>\n\n    </div>\n\n\n\n\n\n    <!--LIVE CHART , ALGO CHART-->\n\n    <img src="{{imageUrl}}" style="width: 100%;margin-top: 80px;padding: 5px" #myImage (click)="presentImage(myImage)" *ngIf="type == 1 || type == 3"/>\n\n\n\n\n\n</ion-content>\n\n\n\n<!--<ion-footer>-->\n\n<!--<ion-toolbar color="primary">-->\n\n<!--<ion-row col-12 style="padding: 0px;">-->\n\n<!--<div style="text-align: center; display: inline-block; width: 100%;"><span style="font-weight: bold; font-size: 16px ;color: #ffffff">NEXT</span></div>-->\n\n<!--</ion-row>-->\n\n<!--</ion-toolbar>-->\n\n<!--</ion-footer>-->\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\charts\charts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_screenshot__["a" /* Screenshot */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], ChartsPage);
    return ChartsPage;
}());

//# sourceMappingURL=charts.js.map

/***/ })

});
//# sourceMappingURL=40.js.map