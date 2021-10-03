import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";


// import {FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms';
import {HomePage} from "../home/home";
import {CouponcodePage} from "../couponcode/couponcode";
// import {InAppBrowser} from '@ionic-native/in-app-browser';
// import {HTTP} from '@ionic-native/http';

/**
 * Generated class for the SubscribeplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-subscribeplan',
    templateUrl: 'subscribeplan.html',
})
export class SubscribeplanPage {

    apiData;
    items;
    loading;

    surveyForm;
    purchaseArray = [];
    amount;
    item;

    messages = [];
    PlanIdArray = [];
    login_details: any;
    UID;
    WALLET;
    finalPayableAmount;
    finalPayableAmount2;
    REALPRICE;
    DISCOUNT;
    debitAmount = 0;
    MaxAmount = 0;
    planamount = 0;
    plandata;
    IDARRAY: Array<string>;

    isStatus = "false";

    /*variables for plan purchase*/

    PlanPurchaseResponse;
    MERCHANTID: any;
    FIRSTNAME: any;
    AMOUNT = 0;
    EMAIL: any;
    PHONE: any;
    CUSTOMER_ADDRESS1: any;
    PRODUCTION_INFO: any;

    /*verify payment response variable*/

    VerifyPaymentResponse;

    params;

    instamojoClient;
    MONTH = "1";
    montharray;
    SELECTEDID = "1";
    Showcode: boolean = false;
    hidebutton: boolean = false;
    Valid_code: boolean = false;
    code;
    finalcode = "";
    data;
    hash_key;
    key;
    salt;
    hash;
    pay_mode;

    constructor(public navCtrl: NavController,
                public navParams: NavParams, public api: GlobalProvider,
                public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

        // this.instamojoClient = new Instamojo(http, iab, 'http://admin.securetrade.online/access_token.php');

        this.login_details = JSON.parse(localStorage.getItem("login_data"));

        this.SELECTEDID = this.navParams.data;

        this.callapi(this.MONTH);


    }

    ionViewDidLoad() {

        console.log('ionViewDidLoad SubscribeplanPage');

    }

    presentToast(msg) {

        let toast = this.toastCtrl.create({
            message: msg,
            duration: 1000,
            position: 'bottom',
            // dismissOnPageChange: true
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }

    openinput() {
        if (this.hidebutton == false) {
            this.hidebutton = true;
        } else {
            this.hidebutton = false;
        }

    }

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
    Couponcode() {
        // this.navCtrl.push('CouponcodePage')
        console.log("code", this.code);
        if (this.code == "" || this.code == null || this.code == "null") {
            this.api.presentToast("Enter CouponCode");

        } else {

            this.loading = this.loadingCtrl.create({content: "please wait..."});
            this.loading.present();


            this.api.couponcodeapply(this.code, this.finalPayableAmount).then((result) => {
                    this.loading.dismiss();
                    this.data = result;
                    console.log("data", result);
                    if (this.data.status == 200) {

                        this.Showcode = false;
                        this.finalcode = this.code;
                        this.finalPayableAmount = this.data.data[0].PAYABLE_AMOUNT;
                        this.DISCOUNT = this.data.data[0].DISCOUNT_AMOUNT;

                    } else {
                        this.api.ErrorApi(this.data.status, this.data.message);
                    }
                },
                (err) => {
                    console.log(err);
                    this.loading.dismiss();
                    this.api.presentToast("Enter Valid CouponCode")

                });
        }

    }

    delete(chip: Element) {
        chip.remove();
        this.Showcode = true;
        this.finalcode = "";
        this.finalPayableAmount = this.REALPRICE;
        this.finalPayableAmount2 = this.REALPRICE;
    }

    purchaseplan(itemKey, checked, index) {

        console.log("checkeddddd", checked);
        console.log("checkValue", itemKey);
        const foundAt = this.items.indexOf(itemKey) + 1;
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

        } else {
            console.log("checked false");
            console.log("messagelist", this.messages);
            console.log("xcgvcbvb", foundAt);
            console.log("remove index", index);
            if (this.messages.length > -1) {
                for (let j = 0; j < this.PlanIdArray.length; j++) {
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
            } else {
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

    }

    private GetWalletBalance() {

        this.api.GetWalletBalance(this.UID, "wallet_balance")

            .then(data => {

                this.apiData = data;

                console.log("response", this.apiData.data);

                this.WALLET = this.apiData.data;

                for (var j = 0; j < this.messages.length; j++) {

                    this.planamount += parseInt(this.messages[j]);
                    console.log("amount", this.planamount);

                }

                this.MaxAmount = this.planamount / 2;
                console.log("maxamount", this.planamount);

                if (this.WALLET > this.MaxAmount) {

                    this.debitAmount = this.MaxAmount;
                    this.finalPayableAmount = this.planamount - this.debitAmount;
                    this.finalPayableAmount2 = this.planamount - this.debitAmount;

                } else {

                    this.debitAmount = this.WALLET;
                    this.finalPayableAmount = this.planamount - this.debitAmount;
                    this.finalPayableAmount2 = this.planamount - this.debitAmount;

                }

            }).catch();

    }

    SubmitPlan() {

        this.api.submitPlan(this.MONTH, this.finalcode, this.finalPayableAmount2, this.SELECTEDID).then(data => {

            this.PlanPurchaseResponse = data;

            console.log("reponse", this.PlanPurchaseResponse);

            if (this.PlanPurchaseResponse.status == 200) {
                this.AMOUNT = 0;
                console.log("dnfvfcvc", this.PlanPurchaseResponse.data);

                this.MERCHANTID = this.PlanPurchaseResponse.data[0].PAYMENT_NO;
                this.PRODUCTION_INFO = this.PlanPurchaseResponse.data[0].MAIN_TYPE;
                this.hash_key = this.PlanPurchaseResponse.hash_key;
                this.key = this.PlanPurchaseResponse.key;
                this.salt = this.PlanPurchaseResponse.salt;
                this.hash = this.PlanPurchaseResponse.hash;
                this.pay_mode = this.PlanPurchaseResponse.pay_mode;
                if (this.finalPayableAmount == 0) {
                    this.VerifyPayment(this.MERCHANTID);
                } else {
                    this.proceedToPayment(this.MERCHANTID, this.finalPayableAmount, this.login_details.data.NAME, this.login_details.data.EMAIL, this.login_details.data.MOBILE, this.PRODUCTION_INFO, this.login_details.data.ID);
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

            } else {


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

    }

    // live of secureTrade
    // "key": "FDSWKNI60Q",
    // "salt": "DEDWVP6H0U",
    // "pay_mode": "production",

    // test
    // "key": "QD0RH1OSCV",
    // "salt": "XXFFHTVITH",
    // "pay_mode": "test",


    public proceedToPayment(MERCHANTID: any, AMOUNT: any, FIRSTNAME: any, EMAIL: any, PHONE: any, PRODUCTION_INFO: any, UID: any) {
        let self = this;

        let params = {
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
    }

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

    private VerifyPayment(MERCHANTID: any) {

        console.log("data", MERCHANTID);

        this.api.VerifyPayment(MERCHANTID)

            .then(data => {

                this.VerifyPaymentResponse = data;

                console.log("forgot", this.VerifyPaymentResponse.data);

                if (this.VerifyPaymentResponse.status == 200) {

                    this.getsymboldata()


                    this.presentToast("Your Payment Done Successfully");

                } else if (this.VerifyPaymentResponse.status == 404) {
                    this.api.presentToast(this.VerifyPaymentResponse.message);

                }
                // Commented by Dishant. Date: 26-02-2019 11:10:14 Comment: invalid key logout and go loginpage
                else if (this.VerifyPaymentResponse.status == 440) {
                    this.api.presentToast(this.VerifyPaymentResponse.message);
                    localStorage.removeItem("login_apidata2");
                    this.navCtrl.setRoot('SignloginPage');
                }
                // Commented by Dishant. Date: 25-02-2019 16:55:30 Comment: version error open play store
                else if (this.VerifyPaymentResponse.status == 304) {
                    this.api.presentToast(this.VerifyPaymentResponse.message);
                    window.open(this.api.playstorelink, '_system');
                }
                // Commented by Dishant. Date: 25-02-2019 16:56:28 Comment: os version error exit app
                else if (this.VerifyPaymentResponse.status == 530) {
                    this.api.presentToast(this.VerifyPaymentResponse.message);
                    this.api.Exitapp();

                }
                // Commented by Dishant. Date: 25-02-2019 16:57:27 Comment: other massages
                else {
                    this.api.presentToast(this.VerifyPaymentResponse.message);
                }


            }).catch();

    }

    private getsymboldata() {
        this.api.splashscreenapi().then(data => {
            // this.users = data;
            this.plandata = data;
            console.log("planDATA", this.plandata);
            if (this.plandata.status == '200') {

                localStorage.removeItem("NSECASH");
                localStorage.removeItem("NSEFO");
                localStorage.removeItem("MCX");

                localStorage.setItem("NSECASH", JSON.stringify(this.plandata.symbol.NSECASH));
                localStorage.setItem("NSEFO", JSON.stringify(this.plandata.symbol.NSEFO));
                localStorage.setItem("MCX", JSON.stringify(this.plandata.symbol.MCX));

                let datapass = {
                    ALGO_LIVECHART_PURCHSE: this.plandata.ALGO_LIVECHART_PURCHSE,
                    AUTO_ADVICERY_PURCHSE: this.plandata.AUTO_ADVICERY_PURCHSE,
                    LIVE_CHART_PURCHSE: this.plandata.LIVE_CHART_PURCHSE,
                    LIVE_RATE_PURCHSE: this.plandata.LIVE_RATE_PURCHSE,
                    MESSAGE_BOARD_PURCHSE: this.plandata.MESSAGE_BOARD_PURCHSE
                };

                localStorage.setItem("PURCHASE", JSON.stringify(datapass));

                this.api.ALGO_LIVECHART_PURCHSE = this.plandata.ALGO_LIVECHART_PURCHSE;
                this.api.AUTO_ADVICERY_PURCHSE = this.plandata.AUTO_ADVICERY_PURCHSE;
                this.api.LIVE_CHART_PURCHSE = this.plandata.LIVE_CHART_PURCHSE;
                this.api.LIVE_RATE_PURCHSE = this.plandata.LIVE_RATE_PURCHSE;
                this.api.MESSAGE_BOARD_PURCHSE = this.plandata.MESSAGE_BOARD_PURCHSE;

                if (this.api.LIVE_CHART_PURCHSE == false) {
                    this.navCtrl.setRoot('HomepagefreePage');
                } else {
                    this.navCtrl.setRoot('HomePage');
                }
            } else {
                this.api.ErrorApi(this.plandata.status, this.plandata.message);
            }
        }).catch();

    }

    private callapi(month) {
        this.loading = this.loadingCtrl.create({content: "please wait..."});
        this.loading.present();

        this.api.purchasePlan(month)

            .then(data => {
                // this.users = data;

                this.apiData = data;

                console.log("abc", this.apiData);

                if (this.apiData.status == 200) {

                    this.items = this.apiData.data;
                    this.Valid_code = this.apiData.active_coupon;
                    this.montharray = this.apiData.month;
                    console.log("items", this.items);
                    console.log("montharray", this.montharray);
                    if (this.SELECTEDID == '1') {
                        this.finalPayableAmount = this.items[0].TOTAL;
                        this.finalPayableAmount2 = this.items[0].TOTAL;
                    } else if (this.SELECTEDID == '2') {
                        this.finalPayableAmount = this.items[1].TOTAL;
                        this.finalPayableAmount2 = this.items[1].TOTAL;
                    } else if (this.SELECTEDID == '3') {
                        this.finalPayableAmount = this.items[2].TOTAL;
                        this.finalPayableAmount2 = this.items[2].TOTAL;
                    }

                    this.Showcode = true;
                    this.finalcode = "";
                    // for (var i of this.items) {
                    //
                    //     i.checked = false;
                    //
                    //     this.purchaseArray.push(i);
                    //
                    // }

                    // console.log("array_name", this.purchaseArray);
                    this.loading.dismiss();

                } else {
                    this.api.ErrorApi(this.apiData.status, this.apiData.message);
                }

            }).catch();

    }

    changeredio(id, total) {
        this.SELECTEDID = id;
        this.finalPayableAmount = total;
        this.finalPayableAmount2 = total;
        this.REALPRICE = total;
        this.Showcode = true;
        this.finalcode = "";
    }
}
