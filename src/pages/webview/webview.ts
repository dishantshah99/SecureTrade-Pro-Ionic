import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SafeResourceUrl,DomSanitizer} from '@angular/platform-browser';

@IonicPage()
@Component({
    selector: 'page-webview',
    templateUrl: 'webview.html',

})
export class WebviewPage {

    trustedVideoUrl: SafeResourceUrl;
   // title;

    Selectedvedio;
    title;
    description;
    image;
    date;
    name;
    vedio;
    videotemp;
    videourl;

    constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {

        this.title = navParams.data.title;
        console.log("title123",this.title);

        this.title = navParams.data.TYPE;
        this.name = navParams.data.NAME;
        this.date = navParams.data.DATE;
        this.description = navParams.data.DESCRIPTION;
        this.vedio = navParams.data.VIDEO;
        //   this.image = navParams.data.IMAGE || 'assets/imgs/app_background.png';
        this.videotemp= this.vedio.split("/");
        console.log("video code",this.videotemp);
        this.videourl = "https://www.youtube.com/embed/"+this.videotemp[this.videotemp.length -1];
        console.log("final url",this.videourl);

        console.log("title",this.title);
        console.log("name",this.name);
        console.log("description",this.description);
        console.log("date",this.date);
        console.log("vedio",this.vedio);
        // console.log("image",this.image);

        this.Selectedvedio = navParams.data.ID;
        console.log("MainId", this.Selectedvedio);

    }


    ionViewDidLoad() {

        this.trustedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videourl);
        this.title = this.navParams.data.TYPE;
        console.log("mainarray",this.title);
       // window.open(this.vedio, '_self');
    }
}
