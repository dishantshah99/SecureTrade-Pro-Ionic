import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, PopoverController, ToastController} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {SocialSharing} from "@ionic-native/social-sharing";
import {PopoverPage} from "../popover/popover";
import {InAppBrowser} from "@ionic-native/in-app-browser";

/**
 * Generated class for the FundamentalCallsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-fundamental-calls',
    templateUrl: 'fundamental-calls.html',
})
export class FundamentalCallsPage {

    apiData;
    items;
    loading;
    popover;

    constructor(public navCtrl: NavController, public popoverCtrl: PopoverController,
                private socialSharing: SocialSharing,
                public loadingCtrl: LoadingController, public navParams: NavParams, public api: GlobalProvider,
                public toastctrl: ToastController, public in_app: InAppBrowser) {

        this.loading = this.loadingCtrl.create({content: "please wait..."});
        this.loading.present();

        this.api.fundamentalCall()
            .then(data => {
                // this.users = data;

                this.apiData = data;
                this.loading.dismiss();
                if (this.apiData.status == 200) {

                    this.items = this.apiData.data;


                }else if (this.apiData.status == 404) {
                    this.api.presentToast(this.apiData.message);
                }
                // Commented by Dishant. Date: 26-02-2019 11:10:14 Comment: invalid key logout and go loginpage
                else if (this.apiData.status == 440) {
                    this.api.presentToast(this.apiData.message);
                    localStorage.removeItem("login_data");
                    this.navCtrl.setRoot('SignloginPage');
                }
                // Commented by Dishant. Date: 25-02-2019 16:55:30 Comment: version error open play store
                else if (this.apiData.status == 304) {
                    this.api.presentToast(this.apiData.message);
                    window.open(this.api.playstorelink, '_system');
                }
                // Commented by Dishant. Date: 25-02-2019 16:56:28 Comment: os version error exit app
                else if (this.apiData.status == 530) {
                    this.api.presentToast(this.apiData.message);
                    this.api.Exitapp();

                }
                // Commented by Dishant. Date: 25-02-2019 16:57:27 Comment: other massages
                else {
                    this.api.presentToast(this.apiData.message);

                }


                //    this.checkReportLink();


            }).catch();

        // this.loading.dismiss();
    }

    openUrl(title, url) {
        window.open(url, '_system', 'location=yes');
        // this.in_app.create(url, '_system');
        // this.navCtrl.push("FundamentalReportPage", {"url": url, "title": title});
    }

    presentPopover(myEvent) {
        this.popover = this.popoverCtrl.create('PopoverPage', this.popover);
        this.popover.present({
            ev: myEvent
        });
    }

    shareInfo() {

        this.socialSharing.share("Secure Trade", "Demo subject", "", "https://play.google.com/store/apps/details?id=&hl=en%22").then(() => {

        }).catch(() => {

        });
    }

}
