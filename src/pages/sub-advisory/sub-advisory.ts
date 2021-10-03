import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams, ToastController, ModalController, IonicPage} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {SocialSharing} from "@ionic-native/social-sharing";
import {Screenshot} from "@ionic-native/screenshot";
import {Imagedisplay} from "../imagedisplay/imagedisplay";

@IonicPage()
@Component({
    selector: 'page-sub-advisory',
    templateUrl: 'sub-advisory.html',
})
export class SubAdvisoryPage {
    current: string = "current";
    title;
    apiData;
    apidata2;
    items;
    items2;
    loading;

    SelectedAdvisoryId;
    screen: any;
    img: any;

    green = '#19b330';

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController,
                public navParams: NavParams, public api: GlobalProvider, private socialSharing: SocialSharing, private screenshot: Screenshot,
                public toastctrl: ToastController, public modal: ModalController) {

        this.loading = this.loadingCtrl.create({content: "please wait..."});
        //this.loading.present();

        this.title = navParams.data.ADVISORYNAME;
        console.log("navParams.data", navParams.data);
        console.log("fgvghbh", this.title);

        this.SelectedAdvisoryId = navParams.data.ID;

        console.log("fgvghbh", navParams.data.ID);
        console.log("image", navParams.data.ADVISORYIMAGE);

        this.GetList(this.SelectedAdvisoryId);
        this.GetCurrentList(this.SelectedAdvisoryId);

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SubAdvisoryPage');
    }

    GetList(ADVISORYID) {

        console.log("past", ADVISORYID);

        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Please Wait...'
            });
            this.loading.present();
        }

        this.api.advisorySubList(ADVISORYID)
            .then(data => {

                this.loading.dismiss();

                this.apiData = data;

                if (this.apiData.status == 200) {

                    console.log("admin", this.apiData);

                    this.items = this.apiData.data;
                    console.log("advisorySubList", this.items);


                } else if (this.apiData.status == 404) {
                    this.api.presentToast(this.apiData.message);

                }
                // Commented by Dishant. Date: 26-02-2019 11:10:14 Comment: invalid key logout and go loginpage
                else if (this.apiData.status == 440) {
                    this.api.presentToast(this.apiData.message);
                    localStorage.removeItem("login_apiData");
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

    GetCurrentList(ADVISORYID) {

        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Please Wait...'
            });
            this.loading.present();
        }


        console.log("cuttent", ADVISORYID);
        this.api.advusoryCuttentList(ADVISORYID)
            .then(data => {

                this.loading.dismiss();

                this.apidata2 = data;

                if (this.apidata2.status == 200) {

                    console.log("admin", this.apiData);

                    this.items2 = this.apidata2.data;
                    console.log("advisorycurrentSubList", this.items);


                } else if (this.apidata2.status == 404) {
                    this.api.presentToast(this.apidata2.message);

                }
                // Commented by Dishant. Date: 26-02-2019 11:10:14 Comment: invalid key logout and go loginpage
                else if (this.apidata2.status == 440) {
                    this.api.presentToast(this.apidata2.message);
                    localStorage.removeItem("login_apidata2");
                    this.navCtrl.setRoot('SignloginPage');
                }
                // Commented by Dishant. Date: 25-02-2019 16:55:30 Comment: version error open play store
                else if (this.apidata2.status == 304) {
                    this.api.presentToast(this.apidata2.message);
                    window.open(this.api.playstorelink, '_system');
                }
                // Commented by Dishant. Date: 25-02-2019 16:56:28 Comment: os version error exit app
                else if (this.apidata2.status == 530) {
                    this.api.presentToast(this.apidata2.message);
                    this.api.Exitapp();

                }
                // Commented by Dishant. Date: 25-02-2019 16:57:27 Comment: other massages
                else {
                    this.api.presentToast(this.apidata2.message);
                }


                // this.loading.dismiss();

            }).catch();

    }


    imageDisplay(image, title) {
        this.img = image;

        if (this.img == "" || this.img == "null" || this.img == null) {

        } else {
            this.openModal(image, title);

        }
        /*  console.log(image);

  this.img = image;

  if (this.img == "" || this.img == "null" || this.img == null) {

  } else {
      let confirm = this.alertCtrl.create({
          title: 'Secure Trade',
          message: '<img src={{image}}>',
          buttons: [

              {
                  text: 'ok',
                  handler: () => {

                  }
              }
          ],
          cssClass: 'alert-ios .alert-button '
      });
      confirm.present();
  }*/

    }

    openModal(image, title) {
        let modal = this.modal.create(Imagedisplay, {image: image, title: title}, {showBackdrop: true, enableBackdropDismiss: true});
        modal.present();
    }

    /* imageDisplay(image) {
         if (image.){

         }else {

         }

         let confirm = this.alertCtrl.create({
             title: 'Secure Trade',
             message: '<img src=assets/imgs/advisory_icon.png>',
             buttons: [

                 {
                     text: 'ok',
                     handler: () => {

                     }
                 }
             ],
             cssClass: 'alert-ios .alert-button '
         });
         confirm.present();
     }*/

    shareInfo() {
        this.socialSharing.share("Secure Trade", "Demo subject", "", "https://play.google.com/store/apps/details?id=&hl=en%22").then(() => {

        }).catch(() => {

        });
    }

    shareScreenshot() {
        this.api.SharescrrenshotContent(this.screenshot, this.socialSharing, this.screen, this.api.playstorelink);
    }
}
