import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavParams, ViewController} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {Device} from "@ionic-native/device";

/**
 * Generated class for the DdlModel2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({
    name: 'DdlModel2Page',
    priority: 'high'
})
@Component({
    selector: 'page-ddl-model2',
    templateUrl: 'ddl-model2.html',
})
export class DdlModel2Page {

    apiData;
    itemsInitial;
    items;
    title;
    NSEFoListData;
    NSEFOlist;
    loading;
    displayIcon: boolean = false;
    login_details;

    constructor(public view: ViewController, public navParams: NavParams, public globalApi: GlobalProvider,
                public loadingCtrl: LoadingController, private device: Device) {

        // console.log("charttype", view.data.CHART_TYPE);
        this.login_details = JSON.parse(localStorage.getItem("login_data"));
        console.log("logDetail", this.login_details);
        // this.loading = this.loadingCtrl.create({content: "please wait..."});
        // this.loading.present();
    }

    ionViewDidEnter(){
        this.initializeItems2();
    }
    // ionViewWillEnter(){
    //     this.initializeItems2();
    // }
    initializeItems2() {
        if (localStorage.getItem("NSECASH") != "" || localStorage.getItem("NSEFO") != "" || localStorage.getItem("MCX") != "") {
            // this.loading.dismiss();
            console.log("Enter Local Part");

            if (this.view.data.CHART_TYPE == 1) {

                this.itemsInitial = JSON.parse(localStorage.getItem("NSECASH"));
                // this.items = JSON.parse(localStorage.getItem("NSECASH"));
                // this.itemsInitial = this.apiData.data[0].NSECASH;
                // this.items = this.apiData.data[0].NSECASH;
                this.title = "NSC Cash";

                console.log("nsecashlist", this.items);

            } else if (this.view.data.CHART_TYPE == 2) {

                this.itemsInitial = JSON.parse(localStorage.getItem("NSEFO"));
                // this.items = JSON.parse(localStorage.getItem("NSEFO"));
                // this.itemsInitial = this.apiData.data[0].NSEFO;
                // this.items = this.apiData.data[0].NSEFO;
                this.title = "NSC FO";
                console.log("nsefolist", this.items);

            } else if (this.view.data.CHART_TYPE == 3) {

                this.itemsInitial = JSON.parse(localStorage.getItem("MCX"));
                // this.items = JSON.parse(localStorage.getItem("MCX"));
                // this.itemsInitial = this.apiData.data[0].MCX;
                // this.items = this.apiData.data[0].MCX;
                this.title = "MCX";

                console.log("MCX", this.items);

            }
        } else {

            // this.loading = this.loadingCtrl.create({content: "please wait..."});
            // this.loading.present();
            this.globalApi.verifyVersion(this.device.uuid, this.login_details.user_data.ID)
                .then(data => {

                    // this.loading.dismiss();

                    if (this.view.data.CHART_TYPE == 1) {

                        this.apiData = data;
                        this.itemsInitial = this.apiData.data[0].NSECASH;
                        // this.items = this.apiData.data[0].NSECASH;
                        this.title = "NSC Cash";


                        // console.log("nsecashleodist", this.items);

                    } else if (this.view.data.CHART_TYPE == 2) {

                        this.apiData = data;
                        this.itemsInitial = this.apiData.data[0].NSEFO;
                        // this.items = this.apiData.data[0].NSEFO;
                        this.title = "FO Cash";

                        // console.log("nsefoeodlist", this.items);

                    } else if (this.view.data.CHART_TYPE == 3) {

                        this.apiData = data;
                        this.itemsInitial = this.apiData.data[0].MCX;
                        // this.items = this.apiData.data[0].MCX;
                        this.title = "MCX Cash";

                        // console.log("mcxeodlist", this.items);

                    }

                });
        }
    }

    getItemseod(ev: any) {
        // set val to the value of the searchbar
        let val = ev.target.value;

        this.items = this.itemsInitial;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.itemsInitial.filter((item) => {
                return (item.EODIMAGENAME.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

    selectedSymboleod(itemSelected) {
        // console.log(itemSelected);
        this.closeModaleod(itemSelected);
    }

    closeModaleod(dataFromModal) {
        // console.log(dataFromModal);
        this.view.dismiss(dataFromModal);
    }


}
