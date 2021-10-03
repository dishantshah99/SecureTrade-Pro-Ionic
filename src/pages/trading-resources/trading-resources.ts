import { Component } from '@angular/core';
import {Platform, NavController, NavParams, IonicPage} from 'ionic-angular';

import {SubknowledgePage} from "../subknowledge/subknowledge";
import {GlobalProvider} from "../../providers/global/global";

/**
 * Generated class for the TradingResourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-trading-resources',
  templateUrl: 'trading-resources.html',
})
export class TradingResourcesPage {

    src: string;
    title;

    constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams,public api:GlobalProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradingResourcesPage');
  }

    webviewTrade(url,title){

        console.log("title123 : ",title);
        console.log("url",url);
        this.api.Openurl(url)
       // window.open(url, '_system');
       //  this.navCtrl.push('SubknowledgePage',{"url" : url, "title":title});
    }

}
