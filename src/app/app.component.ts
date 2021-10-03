import {Component, ViewChild} from '@angular/core';
import {AlertController, ModalController, Nav, Platform, ToastController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {GlobalProvider} from "../providers/global/global";
import {AppVersion} from "@ionic-native/app-version";
import {Device} from '@ionic-native/device';
import {SignloginPage} from "../pages/signlogin/signlogin";
import {HomePage} from "../pages/home/home";

import {BlogPage} from "../pages/blog/blog";
import {KnowledgeZonePage} from "../pages/knowledge-zone/knowledge-zone";
import {FundamentalCallsPage} from "../pages/fundamental-calls/fundamental-calls";
import {AdvisoryServicesPage} from "../pages/advisory-services/advisory-services";
import {MywalletPage} from "../pages/mywallet/mywallet";
import {AdminMessagesPage} from "../pages/admin-messages/admin-messages";
import {PurchaseHistoryPage} from "../pages/purchase-history/purchase-history";
import {SubscribeplanPage} from "../pages/subscribeplan/subscribeplan";
import {LiveChartsPage} from "../pages/live-charts/live-charts";
import {LoginPage} from "../pages/login/login";
import {SubAdvisoryPage} from "../pages/sub-advisory/sub-advisory";
import {FCM} from "@ionic-native/fcm";
import {LocalNotifications} from "@ionic-native/local-notifications";
import {LiveChatPage} from "../pages/live-chat/live-chat";
import {WatchlistPage} from "../pages/watchlist/watchlist";
import {ProfilesettingPage} from "../pages/profilesetting/profilesetting";
import {ComingsoonPage} from "../pages/comingsoon/comingsoon";
import {HomepagefreePage} from "../pages/homepagefree/homepagefree";
import {ContactusPage} from "../pages/contactus/contactus";
import {CashrssPage} from "../pages/cashrss/cashrss";
import {FuturerssPage} from "../pages/futurerss/futurerss";
import {TradingPage} from "../pages/trading/trading";
import {RssfeedPage} from "../pages/rssfeed/rssfeed";
import {BrokerPage} from "../pages/broker/broker";
import {AutoadvisoryPage} from "../pages/autoadvisory/autoadvisory";
import {Push, PushObject, PushOptions} from "@ionic-native/push";
import {AdminmsgPage} from "../pages/adminmsg/adminmsg";


@Component({

    templateUrl: 'app.html'

})

export class MyApp {

    @ViewChild(Nav) nav: Nav;
    login_details: any;
    rootPage: any;
    apiData;
    items;
    old_app_version;
    NEW_VERSION;
    plandata;
    setingdata;
    planlist;
    planname;
    verifydata;
    userchack;
    purchasedata;

    // pages: Array<{ title: string, component: any , icon: any }>;
    constructor(public platform: Platform, private device: Device, private fcm: FCM, private localNotifications: LocalNotifications,
                public statusBar: StatusBar, public splashScreen: SplashScreen, public api: GlobalProvider, public push: Push,
                public toastCtrl: ToastController, public alertCtrl: AlertController,
                modalCtrl: ModalController, public appVersion: AppVersion) {

        this.platform.ready().then(() => {
            this.splashScreen.show();
            //refersh
            // localStorage.removeItem("login_data");

            const versionNumber = this.appVersion.getVersionNumber().then(data => {

                console.log("ApplicationVersion", data);
                this.api.current_version = data;
                localStorage.setItem('VERSITION', data);

                this.old_app_version = data;
                //  console.log("old_app_version", this.old_app_version);
            });
            console.log("androidid", this.device.uuid);

            this.login_details = JSON.parse(localStorage.getItem("login_data"));
            this.purchasedata = JSON.parse(localStorage.getItem("PURCHASE"));
            console.log("logDetail", this.login_details);
            console.log("purchasedata", this.purchasedata);

            if (this.login_details != null) {
                if (this.login_details.verify == 1) {
                    this.api.title = this.login_details.data.NAME;
                    this.api.Mobile = this.login_details.data.MOBILE;
                    this.api.type = this.login_details.data.REFCODE;
                    this.api.profileimage = this.login_details.data.PROFILE;
                    this.api.isLogin = true;
                    this.getsymboldata();
                    this.getsettingdata();
                    console.log("ALGO_LIVECHART_PURCHSE", api.ALGO_LIVECHART_PURCHSE);


                } else {
                    this.api.isLogin = false;
                    this.rootPage = 'LoginPage';
                    // this.rootPage = 'HomepagefreePage';
                    this.statusBar.styleDefault();
                    this.splashScreen.hide();
                }
            } else {
                this.api.isLogin = false;
                this.rootPage = 'LoginPage';
                // this.rootPage = 'HomepagefreePage';
                this.statusBar.styleDefault();
                this.splashScreen.hide();
            }


            // used for an example of ngFor and navigation
            this.api.pages = [
                {title: 'Dashboard', component: '', icon: "ios-home-outline"},
                {title: 'Subscribe Plan', component: 'SubscribeplanPage', icon: "ios-archive-outline"},
                {title: 'Purchase History', component: 'PurchaseHistoryPage', icon: "ios-document-outline"},
                {title: 'Live Rate', component: '', icon: "ios-radio-outline"},
                {title: 'Message Board', component: 'LiveChartsPage', icon: "ios-desktop-outline"},
                {title: 'Live Chart', component: 'LiveChartsPage', icon: "ios-podium-outline"},
                {title: 'Algo Chart', component: 'LiveChartsPage', icon: "ios-laptop-outline"},
                {title: 'Auto Advisory', component: '', icon: "ios-pulse-outline"},
                {title: 'Admin Message', component: 'AdminmsgPage', icon: "ios-notifications-outline"},
                {title: 'Video', component: 'KnowledgeZonePage', icon: "ios-film-outline"},
                {title: 'Training Video', component: '', icon: "logo-youtube"},
                {title: 'Blog', component: 'BlogPage', icon: "ios-globe-outline"},
                {title: 'RSS Feed', component: 'RssfeedPage', icon: "ios-wifi-outline"},
                // {title: 'Cash Market Data', component: 'CashrssPage', icon: "ios-analytics-outline"},
                // {title: 'Future Market Data', component: 'FuturerssPage', icon: "ios-barcode-outline"},
                {title: 'Trading', component: 'TradingPage', icon: "ios-flash-outline"},
                {title: 'Broker', component: 'BrokerPage', icon: "ios-speedometer-outline"},
                {title: 'Contact Us', component: 'ContactusPage', icon: "ios-call-outline"},//
                {title: 'Whatsapp chat', component: '', icon: "logo-whatsapp"},//
                {title: 'Rate Us', component: "Rating", icon: "ios-star-outline"},
                {title: 'Setting', component: 'SettingPage', icon: "ios-settings-outline"},
                {title: 'Logout ', component: "Logout", icon: "ios-exit-outline"},

            ];
        });
    }

    private getversion() {
        this.appVersion.getVersionNumber().then((data) => {
            console.log("current_version", data);
            this.api.current_version = data;

        });
    }

    openprofile() {
        this.nav.push('ProfilesettingPage');
    }

    showConfirm() {
        let confirm = this.alertCtrl.create({
            title: 'Logout',
            message: 'Are You Sure want Logout ?',
            buttons: [

                {
                    text: 'Cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirm',
                    handler: () => {

                        this.login_details = JSON.parse(localStorage.getItem("login_details"));

                        console.log("logDetail", this.login_details);

                        this.api.logout()

                            .then(data => {

                                console.log(data);

                                localStorage.removeItem("login_details");
                                localStorage.removeItem("SEARCHDATA");
                                this.api.isLogin = false;
                                let rootPage = LoginPage;

                                this.nav.setRoot(rootPage);

                            }).catch();

                    }

                }

            ]


        });

        confirm.present();

    }

    rating() {

        let confirm = this.alertCtrl.create({
            title: ' <img class="imgApp"   src="assets/imgs/g1.png"> <span class="textapp" style="color: #0bca00"> Rate Us </span>',
            subTitle: '<img class="imgApp" style="margin-top: -8px " src="assets/imgs/starr.png"> <img class="imgApp" src="assets/imgs/starr.png"> <img class="imgApp" src="assets/imgs/starr.png"> <img class="imgApp" src="assets/imgs/starr.png"> <img class="imgApp" src="assets/imgs/starr.png">',
            message: 'Rate Us 5 Star',
            buttons: [

                {
                    text: 'ok',
                    handler: () => {

                        window.open(this.api.playstorelink, '_system');

                    }
                }
            ]

        });

        confirm.present();
    }


    openPage(page) {
        clearInterval(this.api.live_rate_invertval);
        // this.nav.setRoot(page.component);
        console.log("pageTitle", page.component);
        if (page.component == "Logout") {
            this.showConfirm();
        } else if (page.component == "Rating") {
            this.rating();
        } else if (page.title == "Subscribe Plan") {
            this.nav.push(page.component, '1');
        } else if (page.title == "Live Rate") {
            if (this.api.LIVE_RATE_PURCHSE == false) {
                this.nav.push('SubscribeplanPage', '3');
            } else {
                this.nav.popToRoot();
            }
            this.nav.push(page.component, '1');
        } else if (page.title == "Message Board") {
            this.nav.push(page.component, 0);
        } else if (page.title == "Live Chart") {
            this.nav.push(page.component, 1);
        } else if (page.title == "Auto Advisory") {
            if (this.api.AUTO_ADVICERY_PURCHSE == false) {
                this.nav.push('SubscribeplanPage', '3');
            } else {
                this.nav.push('AutoadvisoryPage');
            }
        } else if (page.title == "Whatsapp chat") {
            //9228165071 change 07/02/2020 by hasmukhbhai
            let url = "https://api.whatsapp.com/send?phone=+91" + "7041944934" + "&text= i am interested ";
            console.log("Enter hear", url);
            window.open(url, '_system', 'location=yes');
            // window.open("https://api.whatsapp.com/send?phone=+919228165071&text=Hi!", 'location=yes');
        } else if (page.title == "Training Video") {
            //9228165071 change 07/02/2020 by hasmukhbhai
            let url = "https://www.youtube.com/playlist?list=PLswkDt3hPoEeHOzgPYZclf99S-84S9_fN";
            console.log("Enter hear", url);
            window.open(url, '_system', 'location=yes');
            // window.open("https://api.whatsapp.com/send?phone=+919228165071&text=Hi!", 'location=yes');
        }else if (page.title == "Dashboard") {
            this.nav.push('HomepagefreePage',1)
        } else if (page.title == "Algo Chart") {
            if (this.api.ALGO_LIVECHART_PURCHSE == false) {
                this.nav.push('ContactusPage');
            } else {
                this.nav.push(page.component, 3);
            }
        } else {
            this.nav.push(page.component);
        }

        /*   if (page.component == "Logout") {
               this.showConfirm();
           } else if (page.component == "Rating") {
               this.rating();
           } else if (page.title == "Message Board") {
               if (this.api.MESSAGE_BOARD_PURCHSE == false) {
                   this.nav.push('SubscribeplanPage');
               } else {
                   this.nav.push(page.component, 0);
               }
           } else if (page.title == "Live Chart") {
               if (this.api.LIVE_RATE_PURCHSE == false) {
                   this.nav.push('SubscribeplanPage');
               } else {
                   this.nav.push(page.component, 1);
               }

           } else if (page.title == "Auto Advisory") {
               if (this.api.AUTO_ADVICERY_PURCHSE == false) {
                   this.nav.push('SubscribeplanPage');
               } else {
                   this.nav.push(page.component, 2);
               }

           } else if (page.title == "Algo Live Chart") {
               if (this.api.ALGO_LIVECHART_PURCHSE == false) {
                   this.nav.push('SubscribeplanPage');
               } else {
                   this.nav.push(page.component, 3);
               }

           } else {
               this.nav.push(page.component);
           }*/
    }

    presentToast(message123) {
        let toast = this.toastCtrl.create({
            message: message123,
            duration: 3000
        });
        toast.present();
    }

    NotificationSetup() {
        // to check if we have permission
        this.push.hasPermission()
            .then((res: any) => {

                if (res.isEnabled) {
                    console.log('We have permission to send push notifications');
                } else {
                    console.log('We do not have permission to send push notifications');
                }

            });

        // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.

        this.push.createChannel({
            id: "NOTIFICATION_CHANNEL_NAME",
            description: "NOTIFICATION_CHANNEL_NAME",
            // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
            importance: 5
        }).then(() => console.log('Channel created'));


        // Delete a channel (Android O and above)
        this.push.deleteChannel('NOTIFICATION_CHANNEL_NAME').then(() => console.log('Channel deleted'));


        // Return a list of currently configured channels
        this.push.listChannels().then((channels) => console.log('List of channels', channels));

        // to initialize push notifications

        // icon: 'resources/icon.png',
        const options: PushOptions = {
            android: {
                senderID: '238433541074',
                sound: 'true',
                forceShow: 'true',
                clearNotifications: 'false',
                icon: 'sticon'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'true'
            }
        };
        const pushObject: PushObject = this.push.init(options);

        pushObject.on('notification').subscribe((notification: any) => this.notify_handle(notification.additionalData));

        pushObject.on('registration').subscribe((registration: any) => {
            this.api.set_token(registration);
            localStorage.setItem('FIREBASETOKAN', this.api.FirebaseToken);
        });

        pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

        pushObject.on('shareNow').subscribe((registration: any) => console.log('Device registered', registration));


    }

    notify_handle(notification) {

        console.warn("Notificat77ion data", notification);
        if (notification.notifyType == "Blog") {
            this.nav.push('BlogPage', notification);
        } else if (notification.notifyType == "Video") {
            this.nav.push('KnowledgeZonePage', notification);
        } else if (notification.notifyType == "AdminMessage") {
            this.nav.push('AdminmsgPage', notification);
        } else if (notification.notifyType == "NewReferralPayment" || notification.notifyType == "NewPayment") {
            this.nav.push('PurchaseHistoryPage', notification);
        } else if (notification.notifyType == "Advisory") {
            if (this.api.AUTO_ADVICERY_PURCHSE == false) {
                this.nav.push('SubscribeplanPage', '3');
            } else {
                this.nav.push('AutoadvisoryPage',notification);
            }
        } else {
            this.nav.popToRoot()
        }

    }

    private checkuser(name, notification, tempname) {
        // this.api.chacksubscribe(this.login_details.user_data.ID).then(data => {
        //     // this.users = data;
        //     this.plandata = data;
        //     this.planlist = this.plandata.data;
        //     console.log("planlist", this.planlist);
        //     console.log("planDATA", this.plandata);
        //     if (this.plandata.status == '200') {
        //         if (this.planlist.length > -1) {
        //             for (let i = 0; i < this.planlist.length; i++) {
        //                 if (name == this.planlist[i].NAME) {
        //                     console.log(this.planlist[i].ID);
        //                     console.log("this.planname", this.planlist[i].NAME);
        //                     console.log(this.planlist[i].purchase);
        //                     this.planname = this.planlist[i].NAME;
        //                     break;
        //                 } else {
        //                     this.planname = "";
        //                 }
        //             }
        //         }
        //
        //         // this.navCtrl.push('TrialpagePage',name);
        //         if (this.planname == "Live Signal") {
        //
        //             this.nav.push('LiveChartsPage', notification);
        //
        //         } else if (this.planname == "Advisory Services" && tempname == "Advisory Services2") {
        //
        //             this.nav.push('SubAdvisoryPage', {ADVISORYNAME: notification.ADVISORYNAME, ID: notification.ADVISORYID});
        //
        //         } else if (this.planname == "Advisory Services" && tempname == '') {
        //
        //             this.nav.push('AdvisoryServicesPage', notification);
        //
        //         } else if (this.planname == "Knowledge Zone") {
        //
        //             this.nav.push('KnowledgeZonePage', notification);
        //
        //         } else {
        //             this.nav.push('TrialpagePage', name);
        //         }
        //
        //     }
        //     else if (this.plandata.status == '404') {
        //         console.log("Not Data found");
        //         this.nav.push('TrialpagePage', name);
        //     }
        //     // Commented by Dishant. Date: 26-02-2019 11:10:14 Comment: invalid key logout and go loginpage
        //     else if (this.plandata.status == '440') {
        //         this.api.presentToast(this.plandata.message);
        //         localStorage.removeItem("login_data");
        //         this.rootPage = 'LoginPage';
        //     }
        //     // Commented by Dishant. Date: 25-02-2019 16:55:30 Comment: version error open play store
        //     else if (this.plandata.status == '304') {
        //         this.api.presentToast(this.plandata.message);
        //         window.open(this.api.playstorelink, '_system');
        //     }
        //     else if (this.plandata.status == '530') {
        //         this.api.presentToast(this.plandata.message);
        //         this.api.Exitapp();
        //
        //     }
        //     // Commented by Dishant. Date: 25-02-2019 16:57:27 Comment: other massages
        //     else {
        //         this.api.presentToast(this.plandata.message);
        //     }
        //
        // }).catch();
    }

    /*  private NotificationSetup() {
          this.fcm.subscribeToTopic('marketing');

          this.fcm.getToken().then(token => {
              console.log("TOKAN", token);
              this.api.set_token(token);
              localStorage.setItem('FIREBASETOKAN', this.api.FirebaseToken);
          });

          this.fcm.onNotification().subscribe(data => {
              // this.notify_handle(data);
              if (data.wasTapped) {
                  console.log("Received in background", data);
                  this.notify_handle(data);
              } else {
                  console.log("Received in foreground", data);
                  this.localNotifications.schedule({
                      id: data.notId,
                      title: data.title,
                      text: data.body,
                      data: data,
                      smallIcon: 'sticon',
                      attachments: [data.picture],
                  });

              }
          });

          this.localNotifications.on('click').subscribe(data => {
              console.log("Enter Click", data);
              this.notify_handle(data.data);
          });
          this.fcm.onTokenRefresh().subscribe(token => {
              console.log("TOKAN Refresh", token);
              this.api.set_token(token);
              localStorage.setItem('FIREBASETOKAN', this.api.FirebaseToken);
          });

          this.fcm.unsubscribeFromTopic('marketing');
      }*/

    private getsymboldata() {
        this.api.splashscreenapi().then(data => {
            // this.users = data;
            this.plandata = data;
            console.log("planDATA", this.plandata);
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            if (this.plandata.status == '200') {

                localStorage.removeItem("NSECASH");
                localStorage.removeItem("NSEFO");
                localStorage.removeItem("MCX");
                localStorage.removeItem("PURCHASE");
                localStorage.removeItem("ALGO_CHART");
                localStorage.removeItem("URLS");

                localStorage.setItem("NSECASH", JSON.stringify(this.plandata.symbol.NSECASH));
                localStorage.setItem("NSEFO", JSON.stringify(this.plandata.symbol.NSEFO));
                localStorage.setItem("MCX", JSON.stringify(this.plandata.symbol.MCX));
                localStorage.setItem("ALGO_CHART", JSON.stringify(this.plandata.algo_chart));
                localStorage.setItem("URLS", JSON.stringify(this.plandata.urls));

                let datapass = {
                    ALGO_LIVECHART_PURCHSE: this.plandata.ALGO_LIVECHART_PURCHSE,
                    AUTO_ADVICERY_PURCHSE: this.plandata.AUTO_ADVICERY_PURCHSE,
                    LIVE_CHART_PURCHSE: this.plandata.LIVE_CHART_PURCHSE,
                    LIVE_RATE_PURCHSE: this.plandata.LIVE_RATE_PURCHSE,
                    MESSAGE_BOARD_PURCHSE: this.plandata.MESSAGE_BOARD_PURCHSE
                };

                localStorage.setItem("PURCHASE", JSON.stringify(datapass));

                this.api.ALGO_LIVECHART_PURCHSE = this.plandata.ALGO_LIVECHART_PURCHSE;
                this.api.AUTO_ADVICERY_PURCHSE = this.plandata.AUTO_ADVICERY_PURCHSE;
                this.api.LIVE_CHART_PURCHSE = this.plandata.LIVE_CHART_PURCHSE;
                this.api.LIVE_RATE_PURCHSE = this.plandata.LIVE_RATE_PURCHSE;
                this.api.MESSAGE_BOARD_PURCHSE = this.plandata.MESSAGE_BOARD_PURCHSE;

                this.purchasedata = JSON.parse(localStorage.getItem("PURCHASE"));
                this.NotificationSetup();
                if (this.purchasedata != null) {
                    if (this.purchasedata.LIVE_RATE_PURCHSE == false) {
                        this.rootPage = 'HomepagefreePage';
                    } else {
                        this.rootPage = 'HomePage';
                    }
                } else {
                    this.NotificationSetup();
                    this.rootPage = 'HomepagefreePage';
                }

            } else {
                this.NotificationSetup();
                this.rootPage = 'HomepagefreePage';
                this.api.ErrorApi(this.plandata.status, this.plandata.message);
            }
        }).catch();

    }

    private getsettingdata() {
        this.api.settinggetapi().then(data => {
            // this.users = data;
            this.setingdata = data;
            console.log("setingdata", this.setingdata);
            if (this.setingdata.status == '200') {

                this.api.NSECASH_TYPE = this.setingdata.data[0].NSE_TYPE;
                this.api.FO_TYPE = this.setingdata.data[0].FO_TYPE;
                this.api.MCX_TYPE = this.setingdata.data[0].MCX_TYPE;
                this.api.NSECASH_REFRESH_RATE = this.setingdata.data[0].NSE_TIME;
                this.api.FO_REFRESH_RATE = this.setingdata.data[0].FO_TIME;
                this.api.MCX_REFRESH_RATE = this.setingdata.data[0].MCX_TIME;
                this.api.ADVISORY = this.setingdata.data[0].ADVISORY;
                this.api.VIDEO = this.setingdata.data[0].VIDEO;
                this.api.BLOG = this.setingdata.data[0].BLOG;
                this.api.ADMIN = this.setingdata.data[0].ADMIN;

            } else {
                this.api.ErrorApi(this.setingdata.status, this.setingdata.message);
            }
        }).catch();
    }
}

