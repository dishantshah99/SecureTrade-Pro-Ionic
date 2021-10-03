import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavParams, Platform, ViewController} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {Device} from "@ionic-native/device";
import {Charts2Page} from "../charts2/charts2";

/**
 * Generated class for the DdlModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name: 'DdlModalPage',
    priority: 'high'
})
@Component({
    selector: 'page-ddl-modal',
    templateUrl: 'ddl-modal.html',
})
export class DdlModalPage {

    apiData;
    itemsInitial;
    items;
    itemsnew;
    title;
    loading;
    displayIcon: boolean = false;
    login_details;
    ALGO_CHART;
    SEARCHITEM;
    ITEM;
    show: boolean = false;
    plandata;
    showingicon: boolean = true;
    showingspinner: boolean = false;

    constructor(public view: ViewController, public navParams: NavParams, public globalApi: GlobalProvider,
                public loadingCtrl: LoadingController, private device: Device, public platform: Platform) {


        this.login_details = JSON.parse(localStorage.getItem("login_data"));
        console.log("logDetail", this.login_details);
        console.log("data", this.view.data.CHART_TYPE);
        this.title = this.view.data.CHART_TYPE.title;
        // this.loading = this.loadingCtrl.create({content: "please wait..."});
        // this.loading.present();
    }

    clicksync() {
        console.log("Enter if in click");
        this.showingicon = false;
        this.showingspinner = true;
        this.getsymboldata();
        setTimeout(x => {
            // this.showingicon = true
            this.showingicon = true;
            this.showingspinner = false;
        }, 5000);


    }

    ionViewDidEnter() {
        this.initializeItems();

        this.platform.registerBackButtonAction((data) => {
            this.view.dismiss();
        });
    }

    // ionViewWillEnter(){
    //     this.initializeItems();
    // }
    initializeItems() {
        if (this.view.data.CHART_TYPE.type == 3) {
            if (localStorage.getItem("ALGO_CHART") != undefined) {
                this.ALGO_CHART = JSON.parse(localStorage.getItem("ALGO_CHART"));
                console.log('Enter Algo Chart', this.ALGO_CHART);
                if (this.view.data.CHART_TYPE.number == 1) {

                    this.itemsInitial = this.ALGO_CHART.ALGO_CHART_NSECASH;
                    this.items = this.ALGO_CHART.ALGO_CHART_NSECASH;
                    // this.itemsInitial = this.apiData.data[0].NSECASH;
                    // this.items = this.apiData.data[0].NSECASH;

                    console.log("ALGO_CHART_NSECASH", this.itemsInitial);

                } else if (this.view.data.CHART_TYPE.number == 2) {

                    this.itemsInitial = this.ALGO_CHART.ALGO_CHART_NSEFO;
                    this.items = this.ALGO_CHART.ALGO_CHART_NSEFO;
                    // this.itemsInitial = this.apiData.data[0].NSECASH;
                    // this.items = this.apiData.data[0].NSECASH;

                    console.log("ALGO_CHART_NSEFO", this.itemsInitial);

                } else if (this.view.data.CHART_TYPE.number == 3) {
                    this.itemsInitial = this.ALGO_CHART.ALGO_CHART_MCX;
                    this.items = this.ALGO_CHART.ALGO_CHART_MCX;
                    // this.itemsInitial = this.apiData.data[0].NSECASH;
                    // this.items = this.apiData.data[0].NSECASH;

                    console.log("ALGO_CHART_MCX", this.itemsInitial);
                }
            }

        } else {
            let MYSEARCHARRAY = JSON.parse(localStorage.getItem('SEARCHDATA'));
            console.log('MYSEARCHARRAY', MYSEARCHARRAY);
            if (MYSEARCHARRAY != null) {
                this.SEARCHITEM = MYSEARCHARRAY;
                if (this.view.data.CHART_TYPE.selected == "LIVE") {
                    if (this.view.data.CHART_TYPE.number == 1) {
                        if (MYSEARCHARRAY.NSECASH.length > 0) {
                            this.ITEM = MYSEARCHARRAY.NSECASH;
                        }
                    }
                    if (this.view.data.CHART_TYPE.number == 2) {
                        if (MYSEARCHARRAY.NSEFUTURE.length > 0) {
                            this.ITEM = MYSEARCHARRAY.NSEFUTURE;
                        }
                    }
                    if (this.view.data.CHART_TYPE.number == 3) {
                        if (MYSEARCHARRAY.MCX.length > 0) {
                            this.ITEM = MYSEARCHARRAY.MCX;
                        }
                    }
                } else {
                    if (this.view.data.CHART_TYPE.number == 1) {
                        if (MYSEARCHARRAY.NSECASHEOD.length > 0) {
                            this.ITEM = MYSEARCHARRAY.NSECASHEOD;
                        }
                    }
                    if (this.view.data.CHART_TYPE.number == 2) {
                        if (MYSEARCHARRAY.NSEFUTUREEOD.length > 0) {
                            this.ITEM = MYSEARCHARRAY.NSEFUTUREEOD;
                        }
                    }
                    if (this.view.data.CHART_TYPE.number == 3) {
                        if (MYSEARCHARRAY.MCXEOD.length > 0) {
                            this.ITEM = MYSEARCHARRAY.MCXEOD;
                        }
                    }
                }
            }

            if (localStorage.getItem("NSECASH") != undefined || localStorage.getItem("NSEFO") != undefined || localStorage.getItem("MCX") != undefined) {
                // this.loading.dismiss();
                console.log("Enter Local Part");

                if (this.view.data.CHART_TYPE.number == 1) {

                    this.itemsInitial = JSON.parse(localStorage.getItem("NSECASH"));
                    this.items = JSON.parse(localStorage.getItem("NSECASH"));
                    // this.itemsInitial = this.apiData.data[0].NSECASH;
                    // this.items = this.apiData.data[0].NSECASH;

                    console.log("nsecashlist", this.itemsInitial);

                } else if (this.view.data.CHART_TYPE.number == 2) {

                    this.itemsInitial = JSON.parse(localStorage.getItem("NSEFO"));
                    this.items = JSON.parse(localStorage.getItem("NSEFO"));
                    // this.itemsInitial = this.apiData.data[0].NSEFO;
                    // this.items = this.apiData.data[0].NSEFO;
                    console.log("nsefolist", this.itemsInitial);

                } else if (this.view.data.CHART_TYPE.number == 3) {

                    this.itemsInitial = JSON.parse(localStorage.getItem("MCX"));
                    this.items = JSON.parse(localStorage.getItem("MCX"));
                    // this.itemsInitial = this.apiData.data[0].MCX;
                    // this.items = this.apiData.data[0].MCX;

                    console.log("MCX", this.itemsInitial);

                }
            } else {
                this.globalApi.splashscreenapi()
                    .then(data => {
                        // this.loading.dismiss();
                        if (this.view.data.CHART_TYPE.number == 1) {

                            this.apiData = data;
                            this.itemsInitial = this.apiData.symbol.NSECASH;
                            this.items = this.apiData.symbol.NSECASH;

                            // console.log("nsecashlist", this.items);

                        } else if (this.view.data.CHART_TYPE.number == 2) {

                            this.apiData = data;
                            this.itemsInitial = this.apiData.symbol.NSEFO;
                            this.items = this.apiData.symbol.NSEFO;

                            // console.log("nsefolist", this.items);

                        } else if (this.view.data.CHART_TYPE.number == 3) {

                            this.apiData = data;
                            this.itemsInitial = this.apiData.symbol.MCX;
                            this.items = this.apiData.symbol.MCX;


                        }

                    });
            }
        }
    }

    getItems(ev: any) {
        this.show = false;
        let val;
        console.log(ev);
        if (ev.data != null) {
            val = ev.target.value.trim();
        } else {
            val = "";
            this.items = this.itemsInitial;


        }
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.itemsInitial.filter((item) => {
                return (item.COMPANY_NAME.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

    selectedSymbol(itemSelected, type) {
        // console.log(itemSelected);
        this.closeModal(itemSelected, type);
    }

    closeModal(dataFromModal, type) {
        // console.log(dataFromModal);
        let data = {
            SELECTED: dataFromModal,
            TYPE: type
        };
        let NSECASH = [];
        let NSEFUTURE = [];
        let MCX = [];
        let NSECASHEOD = [];
        let NSEFUTUREEOD = [];
        let MCXEOD = [];

        let MYSEARCHARRAY = JSON.parse(localStorage.getItem('SEARCHDATA'));

        if (MYSEARCHARRAY != null) {
            NSECASH = MYSEARCHARRAY.NSECASH;
            NSEFUTURE = MYSEARCHARRAY.NSEFUTURE;
            MCX = MYSEARCHARRAY.MCX;
            NSECASHEOD = MYSEARCHARRAY.NSECASHEOD;
            NSEFUTUREEOD = MYSEARCHARRAY.NSEFUTUREEOD;
            MCXEOD = MYSEARCHARRAY.MCXEOD;
        }
        if (type.CHART_TYPE.selected == "LIVE") {
            if (type.CHART_TYPE.number == 1) {
                if (MYSEARCHARRAY != null) {
                    NSECASH = MYSEARCHARRAY.NSECASH;
                    if (NSECASH.length > 4) {
                        NSECASH.splice(0, 1);
                    }
                }
                // let addornot = NSECASH.indexOf(dataFromModal.COMPANY_NAME,NSECASH.length);
                // console.log("search add / not", addornot);
                NSECASH.push(dataFromModal)

            }
            if (type.CHART_TYPE.number == 2) {
                if (MYSEARCHARRAY != null) {
                    NSEFUTURE = MYSEARCHARRAY.NSEFUTURE;
                    if (NSEFUTURE.length > 4) {
                        NSEFUTURE.splice(0, 1);
                    }
                }
                NSEFUTURE.push(dataFromModal)
            }
            if (type.CHART_TYPE.number == 3) {
                if (MYSEARCHARRAY != null) {
                    MCX = MYSEARCHARRAY.MCX;
                    if (MCX.length > 4) {
                        MCX.splice(0, 1);
                    }
                }
                MCX.push(dataFromModal)
            }
        } else {
            if (type.CHART_TYPE.number == 1) {
                if (MYSEARCHARRAY != null) {
                    NSECASHEOD = MYSEARCHARRAY.NSECASHEOD;
                    if (NSECASHEOD.length > 4) {
                        NSECASHEOD.splice(0, 1);
                    }
                }
                NSECASHEOD.push(dataFromModal)
            }
            if (type.CHART_TYPE.number == 2) {
                if (MYSEARCHARRAY != null) {
                    NSEFUTUREEOD = MYSEARCHARRAY.NSEFUTUREEOD;
                    if (NSEFUTUREEOD.length > 4) {
                        NSEFUTUREEOD.splice(0, 1);
                    }
                }
                NSEFUTUREEOD.push(dataFromModal)
            }
            if (type.CHART_TYPE.number == 3) {
                if (MYSEARCHARRAY != null) {
                    MCXEOD = MYSEARCHARRAY.MCXEOD;
                    if (MCXEOD.length > 4) {
                        MCXEOD.splice(0, 1);
                    }
                }
                MCXEOD.push(dataFromModal)
            }
        }
        let array = {
            NSECASH: NSECASH,
            NSEFUTURE: NSEFUTURE,
            MCX: MCX,
            NSECASHEOD: NSECASHEOD,
            NSEFUTUREEOD: NSEFUTUREEOD,
            MCXEOD: MCXEOD
        };
        localStorage.setItem('SEARCHDATA', JSON.stringify(array));
        console.log("SEARCH DATA", JSON.parse(localStorage.getItem('SEARCHDATA')));
        this.view.dismiss(data);
    }


    showhistory() {
        this.show = true;
    }

    closemodel2() {
        this.view.dismiss();
    }

    private getsymboldata() {
        this.globalApi.splashscreenapi().then(data => {
            // this.users = data;
            this.plandata = data;
            console.log("planDATA", this.plandata);
            if (this.plandata.status == '200') {

                localStorage.removeItem("NSECASH");
                localStorage.removeItem("NSEFO");
                localStorage.removeItem("MCX");
                localStorage.removeItem("PURCHASE");
                localStorage.removeItem("ALGO_CHART");
                localStorage.removeItem("URLS");

                localStorage.setItem("NSECASH", JSON.stringify(this.plandata.symbol.NSECASH));
                localStorage.setItem("NSEFO", JSON.stringify(this.plandata.symbol.NSEFO));
                localStorage.setItem("MCX", JSON.stringify(this.plandata.symbol.MCX));
                localStorage.setItem("ALGO_CHART", JSON.stringify(this.plandata.algo_chart));
                localStorage.setItem("URLS", JSON.stringify(this.plandata.urls));

                let datapass = {
                    ALGO_LIVECHART_PURCHSE: this.plandata.ALGO_LIVECHART_PURCHSE,
                    AUTO_ADVICERY_PURCHSE: this.plandata.AUTO_ADVICERY_PURCHSE,
                    LIVE_CHART_PURCHSE: this.plandata.LIVE_CHART_PURCHSE,
                    LIVE_RATE_PURCHSE: this.plandata.LIVE_RATE_PURCHSE,
                    MESSAGE_BOARD_PURCHSE: this.plandata.MESSAGE_BOARD_PURCHSE
                };

                localStorage.setItem("PURCHASE", JSON.stringify(datapass));

                this.globalApi.ALGO_LIVECHART_PURCHSE = this.plandata.ALGO_LIVECHART_PURCHSE;
                this.globalApi.AUTO_ADVICERY_PURCHSE = this.plandata.AUTO_ADVICERY_PURCHSE;
                this.globalApi.LIVE_CHART_PURCHSE = this.plandata.LIVE_CHART_PURCHSE;
                this.globalApi.LIVE_RATE_PURCHSE = this.plandata.LIVE_RATE_PURCHSE;
                this.globalApi.MESSAGE_BOARD_PURCHSE = this.plandata.MESSAGE_BOARD_PURCHSE;
                this.initializeItems();
            } else {
                this.globalApi.ErrorApi(this.plandata.status, this.plandata.message);
            }
        }).catch();

    }
}
