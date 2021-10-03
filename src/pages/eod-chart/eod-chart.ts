import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Charts2Page} from "../charts2/charts2";

/**
 * Generated class for the EodChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-eod-chart',
    templateUrl: 'eod-chart.html',
})
export class EodChartPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    EodchartSelected(item) {

        if (item == 1) {

            this.navCtrl.push('Charts2Page', item);

        } else if (item == 2) {

            this.navCtrl.push('Charts2Page', item)

        } else if (item == 3) {

            this.navCtrl.push('Charts2Page', item)
        }
    }

    // ionViewDidLoad() {
    //     console.log('ionViewDidLoad EodChartPage');
    // }

}
