import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";

/**
 * Generated class for the PurchacehistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-purchacehistory',
    templateUrl: 'purchacehistory.html',
})
export class PurchacehistoryPage {
    apiData;
    items;
    SelectedId;
    loading;
    login_details: any;
    ID;
    Title;

    constructor(public navCtrl: NavController, public navParams: NavParams, public api: GlobalProvider,
                public toastctrl: ToastController) {
        this.ID = navParams.data.ID;
        this.Title = navParams.data.TITLE;
        this.GetList();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PurchacehistoryPage');
    }

    GetList() {

        this.api.Startloader();
        this.api.purchaseHistorydetails(this.ID)
            .then(data => {
                console.log(data);
                this.api.Stoploader();
                this.apiData = data;
                console.log("purchaseHistory", this.apiData);
                if (this.apiData.status == 200) {
                    this.items = this.apiData.data;
                }
                else {
                    this.api.ErrorApi(this.apiData.status, this.apiData.message);
                }


                // this.loading.dismissAll();
            }).catch();
    }
}
