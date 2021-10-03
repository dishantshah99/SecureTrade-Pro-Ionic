import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@IonicPage()
@Component({
  selector: 'page-subknowledge',
  templateUrl: 'subknowledge.html',
})
export class SubknowledgePage {

    trustedVideoUrl: SafeResourceUrl;
    title;
    loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,private sanitizer: DomSanitizer,
              public loadingCtrl: LoadingController) {

      this.loading = this.loadingCtrl.create({content: "please wait..."});
      this.loading.present();


      this.title = this.navParams.data.title;
      console.log("name123123",this.title);

  }

    ionViewDidLoad() {

        this.trustedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.navParams.data.url);
        this.loading.dismiss();
        // this.title = this.navParams.data;
        // console.log("log",this.title);
    }

}
