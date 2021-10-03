import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {PurchacehistoryPage} from "../purchacehistory/purchacehistory";

/**
 * Generated class for the PurchaseHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-purchase-history',
    templateUrl: 'purchase-history.html',
})
export class PurchaseHistoryPage {

    apiData;
    items;
    SelectedId;
    loading;
    login_details: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public api: GlobalProvider,
                public toastctrl: ToastController) {

        this.GetList();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PurchaseHistoryPage');
    }

    GetList() {

        this.api.Startloader();
        this.api.purchaseHistory()
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

    opendetailsdata(name, id) {
        this.navCtrl.push('PurchacehistoryPage', {ID: id, TITLE: name})
    }
}
