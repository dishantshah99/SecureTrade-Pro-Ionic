import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Screenshot} from "@ionic-native/screenshot";
import {SocialSharing} from "@ionic-native/social-sharing";
import {GlobalProvider} from "../../providers/global/global";
import {AdvisorysearchPage} from "../advisorysearch/advisorysearch";

/**
 * Generated class for the AutoadvisoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-autoadvisory',
    templateUrl: 'autoadvisory.html',
})
export class AutoadvisoryPage {
    screen: any;
    listshow: boolean = false;
    filter: boolean = false;
    DDL_TYPE;
    DDL_NAME;
    DDL_ID;
    Selecttype = '1';
    traderid = 1;
    callid = 1;
    Traderarray = [{title: 'Normal Trade', select: false, id: 1, type: 'BullBear'}, {title: 'STAR Trade', select: false, id: 2, type: 'PowerBullBear'}, {title: 'Smart Trade', select: false, id: 3, type: 'Magic'}];
    selectedtrader = [];
    advisorydata;
    DATA;
    updateDATA;
    DATALIST = [];
    DATASEARCHLIST = [];
    tempDATALIST;
    DEFAULT = [];
    PRIVATE = [];
    deletedata;

    SELECTEDTIME = 5;

    searchtxt = '';
    notificationdata;
    advisory_position;
    ADVISORY_VAL = 0;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private screenshot: Screenshot,
                public api: GlobalProvider,
                public viewCtrl: ViewController,
                private socialSharing: SocialSharing,
                public alertCtrl: AlertController) {

        this.notificationdata = navParams.data;
    }

    ionViewDidEnter() {
        console.log('ionViewDidEnter advisory');
        // this.Traderarray[0].select = true;
        // this.selectedtrader.push(this.Traderarray[0].type);
        this.getwatchlistapi();

    }

    getItems(ev: any) {
        this.DATASEARCHLIST = [];
        this.DATALIST = [];
        let val;
        console.log(ev);
        if (ev == '') {
            val = this.searchtxt;
            console.log('Serch Text', val);
        } else {
            if (ev.data != null) {
                val = ev.target.value.trim();
            } else {
                val = "";
                // this.DATALIST = this.DATA.data;
                for (let i = 0; i < 15; i++) {
                    this.DATALIST.push(this.DATA.data[i]);
                    this.advisory_position = i;
                    this.ADVISORY_VAL = 0;
                }
            }
        }
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.DATASEARCHLIST = this.DATA.data.filter((item) => {
                return (item.SYMBOL.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            for (let i = 0; i < 15; i++) {
                if (this.DATASEARCHLIST[i]) {
                    this.DATALIST.push(this.DATASEARCHLIST[i]);
                    this.ADVISORY_VAL = 1;
                }
            }
            console.log("DATALIST", this.DATALIST);
            console.log("DATASEARCHLIST", this.DATASEARCHLIST);
        }
    }

    doInfinite(infiniteScroll) {
        console.log("position", this.advisory_position);
        console.log('Begin async operation');

        setTimeout(() => {
            this.advisory_position++;
            let cash_count = (this.advisory_position + 15);
            for (let i = this.advisory_position; i < cash_count; i++) {
                if (this.ADVISORY_VAL == 1) {
                    if (this.DATASEARCHLIST[i]) {
                        this.DATALIST.push(this.DATASEARCHLIST[i]);
                        this.advisory_position = i;
                    }
                } else {
                    if (this.DATA.data[i]) {
                        this.DATALIST.push(this.DATA.data[i]);
                        this.advisory_position = i;
                    }
                }
            }
            infiniteScroll.complete();
            console.log("this.messagenewitem", this.DATALIST);
            console.log('Async operation has ended');


        }, 500);
    }

    chartSelected(item, type, DATA) {
        let title;
        if (DATA.SYMBOL_TYPE == 'NSECASH') {
            title = 'NSE CASH';
            this.navCtrl.push('ChartsPage', {number: 1, selected: item, title: title, type: type, DATA: DATA, time: this.SELECTEDTIME});
        } else if (DATA.SYMBOL_TYPE == 'NSEFO') {
            title = 'F&O';
            this.navCtrl.push('ChartsPage', {number: 2, selected: item, title: title, type: type, DATA: DATA, time: this.SELECTEDTIME});
        } else {
            title = 'MCX';
            this.navCtrl.push('ChartsPage', {number: 3, selected: item, title: title, type: type, DATA: DATA, time: this.SELECTEDTIME});
        }


    }

    private getwatchlistapi() {
        this.api.advisorylistapi().then(data => {
                // this.users = data;
                this.advisorydata = data;
                console.log("advisorydata", this.advisorydata);
                if (this.advisorydata.status == 200) {

                    this.api.Advisorywatch_list = this.advisorydata.watch_list;
                    this.DEFAULT = this.api.Advisorywatch_list.DEFAULT;
                    this.PRIVATE = this.api.Advisorywatch_list.PRIVATE;

                    console.log("Notification navdata", this.navParams.data);
                    if (this.PRIVATE.length > 0 && this.navParams.data) {
                        for (let i = 0; i < this.PRIVATE.length; i++) {
                            if (this.PRIVATE[i].ID == this.navParams.data.watch_list_id) {
                                this.api.advisorywatch_postion = i;
                            }
                        }
                    }
                    console.log("idx", this.api.advisorywatch_postion);
                    if (this.api.advisorywatch_type == "DEFAULT") {
                        this.DDL_NAME = this.api.Advisorywatch_list.DEFAULT[this.api.advisorywatch_postion].NAME;
                        this.DDL_ID = this.api.Advisorywatch_list.DEFAULT[this.api.advisorywatch_postion].ID;
                        this.DDL_TYPE = "DEFAULT";

                        console.log("this.api.watch_postion url", this.api.advisorywatch_postion);

                    } else {

                        this.DDL_NAME = this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].NAME;
                        this.DDL_ID = this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].ID;
                        this.DDL_TYPE = "PRIVATE";

                        this.traderid = this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].WATCH_TIMING;
                        this.selectedtrader = [];
                        if (this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].BULL_BAR_TRADE == 1) {
                            this.Traderarray[0].select = true;
                            this.selectedtrader.push(this.Traderarray[0].type);
                        } else {
                            this.Traderarray[0].select = false;
                        }
                        if (this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].POWER_BULL_BEAR_TRADE == 1) {
                            this.Traderarray[1].select = true;
                            this.selectedtrader.push(this.Traderarray[1].type);
                        } else {
                            this.Traderarray[1].select = false;
                        }
                        if (this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].MAGIC_TRADE == 1) {
                            this.Traderarray[2].select = true;
                            this.selectedtrader.push(this.Traderarray[2].type);
                        } else {
                            this.Traderarray[2].select = false;
                        }
                        console.log("selected array", this.selectedtrader);
                        console.log("traderid", this.traderid);

                        console.log("this.api.watch_postion url", this.api.advisorywatch_postion);
                    }
                    if (this.PRIVATE.length > 0) {
                        this.getdatalist();
                    }
                }
                else {
                    this.api.ErrorApi(this.advisorydata.status, this.advisorydata.message);
                }
            }
        ).catch();
    }

    private getdatalist() {
        this.api.Startloader();
        this.DATALIST = [];
        let data = {
            "WATCHLIST_ID": this.DDL_ID,
            "TRADE": this.selectedtrader, /*["BullBear", "PowerBullBear", "Magic"]*/
            "TRADER": this.traderid,
            "CALL": this.callid,
            "LIVE_EOD": "Live"
        };

        this.api.advisoryshowlistapi(data).then(data => {
            // this.users = data;
            this.DATA = data;
            console.log("advisory", this.DATA);
            if (this.advisorydata.status == 200) {
                this.api.Stoploader();
                if (this.DATA.data.length > 0) {
                    for (let i = 0; i < 15; i++) {
                        if (this.DATA.data[i]) {
                            this.DATALIST.push(this.DATA.data[i]);
                            this.advisory_position = i;
                        }
                    }
                }
                // this.DATALIST = this.DATA.data;
                console.log("advisory", this.DATALIST);
                // this.getItems('');
                console.log('notificationdata', this.notificationdata.symbol);
                if (this.notificationdata.symbol != undefined) {
                    this.searchtxt = this.notificationdata.symbol;
                    console.log('notificationdata', this.notificationdata);
                    console.log('searchtxt', this.searchtxt);
                    this.getItems('');
                }
            } else {
                this.api.ErrorApi(this.DATA.status, this.DATA.message);
            }
        }).catch();
    }

    opendata(p, type) {

        this.api.advisorywatch_postion = p;
        this.api.advisorywatch_type = type;
        this.listshow = false;

        console.log("watch_postion", this.api.advisorywatch_postion);

        let cash;
        let future;

        if (this.api.advisorywatch_type == "DEFAULT") {
            this.DDL_NAME = this.api.Advisorywatch_list.DEFAULT[this.api.advisorywatch_postion].NAME;
            this.DDL_ID = this.api.Advisorywatch_list.DEFAULT[this.api.advisorywatch_postion].ID;
            this.DDL_TYPE = "DEFAULT";
        } else {

            this.DDL_NAME = this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].NAME;
            this.DDL_ID = this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].ID;

            this.traderid = this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].WATCH_TIMING;

            this.selectedtrader = [];
            if (this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].BULL_BAR_TRADE == 1) {
                this.Traderarray[0].select = true;
                this.selectedtrader.push(this.Traderarray[0].type);
            } else {
                this.Traderarray[0].select = false;
            }
            if (this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].POWER_BULL_BEAR_TRADE == 1) {
                this.Traderarray[1].select = true;
                this.selectedtrader.push(this.Traderarray[1].type);
            } else {
                this.Traderarray[1].select = false;
            }
            if (this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion].MAGIC_TRADE == 1) {
                this.Traderarray[2].select = true;
                this.selectedtrader.push(this.Traderarray[2].type);
            } else {
                this.Traderarray[2].select = false;
            }
            console.log("selected array", this.selectedtrader);
            console.log("traderid", this.traderid);

            console.log('DDL_NAME', this.DDL_NAME);
            console.log('DDL_ID', this.DDL_ID);
            this.DDL_TYPE = "PRIVATE";
        }
        this.getdatalist();
    }

    deletewatchlist(id) {
        const prompt = this.alertCtrl.create({
            // title: 'Delete',
            message: "Are you sure want to delete Watchlist ?",
            buttons: [
                {
                    text: 'NO',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: data => {
                        console.log('Saved clicked');
                        this.deleteapi(id);
                        this.listshow = false;
                    }
                }
            ]
        });
        prompt.present();
    }

    private deleteapi(id) {
        this.api.Startloader();
        this.api.Watchlistdelete(id).then((result) => {
                this.deletedata = result;
                this.api.Stoploader();
                if (this.deletedata.status == 200) {
                    this.api.presentToast(this.deletedata.message);
                    this.getwatchlistapi();
                } else {
                    this.api.ErrorApi(this.deletedata.status, this.deletedata.message);
                }
            },
            (err) => {
                // console.log(err);

                // this.api.presentToast("Enter Mobile number", '')

            });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AutoadvisoryPage');
    }

    openwatchlist() {
        if (this.filter == true) {
            this.filter = false;
        }
        if (this.listshow == true) {
            this.listshow = false;
        } else {
            this.listshow = true;
        }
    }

    commenclick() {
        this.listshow = false;
        this.filter = false;
    }

    openwatchlistclick() {
        if (this.DDL_TYPE == "PRIVATE") {
            this.api.AUTOADVISORYWATCHLISTNAME = this.DDL_NAME;
            this.api.AUTOADVISORYWATCHLISTID = this.DDL_ID;
            console.log("this.api.AUTOADVISORYWATCHLISTNAME", this.api.AUTOADVISORYWATCHLISTNAME);
            console.log("this.api.AUTOADVISORYWATCHLISTID", this.api.AUTOADVISORYWATCHLISTID);
            this.api.AUTOADVISORYWATCHLISTDATA = this.api.Advisorywatch_list.PRIVATE[this.api.advisorywatch_postion];
            this.navCtrl.push('AdvisorysearchPage', 2)
        } else {
            this.api.presentToast("Default Watchlist can't update")
        }
    }

    showPrompt() {
        const prompt = this.alertCtrl.create({
            title: 'Watchlist Name',
            // message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Name'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        console.log('Saved clicked', data);
                        this.api.AUTOADVISORYWATCHLISTNAME = data;
                        this.listshow = false;
                        this.navCtrl.push('AdvisorysearchPage', 1)
                    }
                }
            ]
        });
        prompt.present();
    }

    seting() {
        this.navCtrl.push('SettingPage');
    }

    shareScreenshot() {
        this.api.SharescrrenshotContent(this.screenshot, this.socialSharing, this.screen, this.api.playstorelink);
    }

    shareInfo() {
        this.screenshot.URI().then((res) => {
            this.socialSharing.share("Secure Trade", "Demo subject", "", "https://play.google.com/store/apps/details?id=&hl=en%22").then(() => {
            });
        });
    }

    changetrader(idx) {
        if (this.Traderarray[idx].select == true) {
            this.Traderarray[idx].select = false;
            let remove = this.selectedtrader.indexOf(this.Traderarray[idx].type);
            this.selectedtrader.splice(remove, 1);
        } else {
            this.Traderarray[idx].select = true;
            this.selectedtrader.push(this.Traderarray[idx].type);
        }

        console.log("selected array", this.selectedtrader);
    }

    changetrade(number, time) {
        this.traderid = number;
        this.SELECTEDTIME = time;

    }

    changecall(number) {
        this.callid = number;
        this.getdatalist();
    }


    openfilter() {
        this.listshow = false;
        if (this.filter == false) {
            this.filter = true;
        } else {
            this.filter = false;
        }

    }

    updatedata() {
        this.api.Startloader();
        let data = {
            "WATCHLIST_ID": this.DDL_ID,
            "TRADE": this.selectedtrader, /*["BullBear", "PowerBullBear", "Magic"]*/
            "TRADER": this.traderid,
        };

        this.api.advisoryshowUPDATEapi(data).then(data => {
            // this.users = data;
            this.updateDATA = data;
            console.log("advisory", this.updateDATA);
            if (this.advisorydata.status == 200) {
                this.api.Stoploader();
                this.listshow = false;
                this.filter = false;
                this.getdatalist();
            } else {
                this.api.ErrorApi(this.updateDATA.status, this.updateDATA.message);
            }
        }).catch();

    }
}
