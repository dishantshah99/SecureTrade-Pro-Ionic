import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the BlogDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-blog-detail',
    templateUrl: 'blog-detail.html',
})
export class BlogDetailPage {

    SelectedBloggid;
    title;
    description;
    image;
    date;
    BLOG_LINK;
    constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.title = navParams.data.TITLE;
        // console.log("title", this.title);
        this.date = navParams.data.DATE;
        this.description = navParams.data.DESCRIPTION;
        this.BLOG_LINK = navParams.data.BLOG_LINK;
        this.image = navParams.data.IMAGE || 'assets/imgs/app_background.png';


        console.log("title", this.title);
        console.log("date", this.date);
        console.log("discription", this.description);
        console.log("image", this.image);

        this.SelectedBloggid = navParams.data.ID;
        console.log("discription", this.SelectedBloggid);
    }
    openlink(){
        window.open(this.BLOG_LINK, '_system');
    }
    //   title
    // ionViewDidLoad() {
    //
    //   console.log('ionViewDidLoad BlogDetailPage');
    //
    // }

}
