import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {BlogDetailPage} from "../blog-detail/blog-detail";
import {GlobalProvider} from "../../providers/global/global";

@IonicPage()
@Component({
    selector: 'page-blog',
    templateUrl: 'blog.html',
})
export class BlogPage {
    apiData;
    news;
    loading;

    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public api: GlobalProvider,
                public toastcontroller: ToastController) {

        this.loading = this.loadingCtrl.create({content: "please wait..."});
        this.loading.present();


        if(!this.loading){
            this.loading = this.loadingCtrl.create({
                content: 'Please Wait...'
            });
            this.loading.present();
        }


        this.api.news()
            .then(data => {
                // this.users = data;
                this.apiData = data;
                this.loading.dismiss();
                if (this.apiData.status == 200) {

                    this.news = this.apiData.data;
                    // this.checkReportLink();
                    console.log("news", this.news);
                } else {
                    api.ErrorApi(this.apiData.status, this.apiData.message);
                }
            }).catch();

    }

    goToBlogdetail(item) {

        console.log("blogdetail", item);

        this.navCtrl.push('BlogDetailPage', item);

    }

}
