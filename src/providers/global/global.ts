import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SocialSharing} from "@ionic-native/social-sharing";
import {Screenshot} from "@ionic-native/screenshot";
import {Device} from "@ionic-native/device";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {AlertController, LoadingController, Platform, ToastController} from "ionic-angular";
import {DomSanitizer} from "@angular/platform-browser";
import {HTTP} from "@ionic-native/http";

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
    apiUrl = "https://securetrade.in/pro/api/app/";
    // apiUrl = 'http://192.168.1.3/CODEIGNITER/securetrade-pro/securetrade-pro-api/app/';    //offline
    playstorelink = "https://play.google.com/store/apps/details?id=com.securetrade.pro";
    NSECASH_TYPE;
    FO_TYPE;
    MCX_TYPE;
    NSECASH_REFRESH_RATE;
    FO_REFRESH_RATE;
    MCX_REFRESH_RATE;
    ADVISORY;
    VIDEO;
    BLOG;
    ADMIN;

    FirebaseToken;

    pages: Array<{ title: string, component: any, icon: any }>;
    isLogin = false;
    title;
    Mobile;
    type;
    public profileimage: any;
    platform = '';
    current_version = '';
    api_key = '';
    auth_key = '';
    headerspart: any;
    login_data;

    // live of secureTrade
    // "key": "FDSWKNI60Q",
    // "salt": "DEDWVP6H0U",
    // "pay_mode": "production",

    // test
    // "key": "QD0RH1OSCV",
    // "salt": "XXFFHTVITH",
    // "pay_mode": "test",

    // KEY = 'FDSWKNI60Q';
    // SALT = 'DEDWVP6H0U';
    // pay_mode = "production";

    // KEY= 'QD0RH1OSCV';
    // SALT = 'XXFFHTVITH';
    // pay_mode = "test";
    loading;
    ALGO_LIVECHART_PURCHSE: boolean = false;
    AUTO_ADVICERY_PURCHSE: boolean = false;
    LIVE_CHART_PURCHSE: boolean = false;
    LIVE_RATE_PURCHSE: boolean = false;
    MESSAGE_BOARD_PURCHSE: boolean = false;

    symboldata;
    watch_list;
    Advisorywatch_list;
    watch_type = "DEFAULT";
    advisorywatch_type = "PRIVATE";
    watch_postion = 0;
    advisorywatch_postion = 0;
    WATCHLISTDATA;
    AUTOADVISORYWATCHLISTDATA;
    SELECTEDDATA;
    OPTIONSELECTEDDATA;
    WATCHLISTNAME;
    AUTOADVISORYWATCHLISTNAME;
    WATCHLISTID;
    AUTOADVISORYWATCHLISTID;
    live_rate_invertval;


    // LIVECHARTIMAGEEXT = '.jpg';
    // ALGOCHARTIMAGEEXT = '.jpg';

    LIVECHARTIMAGEEXT = '.png';
    ALGOCHARTIMAGEEXT = '.png';

    NEWWATCHLISTADD;

    constructor(public http: HTTP, public device: Device, private iab: InAppBrowser, public platformos: Platform,
                public sanitizer: DomSanitizer, public toastCtrl: ToastController, public loadingCtrl: LoadingController,
                public alertCtrl: AlertController) {

        console.log("WATCHLIST_POSITION", JSON.parse(localStorage.getItem('WATCHLIST_POSITION')));
        console.log("WATCHLIST_TYPE", JSON.parse(localStorage.getItem('WATCHLIST_TYPE')));
        if (JSON.parse(localStorage.getItem('WATCHLIST_POSITION')) != undefined) {
            this.watch_postion = JSON.parse(localStorage.getItem('WATCHLIST_POSITION'));
            this.watch_type = JSON.parse(localStorage.getItem('WATCHLIST_TYPE'));
        }
    }

    Startloader() {
        this.loading = this.loadingCtrl.create({content: "please wait...",enableBackdropDismiss:true,dismissOnPageChange:true});
        this.loading.present();
    }

    Openurl(link) {
        const browser = this.iab.create(link, '_self', 'hardwareback=yes,hideurlbar=yes,mediaPlaybackRequiresUserAction=yes,toolbarcolor=#f4f4f4,hidenavigationbuttons=yes');
        browser.show();
    }

    safeurl(urllink) {
        let url = this.sanitizer.bypassSecurityTrustResourceUrl(urllink);
        return url
    }

    ErrorApi(status, message) {
        if (status == 404) {
            this.presentToast(message);
            this.Stoploader();
            // localStorage.removeItem("login_data");
            // this.Exitapp();
        }
        // Commented by Dishant. Date: 26-02-2019 11:10:14 Comment: invalid key logout and go datapage
        else if (status == 440) {
            this.presentToast(message);
            localStorage.removeItem("login_data");
            this.Exitapp();
            // window.location.reload();
        }
        // Commented by Dishant. Date: 25-02-2019 16:55:30 Comment: version error open play store
        else if (status == 304) {
            this.presentToast(message);
            window.open(this.playstorelink, '_system');
        }
        // Commented by Dishant. Date: 25-02-2019 16:56:28 Comment: os version error exit app
        else if (status == 530) {
            this.presentToast(message);
            this.Exitapp();

        }
        // Commented by Dishant. Date: 25-02-2019 16:57:27 Comment: other massages
        else {
            this.presentToast(message);
        }
    }

    Stoploader() {
        this.loading.dismiss();
    }

    public getheaderspart() {
        this.gethederdata();
        // this.headerspart = {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json',
        //         'Platform': this.platform,
        //         'Current-Version': localStorage.getItem('VERSITION'),
        //         'Api-Key': this.api_key,
        //         'Auth-Key': this.auth_key,
        //         'Device-Id': this.device.uuid,
        //         'Token-Id': localStorage.getItem('FIREBASETOKAN'),
        //         'Device-Model': this.device.manufacturer + " " + this.device.model,
        //         'Os-Version': this.device.version
        //     })
        // };
        ////native_http
        this.headerspart = {
            'Content-Type': 'application/json',
            'Platform': this.platform,
            'Current-Version': (localStorage.getItem('VERSITION') == null) ? "" : localStorage.getItem('VERSITION'),
            'Api-Key': this.api_key,
            'Auth-Key': this.auth_key,
            'Device-Id': this.device.uuid,
            'Token-Id': (localStorage.getItem('FIREBASETOKAN') == null) ? "" : localStorage.getItem('FIREBASETOKAN'),
            'Device-Model': this.device.manufacturer + " " + this.device.model,
            'Os-Version': this.device.version
        };

        // this.headerspart = {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json',
        //         'Platform': "this.platform",
        //         'Current-Version': "this.current_version",
        //         'Api-Key': "this.api_key",
        //         'Auth-Key': "this.auth_key",
        //         'Device-Id': "this.device.uuid",
        //         'Token-Id': "this.FirebaseToken",
        //         'Device-Model': "this.device.manufacturer this.device.model",
        //         'Os-Version': "this.device.version"
        //     })
        // };
        console.log("headers part", this.headerspart);
        return this.headerspart;
    }

    public getheaderspart2() {
        this.gethederdata();

        this.headerspart = {
            'Content-Type': 'application/json',
            'Platform': this.platform,
            'Current-Version': (localStorage.getItem('VERSITION') == null) ? "" : localStorage.getItem('VERSITION'),
            'Api-Key': this.api_key,
            'Auth-Key': this.auth_key,
            'Device-Id': this.device.uuid,
            'Token-Id': (localStorage.getItem('FIREBASETOKAN') == null) ? "" : localStorage.getItem('FIREBASETOKAN'),
            'Device-Model': this.device.manufacturer + " " + this.device.model,
            'Os-Version': this.device.version
        };

        console.log("headers part", this.headerspart);
        return this.headerspart;
    }

    private gethederdata() {
        console.log("Device Details", this.device);
        if (this.device.platform == "Android") {
            this.platform = '2';
        } else if (this.device.platform == "Ios") {
            this.platform = '3';
        }
        this.login_data = JSON.parse(localStorage.getItem("login_data"));
        console.log("Local Data", this.login_data);

        if (this.login_data == null || this.login_data == "" || this.login_data == "null") {

        } else {
            console.log("Enter If");
            if (this.login_data.data.AUTH_KEY == undefined && this.login_data.data.API_KEY == undefined) {
                this.auth_key = '';
                this.api_key = '';
            } else {
                this.auth_key = this.login_data.data.AUTH_KEY;
                this.api_key = this.login_data.data.API_KEY;
            }
            console.log("Auth key", this.auth_key);
            console.log("api key", this.api_key);
        }
    }

    GETMESSAGE_BOARDDATA(URL) {
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.get(URL, {}, {})
                .then(data => {
                    console.log("api GETMESSAGE_BOARDDATA data", data);
                    let success_data = data;
                    resolve(success_data.data);
                }, (err) => {
                    console.log("api GETMESSAGE_BOARDDATA err", err);
                    reject(err);
                });
        });

    }

    deletesymbal(data) {
        console.log("login_data", JSON.stringify(data));
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + '/watchlist/single_symbol_delete', data, this.getheaderspart2())
                .then(data => {
                    let success_data = data;
                    console.log("api deletesymbal data", success_data);
                    resolve(JSON.parse(success_data.data));
                }).catch((err) => {
                console.log("api login err", err);
                reject(err);
            });
        });

    }

    GETMESSAGE_BOARDDATA2(data) {
        console.log('NEW preview data', data);
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'home-screen/algo_message_bord', data, this.getheaderspart2())
                .then(data => {
                    console.log("api GETMESSAGE_BOARDDATA data", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    console.log("api GETMESSAGE_BOARDDATA err", err);
                    reject(err);
                });
        });

    }

    watchlistsave(WATCHLIST_TYPE, NAME, CASH_SYMBOL, FUTURE_SYMBOL, OPTION_SYMBOL, MCX_SYMBOL) {

        let data = {
            "WATCHLIST_MAIN_TYPE": '0',
            "WATCHLIST_TYPE": WATCHLIST_TYPE,
            "NAME": NAME,
            "CASH_SYMBOL": CASH_SYMBOL,
            "FUTURE_SYMBOL": FUTURE_SYMBOL,
            "OPTION_SYMBOL": OPTION_SYMBOL,
            "MCX_SYMBOL": MCX_SYMBOL,
        };
        console.log("preview data", data);
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'watchlist/save', data, this.getheaderspart())
                .then(data => {
                    console.log("api version data", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    console.log("api version err", err);
                    reject(err);
                });
        });

    }

    watchlistupdate(WATCHLIST_TYPE, NAME, CASH_SYMBOL, FUTURE_SYMBOL, ID, OPTION_SYMBOL, MCX_SYMBOL) {

        let data = {
            "WATCHLIST_MAIN_TYPE": '0',
            "WATCHLIST_TYPE": WATCHLIST_TYPE,
            "NAME": NAME,
            "WATCHLISTID": ID,
            "CASH_SYMBOL": CASH_SYMBOL,
            "FUTURE_SYMBOL": FUTURE_SYMBOL,
            "OPTION_SYMBOL": OPTION_SYMBOL,
            "MCX_SYMBOL": MCX_SYMBOL,
        };
        console.log("preview data", data);
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'watchlist/update', data, this.getheaderspart())
                .then(data => {
                    console.log("api version data", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    console.log("api version err", err);
                    reject(err);
                });
        });

    }

    advisorywatchlistsave(WATCHLIST_TYPE, NAME, CASH_SYMBOL, FUTURE_SYMBOL, MCX_SYMBOL) {

        let data = {
            "WATCHLIST_MAIN_TYPE": '1',
            "WATCHLIST_TYPE": WATCHLIST_TYPE,
            "NAME": NAME,
            "CASH_SYMBOL": CASH_SYMBOL,
            "FUTURE_SYMBOL": FUTURE_SYMBOL,
            "MCX_SYMBOL": MCX_SYMBOL
        };
        console.log("preview data", data);
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'watchlist/advisory_save', data, this.getheaderspart())
                .then(data => {
                    console.log("api version data", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    console.log("api version err", err);
                    reject(err);
                });
        });

    }

    advisorywatchlistupdate(WATCHLIST_TYPE, NAME, CASH_SYMBOL, FUTURE_SYMBOL, ID, OPTION_SYMBOL, MCX_SYMBOL) {

        let data = {
            "WATCHLIST_MAIN_TYPE": '1',
            "WATCHLIST_TYPE": WATCHLIST_TYPE,
            "NAME": NAME,
            "WATCHLISTID": ID,
            "CASH_SYMBOL": CASH_SYMBOL,
            "FUTURE_SYMBOL": FUTURE_SYMBOL,
            "OPTION_SYMBOL": OPTION_SYMBOL,
            "MCX_SYMBOL": MCX_SYMBOL,
        };
        console.log("preview data", data);
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'watchlist/advisory_update', data, this.getheaderspart())
                .then(data => {
                    console.log("api version data", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    console.log("api version err", err);
                    reject(err);
                });
        });

    }

    oprionselecteddata(SYMBOL, SYMBOL_TYPE) {

        let data = {
            "SYMBOL": SYMBOL,
            "SYMBOL_TYPE": SYMBOL_TYPE
        };
        console.log("preview data", data);
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'home-screen/option_symbol_details', data, this.getheaderspart())
                .then(data => {
                    console.log("api version data", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    console.log("api version err", err);
                    reject(err);
                });
        });

    }

    Watchlistdelete(id) {

        let data = {
            "WATCHLISTID": id
        };
        console.log("preview data", data);
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'watchlist/delete', data, this.getheaderspart())
                .then(data => {
                    console.log("api version data", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    console.log("api version err", err);
                    reject(err);
                });
        });

    }

    verifyVersion(deviceid, userid) {


        let data = {
            "ANDROIDDEVICEID": deviceid,
            "DEVICEID": localStorage.getItem("FIREBASETOKAN"),   //after notification implemented then remove "this.device.uuid"
            "UID": userid,
            "ACTION": "version"
        };
        console.log("preview data", data);
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'api.php', data, this.getheaderspart())
                .then(data => {
                    console.log("api version data", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    console.log("api version err", err);
                    reject(err);
                });
        });
    }

    knowledgeZonefree() {

        let data = {
            "VIDEOTYPE": "Free Video",
            "ACTION": "video_list"
        };

        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'api.php', data, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    reject(err);
                });
        });
    }

    knowledgeZonpremiume() {

        let data = {
            "VIDEOTYPE": "Premium Video",
            "ACTION": "video_list"
        };
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'api.php', data, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    reject(err);
                });
        });
    }

    settinggetapi() {

        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'customer/setting_list', {}, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("splashscreenapi", data);
                }, (err) => {
                    console.log("splashscreenapi", err);
                    reject(err);
                });
        });
    }

    homepageapi() {

        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'home-screen', {}, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("splashscreenapi", data);
                }, (err) => {
                    console.log("splashscreenapi", err);
                    reject(err);
                });
        });
    }

    advisorylistapi() {

        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'watchlist/advisory_watchlist_list', {}, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("advisorylistapi", data);
                }, (err) => {
                    console.log("advisorylistapi", err);
                    reject(err);
                });
        });
    }

    advisoryshowlistapi(data) {
        console.log("preview data", data);
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'watchlist/algo_advisory_watchlist_list', data, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("advisorylistapi", data);
                }, (err) => {
                    console.log("advisorylistapi", err);
                    reject(err);
                });
        });
    }

    advisoryshowUPDATEapi(data) {
        console.log("preview data", data);
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'watchlist/advisory_preference_update', data, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("UODATE", data);
                }, (err) => {
                    console.log("UPDATE", err);
                    reject(err);
                });
        });
    }

    advisorydatalistapi() {

        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'watchlist/advisory_watchlist_list', {}, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("advisorylistapi", data);
                }, (err) => {
                    console.log("advisorylistapi", err);
                    reject(err);
                });
        });
    }

    splashscreenapi() {

        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'home-screen/splashscreen', {}, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("splashscreenapi", data);
                }, (err) => {
                    console.log("splashscreenapi", err);
                    reject(err);
                });
        });
    }

    videocategory() {

        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'mst/product_category/app_category_value', {}, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("videocategory", data);
                }, (err) => {
                    console.log("videocategory", err);
                    reject(err);
                });
        });
    }

    videocategorydetails(CATEGORY_ID) {

        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            let data = {
                "CATEGORY_ID": CATEGORY_ID
            };
            this.http.post(this.apiUrl + 'video/video_list', data, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("videocategorydetails", data);
                }, (err) => {
                    console.log("videocategorydetails", err);
                    reject(err);
                });
        });
    }

    videocategorydetailslink(VIDEO_ID) {

        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            let data = {
                "VIDEO_ID": VIDEO_ID
            };
            this.http.post(this.apiUrl + 'video/video_list', data, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("videocategorydetails link", data);
                }, (err) => {
                    console.log("videocategorydetails link", err);
                    reject(err);
                });
        });
    }

    news() {

        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'blog/app_blog_list', {}, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("free_vedio", data);
                }, (err) => {
                    console.log("newsList", err);
                    reject(err);
                });
        });
    }

    rssfeed(TYPE) {

        let data = {
            "TYPE": TYPE
        };

        console.log("Pass data", JSON.stringify(data));
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'home-screen/rss_feeds', data, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("free_vedio", data);
                }, (err) => {
                    console.log("newsList", err);
                    reject(err);
                });
        });
    }

    fundamentalCall() {

        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + 'api.php?type=fundamentalcallList', {}, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));

                    console.log("premium_vedio", data);

                    console.log("fundamental", data);
                }, (err) => {
                    reject(err);
                });
        });
    }

    advisoryCategory() {

        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + 'api.php?type=advisorycategoryList', {}, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("advisory", data);
                }, (err) => {
                    reject(err);
                });
        });
    }

    advisorySubList(ADVISORYNAME) {

        let data = {

            "ADVISORYNAME": ADVISORYNAME,
            "ACTION": "advisory_list",
            "TYPE": "past"
        };

        console.log(data);

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'api.php', data, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("id", data);
                }, (err) => {
                    reject(err);
                });
        });
    }

    advusoryCuttentList(ADVISORYNAME) {

        let data = {

            "ADVISORYNAME": ADVISORYNAME,
            "ACTION": "advisory_list",
            "TYPE": "current"
        };

        console.log(data);

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'api.php', data, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("id", data);
                }, (err) => {
                    reject(err);
                });
        });
    }

    //Display user wallet list and this fun. used in Mywallwet.ts file
    walletListDisplay(id) {

        let data = {

            "USERID": id,
            "ACTION": "wallet_balance"
        }

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'api.php', data, this.getheaderspart())
                .then(data => {


                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("datawallet", data);
                }, (err) => {
                    reject(err);
                });
        });
    }

    walletHistry(id) {

        let data = {

            "USERID": id,
            "ACTION": "wallet_list"
        }

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'api.php', data, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("datawallet123", data);
                }, (err) => {
                    reject(err);
                });
        });
    }


    signup(name, email, city, refcode, password) {

        let data = {

            "NAME": name,
            "EMAIL": email,
            "CITY": city,
            "REFFERED_CODE": refcode,
            "PROFILE": "",
            "PASSWORD": password,
            "TYPE": 1

        };
        console.log('previewdata', JSON.stringify(data));

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'customer/app_update_profile', data, this.getheaderspart())
                .then(data => {
                    console.log("register", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));


                }, (err) => {
                    reject(err);
                });
        });

    }


    login(username) {

        let data = {
            "MOBILE": username,
        };
        let url = this.apiUrl + 'customer/app-user-login';
        let headers = this.getheaderspart();
        console.log("login url", url);
        console.log("login data", JSON.stringify(data));
        console.log("login Header", JSON.stringify(headers));
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(url, data, headers)
                .then(data => {
                    console.log("success login", data);

                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                })
                .catch(err => {
                    console.log("Error login", err);
                    reject(err);
                });
        });

    }

    purchaseHistory() {

        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'purchase/app_purchase_plan_list', {}, this.getheaderspart())
                .then(data => {
                    console.log("success purchase", data);

                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                })
                .catch(err => {
                    console.log("Error purchase", err);
                    reject(err);
                });
        });

    }

    purchaseHistorydetails(PURCHASE_NO) {
        let data = {
            "PURCHASE_NO": PURCHASE_NO
        };

        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'purchase/app_purchase_plan_list_details', data, this.getheaderspart())
                .then(data => {
                    console.log("success purchase", data);

                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                })
                .catch(err => {
                    console.log("Error purchase", err);
                    reject(err);
                });
        });

    }

    adminMassage() {

        let data = {};

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'admin_message/app_admin_msg_list', data, this.getheaderspart())
                .then(data => {
                    console.log("login", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    reject(err);
                });
        });
    }


    forgotPassword(mobileNo) {

        let data = {

            "mobileno": mobileNo,
            "ACTION": "forgotpass"
        }

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'api.php', data, this.getheaderspart())
                .then(data => {
                    console.log("sdf", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    reject(err);
                });
        });
    }

    verifyOTP(OTP) {

        let data = {
            "OTP": OTP,
        };

        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'customer/app_verify_user', data, this.getheaderspart())
                .then(data => {
                    console.log("verifyOTP", JSON.stringify(data));
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    reject(err);
                });
        });
    }


    Resendotpapi() {

        let data = {};
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'customer/app_resend_otp', data, this.getheaderspart())
                .then(data => {
                    console.log("verifyOTP", JSON.stringify(data));
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    reject(err);
                });
        });
    }


    logout() {

        let data = {};
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'customer/app_logout', data, this.getheaderspart())
                .then(data => {
                    console.log("verifyOTP", JSON.stringify(data));
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    reject(err);
                });
        });
    }


    changePassword(Id, chgpassword, action) {

        let data = {

            "CHGID": Id,
            "CHGPASSWORD": chgpassword,
            "ACTION": action

        }

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'api.php', data, this.getheaderspart())
                .then(data => {
                    console.log("login", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    reject(err);
                });
        });
    }

    VerifyPayment(merchantId) {

        let data = {
            "PAYMENTNO": merchantId,
        }

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'purchase/app_verify_payment', data, this.getheaderspart())
                .then(data => {
                    // console.log("login", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    reject(err);
                });
        });

    }

    GetWalletBalance(UID, action) {


        let data = {

            "USERID": UID,
            "ACTION": action

        }

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'api.php', data, this.getheaderspart())
                .then(data => {
                    console.log("getbalance", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    reject(err);
                });
        });

    }

    userprofile() {

        let data = {}

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'customer/app_profile_details', data, this.getheaderspart())
                .then(data => {
                    console.log("userprofile", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));


                }, (err) => {
                    reject(err);
                });
        });
    }

    profileUpload(uname, uemail, ucity, uploadphoto, TYPE) {


        let data = {
            "NAME": uname,
            "EMAIL": uemail,
            "CITY": ucity,
            "REFFERED_CODE": "",
            "PROFILE": uploadphoto,
            "TYPE": TYPE
        };

        console.log("profile preview", JSON.stringify(data));
        console.log("URL", this.apiUrl + 'customer/app_update_profile');
        console.log("getheaderspart preview", JSON.stringify(this.getheaderspart()));
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'customer/app_update_profile', data, this.getheaderspart())
                .then(data => {
                    console.log("register", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));


                }, (err) => {
                    reject(err);
                });
        });
    }

    purchasePlan(MONTH) {
        let data = {
            "MONTH": MONTH
        }
        console.log("Preview data", data);
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'subscription/subscription', data, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("purchaseList", data);
                }, (err) => {
                    console.log("purchseList123", err);
                    reject(err);
                });
        });


    }

    couponcodeapply(COUPONCODE, TOTALAMOUNT) {
        let data = {
            "COUPONCODE": COUPONCODE,
            "TOTALAMOUNT": TOTALAMOUNT
        };
        console.log("Preview data", data);
        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'coupon-code/app_couponcode_verify', data, this.getheaderspart())
                .then(data => {
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                    console.log("couponcodeapply", data);
                }, (err) => {
                    console.log("couponcodeapply", err);
                    reject(err);
                });
        });


    }

    submitPlan(SUBSCRIBE_FOR, COUPONCODE, TOTALAMOUNT, PLANID) {

        let data = {
            "PLANID": PLANID,
            "SUBSCRIBE_FOR": SUBSCRIBE_FOR,
            "COUPONCODE": COUPONCODE,
            "TOTALAMOUNT": TOTALAMOUNT
        }

        console.log("requestdata", JSON.stringify(data));

        return new Promise((resolve, reject) => {
            this.http.setDataSerializer("json");
            this.http.post(this.apiUrl + 'purchase/purchase', data, this.getheaderspart())
                .then(data => {
                    console.log("submitPlan", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    reject(err);
                });
        });
    }

    submitQuery(uid, query, action) {

        let data = {

            "USERID": uid,
            "QUERY": query,
            "ACTION": action

        }

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'api.php', data, this.getheaderspart())
                .then(data => {
                    console.log("query", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    reject(err);
                });
        });
    }

    kycSubmit(id, adharimage, panimage, action) {

        let data = {

            "USERID": id,
            "AADHARIMAGE": adharimage,
            "PANIMAGE": panimage,
            "ACTION": action
        };

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'api.php', data, this.getheaderspart())
                .then(data => {
                    console.log("kycSubmit", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    reject(err);
                });
        });
    }

    public getKYCDocument(ID: any, s: string) {

        let data = {

            "UID": ID,
            "ACTION": s
        }

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'api.php', data, this.getheaderspart())
                .then(data => {
                    console.log("documentList", data);
                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    reject(err);
                });
        });
    }

    SharescrrenshotContent(screenshot: Screenshot, socialSharing: SocialSharing, screen: any, playstoreurl: any) {
        let login_details = JSON.parse(localStorage.getItem("login_data"));

        let share_string = "SignUp through Referral Code " + login_details.data.MY_REFFERED_CODE + "\n\n";

        screenshot.URI(50).then(res => {
            screen = res.URI;
            socialSharing.share(share_string + playstoreurl, "null", screen, null);
        });
    }

    getNotificationSettingData(UID: any, s: string) {

        let data = {

            "USERID": UID,
            "ACTION": s

        }

        console.log("requestdata", data);

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'api.php', data, this.getheaderspart())
                .then(data => {

                    console.log("SettingData", data);

                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    reject(err);
                });
        });

    }

    updatesetting(UID: any, ADVISROYSELECTED: any, NEWSELECTED: any, VIDEOSELECTED: any, WALLETSELECTED: any,
                  FCALSSSELECTED: any, ADMINNOTISELECTED: any, NSECASHTYPE: any, NSETEXT: string,
                  FOTYPE: any, FOTEXT: string, FOTEXT2: any, MCXTYPE: any, MCXTEXT: string, s: string, BLOG: any) {

        let data = {

            // "UID": UID,
            // "ADVISORY": ADVISROYSELECTED,
            // "NEWS": NEWSELECTED,
            // "VIDEO": VIDEOSELECTED,
            // "WALLET": WALLETSELECTED,
            // "FCALLS": FCALSSSELECTED,
            // "ADMINNOTI": ADMINNOTISELECTED,
            // "NSELOADTYPE": NSECASHTYPE,
            // "NSELOADSEC": NSETEXT,
            // "FOLOADTYPE": FOTYPE,
            // "FOLOADSEC": FOTEXT,
            // "MCXLOADTYPE": MCXTYPE,
            // "MCXLOADSEC": MCXTEXT,
            // "ACTION": s
            "ADVISORY": ADVISROYSELECTED,
            "VIDEO": VIDEOSELECTED,
            "BLOG": BLOG,
            "ADMIN": ADMINNOTISELECTED,
            "NSE_TYPE": NSECASHTYPE,
            "NSE_TIME": NSETEXT,
            "FO_TYPE": FOTYPE,
            "FO_TIME": FOTEXT,
            "MCX_TYPE": MCXTYPE,
            "MCX_TIME": MCXTEXT
        };

        console.log("requestdata", data);
        console.log("requestdata", JSON.stringify(data));

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'customer/app_setting', data, this.getheaderspart())
                .then(data => {

                    console.log("updatesetting", data);

                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    reject(err);
                });
        });
    }

    chackthen(ID) {
        let data = {
            "USERID": ID,
            "ACTION": "menu_assign"
        }


        console.log("plandata preview", data);

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'api.php', data, this.getheaderspart())
                .then(data => {

                    console.log("plandata", data);

                    let success_data = data;
                    resolve(JSON.parse(success_data.data));
                }, (err) => {
                    reject(err);
                });
        });
    }

    set_token(registration) {
        this.FirebaseToken = registration.registrationId;
        console.log("this.api.TOKEN_ID", this.FirebaseToken);
    }

    Exitapp() {
        setTimeout(() => {
            this.platformos.exitApp();
        }, 1000)
    }

    Exitpopapp() {
        const prompt = this.alertCtrl.create({
            message: "Do You want Exit App?",
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: data => {
                        console.log('Saved clicked', data);
                        setTimeout(() => {
                            this.platformos.exitApp();
                        }, 100)
                    }
                }
            ]
        });
        prompt.present();
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
}
