import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {ChartsPage} from "../charts/charts";
import {SignloginPage} from "../signlogin/signlogin";
// import {AdvisoryServicesPage} from "../advisory-services/advisory-services";
import {Device} from "@ionic-native/device";
import {GlobalProvider} from "../../providers/global/global";
import {SubscribeplanPage} from "../subscribeplan/subscribeplan";

@IonicPage()
@Component({
    selector: 'page-live-charts',
    templateUrl: 'live-charts.html',
})
export class LiveChartsPage {
    login_details;
    loading;
    verifydata;
    userchack;
    currentDate;
    Localdate1;
    Localdate2;
    Localdate3;
    title;
    type = 3;

    HIDELIVE: boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, public globalApi: GlobalProvider,
                public loadingCtrl: LoadingController, private device: Device,
                public toastCtrl: ToastController) {

        this.login_details = JSON.parse(localStorage.getItem("login_details"));
        // console.log("data", navParams.data);
        if (this.navParams.data == 0) {
            this.title = "Message Board";
            this.type = 0;
            if (globalApi.MESSAGE_BOARD_PURCHSE == true) {
                this.HIDELIVE = true;
            } else {
                this.HIDELIVE = false;
            }
        } else if (this.navParams.data == 2) {
            this.title = "Auto Advisory";
            this.type = 2;
            if (globalApi.AUTO_ADVICERY_PURCHSE == true) {
                this.HIDELIVE = true;
            } else {
                this.HIDELIVE = false;
            }
        } else if (this.navParams.data == 3) {
            this.title = "Algo Live Chart";
            this.type = 3;
            if (globalApi.ALGO_LIVECHART_PURCHSE == true) {
                this.HIDELIVE = true;
            } else {
                this.HIDELIVE = false;
            }

        } else {
            this.title = "Live Chart";
            this.type = 1;
            if (globalApi.LIVE_CHART_PURCHSE == true) {
                this.HIDELIVE = true;
            } else {
                this.HIDELIVE = false;
            }

        }

        // Commented by Dishant. Date: 23-08-2018 11:52:14 Comment: add date condi.
        // localStorage.setItem('Todaydate', "");
        /* this.Localdate1 = localStorage.getItem("Todaydate1");
         this.Localdate2 = localStorage.getItem("Todaydate2");
         this.Localdate3 = localStorage.getItem("Todaydate3");
         this.currentDate = new Date().toLocaleDateString();
         console.log("currentDate",this.currentDate);*/
    }


        chartSelected(number, item, title) {
        // this.Localdate1 = localStorage.getItem("Todaydate1");
        // this.Localdate2 = localStorage.getItem("Todaydate2");
        // this.Localdate3 = localStorage.getItem("Todaydate3");
        // this.currentDate = new Date().toLocaleDateString();
        // console.log("currentDate", this.currentDate);
        if (item == 'LIVE') {
            if (this.HIDELIVE == true) {
                this.navCtrl.push('ChartsPage', {number: number, selected: item, title: title, type: this.type});
            } else {
                this.navCtrl.push('SubscribeplanPage','1');
            }

        } else if (item == 'EOD') {
            this.navCtrl.push('ChartsPage', {number: number, selected: item, title: title, type: this.type});
        }


    }

}
