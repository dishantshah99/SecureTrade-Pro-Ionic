import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {HomePage} from "../home/home";

/**
 * Generated class for the AdvisorysearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-advisorysearch',
    templateUrl: 'advisorysearch.html',
})
export class AdvisorysearchPage {
    CASHDATA;
    FUTUREDATA;
    OPTIONDATA;
    MCXDATA;
    type = 0;

    CASHDATANEW = [];
    FUTUREDATANEW = [];
    OPTIONDATANEW = [];
    MCXDATANEW = [];
    position;
    cash_position;
    future_position;
    option_position;
    mcx_position;
    selectedsymbal = [];
    CASHSELECTED = [];
    FUTURESELECTED = [];
    OPTIONSELECTED = [];
    MCXSELECTED = [];
    data;
    CASH = 'CASH';

    CASH_SEARCH_DATA;
    CASH_VAL = 0;
    FUTURE_SEARCH_DATA;
    FUTURE_VAL = 0;
    OPTION_SEARCH_DATA;
    OPTION_VAL = 0;
    MCX_SEARCH_DATA;
    MCX_VAL = 0;
    apiData;

    constructor(public navCtrl: NavController, public navParams: NavParams, public api: GlobalProvider) {
        this.type = navParams.data;
        console.log(this.type);
        this.initializeItems();

    }

    initializeItems() {
        if (localStorage.getItem("NSECASH") != undefined || localStorage.getItem("NSEFO") != undefined || localStorage.getItem("MCX") != undefined) {
            console.log("Enter Local Part");
            this.CASHDATA = JSON.parse(localStorage.getItem("NSECASH"));
            console.log("nsecashlist", this.CASHDATA);
            this.FUTUREDATA = JSON.parse(localStorage.getItem("NSEFO"));
            console.log("nsefolist", this.FUTUREDATA);
            this.MCXDATA = JSON.parse(localStorage.getItem("MCX"));
            console.log("MCX", this.MCXDATA);
            this.lastdataset();
        } else {
            this.api.splashscreenapi().then(data => {
                this.apiData = data;
                this.CASHDATA = this.apiData.symbol.NSECASH;
                this.FUTUREDATA = this.apiData.symbol.NSEFO;
                this.MCXDATA = this.apiData.symbol.MCX;
                console.log("Enter Live Part");
                console.log("nsecashlist", this.CASHDATA);
                console.log("nsefolist", this.FUTUREDATA);
                console.log("MCX", this.MCXDATA);
                this.lastdataset();
            });
        }
    }

    lastdataset() {
        this.CASHSELECTED = [];
        this.FUTURESELECTED = [];
        this.MCXSELECTED = [];

        console.log("selected array", this.api.AUTOADVISORYWATCHLISTDATA);
        if (this.type == 2) {

            if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.CASH.length > 0) {
                for (let i = 0; i < this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.CASH.length; i++) {
                    for (let j = 0; j < this.CASHDATA.length; j++) {
                        if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.CASH[i].SYMBOL == this.CASHDATA[j].COMPANY_NAME) {
                            this.CASHDATA[j].IS_SELECTED = true;
                            this.selectedsymbal.push(this.CASHDATA[j].COMPANY_NAME);
                            this.CASHSELECTED.push(this.CASHDATA[j].COMPANY_NAME);
                        }
                    }
                    let cash;
                    cash = this.CASHDATA;
                    var cashdata = this.sortByKey('asc', cash);
                    this.CASHDATA = cashdata;
                    console.log("cashdata", this.CASHDATA);
                }

            }
            if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.FUTURE.length > 0) {
                for (let i = 0; i < this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.FUTURE.length; i++) {
                    for (let j = 0; j < this.FUTUREDATA.length; j++) {
                        if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.FUTURE[i].SYMBOL == this.FUTUREDATA[j].COMPANY_NAME) {
                            this.FUTUREDATA[j].IS_SELECTED = true;
                            this.selectedsymbal.push(this.FUTUREDATA[j].COMPANY_NAME);
                            this.FUTURESELECTED.push(this.FUTUREDATA[j].COMPANY_NAME);
                        }
                    }
                    let FUTURE;
                    FUTURE = this.FUTUREDATA;
                    var futuredata = this.sortByKey('asc', FUTURE);
                    this.FUTUREDATA = futuredata;
                    console.log("FUTURE", this.FUTUREDATA);
                }
            }
            if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.MCX.length > 0) {
                for (let i = 0; i < this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.MCX.length; i++) {
                    for (let j = 0; j < this.MCXDATA.length; j++) {
                        if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.MCX[i].SYMBOL == this.MCXDATA[j].COMPANY_NAME) {
                            this.MCXDATA[j].IS_SELECTED = true;
                            this.selectedsymbal.push(this.MCXDATA[j].COMPANY_NAME);
                            this.MCXSELECTED.push(this.MCXDATA[j].COMPANY_NAME);
                        }
                    }
                    let MCX;
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
    }

    public sortByKey(sort, array) {
        console.log("SORT ARRAY", array);
        return array.sort(function (a, b) {
            return b.IS_SELECTED - a.IS_SELECTED;
        })
    }

    ionViewDidEnter() {
        console.log("enter refresh");
        for (let i = 0; i < 30; i++) {
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
    }

    initializeItems1(ev: any) {
        let val;
        console.log(ev);
        if (ev.data != null) {
            val = ev.target.value.trim();
        } else {
            val = "";
            for (let i = 0; i < 30; i++) {
                this.CASHDATANEW.push(this.CASHDATA[i]);
                this.cash_position = i;
                // this.CASH_VAL = 0;
            }
        }
        if (val && val.trim() !== '') {
            this.CASHDATANEW = this.CASHDATA.filter((item) => {
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
    }

    initializeItems2(ev: any) {
        let val;
        console.log(ev);
        if (ev.data != null) {
            val = ev.target.value.trim();
        } else {
            val = "";
            for (let i = 0; i < 30; i++) {
                this.FUTUREDATANEW.push(this.FUTUREDATA[i]);
                this.future_position = i;
                // this.FUTURE_VAL = 0;
            }
        }
        if (val && val.trim() !== '') {
            this.FUTUREDATANEW = this.FUTUREDATA.filter((item) => {
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
    }

    initializeItems4(ev: any) {
        let val;
        console.log(ev);
        if (ev.data != null) {
            val = ev.target.value.trim();
        } else {
            val = "";
            for (let i = 0; i < 30; i++) {
                this.MCXDATANEW.push(this.MCXDATA[i]);
                this.mcx_position = i;
                this.MCX_VAL = 0;
            }
        }
        if (val && val.trim() !== '') {
            this.MCXDATANEW = this.MCXDATA.filter((item) => {
                return (item.COMPANY_NAME.toLowerCase().indexOf(val.toLowerCase()) == 0 || item.CATEGORY.toLowerCase().indexOf(val.toLowerCase()) == 0);
            });

        }
    }

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

    doInfinite(infiniteScroll, type) {

        console.log('Begin async operation');

        setTimeout(() => {
            if (type = 'cash') {
                this.cash_position++;
                let count = (this.cash_position + 30);
                for (let i = this.cash_position; i < count; i++) {

                    // if (this.CASH_VAL == 1) {
                    //     if (this.CASHDATA[i]) {
                    //         this.CASHDATANEW.push(this.CASH_SEARCH_DATA[i]);
                    //         this.cash_position = i;
                    //     }
                    // } else {
                    if (this.CASHDATA[i]) {
                        this.CASHDATANEW.push(this.CASHDATA[i]);

                        this.cash_position = i;
                    }
                    // }
                }
            }


            if (type = 'future') {
                this.future_position++;
                let count = (this.future_position + 30);
                for (let i = this.future_position; i < count; i++) {

                    // if (this.FUTURE_VAL == 1) {
                    //     if (this.FUTUREDATA[i]) {
                    //         this.FUTUREDATANEW.push(this.FUTURE_SEARCH_DATA[i]);
                    //         this.future_position = i;
                    //     }
                    // }else {
                    if (this.FUTUREDATA[i]) {
                        this.FUTUREDATANEW.push(this.FUTUREDATA[i]);

                        this.future_position = i;
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
                this.mcx_position++;
                let count = (this.mcx_position + 30);
                for (let i = this.mcx_position; i < count; i++) {
                    // if (this.MCX_VAL == 1) {
                    //     if (this.MCXDATA[i] != undefined) {
                    //         this.MCXDATANEW.push(this.MCX_SEARCH_DATA[i]);
                    //         this.mcx_position = i;
                    //     }
                    // } else {
                    if (this.MCXDATA[i] != undefined) {
                        this.MCXDATANEW.push(this.MCXDATA[i]);
                        this.mcx_position = i;
                    }
                    // }
                }
            }
            infiniteScroll.complete();
            console.log("this.CASHDATANEW", this.CASHDATANEW);
            console.log("this.FUTUREDATANEW", this.FUTUREDATANEW);
            console.log("this.OPTIONDATANEW", this.OPTIONDATANEW);
            console.log("this.MCXDATANEW", this.MCXDATANEW);
            console.log('Async operation has ended');


        }, 500);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProductlistPage');
    }

    openalertpage() {
        console.log("selected data", this.selectedsymbal);
        if (this.selectedsymbal.length > 0) {
            if (this.type == 1) {
                console.log("cash data", this.CASHSELECTED);
                console.log("future data", this.FUTURESELECTED);
                console.log("OPTIONSELECTED data", this.OPTIONSELECTED);
                console.log("MCXSELECTED data", this.MCXSELECTED);
                this.advisorywatchlistaddapi()
            } else {
                console.log("cash data", this.CASHSELECTED);
                console.log("future data", this.FUTURESELECTED);
                console.log("OPTIONSELECTED data", this.OPTIONSELECTED);
                console.log("MCXSELECTED data", this.MCXSELECTED);
                this.advisorywatchlistupdateapi();
            }
        } else {
            this.api.presentToast("Select Symbol")
        }

    }

    changedata(SYMBOL, STATUS, TYPE) {
        console.log("selected SYMBOL", SYMBOL);
        console.log("selected STATUS", STATUS);
        console.log("selected TYPE", TYPE);

        if (STATUS == true) {
            this.selectedsymbal = [];
            if (TYPE == "Cash" || TYPE == "Equity") {
                // this.CASHSELECTED = [];
                for (let i = 0; i < this.CASHDATA.length; i++) {
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
                for (let i = 0; i < this.FUTUREDATA.length; i++) {
                    if (this.FUTUREDATA[i].COMPANY_NAME == SYMBOL) {
                        this.FUTUREDATA[i].IS_SELECTED = true;
                        this.selectedsymbal.push(this.FUTUREDATA[i].COMPANY_NAME);
                        this.FUTURESELECTED.push(this.FUTUREDATA[i].COMPANY_NAME);
                    }

                }
            }
            if (TYPE == "Comodities") {
                // this.FUTURESELECTED = [];
                for (let i = 0; i < this.MCXDATA.length; i++) {
                    if (this.MCXDATA[i].COMPANY_NAME == SYMBOL) {
                        this.MCXDATA[i].IS_SELECTED = true;
                        this.selectedsymbal.push(this.MCXDATA[i].COMPANY_NAME);
                        this.MCXSELECTED.push(this.MCXDATA[i].COMPANY_NAME);
                    }

                }
            }
        } else if (STATUS == false) {
            if (TYPE == "Cash") {
                for (let i = 0; i < this.CASHDATA.length; i++) {
                    // console.log("this.CASHDATA[i].SYMBOL", this.CASHDATA[i].SYMBOL + " = "+SYMBOL);
                    if (this.CASHDATA[i].COMPANY_NAME == SYMBOL) {
                        this.CASHDATA[i].IS_SELECTED = false;
                        for (let j = 0; j < this.selectedsymbal.length; j++) {
                            if (this.selectedsymbal[j] == this.CASHDATA[i].COMPANY_NAME) {
                                this.selectedsymbal.splice(j, 1);
                            }
                        }
                        for (let j = 0; j < this.CASHSELECTED.length; j++) {
                            if (this.CASHSELECTED[j] == this.CASHDATA[i].COMPANY_NAME) {
                                this.CASHSELECTED.splice(j, 1);
                            }
                        }

                    }
                }
            }
            if (TYPE == "Futures") {
                for (let i = 0; i < this.FUTUREDATA.length; i++) {
                    if (this.FUTUREDATA[i].COMPANY_NAME == SYMBOL) {
                        this.FUTUREDATA[i].IS_SELECTED = true;
                        for (let j = 0; j < this.selectedsymbal.length; j++) {
                            if (this.selectedsymbal[j] == this.FUTUREDATA[i].COMPANY_NAME) {
                                this.selectedsymbal.splice(j, 1);
                            }
                        }
                        for (let j = 0; j < this.FUTURESELECTED.length; j++) {
                            if (this.FUTURESELECTED[j] == this.FUTUREDATA[i].COMPANY_NAME) {
                                this.FUTURESELECTED.splice(j, 1);
                            }
                        }
                    }
                }
            }

            if (TYPE == "Comodities") {
                for (let i = 0; i < this.MCXDATA.length; i++) {
                    if (this.MCXDATA[i].COMPANY_NAME == SYMBOL) {
                        this.MCXDATA[i].IS_SELECTED = true;
                        for (let j = 0; j < this.selectedsymbal.length; j++) {
                            if (this.selectedsymbal[j] == this.MCXDATA[i].COMPANY_NAME) {
                                this.selectedsymbal.splice(j, 1);
                            }
                        }
                        for (let j = 0; j < this.MCXSELECTED.length; j++) {
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

    }

    selectdata(i) {
        if (this.type == 0) {
            this.api.SELECTEDDATA = i;
            this.navCtrl.pop();
        }
    }

    private advisorywatchlistaddapi() {
        this.api.Startloader();
        this.api.advisorywatchlistsave("1", this.api.AUTOADVISORYWATCHLISTNAME.title, this.CASHSELECTED, this.FUTURESELECTED, this.MCXSELECTED)

            .then(data => {

                console.log("watchlistsave data", data);
                this.data = data;
                this.api.Stoploader();

                if (this.data.status == 200) {

                    this.api.presentToast(this.data.message);
                    this.navCtrl.pop();
                    // window.location.reload();

                    // this.presentPrompt(this.data.data[0].ID, this.data.data[0].OTP);
                    // this.openModal(this.data.data[0].OTP, this.data.data[0].ID, this.mobile.value);


                } else {
                    this.api.ErrorApi(this.data.status, this.data.message);
                }


            }).catch();
    }

    private advisorywatchlistupdateapi() {
        this.api.Startloader();
        this.api.advisorywatchlistupdate("1", this.api.AUTOADVISORYWATCHLISTNAME, this.CASHSELECTED, this.FUTURESELECTED, this.api.AUTOADVISORYWATCHLISTID, this.OPTIONSELECTED, this.MCXSELECTED)

            .then(data => {

                console.log("watchlistupdateapi data", data);
                this.data = data;
                this.api.Stoploader();

                if (this.data.status == 200) {

                    this.api.presentToast(this.data.message);
                    this.navCtrl.pop()
                    // window.location.reload();

                    // this.presentPrompt(this.data.data[0].ID, this.data.data[0].OTP);
                    // this.openModal(this.data.data[0].OTP, this.data.data[0].ID, this.mobile.value);


                } else {
                    this.api.ErrorApi(this.data.status, this.data.message);
                }


            }).catch();
    }


    checkall(s, type) {
        console.log('CHECK', type);
        this.selectedsymbal = [];
        if (type.checked == true) {
            if (s == 'CASH') {
                this.CASHSELECTED = [];
                for (let i = 0; i < this.CASHDATA.length; i++) {
                    this.CASHDATA[i].IS_SELECTED = true;
                    this.selectedsymbal.push(this.CASHDATA[i].COMPANY_NAME);
                    this.CASHSELECTED.push(this.CASHDATA[i].COMPANY_NAME);
                }
            } else if (s == 'FUTURE') {
                this.FUTURESELECTED = [];
                for (let i = 0; i < this.FUTUREDATA.length; i++) {
                    this.FUTUREDATA[i].IS_SELECTED = true;
                    this.selectedsymbal.push(this.FUTUREDATA[i].COMPANY_NAME);
                    this.FUTURESELECTED.push(this.FUTUREDATA[i].COMPANY_NAME);
                }
            } else if (s == 'MCX') {
                this.MCXSELECTED = [];
                for (let i = 0; i < this.MCXDATA.length; i++) {
                    this.MCXDATA[i].IS_SELECTED = true;
                    this.selectedsymbal.push(this.MCXDATA[i].COMPANY_NAME);
                    this.MCXSELECTED.push(this.MCXDATA[i].COMPANY_NAME);
                }
            }
        } else {
            if (s == 'CASH') {
                this.CASHSELECTED = [];
                for (let i = 0; i < this.CASHDATA.length; i++) {
                    this.CASHDATA[i].IS_SELECTED = false;
                    this.selectedsymbal = [];
                    this.CASHSELECTED = [];
                }
            } else if (s == 'FUTURE') {
                this.FUTURESELECTED = [];
                for (let i = 0; i < this.FUTUREDATA.length; i++) {
                    this.FUTUREDATA[i].IS_SELECTED = false;
                    this.selectedsymbal = [];
                    this.FUTURESELECTED = [];
                }
            } else if (s == 'MCX') {
                this.MCXSELECTED = [];
                for (let i = 0; i < this.MCXDATA.length; i++) {
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
    }
}
