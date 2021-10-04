webpackJsonp([10],{

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeplanPageModule", function() { return SubscribeplanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscribeplan__ = __webpack_require__(524);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubscribeplanPageModule = /** @class */ (function () {
    function SubscribeplanPageModule() {
    }
    SubscribeplanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__subscribeplan__["a" /* SubscribeplanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__subscribeplan__["a" /* SubscribeplanPage */]),
            ],
        })
    ], SubscribeplanPageModule);
    return SubscribeplanPageModule;
}());

//# sourceMappingURL=subscribeplan.module.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribeplanPage; });
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



// import {InAppBrowser} from '@ionic-native/in-app-browser';
// import {HTTP} from '@ionic-native/http';
/**
 * Generated class for the SubscribeplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubscribeplanPage = /** @class */ (function () {
    function SubscribeplanPage(navCtrl, navParams, api, loadingCtrl, toastCtrl) {
        // this.instamojoClient = new Instamojo(http, iab, 'http://admin.securetrade.online/access_token.php');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.purchaseArray = [];
        this.messages = [];
        this.PlanIdArray = [];
        this.debitAmount = 0;
        this.MaxAmount = 0;
        this.planamount = 0;
        this.isStatus = "false";
        this.AMOUNT = 0;
        this.MONTH = "1";
        this.SELECTEDID = "1";
        this.Showcode = false;
        this.hidebutton = false;
        this.Valid_code = false;
        this.finalcode = "";
        this.login_details = JSON.parse(localStorage.getItem("login_data"));
        this.SELECTEDID = this.navParams.data;
        this.callapi(this.MONTH);
    }
    SubscribeplanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubscribeplanPage');
    };
    SubscribeplanPage.prototype.presentToast = function (msg) {
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
    SubscribeplanPage.prototype.openinput = function () {
        if (this.hidebutton == false) {
            this.hidebutton = true;
        }
        else {
            this.hidebutton = false;
        }
    };
    // purchaseplan(itemKey, checked, index) {
    //
    //     console.log("checkeddddd", checked);
    //     console.log("checkValue", itemKey);
    //     const foundAt = this.items.indexOf(itemKey) + 1;
    //     console.log("index123", index);
    //
    //     if (checked == true) {
    //
    //         console.log("checked true");
    //
    //         console.log("checkedagain", "");
    //
    //         this.isStatus = "true";
    //
    //         this.messages.push(itemKey.AMOUNT);
    //         this.PlanIdArray.push(itemKey.ID);
    //
    //         this.debitAmount = 0;
    //         this.MaxAmount = 0;
    //         this.planamount = 0;
    //
    //         this.GetWalletBalance();
    //
    //         console.log("messagelist", this.messages);
    //         console.log("planidlist", this.PlanIdArray);
    //
    //     } else {
    //
    //          // this.messages.splice(index,1);
    //
    //         let index = this.messages.indexOf(itemKey.AMOUNT);
    //
    //         console.log("remove index", index);
    //
    //         // if (index > -1) {
    //         //
    //         //     this.items.splice(index, 1);
    //         //
    //         //     console.log("items", this.items);
    //         // }
    //
    //         console.log("dfgcgbh",index);
    //
    //         console.log("checked false");
    //
    //         console.log("messagelist", this.messages);
    //
    //         console.log("xcgvcbvb", foundAt);
    //
    //         (this.messages).splice(index,1);
    //         (this.PlanIdArray).splice(itemKey.ID, 1);
    //
    //         console.log("removedmessagelist", this.messages);
    //         console.log("removedplanidlist", this.PlanIdArray);
    //         console.log("false", checked);
    //
    //         this.debitAmount = 0;
    //         this.MaxAmount = 0;
    //         this.planamount = 0;
    //
    //         this.GetWalletBalance();
    //
    //     }
    //
    // }
    SubscribeplanPage.prototype.Couponcode = function () {
        var _this = this;
        // this.navCtrl.push('CouponcodePage')
        console.log("code", this.code);
        if (this.code == "" || this.code == null || this.code == "null") {
            this.api.presentToast("Enter CouponCode");
        }
        else {
            this.loading = this.loadingCtrl.create({ content: "please wait..." });
            this.loading.present();
            this.api.couponcodeapply(this.code, this.finalPayableAmount).then(function (result) {
                _this.loading.dismiss();
                _this.data = result;
                console.log("data", result);
                if (_this.data.status == 200) {
                    _this.Showcode = false;
                    _this.finalcode = _this.code;
                    _this.finalPayableAmount = _this.data.data[0].PAYABLE_AMOUNT;
                    _this.DISCOUNT = _this.data.data[0].DISCOUNT_AMOUNT;
                }
                else {
                    _this.api.ErrorApi(_this.data.status, _this.data.message);
                }
            }, function (err) {
                console.log(err);
                _this.loading.dismiss();
                _this.api.presentToast("Enter Valid CouponCode");
            });
        }
    };
    SubscribeplanPage.prototype.delete = function (chip) {
        chip.remove();
        this.Showcode = true;
        this.finalcode = "";
        this.finalPayableAmount = this.REALPRICE;
        this.finalPayableAmount2 = this.REALPRICE;
    };
    SubscribeplanPage.prototype.purchaseplan = function (itemKey, checked, index) {
        console.log("checkeddddd", checked);
        console.log("checkValue", itemKey);
        var foundAt = this.items.indexOf(itemKey) + 1;
        console.log("index123", index);
        if (checked == true) {
            console.log("checked true");
            console.log("checkedagain", "");
            this.isStatus = "true";
            this.messages.push(itemKey.AMOUNT);
            this.PlanIdArray.push(itemKey.ID);
            this.debitAmount = 0;
            this.MaxAmount = 0;
            this.planamount = 0;
            this.GetWalletBalance();
            console.log("messagelist", this.messages);
            console.log("planidlist", this.PlanIdArray);
        }
        else {
            console.log("checked false");
            console.log("messagelist", this.messages);
            console.log("xcgvcbvb", foundAt);
            console.log("remove index", index);
            if (this.messages.length > -1) {
                for (var j = 0; j < this.PlanIdArray.length; j++) {
                    if (itemKey.ID == this.PlanIdArray[j]) {
                        (this.messages).splice(j, 1);
                        (this.PlanIdArray).splice(j, 1);
                        console.log("removedmessagelist", this.messages);
                        console.log("removedplanidlist", this.PlanIdArray);
                        console.log("false", checked);
                        this.debitAmount = 0;
                        this.MaxAmount = 0;
                        this.planamount = 0;
                        this.GetWalletBalance();
                    }
                }
            }
            else {
                this.debitAmount = 0;
                this.MaxAmount = 0;
                this.planamount = 0;
            }
            // this.messages.splice(index,1);
            // let indexnew = this.items.indexOf(itemKey.ID);
            //
            // if (indexnew > -1) {
            //
            //     this.items.splice(index, 1);
            //
            //     console.log("items", this.items);
            // }
            // const index: number = this.items.indexOf(itemKey.ID);
            // if (index !== -1) {
            //     this.items.splice(index, 1);
            //
            // }
        }
    };
    SubscribeplanPage.prototype.GetWalletBalance = function () {
        var _this = this;
        this.api.GetWalletBalance(this.UID, "wallet_balance")
            .then(function (data) {
            _this.apiData = data;
            console.log("response", _this.apiData.data);
            _this.WALLET = _this.apiData.data;
            for (var j = 0; j < _this.messages.length; j++) {
                _this.planamount += parseInt(_this.messages[j]);
                console.log("amount", _this.planamount);
            }
            _this.MaxAmount = _this.planamount / 2;
            console.log("maxamount", _this.planamount);
            if (_this.WALLET > _this.MaxAmount) {
                _this.debitAmount = _this.MaxAmount;
                _this.finalPayableAmount = _this.planamount - _this.debitAmount;
                _this.finalPayableAmount2 = _this.planamount - _this.debitAmount;
            }
            else {
                _this.debitAmount = _this.WALLET;
                _this.finalPayableAmount = _this.planamount - _this.debitAmount;
                _this.finalPayableAmount2 = _this.planamount - _this.debitAmount;
            }
        }).catch();
    };
    SubscribeplanPage.prototype.SubmitPlan = function () {
        var _this = this;
        this.api.submitPlan(this.MONTH, this.finalcode, this.finalPayableAmount2, this.SELECTEDID).then(function (data) {
            _this.PlanPurchaseResponse = data;
            console.log("reponse", _this.PlanPurchaseResponse);
            if (_this.PlanPurchaseResponse.status == 200) {
                _this.AMOUNT = 0;
                console.log("dnfvfcvc", _this.PlanPurchaseResponse.data);
                _this.MERCHANTID = _this.PlanPurchaseResponse.data[0].PAYMENT_NO;
                _this.PRODUCTION_INFO = _this.PlanPurchaseResponse.data[0].MAIN_TYPE;
                _this.hash_key = _this.PlanPurchaseResponse.hash_key;
                _this.key = _this.PlanPurchaseResponse.key;
                _this.salt = _this.PlanPurchaseResponse.salt;
                _this.hash = _this.PlanPurchaseResponse.hash;
                _this.pay_mode = _this.PlanPurchaseResponse.pay_mode;
                if (_this.finalPayableAmount == 0) {
                    _this.VerifyPayment(_this.MERCHANTID);
                }
                else {
                    _this.proceedToPayment(_this.MERCHANTID, _this.finalPayableAmount, _this.login_details.data.NAME, _this.login_details.data.EMAIL, _this.login_details.data.MOBILE, _this.PRODUCTION_INFO, _this.login_details.data.ID);
                }
                //  if (this.AMOUNT == 0) {
                //
                //      this.api.VerifyPayment(this.UID, this.MERCHANTID, "", "payment_success")
                //
                //          .then(data => {
                //
                //              this.VerifyPaymentResponse = data;
                //
                //              console.log("forgot", this.VerifyPaymentResponse.data);
                //
                //              if (this.VerifyPaymentResponse.status == 200) {
                //
                //                  this.navCtrl.setRoot('HomePage');
                //
                //                  this.presentToast("Payment Done Successfully");
                //
                //              } else {
                //
                //                  this.presentToast(this.VerifyPaymentResponse.message);
                //
                //              }
                //
                //
                //          }).catch();
            }
            else {
                //this.PayNow(this.MERCHANTID, this.AMOUNT, this.FIRSTNAME, this.EMAIL, this.PHONE);
                // this.proceedToPayment(this.MERCHANTID, this.FIRSTNAME, this.AMOUNT, this.EMAIL, this.PHONE, this.PRODUCTION_INFO, this.UID);
            }
            // } else if (this.VerifyPaymentResponse.status == 404) {
            //     this.api.presentToast(this.VerifyPaymentResponse.message);
            //
            // }
            // // Commented by Dishant. Date: 26-02-2019 11:10:14 Comment: invalid key logout and go loginpage
            // else if (this.VerifyPaymentResponse.status == 440) {
            //     this.api.presentToast(this.VerifyPaymentResponse.message);
            //     localStorage.removeItem("login_VerifyPaymentResponse");
            //     this.navCtrl.setRoot('SignloginPage');
            // }
            // // Commented by Dishant. Date: 25-02-2019 16:55:30 Comment: version error open play store
            // else if (this.VerifyPaymentResponse.status == 304) {
            //     this.api.presentToast(this.VerifyPaymentResponse.message);
            //     window.open(this.api.playstorelink, '_system');
            // }
            // // Commented by Dishant. Date: 25-02-2019 16:56:28 Comment: os version error exit app
            // else if (this.VerifyPaymentResponse.status == 530) {
            //     this.api.presentToast(this.VerifyPaymentResponse.message);
            //     this.api.Exitapp();
            //
            // }
            // // Commented by Dishant. Date: 25-02-2019 16:57:27 Comment: other massages
            // else {
            //     this.api.presentToast(this.VerifyPaymentResponse.message);
            // }
        }).catch();
        // console.log("status", this.isStatus);
        //
        // if (this.isStatus == "false") {
        //
        //     this.presentToast("Please Select Atleast One Plan")
        //
        //
        // } else {
        //
        //     console.log("ggffggg", this.PlanIdArray);
        //
        //
        // }
    };
    // live of secureTrade
    // "key": "FDSWKNI60Q",
    // "salt": "DEDWVP6H0U",
    // "pay_mode": "production",
    // test
    // "key": "QD0RH1OSCV",
    // "salt": "XXFFHTVITH",
    // "pay_mode": "test",
    SubscribeplanPage.prototype.proceedToPayment = function (MERCHANTID, AMOUNT, FIRSTNAME, EMAIL, PHONE, PRODUCTION_INFO, UID) {
        var self = this;
        var params = {
            "firstname": FIRSTNAME,
            "amount": AMOUNT + ".0",
            "email": EMAIL,
            "phone": PHONE,
            "productinfo": PRODUCTION_INFO,
            "surl": "https://your.successurl.in/",
            "furl": "https://your.failureurl.in/",
            "txnid": MERCHANTID,
            "key": this.key,
            "hash": this.hash_key,
            "address1": "",
            "address2": "",
            "city": "",
            "state": "",
            "country": "",
            "zipcode": "",
            "pay_mode": this.pay_mode,
            "unique_id": this.UID //Pass empty string if you dont want to pass customer unique id.
        };
        // let params = {
        //     "firstname": FIRSTNAME,
        //     "amount": AMOUNT,
        //     "email": EMAIL,
        //     "phone": PHONE,
        //     "productinfo": PRODUCTION_INFO,
        //     "udf1": "udf1",
        //     "udf2": "udf2",
        //     "udf3": "udf3",
        //     "udf4": "udf4",
        //     "udf5": "udf5",
        //     "udf6": "",
        //     "udf7": "",
        //     "udf8": "",
        //     "udf9": "",
        //     "udf10": "",
        //     "surl": "https://your.successurl.in/",
        //     "furl": "https://your.failureurl.in/",
        //     "txnid": MERCHANTID,
        //     "unique_id": this.UID,
        //     "key": this.api.KEY,
        //     "salt": this.api.SALT,
        //     "address1": "address one",
        //     "address2": "address two",
        //     "city": "",
        //     "state": "",
        //     "country": "",
        //     "zipcode": "",
        //     "is_coupon_enabled": "0",
        //     "pay_mode": this.api.pay_mode,
        // };
        console.log("Pass data", params);
        window['plugins'].PayWithEasebuzz.EasebuzzPay(params, function (payment_response) {
            // Below is the line where showResponse called
            var result = payment_response.result;
            var detail_response = payment_response.response;
            console.log("result", result);
            console.log("detail_response", detail_response);
            if (result == "payment_successfull") {
                self.VerifyPayment(MERCHANTID);
            }
        }, function (err) {
            console.log('*************ERROR**************');
            alert(err);
        });
    };
    // public proceedToPayment(MERCHANTID: any, FIRSTNAME: any, AMOUNT: number, EMAIL: any, PHONE: any, PRODUCTION_INFO: any, UID: any) {
    //     let self = this;
    //     let params = {
    //         "firstname": FIRSTNAME,
    //         "amount": AMOUNT,
    //         "email": EMAIL,
    //         "phone": PHONE,
    //         "productinfo": PRODUCTION_INFO,
    //         "udf1": "udf1",
    //         "udf2": "udf2",
    //         "udf3": "udf3",
    //         "udf4": "udf4",
    //         "udf5": "udf5",
    //         "udf6": "",
    //         "udf7": "",
    //         "udf8": "",
    //         "udf9": "",
    //         "udf10": "",
    //         "surl": "https://your.successurl.in/",
    //         "furl": "https://your.failureurl.in/",
    //         "txnid": MERCHANTID,
    //         "unique_id": this.UID,
    //         "key": this.api.KEY,
    //         "salt": this.api.SALT,
    //         "address1": "address one",
    //         "address2": "address two",
    //         "city": "",
    //         "state": "",
    //         "country": "",
    //         "zipcode": "",
    //         "is_coupon_enabled": "0",
    //         "pay_mode": this.api.pay_mode,
    //     };
    //     console.log("payment review", this.params);
    //
    //     window['plugins'].PayWithEasebuzz.EasebuzzPay(params, function (payment_response) {
    //         // Below is the line where showResponse called
    //         var result = payment_response.result;
    //         var detail_response = payment_response.response;
    //
    //         console.log("result", result);
    //         console.log("detail_response", detail_response);
    //
    //         if (result == "payment_successfull") {
    //
    //             self.VerifyPayment(MERCHANTID);
    //
    //         }
    //
    //     }, function (err) {
    //         console.log('*************ERROR**************');
    //         alert(err);
    //     });
    // }
    /* private PayNow(TXNID: any, AMOUNT: number, FIRSTNAME: any, EMAIL: any, PHONE: any) {

         var data = this.instamojoClient.getPaymentFields();
         // data.purpose = "Test";            // REQUIRED
         data.purpose = "Production";            // REQUIRED
         data.amount = AMOUNT;                  // REQUIRED
         // data.amount = this.temptotalamount;                  // REQUIRED
         data.buyer_name = FIRSTNAME;                  // REQUIRED
         data.email = EMAIL;                  // REQUIRED
         data.phone = PHONE;                  // REQUIRED

         // do not change this
         data.redirect_url = "http://localhost";

         this.instamojoClient.payNow(data).then(response => {

             this.MERCHANTID = response.id;
             console.log("paymentresponse", JSON.stringify(response));
             console.log("paymentresponse", JSON.stringify(response.status));
             console.log("MERCHANTID", JSON.stringify(response.id));


             if (response.status == true) {


                 this.VerifyPayment(this.UID, TXNID, "", "payment_success");

                 // this.presentToast("Your Payment Done Successfully")

             } else {

                 this.presentToast("Payment Failed")

             }


         }).catch(err => {

             throw err;

         });
     }*/
    SubscribeplanPage.prototype.VerifyPayment = function (MERCHANTID) {
        var _this = this;
        console.log("data", MERCHANTID);
        this.api.VerifyPayment(MERCHANTID)
            .then(function (data) {
            _this.VerifyPaymentResponse = data;
            console.log("forgot", _this.VerifyPaymentResponse.data);
            if (_this.VerifyPaymentResponse.status == 200) {
                _this.getsymboldata();
                _this.presentToast("Your Payment Done Successfully");
            }
            else if (_this.VerifyPaymentResponse.status == 404) {
                _this.api.presentToast(_this.VerifyPaymentResponse.message);
            }
            else if (_this.VerifyPaymentResponse.status == 440) {
                _this.api.presentToast(_this.VerifyPaymentResponse.message);
                localStorage.removeItem("login_apidata2");
                _this.navCtrl.setRoot('SignloginPage');
            }
            else if (_this.VerifyPaymentResponse.status == 304) {
                _this.api.presentToast(_this.VerifyPaymentResponse.message);
                window.open(_this.api.playstorelink, '_system');
            }
            else if (_this.VerifyPaymentResponse.status == 530) {
                _this.api.presentToast(_this.VerifyPaymentResponse.message);
                _this.api.Exitapp();
            }
            else {
                _this.api.presentToast(_this.VerifyPaymentResponse.message);
            }
        }).catch();
    };
    SubscribeplanPage.prototype.getsymboldata = function () {
        var _this = this;
        this.api.splashscreenapi().then(function (data) {
            // this.users = data;
            _this.plandata = data;
            console.log("planDATA", _this.plandata);
            if (_this.plandata.status == '200') {
                localStorage.removeItem("NSECASH");
                localStorage.removeItem("NSEFO");
                localStorage.removeItem("MCX");
                localStorage.setItem("NSECASH", JSON.stringify(_this.plandata.symbol.NSECASH));
                localStorage.setItem("NSEFO", JSON.stringify(_this.plandata.symbol.NSEFO));
                localStorage.setItem("MCX", JSON.stringify(_this.plandata.symbol.MCX));
                var datapass = {
                    ALGO_LIVECHART_PURCHSE: _this.plandata.ALGO_LIVECHART_PURCHSE,
                    AUTO_ADVICERY_PURCHSE: _this.plandata.AUTO_ADVICERY_PURCHSE,
                    LIVE_CHART_PURCHSE: _this.plandata.LIVE_CHART_PURCHSE,
                    LIVE_RATE_PURCHSE: _this.plandata.LIVE_RATE_PURCHSE,
                    MESSAGE_BOARD_PURCHSE: _this.plandata.MESSAGE_BOARD_PURCHSE
                };
                localStorage.setItem("PURCHASE", JSON.stringify(datapass));
                _this.api.ALGO_LIVECHART_PURCHSE = _this.plandata.ALGO_LIVECHART_PURCHSE;
                _this.api.AUTO_ADVICERY_PURCHSE = _this.plandata.AUTO_ADVICERY_PURCHSE;
                _this.api.LIVE_CHART_PURCHSE = _this.plandata.LIVE_CHART_PURCHSE;
                _this.api.LIVE_RATE_PURCHSE = _this.plandata.LIVE_RATE_PURCHSE;
                _this.api.MESSAGE_BOARD_PURCHSE = _this.plandata.MESSAGE_BOARD_PURCHSE;
                if (_this.api.LIVE_CHART_PURCHSE == false) {
                    _this.navCtrl.setRoot('HomepagefreePage');
                }
                else {
                    _this.navCtrl.setRoot('HomePage');
                }
            }
            else {
                _this.api.ErrorApi(_this.plandata.status, _this.plandata.message);
            }
        }).catch();
    };
    SubscribeplanPage.prototype.callapi = function (month) {
        var _this = this;
        this.loading = this.loadingCtrl.create({ content: "please wait..." });
        this.loading.present();
        this.api.purchasePlan(month)
            .then(function (data) {
            // this.users = data;
            _this.apiData = data;
            console.log("abc", _this.apiData);
            if (_this.apiData.status == 200) {
                _this.items = _this.apiData.data;
                _this.Valid_code = _this.apiData.active_coupon;
                _this.montharray = _this.apiData.month;
                console.log("items", _this.items);
                console.log("montharray", _this.montharray);
                if (_this.SELECTEDID == '1') {
                    _this.finalPayableAmount = _this.items[0].TOTAL;
                    _this.finalPayableAmount2 = _this.items[0].TOTAL;
                }
                else if (_this.SELECTEDID == '2') {
                    _this.finalPayableAmount = _this.items[1].TOTAL;
                    _this.finalPayableAmount2 = _this.items[1].TOTAL;
                }
                else if (_this.SELECTEDID == '3') {
                    _this.finalPayableAmount = _this.items[2].TOTAL;
                    _this.finalPayableAmount2 = _this.items[2].TOTAL;
                }
                _this.Showcode = true;
                _this.finalcode = "";
                // for (var i of this.items) {
                //
                //     i.checked = false;
                //
                //     this.purchaseArray.push(i);
                //
                // }
                // console.log("array_name", this.purchaseArray);
                _this.loading.dismiss();
            }
            else {
                _this.api.ErrorApi(_this.apiData.status, _this.apiData.message);
            }
        }).catch();
    };
    SubscribeplanPage.prototype.changeredio = function (id, total) {
        this.SELECTEDID = id;
        this.finalPayableAmount = total;
        this.finalPayableAmount2 = total;
        this.REALPRICE = total;
        this.Showcode = true;
        this.finalcode = "";
    };
    SubscribeplanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subscribeplan',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\subscribeplan\subscribeplan.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Subscribe Plan</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="scroll-content">\n\n\n\n    <ion-card class="ion-cards" *ngFor="let item of items;  let i = index">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-2 class="ion-col-bg">\n\n                    <p class="amount-p">{{item.TOTAL}}</p>\n\n                </ion-col>\n\n\n\n                <ion-col col-8 class="select">\n\n                    <p class="title-p" style="margin-top: 5px;">{{item.TITLE}}</p>\n\n                    <p style="font-size: 11px;" *ngFor="let j of item.SUB_DETAIL">{{j.TYPE}}</p>\n\n                </ion-col>\n\n                <ion-col col-2 class="select_check">\n\n                    <ion-item class="inner">\n\n                        <ion-radio color="blue" [checked]="item.ID == SELECTEDID" (ionSelect)="changeredio(item.ID,item.TOTAL)"></ion-radio>\n\n                    </ion-item>\n\n                </ion-col>\n\n\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n    </ion-card>\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n    <ion-item no-lines>\n\n        <ion-label class="popup" style="color: black;font-size: 18px;">Subscribe For</ion-label>\n\n        <ion-select no-margin no-padding style="padding-right: 10px" [(ngModel)]="MONTH" (ionChange)="callapi(MONTH)">\n\n            <ion-option *ngFor="let i of montharray let p = index" [value]="i" [selected]="p == 0">{{i}} month</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n    <!--<ion-item no-border no-lines>-->\n\n    <!--<ion-icon item-start no-margin no-padding style="color: #ed3954;" ios="ios-pricetags-outline" md="ios-pricetags-outline"></ion-icon>-->\n\n    <!--<ion-label class="popup" (click)="Couponcode()">Have any Coupon Code ?</ion-label>-->\n\n    <!--</ion-item>-->\n\n    <div *ngIf="Valid_code == true" align="center">\n\n        <ion-label style="font-size: 10px;\n\n    width: 100%;color: #32c9ac" (click)="openinput()">Enter Coupon Code\n\n        </ion-label>\n\n        <div align="center" style="width: 100%; bottom: 0; margin-bottom: 5%;" *ngIf="hidebutton">\n\n            <ion-item style="width: 80%; background: transparent" no-padding no-lines>\n\n                <ion-input style="background-color: white;height: 36px;border-radius: 6px;" placeholder="Enter Code" [(ngModel)]="code"></ion-input>\n\n                <button item-end ion-button class="demo" style="margin-top: 10px;" (click)="Couponcode()">Apply</button>\n\n            </ion-item>\n\n        </div>\n\n    </div>\n\n\n\n    <div *ngIf="Showcode != true" align="center">\n\n        <ion-label style="font-size: 10px;\n\n    width: 100%;color: #32c9ac" (click)="openinput()">Code Apply Successfully\n\n        </ion-label>\n\n\n\n        <ion-label style="font-size: 10px;\n\n    width: 100%;color: #32c9ac" (click)="openinput()"> Rs.{{DISCOUNT}} OFF\n\n        </ion-label>\n\n        <ion-chip #chip1>\n\n            <ion-avatar>\n\n                <img src="assets/imgs/planicon.png" style="padding: 7px;">\n\n            </ion-avatar>\n\n            <ion-label>{{code}}</ion-label>\n\n            <button ion-button clear color="#32c9ac" (click)="delete(chip1)">\n\n                <ion-icon name="close-circle"></ion-icon>\n\n            </button>\n\n        </ion-chip>\n\n    </div>\n\n\n\n    <!--<ion-item no-border no-lines>-->\n\n    <!--<ion-label style="color:#000; width: 50%" item-start>Month</ion-label>-->\n\n    <!--<ion-select no-margin no-padding style="margin-left: 40%">-->\n\n    <!--<ion-option [selected]="true">3 month</ion-option>-->\n\n    <!--<ion-option>6 month</ion-option>-->\n\n    <!--<ion-option>12 month</ion-option>-->\n\n    <!--</ion-select>-->\n\n    <!--</ion-item>-->\n\n    <!--<ion-item no-border no-lines>-->\n\n    <!--<ion-icon no-margin no-padding item-start style="color: #ed3954;" ios="ios-pricetags-outline" md="ios-pricetags-outline"></ion-icon>-->\n\n    <!--<ion-label class="popup" (click)="promocode()">{{api.PROMOCODE || "Have any Coupon Code ?"}}</ion-label>-->\n\n    <!--</ion-item>-->\n\n    <!-- <ion-row style="height: 30px; margin-bottom: 10px;background-color: white">\n\n         <ion-col style="margin-top: -15px;">\n\n             <ion-icon align="center" style="margin-left: 7px;margin-top: 18px;color: #2e7d32;" ios="ios-pricetags-outline" md="ios-pricetags-outline"></ion-icon>\n\n         </ion-col>\n\n         <ion-col col-5 style="margin-top: -20px;">\n\n             <ion-label style="margin-left: -10px;" class="popup" (click)="promocode()">{{api.PROMOCODE || "Have any Coupon Code ?"}}</ion-label>\n\n         </ion-col>\n\n         <ion-col>\n\n             <img src="assets/imgs/cancel.png" style="height: 20px; width: 20px;" item-end *ngIf="api.promocodekey == 1" (click)="removecode()">\n\n         </ion-col>\n\n         <ion-col col-4 style="margin-top: -10px;">\n\n             &lt;!&ndash;<ion-label align="center" class="qty">Total Qty : {{TOTALQTY}}</ion-label>&ndash;&gt;\n\n         </ion-col>\n\n     </ion-row>-->\n\n    <!-- <ion-row col-12 style="padding: 0px; background: #ed3954">\n\n\n\n         &lt;!&ndash;<ion-col col-6>&ndash;&gt;\n\n             &lt;!&ndash;<div style="font-weight: bold; margin-top: 4px">&ndash;&gt;\n\n                 &lt;!&ndash;<span style="color: #ffffff;font-size: 13px;">₹</span> <span style="color: #ffffff; font-size: 13px;">Wallet Balance : {{debitAmount || \'0.00\'}}</span><br>&ndash;&gt;\n\n                 &lt;!&ndash;<span style="color: #ffffff;font-size: 13px;">₹</span> <span style="color: #ffffff; font-size: 13px;">Payable Amount : {{finalPayableAmount || \'0.00\'}}</span>&ndash;&gt;\n\n             &lt;!&ndash;</div>&ndash;&gt;\n\n         &lt;!&ndash;</ion-col>&ndash;&gt;\n\n\n\n\n\n         <ion-col col-6>\n\n             <button ion-button full style="margin-bottom: 0px; width: 75%; background: #f53d3d; margin-top: 8px; border-radius: 5px; margin-left: 15px;" (click)="SubmitPlan()">Subscribe Plan  Payable Amount : {{finalPayableAmount || \'0.00\'}}</button>\n\n         </ion-col>\n\n     </ion-row>\n\n -->\n\n    <button *ngIf="finalPayableAmount != 0" ion-button full (click)="SubmitPlan()">Payable Amount : Rs. {{finalPayableAmount || \'0.00\'}}</button>\n\n    <button *ngIf="finalPayableAmount == 0" ion-button full (click)="SubmitPlan()">Buy Now</button>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\subscribeplan\subscribeplan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
    ], SubscribeplanPage);
    return SubscribeplanPage;
}());

//# sourceMappingURL=subscribeplan.js.map

/***/ })

});
//# sourceMappingURL=10.js.map