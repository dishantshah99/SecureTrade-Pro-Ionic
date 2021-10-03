import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
// import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser";

import {SubknowledgePage} from "../subknowledge/subknowledge";
@IonicPage()
@Component({
    selector: 'page-trading',
    templateUrl: 'trading.html',
})
export class TradingPage {

    src: string;
    title;

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

   webview(url,title){

       console.log("title123 : ",title);
       console.log("url",url);

        this.navCtrl.push('SubknowledgePage',{"url" : url,"title" : title});
   }


    ionViewDidLoad() {

        console.log('ionViewDidLoad TradingPage');

    }

}
