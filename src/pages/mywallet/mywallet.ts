import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {SocialSharing} from '@ionic-native/social-sharing';
import {SubscribeplanPage} from "../subscribeplan/subscribeplan";
import {Screenshot} from "@ionic-native/screenshot";

@IonicPage()
@Component({
    selector: 'page-mywallet',
    templateUrl: 'mywallet.html',
})
export class MywalletPage {

    apiData;
    items;
    amount;
    loading;
    login_details: any;
    REFERRER_USER;

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
                public navParams: NavParams, public  api: GlobalProvider, private socialSharing: SocialSharing, private screenshot: Screenshot) {

        this.loading = this.loadingCtrl.create({content: "please wait..."});
        this.loading.present();

        this.login_details = JSON.parse(localStorage.getItem("login_details"));
        console.log("logDetail", this.login_details);

        this.REFERRER_USER = this.login_details.user_data.REFCODE;
        console.log("REFERRER_USER", this.REFERRER_USER);

        this.api.walletListDisplay(this.login_details.user_data.ID)
            .then(data => {

                this.apiData = data;

                this.amount = this.apiData.data;

                console.log("balance", this.amount);

            }).catch();

        this.api.walletHistry(this.login_details.user_data.ID)
            .then(data => {

                this.apiData = data;

                this.items = this.apiData.data;


                console.log("walletList", this.items);

                this.loading.dismiss();
            }).catch();

    }

    ionViewDidLoad() {

        console.log('ionViewDidLoad MywalletPage');
    }


    gotoSubscribe() {

        this.navCtrl.push('SubscribeplanPage');
    }

    shareInfo() {

      /*  this.socialSharing.share("Istri-Westri " + "\n" + "Hello").then(() => {

        }).catch(() => {

        });*/

      //  this.socialSharing.share("Hello", null, null, null);


        this.socialSharing.share("Secure Trade \n Your Ref. Code is : " + this.REFERRER_USER, "Demo subject", "", "https://play.google.com/store/apps/details?id=&hl=en%22").then(() => {
            console.log("Share Contant", this.socialSharing);
        }).catch(() => {

        });

    }

}
