import {Component, ViewChild} from '@angular/core';
import {ActionSheetController, AlertController, App, IonicPage, LoadingController, Modal, ModalController, ModalOptions, Navbar, NavController, Platform, ToastController, ViewController} from 'ionic-angular';
import {LiveChartsPage} from "../live-charts/live-charts";
import {GlobalProvider} from "../../providers/global/global";
import {AdvisoryServicesPage} from "../advisory-services/advisory-services";
import {FundamentalCallsPage} from "../fundamental-calls/fundamental-calls";

import {BlogPage} from "../blog/blog";
import {TradingResourcesPage} from "../trading-resources/trading-resources";
import {TradingPage} from "../trading/trading";
import {EodChartPage} from "../eod-chart/eod-chart";
import {SignloginPage} from "../signlogin/signlogin";
import {Device} from "@ionic-native/device";
import {TrialpagePage} from "../trialpage/trialpage";

import {KnowledgeZonePage} from "../knowledge-zone/knowledge-zone";
import {AdminMessagesPage} from "../admin-messages/admin-messages";
import {WatchlistPage} from "../watchlist/watchlist";
import {ProductlistPage} from "../productlist/productlist";
import {RgtsLiverateProvider} from "../../providers/rgts-liverate/rgts-liverate";
import {OptionsearchPage} from "../optionsearch/optionsearch";
import {SymbolpopupPage} from "../symbolpopup/symbolpopup";


