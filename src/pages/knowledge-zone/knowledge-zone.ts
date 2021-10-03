import {Component, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, Navbar, NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import {Screenshot} from "@ionic-native/screenshot";
import {SocialSharing} from "@ionic-native/social-sharing";
import {GlobalProvider} from "../../providers/global/global";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {VideodetailsPage} from "../videodetails/videodetails";

/**
 * Generated class for the KnowledgeZonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-knowledge-zone',
    templateUrl: 'knowledge-zone.html',
})
export class KnowledgeZonePage {
    free: string = "freevideo";
    apiData;
    apiData2;
    apiData3;
    freevideo;
    premiume;
    defaultImage: string = "assets/imgs/app_background.png";
    loading;
    SelectedId;
    screen: any;
    hide: boolean = false;
    @ViewChild(Navbar) navBar: Navbar;

    category;
    videodetails;
    videolink;
    LINK;
    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public plt: Platform,
                public navParams: NavParams, public globalApi: GlobalProvider, public iappb: InAppBrowser,
                private screenshot: Screenshot, private socialSharing: SocialSharing,
                public toastctrl: ToastController) {

        this.loading = this.loadingCtrl.create({content: "please wait..."});
        this.loading.present();

        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Please Wait...'
            });
            this.loading.present();
        }

        this.globalApi.videocategory()
            .then(data => {
                // this.users = data;
                this.apiData = data;
                this.loading.dismiss();
                if (this.apiData.status == 200) {

                    this.category = this.apiData.data;
                    //    this.checkReportLink();
                    console.log("category", this.category);

                } else {
                    this.apiData.ErrorApi(this.apiData.status,this.apiData.message);
                }


            }).catch();



    }


    opendetails(id){
        this.hide = true;
        this.loading = this.loadingCtrl.create({content: "please wait..."});
        this.loading.present();

        this.globalApi.videocategorydetails(id)
            .then(data => {
                // this.users = data;
                this.apiData2 = data;
                this.loading.dismiss();
                if (this.apiData2.status == 200) {

                    this.videodetails = this.apiData2.data;
                    console.log("videodetails", this.videodetails);


                } else {
                    this.apiData.ErrorApi(this.apiData2.status,this.apiData2.message);
                }

                // this.loading.dismiss();
            }).catch();
    }
    ionViewDidEnter() {

        this.navBar.backButtonClick = (e: UIEvent) => {
            if (this.hide == true) {
                this.hide = false;
            } else {
                this.navCtrl.pop();
            }

        };
        this.plt.registerBackButtonAction((e) => {
            if (this.hide == true) {
                this.hide = false;
            } else {
                this.navCtrl.pop();
            }
        })
    }

    openvideolink(id) {
        this.loading = this.loadingCtrl.create({content: "please wait..."});
        this.loading.present();

        this.globalApi.videocategorydetailslink(id)
            .then(data => {
                // this.users = data;
                this.apiData3 = data;
                this.loading.dismiss();
                if (this.apiData3.status == 200) {

                    this.videolink = this.apiData3.data;
                    console.log("videolink", this.videolink);
                    this.LINK = this.videolink[0].VIDEO;
                    console.log("video link", this.LINK);

                    this.navCtrl.push('VideodetailsPage',this.videolink)
                    // const browser = this.iappb.create(this.LINK);
                    // browser.on('loadstop').subscribe(event => {
                    //     browser.insertCSS({ code: "body{color: red;" });
                    // });

                    // browser.close();
                } else {
                    this.apiData.ErrorApi(this.apiData3.status,this.apiData3.message);
                }

                // this.loading.dismiss();
            }).catch();
    }

    shareScreenshot() {
        // this.globalApi.SharescrrenshotContent(this.screenshot, this.socialSharing, this.screen, this.globalApi.playstorelink);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad KnowledgeZonePage');
    }

    openvideolist() {
        this.hide = true;
    }
}
