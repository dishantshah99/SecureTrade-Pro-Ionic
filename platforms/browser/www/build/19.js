webpackJsonp([19],{

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistPageModule", function() { return ProductlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productlist__ = __webpack_require__(513);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductlistPageModule = /** @class */ (function () {
    function ProductlistPageModule() {
    }
    ProductlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__productlist__["a" /* ProductlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productlist__["a" /* ProductlistPage */]),
            ],
        })
    ], ProductlistPageModule);
    return ProductlistPageModule;
}());

//# sourceMappingURL=productlist.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductlistPage; });
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



var ProductlistPage = /** @class */ (function () {
    function ProductlistPage(navCtrl, navParams, api) {
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
        if (navParams.data == {}) {
            this.type = 0;
            console.log(this.type);
        }
        else {
            this.type = navParams.data;
            console.log(this.type);
        }
        this.CASHDATA = api.symboldata.CASH;
        this.FUTUREDATA = api.symboldata.FUTURE;
        // this.OPTIONDATA = api.symboldata.OPTION;
        this.MCXDATA = api.symboldata.MCX;
        console.log("CASHDATA", JSON.stringify(this.CASHDATA));
        console.log("FUTUREDATA", this.FUTUREDATA);
        // console.log("OPTIONDATA", this.OPTIONDATA);
        console.log("MCXDATA", this.MCXDATA);
        if (this.type == 3 || this.type == 4) {
            this.CASHSELECTED = [];
            this.FUTURESELECTED = [];
            // this.OPTIONSELECTED = [];
            this.MCXSELECTED = [];
            if (this.type == 3) {
                console.log("selected array", api.WATCHLISTDATA);
                if (this.api.WATCHLISTDATA.SYMBOL.CASH.length > 0) {
                    for (var i = 0; i < this.api.WATCHLISTDATA.SYMBOL.CASH.length; i++) {
                        for (var j = 0; j < this.CASHDATA.length; j++) {
                            if (this.api.WATCHLISTDATA.SYMBOL.CASH[i].TOKEN == this.CASHDATA[j].TOKEN) {
                                this.CASHDATA[j].IS_SELECTED = true;
                                var data = {
                                    "SYMBOL": this.CASHDATA[j].SYMBOL,
                                    "FUT_OPT_DATE_MONTH": this.CASHDATA[j].FUT_OPT_DATE_MONTH,
                                    "TOKEN": this.CASHDATA[j].TOKEN,
                                    "STRIKE": this.CASHDATA[j].STRIKE,
                                    "OPTION_TYPE": this.CASHDATA[j].OPTION_TYPE
                                };
                                this.selectedsymbal.push(data);
                                this.CASHSELECTED.push(data);
                            }
                        }
                        var cash = void 0;
                        cash = this.CASHDATA;
                        var cash_data = this.sortByKey('asc', cash);
                        this.CASHDATA = cash_data;
                        console.log("CASHDATA", this.CASHDATA);
                    }
                }
                if (this.api.WATCHLISTDATA.SYMBOL.FUTURE.length > 0) {
                    for (var i = 0; i < this.api.WATCHLISTDATA.SYMBOL.FUTURE.length; i++) {
                        for (var j = 0; j < this.FUTUREDATA.length; j++) {
                            if (this.api.WATCHLISTDATA.SYMBOL.FUTURE[i].TOKEN == this.FUTUREDATA[j].TOKEN) {
                                this.FUTUREDATA[j].IS_SELECTED = true;
                                var data = {
                                    "SYMBOL": this.FUTUREDATA[j].SYMBOL,
                                    "FUT_OPT_DATE_MONTH": this.FUTUREDATA[j].FUT_OPT_DATE_MONTH,
                                    "TOKEN": this.FUTUREDATA[j].TOKEN,
                                    "STRIKE": this.FUTUREDATA[j].STRIKE,
                                    "OPTION_TYPE": this.FUTUREDATA[j].OPTION_TYPE
                                };
                                this.selectedsymbal.push(data);
                                this.FUTURESELECTED.push(data);
                            }
                        }
                        var future = void 0;
                        future = this.FUTUREDATA;
                        var futuredata = this.sortByKey('asc', future);
                        this.FUTUREDATA = futuredata;
                        console.log("FUTUREDATA", this.FUTUREDATA);
                    }
                }
                // if (this.api.WATCHLISTDATA.SYMBOL.OPTION.length > 0) {
                //     for (let i = 0; i < this.api.WATCHLISTDATA.SYMBOL.OPTION.length; i++) {
                //         for (let j = 0; j < this.OPTIONDATA.length; j++) {
                //             if (this.api.WATCHLISTDATA.SYMBOL.OPTION[i].TOKEN == this.OPTIONDATA[j].TOKEN) {
                //                 this.OPTIONDATA[j].IS_SELECTED = true;
                //
                //                 let data = {
                //                     "SYMBOL": this.OPTIONDATA[j].SYMBOL,
                //                     "FUT_OPT_DATE_MONTH": this.OPTIONDATA[j].FUT_OPT_DATE_MONTH,
                //                     "TOKEN": this.OPTIONDATA[j].TOKEN,
                //                     "STRIKE": this.OPTIONDATA[j].STRIKE,
                //                     "OPTION_TYPE": this.OPTIONDATA[j].OPTION_TYPE
                //                 };
                //                 this.selectedsymbal.push(data);
                //                 this.OPTIONSELECTED.push(data);
                //             }
                //         }
                //     }
                // }
                if (this.api.WATCHLISTDATA.SYMBOL.MCX.length > 0) {
                    for (var i = 0; i < this.api.WATCHLISTDATA.SYMBOL.MCX.length; i++) {
                        for (var j = 0; j < this.MCXDATA.length; j++) {
                            if (this.api.WATCHLISTDATA.SYMBOL.MCX[i].TOKEN == this.MCXDATA[j].TOKEN) {
                                this.MCXDATA[j].IS_SELECTED = true;
                                var data = {
                                    "SYMBOL": this.MCXDATA[j].SYMBOL,
                                    "FUT_OPT_DATE_MONTH": this.MCXDATA[j].FUT_OPT_DATE_MONTH,
                                    "TOKEN": this.MCXDATA[j].TOKEN,
                                    "STRIKE": this.MCXDATA[j].STRIKE,
                                    "OPTION_TYPE": this.MCXDATA[j].OPTION_TYPE
                                };
                                this.selectedsymbal.push(data);
                                this.MCXSELECTED.push(data);
                            }
                        }
                        var mcx = void 0;
                        mcx = this.MCXDATA;
                        var mcxdata = this.sortByKey('asc', mcx);
                        this.MCXDATA = mcxdata;
                        console.log("MCXDATA", this.MCXDATA);
                    }
                }
            }
            else if (this.type == 4) {
                console.log("selected array", api.WATCHLISTDATA);
                if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.CASH.length > 0) {
                    for (var i = 0; i < this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.CASH.length; i++) {
                        for (var j = 0; j < this.CASHDATA.length; j++) {
                            if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.CASH[i].TOKEN == this.CASHDATA[j].TOKEN) {
                                this.CASHDATA[j].IS_SELECTED = true;
                                var data = {
                                    "SYMBOL": this.CASHDATA[j].SYMBOL,
                                    "FUT_OPT_DATE_MONTH": this.CASHDATA[j].FUT_OPT_DATE_MONTH,
                                    "TOKEN": this.CASHDATA[j].TOKEN,
                                    "STRIKE": this.CASHDATA[j].STRIKE,
                                    "OPTION_TYPE": this.CASHDATA[j].OPTION_TYPE
                                };
                                this.selectedsymbal.push(data);
                                this.CASHSELECTED.push(data);
                            }
                        }
                    }
                }
                if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.FUTURE.length > 0) {
                    for (var i = 0; i < this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.FUTURE.length; i++) {
                        for (var j = 0; j < this.FUTUREDATA.length; j++) {
                            if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.FUTURE[i].TOKEN == this.FUTUREDATA[j].TOKEN) {
                                this.FUTUREDATA[j].IS_SELECTED = true;
                                var data = {
                                    "SYMBOL": this.FUTUREDATA[j].SYMBOL,
                                    "FUT_OPT_DATE_MONTH": this.FUTUREDATA[j].FUT_OPT_DATE_MONTH,
                                    "TOKEN": this.FUTUREDATA[j].TOKEN,
                                    "STRIKE": this.FUTUREDATA[j].STRIKE,
                                    "OPTION_TYPE": this.FUTUREDATA[j].OPTION_TYPE
                                };
                                this.selectedsymbal.push(data);
                                this.FUTURESELECTED.push(data);
                            }
                        }
                    }
                }
                if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.MCX.length > 0) {
                    for (var i = 0; i < this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.MCX.length; i++) {
                        for (var j = 0; j < this.MCXDATA.length; j++) {
                            if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.MCX[i].TOKEN == this.MCXDATA[j].TOKEN) {
                                this.MCXDATA[j].IS_SELECTED = true;
                                var data = {
                                    "SYMBOL": this.MCXDATA[j].SYMBOL,
                                    "FUT_OPT_DATE_MONTH": this.MCXDATA[j].FUT_OPT_DATE_MONTH,
                                    "TOKEN": this.MCXDATA[j].TOKEN,
                                    "STRIKE": this.MCXDATA[j].STRIKE,
                                    "OPTION_TYPE": this.MCXDATA[j].OPTION_TYPE
                                };
                                this.selectedsymbal.push(data);
                                this.MCXSELECTED.push(data);
                            }
                        }
                    }
                }
            }
            console.log("selected data", this.selectedsymbal);
            console.log("cash data", this.CASHSELECTED);
            console.log("future data", this.FUTURESELECTED);
            // console.log("OPTIONSELECTED data", this.OPTIONSELECTED);
            console.log("MCXSELECTED data", this.MCXSELECTED);
            api.WATCHLISTDATA = [];
            api.AUTOADVISORYWATCHLISTDATA = [];
        }
        else {
            for (var i = 0; i < this.CASHDATA.length; i++) {
                this.CASHDATA[i].IS_SELECTED = false;
            }
            for (var j = 0; j < this.FUTUREDATA.length; j++) {
                this.FUTUREDATA[j].IS_SELECTED = false;
            }
            for (var j = 0; j < this.MCXDATA.length; j++) {
                this.MCXDATA[j].IS_SELECTED = false;
            }
            // for (let z = 0; z < this.OPTIONDATA.length; z++) {
            //     this.OPTIONDATA[z].IS_SELECTED = false;
            // }
        }
    }
    ProductlistPage.prototype.sortByKey = function (sort, array) {
        console.log("SORT ARRAY", array);
        return array.sort(function (a, b) {
            return b.IS_SELECTED - a.IS_SELECTED;
        });
    };
    ProductlistPage.prototype.ionViewDidEnter = function () {
        console.log("enter refresh");
        for (var i = 0; i < 30; i++) {
            this.CASHDATANEW.push(this.CASHDATA[i]);
            this.FUTUREDATANEW.push(this.FUTUREDATA[i]);
            // this.OPTIONDATANEW.push(this.OPTIONDATA[i]);
            this.MCXDATANEW.push(this.MCXDATA[i]);
            this.cash_position = i;
            this.future_position = i;
            this.mcx_position = i;
        }
        console.log(this.CASHDATANEW);
        console.log(this.FUTUREDATANEW);
    };
    ProductlistPage.prototype.initializeItems1 = function (ev) {
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
                this.CASH_VAL = 0;
            }
        }
        if (val && val.trim() !== '') {
            this.CASH_SEARCH_DATA = this.CASHDATA.filter(function (item) {
                return (item.SYMBOL.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.COMPANY.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            if (this.CASH_SEARCH_DATA.length > 0) {
                this.CASHDATANEW = [];
                for (var i = 0; i < 60; i++) {
                    if (this.CASH_SEARCH_DATA[i]) {
                        this.CASHDATANEW.push(this.CASH_SEARCH_DATA[i]);
                        this.CASH_VAL = 1;
                    }
                }
            }
        }
    };
    ProductlistPage.prototype.initializeItems2 = function (ev) {
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
                this.FUTURE_VAL = 0;
            }
        }
        if (val && val.trim() !== '') {
            this.FUTURE_SEARCH_DATA = this.FUTUREDATA.filter(function (item) {
                return (item.SYMBOL.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.COMPANY.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            if (this.FUTURE_SEARCH_DATA.length > 0) {
                this.FUTUREDATANEW = [];
                for (var i = 0; i < 60; i++) {
                    if (this.FUTURE_SEARCH_DATA[i]) {
                        this.FUTUREDATANEW.push(this.FUTURE_SEARCH_DATA[i]);
                        this.FUTURE_VAL = 1;
                    }
                }
            }
        }
    };
    ProductlistPage.prototype.initializeItems3 = function (ev) {
        var val;
        console.log(ev);
        if (ev.data != null) {
            val = ev.target.value.trim();
        }
        else {
            val = "";
            for (var i = 0; i < 30; i++) {
                this.OPTIONDATANEW.push(this.OPTIONDATA[i]);
                this.option_position = i;
                this.OPTION_VAL = 0;
            }
        }
        if (val && val.trim() !== '') {
            this.OPTION_SEARCH_DATA = this.OPTIONDATA.filter(function (item) {
                return (item.SYMBOL.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.STRIKE.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.COMPANY.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.DISPLAY_OPTION_TYPE.toLowerCase().indexOf(val.toLowerCase()) > -1);
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
    ProductlistPage.prototype.initializeItems4 = function (ev) {
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
            this.MCX_SEARCH_DATA = this.MCXDATA.filter(function (item) {
                return (item.SYMBOL.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.COMPANY.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            if (this.MCX_SEARCH_DATA.length > 0) {
                this.MCXDATANEW = [];
                for (var i = 0; i < 60; i++) {
                    if (this.MCX_SEARCH_DATA[i]) {
                        this.MCXDATANEW.push(this.MCX_SEARCH_DATA[i]);
                        this.MCX_VAL = 1;
                    }
                }
            }
        }
    };
    ProductlistPage.prototype.doInfinite = function (infiniteScroll, type) {
        var _this = this;
        console.log("position", this.position);
        console.log('Begin async operation');
        setTimeout(function () {
            if (type = 'cash') {
                _this.cash_position++;
                var cash_count = (_this.cash_position + 30);
                for (var i = _this.cash_position; i < cash_count; i++) {
                    if (_this.CASH_VAL == 1) {
                        if (_this.CASH_SEARCH_DATA[i]) {
                            _this.CASHDATANEW.push(_this.CASH_SEARCH_DATA[i]);
                            _this.cash_position = i;
                        }
                    }
                    else {
                        if (_this.CASHDATA[i]) {
                            _this.CASHDATANEW.push(_this.CASHDATA[i]);
                            _this.cash_position = i;
                        }
                    }
                }
            }
            if (type = 'future') {
                _this.future_position++;
                var future_count = (_this.future_position + 30);
                for (var i = _this.future_position; i < future_count; i++) {
                    if (_this.FUTURE_VAL == 1) {
                        if (_this.FUTURE_SEARCH_DATA[i]) {
                            _this.FUTUREDATANEW.push(_this.FUTURE_SEARCH_DATA[i]);
                            _this.future_position = i;
                        }
                    }
                    else {
                        if (_this.FUTUREDATA[i]) {
                            _this.FUTUREDATANEW.push(_this.FUTUREDATA[i]);
                            _this.future_position = i;
                        }
                    }
                }
            }
            if (type = 'option') {
                _this.option_position++;
                var option_count = (_this.option_position + 30);
                for (var i = _this.option_position; i < option_count; i++) {
                    if (_this.OPTION_VAL == 1) {
                        if (_this.OPTION_SEARCH_DATA[i]) {
                            _this.OPTIONDATANEW.push(_this.OPTION_SEARCH_DATA[i]);
                            _this.option_position = i;
                        }
                    }
                    else {
                        if (_this.OPTIONDATA[i]) {
                            _this.OPTIONDATANEW.push(_this.OPTIONDATA[i]);
                            _this.option_position = i;
                        }
                    }
                }
            }
            if (type = 'mcx') {
                _this.mcx_position++;
                var mcx_count = (_this.mcx_position + 30);
                for (var i = _this.mcx_position; i < mcx_count; i++) {
                    if (_this.MCX_VAL == 1) {
                        if (_this.MCX_SEARCH_DATA[i]) {
                            _this.MCXDATANEW.push(_this.MCX_SEARCH_DATA[i]);
                            _this.mcx_position = i;
                        }
                    }
                    else {
                        if (_this.MCXDATA[i]) {
                            _this.MCXDATANEW.push(_this.MCXDATA[i]);
                            _this.mcx_position = i;
                        }
                    }
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
    ProductlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductlistPage');
    };
    ProductlistPage.prototype.openalertpage = function () {
        // this.selectedsymbal = [];
        console.log("type", this.type);
        if (this.type == 1 || this.type == 2 || this.type == 3 || this.type == 4 || this.type == 5) {
            console.log("selected data", this.selectedsymbal);
            if (this.selectedsymbal.length > 0) {
                if (this.type == 1) {
                    this.navCtrl.push('AlertaddPage', { data: this.selectedsymbal, type: 0 });
                }
                else if (this.type == 2) {
                    console.log("cash data", this.CASHSELECTED);
                    console.log("future data", this.FUTURESELECTED);
                    console.log("OPTIONSELECTED data", this.OPTIONSELECTED);
                    console.log("MCXSELECTED data", this.MCXSELECTED);
                    this.watchlistaddapi();
                }
                else if (this.type == 3) {
                    console.log("cash data", this.CASHSELECTED);
                    console.log("future data", this.FUTURESELECTED);
                    console.log("OPTIONSELECTED data", this.OPTIONSELECTED);
                    console.log("MCXSELECTED data", this.MCXSELECTED);
                    this.watchlistupdateapi();
                }
                else if (this.type == 4) {
                    console.log("cash data", this.CASHSELECTED);
                    console.log("future data", this.FUTURESELECTED);
                    console.log("OPTIONSELECTED data", this.OPTIONSELECTED);
                    console.log("MCXSELECTED data", this.MCXSELECTED);
                }
                else if (this.type == 5) {
                    console.log("cash data", this.CASHSELECTED);
                    console.log("future data", this.FUTURESELECTED);
                    console.log("OPTIONSELECTED data", this.OPTIONSELECTED);
                    console.log("MCXSELECTED data", this.MCXSELECTED);
                    this.watchlistaddapi();
                }
            }
            else {
                this.api.presentToast("Select Symbol");
            }
        }
    };
    ProductlistPage.prototype.changedata = function (SYMBOL, TOKEN, TYPE, STATUS) {
        console.log("selected SYMBOL", SYMBOL);
        console.log("selected STATUS", STATUS);
        console.log("selected TYPE", TYPE);
        console.log("selected TOKEN", TOKEN);
        if (STATUS == true) {
            this.selectedsymbal = [];
            if (TYPE == "Cash") {
                // this.CASHSELECTED = [];
                for (var i = 0; i < this.CASHDATA.length; i++) {
                    // console.log("this.CASHDATA[i].SYMBOL", this.CASHDATA[i].SYMBOL + " = "+SYMBOL);
                    if (this.CASHDATA[i].TOKEN == TOKEN) {
                        this.CASHDATA[i].IS_SELECTED = true;
                        var data = {
                            "SYMBOL": this.CASHDATA[i].SYMBOL,
                            "FUT_OPT_DATE_MONTH": this.CASHDATA[i].FUT_OPT_DATE_MONTH,
                            "TOKEN": this.CASHDATA[i].TOKEN,
                            "STRIKE": this.CASHDATA[i].STRIKE,
                            "OPTION_TYPE": this.CASHDATA[i].OPTION_TYPE
                        };
                        this.selectedsymbal.push(data);
                        this.CASHSELECTED.push(data);
                    }
                }
            }
            if (TYPE == "Future") {
                // this.FUTURESELECTED = [];
                for (var i = 0; i < this.FUTUREDATA.length; i++) {
                    if (this.FUTUREDATA[i].TOKEN == TOKEN) {
                        this.FUTUREDATA[i].IS_SELECTED = true;
                        var data = {
                            "SYMBOL": this.FUTUREDATA[i].SYMBOL,
                            "FUT_OPT_DATE_MONTH": this.FUTUREDATA[i].FUT_OPT_DATE_MONTH,
                            "TOKEN": this.FUTUREDATA[i].TOKEN,
                            "STRIKE": this.FUTUREDATA[i].STRIKE,
                            "OPTION_TYPE": this.FUTUREDATA[i].OPTION_TYPE
                        };
                        this.selectedsymbal.push(data);
                        this.FUTURESELECTED.push(data);
                    }
                }
            }
            if (TYPE == "Option") {
                // this.FUTURESELECTED = [];
                for (var i = 0; i < this.OPTIONDATA.length; i++) {
                    if (this.OPTIONDATA[i].TOKEN == TOKEN) {
                        this.OPTIONDATA[i].IS_SELECTED = true;
                        var data = {
                            "SYMBOL": this.OPTIONDATA[i].SYMBOL,
                            "FUT_OPT_DATE_MONTH": this.OPTIONDATA[i].FUT_OPT_DATE_MONTH,
                            "TOKEN": this.OPTIONDATA[i].TOKEN,
                            "STRIKE": this.OPTIONDATA[i].STRIKE,
                            "OPTION_TYPE": this.OPTIONDATA[i].OPTION_TYPE
                        };
                        this.selectedsymbal.push(data);
                        this.OPTIONSELECTED.push(data);
                    }
                }
            }
            if (TYPE == "MCX") {
                // this.FUTURESELECTED = [];
                for (var i = 0; i < this.MCXDATA.length; i++) {
                    if (this.MCXDATA[i].TOKEN == TOKEN) {
                        this.MCXDATA[i].IS_SELECTED = true;
                        var data = {
                            "SYMBOL": this.MCXDATA[i].SYMBOL,
                            "FUT_OPT_DATE_MONTH": this.MCXDATA[i].FUT_OPT_DATE_MONTH,
                            "TOKEN": this.MCXDATA[i].TOKEN,
                            "STRIKE": this.MCXDATA[i].STRIKE,
                            "OPTION_TYPE": this.MCXDATA[i].OPTION_TYPE
                        };
                        this.selectedsymbal.push(data);
                        this.MCXSELECTED.push(data);
                    }
                }
            }
        }
        else if (STATUS == false) {
            if (TYPE == "Cash") {
                for (var i = 0; i < this.CASHDATA.length; i++) {
                    // console.log("this.CASHDATA[i].SYMBOL", this.CASHDATA[i].SYMBOL + " = "+SYMBOL);
                    if (this.CASHDATA[i].TOKEN == TOKEN) {
                        this.CASHDATA[i].IS_SELECTED = false;
                        for (var j = 0; j < this.selectedsymbal.length; j++) {
                            if (this.selectedsymbal[j].SYMBOL == this.CASHDATA[i].SYMBOL) {
                                this.selectedsymbal.splice(j, 1);
                            }
                        }
                        for (var j = 0; j < this.CASHSELECTED.length; j++) {
                            if (this.CASHSELECTED[j].TOKEN == this.CASHDATA[i].TOKEN) {
                                this.CASHSELECTED.splice(j, 1);
                            }
                        }
                    }
                }
            }
            if (TYPE == "Future") {
                for (var i = 0; i < this.FUTUREDATA.length; i++) {
                    if (this.FUTUREDATA[i].TOKEN == TOKEN) {
                        this.FUTUREDATA[i].IS_SELECTED = true;
                        for (var j = 0; j < this.selectedsymbal.length; j++) {
                            if (this.selectedsymbal[j].TOKEN == this.FUTUREDATA[i].TOKEN) {
                                this.selectedsymbal.splice(j, 1);
                            }
                        }
                        for (var j = 0; j < this.FUTURESELECTED.length; j++) {
                            if (this.FUTURESELECTED[j].TOKEN == this.FUTUREDATA[i].TOKEN) {
                                this.FUTURESELECTED.splice(j, 1);
                            }
                        }
                    }
                }
            }
            if (TYPE == "Option") {
                for (var i = 0; i < this.OPTIONDATA.length; i++) {
                    if (this.OPTIONDATA[i].TOKEN == TOKEN) {
                        this.OPTIONDATA[i].IS_SELECTED = true;
                        for (var j = 0; j < this.selectedsymbal.length; j++) {
                            if (this.selectedsymbal[j].TOKEN == this.OPTIONDATA[i].TOKEN) {
                                this.selectedsymbal.splice(j, 1);
                            }
                        }
                        for (var j = 0; j < this.FUTURESELECTED.length; j++) {
                            if (this.OPTIONSELECTED[j].TOKEN == this.OPTIONSELECTED[i].TOKEN) {
                                this.OPTIONSELECTED.splice(j, 1);
                            }
                        }
                    }
                }
            }
            if (TYPE == "MCX") {
                for (var i = 0; i < this.MCXDATA.length; i++) {
                    if (this.MCXDATA[i].TOKEN == TOKEN) {
                        this.MCXDATA[i].IS_SELECTED = true;
                        for (var j = 0; j < this.selectedsymbal.length; j++) {
                            if (this.selectedsymbal[j].TOKEN == this.MCXDATA[i].TOKEN) {
                                this.selectedsymbal.splice(j, 1);
                            }
                        }
                        for (var j = 0; j < this.MCXSELECTED.length; j++) {
                            if (this.MCXSELECTED[j].TOKEN == this.MCXSELECTED[i].TOKEN) {
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
    ProductlistPage.prototype.selectdata = function (i) {
        if (this.type == 0) {
            this.api.SELECTEDDATA = i;
            this.navCtrl.pop();
        }
    };
    ProductlistPage.prototype.watchlistaddapi = function () {
        var _this = this;
        this.api.Startloader();
        this.api.watchlistsave("1", this.api.WATCHLISTNAME.title, this.CASHSELECTED, this.FUTURESELECTED, this.OPTIONSELECTED, this.MCXSELECTED)
            .then(function (data) {
            console.log("watchlistsave data", data);
            _this.data = data;
            _this.api.Stoploader();
            if (_this.data.status == 200) {
                _this.api.presentToast(_this.data.message);
                _this.api.NEWWATCHLISTADD = _this.api.WATCHLISTNAME.title;
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
    ProductlistPage.prototype.watchlistupdateapi = function () {
        var _this = this;
        this.api.Startloader();
        this.api.watchlistupdate("1", this.api.WATCHLISTNAME, this.CASHSELECTED, this.FUTURESELECTED, this.api.WATCHLISTID, this.OPTIONSELECTED, this.MCXSELECTED)
            .then(function (data) {
            console.log("watchlistupdateapi data", data);
            _this.data = data;
            _this.api.Stoploader();
            if (_this.data.status == 200) {
                _this.api.presentToast(_this.data.message);
                _this.navCtrl.popToRoot();
                // window.location.reload();
                // this.presentPrompt(this.data.data[0].ID, this.data.data[0].OTP);
                // this.openModal(this.data.data[0].OTP, this.data.data[0].ID, this.mobile.value);
            }
            else {
                _this.api.ErrorApi(_this.data.status, _this.data.message);
            }
        }).catch();
    };
    ProductlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productlist',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\productlist\productlist.html"*/'<!--\n\n  Generated template for the ProductlistPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>Search Symbol</ion-title>\n\n    </ion-navbar>\n\n\n\n    <ion-toolbar no-border-top no-padding style=" min-height: 30px !important;height: 30px;padding-bottom: 0 !important;">\n\n        <ion-segment [(ngModel)]="CASH">\n\n            <ion-segment-button value="CASH">\n\n                CASH\n\n            </ion-segment-button>\n\n            <ion-segment-button value="FUTURE">\n\n                FUTURE\n\n            </ion-segment-button>\n\n            <!--<ion-segment-button value="OPTION">-->\n\n            <!--OPTION-->\n\n            <!--</ion-segment-button>-->\n\n            <ion-segment-button value="MCX">\n\n                MCX\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n    <ion-navbar [ngSwitch]="CASH">\n\n        <ion-searchbar *ngSwitchCase="\'CASH\'" placeholder="Search Symbol" (ionInput)="initializeItems1($event)" style="border-radius: 50px;" no-margin no-padding #search></ion-searchbar>\n\n        <ion-searchbar *ngSwitchCase="\'FUTURE\'" placeholder="Search Symbol" (ionInput)="initializeItems2($event)" style="border-radius: 50px;" no-margin no-padding #search></ion-searchbar>\n\n        <!--<ion-searchbar *ngSwitchCase="\'OPTION\'" placeholder="Search Symbol" (ionInput)="initializeItems3($event)" style="border-radius: 50px;" no-margin no-padding #search></ion-searchbar>-->\n\n        <ion-searchbar *ngSwitchCase="\'MCX\'" placeholder="Search Symbol" (ionInput)="initializeItems4($event)" style="border-radius: 50px;" no-margin no-padding #search></ion-searchbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div [ngSwitch]="CASH" style="height: 100%;">\n\n        <div *ngSwitchCase="\'CASH\'">\n\n            <ion-list *ngFor="let i of CASHDATANEW" no-margin>\n\n                <ion-item no-lines no-border (click)="selectdata(i)">\n\n                    <div item-start>\n\n                        <h3 style="font-weight: bold;">{{i.SYMBOL}}</h3>\n\n                        <p style="color: #999999;font-size: 12px;">{{i.COMPANY}}</p>\n\n                    </div>\n\n                    <ion-checkbox *ngIf="type != 0" [checked]="i.IS_SELECTED" (click)="changedata(i.SYMBOL,i.TOKEN,i.SYMBOL_TYPE,i.IS_SELECTED)" [(ngModel)]="i.IS_SELECTED" item-end style="width: fit-content"></ion-checkbox>\n\n                </ion-item>\n\n                <hr no-margin no-padding>\n\n            </ion-list>\n\n\n\n            <ion-infinite-scroll (ionInfinite)="doInfinite($event,\'cash\')">\n\n                <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n            </ion-infinite-scroll>\n\n        </div>\n\n        <div *ngSwitchCase="\'FUTURE\'">\n\n            <ion-list *ngFor="let j of FUTUREDATANEW">\n\n                <ion-item no-lines no-border (click)="selectdata(j)">\n\n                    <div item-start>\n\n                        <h3 style="font-weight: bold;">{{j.SYMBOL}}</h3>\n\n                        <p style="color: #999999;font-size: 12px;">{{j.COMPANY + " " + j.FUT_OPT_DATE_MONTH }}</p>\n\n                    </div>\n\n                    <ion-checkbox *ngIf="type != 0" [checked]="j.IS_SELECTED" (click)="changedata(j.SYMBOL,j.TOKEN,j.SYMBOL_TYPE,j.IS_SELECTED)" [(ngModel)]="j.IS_SELECTED" item-end style="width: fit-content"></ion-checkbox>\n\n                </ion-item>\n\n                <hr no-margin no-padding>\n\n            </ion-list>\n\n\n\n            <ion-infinite-scroll (ionInfinite)="doInfinite($event,\'future\')">\n\n                <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n            </ion-infinite-scroll>\n\n        </div>\n\n        <!--<div *ngSwitchCase="\'OPTION\'">-->\n\n        <!--<ion-list *ngFor="let j of OPTIONDATANEW">-->\n\n        <!--<ion-item no-lines no-border (click)="selectdata(j)">-->\n\n        <!--<div item-start>-->\n\n        <!--<h3 style="font-weight: bold;">{{j.SYMBOL}}</h3>-->\n\n        <!--<p style="color: #999999;font-size: 12px;">{{j.COMPANY +" "+ j.FUT_OPT_DATE_MONTH +" "+ j.STRIKE + " "+ j.DISPLAY_OPTION_TYPE}}</p>-->\n\n        <!--</div>-->\n\n        <!--<ion-checkbox *ngIf="type != 0" [checked]="j.IS_SELECTED" (click)="changedata(j.SYMBOL,j.TOKEN,j.SYMBOL_TYPE,j.IS_SELECTED)" [(ngModel)]="j.IS_SELECTED" item-end style="width: fit-content"></ion-checkbox>-->\n\n        <!--</ion-item>-->\n\n        <!--<hr no-margin no-padding>-->\n\n        <!--</ion-list>-->\n\n\n\n        <!--<ion-infinite-scroll (ionInfinite)="doInfinite($event,\'option\')">-->\n\n        <!--<ion-infinite-scroll-content></ion-infinite-scroll-content>-->\n\n        <!--</ion-infinite-scroll>-->\n\n        <!--</div>-->\n\n        <div *ngSwitchCase="\'MCX\'">\n\n            <ion-list *ngFor="let j of MCXDATANEW">\n\n                <ion-item no-lines no-border (click)="selectdata(j)">\n\n                    <div item-start>\n\n                        <h3 style="font-weight: bold;">{{j.SYMBOL}}</h3>\n\n                        <p style="color: #999999;font-size: 12px;">{{j.COMPANY +" "+ j.FUT_OPT_DATE_MONTH}}</p>\n\n                    </div>\n\n                    <ion-checkbox *ngIf="type != 0" [checked]="j.IS_SELECTED" (click)="changedata(j.SYMBOL,j.TOKEN,j.SYMBOL_TYPE,j.IS_SELECTED)" [(ngModel)]="j.IS_SELECTED" item-end style="width: fit-content"></ion-checkbox>\n\n                </ion-item>\n\n                <hr no-margin no-padding>\n\n            </ion-list>\n\n\n\n            <ion-infinite-scroll (ionInfinite)="doInfinite($event,\'mcx\')">\n\n                <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n            </ion-infinite-scroll>\n\n        </div>\n\n\n\n    </div>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <button ion-button *ngIf="type != 0" full (click)="openalertpage()"> Save</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\productlist\productlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], ProductlistPage);
    return ProductlistPage;
}());

//# sourceMappingURL=productlist.js.map

/***/ })

});
//# sourceMappingURL=19.js.map