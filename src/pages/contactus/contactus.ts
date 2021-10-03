import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, LoadingController, Nav, NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import {CallNumber} from "@ionic-native/call-number";
import {GlobalProvider} from "../../providers/global/global";
import {EmailComposer} from "@ionic-native/email-composer";
import {SocialSharing} from "@ionic-native/social-sharing";
import {HomePage} from "../home/home";

/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-contactus',
    templateUrl: 'contactus.html',
})
export class ContactusPage {


    @ViewChild('query') querY;
    @ViewChild(Nav) nav: Nav;
    login_details: any;

    apiData;
    userid;

    loading;

    amount;
    REFERRER_USER;

    constructor(public navCtrl: NavController, public platform: Platform, public toastCtrl: ToastController,
                private emailComposer: EmailComposer, private socialSharing: SocialSharing,
                public navParams: NavParams, public alertCtrl: AlertController,
                public api: GlobalProvider, private callNumber: CallNumber, public loadingCtrl: LoadingController) {


        // this.login_details = JSON.parse(localStorage.getItem("login_details"));
        // console.log("logDetail", this.login_details);
        // this.REFERRER_USER = this.login_details.user_data.REFCODE;
        // console.log("REFERRER_USER", this.REFERRER_USER);

        // this.api.walletListDisplay(this.login_details.user_data.ID)
        //     .then(data => {
        //
        //         this.apiData = data;
        //
        //         console.log("Api list", this.apiData);
        //
        //         this.amount = this.apiData.data;
        //
        //         console.log("balance", this.amount);
        //
        //     }).catch();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ContactusPage');

    }


    showConfirm() {
        let prompt = this.alertCtrl.create({
            title: '',
            message: "Submit Query",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Query Here'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Submit',
                    handler: data => {

                        console.log('Submit  clicked');
                        console.log(JSON.stringify(data));
                        console.log("input", data.title);

                        this.login_details = JSON.parse(localStorage.getItem("login_details"));

                        console.log("userId", this.login_details.user_data.ID);

                        this.REFERRER_USER = this.login_details.user_data.REFCODE;

                        console.log("REFERRER_USER", this.REFERRER_USER);


                        if (data.title == '') {
                            this.presentToast("Please enter Query");
                            prompt.present();
                            return false;
                        } else {

                            this.loading = this.loadingCtrl.create({content: "please wait..."});
                            this.loading.present();

                            this.api.submitQuery(this.login_details.user_data.ID, data.title, "contact_add")

                                .then(data => {

                                    this.loading.dismiss();

                                    console.log("abc", data);

                                    this.apiData = data;

                                    if (this.apiData.status == 200) {

                                        this.navCtrl.setRoot('HomePage');

                                        this.presentToast(this.apiData.message);

                                    } else if (this.apiData.status == 404) {
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

                                    console.log("dfgdfgdfgdf", this.apiData);
                                    // let rootPage = ContactusPage;
                                    // this.nav.setRoot(rootPage);
                                    console.log("balance", this.amount);

                                }).catch();
                        }
                    }
                }
            ]
        });
        prompt.present();
    }

    openUrl(url) {

        window.open(url, '_system', 'location=yes');
    }


    launchDialer(n) {
        window.open("tel:" + n);
        this.callNumber.callNumber(n, true)
            .then(() => console.log('Launched dialer!'))

            .catch(() => console.log('Error launching dialer'));

        console.log("dialNo", this.callNumber);
    }

    presentToast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 1000,
            position: 'bottom',
            // dismissOnPageChange: true
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }

    sendEmail() {

        let email = {
            to: 'connect@securetrade.in',
        };
        this.emailComposer.open(email);
    }

    sendMail() {

        let email = {
            to: 'hasmukh18@gmail.com',
        };
        this.emailComposer.open(email);
    }

    shareInfo() {
        let data = "SecureTrade Pro + '\n + Email : connect@securetrade.in + \n + Mobile no : +91 9904500251 ";
        this.socialSharing.share(data, "", "", this.api.playstorelink).then(() => {

        }).catch(() => {

        });
    }


}
