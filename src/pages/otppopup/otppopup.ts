import {Component, Renderer, ViewChild} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {CallNumber} from "@ionic-native/call-number";
import {LoginPage} from "../login/login";
import {GlobalProvider} from "../../providers/global/global";

/**
 * Generated class for the OtppopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otppopup',
  templateUrl: 'otppopup.html',
})
export class OtppopupPage {
    @ViewChild('otp') otp;
    mainotp;
    userid;
    mobileno;
    apiData;
    loading;
    items;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public renderer: Renderer,private callNumber: CallNumber
              ,public loadingCtrl: LoadingController,public api: GlobalProvider,public alertCtrl: AlertController,public toastCtrl: ToastController) {

      this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'custom-popup', true);
      console.log("OTP",viewCtrl.data.otp);
      this.mainotp = viewCtrl.data.otp;
      console.log("userid",viewCtrl.data.userid);
      this.userid = viewCtrl.data.userid;
      console.log("mobileno",viewCtrl.data.mobileno);
      this.mobileno = viewCtrl.data.mobileno;
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

                } else if (this.apiData.status == 404) {
                    this.api.presentToast(this.apiData.message);

                }
                // Commented by Dishant. Date: 26-02-2019 11:10:14 Comment: invalid key logout and go loginpage
                else if (this.apiData.status == 440) {
                    this.api.presentToast(this.apiData.message);
                    localStorage.removeItem("login_apiData");
                    this.navCtrl.setRoot('LoginPage');
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
            }).catch();
    }

    confirmbtn() {
        if (this.otp.value == '') {

            this.presentToast("Please Enter OTP");

            return false;

        }else if(this.otp.value != this.mainotp) {

            this.presentToast("Please Enter Valid OTP");

            return false;

        } else {
            this.viewCtrl.dismiss();
            this.changpassword(this.userid);

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
                            prompt.present();
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

                                    } else if (this.apiData.status == 404) {
                                        this.api.presentToast(this.apiData.message);

                                    }
                                    // Commented by Dishant. Date: 26-02-2019 11:10:14 Comment: invalid key logout and go loginpage
                                    else if (this.apiData.status == 440) {
                                        this.api.presentToast(this.apiData.message);
                                        localStorage.removeItem("login_apiData");
                                        this.navCtrl.setRoot('LoginPage');
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
