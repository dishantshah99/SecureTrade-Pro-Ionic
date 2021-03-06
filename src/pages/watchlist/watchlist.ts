import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProductlistPage} from "../productlist/productlist";

/**
 * Generated class for the WatchlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-watchlist',
    templateUrl: 'watchlist.html',
})
export class WatchlistPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad WatchlistPage');
    }

    openproductlist() {
        this.navCtrl.push('ProductlistPage')
    }

    openedit() {
        this.navCtrl.push('ProductlistPage')
    }
}
