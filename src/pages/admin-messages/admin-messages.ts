import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";

@IonicPage()
@Component({
    selector: 'page-admin-messages',
    templateUrl: 'admin-messages.html',
})
export class AdminMessagesPage {

    apiData;
    items;
    SelectedId;
    loading;

    TYPE;
    title;

    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public api: GlobalProvider,
                public toastCtrl: ToastController) {

        this.TYPE = navParams.data.TYPE;
        this.title = navParams.data.DISPLAY;
        this.GetList();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AdminMessagesPage');
    }

    GetList() {
        console.log("TYPE", this.TYPE);
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Please Wait...'
            });
            this.loading.present();
        }

        this.api.rssfeed(this.TYPE)

            .then(data => {

                console.log(data);
                this.apiData = data;
                this.loading.dismissAll();
                if (this.apiData.status == 200) {

                    console.log("admin", this.apiData);

                    this.items = this.apiData.data;
                    console.log("adminMassage", this.items);


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
                // }else if(this.apiData.status == 404){
                //
                //     this.api.presentToast("No Any Record Found",this.toastCtrl);
                //     this.loading.dismissAll();
                // }

            }).catch();

    }

}
