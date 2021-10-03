import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {DomSanitizer} from "@angular/platform-browser";

/**
 * Generated class for the FundamentalReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-fundamental-report',
    templateUrl: 'fundamental-report.html',
})
export class FundamentalReportPage {

    title;
    url;
    loading;
    trustedVideoUrl;

    constructor(public navCtrl: NavController, public navParams: NavParams,private sanitizer: DomSanitizer,
                public loadingCtrl: LoadingController) {

        this.loading = this.loadingCtrl.create({content: "please wait..."});
        this.loading.present();

        this.title = navParams.data.title;
        this.url = navParams.data.url;

        console.log("url",this.url);
        console.log("this.title",this.title);
    }

    ionViewDidLoad() {
        this.trustedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.navParams.data.url);
        this.loading.dismiss();
        console.log('ionViewDidLoad FundamentalReportPage');
    }

}