@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    // users: any;
    splash = true;
    tabBarelElement: any;


    NotificationResponse;
    UID;
    login_details: any;
    liveratedata;
    NSECASHTYPE;
    FOTYPE;
    MCXTYPE;

    NSETEXT;
    FOTEXT;
    MCXTEXT;
    userchack;
    verifydata;
    currentDate;
    Localdate1;
    Localdate2;
    plandata;
    planlist;
    planname;
    @ViewChild(Navbar) navBar: Navbar;
    viewmode: boolean = false;
    count = 4;
    listshow: boolean = false;
    homepagedata;

    CASHDATA = [];
    FUTUREDATA = [];
    OPTIONDATA = [];
    MCXDATA = [];
    DDL_NAME;
    DDL_TYPE;
    DDL_ID;
    trueDataSubApi_data;
    LOGIN_WISE;
    WATCHLIST = "WATCHLIST";
    DEFAULT;
    PRIVATE;
    deletedata;

    CASH_URL;
    FUTURE_URL;
    OPTION_URL;
    MCX_URL;
    SELECTEDCASHDATA = [];
    hidedetails: boolean = false;
    showdata: boolean = false;
    deleteshow: boolean = false;
    constructor(public navCtrl: NavController, public globalApi: GlobalProvider, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, public modal: ModalController,
                public loadingCtrl: LoadingController, private device: Device, public platform: Platform, public viewCtrl: ViewController, public rgtsLiverateProvider: RgtsLiverateProvider,
                public toastCtrl: ToastController,public app: App) {
        // this.tabBarelElement = document.querySelector('.tabbar');

        this.login_details = JSON.parse(localStorage.getItem("login_data"));

    }

    changeview2(position) {
        if (this.deleteshow == false) {

        this.SELECTEDCASHDATA = [];
        this.SELECTEDCASHDATA.push(position);
        //this.visible = !this.visible;
        const myModalOption: ModalOptions = {
            enableBackdropDismiss: false,
            // enterAnimation: 'modal-alert-pop-in',
            // leaveAnimation: 'modal-alert-pop-out',
            // cssClass: 'my-modal' // <---- HERE the new attribute
        };

        const myModalData = {DATA: this.SELECTEDCASHDATA};

        const myModal: Modal = this.modal.create('SymbolpopupPage', myModalData, myModalOption);

        myModal.present();

        myModal.onDidDismiss((data) => {
            //I have dismissed
            console.log("I have dismissed", data);

        });

        myModal.onWillDismiss((data) => {
            //I am about to dismiss
            // console.log("I am about to dismiss", data);
        });

        } else {
            this.showConfirm(position);
        }

    }
    showConfirm(SYMBOL_DETAILS) {
        const confirm = this.alertCtrl.create({
            title: 'Delete Symbol?',
            message: 'Do you want to delete symbol?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        console.log('Agree clicked');
                        let data = {
                            "WATCHLISTID": this.DDL_ID,
                            "SYMBOL_TYPE": SYMBOL_DETAILS.SYMBOL_TYPE,
                            "SYMBOL": SYMBOL_DETAILS.SYMBOL,
                            "TOKEN": SYMBOL_DETAILS.TOKEN
                        };
                        this.globalApi.deletesymbal(data).then(data => {
                            this.deletedata = data;
                            if (this.deletedata.status == 200) {
                                this.gethomepagedata();
                            }

                        }).catch();
                    }
                }
            ]
        });
        confirm.present();
    }

    ionViewDidEnter() {
        this.platform.registerBackButtonAction((data) => {

            console.log('Back data', this.navCtrl.getActive(true));
            if (this.navCtrl.getActive(true).id == "HomePage") {
                if (this.hidedetails == true) {
                    this.hidedetails = false;
                } else {
                    this.globalApi.Exitpopapp();
                }
            }
        });
        this.gethomepagedata();
    }

    watchlistdeletedit() {
        if (this.DDL_TYPE == "PRIVATE") {
            if (this.deleteshow == false) {
                this.deleteshow = true;
            } else {
                this.deleteshow = false;
            }

        } else {
            this.globalApi.presentToast("Default Watchlist can't update")
        }
    }

    private gethomepagedata() {
        console.log("Call api");
        this.globalApi.homepageapi().then(data => {
            // this.users = data;
            this.homepagedata = data;
            console.log("homepagedata", this.homepagedata);
            if (this.homepagedata.status == '200') {
                clearInterval(this.globalApi.live_rate_invertval);
                this.showdata = true;
                this.globalApi.symboldata = this.homepagedata.symbol;
                console.log("Symboldata", this.globalApi.symboldata);

                this.globalApi.watch_list = this.homepagedata.watch_list;
                this.DEFAULT = this.globalApi.watch_list.DEFAULT;
                this.PRIVATE = this.globalApi.watch_list.PRIVATE;

                if (this.globalApi.NEWWATCHLISTADD != null) {
                    for (let i = 0; i < this.PRIVATE.length; i++) {
                        if (this.globalApi.NEWWATCHLISTADD == this.PRIVATE[i].NAME) {
                            this.globalApi.watch_postion = i;
                            this.globalApi.watch_type = 'PRIVATE';
                            localStorage.setItem('WATCHLIST_POSITION', JSON.stringify(this.globalApi.watch_postion));
                            localStorage.setItem('WATCHLIST_TYPE', JSON.stringify(this.globalApi.watch_type));
                            this.globalApi.NEWWATCHLISTADD = "";
                        }
                    }
                }


                let cash;
                let future;
                if (this.globalApi.watch_list.PRIVATE.length <= 0) {
                    this.globalApi.watch_postion = 0;
                    this.globalApi.watch_type = 'DEFAULT'
                }
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

                    console.log("this.globalApi.watch_postion url", this.globalApi.watch_postion);
                    console.log(" this.globalApi.watch_list.PRIVATE url", this.globalApi.watch_list.DEFAULT);
                    console.log("cash url", this.CASH_URL);
                    this.liverateapicall();
                } else {

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

                    console.log("this.globalApi.watch_postion url", this.globalApi.watch_postion);
                    console.log(" this.globalApi.watch_list.PRIVATE url", this.globalApi.watch_list.PRIVATE);
                    console.log("cash url", this.CASH_URL);
                    this.liverateapicall();
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
            } else {
                this.showdata = false;
                this.globalApi.ErrorApi(this.homepagedata.status, this.homepagedata.message);
            }
        }).catch();
    }

    opendata(p, type) {
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

        let cash;
        let future;

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
        } else {

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


    }

    public sortByKey(sort, array, key) {
        if (sort == 'asc') {
            return array.sort(function (a, b) {
                var x = a[key];
                var y = b[key];
                return ((x < y) ? -1 : ((x > y) ? 0 : 1));
            });
        } else {
            return array.sort(function (a, b) {
                var x = a[key];
                var y = b[key];
                return ((x < y) ? 1 : ((x > y) ? -1 : 0));
            });
        }
    }

    presentActionSheet() {
        const actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'A-Z',
                    handler: () => {
                        let cash;
                        let future;
                        let option;
                        let mcx;

                        if (this.globalApi.watch_type == "DEFAULT") {
                            cash = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].SYMBOL.CASH;
                            future = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].SYMBOL.FUTURE;
                            option = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].SYMBOL.OPTION;
                            mcx = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].SYMBOL.MCX;
                        } else {
                            cash = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.CASH;
                            future = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.FUTURE;
                            option = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.OPTION;
                            mcx = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.MCX;
                        }

                        var cash_sort = this.sortByKey('asc', cash, 'SYMBOL');
                        var future_sort = this.sortByKey('asc', future, 'SYMBOL');
                        var option_sort = this.sortByKey('asc', option, 'SYMBOL');
                        var mcx_sort = this.sortByKey('asc', mcx, 'SYMBOL');

                        this.CASHDATA = cash_sort;
                        this.FUTUREDATA = future_sort;
                        this.OPTIONDATA = option_sort;
                        this.MCXDATA = mcx_sort;
                        actionSheet.dismiss();
                    }
                }, {
                    text: 'Z-A',
                    handler: () => {
                        let cash;
                        let future;
                        let option;
                        let mcx;

                        if (this.globalApi.watch_type == "DEFAULT") {
                            cash = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].SYMBOL.CASH;
                            future = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].SYMBOL.FUTURE;
                            option = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].SYMBOL.OPTION;
                            mcx = this.globalApi.watch_list.DEFAULT[this.globalApi.watch_postion].SYMBOL.MCX;
                        } else {
                            cash = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.CASH;
                            future = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.FUTURE;
                            option = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.OPTION;
                            mcx = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion].SYMBOL.MCX;
                        }

                        var cash_sort = this.sortByKey('desc', cash, 'SYMBOL');
                        var future_sort = this.sortByKey('desc', future, 'SYMBOL');
                        var option_sort = this.sortByKey('desc', option, 'SYMBOL');
                        var mcx_sort = this.sortByKey('desc', mcx, 'SYMBOL');

                        this.CASHDATA = cash_sort;
                        this.FUTUREDATA = future_sort;
                        this.OPTIONDATA = option_sort;
                        this.MCXDATA = mcx_sort;

                        actionSheet.dismiss();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    changeview() {
        if (this.viewmode == true) {
            this.viewmode = false
        } else {
            this.viewmode = true
        }
    }

    // ionViewDidEnter() {
    //     // this.platform.registerBackButtonAction((data) => {
    //     //     // this.navCtrl.setRoot('TabsPage');
    //     //     this.platform.exitApp();
    //     // });
    // }

    itemSelected(item) {

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
    }

    goToEodchar(item) {

        if (item == 1) {

            this.navCtrl.push('EodChartPage');

        }
    }

    goToAdvisory() {
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
    }

    goToFundamental() {

        this.navCtrl.push('FundamentalCallsPage');
    }

    goToknowledge() {
        this.chacksubscribe("Knowledge Zone");
    }

    goToBlog() {

        this.navCtrl.push('BlogPage');

    }

    goToTradingres() {

        this.navCtrl.push('TradingResourcesPage');

    }

    goToTrading() {

        this.navCtrl.push('TradingPage');

    }


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
    deletewatchlist(id) {
        this.viewCtrl.dismiss();
        const prompt = this.alertCtrl.create({
            // title: 'Delete',
            message: "Are you sure want to delete Watchlist ?",
            buttons: [
                {
                    text: 'NO',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: data => {
                        console.log('Saved clicked');
                        this.deleteapi(id);
                        this.listshow = false;
                    }
                }
            ]
        });
        prompt.present();
    }

    private deleteapi(id) {
        this.globalApi.Startloader();
        this.globalApi.Watchlistdelete(id).then((result) => {
                this.deletedata = result;
                this.globalApi.Stoploader();
                if (this.deletedata.status == 200) {
                    this.globalApi.presentToast(this.deletedata.message);
                    this.gethomepagedata();
                } else {
                    this.globalApi.ErrorApi(this.deletedata.status, this.deletedata.message);
                }
            },
            (err) => {
                // console.log(err);

                // this.api.presentToast("Enter Mobile number", '')

            });
    }

    private chacksubscribe(name) {
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
    }

    public verifyversion() {
        this.globalApi.verifyVersion(this.device.uuid, this.login_details.user_data.ID)

            .then(data => {
                // this.users = data;
                this.verifydata = data;

                if (this.verifydata.status == 200) {
                    console.log("App CHECK_USER_LOGIN", this.verifydata.data[0].CHECK_USER_LOGIN);
                    this.userchack = this.verifydata.data[0].CHECK_USER_LOGIN;
                    if (this.userchack == 0) {

                        localStorage.removeItem("login_details");
                        this.login_details = JSON.parse(localStorage.getItem("login_details"));
                        console.log("logDetail_logout", this.login_details);
                        this.navCtrl.setRoot('SignloginPage');

                    } else {
                        this.navCtrl.push('LiveChartsPage');
                    }
                } else if (this.verifydata.status == 404) {
                    this.globalApi.presentToast(this.verifydata.message);
                }
                // Commented by Dishant. Date: 26-02-2019 11:10:14 Comment: invalid key logout and go loginpage
                else if (this.verifydata.status == 440) {
                    this.globalApi.presentToast(this.verifydata.message);
                    localStorage.removeItem("login_data");
                    this.navCtrl.setRoot('LoginPage');
                }
                // Commented by Dishant. Date: 25-02-2019 16:55:30 Comment: version error open play store
                else if (this.verifydata.status == 304) {
                    this.globalApi.presentToast(this.verifydata.message);
                    window.open(this.globalApi.playstorelink, '_system');
                }
                // Commented by Dishant. Date: 25-02-2019 16:56:28 Comment: os version error exit app
                else if (this.verifydata.status == 530) {
                    this.globalApi.presentToast(this.verifydata.message);
                    this.globalApi.Exitapp();

                }
                // Commented by Dishant. Date: 25-02-2019 16:57:27 Comment: other massages
                else {
                    this.globalApi.presentToast(this.verifydata.message);
                }

            }).catch();
    }

    openrssclick() {
        // this.navCtrl.push('AdminMessagesPage')
    }

    openwatchlistclick() {
        if (this.DDL_TYPE == "PRIVATE") {
            this.globalApi.WATCHLISTNAME = this.DDL_NAME;
            this.globalApi.WATCHLISTID = this.DDL_ID;
            this.globalApi.WATCHLISTDATA = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion];
            this.navCtrl.push('ProductlistPage', 3)
        } else {
            this.globalApi.presentToast("Default Watchlist can't update")
        }
    }

    openwatchlistclick2() {
        this.navCtrl.push('ProductlistPage')
    }

    openwatchlist() {
        if (this.listshow == true) {
            this.listshow = false;
        } else {
            this.listshow = true;
        }
        if (this.hidedetails == true) {
            this.hidedetails = false;
        }
    }

    showPrompt() {
        this.viewCtrl.dismiss();
        const prompt = this.alertCtrl.create({
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
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        console.log('Saved clicked', data);
                        this.globalApi.WATCHLISTNAME = data;
                        this.listshow = false;
                        this.navCtrl.push('ProductlistPage', 5)
                    }
                }
            ]
        });
        prompt.present();
    }


    commenclick() {
        if (this.listshow == true) {
            this.listshow = false;
        }
        if (this.hidedetails == true) {
            this.hidedetails = false;
        }
    }


    private liverateapicall() {
        this.globalApi.live_rate_invertval = setInterval(() => {
            if (this.CASH_URL != null) {
                this.liverate("cash", this.CASH_URL);
            }
            if (this.FUTURE_URL != null) {
                this.liverate("future", this.FUTURE_URL);
            }
            if (this.OPTION_URL != null) {
                this.liverate("option", this.OPTION_URL);
            }
            if (this.MCX_URL != null) {
                this.liverate("mcx", this.MCX_URL);
            }

        }, 1000);

        // this.liverate("cash", this.CASH_URL);
        // this.liverate("future", this.FUTURE_URL);
    }

    ionViewCanLeave() {

        clearInterval(this.globalApi.live_rate_invertval);
        console.log("ionViewCanLeave Call page leave");
    }

    ionViewWillLeave() {

        clearInterval(this.globalApi.live_rate_invertval);
        console.log("ionViewWillLeave page leave",);
    }

    ionViewDidLeave() {

        clearInterval(this.globalApi.live_rate_invertval);
        console.log("ionViewDidLeave page leave",);
    }

    private liverate(type, url) {

        let data;

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
            this.rgtsLiverateProvider.Liverateapi(url[l_i]).then((result) => {
                    this.liveratedata = result;
                    console.log("Live Rate", this.liveratedata);

                    let data_split = this.liveratedata.trim().split("\n");

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
                                } else if (data[j].CURRENT_RATE > CURRENT_RATE) {
                                    data[j].CHANGED_COLOR = 'bg-red';
                                } else {
                                    data[j].CHANGED_COLOR = '';
                                }
                                data[j].CURRENT_RATE = CURRENT_RATE;
                                data[j].DIFF_RATE = (parseFloat(data[j].CURRENT_RATE) - parseFloat(data[j].CLOSE_RATE)).toFixed(2);
                                data[j].DIFF_RATE_PER = ((parseFloat(data[j].DIFF_RATE) / parseFloat(data[j].CLOSE_RATE)) * 100).toFixed(2);
                            }
                        }
                    }

                    if (type == "cash") {
                        this.CASHDATA = data;
                    }
                    if (type == "future") {
                        this.FUTUREDATA = data;
                    }
                    if (type == "option") {
                        this.OPTIONDATA = data;
                    }
                    if (type == "mcx") {
                        this.MCXDATA = data;
                    }
                },
                (err) => {

                });
        }
    }

    openview() {

    }

    changeview3(position) {
        this.SELECTEDCASHDATA = [];
        this.SELECTEDCASHDATA.push(position);
        this.hidedetails = true;
        if (this.listshow == true) {
            this.listshow = false;
        }
    }

    hidedetailshow() {
        this.hidedetails = false;
    }

    openoptionpage() {
        this.globalApi.WATCHLISTNAME = this.DDL_NAME;
        this.globalApi.WATCHLISTID = this.DDL_ID;
        this.globalApi.WATCHLISTDATA = this.globalApi.watch_list.PRIVATE[this.globalApi.watch_postion];
        this.navCtrl.push('OptionsearchPage');
    }
}
