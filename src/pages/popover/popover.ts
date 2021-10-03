import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {SocialSharing} from "@ionic-native/social-sharing";
import {Screenshot} from "@ionic-native/screenshot";

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

    screen: any;
    showpopover: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public api: GlobalProvider,
    private socialSharing: SocialSharing,
    private screenshot: Screenshot,
    public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

    ionViewWillEnter2() {
        // timeout would be a http request in a real application
        window.setTimeout(() => {
            this.api.SharescrrenshotContent(this.screenshot, this.socialSharing, this.screen, this.api.playstorelink);
        }, 1000);
    }

    shareScreenshot() {
        this.showpopover = false;
        this.ionViewWillEnter2();

    }
}
