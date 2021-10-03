import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";

/**
 * Generated class for the AdminmsgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-adminmsg',
    templateUrl: 'adminmsg.html',
})
export class AdminmsgPage {
    apiData;
    items;
    SelectedId;
    loading;

    TYPE;
    TITLE;

    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public api: GlobalProvider,
                public toastCtrl: ToastController) {
        this.GetList()
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

        this.api.adminMassage()

            .then(data => {

                console.log(data);
                this.apiData = data;
                this.loading.dismissAll();
                if (this.apiData.status == 200) {

                    console.log("admin", this.apiData);

                    this.items = this.apiData.data;
                    console.log("adminMassage", this.items);


                }
                else {
                    this.api.ErrorApi(this.apiData.status, this.apiData.message);
                }
                // }else if(this.apiData.status == 404){
                //
                //     this.api.presentToast("No Any Record Found",this.toastCtrl);
                //     this.loading.dismissAll();
                // }

            }).catch();

    }

}