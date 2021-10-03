import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {GlobalProvider} from "../../providers/global/global";

/**
 * Generated class for the SymbolpopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-symbolpopup',
    templateUrl: 'symbolpopup.html',
})
export class SymbolpopupPage {
    SELECTEDCASHDATA = [];
    title;
    constructor(public view: ViewController, public navCtrl: NavController, public navParams: NavParams,public platform: Platform,public api:GlobalProvider) {
        console.log("data", this.view.data.DATA);
        this.SELECTEDCASHDATA = this.view.data.DATA;
        this.title = this.SELECTEDCASHDATA[0].SYMBOL;
    }
    ionViewDidEnter() {
        this.platform.registerBackButtonAction((data) => {
            this.view.dismiss();

        });
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SymbolpopupPage');
    }

    closemodel2() {
        this.view.dismiss();
    }
}
