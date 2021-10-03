import {Component, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, Platform, ToastController, ViewController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {GlobalProvider} from "../../providers/global/global";
import {SignupPage} from "../signup/signup";
import {HomePage} from "../home/home";
import {HomepagefreePage} from "../homepagefree/homepagefree";
import {CallNumber} from "@ionic-native/call-number";


@IonicPage()
@Component({
    selector: 'page-verifynumber',
    templateUrl: 'verifynumber.html',
})
export class VerifynumberPage {
    login_data;
    @ViewChild('otp') otpno;

    loginid: any;

    data: any;
    redata;
    loading: any;
    number: any;
    title: "Verify OTP";

    first_name: any;
    otp_details;
    plandata;

    constructor(public navCtrl: NavController, public navParams: NavParams, public api: GlobalProvider,
                public viewCtrl: ViewController, public loadingCtrl: LoadingController, private callNumber: CallNumber,
                public toastCtrl: ToastController,
                public plt: Platform) {

        this.login_data = JSON.parse(localStorage.getItem("login_data"));
        console.log("Local Data", this.login_data);
        this.number = this.login_data.data.MOBILE;
    }

    launchDialer(n) {
        window.open("tel:" + n);
        this.callNumber.callNumber(n, true)
            .then(() => console.log('Launched dialer!'))

            .catch(() => console.log('Error launching dialer'));

        console.log("dialNo", this.callNumber);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad VerifynumberPage');
    }

    registration() {
        // this.navCtrl.push('SignupPage')
        if (this.otpno.value == '') {

            this.api.presentToast("Enter OTP");

        } else {

            this.loading = this.loadingCtrl.create({content: "please wait..."});

            this.api.verifyOTP(this.otpno.value).then((result) => {

                    this.data = result;
                    console.log("JSON ",);
                    this.loading.dismiss();
                    if (this.data.status == 200) {


                        if (this.data.data[0].NAME == null) {
                            let data = {
                                data: this.data.data[0],
                                verify: 0
                            };
                            localStorage.setItem('login_data', JSON.stringify(data));
                            this.login_data = JSON.parse(localStorage.getItem("login_data"));
                            console.log("Local Data", this.login_data);
                            this.navCtrl.setRoot('SignupPage');
                        } else {
                            let data = {
                                data: this.data.data[0],
                                verify: 1
                            };
                            localStorage.setItem('login_data', JSON.stringify(data));
                            this.login_data = JSON.parse(localStorage.getItem("login_data"));
                            console.log("Local Data", this.login_data);

                            this.api.title = this.login_data.data.NAME;
                            this.api.Mobile = this.login_data.data.MOBILE;
                            this.api.type = this.login_data.data.REFCODE;
                            this.api.profileimage = this.login_data.data.PROFILEIMAGE;
                            this.api.isLogin = true;
                            this.getsymboldata();

                            // this.navCtrl.setRoot('HomePage');
                        }
                        this.api.presentToast(this.data.message);

                        // this.api.UID = this.login_data.data.ID;
                        // this.api.DEPARTMENT = this.login_data.data.DEPARTMENT;

                    } else {
                        this.api.ErrorApi(this.data.status, this.data.message);
                    }
                },
                (err) => {
                    // console.log(err);
                    this.loading.dismiss();

                });


        }

    }

    private getsymboldata() {
        this.api.splashscreenapi().then(data => {
            // this.users = data;
            this.plandata = data;
            console.log("planDATA", this.plandata);
            if (this.plandata.status == '200') {

                localStorage.removeItem("NSECASH");
                localStorage.removeItem("NSEFO");
                localStorage.removeItem("MCX");

                localStorage.setItem("NSECASH", JSON.stringify(this.plandata.symbol.NSECASH));
                localStorage.setItem("NSEFO", JSON.stringify(this.plandata.symbol.NSEFO));
                localStorage.setItem("MCX", JSON.stringify(this.plandata.symbol.MCX));

                let datapass = {
                    ALGO_LIVECHART_PURCHSE: this.plandata.ALGO_LIVECHART_PURCHSE,
                    AUTO_ADVICERY_PURCHSE: this.plandata.AUTO_ADVICERY_PURCHSE,
                    LIVE_CHART_PURCHSE: this.plandata.LIVE_CHART_PURCHSE,
                    LIVE_RATE_PURCHSE: this.plandata.LIVE_RATE_PURCHSE,
                    MESSAGE_BOARD_PURCHSE: this.plandata.MESSAGE_BOARD_PURCHSE
                };

                localStorage.setItem("PURCHASE", JSON.stringify(datapass));

                this.api.ALGO_LIVECHART_PURCHSE = this.plandata.ALGO_LIVECHART_PURCHSE;
                this.api.AUTO_ADVICERY_PURCHSE = this.plandata.AUTO_ADVICERY_PURCHSE;
                this.api.LIVE_CHART_PURCHSE = this.plandata.LIVE_CHART_PURCHSE;
                this.api.LIVE_RATE_PURCHSE = this.plandata.LIVE_RATE_PURCHSE;
                this.api.MESSAGE_BOARD_PURCHSE = this.plandata.MESSAGE_BOARD_PURCHSE;

                if (this.api.LIVE_CHART_PURCHSE == false) {
                    this.navCtrl.setRoot('HomepagefreePage');
                } else {
                    this.navCtrl.setRoot('HomePage');
                }
            } else {
                this.api.ErrorApi(this.plandata.status, this.plandata.message);
            }
        }).catch();

    }

    resend() {
        this.loading = this.loadingCtrl.create({content: "please wait..."});
        this.loading.present();
        console.log("number", this.number);
        if (this.number != "") {
            this.api.Resendotpapi().then((result) => {

                this.redata = result;
                this.loading.dismiss();

                if (this.redata.status == 200) {
                    this.api.presentToast(this.redata.message);
                    // this.api.OTP = this.redata.otp
                } else {
                    this.api.ErrorApi(this.redata.status, this.redata.message);
                }

            }, (err) => {
                console.log(err);
                // this.api.presentToast(err);
            });
        }
    }

    editnumber() {
        this.navCtrl.push('LoginPage', this.number);
    }
}
