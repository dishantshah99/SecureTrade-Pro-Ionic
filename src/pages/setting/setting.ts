import {Component, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {HomePage} from "../home/home";

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-setting',
    templateUrl: 'setting.html',
})
export class SettingPage {

    loading;

    UID;
    login_details: any;

    /*Notification response variables*/

    NotificationResponse;
    ADVISORY;
    NEWS;
    VIDEO;
    FCALLS;
    WALLET;
    ADMINNOTI;

    ADVISROYSELECTED;
    advisorychecked;
    NEWSELECTED;
    BOLGSELECTED;
    newselected;
    bolgselected;
    VIDEOSELECTED;
    videoselected;
    FCALSSSELECTED;
    fcalssselected;
    WALLETSELECTED;
    walletselected;
    ADMINNOTISELECTED;
    adminnotiselected;

    NSECASHTYPE;
    FOTYPE;
    MCXTYPE;

    NSEAUTO;
    NSEMANUAL;
    FOAUTO;
    FOMANUAL;
    MCXAUTO;
    MCXMANUAL;

    NSETEXT;
    FOTEXT;
    MCXTEXT;
    @ViewChild('NseRefreshRate') NSErefreshRate;

    testvar;

    NseCashhide: boolean = true;
    Fohide: boolean = true;
    MCXhide: boolean = true;
    update_noti_setting: any = "update_noti_setting";

    Updatedatatext;
    hidedown: boolean = true;
    hiderefresh: boolean = true;
    repetcount = 1;
    hideup: boolean = false;
    setingdata;

    constructor(public navCtrl: NavController, public navParams: NavParams, public api: GlobalProvider,
                public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

        this.login_details = JSON.parse(localStorage.getItem("login_details"));

        // this.UID = this.login_details.user_data.ID;

        // console.log("jsfileinclued", this.testvar);

        this.loading = this.loadingCtrl.create({content: "please wait..."});
        this.loading.present();

        this.getsettingdata();
        // this.api.getNotificationSettingData(this.UID, "user_profile")
        //
        //     .then(data => {
        //
        //         this.NotificationResponse = data;
        //         console.log("Notification data", this.NotificationResponse);
        //         this.ADVISORY = this.NotificationResponse.data[0].ADVISORY;
        //         this.NEWS = this.NotificationResponse.data[0].NEWS;
        //         this.VIDEO = this.NotificationResponse.data[0].VIDEO;
        //         this.FCALLS = this.NotificationResponse.data[0].FCALLS;
        //         this.WALLET = this.NotificationResponse.data[0].WALLET;
        //         this.ADMINNOTI = this.NotificationResponse.data[0].ADMINNOTI;
        //         this.NSECASHTYPE = this.NotificationResponse.data[0].NSELOADTYPE;
        //         this.FOTYPE = this.NotificationResponse.data[0].FOLOADTYPE;
        //         this.MCXTYPE = this.NotificationResponse.data[0].MCXLOADTYPE;
        //         this.NSETEXT = this.NotificationResponse.data[0].NSELOADSEC;
        //         this.FOTEXT = this.NotificationResponse.data[0].FOLOADSEC;
        //         this.MCXTEXT = this.NotificationResponse.data[0].MCXLOADSEC;
        //
        //
        //         console.log("ADVISORY", this.ADVISORY);
        //         console.log("NEWS", this.NEWS);
        //         console.log("VIDEO", this.VIDEO);
        //         console.log("FCALLS", this.FCALLS);
        //         console.log("WALLET", this.WALLET);
        //         console.log("ADMINNOTI", this.ADMINNOTI);
        //         console.log("NSECASHTYPE", this.NSECASHTYPE);
        //         console.log("FOTYPE", this.FOTYPE);
        //         console.log("MCXTYPE", this.MCXTYPE);
        //         console.log("NSETEXT", this.NSETEXT);
        //         console.log("FOTEXT", this.FOTEXT);
        //         console.log("MCXTEXT", this.MCXTEXT);
        //
        //         this.FillNotificationDetail(this.ADVISORY, this.NEWS, this.VIDEO, this.FCALLS, this.WALLET, this.ADMINNOTI, this.NSECASHTYPE, this.FOTYPE, this.MCXTYPE);
        //
        //         this.loading.dismiss();
        //
        //     }).catch();
    }

