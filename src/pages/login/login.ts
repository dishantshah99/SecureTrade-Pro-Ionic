import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import {VerifynumberPage} from "../verifynumber/verifynumber";
import {GlobalProvider} from "../../providers/global/global";


@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    @ViewChild('number') uNumber;

    data;
    rootPage: any;
    login_id;
    login_otp;
    loading;
    userdetail;
    numberset;

    constructor(public navCtrl: NavController, public navParams: NavParams, public api: GlobalProvider,
                public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toastCtrl: ToastController,
                public plt: Platform) {


    }

    ionViewDidLoad() {
        this.numberset = this.navParams.data;
        console.log(this.navParams.data);
        console.log('ionViewDidLoad LoginPage');
    }

    // Commented by Dishant. Date: 20-09-2018 16:00:11 Comment: Login api

    Loginbtn() {
        // this.navCtrl.push('VerifynumberPage');
        console.log("Mobile Number", this.uNumber.value);
        if (this.uNumber.value == "" || this.uNumber.value == null || this.uNumber.value == "null") {
            this.api.presentToast("Enter Mobile Number");

        } else if (this.uNumber.value.length < 10) {

            this.api.presentToast("Number Should not be less then 10 Digit");

        } else if (this.uNumber.value.length > 10) {

            this.api.presentToast("Number Should not be More then 10 Digit");

        } else {

            this.loading = this.loadingCtrl.create({content: "please wait..."});
            this.loading.present();

            if (this.uNumber.value.length != "") {
                this.api.login(this.uNumber.value).then((result) => {
                        this.loading.dismiss();
                        this.data = result;
                        console.log("login data", this.data);
                        if (this.data.status == 200) {

                            let data = {
                                data: this.data.data[0],
                                verify: 0
                            };
                            localStorage.setItem("login_data", JSON.stringify(data));
                            console.log("Local data get", JSON.parse(localStorage.getItem("login_data")));
                            // this.api.OTP = this.data.data[0].OTP;
                            this.navCtrl.push('VerifynumberPage');

                        } else {
                            this.api.ErrorApi(this.data.status, this.data.message);
                        }
                    },
                    (err) => {
                        console.log("err", err);
                        this.loading.dismiss();
                        this.api.presentToast("Enter Mobile number")

                    });

            }
        }

    }


    skipbtn() {

    }
}
