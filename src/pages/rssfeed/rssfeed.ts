import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {AdminMessagesPage} from "../admin-messages/admin-messages";

/**
 * Generated class for the RssfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-rssfeed',
    templateUrl: 'rssfeed.html',
})
export class RssfeedPage {
    apiData;
    news;

    constructor(public navCtrl: NavController, public navParams: NavParams, public api: GlobalProvider) {
        this.getapidata()
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RssfeedPage');
    }

    private getapidata() {
        this.api.Startloader();
        this.api.rssfeed("")
            .then(data => {
                this.api.Stoploader();
                this.apiData = data;
                if (this.apiData.status == 200) {
                    this.news = this.apiData.data;
                    console.log("news", this.news);
                } else {
                    this.api.ErrorApi(this.apiData.status, this.apiData.message);
                }
            }).catch();
    }

    opendetailspage(TYPE){
    this.navCtrl.push('AdminMessagesPage',TYPE)
    }
}
