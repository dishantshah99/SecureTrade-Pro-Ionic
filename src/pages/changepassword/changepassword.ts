import {Component, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, Nav, NavController, NavParams, ToastController} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {HomePage} from "../home/home";

@IonicPage()
@Component({
    selector: 'page-changepassword',
    templateUrl: 'changepassword.html',
})

export class ChangepasswordPage {

    loading;
    data;
    items;
    apiData;
    userid;

    login_details: any;

    id;
    password;

    newpassword;
    confirmpasswword;
    oldpassord;


    @ViewChild(Nav) nav: Nav;
    @ViewChild('oldpassword') oldpswd;
    @ViewChild('newpassword') newpswd;
    @ViewChild('confirmpassword') cnfmpswd;

    OLDPASSWORD;
    NEWPASSWORD;
    CONFIRMPASSWORD;
    local_password;

    constructor(public navCtrl: NavController, public navParams: NavParams, public api: GlobalProvider, public toastCtrl: ToastController,
                public loadingCtrl: LoadingController) {

        this.login_details = JSON.parse(localStorage.getItem("login_details"));
        console.log("local_data", this.login_details);
        // console.log("after api Store Password", this.login_details.user_data.PASSWORD);

        this.local_password = localStorage.getItem("password")
        console.log("Local password", this.local_password);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ChangepasswordPage');
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


    changepassword() {

        this.login_details = JSON.parse(localStorage.getItem("login_details"));

        this.id = this.login_details.user_data.ID;
        this.password = this.login_details.user_data.PASSWORD;

        console.log("Store Password", this.password);
        this.OLDPASSWORD = this.oldpswd.value;
        this.NEWPASSWORD = this.newpswd.value;
        this.CONFIRMPASSWORD = this.cnfmpswd.value;

        console.log("old", this.OLDPASSWORD);
        console.log("new", this.NEWPASSWORD);
        console.log("confim", this.CONFIRMPASSWORD);


        if (this.OLDPASSWORD == '') {

            this.presentToast("Please Enter Old Password");

        } else if (this.OLDPASSWORD != this.local_password) {

            this.presentToast("Old password does not match");

        }
        else if (this.NEWPASSWORD == '') {

            this.presentToast("Please Enter New Password")

        } else if (this.CONFIRMPASSWORD == '') {

            this.presentToast("Please Enter Confirm Password")

        } else if (this.CONFIRMPASSWORD != this.NEWPASSWORD && this.NEWPASSWORD != this.CONFIRMPASSWORD) {

            this.presentToast("Confirm password does not match");

        } else if (this.local_password == this.NEWPASSWORD && this.NEWPASSWORD == this.local_password) {

            this.presentToast("Password does not Same");

        } else {

            this.loading = this.loadingCtrl.create({content: "please wait..."});
            this.loading.present();

            this.api.changePassword(this.id, this.CONFIRMPASSWORD, "changepass")

                .then(data => {

                    this.loading.dismiss();

                    this.apiData = data;

                    console.log("forgot", this.apiData.data);
                    console.log("lastpassword", this.CONFIRMPASSWORD);
                    console.log("id", this.id);

                    this.items = this.apiData.data;

                    if (this.apiData.status == 200) {

                        this.navCtrl.setRoot('HomePage');

                        localStorage.setItem("password", this.NEWPASSWORD);
                        this.presentToast("password Changed successfully");

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

                    console.log("after api Store Password", this.password);

                }).catch();


        }


    }

}
