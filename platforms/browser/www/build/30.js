webpackJsonp([30],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rgts_liverate_rgts_liverate__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, globalApi, actionSheetCtrl, alertCtrl, modal, loadingCtrl, device, platform, viewCtrl, rgtsLiverateProvider, toastCtrl, app) {
        // this.tabBarelElement = document.querySelector('.tabbar');
        this.navCtrl = navCtrl;
        this.globalApi = globalApi;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.modal = modal;
        this.loadingCtrl = loadingCtrl;
        this.device = device;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.rgtsLiverateProvider = rgtsLiverateProvider;
        this.toastCtrl = toastCtrl;
        this.app = app;
        // users: any;
        this.splash = true;
        this.viewmode = false;
        this.count = 4;
        this.listshow = false;
        this.CASHDATA = [];
        this.FUTUREDATA = [];
        this.OPTIONDATA = [];
        this.MCXDATA = [];
        this.WATCHLIST = "WATCHLIST";
        this.SELECTEDCASHDATA = [];
        this.hidedetails = false;
        this.showdata = false;
        this.deleteshow = false;
        this.login_details = JSON.parse(localStorage.getItem("login_data"));
    }
    HomePage.prototype.changeview2 = function (position) {
        if (this.deleteshow == false) {
            this.SELECTEDCASHDATA = [];
            this.SELECTEDCASHDATA.push(position);
            //this.visible = !this.visible;
            var myModalOption = {
                enableBackdropDismiss: false,
            };
            var myModalData = { DATA: this.SELECTEDCASHDATA };
            var myModal = this.modal.create('SymbolpopupPage', myModalData, myModalOption);
            myModal.present();
            myModal.onDidDismiss(function (data) {
                //I have dismissed
                console.log("I have dismissed", data);
            });
            myModal.onWillDismiss(function (data) {
                //I am about to dismiss
                // console.log("I am about to dismiss", data);
            });
        }
        else {
            this.showConfirm(position);
        }
    };
    HomePage.prototype.showConfirm = function (SYMBOL_DETAILS) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Delete Symbol?',
            message: 'Do you want to delete symbol?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                        var data = {
                            "WATCHLISTID": _this.DDL_ID,
                            "SYMBOL_TYPE": SYMBOL_DETAILS.SYMBOL_TYPE,
                            "SYMBOL": SYMBOL_DETAILS.SYMBOL,
                            "TOKEN": SYMBOL_DETAILS.TOKEN
                        };
                        _this.globalApi.deletesymbal(data).then(function (data) {
                            _this.deletedata = data;
                            if (_this.deletedata.status == 200) {
                                _this.gethomepagedata();
                            }
                        }).catch();
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function (data) {
            console.log('Back data', _this.navCtrl.getActive(true));
            if (_this.navCtrl.getActive(true).id == "HomePage") {
                if (_this.hidedetails == true) {
                    _this.hidedetails = false;
                }
                else {
                    _this.globalApi.Exitpopapp();
                }
            }
        });
        this.gethomepagedata();
    };
    HomePage.prototype.watchlistdeletedit = function () {
        if (this.DDL_TYPE == "PRIVATE") {
            if (this.deleteshow == false) {
                this.deleteshow = true;
            }
            else {
                this.deleteshow = false;
            }
        }
        else {
            this.globalApi.presentToast("Default Watchlist can't update");
        }
    };
    HomePage.prototype.gethomepagedata = function () {
        var _this = this;
        console.log("Call api");
        this.globalApi.homepageapi().then(function (data) {
            // this.users = data;
            _this.homepagedata = data;
            console.log("homepagedata", _this.homepagedata);
            if (_this.homepagedata.status == '200') {
                clearInterval(_this.globalApi.live_rate_invertval);
                _this.showdata = true;
                _this.globalApi.symboldata = _this.homepagedata.symbol;
                console.log("Symboldata", _this.globalApi.symboldata);
                _this.globalApi.watch_list = _this.homepagedata.watch_list;
                _this.DEFAULT = _this.globalApi.watch_list.DEFAULT;
                _this.PRIVATE = _this.globalApi.watch_list.PRIVATE;
                if (_this.globalApi.NEWWATCHLISTADD != null) {
                    for (var i = 0; i < _this.PRIVATE.length; i++) {
                        if (_this.globalApi.NEWWATCHLISTADD == _this.PRIVATE[i].NAME) {
                            _this.globalApi.watch_postion = i;
                            _this.globalApi.watch_type = 'PRIVATE';
                            localStorage.setItem('WATCHLIST_POSITION', JSON.stringify(_this.globalApi.watch_postion));
                            localStorage.setItem('WATCHLIST_TYPE', JSON.stringify(_this.globalApi.watch_type));
                            _this.globalApi.NEWWATCHLISTADD = "";
                        }
                    }
                }
                var cash = void 0;
                var future = void 0;
                if (_this.globalApi.watch_list.PRIVATE.length <= 0) {
                    _this.globalApi.watch_postion = 0;
                    _this.globalApi.watch_type = 'DEFAULT';
                }
                if (_this.globalApi.watch_type == "DEFAULT") {
                    _this.DDL_NAME = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].NAME;
                    _this.DDL_ID = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].ID;
                    _this.DDL_TYPE = "DEFAULT";
                    _this.CASHDATA = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].SYMBOL.CASH;
                    _this.FUTUREDATA = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].SYMBOL.FUTURE;
                    _this.OPTIONDATA = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].SYMBOL.OPTION;
                    _this.MCXDATA = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].SYMBOL.MCX;
                    _this.FUTURE_URL = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].SYMBOL.FUTURE_URL;
                    _this.CASH_URL = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].SYMBOL.CASH_URL;
                    _this.OPTION_URL = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].SYMBOL.OPTION_URL;
                    _this.MCX_URL = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].SYMBOL.MCX_URL;
                    console.log("this.globalApi.watch_postion url", _this.globalApi.watch_postion);
                    console.log(" this.globalApi.watch_list.PRIVATE url", _this.globalApi.watch_list.DEFAULT);
                    console.log("cash url", _this.CASH_URL);
                    _this.liverateapicall();
                }
                else {
                    _this.DDL_NAME = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].NAME;
                    _this.DDL_ID = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].ID;
                    _this.DDL_TYPE = "PRIVATE";
                    _this.CASHDATA = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].SYMBOL.CASH;
                    _this.FUTUREDATA = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].SYMBOL.FUTURE;
                    _this.OPTIONDATA = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].SYMBOL.OPTION;
                    _this.MCXDATA = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].SYMBOL.MCX;
                    _this.FUTURE_URL = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].SYMBOL.FUTURE_URL;
                    _this.CASH_URL = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].SYMBOL.CASH_URL;
                    _this.OPTION_URL = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].SYMBOL.OPTION_URL;
                    _this.MCX_URL = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].SYMBOL.MCX_URL;
                    console.log("this.globalApi.watch_postion url", _this.globalApi.watch_postion);
                    console.log(" this.globalApi.watch_list.PRIVATE url", _this.globalApi.watch_list.PRIVATE);
                    console.log("cash url", _this.CASH_URL);
                    _this.liverateapicall();
                }
                // if (this.globalApi.watch_list.PRIVATE.length > 0) {
                //     this.DDL_NAME = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].NAME;
                //     this.DDL_ID = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].ID;
                //     this.DDL_TYPE = "PRIVATE";
                //     this.CASHDATA = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.CASH;
                //     this.FUTUREDATA = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.FUTURE;
                //     this.FUTURE_URL = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.FUTURE_URL;
                //     this.CASH_URL = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.CASH_URL;
                //
                //
                //     console.log("this.globalApi.watch_postion url", this.globalApi.watch_postion);
                //     console.log(" this.globalApi.watch_list.PRIVATE url", this.globalApi.watch_list.PRIVATE);
                //     console.log("cash url", this.CASH_URL);
                //     this.liverateapicall();
                // }
                ///////////////// Added by Bahubali. Date: 12-08-2019 19:29:59
                // this.set_token_data(cash, future);
            }
            else {
                _this.showdata = false;
                _this.globalApi.ErrorApi(_this.homepagedata.status, _this.homepagedata.message);
            }
        }).catch();
    };
    HomePage.prototype.opendata = function (p, type) {
        this.hidedetails = false;
        if (this.globalApi.live_rate_invertval) {
            clearInterval(this.globalApi.live_rate_invertval);
        }
        this.globalApi.watch_postion = p;
        this.globalApi.watch_type = type;
        localStorage.setItem('WATCHLIST_POSITION', JSON.stringify(this.globalApi.watch_postion));
        localStorage.setItem('WATCHLIST_TYPE', JSON.stringify(this.globalApi.watch_type));
        this.listshow = false;
        console.log("watch_postion", this.globalApi.watch_postion);
        var cash;
        var future;
        if (this.globalApi.watch_type == "DEFAULT") {
            this.DDL_NAME = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].NAME;
            this.DDL_ID = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].ID;
            this.DDL_TYPE = "DEFAULT";
            this.CASHDATA = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].SYMBOL.CASH;
            this.FUTUREDATA = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].SYMBOL.FUTURE;
            this.OPTIONDATA = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].SYMBOL.OPTION;
            this.MCXDATA = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].SYMBOL.MCX;
            this.FUTURE_URL = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].SYMBOL.FUTURE_URL;
            this.CASH_URL = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].SYMBOL.CASH_URL;
            this.OPTION_URL = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].SYMBOL.OPTION_URL;
            this.MCX_URL = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].SYMBOL.MCX_URL;
            this.globalApi.WATCHLISTID = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].ID;
            this.globalApi.WATCHLISTNAME = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].NAME;
        }
        else {
            this.DDL_NAME = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].NAME;
            this.DDL_ID = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].ID;
            this.DDL_TYPE = "PRIVATE";
            this.CASHDATA = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.CASH;
            this.FUTUREDATA = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.FUTURE;
            this.OPTIONDATA = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.OPTION;
            this.MCXDATA = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.MCX;
            this.FUTURE_URL = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.FUTURE_URL;
            this.CASH_URL = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.CASH_URL;
            this.OPTION_URL = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.OPTION_URL;
            this.MCX_URL = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.MCX_URL;
            this.globalApi.WATCHLISTID = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].ID;
            this.globalApi.WATCHLISTNAME = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].NAME;
        }
        // this.DDL_NAME = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].NAME;
        // this.DDL_ID = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].ID;
        // this.DDL_TYPE = "PRIVATE";
        // this.CASHDATA = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.CASH;
        // this.FUTUREDATA = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.FUTURE;
        // this.FUTURE_URL = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.FUTURE_URL;
        // this.CASH_URL = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.CASH_URL;
        this.liverateapicall();
    };
    HomePage.prototype.sortByKey = function (sort, array, key) {
        if (sort == 'asc') {
            return array.sort(function (a, b) {
                var x = a[key];
                var y = b[key];
                return ((x < y) ? -1 : ((x > y) ? 0 : 1));
            });
        }
        else {
            return array.sort(function (a, b) {
                var x = a[key];
                var y = b[key];
                return ((x < y) ? 1 : ((x > y) ? -1 : 0));
            });
        }
    };
    HomePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'A-Z',
                    handler: function () {
                        var cash;
                        var future;
                        var option;
                        var mcx;
                        if (_this.globalApi.watch_type == "DEFAULT") {
                            cash = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].SYMBOL.CASH;
                            future = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].SYMBOL.FUTURE;
                            option = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].SYMBOL.OPTION;
                            mcx = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].SYMBOL.MCX;
                        }
                        else {
                            cash = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].SYMBOL.CASH;
                            future = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].SYMBOL.FUTURE;
                            option = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].SYMBOL.OPTION;
                            mcx = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].SYMBOL.MCX;
                        }
                        var cash_sort = _this.sortByKey('asc', cash, 'SYMBOL');
                        var future_sort = _this.sortByKey('asc', future, 'SYMBOL');
                        var option_sort = _this.sortByKey('asc', option, 'SYMBOL');
                        var mcx_sort = _this.sortByKey('asc', mcx, 'SYMBOL');
                        _this.CASHDATA = cash_sort;
                        _this.FUTUREDATA = future_sort;
                        _this.OPTIONDATA = option_sort;
                        _this.MCXDATA = mcx_sort;
                        actionSheet.dismiss();
                    }
                }, {
                    text: 'Z-A',
                    handler: function () {
                        var cash;
                        var future;
                        var option;
                        var mcx;
                        if (_this.globalApi.watch_type == "DEFAULT") {
                            cash = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].SYMBOL.CASH;
                            future = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].SYMBOL.FUTURE;
                            option = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].SYMBOL.OPTION;
                            mcx = _this.globalApi.watch_list.DEFAULT[_this.globalApi.watch_postion].SYMBOL.MCX;
                        }
                        else {
                            cash = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].SYMBOL.CASH;
                            future = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].SYMBOL.FUTURE;
                            option = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].SYMBOL.OPTION;
                            mcx = _this.globalApi.watch_list.PRIVATE[_this.globalApi.watch_postion].SYMBOL.MCX;
                        }
                        var cash_sort = _this.sortByKey('desc', cash, 'SYMBOL');
                        var future_sort = _this.sortByKey('desc', future, 'SYMBOL');
                        var option_sort = _this.sortByKey('desc', option, 'SYMBOL');
                        var mcx_sort = _this.sortByKey('desc', mcx, 'SYMBOL');
                        _this.CASHDATA = cash_sort;
                        _this.FUTUREDATA = future_sort;
                        _this.OPTIONDATA = option_sort;
                        _this.MCXDATA = mcx_sort;
                        actionSheet.dismiss();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.changeview = function () {
        if (this.viewmode == true) {
            this.viewmode = false;
        }
        else {
            this.viewmode = true;
        }
    };
    // ionViewDidEnter() {
    //     // this.platform.registerBackButtonAction((data) => {
    //     //     // this.navCtrl.setRoot('TabsPage');
    //     //     this.platform.exitApp();
    //     // });
    // }
    HomePage.prototype.itemSelected = function (item) {
        this.Localdate1 = localStorage.getItem("homeTodaydate1");
        this.currentDate = new Date().toLocaleDateString();
        console.log("currentDate", this.currentDate);
        if (item == 1) {
            this.chacksubscribe("Live Signal");
            /*if (this.planname == ""|| this.planname == null){
                this.navCtrl.push('TrialpagePage');
            }else {
                console.log("currentDate", this.currentDate);
                console.log("Localdate1", this.Localdate1);

                if (this.currentDate == this.Localdate1){

                    this.navCtrl.push('LiveChartsPage');

                }else {
                    localStorage.setItem('homeTodaydate1', this.currentDate);
                    console.log("store localstorege",localStorage.getItem("homeTodaydate1"));
                    console.log("Enter Once Live chart");
                    this.globalApi.verifyVersion(this.device.uuid, this.login_details.user_data.ID)

                        .then(data => {
                            // this.users = data;
                            this.verifydata = data;

                            if(this.verifydata.status == 200) {
                                console.log("App CHECK_USER_LOGIN", this.verifydata.data[0].CHECK_USER_LOGIN);
                                this.userchack =  this.verifydata.data[0].CHECK_USER_LOGIN;
                                if(this.userchack == 0){

                                    localStorage.removeItem("login_details");
                                    this.login_details = JSON.parse(localStorage.getItem("login_details"));
                                    console.log("logDetail_logout", this.login_details);
                                    this.navCtrl.setRoot('SignloginPage');

                                }else {
                                    this.navCtrl.push('LiveChartsPage');
                                }
                            }else {

                            }

                        }).catch();
                }
            }*/
        }
    };
    HomePage.prototype.goToEodchar = function (item) {
        if (item == 1) {
            this.navCtrl.push('EodChartPage');
        }
    };
    HomePage.prototype.goToAdvisory = function () {
        this.chacksubscribe("Advisory Services");
        /*  if (this.planname == ""|| this.planname == null){
              this.navCtrl.push('TrialpagePage');
          }else {
              this.Localdate2 = localStorage.getItem("homeTodaydate2");
              this.currentDate = new Date().toLocaleDateString();
              console.log("currentDate", this.currentDate);

              console.log("currentDate", this.currentDate);
              console.log("Localdate2", this.Localdate2);

              if (this.currentDate == this.Localdate2) {

                  this.navCtrl.push('AdvisoryServicesPage');

              } else {
                  localStorage.setItem('homeTodaydate2', this.currentDate);
                  console.log("store localstorege", localStorage.getItem("homeTodaydate2"));
                  console.log("Enter Once advisory chart");
                  this.globalApi.verifyVersion(this.device.uuid, this.login_details.user_data.ID)

                      .then(data => {
                          // this.users = data;
                          this.verifydata = data;

                          if (this.verifydata.status == 200) {
                              console.log("App CHECK_USER_LOGIN", this.verifydata.data[0].CHECK_USER_LOGIN);
                              this.verifydata = this.verifydata.data[0].CHECK_USER_LOGIN;
                              if (this.verifydata == 0) {

                                  localStorage.removeItem("login_details");
                                  this.login_details = JSON.parse(localStorage.getItem("login_details"));
                                  console.log("logDetail_logout", this.login_details);
                                  this.navCtrl.setRoot('SignloginPage');

                              } else {
                                  this.navCtrl.push('AdvisoryServicesPage');
                              }
                          } else {

                          }

                      }).catch();

              }
          }*/
    };
    HomePage.prototype.goToFundamental = function () {
        this.navCtrl.push('FundamentalCallsPage');
    };
    HomePage.prototype.goToknowledge = function () {
        this.chacksubscribe("Knowledge Zone");
    };
    HomePage.prototype.goToBlog = function () {
        this.navCtrl.push('BlogPage');
    };
    HomePage.prototype.goToTradingres = function () {
        this.navCtrl.push('TradingResourcesPage');
    };
    HomePage.prototype.goToTrading = function () {
        this.navCtrl.push('TradingPage');
    };
    // // users: any;
    // splash = true;
    // tabBarelElement: any;
    //
    // loading;
    // NotificationResponse;
    // UID;
    // login_detailsl: any;
    //
    // NSECASHTYPE;
    // FOTYPE;
    // MCXTYPE;
    //
    // NSETEXT;
    // FOTEXT;
    // MCXTEXT;
    //
    // constructor(public navCtrl: NavController, public globalApi: GlobalProvider,
    //             public loadingCtrl: LoadingController,
    //             public toastCtrl: ToastController) {
    //     // this.tabBarelElement = document.querySelector('.tabbar');c
    //
    //     //  this.login_details = JSON.parse(localStorage.getItem("login_details"));
    //     //
    //     //  console.log("logindetailssss",this.login_details);
    //     // // this.UID = this.login_details.user_data.ID;
    //
    //     this.login_detailsl = JSON.parse(localStorage.getItem("login_details"));
    //     console.log("sdfvggb",this.login_detailsl);
    //    // console.log("id11243", this.login_detailsl.user_data.ID);
    //
    //     this.loading = this.loadingCtrl.create({content: "please wait..."});
    //     this.loading.present();
    //
    //
    //     this.globalApi.getNotificationSettingData("1", "user_profile")
    //
    //         .then(data => {
    //
    //             this.NotificationResponse = data;
    //
    //             this.globalApi.NSECASH_TYPE = this.NotificationResponse.data[0].NSELOADTYPE;
    //             this.globalApi.FO_TYPE = this.NotificationResponse.data[0].FOLOADTYPE;
    //             this.globalApi.MCX_TYPE = this.NotificationResponse.data[0].MCXLOADTYPE;
    //
    //             this.globalApi.NSECASH_REFRESH_RATE = this.NotificationResponse.data[0].NSELOADSEC;
    //             this.globalApi.FO_REFRESH_RATE = this.NotificationResponse.data[0].FOLOADSEC;
    //             this.globalApi.MCX_REFRESH_RATE = this.NotificationResponse.data[0].MCXLOADSEC;
    //
    //
    //             console.log("NSECASHTYPE", this.globalApi.NSECASH_TYPE);
    //             console.log("FOTYPE", this.globalApi.FO_TYPE);
    //             console.log("MCXTYPE", this.globalApi.MCX_TYPE);
    //
    //             console.log("NSECASH_REFRESH_RATE", this.globalApi.NSECASH_REFRESH_RATE);
    //             console.log("FO_REFRESH_RATE", this.globalApi.FO_REFRESH_RATE);
    //             console.log("MCX_REFRESH_RATE", this.globalApi.MCX_REFRESH_RATE);
    //
    //             this.loading.dismiss();
    //
    //         }).catch();
    // }
    //
    // itemSelected(item) {
    //
    //     if (item == 1) {
    //
    //         this.navCtrl.push('LiveChartsPage');
    //
    //     }
    // }
    //
    // goToEodchar(item) {
    //
    //     if (item == 1) {
    //
    //         this.navCtrl.push('EodChartPage');
    //
    //     }
    // }
    //
    // goToAdvisory() {
    //
    //     this.navCtrl.push('AdvisoryServicesPage');
    // }
    //
    // goToFundamental() {
    //
    //     this.navCtrl.push('FundamentalCallsPage');
    // }
    //
    // goToknowledge() {
    //
    //     this.navCtrl.push('');
    //
    // }
    //
    // goToBlog() {
    //
    //     this.navCtrl.push('BlogPage');
    //
    // }
    //
    // goToTradingres() {
    //
    //     this.navCtrl.push('TradingResourcesPage');
    //
    // }
    //
    // goToTrading() {
    //
    //     this.navCtrl.push('TradingPage');
    //
    // }
    HomePage.prototype.deletewatchlist = function (id) {
        var _this = this;
        this.viewCtrl.dismiss();
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
    HomePage.prototype.deleteapi = function (id) {
        var _this = this;
        this.globalApi.Startloader();
        this.globalApi.Watchlistdelete(id).then(function (result) {
            _this.deletedata = result;
            _this.globalApi.Stoploader();
            if (_this.deletedata.status == 200) {
                _this.globalApi.presentToast(_this.deletedata.message);
                _this.gethomepagedata();
            }
            else {
                _this.globalApi.ErrorApi(_this.deletedata.status, _this.deletedata.message);
            }
        }, function (err) {
            // console.log(err);
            // this.api.presentToast("Enter Mobile number", '')
        });
    };
    HomePage.prototype.chacksubscribe = function (name) {
        console.log("plan name", name);
        // this.globalApi.chacksubscribe(this.login_details.user_data.ID).then(data => {
        //     // this.users = data;
        //     this.plandata = data;
        //     this.planlist = this.plandata.data;
        //     console.log("planlist", this.planlist);
        //     console.log("planDATA", this.plandata);
        //     if (this.plandata.status == '200') {
        //         if (this.planlist.length > -1) {
        //             for (let i = 0; i < this.planlist.length; i++) {
        //                 if (name == this.planlist[i].NAME) {
        //                     console.log(this.planlist[i].ID);
        //                     console.log("this.planname", this.planlist[i].NAME);
        //                     console.log(this.planlist[i].purchase);
        //                     this.planname = this.planlist[i].NAME;
        //                     break;
        //                 } else {
        //                     this.planname = "";
        //                 }
        //             }
        //         }
        //
        //         // this.navCtrl.push('TrialpagePage',name);
        //         if (this.planname == "Live Signal") {
        //
        //             console.log("currentDate", this.currentDate);
        //             console.log("Localdate1", this.Localdate1);
        //
        //             if (this.currentDate == this.Localdate1) {
        //
        //                 this.navCtrl.push('LiveChartsPage');
        //
        //             } else {
        //                 localStorage.setItem('homeTodaydate1', this.currentDate);
        //                 console.log("store localstorege", localStorage.getItem("homeTodaydate1"));
        //                 console.log("Enter Once Live chart");
        //
        //                 this.verifyversion();
        //             }
        //
        //         } else if (this.planname == "Advisory Services") {
        //
        //             this.Localdate2 = localStorage.getItem("homeTodaydate2");
        //             this.currentDate = new Date().toLocaleDateString();
        //             console.log("currentDate", this.currentDate);
        //
        //             console.log("currentDate", this.currentDate);
        //             console.log("Localdate2", this.Localdate2);
        //
        //             if (this.currentDate == this.Localdate2) {
        //
        //                 this.navCtrl.push('AdvisoryServicesPage');
        //
        //             } else {
        //                 localStorage.setItem('homeTodaydate2', this.currentDate);
        //                 console.log("store localstorege", localStorage.getItem("homeTodaydate2"));
        //                 console.log("Enter Once advisory chart");
        //                 this.verifyversion();
        //             }
        //
        //         } else if (this.planname == "Knowledge Zone") {
        //             this.navCtrl.push('KnowledgeZonePage');
        //         } else {
        //             this.navCtrl.push('TrialpagePage', name);
        //         }
        //
        //     }
        //     else if (this.plandata.status == '404') {
        //         console.log("Not Data found");
        //         this.navCtrl.push('TrialpagePage', name);
        //     }
        //     // Commented by Dishant. Date: 26-02-2019 11:10:14 Comment: invalid key logout and go loginpage
        //     else if (this.plandata.status == '440') {
        //         this.globalApi.presentToast(this.plandata.message);
        //         localStorage.removeItem("login_data");
        //         this.navCtrl.setRoot('LoginPage');
        //     }
        //     // Commented by Dishant. Date: 25-02-2019 16:55:30 Comment: version error open play store
        //     else if (this.plandata.status == '304') {
        //         this.globalApi.presentToast(this.plandata.message);
        //         window.open(this.api.playstorelink, '_system');
        //     }
        //     else if (this.plandata.status == '530') {
        //         this.globalApi.presentToast(this.plandata.message);
        //         this.globalApi.Exitapp();
        //
        //     }
        //     // Commented by Dishant. Date: 25-02-2019 16:57:27 Comment: other massages
        //     else {
        //         this.globalApi.presentToast(this.plandata.message);
        //
        //     }
        //
        // }).catch();
    };
    HomePage.prototype.verifyversion = function () {
        var _this = this;
        this.globalApi.verifyVersion(this.device.uuid, this.login_details.user_data.ID)
            .then(function (data) {
            // this.users = data;
            _this.verifydata = data;
            if (_this.verifydata.status == 200) {
                console.log("App CHECK_USER_LOGIN", _this.verifydata.data[0].CHECK_USER_LOGIN);
                _this.userchack = _this.verifydata.data[0].CHECK_USER_LOGIN;
                if (_this.userchack == 0) {
                    localStorage.removeItem("login_details");
                    _this.login_details = JSON.parse(localStorage.getItem("login_details"));
                    console.log("logDetail_logout", _this.login_details);
                    _this.navCtrl.setRoot('SignloginPage');
                }
                else {
                    _this.navCtrl.push('LiveChartsPage');
                }
            }
            else if (_this.verifydata.status == 404) {
                _this.globalApi.presentToast(_this.verifydata.message);
            }
            else if (_this.verifydata.status == 440) {
                _this.globalApi.presentToast(_this.verifydata.message);
                localStorage.removeItem("login_data");
                _this.navCtrl.setRoot('LoginPage');
            }
            else if (_this.verifydata.status == 304) {
                _this.globalApi.presentToast(_this.verifydata.message);
                window.open(_this.globalApi.playstorelink, '_system');
            }
            else if (_this.verifydata.status == 530) {
                _this.globalApi.presentToast(_this.verifydata.message);
                _this.globalApi.Exitapp();
            }
            else {
                _this.globalApi.presentToast(_this.verifydata.message);
            }
        }).catch();
    };
    HomePage.prototype.openrssclick = function () {
        // this.navCtrl.push('AdminMessagesPage')
    };
    HomePage.prototype.openwatchlistclick = function () {
        if (this.DDL_TYPE == "PRIVATE") {
            this.globalApi.WATCHLISTNAME = this.DDL_NAME;
            this.globalApi.WATCHLISTID = this.DDL_ID;
            this.globalApi.WATCHLISTDATA = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion];
            this.navCtrl.push('ProductlistPage', 3);
        }
        else {
            this.globalApi.presentToast("Default Watchlist can't update");
        }
    };
    HomePage.prototype.openwatchlistclick2 = function () {
        this.navCtrl.push('ProductlistPage');
    };
    HomePage.prototype.openwatchlist = function () {
        if (this.listshow == true) {
            this.listshow = false;
        }
        else {
            this.listshow = true;
        }
        if (this.hidedetails == true) {
            this.hidedetails = false;
        }
    };
    HomePage.prototype.showPrompt = function () {
        var _this = this;
        this.viewCtrl.dismiss();
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
                        _this.globalApi.WATCHLISTNAME = data;
                        _this.listshow = false;
                        _this.navCtrl.push('ProductlistPage', 5);
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.commenclick = function () {
        if (this.listshow == true) {
            this.listshow = false;
        }
        if (this.hidedetails == true) {
            this.hidedetails = false;
        }
    };
    HomePage.prototype.liverateapicall = function () {
        var _this = this;
        this.globalApi.live_rate_invertval = setInterval(function () {
            if (_this.CASH_URL != null) {
                _this.liverate("cash", _this.CASH_URL);
            }
            if (_this.FUTURE_URL != null) {
                _this.liverate("future", _this.FUTURE_URL);
            }
            if (_this.OPTION_URL != null) {
                _this.liverate("option", _this.OPTION_URL);
            }
            if (_this.MCX_URL != null) {
                _this.liverate("mcx", _this.MCX_URL);
            }
        }, 1000);
        // this.liverate("cash", this.CASH_URL);
        // this.liverate("future", this.FUTURE_URL);
    };
    HomePage.prototype.ionViewCanLeave = function () {
        clearInterval(this.globalApi.live_rate_invertval);
        console.log("ionViewCanLeave Call page leave");
    };
    HomePage.prototype.ionViewWillLeave = function () {
        clearInterval(this.globalApi.live_rate_invertval);
        console.log("ionViewWillLeave page leave");
    };
    HomePage.prototype.ionViewDidLeave = function () {
        clearInterval(this.globalApi.live_rate_invertval);
        console.log("ionViewDidLeave page leave");
    };
    HomePage.prototype.liverate = function (type, url) {
        var _this = this;
        var data;
        if (type == "cash") {
            data = this.CASHDATA;
        }
        if (type == "future") {
            data = this.FUTUREDATA;
        }
        if (type == "option") {
            data = this.OPTIONDATA;
        }
        if (type == "mcx") {
            data = this.MCXDATA;
        }
        for (var l_i = 0; l_i < url.length; l_i++) {
            this.rgtsLiverateProvider.Liverateapi(url[l_i]).then(function (result) {
                _this.liveratedata = result;
                console.log("Live Rate", _this.liveratedata);
                var data_split = _this.liveratedata.trim().split("\n");
                for (var j = 0; j < data.length; j++) {
                    for (var k = 0; k < data_split.length; k++) {
                        var split_comma = data_split[k].split(",");
                        if (split_comma[0] == data[j].TOKEN) {
                            var CURRENT_RATE = (split_comma[1] / 100).toFixed(2);
                            // FONSE-Token,0
                            // LTP,
                            // BidNum,1
                            // BidQty,2
                            // Bid,3
                            // Ask,4
                            // AskQty,5
                            // AskNum,6
                            // Open,7
                            // High,8
                            // Low,9
                            // PClose,10
                            // Volume,11
                            // OI,12
                            // LTTime13
                            data[j].OPENING_RATE = (split_comma[8] / 100).toFixed(2);
                            data[j].HIGH_RATE = (split_comma[9] / 100).toFixed(2);
                            data[j].LOW_RATE = (split_comma[10] / 100).toFixed(2);
                            data[j].CLOSE_RATE = (split_comma[11] / 100).toFixed(2);
                            data[j].BIDQTY = (split_comma[3] / 100).toFixed(2);
                            data[j].BID = (split_comma[4] / 100).toFixed(2);
                            data[j].ASK = (split_comma[5] / 100).toFixed(2);
                            data[j].ASKQTY = (split_comma[6] / 100).toFixed(2);
                            data[j].OI = (split_comma[13] / 100).toFixed(2);
                            data[j].VOLUME = (split_comma[12] / 100).toFixed(2);
                            if (data[j].CURRENT_RATE < CURRENT_RATE) {
                                data[j].CHANGED_COLOR = 'bg-green';
                            }
                            else if (data[j].CURRENT_RATE > CURRENT_RATE) {
                                data[j].CHANGED_COLOR = 'bg-red';
                            }
                            else {
                                data[j].CHANGED_COLOR = '';
                            }
                            data[j].CURRENT_RATE = CURRENT_RATE;
                            data[j].DIFF_RATE = (parseFloat(data[j].CURRENT_RATE) - parseFloat(data[j].CLOSE_RATE)).toFixed(2);
                            data[j].DIFF_RATE_PER = ((parseFloat(data[j].DIFF_RATE) / parseFloat(data[j].CLOSE_RATE)) * 100).toFixed(2);
                        }
                    }
                }
                if (type == "cash") {
                    _this.CASHDATA = data;
                }
                if (type == "future") {
                    _this.FUTUREDATA = data;
                }
                if (type == "option") {
                    _this.OPTIONDATA = data;
                }
                if (type == "mcx") {
                    _this.MCXDATA = data;
                }
            }, function (err) {
            });
        }
    };
    HomePage.prototype.openview = function () {
    };
    HomePage.prototype.changeview3 = function (position) {
        this.SELECTEDCASHDATA = [];
        this.SELECTEDCASHDATA.push(position);
        this.hidedetails = true;
        if (this.listshow == true) {
            this.listshow = false;
        }
    };
    HomePage.prototype.hidedetailshow = function () {
        this.hidedetails = false;
    };
    HomePage.prototype.openoptionpage = function () {
        this.globalApi.WATCHLISTNAME = this.DDL_NAME;
        this.globalApi.WATCHLISTID = this.DDL_ID;
        this.globalApi.WATCHLISTDATA = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion];
        this.navCtrl.push('OptionsearchPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Navbar */])
    ], HomePage.prototype, "navBar", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button color="white" menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title >Securetrade Pro</ion-title>\n\n        <!--<ion-buttons end>\n\n            <button ion-button color="white" style="background-color: transparent" end (click)="openrssclick()">\n\n                <ion-icon name="logo-rss" style="font-size: 24px;"></ion-icon>\n\n            </button>\n\n        </ion-buttons>-->\n\n    </ion-navbar>\n\n\n\n    <ion-item style="background-color: #ed3954;height: 25px;" no-margin no-padding no-lines>\n\n        <ion-item no-padding style="background-color: transparent" (tap)="openwatchlist()">\n\n            <h2 style="color: white;margin: 15px;">{{DDL_NAME}}</h2>\n\n        </ion-item>\n\n        <div item-end no-margin no-padding>\n\n            <ion-icon name="md-arrow-dropdown" style="color: white;padding: 5px;margin: 5px" (tap)="openwatchlist()"></ion-icon>\n\n            <!--<ion-icon name="add" style="color: white;padding: 5px;margin: 5px" (tap)="openwatchlistclick()"></ion-icon>-->\n\n            <ion-icon name="create" style="color: white;padding: 5px;;margin: 5px" (tap)="openwatchlistclick()"></ion-icon>\n\n            <ion-icon name="funnel" style="color: white;padding: 5px;;margin: 5px" (tap)="presentActionSheet()"></ion-icon>\n\n            <ion-icon *ngIf="viewmode == true" name="grid" style="color: white;padding: 5px;;margin: 5px" (tap)="changeview()"></ion-icon>\n\n            <ion-icon *ngIf="viewmode == false" name="list-box" style="color: white;padding: 5px;;margin: 5px" (tap)="changeview()"></ion-icon>\n\n            <ion-icon *ngIf="deleteshow == false" name="md-trash" style="color: white;padding: 5px;;margin: 5px" (tap)="watchlistdeletedit()"></ion-icon>\n\n            <ion-badge *ngIf="deleteshow == true" (tap)="watchlistdeletedit()">cancel</ion-badge>\n\n        </div>\n\n    </ion-item>\n\n    <!--For Watchlist-->\n\n    <div style="position: absolute;z-index: 100;width: 100%" *ngIf="listshow == true">\n\n\n\n        <ion-list style="width: 65%;max-height: 295px;overflow: scroll;border: 1px solid #ed3954;border-radius: 5px">\n\n            <ion-item no-margin *ngFor="let i of DEFAULT let p=index" (click)="opendata(p,\'DEFAULT\')">\n\n                <p>{{i.NAME}}</p>\n\n                <!--<ion-icon name="md-trash" item-end="" small></ion-icon>-->\n\n            </ion-item>\n\n            <ion-item no-margin *ngFor="let i of PRIVATE let p=index">\n\n                <p (click)="opendata(p,\'PRIVATE\')">{{i.NAME}}</p>\n\n                <ion-icon name="md-trash" style="color: #f53d3d" item-end small (tap)="deletewatchlist(i.ID)"></ion-icon>\n\n            </ion-item>\n\n            <ion-item no-margin style="background-color: #939393" (tap)="showPrompt()">\n\n                <p style="color: black">Create New +</p>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content >\n\n\n\n    <!--*ngIf="hidedetails == true;"-->\n\n    <!--<div style="height: 100%;width: 100%;position: absolute;z-index: 100" *ngIf="hidedetails == true || listshow == true">-->\n\n        <!--<ion-backdrop style="opacity: 0.35;" (tap)="commenclick()"></ion-backdrop>-->\n\n    <!--</div>-->\n\n    <div class="timeline-wrapper" *ngIf="showdata == false">\n\n        <!--<div class="animated-background">\n\n            <div class="background-masker header-top"></div>\n\n            <div class="background-masker header-left"></div>\n\n            <div class="background-masker header-right"></div>\n\n            <div class="background-masker header-bottom"></div>\n\n            <div class="background-masker subheader-left"></div>\n\n            <div class="background-masker subheader-right"></div>\n\n            <div class="background-masker subheader-bottom"></div>\n\n            <div class="background-masker content-top"></div>\n\n            <div class="background-masker content-first-end"></div>\n\n            <div class="background-masker content-second-line"></div>\n\n            <div class="background-masker content-second-end"></div>\n\n            <div class="background-masker content-third-line"></div>\n\n            <div class="background-masker content-third-end"></div>\n\n        </div>-->\n\n        <div class="timeline-item">\n\n            <ion-row>\n\n                <ion-col col-4 *ngFor="let i of [1,2,3,4,5,6,7,8,9,10,11,12]">\n\n                    <div class="animated-background"></div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    </div>\n\n\n\n    <div *ngIf="showdata == true">\n\n        <!--<ion-backdrop style="opacity: 0.35;" tappable="false" *ngIf="listshow == true" (tap)="commenclick()"></ion-backdrop>-->\n\n        <!--For popup-->\n\n\n\n\n\n        <ion-grid style="height: auto; position: absolute" *ngIf="viewmode == false">\n\n            <p style="padding: 5px;margin-left: 5px;font-weight: bold" class="nse-txt" *ngIf="CASHDATA.length > 0">\n\n                NSE LIVE\n\n            </p>\n\n            <ion-row style="height: auto;">\n\n                <ion-col col-4 *ngFor="let i of CASHDATA let idx = index" (tap)="changeview2(i)">\n\n                    <ion-card *ngIf="i.DIFF_RATE>0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.9), 0 3px 1px 0px rgba(46,125,50,0.8), 0 0px 5px 0 rgba(46,125,50,0.7);padding: 0px 4px 0px 4px;" no-margin no-padding\n\n                              >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <div align="center">\n\n                            <p style="color: #222222;font-size: 1.1rem;font-weight: 500" no-margin>{{i.SYMBOL}}</p>\n\n                            <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;font-size: 1.5rem;border-radius: 5px;" no-margin>{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #19b330;font-size: 1.1rem" no-margin>{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}} %)</p>\n\n                        </div>\n\n                    </ion-card>\n\n                    <ion-card *ngIf="i.DIFF_RATE<0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(196, 23, 23, 0.14), 0 3px 1px 0px rgba(227, 16, 16, 0.2), 0 0px 5px 0 rgba(245, 12, 12, 0.12);padding: 0px 4px 0px 4px;" no-margin no-padding\n\n                              >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <div align="center">\n\n                            <p style="color: #222222;font-size: 1.1rem;font-weight: 500" no-margin>{{i.SYMBOL}}</p>\n\n                            <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;;font-size: 1.5rem;border-radius: 5px;" no-margin>{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #f53d3d;font-size: 1.1rem" no-margin>{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}} %)</p>\n\n                        </div>\n\n                    </ion-card>\n\n\n\n                    <ion-card *ngIf="i.DIFF_RATE==0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.14), 0 3px 1px 0px rgba(46,125,50,0.2), 0 0px 5px 0 rgba(46,125,50,0.12);padding: 0px 4px 0px 4px;" no-margin no-padding\n\n                              >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <div align="center">\n\n                            <p style="color: #222222;font-size: 1.1rem;font-weight: 500" no-margin>{{i.SYMBOL}}</p>\n\n                            <p style="background-color: transparent;width: fit-content;padding: 2px;;font-weight: bold;;font-size: 1.5rem;border-radius: 5px" no-margin>{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #222222;font-size: 1.1rem" no-margin>{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}} %)</p>\n\n                        </div>\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <p style="padding: 5px;margin-left: 5px;font-weight: bold" class="nse-txt" *ngIf="FUTUREDATA.length > 0">\n\n                NSE FUTURE\n\n            </p>\n\n            <ion-row style="height: auto;">\n\n                <ion-col col-4 *ngFor="let i of FUTUREDATA let idx = index" (click)="changeview2(i)">\n\n                    <ion-card *ngIf="i.DIFF_RATE>0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.9), 0 3px 1px 0px rgba(46,125,50,0.8), 0 0px 5px 0 rgba(46,125,50,0.7);padding: 0px 4px 0px 4px;" no-margin >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <div align="center">\n\n                            <p style="color: #222222;font-size: 1.1rem;font-weight: 500" no-margin>{{i.SYMBOL}}</p>\n\n                            <p style="color: #999999;font-size: 1.0rem;" no-margin>{{i.FUT_OPT_DATE_MONTH}}</p>\n\n                            <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;font-size: 1.5rem;border-radius: 5px;" no-margin>{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #19b330;font-size: 1.1rem" no-margin>{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}} %)</p>\n\n                        </div>\n\n                    </ion-card>\n\n                    <ion-card *ngIf="i.DIFF_RATE<0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(196, 23, 23, 0.14), 0 3px 1px 0px rgba(227, 16, 16, 0.2), 0 0px 5px 0 rgba(245, 12, 12, 0.12);padding: 0px 4px 0px 4px;" no-margin no-padding\n\n                              >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <div align="center">\n\n                            <p style="color: #222222;font-size: 1.1rem;font-weight: 500" no-margin>{{i.SYMBOL}}</p>\n\n                            <p style="color: #999999;font-size: 1.0rem;" no-margin>{{i.FUT_OPT_DATE_MONTH}}</p>\n\n                            <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;;font-size: 1.5rem;border-radius: 5px;" no-margin>{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #f53d3d;font-size: 1.1rem" no-margin>{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}} %)</p>\n\n                        </div>\n\n                    </ion-card>\n\n\n\n                    <ion-card *ngIf="i.DIFF_RATE==0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.14), 0 3px 1px 0px rgba(46,125,50,0.2), 0 0px 5px 0 rgba(46,125,50,0.12);padding: 0px 4px 0px 4px;" no-margin no-padding\n\n                              >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <div align="center">\n\n                            <p style="color: #222222;font-size: 1.1rem;font-weight: 500" no-margin>{{i.SYMBOL}}</p>\n\n                            <p style="color: #999999;font-size: 1.0rem;" no-margin>{{i.FUT_OPT_DATE_MONTH}}</p>\n\n                            <p style="background-color: transparent;width: fit-content;padding: 2px;;font-weight: bold;font-size: 1.5rem;border-radius: 5px" no-margin>{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #222222;font-size: 1.1rem" no-margin>{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}} %)</p>\n\n                        </div>\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n            <p style="padding: 5px;margin-left: 5px;font-weight: bold" class="nse-txt" *ngIf="OPTIONDATA.length > 0">\n\n                NSE OPTION\n\n            </p>\n\n            <ion-row style="height: auto;">\n\n                <ion-col col-4 *ngFor="let i of OPTIONDATA let idx = index" (click)="changeview2(i)">\n\n                    <ion-card *ngIf="i.DIFF_RATE>0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.9), 0 3px 1px 0px rgba(46,125,50,0.8), 0 0px 5px 0 rgba(46,125,50,0.7);padding: 0px 4px 0px 4px;" no-margin >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <div align="center">\n\n                            <p style="color: #222222;font-size: 1.1rem;font-weight: 500" no-margin>{{i.SYMBOL}}</p>\n\n                            <p style="color: #999999;font-size: 1.0rem;" no-margin>{{i.STRIKE +" "+ i.OPTION_TYPE + " " + i.FUT_OPT_DATE_MONTH}}</p>\n\n                            <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;font-size: 1.5rem;border-radius: 5px;" no-margin>{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #19b330;font-size: 1.1rem" no-margin>{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}} %)</p>\n\n                        </div>\n\n                    </ion-card>\n\n                    <ion-card *ngIf="i.DIFF_RATE<0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(196, 23, 23, 0.14), 0 3px 1px 0px rgba(227, 16, 16, 0.2), 0 0px 5px 0 rgba(245, 12, 12, 0.12);padding: 0px 4px 0px 4px;" no-margin no-padding\n\n                              >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <div align="center">\n\n                            <p style="color: #222222;font-size: 1.1rem;font-weight: 500" no-margin>{{i.SYMBOL}}</p>\n\n                            <p style="color: #999999;font-size: 1.0rem;" no-margin>{{i.STRIKE +" "+ i.OPTION_TYPE + " " + i.FUT_OPT_DATE_MONTH}}</p>\n\n                            <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;;font-size: 1.5rem;border-radius: 5px;" no-margin>{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #f53d3d;font-size: 1.1rem" no-margin>{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}} %)</p>\n\n                        </div>\n\n                    </ion-card>\n\n\n\n                    <ion-card *ngIf="i.DIFF_RATE==0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.14), 0 3px 1px 0px rgba(46,125,50,0.2), 0 0px 5px 0 rgba(46,125,50,0.12);padding: 0px 4px 0px 4px;" no-margin no-padding\n\n                              >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <div align="center">\n\n                            <p style="color: #222222;font-size: 1.1rem;font-weight: 500" no-margin>{{i.SYMBOL}}</p>\n\n                            <p style="color: #999999;font-size: 1.0rem;" no-margin>{{i.STRIKE +" "+ i.OPTION_TYPE + " " + i.FUT_OPT_DATE_MONTH}}</p>\n\n                            <p style="background-color: transparent;width: fit-content;padding: 2px;;font-weight: bold;font-size: 1.5rem;border-radius: 5px" no-margin>{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #222222;font-size: 1.1rem" no-margin>{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}} %)</p>\n\n                        </div>\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n            <p style="padding: 5px;margin-left: 5px;font-weight: bold" class="nse-txt" *ngIf="MCXDATA.length > 0">\n\n                MCX\n\n            </p>\n\n            <ion-row style="height: auto;">\n\n                <ion-col col-4 *ngFor="let i of MCXDATA let idx = index" (click)="changeview2(i)">\n\n                    <ion-card *ngIf="i.DIFF_RATE>0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.9), 0 3px 1px 0px rgba(46,125,50,0.8), 0 0px 5px 0 rgba(46,125,50,0.7);padding: 0px 4px 0px 4px;" no-margin >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <div align="center">\n\n                            <p style="color: #222222;font-size: 1.1rem;font-weight: 500" no-margin>{{i.SYMBOL}}</p>\n\n                            <p style="color: #999999;font-size: 1.0rem;" no-margin>{{i.FUT_OPT_DATE_MONTH}}</p>\n\n                            <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;font-size: 1.5rem;border-radius: 5px;" no-margin>{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #19b330;font-size: 1.1rem" no-margin>{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}} %)</p>\n\n                        </div>\n\n                    </ion-card>\n\n                    <ion-card *ngIf="i.DIFF_RATE<0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(196, 23, 23, 0.14), 0 3px 1px 0px rgba(227, 16, 16, 0.2), 0 0px 5px 0 rgba(245, 12, 12, 0.12);padding: 0px 4px 0px 4px;" no-margin no-padding\n\n                              >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <div align="center">\n\n                            <p style="color: #222222;font-size: 1.1rem;font-weight: 500" no-margin>{{i.SYMBOL}}</p>\n\n                            <p style="color: #999999;font-size: 1.0rem;" no-margin>{{i.FUT_OPT_DATE_MONTH}}</p>\n\n                            <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;;font-size: 1.5rem;border-radius: 5px;" no-margin>{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #f53d3d;font-size: 1.1rem" no-margin>{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}} %)</p>\n\n                        </div>\n\n                    </ion-card>\n\n\n\n                    <ion-card *ngIf="i.DIFF_RATE==0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.14), 0 3px 1px 0px rgba(46,125,50,0.2), 0 0px 5px 0 rgba(46,125,50,0.12);padding: 0px 4px 0px 4px;" no-margin no-padding\n\n                              >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <div align="center">\n\n                            <p style="color: #222222;font-size: 1.1rem;font-weight: 500" no-margin>{{i.SYMBOL}}</p>\n\n                            <p style="color: #999999;font-size: 1.0rem;" no-margin>{{i.FUT_OPT_DATE_MONTH}}</p>\n\n                            <p style="background-color: transparent;width: fit-content;padding: 2px;;font-weight: bold;font-size: 1.5rem;border-radius: 5px" no-margin>{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #222222;font-size: 1.1rem" no-margin>{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}} %)</p>\n\n                        </div>\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <div align="center" *ngIf="this.DDL_TYPE == \'PRIVATE\'" style="margin: 5%;">\n\n                <ion-row style="height: auto;">\n\n                    <ion-col>\n\n                        <ion-card style="width: 100%; box-shadow: 0 2px 2px 0 #424242, 0 3px 1px 0px #424242, 0 0px 5px 0 #424242;padding: 0px 4px 0px 4px;" no-margin no-padding\n\n                                  (tap)="openoptionpage()">\n\n                            <div align="center">\n\n                                <p style="color: #222222;font-size: 1.1rem;font-weight: 500" no-margin>\n\n                                    <ion-icon name="add" style="color: #222222;padding: 0px 4px;margin: 6px 0px 4px 0px;"></ion-icon>\n\n                                    Add\n\n                                    <ion-icon name="add" style="color: #222222;padding: 0px 4px;margin: 6px 0px 4px 0px;"></ion-icon>\n\n                                </p>\n\n                                <p class="" style="width: fit-content;padding: 0px 2px;font-weight: bold;font-size: 1.3rem;border-radius: 5px;" no-margin>NSE</p>\n\n                                <p style="font-weight: bold;font-size: 1.3rem;" no-margin>Option</p>\n\n                            </div>\n\n                        </ion-card>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n            </div>\n\n\n\n        </ion-grid>\n\n\n\n        <div *ngIf="viewmode == true">\n\n            <p style="padding: 5px;margin-left: 5px;font-weight: bold;height: fit-content" class="nse-txt" *ngIf="CASHDATA.length > 0">\n\n                NSE LIVE\n\n            </p>\n\n            <ion-row *ngFor="let i of CASHDATA">\n\n                <ion-col col-12 style="height: fit-content" (click)="changeview2(i)">\n\n                    <ion-card *ngIf="i.DIFF_RATE>0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.9), 0 3px 1px 0px rgba(46,125,50,0.8), 0 0px 5px 0 rgba(46,125,50,0.7);padding: 2px;" no-margin >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <ion-item>\n\n                            <div item-start>\n\n                                <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                                <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;font-size: 1.4rem;border-radius: 5px;">{{i.CURRENT_RATE}}</p>\n\n                                <p style="color: #19b330;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                            </div>\n\n                            <div item-end align="end">\n\n                                <br>\n\n                                <!--<p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.4rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-left: 25px;"> {{i.CLOSE_RATE}}</span></p>-->\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span></p>\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">L:{{i.LOW_RATE}}<span style="margin-left: 25px;">C:{{i.CLOSE_RATE}}</span></p>\n\n                            </div>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                    <ion-card *ngIf="i.DIFF_RATE<0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(196, 23, 23, 0.14), 0 3px 1px 0px rgba(227, 16, 16, 0.2), 0 0px 5px 0 rgba(245, 12, 12, 0.12);padding: 2px;" no-margin no-padding\n\n                              >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <ion-item>\n\n                            <div item-start>\n\n                                <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                                <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;;font-size: 1.4rem;border-radius: 5px">{{i.CURRENT_RATE}}</p>\n\n                                <p style="color: #f53d3d;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                            </div>\n\n                            <div item-end align="end">\n\n                                <br>\n\n                                <!--<p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.4rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-left: 25px;"> {{i.CLOSE_RATE}}</span></p>-->\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span></p>\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">L:{{i.LOW_RATE}}<span style="margin-left: 25px;">C:{{i.CLOSE_RATE}}</span></p>\n\n                            </div>\n\n                        </ion-item>\n\n                    </ion-card>\n\n\n\n                    <ion-card *ngIf="i.DIFF_RATE==0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.14), 0 3px 1px 0px rgba(46,125,50,0.2), 0 0px 5px 0 rgba(46,125,50,0.12);padding: 2px;" no-margin no-padding >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <ion-item>\n\n                            <div item-start>\n\n                                <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                                <p style="background-color: transparent;width: fit-content;padding: 2px;font-weight: bold;;font-size: 1.4rem;border-radius: 5px">{{i.CURRENT_RATE}}</p>\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                            </div>\n\n                            <div item-end align="end">\n\n                                <br>\n\n                                <!--<p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.4rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-left: 25px;"> {{i.CLOSE_RATE}}</span></p>-->\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span></p>\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">L:{{i.LOW_RATE}}<span style="margin-left: 25px;">C:{{i.CLOSE_RATE}}</span></p>\n\n                            </div>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n            <p style="padding: 5px;margin-left: 5px;font-weight: bold;height: fit-content" class="nse-txt" *ngIf="FUTUREDATA.length > 0">\n\n                NSE FUTURE\n\n            </p>\n\n            <ion-row *ngFor="let i of FUTUREDATA">\n\n                <ion-col col-12 style="height: fit-content" (click)="changeview2(i)">\n\n                    <ion-card *ngIf="i.DIFF_RATE>0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.9), 0 3px 1px 0px rgba(46,125,50,0.8), 0 0px 5px 0 rgba(46,125,50,0.7);padding: 2px;" no-margin >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <ion-item>\n\n                            <div item-start>\n\n                                <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                                <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;font-size: 1.4rem;border-radius: 5px;">{{i.CURRENT_RATE}}</p>\n\n                                <p style="color: #19b330;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                            </div>\n\n                            <div item-end align="end">\n\n                                <br>\n\n                                <p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.4rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-left: 25px;"> {{i.CLOSE_RATE}}</span></p>\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span><span style="margin-left: 25px;">L:{{i.LOW_RATE}}</span></p>\n\n                            </div>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                    <ion-card *ngIf="i.DIFF_RATE<0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(196, 23, 23, 0.14), 0 3px 1px 0px rgba(227, 16, 16, 0.2), 0 0px 5px 0 rgba(245, 12, 12, 0.12);padding: 2px;" no-margin no-padding\n\n                              >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <ion-item>\n\n                            <div item-start>\n\n                                <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                                <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;;font-size: 1.4rem;border-radius: 5px">{{i.CURRENT_RATE}}</p>\n\n                                <p style="color: #f53d3d;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                            </div>\n\n                            <div item-end align="end">\n\n                                <br>\n\n                                <p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.4rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-left: 25px;"> {{i.CLOSE_RATE}}</span></p>\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span><span style="margin-left: 25px;">L:{{i.LOW_RATE}}</span></p>\n\n                            </div>\n\n                        </ion-item>\n\n                    </ion-card>\n\n\n\n                    <ion-card *ngIf="i.DIFF_RATE==0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.14), 0 3px 1px 0px rgba(46,125,50,0.2), 0 0px 5px 0 rgba(46,125,50,0.12);padding: 4px;" no-margin no-padding >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <ion-item>\n\n                            <div item-start>\n\n                                <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                                <p style="background-color: transparent;width: fit-content;padding: 2px;font-weight: bold;;font-size: 1.3rem;border-radius: 5px">{{i.CURRENT_RATE}}</p>\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                            </div>\n\n                            <div item-end align="end">\n\n                                <br>\n\n                                <p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.3rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-left: 25px;"> {{i.CLOSE_RATE}}</span></p>\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span><span style="margin-left: 25px;">L:{{i.LOW_RATE}}</span></p>\n\n                            </div>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n            <p style="padding: 5px;margin-left: 5px;font-weight: bold;height: fit-content" class="nse-txt" *ngIf="OPTIONDATA.length > 0">\n\n                NSE OPTION\n\n            </p>\n\n            <ion-row *ngFor="let i of OPTIONDATA">\n\n                <ion-col col-12 style="height: fit-content" (click)="changeview2(i)">\n\n                    <ion-card *ngIf="i.DIFF_RATE>0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.9), 0 3px 1px 0px rgba(46,125,50,0.8), 0 0px 5px 0 rgba(46,125,50,0.7);padding: 2px;" no-margin >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <ion-item>\n\n                            <div item-start>\n\n                                <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                                <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;font-size: 1.4rem;border-radius: 5px;">{{i.CURRENT_RATE}}</p>\n\n                                <p style="color: #19b330;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                            </div>\n\n                            <div item-end align="end">\n\n                                <br>\n\n                                <p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.4rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-left: 25px;"> {{i.CLOSE_RATE}}</span></p>\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span><span style="margin-left: 25px;">L:{{i.LOW_RATE}}</span></p>\n\n                            </div>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                    <ion-card *ngIf="i.DIFF_RATE<0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(196, 23, 23, 0.14), 0 3px 1px 0px rgba(227, 16, 16, 0.2), 0 0px 5px 0 rgba(245, 12, 12, 0.12);padding: 2px;" no-margin no-padding\n\n                              >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <ion-item>\n\n                            <div item-start>\n\n                                <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                                <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;;font-size: 1.4rem;border-radius: 5px">{{i.CURRENT_RATE}}</p>\n\n                                <p style="color: #f53d3d;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                            </div>\n\n                            <div item-end align="end">\n\n                                <br>\n\n                                <p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.4rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-left: 25px;"> {{i.CLOSE_RATE}}</span></p>\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span><span style="margin-left: 25px;">L:{{i.LOW_RATE}}</span></p>\n\n                            </div>\n\n                        </ion-item>\n\n                    </ion-card>\n\n\n\n                    <ion-card *ngIf="i.DIFF_RATE==0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.14), 0 3px 1px 0px rgba(46,125,50,0.2), 0 0px 5px 0 rgba(46,125,50,0.12);padding: 4px;" no-margin no-padding >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <ion-item>\n\n                            <div item-start>\n\n                                <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                                <p style="background-color: transparent;width: fit-content;padding: 2px;font-weight: bold;;font-size: 1.3rem;border-radius: 5px">{{i.CURRENT_RATE}}</p>\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                            </div>\n\n                            <div item-end align="end">\n\n                                <br>\n\n                                <p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.3rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-left: 25px;"> {{i.CLOSE_RATE}}</span></p>\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span><span style="margin-left: 25px;">L:{{i.LOW_RATE}}</span></p>\n\n                            </div>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n            <p style="padding: 5px;margin-left: 5px;font-weight: bold;height: fit-content" class="nse-txt" *ngIf="MCXDATA.length > 0">\n\n                MCX\n\n            </p>\n\n            <ion-row *ngFor="let i of MCXDATA">\n\n                <ion-col col-12 style="height: fit-content" (click)="changeview2(i)">\n\n                    <ion-card *ngIf="i.DIFF_RATE>0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.9), 0 3px 1px 0px rgba(46,125,50,0.8), 0 0px 5px 0 rgba(46,125,50,0.7);padding: 2px;" no-margin >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <ion-item>\n\n                            <div item-start>\n\n                                <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                                <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;font-size: 1.4rem;border-radius: 5px;">{{i.CURRENT_RATE}}</p>\n\n                                <p style="color: #19b330;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                            </div>\n\n                            <div item-end align="end">\n\n                                <br>\n\n                                <!--<p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.4rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-left: 25px;"> {{i.CLOSE_RATE}}</span></p>-->\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span></p>\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">L:{{i.LOW_RATE}}<span style="margin-left: 25px;">C:{{i.CLOSE_RATE}}</span></p>\n\n                                <!--<p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span><span style="margin-left: 25px;">L:{{i.LOW_RATE}}</span></p>-->\n\n                            </div>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                    <ion-card *ngIf="i.DIFF_RATE<0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(196, 23, 23, 0.14), 0 3px 1px 0px rgba(227, 16, 16, 0.2), 0 0px 5px 0 rgba(245, 12, 12, 0.12);padding: 2px;" no-margin no-padding\n\n                              >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <ion-item>\n\n                            <div item-start>\n\n                                <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                                <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;;font-size: 1.4rem;border-radius: 5px">{{i.CURRENT_RATE}}</p>\n\n                                <p style="color: #f53d3d;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                            </div>\n\n                            <div item-end align="end">\n\n                                <br>\n\n                                <!--<p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.4rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-left: 25px;"> {{i.CLOSE_RATE}}</span></p>-->\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span></p>\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">L:{{i.LOW_RATE}}<span style="margin-left: 25px;">C:{{i.CLOSE_RATE}}</span></p>\n\n                            </div>\n\n                        </ion-item>\n\n                    </ion-card>\n\n\n\n                    <ion-card *ngIf="i.DIFF_RATE==0" style="width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.14), 0 3px 1px 0px rgba(46,125,50,0.2), 0 0px 5px 0 rgba(46,125,50,0.12);padding: 4px;" no-margin no-padding >\n\n                        <div align="end" style="font-size: 1.3em;margin-top: 1px;" *ngIf="deleteshow == true">\n\n                            <ion-icon name="ios-close-circle-outline" style="font-weight: bold;"></ion-icon>\n\n                        </div>\n\n                        <ion-item>\n\n                            <div item-start>\n\n                                <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                                <p style="background-color: transparent;width: fit-content;padding: 2px;font-weight: bold;;font-size: 1.3rem;border-radius: 5px">{{i.CURRENT_RATE}}</p>\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                            </div>\n\n                            <div item-end align="end">\n\n                                <br>\n\n                                <!--<p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.3rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-left: 25px;"> {{i.CLOSE_RATE}}</span></p>-->\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span></p>\n\n                                <p style="color: #222222;font-size: 1.4rem;padding: 2px;">L:{{i.LOW_RATE}}<span style="margin-left: 25px;">C:{{i.CLOSE_RATE}}</span></p>\n\n                            </div>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <div align="center" *ngIf="this.DDL_TYPE == \'PRIVATE\'" style="margin: 5%;">\n\n                <ion-row style="height: auto;">\n\n                    <ion-col>\n\n                        <ion-card style="width: 100%; box-shadow: 0 2px 2px 0 #424242, 0 3px 1px 0px #424242, 0 0px 5px 0 #424242;padding: 0px 4px 0px 4px;" no-margin no-padding\n\n                                  (tap)="openoptionpage()">\n\n                            <div align="center">\n\n                                <p style="color: #222222;font-size: 1.1rem;font-weight: 500" no-margin>\n\n                                    <ion-icon name="add" style="color: #222222;padding: 0px 4px;margin: 6px 0px 4px 0px;"></ion-icon>\n\n                                    Add\n\n                                    <ion-icon name="add" style="color: #222222;padding: 0px 4px;margin: 6px 0px 4px 0px;"></ion-icon>\n\n                                </p>\n\n                                <p class="" style="width: fit-content;padding: 0px 2px;font-weight: bold;font-size: 1.3rem;border-radius: 5px;" no-margin>NSE</p>\n\n                                <p style="font-weight: bold;font-size: 1.3rem;" no-margin>Option</p>\n\n                            </div>\n\n                        </ion-card>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n            </div>\n\n\n\n        </div>\n\n    </div>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <div *ngIf="hidedetails == true" (click)="hidedetailshow()">\n\n        <ion-row *ngIf="SELECTEDCASHDATA.length">\n\n            <ion-col col-12 style="height: fit-content;width: 100%;" *ngFor="let i of SELECTEDCASHDATA let idx = index">\n\n                <ion-card *ngIf="i.DIFF_RATE>0" style="margin-bottom: 10px;border-radius: 15px; width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.9), 0 3px 1px 0px rgba(46,125,50,0.8), 0 0px 5px 0 rgba(46,125,50,0.7);padding: 5px;"\n\n                          no-margin >\n\n                    <ion-item>\n\n                        <div item-start>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                            <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;font-size: 1.4rem;border-radius: 5px;">{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #19b330;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                        </div>\n\n                        <div item-end align="end">\n\n                            <br>\n\n                            <!--<p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.4rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-right: 25px;"> {{i.CLOSE_RATE}}</span></p>-->\n\n                            <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span></p>\n\n                            <p style="color: #222222;font-size: 1.4rem;padding: 2px;">L:{{i.LOW_RATE}}<span style="margin-left: 25px;">C:{{i.CLOSE_RATE}}</span></p>\n\n                        </div>\n\n                    </ion-item>\n\n                    <ion-row>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">BID Price</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.BID}}({{i.BIDQTY}})</p>\n\n                        </ion-col>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Ask Price</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.ASK}}({{i.ASKQTY}})</p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Volume</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.VOLUME}}</p>\n\n                        </ion-col>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Open Interest</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.OI}}</p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card>\n\n                <ion-card *ngIf="i.DIFF_RATE<0"\n\n                          style="margin-bottom: 10px;border-radius: 15px;width: 100%; box-shadow: 0 2px 2px 0 rgba(196, 23, 23, 0.14), 0 3px 1px 0px rgba(227, 16, 16, 0.2), 0 0px 5px 0 rgba(245, 12, 12, 0.12);padding: 5px;"\n\n                          no-margin no-padding\n\n                          >\n\n                    <ion-item>\n\n                        <div item-start>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                            <p class="{{i.CHANGED_COLOR}}" style="width: fit-content;padding: 2px;font-weight: bold;;font-size: 1.4rem;border-radius: 5px">{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #f53d3d;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                        </div>\n\n                        <div item-end align="end">\n\n                            <br>\n\n                            <!--<p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.4rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-left: 25px;"> {{i.CLOSE_RATE}}</span></p>-->\n\n                            <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span></p>\n\n                            <p style="color: #222222;font-size: 1.4rem;padding: 2px;">L:{{i.LOW_RATE}}<span style="margin-left: 25px;">C:{{i.CLOSE_RATE}}</span></p>\n\n                        </div>\n\n                    </ion-item>\n\n                    <ion-row>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">BID Price</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.BID}}({{i.BIDQTY}})</p>\n\n                        </ion-col>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Ask Price</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.ASK}}({{i.ASKQTY}})</p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Volume</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.VOLUME}}</p>\n\n                        </ion-col>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Open Interest</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.OI}}</p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card>\n\n                <ion-card *ngIf="i.DIFF_RATE==0"\n\n                          style="margin-bottom: 10px;border-radius: 15px;width: 100%; box-shadow: 0 2px 2px 0 rgba(46,125,50,0.14), 0 3px 1px 0px rgba(46,125,50,0.2), 0 0px 5px 0 rgba(46,125,50,0.12);padding: 5px;" no-margin\n\n                          no-padding >\n\n                    <ion-item>\n\n                        <div item-start>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.SYMBOL}}</p>\n\n                            <p style="background-color: transparent;width: fit-content;padding: 2px;font-weight: bold;;font-size: 1.4rem;border-radius: 5px">{{i.CURRENT_RATE}}</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;padding: 2px;">{{i.DIFF_RATE}} ({{i.DIFF_RATE_PER}})</p>\n\n                        </div>\n\n                        <div item-end align="end">\n\n                            <br>\n\n                            <!--<p style="color:#000;padding: 2px;font-weight: bold;font-size: 1.4rem;">{{i.CURRENT_RATE}}<span style="margin-left: 25px;">|</span> <span style="margin-left: 25px;"> {{i.CLOSE_RATE}}</span></p>-->\n\n                            <p style="color: #222222;font-size: 1.4rem;padding: 2px;">O:{{i.OPENING_RATE}}<span style="margin-left: 25px;">H:{{i.HIGH_RATE}}</span></p>\n\n                            <p style="color: #222222;font-size: 1.4rem;padding: 2px;">L:{{i.LOW_RATE}}<span style="margin-left: 25px;">C:{{i.CLOSE_RATE}}</span></p>\n\n                        </div>\n\n                    </ion-item>\n\n                    <ion-row>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">BID Price</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.BID}}({{i.BIDQTY}})</p>\n\n                        </ion-col>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Ask Price</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.ASK}}({{i.ASKQTY}})</p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Volume</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.VOLUME}}</p>\n\n                        </ion-col>\n\n                        <ion-col align="center">\n\n                            <p style="color: #999999;font-size: 1.2rem;padding: 2px;">Open Interest</p>\n\n                            <p style="color: #222222;font-size: 1.4rem;font-weight: 500;padding: 2px;">{{i.OI}}</p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card>\n\n            </ion-col>\n\n\n\n        </ion-row>\n\n    </div>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__providers_rgts_liverate_rgts_liverate__["a" /* RgtsLiverateProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=30.js.map