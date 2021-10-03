import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";


@IonicPage()
@Component({
    selector: 'page-productlist',
    templateUrl: 'productlist.html',
})
export class ProductlistPage {

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

    constructor(public navCtrl: NavController, public navParams: NavParams, public api: GlobalProvider) {
        if (navParams.data == {}) {
            this.type = 0;
            console.log(this.type);
        } else {
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
                    for (let i = 0; i < this.api.WATCHLISTDATA.SYMBOL.CASH.length; i++) {
                        for (let j = 0; j < this.CASHDATA.length; j++) {
                            if (this.api.WATCHLISTDATA.SYMBOL.CASH[i].TOKEN == this.CASHDATA[j].TOKEN) {
                                this.CASHDATA[j].IS_SELECTED = true;
                                let data = {
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
                        let cash;
                        cash = this.CASHDATA;
                        var cash_data = this.sortByKey('asc', cash);
                        this.CASHDATA = cash_data;
                        console.log("CASHDATA", this.CASHDATA);

                    }
                }
                if (this.api.WATCHLISTDATA.SYMBOL.FUTURE.length > 0) {
                    for (let i = 0; i < this.api.WATCHLISTDATA.SYMBOL.FUTURE.length; i++) {
                        for (let j = 0; j < this.FUTUREDATA.length; j++) {
                            if (this.api.WATCHLISTDATA.SYMBOL.FUTURE[i].TOKEN == this.FUTUREDATA[j].TOKEN) {
                                this.FUTUREDATA[j].IS_SELECTED = true;

                                let data = {
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
                        let future;
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
                    for (let i = 0; i < this.api.WATCHLISTDATA.SYMBOL.MCX.length; i++) {
                        for (let j = 0; j < this.MCXDATA.length; j++) {
                            if (this.api.WATCHLISTDATA.SYMBOL.MCX[i].TOKEN == this.MCXDATA[j].TOKEN) {
                                this.MCXDATA[j].IS_SELECTED = true;

                                let data = {
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
                        let mcx;
                        mcx = this.MCXDATA;
                        var mcxdata = this.sortByKey('asc', mcx);
                        this.MCXDATA = mcxdata;
                        console.log("MCXDATA", this.MCXDATA);
                    }
                }
            } else if (this.type == 4) {
                console.log("selected array", api.WATCHLISTDATA);
                if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.CASH.length > 0) {
                    for (let i = 0; i < this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.CASH.length; i++) {
                        for (let j = 0; j < this.CASHDATA.length; j++) {
                            if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.CASH[i].TOKEN == this.CASHDATA[j].TOKEN) {
                                this.CASHDATA[j].IS_SELECTED = true;
                                let data = {
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
                    for (let i = 0; i < this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.FUTURE.length; i++) {
                        for (let j = 0; j < this.FUTUREDATA.length; j++) {
                            if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.FUTURE[i].TOKEN == this.FUTUREDATA[j].TOKEN) {
                                this.FUTUREDATA[j].IS_SELECTED = true;

                                let data = {
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
                    for (let i = 0; i < this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.MCX.length; i++) {
                        for (let j = 0; j < this.MCXDATA.length; j++) {
                            if (this.api.AUTOADVISORYWATCHLISTDATA.SYMBOL.MCX[i].TOKEN == this.MCXDATA[j].TOKEN) {
                                this.MCXDATA[j].IS_SELECTED = true;

                                let data = {
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

        } else {
            for (let i = 0; i < this.CASHDATA.length; i++) {
                this.CASHDATA[i].IS_SELECTED = false;
            }
            for (let j = 0; j < this.FUTUREDATA.length; j++) {
                this.FUTUREDATA[j].IS_SELECTED = false;
            }
            for (let j = 0; j < this.MCXDATA.length; j++) {
                this.MCXDATA[j].IS_SELECTED = false;
            }
            // for (let z = 0; z < this.OPTIONDATA.length; z++) {
            //     this.OPTIONDATA[z].IS_SELECTED = false;
            // }
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
            this.FUTUREDATANEW.push(this.FUTUREDATA[i]);
            // this.OPTIONDATANEW.push(this.OPTIONDATA[i]);
            this.MCXDATANEW.push(this.MCXDATA[i]);
            this.cash_position = i;
            this.future_position = i;
            this.mcx_position = i;

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
                this.CASH_VAL = 0;
            }
        }
        if (val && val.trim() !== '') {
            this.CASH_SEARCH_DATA = this.CASHDATA.filter((item) => {
                return (item.SYMBOL.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.COMPANY.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });

            if (this.CASH_SEARCH_DATA.length > 0) {
                this.CASHDATANEW = [];
                for (let i = 0; i < 60; i++) {
                    if (this.CASH_SEARCH_DATA[i]) {
                        this.CASHDATANEW.push(this.CASH_SEARCH_DATA[i]);
                        this.CASH_VAL = 1;
                    }
                }
            }
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
                this.FUTURE_VAL = 0;
            }
        }
        if (val && val.trim() !== '') {
            this.FUTURE_SEARCH_DATA = this.FUTUREDATA.filter((item) => {
                return (item.SYMBOL.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.COMPANY.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });

            if (this.FUTURE_SEARCH_DATA.length > 0) {
                this.FUTUREDATANEW = [];
                for (let i = 0; i < 60; i++) {
                    if (this.FUTURE_SEARCH_DATA[i]) {
                        this.FUTUREDATANEW.push(this.FUTURE_SEARCH_DATA[i]);
                        this.FUTURE_VAL = 1;
                    }
                }
            }
        }
    }

    initializeItems3(ev: any) {
        let val;
        console.log(ev);
        if (ev.data != null) {
            val = ev.target.value.trim();

        } else {
            val = "";
            for (let i = 0; i < 30; i++) {
                this.OPTIONDATANEW.push(this.OPTIONDATA[i]);
                this.option_position = i;
                this.OPTION_VAL = 0;
            }
        }
        if (val && val.trim() !== '') {
            this.OPTION_SEARCH_DATA = this.OPTIONDATA.filter((item) => {
                return (item.SYMBOL.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.STRIKE.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.COMPANY.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.DISPLAY_OPTION_TYPE.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log("this.OPTION_SEARCH_DATA", this.OPTION_SEARCH_DATA);
            if (this.OPTION_SEARCH_DATA.length > 0) {
                this.OPTIONDATANEW = [];
                for (let i = 0; i < 60; i++) {
                    if (this.OPTION_SEARCH_DATA[i]) {
                        this.OPTIONDATANEW.push(this.OPTION_SEARCH_DATA[i]);
                        this.OPTION_VAL = 1;
                    }
                }
            }
            console.log("OPTIONDATANEW DATA", this.OPTIONDATANEW);
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
            this.MCX_SEARCH_DATA = this.MCXDATA.filter((item) => {
                return (item.SYMBOL.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.COMPANY.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });

            if (this.MCX_SEARCH_DATA.length > 0) {
                this.MCXDATANEW = [];
                for (let i = 0; i < 60; i++) {
                    if (this.MCX_SEARCH_DATA[i]) {
                        this.MCXDATANEW.push(this.MCX_SEARCH_DATA[i]);
                        this.MCX_VAL = 1;
                    }
                }
            }
        }
    }

    doInfinite(infiniteScroll, type) {
        console.log("position", this.position);
        console.log('Begin async operation');

        setTimeout(() => {


            if (type = 'cash') {
                this.cash_position++;
                let cash_count = (this.cash_position + 30);
                for (let i = this.cash_position; i < cash_count; i++) {
                    if (this.CASH_VAL == 1) {
                        if (this.CASH_SEARCH_DATA[i]) {
                            this.CASHDATANEW.push(this.CASH_SEARCH_DATA[i]);
                            this.cash_position = i;
                        }
                    } else {
                        if (this.CASHDATA[i]) {
                            this.CASHDATANEW.push(this.CASHDATA[i]);
                            this.cash_position = i;
                        }
                    }
                }
            }
            if (type = 'future') {
                this.future_position++;
                let future_count = (this.future_position + 30);
                for (let i = this.future_position; i < future_count; i++) {
                    if (this.FUTURE_VAL == 1) {
                        if (this.FUTURE_SEARCH_DATA[i]) {
                            this.FUTUREDATANEW.push(this.FUTURE_SEARCH_DATA[i]);
                            this.future_position = i;
                        }
                    } else {
                        if (this.FUTUREDATA[i]) {
                            this.FUTUREDATANEW.push(this.FUTUREDATA[i]);
                            this.future_position = i;
                        }
                    }
                }
            }
            if (type = 'option') {
                this.option_position++;
                let option_count = (this.option_position + 30);
                for (let i = this.option_position; i < option_count; i++) {
                    if (this.OPTION_VAL == 1) {
                        if (this.OPTION_SEARCH_DATA[i]) {
                            this.OPTIONDATANEW.push(this.OPTION_SEARCH_DATA[i]);
                            this.option_position = i;
                        }
                    } else {
                        if (this.OPTIONDATA[i]) {
                            this.OPTIONDATANEW.push(this.OPTIONDATA[i]);
                            this.option_position = i;
                        }
                    }
                }
            }
            if (type = 'mcx') {
                this.mcx_position++;
                let mcx_count = (this.mcx_position + 30);
                for (let i = this.mcx_position; i < mcx_count; i++) {
                    if (this.MCX_VAL == 1) {
                        if (this.MCX_SEARCH_DATA[i]) {
                            this.MCXDATANEW.push(this.MCX_SEARCH_DATA[i]);
                            this.mcx_position = i;
                        }
                    } else {
                        if (this.MCXDATA[i]) {
                            this.MCXDATANEW.push(this.MCXDATA[i]);
                            this.mcx_position = i;
                        }
                    }
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
        // this.selectedsymbal = [];

        console.log("type", this.type);
        if (this.type == 1 || this.type == 2 || this.type == 3 || this.type == 4 || this.type == 5) {
            console.log("selected data", this.selectedsymbal);
            if (this.selectedsymbal.length > 0) {
                if (this.type == 1) {
                    this.navCtrl.push('AlertaddPage', {data: this.selectedsymbal, type: 0});
                }
                else if (this.type == 2) {
                    console.log("cash data", this.CASHSELECTED);
                    console.log("future data", this.FUTURESELECTED);
                    console.log("OPTIONSELECTED data", this.OPTIONSELECTED);
                    console.log("MCXSELECTED data", this.MCXSELECTED);
                    this.watchlistaddapi()
                } else if (this.type == 3) {
                    console.log("cash data", this.CASHSELECTED);
                    console.log("future data", this.FUTURESELECTED);
                    console.log("OPTIONSELECTED data", this.OPTIONSELECTED);
                    console.log("MCXSELECTED data", this.MCXSELECTED);
                    this.watchlistupdateapi()
                } else if (this.type == 4) {
                    console.log("cash data", this.CASHSELECTED);
                    console.log("future data", this.FUTURESELECTED);
                    console.log("OPTIONSELECTED data", this.OPTIONSELECTED);
                    console.log("MCXSELECTED data", this.MCXSELECTED);

                } else if (this.type == 5) {
                    console.log("cash data", this.CASHSELECTED);
                    console.log("future data", this.FUTURESELECTED);
                    console.log("OPTIONSELECTED data", this.OPTIONSELECTED);
                    console.log("MCXSELECTED data", this.MCXSELECTED);
                    this.watchlistaddapi();
                }

            } else {
                this.api.presentToast("Select Symbol")
            }


        }


    }

    changedata(SYMBOL, TOKEN, TYPE, STATUS) {
        console.log("selected SYMBOL", SYMBOL);
        console.log("selected STATUS", STATUS);
        console.log("selected TYPE", TYPE);
        console.log("selected TOKEN", TOKEN);

        if (STATUS == true) {
            this.selectedsymbal = [];
            if (TYPE == "Cash") {
                // this.CASHSELECTED = [];
                for (let i = 0; i < this.CASHDATA.length; i++) {
                    // console.log("this.CASHDATA[i].SYMBOL", this.CASHDATA[i].SYMBOL + " = "+SYMBOL);
                    if (this.CASHDATA[i].TOKEN == TOKEN) {
                        this.CASHDATA[i].IS_SELECTED = true;
                        let data = {
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
                for (let i = 0; i < this.FUTUREDATA.length; i++) {
                    if (this.FUTUREDATA[i].TOKEN == TOKEN) {
                        this.FUTUREDATA[i].IS_SELECTED = true;
                        let data = {
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
                for (let i = 0; i < this.OPTIONDATA.length; i++) {
                    if (this.OPTIONDATA[i].TOKEN == TOKEN) {
                        this.OPTIONDATA[i].IS_SELECTED = true;
                        let data = {
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
                for (let i = 0; i < this.MCXDATA.length; i++) {
                    if (this.MCXDATA[i].TOKEN == TOKEN) {
                        this.MCXDATA[i].IS_SELECTED = true;
                        let data = {
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
        } else if (STATUS == false) {
            if (TYPE == "Cash") {
                for (let i = 0; i < this.CASHDATA.length; i++) {
                    // console.log("this.CASHDATA[i].SYMBOL", this.CASHDATA[i].SYMBOL + " = "+SYMBOL);
                    if (this.CASHDATA[i].TOKEN == TOKEN) {
                        this.CASHDATA[i].IS_SELECTED = false;
                        for (let j = 0; j < this.selectedsymbal.length; j++) {
                            if (this.selectedsymbal[j].SYMBOL == this.CASHDATA[i].SYMBOL) {
                                this.selectedsymbal.splice(j, 1);
                            }
                        }
                        for (let j = 0; j < this.CASHSELECTED.length; j++) {
                            if (this.CASHSELECTED[j].TOKEN == this.CASHDATA[i].TOKEN) {
                                this.CASHSELECTED.splice(j, 1);
                            }
                        }

                    }
                }
            }
            if (TYPE == "Future") {
                for (let i = 0; i < this.FUTUREDATA.length; i++) {
                    if (this.FUTUREDATA[i].TOKEN == TOKEN) {
                        this.FUTUREDATA[i].IS_SELECTED = true;
                        for (let j = 0; j < this.selectedsymbal.length; j++) {
                            if (this.selectedsymbal[j].TOKEN == this.FUTUREDATA[i].TOKEN) {
                                this.selectedsymbal.splice(j, 1);
                            }
                        }
                        for (let j = 0; j < this.FUTURESELECTED.length; j++) {
                            if (this.FUTURESELECTED[j].TOKEN == this.FUTUREDATA[i].TOKEN) {
                                this.FUTURESELECTED.splice(j, 1);
                            }
                        }
                    }
                }
            }
            if (TYPE == "Option") {
                for (let i = 0; i < this.OPTIONDATA.length; i++) {
                    if (this.OPTIONDATA[i].TOKEN == TOKEN) {
                        this.OPTIONDATA[i].IS_SELECTED = true;
                        for (let j = 0; j < this.selectedsymbal.length; j++) {
                            if (this.selectedsymbal[j].TOKEN == this.OPTIONDATA[i].TOKEN) {
                                this.selectedsymbal.splice(j, 1);
                            }
                        }
                        for (let j = 0; j < this.FUTURESELECTED.length; j++) {
                            if (this.OPTIONSELECTED[j].TOKEN == this.OPTIONSELECTED[i].TOKEN) {
                                this.OPTIONSELECTED.splice(j, 1);
                            }
                        }
                    }
                }
            }
            if (TYPE == "MCX") {
                for (let i = 0; i < this.MCXDATA.length; i++) {
                    if (this.MCXDATA[i].TOKEN == TOKEN) {
                        this.MCXDATA[i].IS_SELECTED = true;
                        for (let j = 0; j < this.selectedsymbal.length; j++) {
                            if (this.selectedsymbal[j].TOKEN == this.MCXDATA[i].TOKEN) {
                                this.selectedsymbal.splice(j, 1);
                            }
                        }
                        for (let j = 0; j < this.MCXSELECTED.length; j++) {
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

    }

    selectdata(i) {
        if (this.type == 0) {
            this.api.SELECTEDDATA = i;
            this.navCtrl.pop();
        }
    }

    private watchlistaddapi() {
        this.api.Startloader();
        this.api.watchlistsave("1", this.api.WATCHLISTNAME.title, this.CASHSELECTED, this.FUTURESELECTED, this.OPTIONSELECTED, this.MCXSELECTED)

            .then(data => {

                console.log("watchlistsave data", data);
                this.data = data;
                this.api.Stoploader();

                if (this.data.status == 200) {

                    this.api.presentToast(this.data.message);
                    this.api.NEWWATCHLISTADD = this.api.WATCHLISTNAME.title;
                    this.navCtrl.pop();
                    // window.location.reload();

                    // this.presentPrompt(this.data.data[0].ID, this.data.data[0].OTP);
                    // this.openModal(this.data.data[0].OTP, this.data.data[0].ID, this.mobile.value);


                } else {
                    this.api.ErrorApi(this.data.status, this.data.message);
                }


            }).catch();
    }

    private watchlistupdateapi() {
        this.api.Startloader();
        this.api.watchlistupdate("1", this.api.WATCHLISTNAME, this.CASHSELECTED, this.FUTURESELECTED, this.api.WATCHLISTID, this.OPTIONSELECTED, this.MCXSELECTED)

            .then(data => {

                console.log("watchlistupdateapi data", data);
                this.data = data;
                this.api.Stoploader();

                if (this.data.status == 200) {

                    this.api.presentToast(this.data.message);
                    this.navCtrl.popToRoot()
                    // window.location.reload();

                    // this.presentPrompt(this.data.data[0].ID, this.data.data[0].OTP);
                    // this.openModal(this.data.data[0].OTP, this.data.data[0].ID, this.mobile.value);


                } else {
                    this.api.ErrorApi(this.data.status, this.data.message);
                }


            }).catch();
    }

}
