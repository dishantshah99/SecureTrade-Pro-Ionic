import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FuturerssPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-futurerss',
  templateUrl: 'futurerss.html',
})
export class FuturerssPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuturerssPage');
  }
    webview(url,title){

        console.log("title123 : ",title);
        console.log("url",url);

        this.navCtrl.push('SubknowledgePage',{"url" : url,"title" : title});
    }
}
