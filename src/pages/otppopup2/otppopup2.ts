import {Component, Renderer, ViewChild} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {CallNumber} from "@ionic-native/call-number";
import {LoginPage} from "../login/login";
import {GlobalProvider} from "../../providers/global/global";
import {HomePage} from "../home/home";

/**
 * Generated class for the OtppopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-otppopup2',
    templateUrl: 'otppopup2.html',
})
export class OtppopupPage2 {
    @ViewChild('otp') otp;
    mainotp;
    userid;
    mobileno;
    apiData;
    loading;
    items;
    username;
    signupdata;
    login_details;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public renderer: Renderer, private callNumber: CallNumber
        , public loadingCtrl: LoadingController, public api: GlobalProvider, public alertCtrl: AlertController, public toastCtrl: ToastController) {

        this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'custom-popup', true);
        console.log("OTP", viewCtrl.data.otp);
        this.mainotp = viewCtrl.data.otp;
        console.log("userid", viewCtrl.data.userid);
        this.userid = viewCtrl.data.userid;
        console.log("mobileno", viewCtrl.data.mobileno);
        this.mobileno = viewCtrl.data.mobileno;
        console.log("username", viewCtrl.data.username);
        this.username = viewCtrl.data.username;
        console.log("username", viewCtrl.data.signupdata);
        this.signupdata = viewCtrl.data.signupdata;
        this.loading = this.loadingCtrl.create({content: "please wait..."});
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad OtppopupPage');
    }

    opencall(number) {
        this.launchDialer(number)
    }

    launchDialer(n) {
        window.open("tel:" + n);
        this.callNumber.callNumber(n, true)
            .then(() => console.log('Launched dialer!'))

            .catch(() => console.log('Error launching dialer'));

        console.log("dialNo", this.callNumber);
    }

    resend() {
        this.loading.present();
        this.api.forgotPassword(this.mobileno)

            .then(data => {
                console.log(data);

                this.apiData = data;

                this.loading.dismiss();

                console.log("forgot", this.apiData.data);
                console.log("apidata123", this.apiData.status);

                if (this.apiData.status == 200) {
                    this.loading.dismiss();
                    console.log("status", "fggcjnbhjmnbh");
                    console.log("otp23445t65", this.apiData.data[0].OTP);
                    this.userid = this.apiData.data[0].ID;
                    this.mainotp = this.apiData.data[0].OTP;
                    //this.submitOTP(this.apiData.data[0].OTP, this.userid);

                } else {


                    this.presentToast(this.apiData.message);
                    //   prompt.present();
                    //  return false;

                }

            }).catch();
    }

    confirmbtn() {
        if (this.otp.value == '') {

            this.presentToast("Please Enter OTP");

            return false;

        } else if (this.otp.value != this.mainotp) {

            this.presentToast("Please Enter Valid OTP");

            return false;

        } else {

            this.api.verifyOTP(this.userid)

                .then(data => {
                    console.log(data);
                    this.apiData = data;


                    let login_detail = {
                        username: this.username,
                        user_data: this.signupdata,

                    };


                    localStorage.setItem('login_details', JSON.stringify(login_detail));
                    localStorage.setItem('password', this.signupdata.PASSWORD);
                    this.login_details = JSON.parse(localStorage.getItem("login_details"));

                    // this.GetList(this.SelectedId);
                    console.log("otpverify", this.apiData.data);

                    this.items = this.apiData.data;
                    // window.location.reload();
                    this.api.title = this.login_details.user_data.NAME;
                    this.api.Mobile = this.login_details.user_data.MOBILE;
                    this.api.type = this.login_details.user_data.REFCODE;
                    this.api.profileimage = this.login_details.user_data.PROFILEIMAGE;
                    console.log("Profile image", this.api.profileimage);
                    this.api.isLogin = true;
                    let rootPage = 'HomePage';
                    this.navCtrl.setRoot(rootPage);


                }).catch();

        }
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

    changpassword(userid) {

        let prompt = this.alertCtrl.create({
            title: 'Forgot Password',
            message: "",
            inputs: [
                {
                    name: 'NewPassword',
                    placeholder: 'New Password.',
                    type: 'password'
                },

                {
                    name: 'confirmpassword',
                    placeholder: 'Confirm Password.',
                    type: 'password'
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
                    text: 'Confirm',
                    handler: data => {

                        if (data.NewPassword == '') {

                            this.presentToast("Please Enter New Password");
                            prompt.present()
                            return false;

                        } else if (data.confirmpassword == '') {

                            this.presentToast("Please enter Confirm Password");
                            prompt.present();
                            return false;

                        } else if (data.confirmpassword != data.NewPassword) {

                            this.presentToast("Confirm Password does not match")
                            prompt.present();
                            return false;

                        } else {

                            this.api.changePassword(userid, data.confirmpassword, "changepass")

                                .then(data => {

                                    console.log(data);

                                    this.apiData = data;

                                    console.log("forgot", this.apiData.data);

                                    this.items = this.apiData.data;

                                    if (this.apiData.status == 200) {

                                        this.presentToast("Passward Changed Sucessfully ");
                                        let rootPage = 'LoginPage';

                                        this.navCtrl.setRoot(rootPage);

                                    } else {

                                        this.presentToast(this.apiData.status.message);
                                        //return false;
                                    }

                                }).catch();

                        }
                        console.log('Send OTP clicked');
                    }
                }
            ]
        });

        prompt.present();
    }
}
