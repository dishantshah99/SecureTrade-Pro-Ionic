import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

/**
 * Generated class for the LiveChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-live-chat',
    templateUrl: 'live-chat.html',
})
export class LiveChatPage {

    trustedVideoUrl: SafeResourceUrl;

    constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {

        // this.URL = this.navParams.data;
        //  console.log("url123",this.URL);
    }

    ionViewDidLoad() {

        this.trustedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://tawk.to/chat/591ee74a8028bb7327046b91/default/?$_tawk_popout=true");
    }
}
