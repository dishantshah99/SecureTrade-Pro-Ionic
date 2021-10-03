import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SubscribeplanPage} from "../subscribeplan/subscribeplan";
import {CallNumber} from "@ionic-native/call-number";

/**
 * Generated class for the TrialpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trialpage',
  templateUrl: 'trialpage.html',
})
export class TrialpagePage {
planname;

live_chart_info = "NSE Cash , Futures and MCX Live Charts <br> Premier Buy sell Signal Software <br> Data Will be updated 15-30 second Delayed <br> Exclusive Training will be given and videos will be given <br> Be updated with Secure Trade/online <br> Originally Software Price is 45000 annually <br> 5 min Charts will be display with 15 -30 sec delayed <br> No Data Cost , Software Cost , No VPS Cost <br> Cost Effective Advance Day Trading Charts";

Advisory_service_info = "Advisory Call <br> Equity Cash <br> Futures Call <br> BTST/Positional and Swing Call <br> Option Call <br> Kindly Follow Strict Stop Loss if cant then do nott Trade <br> Pure Technical Analysis Charts base Call <br> Its come with Logic Why Buy or Sell with Chart Images <br> Live Chat with Expert real time <br> No SMS only real time Alert will be provided";

knowledge_zone_info = "Learning Zone <br> Tutorials will be provided to Monthly Basis <br> Topic will be decided by Admin but related to market and trading only <br> It is strictly confidential <br> Will be focus on Option Trading , Money Management , Trading Psychology etc <br> Images , Video’s will be given <br> Trading Journal will be provided on demand basis"

  plantext;
  constructor(public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber) {
    this.planname = navParams.data;
      console.log("Plan name",this.planname);

    if (this.planname == "Live Signal"){
    this.plantext = this.live_chart_info;
    }else if(this.planname == "Advisory Services"){
    this.plantext = this.Advisory_service_info;
    }else if(this.planname == "Knowledge Zone"){
    this.plantext = this.knowledge_zone_info;
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrialpagePage');
  }

    callus() {
this.launchDialer("7414966199")
    }
    launchDialer(n) {
        window.open("tel:" + n);
        this.callNumber.callNumber(n, true)
            .then(() => console.log('Launched dialer!'))

            .catch(() => console.log('Error launching dialer'));

        console.log("dialNo", this.callNumber);
    }
    subsribe() {
        this.navCtrl.push('SubscribeplanPage')
    }
}
