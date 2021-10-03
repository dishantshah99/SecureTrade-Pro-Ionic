import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BrokerdetailsPage} from "../brokerdetails/brokerdetails";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {Device} from "@ionic-native/device";

/**
 * Generated class for the BrokerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-broker',
    templateUrl: 'broker.html',
})
export class BrokerPage {


    constructor(public navCtrl: NavController, public navParams: NavParams, public iappb: InAppBrowser, public device: Device) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BrokerPage');
    }

    webview(url, title) {
        console.log("title : ", title);
        console.log("url", url);

        // if (this.device.version >= '9') {
        window.open(url, '_system');
        // } else {
        //     const browser = this.iappb.create(url);
        //     browser.on('loadstop').subscribe(event => {
        //         browser.insertCSS({code: "body{color: red;"});
        //     });
        // }
        // browser.close();

        // this.navCtrl.push('SubknowledgePage', {"url": url, "title": title});
    }


}
