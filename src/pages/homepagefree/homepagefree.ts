import {Component, ViewChild} from '@angular/core';
import {IonicPage, Navbar, NavController, NavParams, Platform} from 'ionic-angular';
import {SubscribeplanPage} from "../subscribeplan/subscribeplan";
import {LiveChatPage} from "../live-chat/live-chat";
import {ComingsoonPage} from "../comingsoon/comingsoon";
import {BlogPage} from "../blog/blog";
import {KnowledgeZonePage} from "../knowledge-zone/knowledge-zone";
import {TradingPage} from "../trading/trading";
import {AdminMessagesPage} from "../admin-messages/admin-messages";
import {FuturerssPage} from "../futurerss/futurerss";
import {CashrssPage} from "../cashrss/cashrss";
import {RssfeedPage} from "../rssfeed/rssfeed";
import {GlobalProvider} from "../../providers/global/global";
import {BrokerPage} from "../broker/broker";
import {AutoadvisoryPage} from "../autoadvisory/autoadvisory";

/**
 * Generated class for the HomepagefreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-homepagefree',
    templateUrl: 'homepagefree.html',
})
export class HomepagefreePage {

    type;
    @ViewChild(Navbar) navBar: Navbar;

    constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public globalApi: GlobalProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomepagefreePage');
    }

    ionViewDidEnter() {
        this.platform.registerBackButtonAction((data) => {
            console.log('Back data', this.navCtrl.getActive(true));
            if (this.navCtrl.getActive(true).id == "HomepagefreePage") {
                if (this.navParams.data == {}) {
                    this.globalApi.Exitpopapp();
                } else {
                    this.navCtrl.pop();
                }

            } else {
                this.navCtrl.pop();
            }

        });
    }

    opensubscribe(type, page) {
        if (page == 1) {
            if (this.globalApi.LIVE_RATE_PURCHSE == false) {
                this.navCtrl.push('SubscribeplanPage', type);
            } else {
                this.navCtrl.popToRoot();
            }
        }
        if (page == 2) {
            if (this.globalApi.MESSAGE_BOARD_PURCHSE == false) {
                this.navCtrl.push('SubscribeplanPage', type);
            } else {
                this.navCtrl.push('LiveChartsPage', 0);
            }
        }
        if (page == 3) {
            if (this.globalApi.LIVE_CHART_PURCHSE == false) {
                this.navCtrl.push('SubscribeplanPage', type);
            } else {
                this.navCtrl.push('LiveChartsPage', 1);
            }
        }
        if (page == 4) {
            if (this.globalApi.AUTO_ADVICERY_PURCHSE == false) {
                this.navCtrl.push('SubscribeplanPage', type);
            } else {
                this.navCtrl.push('AutoadvisoryPage');
            }
        }
        if (page == 5) {
            this.navCtrl.push('SubscribeplanPage', type);
        }

    }

    chartSelected(type) {
        if (type == 2) {
            if (this.globalApi.AUTO_ADVICERY_PURCHSE == false) {
                this.navCtrl.push('SubscribeplanPage', '1');
            } else {
                this.navCtrl.push('AutoadvisoryPage');
            }

        } else {
            this.navCtrl.push('LiveChartsPage', type);
        }
    }

    openblog() {
        this.navCtrl.push('BlogPage');
    }

    openvideo() {
        this.navCtrl.push('KnowledgeZonePage')
    }

    openbroker() {
        this.navCtrl.push('BrokerPage')
    }

    opentrading() {
        this.navCtrl.push('TradingPage');
    }

    openrssfeed() {
        this.navCtrl.push('RssfeedPage');
    }

    opencash() {
        this.navCtrl.push('CashrssPage');
    }

    openfuture() {
        this.navCtrl.push('FuturerssPage');
    }
}
