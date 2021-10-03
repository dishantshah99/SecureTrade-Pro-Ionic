import {Component, Renderer, ViewChild} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {CallNumber} from "@ionic-native/call-number";
// import {LoginPage} from "../login/login";
import {GlobalProvider} from "../../providers/global/global";

/**
 * Generated class for the OtppopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imagedisplay',
  templateUrl: 'imagedisplay.html',
})
export class Imagedisplay {
    @ViewChild('otp') otp;
   image;
   title;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public renderer: Renderer,private callNumber: CallNumber
              ,public loadingCtrl: LoadingController,public api: GlobalProvider,public alertCtrl: AlertController,public toastCtrl: ToastController) {

      this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'custom-popup', true);
      console.log("image",viewCtrl.data.image);
      this.image = viewCtrl.data.image;
      console.log("title",viewCtrl.data.title);
      this.title = viewCtrl.data.title;
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Imagedisplay');
  }
  closepopup(){
    this.viewCtrl.dismiss();
  }
  
}