    private getsettingdata() {
        this.api.settinggetapi().then(data => {
            // this.users = data;
            this.setingdata = data;
            console.log("setingdata", this.setingdata);
            if (this.setingdata.status == '200') {
                this.loading.dismiss();
                this.api.NSECASH_TYPE = this.setingdata.data[0].NSE_TYPE;
                this.api.FO_TYPE = this.setingdata.data[0].FO_TYPE;
                this.api.MCX_TYPE = this.setingdata.data[0].MCX_TYPE;
                this.api.NSECASH_REFRESH_RATE = this.setingdata.data[0].NSE_TIME;
                this.api.FO_REFRESH_RATE = this.setingdata.data[0].FO_TIME;
                this.api.MCX_REFRESH_RATE = this.setingdata.data[0].MCX_TIME;

                this.api.ADVISORY = this.setingdata.data[0].ADVISORY;
                this.api.VIDEO = this.setingdata.data[0].VIDEO;
                this.api.BLOG = this.setingdata.data[0].BLOG;
                this.api.ADMIN = this.setingdata.data[0].ADMIN;

                this.ADVISORY = this.setingdata.data[0].ADVISORY;
                this.NEWS = this.setingdata.data[0].NEWS;
                this.VIDEO = this.setingdata.data[0].VIDEO;
                this.ADMINNOTI = this.setingdata.data[0].ADMIN;

                this.NSECASHTYPE = this.setingdata.data[0].NSE_TYPE;
                this.FOTYPE = this.setingdata.data[0].FO_TYPE;
                this.MCXTYPE = this.setingdata.data[0].MCX_TYPE;
                this.NSETEXT = this.setingdata.data[0].NSE_TIME;
                this.FOTEXT = this.setingdata.data[0].FO_TIME;
                this.MCXTEXT = this.setingdata.data[0].MCX_TIME;

                this.FillNotificationDetail(this.api.ADVISORY, '', this.api.VIDEO, '', '', this.api.ADMIN, this.api.BLOG, this.api.NSECASH_TYPE, this.api.FO_TYPE, this.api.MCX_TYPE);
            } else {
                this.api.ErrorApi(this.setingdata.status, this.setingdata.message);
            }
        }).catch();
    }

    private FillNotificationDetail(ADVISORY: any, NEWS: any, VIDEO: any, FCALLS: any, WALLET: any, ADMINNOTI: any, BLOG, NSETYPE: any, FOTYPE: any, MSXTYPE: any) {

        if (ADVISORY == "true") {

            this.ADVISROYSELECTED = "true";
            this.advisorychecked = true;

        } else {

            this.ADVISROYSELECTED = "false";
            this.advisorychecked = false;

        }

        if (NEWS == "true") {

            this.NEWSELECTED = "true";
            this.newselected = true;

        } else {

            this.NEWSELECTED = "false";
            this.newselected = false;
        }

        if (BLOG == "true") {

            this.BOLGSELECTED = "true";
            this.bolgselected = true;

        } else {

            this.BOLGSELECTED = "false";
            this.bolgselected = false;
        }

        if (VIDEO == "true") {

            this.VIDEOSELECTED = "true";
            this.videoselected = true;

        } else {

            this.VIDEOSELECTED = "false";
            this.videoselected = false;

        }

        if (FCALLS == "true") {

            this.FCALSSSELECTED = "true";
            this.fcalssselected = true;


        } else {

            this.FCALSSSELECTED = "false";
            this.fcalssselected = false;


        }

        if (WALLET == "true") {

            this.WALLETSELECTED = "true";
            this.walletselected = true;


        } else {

            this.WALLETSELECTED = "false";
            this.walletselected = false;

        }

        if (ADMINNOTI == "true") {

            this.ADMINNOTISELECTED = "true";
            this.adminnotiselected = true;


        } else {

            this.ADMINNOTISELECTED = "false";
            this.adminnotiselected = false;


        }

        if (NSETYPE == "0") {

            this.NSEAUTO = true;
            this.NSEMANUAL = false;
            this.NseCashhide = true;


        } else {

            this.NSEAUTO = false;
            this.NSEMANUAL = true;
            this.NseCashhide = false;

        }

        if (FOTYPE == "0") {

            this.FOAUTO = true;
            this.FOMANUAL = false;
            this.Fohide = true;

        } else {

            this.FOAUTO = false;
            this.FOMANUAL = true;
            this.Fohide = false;

        }

        if (MSXTYPE == "0") {

            this.MCXAUTO = true;
            this.MCXMANUAL = false;
            this.MCXhide = true;

        } else {

            this.MCXAUTO = false;
            this.MCXMANUAL = true;
            this.MCXhide = false;
        }

    }

