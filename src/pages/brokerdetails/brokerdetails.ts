import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the BrokerdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-brokerdetails',
    templateUrl: 'brokerdetails.html',
})
export class BrokerdetailsPage {

    title;
    hide: boolean = false;
    type;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.type = navParams.data;
        if (navParams.data == 1) {
            this.title = 'Profit Mart'
        } else if (navParams.data == 2) {
            this.title = 'Upstox';
        } else if (navParams.data == 3) {
            this.title = '5 Paisa';
        } else if (navParams.data == 4) {
            this.title = 'Zerodha';
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BrokerdetailsPage');
    }

}
