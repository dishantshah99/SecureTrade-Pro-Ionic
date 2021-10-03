import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the CashrssPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-cashrss',
    templateUrl: 'cashrss.html',
})
export class CashrssPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CashrssPage');
    }

    webview(url,title){

        console.log("title123 : ",title);
        console.log("url",url);

        this.navCtrl.push('SubknowledgePage',{"url" : url,"title" : title});
    }
}
