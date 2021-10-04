webpackJsonp([49],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisorysearchPageModule", function() { return AdvisorysearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advisorysearch__ = __webpack_require__(485);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdvisorysearchPageModule = /** @class */ (function () {
    function AdvisorysearchPageModule() {
    }
    AdvisorysearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__advisorysearch__["a" /* AdvisorysearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__advisorysearch__["a" /* AdvisorysearchPage */]),
            ],
        })
    ], AdvisorysearchPageModule);
    return AdvisorysearchPageModule;
}());

//# sourceMappingURL=advisorysearch.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvisorysearchPage; });
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
 * Generated class for the AdvisorysearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdvisorysearchPage = /** @class */ (function () {
    function AdvisorysearchPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.type = 0;
        this.CASHDATANEW = [];
        this.FUTUREDATANEW = [];
        this.OPTIONDATANEW = [];
        this.MCXDATANEW = [];
        this.selectedsymbal = [];
        this.CASHSELECTED = [];
        this.FUTURESELECTED = [];
        this.OPTIONSELECTED = [];
        this.MCXSELECTED = [];
        this.CASH = 'CASH';
        this.CASH_VAL = 0;
        this.FUTURE_VAL = 0;
        this.OPTION_VAL = 0;
        this.MCX_VAL = 0;
        this.type = navParams.data;
        console.log(this.type);
        this.initializeItems();
    }
    AdvisorysearchPage.prototype.initializeItems = function () {
        var _this = this;
        if (localStorage.getItem("NSECASH") != undefined || localStorage.getItem("NSEFO") != undefined || localStorage.getItem("MCX") != undefined) {
            console.log("Enter Local Part");
            this.CASHDATA = JSON.parse(localStorage.getItem("NSECASH"));
            console.log("nsecashlist", this.CASHDATA);
            this.FUTUREDATA = JSON.parse(localStorage.getItem("NSEFO"));
            console.log("nsefolist", this.FUTUREDATA);
            this.MCXDATA = JSON.parse(localStorage.getItem("MCX"));
            console.log("MCX", this.MCXDATA);
            this.lastdataset();
        }
        else {
            this.api.splashscreenapi().then(function (data) {
                _this.apiData = data;
                _this.CASHDATA = _this.apiData.symbol.NSECASH;
                _this.FUTUREDATA = _this.apiData.symbol.NSEFO;
                _this.MCXDATA = _this.apiData.symbol.MCX;
                console.log("Enter Live Part");
                console.log("nsecashlist", _this.CASHDATA);
                console.log("nsefolist", _this.FUTUREDATA);
                console.log("MCX", _this.MCXDATA);
                _this.lastdataset();
            });
        }
    };
    AdvisorysearchPage.prototype.lastdataset = function () {
        this.CASHSELECTED = [];
        this.FUTURESELECTED = [];
        this.MCXSELECTED = [];
        console.log("selected array", this.api.AUTOADVISORYWATCHLISTDATA);
        if (this.type == 2) {
            if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.CASH.length > 0) {
                for (var i = 0; i < this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.CASH.length; i++) {
                    for (var j = 0; j < this.CASHDATA.length; j++) {
                        if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.CASH[i].SYMBOL == this.CASHDATA[j].COMPANY_NAME) {
                            this.CASHDATA[j].IS_SELECTED = true;
                            this.selectedsymbal.push(this.CASHDATA[j].COMPANY_NAME);
                            this.CASHSELECTED.push(this.CASHDATA[j].COMPANY_NAME);
                        }
                    }
                    var cash = void 0;
                    cash = this.CASHDATA;
                    var cashdata = this.sortByKey('asc', cash);
                    this.CASHDATA = cashdata;
                    console.log("cashdata", this.CASHDATA);
                }
            }
            if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.FUTURE.length > 0) {
                for (var i = 0; i < this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.FUTURE.length; i++) {
                    for (var j = 0; j < this.FUTUREDATA.length; j++) {
                        if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.FUTURE[i].SYMBOL == this.FUTUREDATA[j].COMPANY_NAME) {
                            this.FUTUREDATA[j].IS_SELECTED = true;
                            this.selectedsymbal.push(this.FUTUREDATA[j].COMPANY_NAME);
                            this.FUTURESELECTED.push(this.FUTUREDATA[j].COMPANY_NAME);
                        }
                    }
                    var FUTURE = void 0;
                    FUTURE = this.FUTUREDATA;
                    var futuredata = this.sortByKey('asc', FUTURE);
                    this.FUTUREDATA = futuredata;
                    console.log("FUTURE", this.FUTUREDATA);
                }
            }
            if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.MCX.length > 0) {
                for (var i = 0; i < this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.MCX.length; i++) {
                    for (var j = 0; j < this.MCXDATA.length; j++) {
                        if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.MCX[i].SYMBOL == this.MCXDATA[j].COMPANY_NAME) {
                            this.MCXDATA[j].IS_SELECTED = true;
                            this.selectedsymbal.push(this.MCXDATA[j].COMPANY_NAME);
                            this.MCXSELECTED.push(this.MCXDATA[j].COMPANY_NAME);
                        }
                    }
                    var MCX = void 0;
                    MCX = this.MCXDATA;
                    var mcxdata = this.sortByKey('asc', MCX);
                    this.MCXDATA = mcxdata;
                    console.log("FUTURE", this.MCXDATA);
                }
            }
            console.log("selected data", this.selectedsymbal);
            console.log("cash data", this.CASHSELECTED);
            console.log("future data", this.FUTURESELECTED);
            console.log("MCXSELECTED data", this.MCXSELECTED);
            this.api.AUTOADVISORYWATCHLISTDATA = [];
        }
    };
    AdvisorysearchPage.prototype.sortByKey = function (sort, array) {
        console.log("SORT ARRAY", array);
        return array.sort(function (a, b) {
            return b.IS_SELECTED - a.IS_SELECTED;
        });
    };
    AdvisorysearchPage.prototype.ionViewDidEnter = function () {
        console.log("enter refresh");
        for (var i = 0; i < 30; i++) {
            this.CASHDATANEW.push(this.CASHDATA[i]);
            this.cash_position = i;
            this.FUTUREDATANEW.push(this.FUTUREDATA[i]);
            this.future_position = i;
            console.log('this.MCXDATA[i]', this.MCXDATA[i]);
            if (this.MCXDATA[i] != undefined) {
                this.MCXDATANEW.push(this.MCXDATA[i]);
                this.mcx_position = i;
            }
        }
        console.log(this.CASHDATANEW);
        console.log(this.FUTUREDATANEW);
    };
    AdvisorysearchPage.prototype.initializeItems1 = function (ev) {
        var val;
        console.log(ev);
        if (ev.data != null) {
            val = ev.target.value.trim();
        }
        else {
            val = "";
            for (var i = 0; i < 30; i++) {
                this.CASHDATANEW.push(this.CASHDATA[i]);
                this.cash_position = i;
                // this.CASH_VAL = 0;
            }
        }
        if (val && val.trim() !== '') {
            this.CASHDATANEW = this.CASHDATA.filter(function (item) {
                return (item.COMPANY_NAME.toLowerCase().indexOf(val.toLowerCase()) == 0 || item.CATEGORY.toLowerCase().indexOf(val.toLowerCase()) == 0);
            });
            //     if (this.CASH_SEARCH_DATA.length > 0) {
            //         this.CASHDATANEW = [];
            //         for (let i = 0; i < 60; i++) {
            //             if (this.CASH_SEARCH_DATA[i]) {
            //                 this.CASHDATANEW.push(this.CASH_SEARCH_DATA[i]);
            //                 this.CASH_VAL = 1;
            //             }
            //         }
            //     }
        }
    };
    AdvisorysearchPage.prototype.initializeItems2 = function (ev) {
        var val;
        console.log(ev);
        if (ev.data != null) {
            val = ev.target.value.trim();
        }
        else {
            val = "";
            for (var i = 0; i < 30; i++) {
                this.FUTUREDATANEW.push(this.FUTUREDATA[i]);
                this.future_position = i;
                // this.FUTURE_VAL = 0;
            }
        }
        if (val && val.trim() !== '') {
            this.FUTUREDATANEW = this.FUTUREDATA.filter(function (item) {
                return (item.COMPANY_NAME.toLowerCase().indexOf(val.toLowerCase()) == 0 || item.CATEGORY.toLowerCase().indexOf(val.toLowerCase()) == 0);
            });
            // if (this.FUTURE_SEARCH_DATA.length > 0) {
            //     this.FUTUREDATANEW = [];
            //     for (let i = 0; i < 60; i++) {
            //         if (this.FUTURE_SEARCH_DATA[i]) {
            //             this.FUTUREDATANEW.push(this.FUTURE_SEARCH_DATA[i]);
            //             this.FUTURE_VAL = 1;
            //         }
            //     }
            // }
        }
    };
    AdvisorysearchPage.prototype.initializeItems4 = function (ev) {
        var val;
        console.log(ev);
        if (ev.data != null) {
            val = ev.target.value.trim();
        }
        else {
            val = "";
            for (var i = 0; i < 30; i++) {
                this.MCXDATANEW.push(this.MCXDATA[i]);
                this.mcx_position = i;
                this.MCX_VAL = 0;
            }
        }
        if (val && val.trim() !== '') {
            this.MCXDATANEW = this.MCXDATA.filter(function (item) {
                return (item.COMPANY_NAME.toLowerCase().indexOf(val.toLowerCase()) == 0 || item.CATEGORY.toLowerCase().indexOf(val.toLowerCase()) == 0);
            });
        }
    };
    // initializeItems3(ev: any) {
    //     let val;
    //     console.log(ev);
    //     if (ev.data != null) {
    //         val = ev.target.value.trim();
    //
    //     } else {
    //         val = "";
    //         for (let i = 0; i < 30; i++) {
    //             this.OPTIONDATANEW.push(this.OPTIONDATA[i]);
    //             this.option_position = i;
    //             this.OPTION_VAL = 0;
    //         }
    //     }
    //     if (val && val.trim() !== '') {
    //         this.OPTION_SEARCH_DATA = this.OPTIONDATA.filter((item) => {
    //             return (item.SYMBOL.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.STRIKE.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.COMPANY.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.DISPLAY_OPTION_TYPE.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //         });
    //         console.log("this.OPTION_SEARCH_DATA", this.OPTION_SEARCH_DATA);
    //         if (this.OPTION_SEARCH_DATA.length > 0) {
    //             this.OPTIONDATANEW = [];
    //             for (let i = 0; i < 60; i++) {
    //                 if (this.OPTION_SEARCH_DATA[i]) {
    //                     this.OPTIONDATANEW.push(this.OPTION_SEARCH_DATA[i]);
    //                     this.OPTION_VAL = 1;
    //                 }
    //             }
    //         }
    //         console.log("OPTIONDATANEW DATA", this.OPTIONDATANEW);
    //     }
    // }
    AdvisorysearchPage.prototype.doInfinite = function (infiniteScroll, type) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            if (type = 'cash') {
                _this.cash_position++;
                var count = (_this.cash_position + 30);
                for (var i = _this.cash_position; i < count; i++) {
                    // if (this.CASH_VAL == 1) {
                    //     if (this.CASHDATA[i]) {
                    //         this.CASHDATANEW.push(this.CASH_SEARCH_DATA[i]);
                    //         this.cash_position = i;
                    //     }
                    // } else {
                    if (_this.CASHDATA[i]) {
                        _this.CASHDATANEW.push(_this.CASHDATA[i]);
                        _this.cash_position = i;
                    }
                    // }
                }
            }
            if (type = 'future') {
                _this.future_position++;
                var count = (_this.future_position + 30);
                for (var i = _this.future_position; i < count; i++) {
                    // if (this.FUTURE_VAL == 1) {
                    //     if (this.FUTUREDATA[i]) {
                    //         this.FUTUREDATANEW.push(this.FUTURE_SEARCH_DATA[i]);
                    //         this.future_position = i;
                    //     }
                    // }else {
                    if (_this.FUTUREDATA[i]) {
                        _this.FUTUREDATANEW.push(_this.FUTUREDATA[i]);
                        _this.future_position = i;
                    }
                    // }
                }
            }
            // if (type = 'option') {
            //     this.option_position++;
            //     let count = (this.option_position + 30);
            //     for (let i = this.option_position; i < count; i++) {
            //
            //         if (this.OPTION_VAL == 1) {
            //             if (this.OPTIONDATA[i]) {
            //                 this.OPTIONDATANEW.push(this.OPTION_SEARCH_DATA[i]);
            //                 this.option_position = i;
            //             }
            //         } else {
            //             if (this.OPTIONDATA[i]) {
            //                 this.OPTIONDATANEW.push(this.OPTIONDATA[i]);
            //                 this.option_position = i;
            //             }
            //         }
            //     }
            // }
            if (type = 'mcx') {
                _this.mcx_position++;
                var count = (_this.mcx_position + 30);
                for (var i = _this.mcx_position; i < count; i++) {
                    // if (this.MCX_VAL == 1) {
                    //     if (this.MCXDATA[i] != undefined) {
                    //         this.MCXDATANEW.push(this.MCX_SEARCH_DATA[i]);
                    //         this.mcx_position = i;
                    //     }
                    // } else {
                    if (_this.MCXDATA[i] != undefined) {
                        _this.MCXDATANEW.push(_this.MCXDATA[i]);
                        _this.mcx_position = i;
                    }
                    // }
                }
            }
            infiniteScroll.complete();
            console.log("this.CASHDATANEW", _this.CASHDATANEW);
            console.log("this.FUTUREDATANEW", _this.FUTUREDATANEW);
            console.log("this.OPTIONDATANEW", _this.OPTIONDATANEW);
            console.log("this.MCXDATANEW", _this.MCXDATANEW);
            console.log('Async operation has ended');
        }, 500);
    };
    AdvisorysearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductlistPage');
    };
    AdvisorysearchPage.prototype.openalertpage = function () {
        console.log("selected data", this.selectedsymbal);
        if (this.selectedsymbal.length > 0) {
            if (this.type == 1) {
                console.log("cash data", this.CASHSELECTED);
                console.log("future data", this.FUTURESELECTED);
                console.log("OPTIONSELECTED data", this.OPTIONSELECTED);
                console.log("MCXSELECTED data", this.MCXSELECTED);
                this.advisorywatchlistaddapi();
            }
            else {
                console.log("cash data", this.CASHSELECTED);
                console.log("future data", this.FUTURESELECTED);
                console.log("OPTIONSELECTED data", this.OPTIONSELECTED);
                console.log("MCXSELECTED data", this.MCXSELECTED);
                this.advisorywatchlistupdateapi();
            }
        }
        else {
            this.api.presentToast("Select Symbol");
        }
    };
    AdvisorysearchPage.prototype.changedata = function (SYMBOL, STATUS, TYPE) {
        console.log("selected SYMBOL", SYMBOL);
        console.log("selected STATUS", STATUS);
        console.log("selected TYPE", TYPE);
        if (STATUS == true) {
            this.selectedsymbal = [];
            if (TYPE == "Cash" || TYPE == "Equity") {
                // this.CASHSELECTED = [];
                for (var i = 0; i < this.CASHDATA.length; i++) {
                    // console.log("this.CASHDATA[i].SYMBOL", this.CASHDATA[i].SYMBOL + " = "+SYMBOL);
                    if (this.CASHDATA[i].COMPANY_NAME == SYMBOL) {
                        this.CASHDATA[i].IS_SELECTED = true;
                        this.selectedsymbal.push(this.CASHDATA[i].COMPANY_NAME);
                        this.CASHSELECTED.push(this.CASHDATA[i].COMPANY_NAME);
                    }
                }
            }
            if (TYPE == "Futures") {
                // this.FUTURESELECTED = [];
                for (var i = 0; i < this.FUTUREDATA.length; i++) {
                    if (this.FUTUREDATA[i].COMPANY_NAME == SYMBOL) {
                        this.FUTUREDATA[i].IS_SELECTED = true;
                        this.selectedsymbal.push(this.FUTUREDATA[i].COMPANY_NAME);
                        this.FUTURESELECTED.push(this.FUTUREDATA[i].COMPANY_NAME);
                    }
                }
            }
            if (TYPE == "Comodities") {
                // this.FUTURESELECTED = [];
                for (var i = 0; i < this.MCXDATA.length; i++) {
                    if (this.MCXDATA[i].COMPANY_NAME == SYMBOL) {
                        this.MCXDATA[i].IS_SELECTED = true;
                        this.selectedsymbal.push(this.MCXDATA[i].COMPANY_NAME);
                        this.MCXSELECTED.push(this.MCXDATA[i].COMPANY_NAME);
                    }
                }
            }
        }
        else if (STATUS == false) {
            if (TYPE == "Cash") {
                for (var i = 0; i < this.CASHDATA.length; i++) {
                    // console.log("this.CASHDATA[i].SYMBOL", this.CASHDATA[i].SYMBOL + " = "+SYMBOL);
                    if (this.CASHDATA[i].COMPANY_NAME == SYMBOL) {
                        this.CASHDATA[i].IS_SELECTED = false;
                        for (var j = 0; j < this.selectedsymbal.length; j++) {
                            if (this.selectedsymbal[j] == this.CASHDATA[i].COMPANY_NAME) {
                                this.selectedsymbal.splice(j, 1);
                            }
                        }
                        for (var j = 0; j < this.CASHSELECTED.length; j++) {
                            if (this.CASHSELECTED[j] == this.CASHDATA[i].COMPANY_NAME) {
                                this.CASHSELECTED.splice(j, 1);
                            }
                        }
                    }
                }
            }
            if (TYPE == "Futures") {
                for (var i = 0; i < this.FUTUREDATA.length; i++) {
                    if (this.FUTUREDATA[i].COMPANY_NAME == SYMBOL) {
                        this.FUTUREDATA[i].IS_SELECTED = true;
                        for (var j = 0; j < this.selectedsymbal.length; j++) {
                            if (this.selectedsymbal[j] == this.FUTUREDATA[i].COMPANY_NAME) {
                                this.selectedsymbal.splice(j, 1);
                            }
                        }
                        for (var j = 0; j < this.FUTURESELECTED.length; j++) {
                            if (this.FUTURESELECTED[j] == this.FUTUREDATA[i].COMPANY_NAME) {
                                this.FUTURESELECTED.splice(j, 1);
                            }
                        }
                    }
                }
            }
            if (TYPE == "Comodities") {
                for (var i = 0; i < this.MCXDATA.length; i++) {
                    if (this.MCXDATA[i].COMPANY_NAME == SYMBOL) {
                        this.MCXDATA[i].IS_SELECTED = true;
                        for (var j = 0; j < this.selectedsymbal.length; j++) {
                            if (this.selectedsymbal[j] == this.MCXDATA[i].COMPANY_NAME) {
                                this.selectedsymbal.splice(j, 1);
                            }
                        }
                        for (var j = 0; j < this.MCXSELECTED.length; j++) {
                            if (this.MCXSELECTED[j] == this.MCXDATA[i].COMPANY_NAME) {
                                this.MCXSELECTED.splice(j, 1);
                            }
                        }
                    }
                }
            }
        }
        console.log("selected data", this.selectedsymbal);
        console.log("cash data", this.CASHSELECTED);
        console.log("future data", this.FUTURESELECTED);
        console.log("OPTIONSELECTED data", this.OPTIONSELECTED);
        console.log("MCXSELECTED data", this.MCXSELECTED);
        // console.log(this.CASHDATANEW);
        // console.log(this.FUTUREDATANEW);
    };
    AdvisorysearchPage.prototype.selectdata = function (i) {
        if (this.type == 0) {
            this.api.SELECTEDDATA = i;
            this.navCtrl.pop();
        }
    };
    AdvisorysearchPage.prototype.advisorywatchlistaddapi = function () {
        var _this = this;
        this.api.Startloader();
        this.api.advisorywatchlistsave("1", this.api.AUTOADVISORYWATCHLISTNAME.title, this.CASHSELECTED, this.FUTURESELECTED, this.MCXSELECTED)
            .then(function (data) {
            console.log("watchlistsave data", data);
            _this.data = data;
            _this.api.Stoploader();
            if (_this.data.status == 200) {
                _this.api.presentToast(_this.data.message);
                _this.navCtrl.pop();
                // window.location.reload();
                // this.presentPrompt(this.data.data[0].ID, this.data.data[0].OTP);
                // this.openModal(this.data.data[0].OTP, this.data.data[0].ID, this.mobile.value);
            }
            else {
                _this.api.ErrorApi(_this.data.status, _this.data.message);
            }
        }).catch();
    };
    AdvisorysearchPage.prototype.advisorywatchlistupdateapi = function () {
        var _this = this;
        this.api.Startloader();
        this.api.advisorywatchlistupdate("1", this.api.AUTOADVISORYWATCHLISTNAME, this.CASHSELECTED, this.FUTURESELECTED, this.api.AUTOADVISORYWATCHLISTID, this.OPTIONSELECTED, this.MCXSELECTED)
            .then(function (data) {
            console.log("watchlistupdateapi data", data);
            _this.data = data;
            _this.api.Stoploader();
            if (_this.data.status == 200) {
                _this.api.presentToast(_this.data.message);
                _this.navCtrl.pop();
                // window.location.reload();
                // this.presentPrompt(this.data.data[0].ID, this.data.data[0].OTP);
                // this.openModal(this.data.data[0].OTP, this.data.data[0].ID, this.mobile.value);
            }
            else {
                _this.api.ErrorApi(_this.data.status, _this.data.message);
            }
        }).catch();
    };
    AdvisorysearchPage.prototype.checkall = function (s, type) {
        console.log('CHECK', type);
        this.selectedsymbal = [];
        if (type.checked == true) {
            if (s == 'CASH') {
                this.CASHSELECTED = [];
                for (var i = 0; i < this.CASHDATA.length; i++) {
                    this.CASHDATA[i].IS_SELECTED = true;
                    this.selectedsymbal.push(this.CASHDATA[i].COMPANY_NAME);
                    this.CASHSELECTED.push(this.CASHDATA[i].COMPANY_NAME);
                }
            }
            else if (s == 'FUTURE') {
                this.FUTURESELECTED = [];
                for (var i = 0; i < this.FUTUREDATA.length; i++) {
                    this.FUTUREDATA[i].IS_SELECTED = true;
                    this.selectedsymbal.push(this.FUTUREDATA[i].COMPANY_NAME);
                    this.FUTURESELECTED.push(this.FUTUREDATA[i].COMPANY_NAME);
                }
            }
            else if (s == 'MCX') {
                this.MCXSELECTED = [];
                for (var i = 0; i < this.MCXDATA.length; i++) {
                    this.MCXDATA[i].IS_SELECTED = true;
                    this.selectedsymbal.push(this.MCXDATA[i].COMPANY_NAME);
                    this.MCXSELECTED.push(this.MCXDATA[i].COMPANY_NAME);
                }
            }
        }
        else {
            if (s == 'CASH') {
                this.CASHSELECTED = [];
                for (var i = 0; i < this.CASHDATA.length; i++) {
                    this.CASHDATA[i].IS_SELECTED = false;
                    this.selectedsymbal = [];
                    this.CASHSELECTED = [];
                }
            }
            else if (s == 'FUTURE') {
                this.FUTURESELECTED = [];
                for (var i = 0; i < this.FUTUREDATA.length; i++) {
                    this.FUTUREDATA[i].IS_SELECTED = false;
                    this.selectedsymbal = [];
                    this.FUTURESELECTED = [];
                }
            }
            else if (s == 'MCX') {
                this.MCXSELECTED = [];
                for (var i = 0; i < this.MCXDATA.length; i++) {
                    this.MCXDATA[i].IS_SELECTED = false;
                    this.selectedsymbal = [];
                    this.MCXSELECTED = [];
                }
            }
        }
        console.log("selected data", this.selectedsymbal);
        console.log("cash data", this.CASHSELECTED);
        console.log("future data", this.FUTURESELECTED);
        console.log("OPTIONSELECTED data", this.OPTIONSELECTED);
        console.log("MCXSELECTED data", this.MCXSELECTED);
    };
    AdvisorysearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-advisorysearch',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\advisorysearch\advisorysearch.html"*/'<!--\n\n  Generated template for the AdvisorysearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Search Symbol</ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar no-border-top no-padding style=" min-height: 30px !important;height: 30px;padding-bottom: 0 !important;">\n\n        <ion-segment [(ngModel)]="CASH">\n\n            <ion-segment-button value="CASH">\n\n                CASH\n\n            </ion-segment-button>\n\n            <ion-segment-button value="FUTURE">\n\n                FUTURE\n\n            </ion-segment-button>\n\n            <ion-segment-button value="MCX">\n\n                MCX\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n    <ion-navbar [ngSwitch]="CASH">\n\n        <ion-searchbar *ngSwitchCase="\'CASH\'" placeholder="Search Symbol" (ionInput)="initializeItems1($event)" style="border-radius: 50px;" no-margin no-padding #search></ion-searchbar>\n\n        <ion-searchbar *ngSwitchCase="\'FUTURE\'" placeholder="Search Symbol" (ionInput)="initializeItems2($event)" style="border-radius: 50px;" no-margin no-padding #search></ion-searchbar>\n\n        <ion-searchbar *ngSwitchCase="\'MCX\'" placeholder="Search Symbol" (ionInput)="initializeItems4($event)" style="border-radius: 50px;" no-margin no-padding #search></ion-searchbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div [ngSwitch]="CASH" style="height: 100%;">\n\n        <div *ngSwitchCase="\'CASH\'">\n\n            <ion-item no-lines no-border>\n\n                <div item-start>\n\n                    <h3 style="font-weight: bold;">Select All</h3>\n\n                </div>\n\n                <ion-checkbox item-end style="width: fit-content" (ionChange)="checkall(\'CASH\',$event)"></ion-checkbox>\n\n            </ion-item>\n\n            <hr no-margin no-padding>\n\n            <ion-list *ngFor="let i of CASHDATANEW" no-margin>\n\n                <ion-item no-lines no-border (click)="selectdata(i)">\n\n                    <div item-start>\n\n                        <h3 style="font-weight: bold;">{{i.COMPANY_NAME}}</h3>\n\n                        <p style="color: #999999;font-size: 12px;">{{i.CATEGORY}}</p>\n\n                    </div>\n\n                    <ion-checkbox [checked]="i.IS_SELECTED" (click)="changedata(i.COMPANY_NAME,i.IS_SELECTED,i.CATEGORY)" [(ngModel)]="i.IS_SELECTED" item-end style="width: fit-content"></ion-checkbox>\n\n                </ion-item>\n\n                <hr no-margin no-padding>\n\n            </ion-list>\n\n\n\n            <ion-infinite-scroll (ionInfinite)="doInfinite($event,\'cash\')">\n\n                <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n            </ion-infinite-scroll>\n\n        </div>\n\n        <div *ngSwitchCase="\'FUTURE\'">\n\n            <ion-item no-lines no-border>\n\n                <div item-start>\n\n                    <h3 style="font-weight: bold;">Select All</h3>\n\n                </div>\n\n                <ion-checkbox item-end style="width: fit-content" (ionChange)="checkall(\'FUTURE\',$event)"></ion-checkbox>\n\n            </ion-item>\n\n            <ion-list *ngFor="let j of FUTUREDATANEW">\n\n                <ion-item no-lines no-border (click)="selectdata(j)">\n\n                    <div item-start>\n\n                        <h3 style="font-weight: bold;">{{j.COMPANY_NAME}}</h3>\n\n                        <p style="color: #999999;font-size: 12px;">{{j.CATEGORY}}</p>\n\n                    </div>\n\n                    <ion-checkbox *ngIf="type != 0" [checked]="j.IS_SELECTED" (click)="changedata(j.COMPANY_NAME,j.IS_SELECTED,j.CATEGORY)" [(ngModel)]="j.IS_SELECTED" item-end style="width: fit-content"></ion-checkbox>\n\n                </ion-item>\n\n                <hr no-margin no-padding>\n\n            </ion-list>\n\n\n\n            <ion-infinite-scroll (ionInfinite)="doInfinite($event,\'future\')">\n\n                <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n            </ion-infinite-scroll>\n\n        </div>\n\n        <div *ngSwitchCase="\'MCX\'">\n\n            <ion-item no-lines no-border>\n\n                <div item-start>\n\n                    <h3 style="font-weight: bold;">Select All</h3>\n\n                </div>\n\n                <ion-checkbox item-end style="width: fit-content" (ionChange)="checkall(\'MCX\',$event)"></ion-checkbox>\n\n            </ion-item>\n\n            <ion-list *ngFor="let j of MCXDATANEW">\n\n                <ion-item no-lines no-border (click)="selectdata(j)">\n\n                    <div item-start>\n\n                        <h3 style="font-weight: bold;">{{j.COMPANY_NAME}}</h3>\n\n                        <p style="color: #999999;font-size: 12px;">{{j.CATEGORY}}</p>\n\n                    </div>\n\n                    <ion-checkbox *ngIf="type != 0" [checked]="j.IS_SELECTED" (click)="changedata(j.COMPANY_NAME,j.IS_SELECTED,j.CATEGORY)" [(ngModel)]="j.IS_SELECTED" item-end style="width: fit-content"></ion-checkbox>\n\n                </ion-item>\n\n                <hr no-margin no-padding>\n\n            </ion-list>\n\n\n\n            <ion-infinite-scroll (ionInfinite)="doInfinite($event,\'mcx\')">\n\n                <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n            </ion-infinite-scroll>\n\n        </div>\n\n\n\n    </div>\n\n</ion-content>\n\n<ion-footer>\n\n    <button ion-button *ngIf="type != 0" full (click)="openalertpage()"> Save</button>\n\n</ion-footer>'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\advisorysearch\advisorysearch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], AdvisorysearchPage);
    return AdvisorysearchPage;
}());

//# sourceMappingURL=advisorysearch.js.map

/***/ })

});
//# sourceMappingURL=49.js.map