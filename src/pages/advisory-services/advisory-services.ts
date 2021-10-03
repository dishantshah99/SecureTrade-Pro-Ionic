import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {SubAdvisoryPage} from "../sub-advisory/sub-advisory";
import {GlobalProvider} from "../../providers/global/global";
// import {ChartsPage} from "../charts/charts";
import {SignloginPage} from "../signlogin/signlogin";
import {Device} from "@ionic-native/device";

// import {LiveChartsPage} from "../live-charts/live-charts";

/**
 * Generated class for the AdvisoryServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-advisory-services',
    templateUrl: 'advisory-services.html',
})
export class AdvisoryServicesPage {

    apiData;
    items;
    loading;
    login_details;
    verifydata;
    userchack;
    currentDate;
    Localdate;

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public navParams: NavParams, public api: GlobalProvider, private device: Device) {

        this.loading = this.loadingCtrl.create({content: "please wait..."});
        //  this.loading.present();
        this.login_details = JSON.parse(localStorage.getItem("login_data"));


        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Please Wait...'
            });
            this.loading.present();
        }


        this.api.advisoryCategory()
            .then(data => {
                // this.users = data;
                this.apiData = data;
                this.loading.dismiss();
                if (this.apiData.status == 200) {

                    this.items = this.apiData.data;
                    console.log("advisory123", this.items);
                }
                else if (this.apiData.status == 404) {
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


            }).catch();

    }

    goToSubAdvisery(item) {

        this.Localdate = localStorage.getItem("advisoryTodaydate");
        this.currentDate = new Date().toLocaleDateString();
        console.log("currentDate", this.currentDate);
        if (this.currentDate == this.Localdate) {

            this.navCtrl.push('SubAdvisoryPage', item);

        } else {
            localStorage.setItem('advisoryTodaydate', this.currentDate);

            this.api.verifyVersion(this.device.uuid, this.login_details.user_data.ID)

                .then(data => {
                    // this.users = data;
                    this.verifydata = data;

                    if (this.verifydata.status == 200) {

                        console.log("App CHECK_USER_LOGIN", this.verifydata.data[0].CHECK_USER_LOGIN);
                        this.userchack = this.verifydata.data[0].CHECK_USER_LOGIN;
                        if (this.userchack == 0) {

                            localStorage.removeItem("login_details");
                            this.login_details = JSON.parse(localStorage.getItem("login_data"));
                            console.log("logDetail_logout", this.login_details);
                            this.navCtrl.setRoot('SignloginPage');

                        } else {
                            console.log("dsrewfdsf", item);
                            this.navCtrl.push('SubAdvisoryPage', item);
                        }
                    } else {

                    }
                }).catch();
        }

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AdvisoryServicesPage');
    }


}
