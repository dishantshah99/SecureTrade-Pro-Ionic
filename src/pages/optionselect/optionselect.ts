import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";

/**
 * Generated class for the OptionselectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-optionselect',
    templateUrl: 'optionselect.html',
})
export class OptionselectPage {
    CALL = 'CALL';
    data;
    data2;
    PUTDATA;
    PUTDATANEW;
    CALLDATA;
    CALLDATANEW;
    OPTIONSELECTED = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public api: GlobalProvider) {
        console.log("OPTION data", this.api.WATCHLISTDATA);
        this.OPTIONSELECTED = this.api.WATCHLISTDATA.SYMBOL.OPTION;
        this.getselecteddata();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad OptionselectPage');
    }

    private getselecteddata() {
        this.api.Startloader();
        this.api.oprionselecteddata(this.api.OPTIONSELECTEDDATA.SYMBOL, this.api.OPTIONSELECTEDDATA.SYMBOL_TYPE)

            .then(data => {

                console.log("oprionselecteddata data", data);
                this.data = data;
                this.api.Stoploader();

                if (this.data.status == 200) {

                    this.CALLDATA = this.data.symbol_data.CALL;
                    this.CALLDATANEW = this.data.symbol_data.CALL;
                    this.PUTDATA = this.data.symbol_data.PUT;
                    this.PUTDATANEW = this.data.symbol_data.PUT;

                } else {
                    this.api.ErrorApi(this.data.status, this.data.message);
                }


            }).catch();
    }

    changedata(SYMBOL, TOKEN, TYPE, STATUS) {
        console.log("selected SYMBOL", SYMBOL);
        console.log("selected STATUS", STATUS);
        console.log("selected TYPE", TYPE);
        console.log("selected TOKEN", TOKEN);

        if (STATUS == true) {
            for (let i = 0; i < this.CALLDATA.length; i++) {
                // console.log("this.CASHDATA[i].SYMBOL", this.CASHDATA[i].SYMBOL + " = "+SYMBOL);
                if (this.CALLDATA[i].TOKEN == TOKEN) {
                    this.CALLDATA[i].IS_SELECTED = true;
                    let data = {
                        "SYMBOL": this.CALLDATA[i].SYMBOL,
                        "FUT_OPT_DATE_MONTH": this.CALLDATA[i].FUT_OPT_DATE_MONTH,
                        "TOKEN": this.CALLDATA[i].TOKEN,
                        "STRIKE": this.CALLDATA[i].STRIKE,
                        "OPTION_TYPE": this.CALLDATA[i].OPTION_TYPE
                    };
                    this.OPTIONSELECTED.push(data);
                }
            }
            for (let i = 0; i < this.PUTDATA.length; i++) {
                if (this.PUTDATA[i].TOKEN == TOKEN) {
                    this.PUTDATA[i].IS_SELECTED = true;
                    let data = {
                        "SYMBOL": this.PUTDATA[i].SYMBOL,
                        "FUT_OPT_DATE_MONTH": this.PUTDATA[i].FUT_OPT_DATE_MONTH,
                        "TOKEN": this.PUTDATA[i].TOKEN,
                        "STRIKE": this.PUTDATA[i].STRIKE,
                        "OPTION_TYPE": this.PUTDATA[i].OPTION_TYPE
                    };
                    this.OPTIONSELECTED.push(data);
                }

            }
        } else if (STATUS == false) {

            for (let i = 0; i < this.CALLDATA.length; i++) {
                // console.log("this.CASHDATA[i].SYMBOL", this.CASHDATA[i].SYMBOL + " = "+SYMBOL);
                if (this.CALLDATA[i].TOKEN == TOKEN) {
                    this.CALLDATA[i].IS_SELECTED = false;
                    for (let j = 0; j < this.OPTIONSELECTED.length; j++) {
                        if (this.OPTIONSELECTED[j].TOKEN == this.CALLDATA[i].TOKEN) {
                            this.OPTIONSELECTED.splice(j, 1);
                        }
                    }
                }
                if (this.PUTDATA[i].TOKEN == TOKEN) {
                    this.PUTDATA[i].IS_SELECTED = false;
                    for (let j = 0; j < this.OPTIONSELECTED.length; j++) {
                        if (this.OPTIONSELECTED[j].TOKEN == this.PUTDATA[i].TOKEN) {
                            this.OPTIONSELECTED.splice(j, 1);
                        }
                    }
                }
            }
        }
        console.log("OPTIONSELECTED data", this.OPTIONSELECTED);
    }

    public watchlistupdateapi() {

        this.api.Startloader();
        this.api.watchlistupdate("1", this.api.WATCHLISTNAME, [], [], this.api.WATCHLISTID, this.OPTIONSELECTED, [])

            .then(data => {
                console.log("watchlistupdateapi data", data);
                this.data = data;
                this.api.Stoploader();

                if (this.data.status == 200) {

                    this.api.presentToast(this.data.message);
                    this.navCtrl.popToRoot()

                } else {
                    this.api.ErrorApi(this.data.status, this.data.message);
                }


            }).catch();
    }

    initializeItems1(ev: any) {
        let val;
        console.log(ev);
        if (ev.data != null) {
            val = ev.target.value.trim();
        } else {
            val = "";
            this.CALLDATANEW = this.CALLDATA;
        }
        if (val && val.trim() !== '') {
            this.CALLDATANEW = this.CALLDATA.filter((item) => {
                return (item.STRIKE.toLowerCase().indexOf(val.toLowerCase()) == 0);
            });
        }
    }

    initializeItems2(ev: any) {
        let val;
        console.log(ev);
        if (ev.data != null) {
            val = ev.target.value.trim();
        } else {
            val = "";
            this.PUTDATANEW = this.PUTDATA;
        }
        if (val && val.trim() !== '') {
            this.PUTDATANEW = this.PUTDATA.filter((item) => {
                return (item.STRIKE.toLowerCase().indexOf(val.toLowerCase()) == 0);
            });
        }
    }

}