    setradio(checked) {
        if (checked == "NSEAUTO") {

            this.NseCashhide = true;
            this.NSECASHTYPE = "0";
            // this.NSETEXT = 40;
            console.log("chacked NSEAUTO", checked);

        }
        else if (checked == "FOAUTO") {

            this.Fohide = true;
            this.FOTYPE = "0";
            // this.FOTEXT = 40;
            console.log("chacked FOAUTO", checked);
        }
        else if (checked == "MCXAUTO") {

            this.MCXhide = true;
            this.MCXTYPE = "0";
            // this.MCXTEXT = 40;
            console.log("chacked MCXAUTO", checked);

        }
        else if (checked == "NSEMANUAL") {

            this.NseCashhide = false;
            this.NSECASHTYPE = "1";
            // this.NSETEXT = "null";
            console.log("chacked NSEMANUAL", checked);

        }
        else if (checked == "FOMANUAL") {

            this.Fohide = false;
            this.FOTYPE = "1";
            // this.FOTEXT = "null";
            console.log("chacked FOMANUAL", checked);

        }
        else if (checked == "MCXMANUAL") {

            this.MCXhide = false;
            this.MCXTYPE = "1";
            // this.MCXTEXT = "null";
            console.log("chacked MCXMANUAL", checked);

        }
    }

    notify(event, Tono) {

        if (Tono == 1) {
            if (event.checked) {

                this.ADVISROYSELECTED = "true";
                console.log("checked", this.ADVISROYSELECTED);

            } else {

                this.ADVISROYSELECTED = "false";
                console.log("unchecked", this.ADVISROYSELECTED);
            }
        }
        if (Tono == 2) {
            if (event.checked) {

                this.VIDEOSELECTED = "true";
                console.log("checked", this.VIDEOSELECTED);

            } else {

                this.VIDEOSELECTED = "false";
                console.log("unchecked", this.VIDEOSELECTED);
            }
        }
        if (Tono == 3) {
            if (event.checked) {

                this.NEWSELECTED = "true";
                console.log("checked", this.NEWSELECTED);

            } else {

                this.NEWSELECTED = "false";
                console.log("unchecked", this.NEWSELECTED);
            }
        }
        if (Tono == 4) {
            if (event.checked) {

                this.FCALSSSELECTED = "true";
                console.log("checked", this.FCALSSSELECTED);

            } else {

                this.FCALSSSELECTED = "false";
                console.log("unchecked", this.FCALSSSELECTED);
            }
        }
        if (Tono == 5) {
            if (event.checked) {

                this.WALLETSELECTED = "true";
                console.log("checked", this.WALLETSELECTED);

            } else {

                this.WALLETSELECTED = "false";
                console.log("unchecked", this.WALLETSELECTED);
            }
        }
        if (Tono == 6) {
            if (event.checked) {

                this.ADMINNOTISELECTED = "true";
                console.log("checked", this.ADMINNOTISELECTED);

            } else {

                this.ADMINNOTISELECTED = "false";
                console.log("unchecked", this.ADMINNOTISELECTED);
            }
        }
        if (Tono == 7) {
            if (event.checked) {

                this.BOLGSELECTED = "true";
                console.log("checked", this.BOLGSELECTED);

            } else {

                this.BOLGSELECTED = "false";
                console.log("unchecked", this.BOLGSELECTED);
            }
        }

    }

