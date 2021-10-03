import {Component} from '@angular/core';
import {IonicPage, LoadingController, Modal, ModalController, ModalOptions, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {SocialSharing} from "@ionic-native/social-sharing";
import {Screenshot} from "@ionic-native/screenshot";
import {GlobalProvider} from "../../providers/global/global";
import {ImageViewerController} from "ionic-img-viewer";

// import {DdlModel2Page} from "../ddl-model2/ddl-model2";

/**
 * Generated class for the Charts2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-charts2',
    templateUrl: 'charts2.html',
})


export class Charts2Page {
    title;
    imageOrgUrl;
    imageUrl;
    interval;
    screen: any;
    loading;
    imageViewer;
    /**
     * Created by Tapan.
     * Date: 21-05-2018 16:39:48
     * Comment: To display live chart image by user selected
     */

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http: HttpClient,
                public modal: ModalController,
                private socialSharing: SocialSharing,
                private screenshot: Screenshot,
                public api: GlobalProvider,public imageViewerCtrl: ImageViewerController,
                public loadingCtrl: LoadingController) {

        if (navParams.data == 1) {

            this.title = "NSE CASH";

        } else if (navParams.data == 2) {

            this.title = "NSE FO";

        } else if (navParams.data == 3) {

            this.title = "MCX";
        }

    }
    presentImage(myImage) {
        this.imageViewer = this.imageViewerCtrl.create(myImage, {enableBackdropDismiss: true});
        this.imageViewer.present();
    }
    //visible = false;
    openModaleod() {

        //this.visible = !this.visible;

        const myModalOption: ModalOptions = {
            enableBackdropDismiss: false
        };

        const myModalData = {CHART_TYPE: this.navParams.data};

        const myModal: Modal = this.modal.create('DdlModel2Page', myModalData, myModalOption);

        myModal.present();

        myModal.onDidDismiss((data) => {
            //I have dismissed
            console.log("I have dismissed", data);

            if (data != '') {
                let time = new Date();
                let timeStamp = time.getTime();

                this.imageOrgUrl = data.EODURL;

                this.title = data.EODIMAGENAME;

                this.imageUrl = this.imageOrgUrl + "?t=" + timeStamp;

                this.set_Intervaleod();
            }

        });

        myModal.onWillDismiss((data) => {
            //I am about to dismiss
            // console.log("I am about to dismiss", data);
        });

    }

    set_Intervaleod() {
        this.interval = setInterval(() => {

            let time = new Date();
            let timeStamp = time.getTime();

            this.imageUrl = this.imageOrgUrl + "?t=" + timeStamp;

            // this.http.get(imageUrl).subscribe(data => {
            //     console.log(data);
            // }, err => {
            //     console.log(err);
            // });


            console.log(this.imageUrl);

        }, 2000);
    }

    clear_Interval() {
        clearInterval(this.interval);
        this.imageUrl = "";
    }

    shareScreenShot() {

        this.socialSharing.share("Secure Trade", "Demo subject", "", "https://play.google.com/store/apps/details?id=&hl=en%22").then(() => {

        }).catch(() => {

        });
    }

    shareScreenshot() {
        this.api.SharescrrenshotContent(this.screenshot, this.socialSharing, this.screen, this.api.playstorelink);
    }
}
