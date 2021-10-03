import {Component, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, Modal, ModalController, ModalOptions, Navbar, NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {SettingPage} from "../setting/setting";
import {SocialSharing} from "@ionic-native/social-sharing";
import {Screenshot} from "@ionic-native/screenshot";
import {GlobalProvider} from "../../providers/global/global";
import {ImageViewerController} from "ionic-img-viewer";
import {Toast} from "@ionic-native/toast";

@IonicPage()
@Component({
    selector: 'page-charts',
    templateUrl: 'charts.html',
})
export class ChartsPage {

    title = "Search";
    title2;
    imageOrgUrl;
    imageUrl;
    interval;
    loading;
    screen: any;
    state: boolean = false;
    image: any;
    refreshhide: boolean = true;
    timer;
    imageViewer;
    @ViewChild(Navbar) navBar: Navbar;
    number;
    type;
    selected;

    selectedtimeLIVE = "5";
    selectedtimeMESSAGE = "5";
    selectedtime;
    messagedata;
    messageitem;
    messagenewitem = [];
    messagesearchitem = [];
    URLS;

    MESSAGETOLIVE = 0;
    message_position;

    MESSAGE_VAL = 0;
    showingicon: boolean = true;
    showingspinner: boolean = false;
    constructor(public navCtrl: NavController, public navParams: NavParams,
                public loadingCtrl: LoadingController, public http: HttpClient,
                public api: GlobalProvider,
                public modal: ModalController,
                private socialSharing: SocialSharing,
                private screenshot: Screenshot,
                public platform: Platform,
                public toastCtrl: ToastController,
                private toast: Toast,
                public imageViewerCtrl: ImageViewerController) {

        this.number = navParams.data.number;
        this.type = navParams.data.type;
        this.title2 = navParams.data.title;
        this.selected = navParams.data.selected;
        console.log(navParams.data);

        // let backAction = platform.registerBackButtonAction(() => {
        //     console.log("second");
        //     // this.presentToast("BACK button pass")
        //     this.navCtrl.pop();
        //     backAction();
        // }, 2);

        // this.platform.ready().then(() => {
        //
        //     this.platform.registerBackButtonAction(() => {
        //         navigator['app'].exitApp();
        //     });
        // });


    }
    clicksync() {
        console.log("Enter if in click");
        this.showingicon = false;
        this.showingspinner = true;
        this.clicknow();
        setTimeout(x => {
            // this.showingicon = true
            this.showingicon = true;
            this.showingspinner = false;
        }, 5000);


    }
    openwatchlistclick() {
        this.navCtrl.push('WatchlistPage')
    }

    openwatchlistclick2() {
        this.navCtrl.push('WatchlistPage')
        // this.navCtrl.push('ProductlistPage')
    }

    ionViewDidEnter() {

        this.platform.registerBackButtonAction((data) => {
            console.log("MESSAGE", this.MESSAGETOLIVE);
            if (this.MESSAGETOLIVE == 1) {
                this.type = 0;
                this.navParams.data.type = 0;
                this.MESSAGETOLIVE = 0;
                if (this.selectedtime == '5') {
                    this.selectedtime = '5';
                    this.selectedtimeLIVE = '5';
                }
            } else {
                this.navCtrl.pop();
            }
        });
        this.navBar.backButtonClick = (e: UIEvent) => {
            if (this.MESSAGETOLIVE == 1) {
                this.type = 0;
                this.navParams.data.type = 0;
                this.MESSAGETOLIVE = 0;
                if (this.selectedtime == '5') {
                    this.selectedtime = '5';
                    this.selectedtimeLIVE = '5';
                }
            } else {
                this.navCtrl.pop();
            }
        };


        console.log("number", this.number);
        if (this.number == 1) {

            if (this.api.NSECASH_TYPE == "0") {

                this.refreshhide = false;
                this.clear_Interval();
            }
        } else if (this.number == 2) {

            if (this.api.FO_TYPE == "0") {

                this.refreshhide = false;
                this.clear_Interval();
            }
        } else if (this.number == 3) {

            if (this.api.MCX_TYPE == "0") {

                this.refreshhide = false;
                this.clear_Interval();
            }
        }

        if (this.type == 0) {
            this.selectedtime = this.selectedtimeMESSAGE;
            this.Setmessageboarddata();
            this.setautorefresh();
        } else if (this.type == 1) {
            //live eod call
        } else if (this.type == 10) {
            this.selectedtimeLIVE = this.navParams.data.time;
            this.openlivechart2(this.navParams.data.DATA)
        } else {
            this.selectedtime = this.selectedtimeLIVE;
        }

        // this.platform.registerBackButtonAction((data) => {
        //     // this.navCtrl.setRoot('TabsPage');
        //     this.navCtrl.pop();
        // });
        // this.navBar.backButtonClick = (e: UIEvent) => {
        //     this.navCtrl.pop();
        // };
    }

    presentToast(msg) {

        let toast = this.toastCtrl.create({
            message: msg,
            duration: 1000,
            position: 'bottom',
            // dismissOnPageChange: true
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }

    selecttime(time) {
        clearInterval(this.timer);
        this.selectedtimeLIVE = time;
        this.selectedtimeMESSAGE = time;
        this.selectedtime = time;
        this.setautorefresh();
        this.clicknowmanual()
    }

    selecttime2(time) {
        clearInterval(this.timer);
        this.selectedtimeLIVE = time;
        this.selectedtimeMESSAGE = time;
        this.selectedtime = time;
        this.setautorefresh();
        // this.clicknowmanual()
        this.Setmessageboarddata();
    }

    getItems(ev: any) {
        let val;
        console.log(ev);
        if (ev.data != null) {
            val = ev.target.value.trim();
        } else {
            val = "";
            this.messagenewitem = this.messageitem.data;
            for (let i = 0; i < 15; i++) {
                this.messagenewitem.push(this.messageitem.data[i]);
                this.message_position = i;
                this.MESSAGE_VAL = 0;
            }


        }
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.messagesearchitem = this.messageitem.data.filter((item) => {
                return (item.SYMBOL.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            if (this.messagesearchitem.length > 0) {
                this.messagenewitem = [];
                for (let i = 0; i < 15; i++) {
                    if (this.messagesearchitem[i]) {
                        this.messagenewitem.push(this.messagesearchitem[i]);
                        this.MESSAGE_VAL = 1;
                    }
                }
            }
        }
    }

    //visible = false;
    openModal() {

        //this.visible = !this.visible;
        const myModalOption: ModalOptions = {
            enableBackdropDismiss: false
        };

        const myModalData = {CHART_TYPE: this.navParams.data};

        const myModal: Modal = this.modal.create('DdlModalPage', myModalData, myModalOption);

        myModal.present();

        myModal.onDidDismiss((data) => {
            //I have dismissed
            console.log("I have dismissed", data);

            if (data != undefined) {

                // this.imageOrgUrl = "null";
                // this.imageUrl = "null";


                // let time = new Date();
                // let timeStamp = time.getTime();

                if (data.TYPE.CHART_TYPE.type == 0) {
                    //Message Board
                    // if (data.TYPE.CHART_TYPE.selected == 'LIVE') {
                    //     this.imageOrgUrl = data.SELECTED.LIVE_URL;
                    //     this.title = data.SELECTED.COMPANY_NAME;
                    //     this.imageUrl = "http://173.212.232.11:25125/csv/MB" + this.selectedtime + ".csv";
                    //
                    // } else if (data.TYPE.CHART_TYPE.selected == 'EOD') {
                    //     this.imageOrgUrl = data.SELECTED.EOD_MSG_URL;
                    //     this.title = data.SELECTED.EOD_NAME;
                    //
                    //     this.imageUrl = "http://173.212.232.11:25125/csv/MB05.csv";
                    // }
                    //
                    // // this.imageUrl = this.imageOrgUrl + "csv/MB" + this.selectedtime + ".csv";
                    //
                    // console.log("imageOrgUrl", this.imageOrgUrl);
                    // console.log("imageUrl", this.imageUrl);
                    //
                    // this.getmessageboarddata(this.imageUrl)

                } else if (data.TYPE.CHART_TYPE.type == 1) {
                    //Live Chart
                    if (data.TYPE.CHART_TYPE.selected == 'LIVE') {
                        this.imageOrgUrl = data.SELECTED.LIVE_URL;
                        this.title = data.SELECTED.COMPANY_NAME;

                    } else if (data.TYPE.CHART_TYPE.selected == 'EOD') {
                        this.imageOrgUrl = data.SELECTED.EOD_LIVECHART_URL;
                        this.title = data.SELECTED.EOD_NAME;
                    }

                    this.clicknow();
                    this.clicknow();
                    // this.imageUrl = this.imageOrgUrl + this.selectedtime + "M/" + this.title + this.api.LIVECHARTIMAGEEXT + "?t=" + timeStamp;
                    // console.log("imageOrgUrl", this.imageOrgUrl);
                    // console.log("imageUrl", this.imageUrl);

                } else if (data.TYPE.CHART_TYPE.type == 2) {
                    //Auto Advisory

                } else if (data.TYPE.CHART_TYPE.type == 3) {
                    //Algo Live Chart
                    if (data.TYPE.CHART_TYPE.selected == 'LIVE') {
                        this.imageOrgUrl = data.SELECTED.ALGO_CHART_URL;
                        this.title = data.SELECTED.COMPANY_NAME;

                    }
                    this.clicknow();
                    this.clicknow();
                    // this.imageUrl = this.imageOrgUrl + this.title + this.api.ALGOCHARTIMAGEEXT + "?t=" + timeStamp;
                    // console.log("imageOrgUrl", this.imageOrgUrl);
                    // console.log("imageUrl", this.imageUrl);
                }

                this.setautorefresh();
            } else {
                this.MESSAGETOLIVE = 0;
            }
        });

        myModal.onWillDismiss((data) => {
            //I am about to dismiss
            // console.log("I am about to dismiss", data);
        });


    }

    set_Interval(time) {
        this.timer = this.interval = setInterval(() => {
            this.clicknow()
        }, time);
    }

    clear_Interval() {
        clearInterval(this.timer);
        // this.imageUrl = "";
        console.log("Clear interval")
    }


    clicknow() {
        if (this.imageOrgUrl != undefined) {
            let time = new Date();
            let timeStamp = time.getTime();

            if (this.type == 0) {
                this.Setmessageboarddata();
            } else if (this.type == 1) {
                if (this.selected == 'EOD') {
                    this.imageUrl = this.imageOrgUrl + "STEOD/" + this.title + this.api.LIVECHARTIMAGEEXT + "?t=" + timeStamp;
                } else {
                    this.imageUrl = this.imageOrgUrl + "ST" + this.selectedtimeLIVE + "M/" + this.title + this.api.LIVECHARTIMAGEEXT + "?t=" + timeStamp;
                }
            } else if (this.type == 10) {
                if (this.selected == 'EOD') {
                    this.imageUrl = this.imageOrgUrl + "STEOD/" + this.title + this.api.LIVECHARTIMAGEEXT + "?t=" + timeStamp;
                } else {
                    this.imageUrl = this.imageOrgUrl + "ST" + this.selectedtimeLIVE + "M/" + this.title + this.api.LIVECHARTIMAGEEXT + "?t=" + timeStamp;
                }
            } else if (this.type == 2) {

            } else if (this.type == 3) {
                this.imageUrl = this.imageOrgUrl + "ST5M/" + this.title + this.api.ALGOCHARTIMAGEEXT + "?t=" + timeStamp;
            }
            console.log("image url", this.imageUrl);
            console.log("Click refresh");
        } else {
            console.log("Click refresh");
        }
    }

    clicknowmanual() {
        this.api.Startloader();
        this.clicknow();
        setTimeout(data => {
            this.api.Stoploader()
        }, 1000);
    }

    shareScreenshot() {
        this.api.SharescrrenshotContent(this.screenshot, this.socialSharing, this.screen, this.api.playstorelink);
    }

    seting() {
        this.navCtrl.push('SettingPage');
    }

    shareInfo() {
        this.screenshot.URI().then((res) => {
            this.socialSharing.share("Secure Trade", "Demo subject", "", "https://play.google.com/store/apps/details?id=&hl=en%22").then(() => {
            });
        });
    }

    ionViewWillLeave() {
        this.clear_Interval();
        console.log("This is back");
    }

    presentImage(myImage) {
        this.imageViewer = this.imageViewerCtrl.create(myImage, {enableBackdropDismiss: true});
        this.imageViewer.present();
    }

    openlivechart(data) {

        console.log("Messageboard chart", data);
        console.log("current this.navParams.data", this.navParams.data);
        //Live Chart
        if (this.api.LIVE_CHART_PURCHSE == false) {
            this.navCtrl.push('SubscribeplanPage', '1');
        } else {
            if (this.selectedtime == '5') {
                this.selectedtime = '5';
                this.selectedtimeLIVE = '5';
            }
            if (this.navParams.data.selected == "LIVE") {
                if (this.selectedtime == '1' || this.selectedtime == '3') {
                    this.toast.show(`01 min and 03 min Live chart not available`, '2000', 'center').subscribe(
                        toast => {
                            console.log(toast);
                        }
                    );
                    // this.presentToast("01 min and 03 min Live chart not available")
                } else {
                    if (this.navParams.data.number == 1) {
                        let NSECASH;

                        NSECASH = JSON.parse(localStorage.getItem("NSECASH"));

                        if (NSECASH.length > 0) {
                            for (let i = 0; i < NSECASH.length; i++) {
                                if (data.SYMBOL == NSECASH[i].COMPANY_NAME) {
                                    this.imageOrgUrl = NSECASH[i].LIVE_URL;
                                    this.title = NSECASH[i].COMPANY_NAME;
                                }
                            }
                            this.type = 1;
                            this.navParams.data.type = 1;
                            this.MESSAGETOLIVE = 1;
                            this.clicknow();
                            this.clicknow();
                        }


                    } else if (this.navParams.data.number == 2) {
                        let NSEFO;

                        NSEFO = JSON.parse(localStorage.getItem("NSEFO"));

                        if (NSEFO.length > 0) {
                            for (let i = 0; i < NSEFO.length; i++) {
                                if (data.SYMBOL == NSEFO[i].COMPANY_NAME) {
                                    this.imageOrgUrl = NSEFO[i].LIVE_URL;
                                    this.title = NSEFO[i].COMPANY_NAME;
                                }
                            }
                            this.type = 1;
                            this.navParams.data.type = 1;
                            this.MESSAGETOLIVE = 1;
                            this.clicknow();
                            this.clicknow();
                        }

                    } else if (this.navParams.data.number == 3) {
                        let MCX;

                        MCX = JSON.parse(localStorage.getItem("MCX"));

                        if (MCX.length > 0) {
                            for (let i = 0; i < MCX.length; i++) {
                                if (data.SYMBOL == MCX[i].COMPANY_NAME) {
                                    this.imageOrgUrl = MCX[i].LIVE_URL;
                                    this.title = MCX[i].COMPANY_NAME;
                                }
                            }
                            this.type = 1;
                            this.navParams.data.type = 1;
                            this.MESSAGETOLIVE = 1;
                            this.clicknow();
                            this.clicknow();
                        }

                    }
                }
            } else {
                if (this.navParams.data.number == 1) {
                    let NSECASH;
                    NSECASH = JSON.parse(localStorage.getItem("NSECASH"));

                    if (NSECASH.length > 0) {
                        for (let i = 0; i < NSECASH.length; i++) {
                            if (data.SYMBOL == NSECASH[i].EOD_NAME) {
                                this.imageOrgUrl = NSECASH[i].EOD_LIVECHART_URL;
                                this.title = NSECASH[i].EOD_NAME;
                            }
                        }
                        this.type = 1;
                        this.navParams.data.type = 1;
                        this.MESSAGETOLIVE = 1;
                        this.clicknow();
                        this.clicknow();
                    }


                } else if (this.navParams.data.number == 2) {
                    let NSEFO;

                    NSEFO = JSON.parse(localStorage.getItem("NSEFO"));

                    if (NSEFO.length > 0) {
                        for (let i = 0; i < NSEFO.length; i++) {
                            if (data.SYMBOL == NSEFO[i].EOD_NAME) {
                                this.imageOrgUrl = NSEFO[i].EOD_LIVECHART_URL;
                                this.title = NSEFO[i].EOD_NAME;
                            }
                        }
                        this.type = 1;
                        this.navParams.data.type = 1;
                        this.MESSAGETOLIVE = 1;
                        this.clicknow();
                        this.clicknow();
                    }

                } else if (this.navParams.data.number == 3) {
                    let MCX;

                    MCX = JSON.parse(localStorage.getItem("MCX"));

                    if (MCX.length > 0) {
                        for (let i = 0; i < MCX.length; i++) {
                            if (data.SYMBOL == MCX[i].EOD_NAME) {
                                this.imageOrgUrl = MCX[i].EOD_LIVECHART_URL;
                                this.title = MCX[i].EOD_NAME;
                            }
                        }
                        this.type = 1;
                        this.navParams.data.type = 1;
                        this.MESSAGETOLIVE = 1;
                        this.clicknow();
                        this.clicknow();
                    }

                }
            }

        }


    }

    openlivechart2(data) {

        console.log("Auto advisory chart", data);
        console.log("current this.navParams.data", this.navParams.data);
        //Live Chart
        if (this.api.LIVE_CHART_PURCHSE == false) {
            this.navCtrl.push('SubscribeplanPage', '1');
        } else {
            if (this.selectedtime == '5') {
                this.selectedtime = '5';
                this.selectedtimeLIVE = '5';
            }
            if (this.navParams.data.selected == "LIVE") {
                if (this.selectedtime == '1' || this.selectedtime == '3') {
                    this.presentToast("01 min and 03 min Live chart not available")
                } else {
                    if (this.navParams.data.number == 1) {
                        let NSECASH;

                        NSECASH = JSON.parse(localStorage.getItem("NSECASH"));

                        if (NSECASH.length > 0) {
                            for (let i = 0; i < NSECASH.length; i++) {
                                if (data.SYMBOL == NSECASH[i].COMPANY_NAME) {
                                    this.imageOrgUrl = NSECASH[i].LIVE_URL;
                                    this.title = NSECASH[i].COMPANY_NAME;
                                }
                            }
                            this.type = 1;
                            this.navParams.data.type = 1;
                            this.clicknow();
                            this.clicknow();
                        }


                    } else if (this.navParams.data.number == 2) {
                        let NSEFO;

                        NSEFO = JSON.parse(localStorage.getItem("NSEFO"));

                        if (NSEFO.length > 0) {
                            for (let i = 0; i < NSEFO.length; i++) {
                                if (data.SYMBOL == NSEFO[i].COMPANY_NAME) {
                                    this.imageOrgUrl = NSEFO[i].LIVE_URL;
                                    this.title = NSEFO[i].COMPANY_NAME;
                                }
                            }
                            this.type = 1;
                            this.navParams.data.type = 1;

                            this.clicknow();
                            this.clicknow();
                        }

                    } else if (this.navParams.data.number == 3) {
                        let MCX;

                        MCX = JSON.parse(localStorage.getItem("MCX"));

                        if (MCX.length > 0) {
                            for (let i = 0; i < MCX.length; i++) {
                                if (data.SYMBOL == MCX[i].COMPANY_NAME) {
                                    this.imageOrgUrl = MCX[i].LIVE_URL;
                                    this.title = MCX[i].COMPANY_NAME;
                                }
                            }
                            this.type = 1;
                            this.navParams.data.type = 1;

                            this.clicknow();
                            this.clicknow();
                        }

                    }
                }
            } else {
                if (this.navParams.data.number == 1) {
                    let NSECASH;
                    NSECASH = JSON.parse(localStorage.getItem("NSECASH"));

                    if (NSECASH.length > 0) {
                        for (let i = 0; i < NSECASH.length; i++) {
                            if (data.SYMBOL == NSECASH[i].EOD_NAME) {
                                this.imageOrgUrl = NSECASH[i].EOD_LIVECHART_URL;
                                this.title = NSECASH[i].EOD_NAME;
                            }
                        }
                        this.type = 1;
                        this.navParams.data.type = 1;
                        this.MESSAGETOLIVE = 1;
                        this.clicknow();
                        this.clicknow();
                    }


                } else if (this.navParams.data.number == 2) {
                    let NSEFO;

                    NSEFO = JSON.parse(localStorage.getItem("NSEFO"));

                    if (NSEFO.length > 0) {
                        for (let i = 0; i < NSEFO.length; i++) {
                            if (data.SYMBOL == NSEFO[i].EOD_NAME) {
                                this.imageOrgUrl = NSEFO[i].EOD_LIVECHART_URL;
                                this.title = NSEFO[i].EOD_NAME;
                            }
                        }
                        this.type = 1;
                        this.navParams.data.type = 1;
                        this.MESSAGETOLIVE = 1;
                        this.clicknow();
                        this.clicknow();
                    }

                } else if (this.navParams.data.number == 3) {
                    let MCX;

                    MCX = JSON.parse(localStorage.getItem("MCX"));

                    if (MCX.length > 0) {
                        for (let i = 0; i < MCX.length; i++) {
                            if (data.SYMBOL == MCX[i].EOD_NAME) {
                                this.imageOrgUrl = MCX[i].EOD_LIVECHART_URL;
                                this.title = MCX[i].EOD_NAME;
                            }
                        }
                        this.type = 1;
                        this.navParams.data.type = 1;
                        this.MESSAGETOLIVE = 1;
                        this.clicknow();
                        this.clicknow();
                    }

                }
            }

        }


    }


    getmessageboarddata(URL) {
        this.api.GETMESSAGE_BOARDDATA(URL).then(data => {
                console.log("MB data", data);
                this.messagedata = data;
                let data_split = this.messagedata.trim().split("\n");
                // this.messageitem = [];
                for (var k = 1; k < data_split.length; k++) {
                    var split_comma = data_split[k].split(",");
                    console.log("data_split", data_split);
                    console.log("split_comma", split_comma);

                    if (this.navParams.data.selected == "LIVE") {
                        if (this.navParams.data.number == 1) {
                            let NSECASH;
                            NSECASH = JSON.parse(localStorage.getItem("NSECASH"));
                            if (NSECASH.length > 0) {
                                for (let i = 0; i < NSECASH.length; i++) {
                                    if (split_comma[0] == NSECASH[i].COMPANY_NAME) {
                                        let array = {
                                            Ticker: split_comma[0],
                                            Date: split_comma[1],
                                            Buy: split_comma[2],
                                            Short: split_comma[3],
                                            TGT1: split_comma[4],
                                            TGT2: split_comma[5],
                                            TGT3: split_comma[6],
                                            TSL: split_comma[7],
                                            CLASS: ""
                                        };

                                        this.messageitem.push(array);
                                    }
                                }
                            }

                        } else if (this.navParams.data.number == 2) {
                            let NSEFO;
                            NSEFO = JSON.parse(localStorage.getItem("NSEFO"));
                            if (NSEFO.length > 0) {
                                for (let i = 0; i < NSEFO.length; i++) {

                                    if (split_comma[0] == NSEFO[i].COMPANY_NAME) {
                                        let array = {
                                            Ticker: split_comma[0],
                                            Date: split_comma[1],
                                            Buy: split_comma[2],
                                            Short: split_comma[3],
                                            TGT1: split_comma[4],
                                            TGT2: split_comma[5],
                                            TGT3: split_comma[6],
                                            TSL: split_comma[7],
                                            CLASS: ""
                                        };

                                        this.messageitem.push(array);
                                    }
                                }
                            }
                        } else if (this.navParams.data.number == 3) {
                            let MCX;
                            MCX = JSON.parse(localStorage.getItem("MCX"));

                            if (MCX.length > 0) {
                                for (let i = 0; i < MCX.length; i++) {

                                    if (split_comma[0] == MCX[i].COMPANY_NAME) {
                                        let array = {
                                            Ticker: split_comma[0],
                                            Date: split_comma[1],
                                            Buy: split_comma[2],
                                            Short: split_comma[3],
                                            TGT1: split_comma[4],
                                            TGT2: split_comma[5],
                                            TGT3: split_comma[6],
                                            TSL: split_comma[7],
                                            CLASS: ""
                                        };
                                        this.messageitem.push(array);
                                    }
                                }
                            }
                        }
                    } else {
                        if (this.navParams.data.number == 1) {
                            let NSECASH;
                            NSECASH = JSON.parse(localStorage.getItem("NSECASH"));
                            if (NSECASH.length > 0) {
                                for (let i = 0; i < NSECASH.length; i++) {
                                    if (split_comma[0] == NSECASH[i].EOD_NAME) {
                                        let array = {
                                            Ticker: split_comma[0],
                                            Date: split_comma[1],
                                            Buy: split_comma[2],
                                            Short: split_comma[3],
                                            TGT1: split_comma[4],
                                            TGT2: split_comma[5],
                                            TGT3: split_comma[6],
                                            TSL: split_comma[7],
                                            CLASS: ""
                                        };

                                        this.messageitem.push(array);
                                    }
                                }
                            }

                        } else if (this.navParams.data.number == 2) {
                            let NSEFO;
                            NSEFO = JSON.parse(localStorage.getItem("NSEFO"));
                            if (NSEFO.length > 0) {
                                for (let i = 0; i < NSEFO.length; i++) {
                                    if (split_comma[0] == NSEFO[i].EOD_NAME) {
                                        let array = {
                                            Ticker: split_comma[0],
                                            Date: split_comma[1],
                                            Buy: split_comma[2],
                                            Short: split_comma[3],
                                            TGT1: split_comma[4],
                                            TGT2: split_comma[5],
                                            TGT3: split_comma[6],
                                            TSL: split_comma[7],
                                            CLASS: ""
                                        };

                                        this.messageitem.push(array);
                                    }
                                }
                            }
                        } else if (this.navParams.data.number == 3) {
                            let MCX;
                            MCX = JSON.parse(localStorage.getItem("MCX"));
                            if (MCX.length > 0) {
                                for (let i = 0; i < MCX.length; i++) {
                                    if (split_comma[0] == MCX[i].EOD_NAME) {
                                        let array = {
                                            Ticker: split_comma[0],
                                            Date: split_comma[1],
                                            Buy: split_comma[2],
                                            Short: split_comma[3],
                                            TGT1: split_comma[4],
                                            TGT2: split_comma[5],
                                            TGT3: split_comma[6],
                                            TSL: split_comma[7],
                                            CLASS: ""
                                        };

                                        this.messageitem.push(array);
                                    }
                                }
                            }
                        }
                    }
                    this.messagenewitem = this.messageitem;
                    console.log("final array :", this.messageitem);
                }
            }
        ).catch(err => {

        });
    }

    private Setmessageboarddata() {
        this.messageitem = [];
        this.URLS = JSON.parse(localStorage.getItem("URLS"));

        if (this.navParams.data.selected == 'LIVE') {

            if (this.number == 1) {
                this.callmessageboardapi('NSECASH', 0, this.selectedtime);
                // this.imageOrgUrl = this.URLS.MESSAGE_BOARD.URL_NSECASH_LIVE;
                // if (this.imageOrgUrl.length > 0) {
                //     for (let i = 0; i < this.imageOrgUrl.length; i++) {
                //         this.imageUrl = this.imageOrgUrl[i].LIVE_URL + "csv/MB" + this.selectedtime + ".csv";
                //         // this.getmessageboarddata(this.imageUrl);
                //
                //
                //     }
                // }
            } else if (this.number == 2) {
                this.callmessageboardapi('NSEFO', 0, this.selectedtime);
                // this.imageOrgUrl = this.URLS.MESSAGE_BOARD.URL_NSEFO_LIVE;
                // if (this.imageOrgUrl.length > 0) {
                //     for (let i = 0; i < this.imageOrgUrl.length; i++) {
                //         this.imageUrl = this.imageOrgUrl[i].LIVE_URL + "csv/MB" + this.selectedtime + ".csv";
                //         // this.getmessageboarddata(this.imageUrl);
                //
                //     }
                // }

            } else if (this.number == 3) {
                this.callmessageboardapi('MCX', 0, this.selectedtime);
                // this.imageOrgUrl = this.URLS.MESSAGE_BOARD.URL_MCX_LIVE;
                // if (this.imageOrgUrl.length > 0) {
                //     for (let i = 0; i < this.imageOrgUrl.length; i++) {
                //         this.imageUrl = this.imageOrgUrl[i].LIVE_URL + "csv/MB" + this.selectedtime + ".csv";
                //         // this.getmessageboarddata(this.imageUrl);
                //
                //     }
                // }
            }
        } else if (this.navParams.data.selected == 'EOD') {
            if (this.number == 1) {
                this.callmessageboardapi('NSECASH', 1, this.selectedtime);
                // this.imageOrgUrl = this.URLS.MESSAGE_BOARD.URL_NSECASH_EOD;
                // if (this.imageOrgUrl.length > 0) {
                //     for (let i = 0; i < this.imageOrgUrl.length; i++) {
                //         this.imageUrl = this.imageOrgUrl[i].EOD_MSG_URL + "csv/MBDD.csv";
                //         // this.getmessageboarddata(this.imageUrl);
                //
                //     }
                // }
            } else if (this.number == 2) {
                this.callmessageboardapi('NSEFO', 1, this.selectedtime);
                // this.imageOrgUrl = this.URLS.MESSAGE_BOARD.URL_NSEFO_EOD;
                // if (this.imageOrgUrl.length > 0) {
                //     for (let i = 0; i < this.imageOrgUrl.length; i++) {
                //         this.imageUrl = this.imageOrgUrl[i].EOD_MSG_URL + "csv/MBDD.csv";
                //         // this.getmessageboarddata(this.imageUrl);
                //
                //     }
                // }

            } else if (this.number == 3) {
                this.callmessageboardapi('MCX', 1, this.selectedtime);
                // this.imageOrgUrl = this.URLS.MESSAGE_BOARD.URL_MCX_EOD;
                // if (this.imageOrgUrl.length > 0) {
                //     for (let i = 0; i < this.imageOrgUrl.length; i++) {
                //         this.imageUrl = this.imageOrgUrl[i].EOD_MSG_URL + "csv/MBDD.csv";
                //         // this.getmessageboarddata(this.imageUrl);
                //
                //     }
                // }

            }
        }
    }

    private setautorefresh() {


        if (this.navParams.data.type == 1 || this.navParams.data.type == 0) {
            this.clear_Interval();
            if (this.api.NSECASH_TYPE == "0") {
                // this.imageUrl = this.imageOrgUrl + this.title + ".png" + "?t=" + timeStamp;
                this.set_Interval(this.api.NSECASH_REFRESH_RATE * 1000);
                console.log("NSECASH_REFRESH_RATE", this.api.NSECASH_REFRESH_RATE);
                console.log("imageOrgUrl original", this.imageUrl);
                console.log("NSECASH_TYPE AUTO");
            } else {
                //  this.set_Interval(2000);
                console.log("NSECASH_TYPE Manual")
            }
        } else if (this.navParams.data.type == 2) {
            this.clear_Interval();
            if (this.api.FO_TYPE == "0") {
                this.set_Interval(this.api.FO_REFRESH_RATE * 1000);
                console.log("FO_TYPE AUTO");
                console.log("FO_REFRESH_RATE", this.api.FO_REFRESH_RATE);
                console.log("imageOrgUrl original", this.imageUrl);

            } else {
                //  this.set_Interval(2000);
                console.log("FO_TYPE Manual")
            }
        } else if (this.navParams.data.type == 3) {
            this.clear_Interval();
            if (this.api.MCX_TYPE == "0") {
                this.set_Interval(this.api.MCX_REFRESH_RATE * 1000);
                console.log("MCX_TYPE AUTO");
                console.log("MCX_REFRESH_RATE", this.api.MCX_REFRESH_RATE);
                console.log("imageOrgUrl original", this.imageUrl);
            } else {
                //  this.set_Interval(2000);
                console.log("MCX_TYPE Manual")
            }
        }


    }

    private callmessageboardapi(SYMBOL_TYPE, TYPE, TIME) {
        this.messagenewitem = [];
        this.api.Startloader();
        let data = {
            "SYMBOL_TYPE": SYMBOL_TYPE,
            "TYPE": TYPE,
            "TIME": TIME
        };
        this.api.GETMESSAGE_BOARDDATA2(data).then(data => {

            this.messageitem = data;
            console.log("messageitem", this.messageitem);
            if (this.messageitem.status == 200) {
                this.api.Stoploader();
                for (let i = 0; i < 15; i++) {
                    this.messagenewitem.push(this.messageitem.data[i]);
                    this.message_position = i;

                }
                // console.log(this.messagenewitem);
                // this.messagenewitem = this.messageitem.data;
                console.log("Massageboard NEW data", this.messagenewitem);
            }

        }).catch(err => {

        })
    }

    doInfinite(infiniteScroll) {
        console.log("position", this.message_position);
        console.log('Begin async operation');

        setTimeout(() => {
            this.message_position++;
            let cash_count = (this.message_position + 15);
            for (let i = this.message_position; i < cash_count; i++) {
                if (this.MESSAGE_VAL == 1) {
                    if (this.messagesearchitem[i]) {
                        this.messagenewitem.push(this.messagesearchitem[i]);
                        this.message_position = i;
                    }
                } else {
                    if (this.messageitem.data[i]) {
                        this.messagenewitem.push(this.messageitem.data[i]);
                        this.message_position = i;
                    }
                }
            }
            infiniteScroll.complete();
            console.log("this.messagenewitem", this.messagenewitem);
            console.log('Async operation has ended');


        }, 500);
    }
}
