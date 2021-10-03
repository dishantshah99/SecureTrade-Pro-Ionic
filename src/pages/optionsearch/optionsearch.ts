import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {OptionselectPage} from "../optionselect/optionselect";

/**
 * Generated class for the OptionsearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-optionsearch',
    templateUrl: 'optionsearch.html',
})
export class OptionsearchPage {
    OPTIONDATA;
    OPTIONDATANEW;
    OPTION_SEARCH_DATA;
    position;
    OPTION_VAL;

    constructor(public navCtrl: NavController, public navParams: NavParams, public api: GlobalProvider) {
        this.OPTIONDATA = api.symboldata.OPTION;
    }

    selectdata(i) {
        this.api.OPTIONSELECTEDDATA = i;
        this.navCtrl.push('OptionselectPage');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad OptionsearchPage');
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
                this.position = i;
                this.OPTION_VAL = 0;
            }
        }
        if (val && val.trim() !== '') {
            this.OPTION_SEARCH_DATA = this.OPTIONDATA.filter((item) => {
                return (item.SYMBOL.toLowerCase().indexOf(val.toLowerCase()) == 0);
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

    doInfinite(infiniteScroll, type) {
        console.log("position", this.position);
        console.log('Begin async operation');

        setTimeout(() => {
            this.position++;
            let count = (this.position + 30);
            for (let i = this.position; i < count; i++) {

                if (type = 'option') {
                    if (this.OPTION_VAL == 1) {
                        if (this.OPTIONDATA[i]) {
                            this.OPTIONDATANEW.push(this.OPTION_SEARCH_DATA[i]);
                            this.position = i;
                        }
                    } else {
                        if (this.OPTIONDATA[i]) {
                            this.OPTIONDATANEW.push(this.OPTIONDATA[i]);
                            this.position = i;
                        }
                    }

                }
            }
            infiniteScroll.complete();
            console.log("this.OPTIONDATANEW", this.OPTIONDATANEW);
            console.log('Async operation has ended');
        }, 500);
    }

}