    submitsetting() {

        if (this.NSECASHTYPE == "0" && this.NSETEXT == "null") {

            this.presentToast("Please Enter NSE CASH Refresh Time");
            console.log("Please Enter NSE CASH Refresh Time");

        } else if (this.NSECASHTYPE == "0" && this.NSETEXT < 5) {

            this.presentToast("Minimum Refresh Rate for NSE CASH is 5 seconds Please Enter Higher than 5 Seconds");
        }

        else if (this.FOTYPE == "0" && this.FOTEXT == "null") {

            this.presentToast("Please Enter NSE FO Refresh Time");
            console.log("Please Enter NSE FO Refresh Time");

        } else if (this.FOTYPE == "0" && this.FOTEXT < 5) {

            this.presentToast("Minimum Refresh Rate for FO Live Cash is 5 seconds Please Enter Higher than 5 Seconds");


        } else if (this.MCXTYPE == "0" && this.MCXTEXT == "null") {

            this.presentToast("Please Enter MCX Refresh Time");


        } else if (this.MCXTYPE == "0" && this.MCXTEXT < 5) {

            this.presentToast("Minimum Refresh Rate for MCX is 5 seconds Please Enter Higher than 5 Seconds");


        }
        else {

            this.loading = this.loadingCtrl.create({content: "please wait..."});
            this.loading.present();

            this.api.updatesetting(this.UID, this.ADVISROYSELECTED, this.NEWSELECTED, this.VIDEOSELECTED,
                this.WALLETSELECTED, this.FCALSSSELECTED, this.ADMINNOTISELECTED,
                this.NSECASHTYPE, this.NSETEXT, this.FOTYPE, this.FOTEXT,
                this.FOTEXT, this.MCXTYPE, this.MCXTEXT, "update_falseti_setting", this.BOLGSELECTED)

                .then(data => {

                    this.loading.dismiss();

                    this.Updatedatatext = data;
                    this.getsettingdata();
                    this.presentToast("Settings updated.");
                    this.navCtrl.popToRoot();
                    console.log(data);

                }).catch();
        }

        console.log("UID", this.UID);
        console.log("advisorySelected", this.ADVISROYSELECTED);
        console.log("newsSelected", this.NEWSELECTED);
        console.log("videoSelected", this.VIDEOSELECTED);
        console.log("walletSelected", this.WALLETSELECTED);
        console.log("fundamentalSelected", this.FCALSSSELECTED);
        console.log("ADMINSelected", this.ADMINNOTISELECTED);
        console.log("NSECASHTYPE", this.NSECASHTYPE);
        console.log("NSECASHDESC", this.NSETEXT);
        console.log("FOTYPE", this.FOTYPE);
        console.log("FODESC", this.FOTEXT);
        console.log("MCXTYPE", this.MCXTYPE);
        console.log("MCXDESC", this.MCXTEXT);
        console.log("update_noti_setting", this.update_noti_setting);


    }

    presentToast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom',
            // dismissOnPageChange: true
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }

    // hidesetting() {
    //     console.log("enter");
    //     if (this.repetcount == 1) {
    //         this.hiderefresh = true;
    //         this.hidedown = true;
    //         this.hideup = false;
    //         this.repetcount = 0;
    //     }else {
    //         this.hiderefresh = false;
    //         this.hidedown = false;
    //         this.hideup = true;
    //         this.repetcount = 1;
    //     }
    // }
}
