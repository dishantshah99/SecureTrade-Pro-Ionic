import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {GlobalProvider} from "../../providers/global/global";

/**
 * Generated class for the VideodetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-videodetails',
    templateUrl: 'videodetails.html',
})
export class VideodetailsPage {

    videodetails;
    FINALVIDEOURL;
    constructor(public navCtrl: NavController, public navParams: NavParams, public iappb: InAppBrowser,public api:GlobalProvider) {
        this.videodetails = navParams.data;
        console.log("videodetails", this.videodetails);
        let videotemp= this.videodetails[0].VIDEO.split("/");
        console.log("video code",videotemp);
        this.FINALVIDEOURL = "https://www.youtube.com/embed/"+videotemp[videotemp.length -1];
        console.log("final url",this.FINALVIDEOURL);

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad VideodetailsPage');
    }

    openbrowser(LINK) {
        // const browser = this.iappb.create(LINK);
        // browser.on('loadstop').subscribe(event => {
        //     browser.insertCSS({code: "body{color: red;"});
        // });
        window.open(LINK, '_system');

    }
}
