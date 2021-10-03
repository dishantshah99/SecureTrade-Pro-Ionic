import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, LoadingController, ModalController, Nav, NavController, NavParams, ToastController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {GlobalProvider} from "../../providers/global/global";
import {Device} from "@ionic-native/device";
// import {OtppopupPage} from "../otppopup/otppopup";
import {OtppopupPage2} from "../otppopup2/otppopup2";

@IonicPage()
@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class SignupPage {

    @ViewChild('name') uname;
    @ViewChild('mobile') mobile;
    @ViewChild('email') email;
    @ViewChild('city') city;
    @ViewChild('password') password;
    @ViewChild('cpassword') cpassword;
    @ViewChild('refcode') refcode;
    //  @ViewChild('type') type;
    @ViewChild(Nav) nav: Nav;


    loading;
    data;
    items;
    rootPage: any;
    apiData;
    type = "Trader";
    login_data;
    plandata;

    pwd;
    cpwd

    constructor(public navCtrl: NavController, public alertCtrl: AlertController,
                private device: Device, public navParams: NavParams,
                public loadingCtrl: LoadingController, public api: GlobalProvider,
                public toastCtrl: ToastController, public modal: ModalController) {

    }


    clickType(checked) {

        if (checked == "Trader") {

            this.type = "Trader";
            console.log("type", this.type);

        } else if (checked == "Investor") {

            this.type = "Investor";
            console.log("type123", this.type);
        }
    }

    signup() {
        this.pwd = this.password.value;
        this.cpwd = this.cpassword.value;

        console.log("pwd", this.pwd);
        console.log("cpwd", this.cpwd);
        // this.navCtrl.setRoot('HomePage')
        let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        let regExpforname = /^[a-zA-Z_ ]*$/;
        if (this.uname.value == "") {

            this.presentToast("Enter Name");
            console.log("Username", this.uname.value);

        } else if (!regExpforname.test(this.uname.value)) {

            this.presentToast("Spacial Characters Not allow in Name");

        } else if (this.email.value == "") {

            this.presentToast("Enter Email");
            console.log("Username", this.email.value);

        } else if (!regExp.test(this.email.value)) {

            this.presentToast("Invalid Email");

        } else if (this.city.value == "") {

            this.presentToast("Enter city");
            console.log("Username", this.city.value);

        } else if (!regExpforname.test(this.city.value)) {

            this.presentToast("Invalid City Name");

        } else if (this.password.value == "") {

            this.presentToast("Enter Password");
            console.log("Password", this.password.value);

        } else if (this.pwd != this.cpwd) {

            this.presentToast("Password and Confirm password not Match");
            console.log("cPassword", this.cpassword.value);

        } else {
            this.loading = this.loadingCtrl.create({content: "please wait..."});
            this.loading.present();
            console.log("TYPE", this.type);
            this.api.signup(this.uname.value, this.email.value, this.city.value, this.refcode.value, this.password.value).then((result) => {

                this.data = result;

                console.log("originaldata", this.data);
                this.loading.dismiss();
                if (this.data.status == 200) {

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
                    // window.location.reload();

                    // this.presentPrompt(this.data.data[0].ID, this.data.data[0].OTP);
                    // this.openModal(this.data.data[0].OTP, this.data.data[0].ID, this.mobile.value);


                } else if (this.data.status == 404) {
                    this.api.presentToast(this.data.message);

                }
                // Commented by Dishant. Date: 26-02-2019 11:10:14 Comment: invalid key logout and go loginpage
                else if (this.data.status == 440) {
                    this.api.presentToast(this.data.message);
                    localStorage.removeItem("login_data");
                    this.navCtrl.setRoot('LoginPage');
                }
                // Commented by Dishant. Date: 25-02-2019 16:55:30 Comment: version error open play store
                else if (this.data.status == 304) {
                    this.api.presentToast(this.data.message);
                    window.open(this.api.playstorelink, '_system');
                }
                // Commented by Dishant. Date: 25-02-2019 16:56:28 Comment: os version error exit app
                else if (this.data.status == 530) {
                    this.api.presentToast(this.data.message);
                    this.api.Exitapp();

                }
                // Commented by Dishant. Date: 25-02-2019 16:57:27 Comment: other massages
                else {
                    this.api.presentToast(this.data.message);
                }

            }, (err) => {
                this.loading.dismiss();
                console.log(err);
                this.presentToast(err);
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

    openModal(otp, userid, mobileno) {
        let modal = this.modal.create('OtppopupPage2', {otp: otp, userid: userid, mobileno: mobileno, username: this.uname.value, signupdata: this.data.data[0]}, {showBackdrop: true, enableBackdropDismiss: true});
        modal.present();
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

    /**
     * Created by Tapan.
     * Date: 21-05-2018 16:38:11
     * Comment: Popup in user fill the OTP and verify
     */

    presentPrompt(Id, OTP) {
        let alert = this.alertCtrl.create({
            title: 'Enter OTP',
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Enter OTP',
                    type: 'number',
                },

            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {

                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirm',
                    handler: data => {
                        console.log("log", data.username);
                        console.log("log123", this.data.data[0].OTP);
                        console.log("fropotp", OTP);

                        if (data.username != OTP) {
                            // logged in!

                            alert.present();
                            console.log("fail");
                            this.presentToast("Invalid OTP");

                        } else {


                            console.log("success");

                            this.api.verifyOTP(Id)

                                .then(data => {
                                    console.log(data);
                                    this.apiData = data;

                                    /**
                                     * Created by Tapan.
                                     * Date: 21-05-2018 16:37:36
                                     * Comment: To save data local storege after verify OTP
                                     */

                                    let login_detail = {
                                        username: this.uname.value,
                                        password: this.pwd.value,
                                        user_data: this.data.data[0],

                                    };


                                    console.log("logindata", this.data.data[0]);
                                    console.log("OTP", this.data.data[0].OTP);
                                    console.log("USERID", this.data.data[0].ID);
                                    console.log("type123123", this.data.data[0].TYPE);
                                    localStorage.setItem('login_details', JSON.stringify(login_detail));

                                    // this.GetList(this.SelectedId);
                                    console.log("otpverify", this.apiData.data);

                                    this.items = this.apiData.data;

                                    let rootPage = HomePage;
                                    this.navCtrl.setRoot(rootPage);


                                }).catch();

                        }
                    }
                }
            ]
        });
        alert.present();
    }

    dashboard() {

        this.navCtrl.push(HomePage);
    }


}