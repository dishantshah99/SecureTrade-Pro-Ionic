import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SignupPage} from "../signup/signup";

/**
 * Generated class for the SignloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-signlogin',
    templateUrl: 'signlogin.html',
})
export class SignloginPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad SignloginPage');
    // }

    login() {

        this.navCtrl.push('LoginPage');

    }

    signup() {
        this.navCtrl.push('SignupPage');
    }
}
