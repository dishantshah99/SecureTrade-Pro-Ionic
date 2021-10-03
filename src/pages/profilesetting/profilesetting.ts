import {Component, ViewChild} from '@angular/core';
import {ActionSheetController, IonicPage, LoadingController, Nav, NavController, NavParams, ToastController} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {Device} from "@ionic-native/device";
import {HomePage} from "../home/home";
import {FilePath} from "@ionic-native/file-path";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {File} from "@ionic-native/file";

@IonicPage()
@Component({
    selector: 'page-profilesetting',
    templateUrl: 'profilesetting.html',
})
export class ProfilesettingPage {


    @ViewChild('abxname') uname;
    @ViewChild('email') uemail;
    @ViewChild('city') ucity;
    @ViewChild('mobile') umobile;
    @ViewChild('refcode') urefcode;
    // @ViewChild('custType') ucustomertype;
    @ViewChild(Nav) nav: Nav;

    loading;
    data;
    items;
    rootPage: any;
    apiData;
    login_details;

    id;
    password;
    name;
    email1;
    mobile;
    city;
    refc;
    type;
    photo;

    username;
    citY;
    emaiL;
    mobilE;
    refC;
    // typE;
    photO;

    titlename;

    Trader;
    Investor;

    public base64Image;
    plandata;

    constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera,
                private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController,
                public api: GlobalProvider, public loadingCtrl: LoadingController,
                private device: Device, public toastCtrl: ToastController) {

        this.login_details = JSON.parse(localStorage.getItem("login_data"));
        this.profile();
    }

    private profile() {

        // this.loading = this.loadingCtrl.create({content: "please wait..."});
        // this.loading.present();

        this.api.userprofile()

            .then(data => {
                // this.loading.dismiss();
                this.apiData = data;
                console.log("userprofile", this.apiData.data);
                console.log("userprofile_name", this.apiData.data[0].NAME);
                console.log("userprofile_passward", this.apiData.data[0].PASSWORD);
                console.log("userprofile_email", this.apiData.data[0].EMAIL);
                console.log("userprofile_mobile", this.apiData.data[0].MOBILE);
                console.log("userprofile_city", this.apiData.data[0].CITY);
                console.log("userprofile_profileImage", this.apiData.data[0].PROFILE);
                console.log("userprofile_refcode", this.apiData.data[0].MY_REFFERED_CODE);


                this.id = this.apiData.data[0].ID;
                this.titlename = this.apiData.data[0].NAME;
                this.email1 = this.apiData.data[0].EMAIL;
                this.city = this.apiData.data[0].CITY;
                this.mobile = this.apiData.data[0].MOBILE;
                this.refc = this.apiData.data[0].MY_REFFERED_CODE;
                // this.password = this.apiData.data[0].PASSWORD;
                // this.type = this.apiData.data[0].CUSTOMERTYPE;
                this.base64Image = this.apiData.data[0].PROFILE;

                // console.log("newwww", this.base64Image);
                //
                // if (this.type == "Trader") {
                //
                //     console.log("typesss", this.type);
                //     this.Trader = true;
                //     console.log("defaultType", this.Trader);
                //
                // } else {
                //
                //     console.log("typesss123", this.type);
                //     this.Investor = true;
                //     console.log("defaultType", this.Trader);
                // }
                //

                this.username = this.apiData.data[0].NAME;
                this.mobilE = this.mobile;
                this.citY = this.city;
                this.emaiL = this.email1;
                this.refC = this.refc;
                this.photO = this.base64Image;
                // this.typE = this.type;

            }).catch();

    }

    ionViewDidLoad() {

        console.log('ionViewDidLoad ProfilesettingPage');
    }

    clickTypes(checked) {

        if (checked == "Trader") {

            this.type = "Trader";
            console.log("type", this.type);

        } else if (checked == "Investor") {

            this.type = "Investor";
            console.log("type123", this.type);
        }
    }

    presentToast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 1000,
            position: 'bottom',
            // dismissOnPageChange: true
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }

    cancel() {
        this.navCtrl.popTo('HomePage');
    }

    profileUpdate() {
        let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        let regExpforname = /^[a-zA-Z_ ]*$/;
        if (this.uname.value == "") {

            this.presentToast("Enter UserName");
            console.log("Username", this.uname.value);

        } else if (!regExpforname.test(this.uname.value)) {

            this.presentToast("Invalid Name");

        } else if (this.uemail.value == "") {

            this.presentToast("Enter Email");
            console.log("Username", this.uemail.value);

        } else if (!regExp.test(this.uemail.value)) {

            this.presentToast("Invalid Email");

        } else if (this.ucity.value == "") {

            this.presentToast("Enter city");
            console.log("Username", this.city.value);

        } else if (!regExpforname.test(this.ucity.value)) {

            this.presentToast("Invalid City Name");

        } else {
            this.loading = this.loadingCtrl.create({content: "please wait..."});
            this.loading.present();

            this.login_details = JSON.parse(localStorage.getItem("login_details"));

            console.log("uName", this.uname.value);
            console.log("uEmail", this.uemail.value);
            console.log("uCity", this.ucity.value);
            console.log("uMobile", this.umobile.value);
            console.log("images", this.base64Image);
            console.log("Type321", this.type);


            this.api.profileUpload(this.uname.value, this.uemail.value, this.ucity.value, this.base64Image,0)

                .then(data => {

                    this.apiData = data;

                    console.log("profileupdate", this.apiData);

                    this.items = this.apiData.data;
                    this.loading.dismiss();
                    console.log("data", this.items);

                    if (this.apiData.status == 200) {

                        localStorage.removeItem(this.apiData.data.NAME);
                        localStorage.removeItem(this.apiData.data.EMAIL);
                        localStorage.removeItem(this.apiData.data.CITY);
                        localStorage.removeItem(this.apiData.data.PROFILEIMAGE);

                        this.login_details = {
                            data: this.apiData.data[0],
                            verify: 1
                            // user_data: this.apiData.data[0]

                        };

                        console.log("13242321", this.login_details);

                        localStorage.setItem('login_data', JSON.stringify(this.login_details));

                        console.log("newinputData", this.login_details);

                        this.api.title = this.apiData.data[0].NAME;
                        this.api.Mobile = this.apiData.data[0].MOBILE;
                        ;
                        this.api.type = this.apiData.data[0].REFCODE;
                        this.api.profileimage = this.apiData.data[0].PROFILE;
                        console.log("Profile image", this.api.profileimage);
                        console.log("MObile api", this.api.Mobile);
                        this.api.isLogin = true;
                        this.presentToast("profile update successfully");
                        this.getsymboldata();
                        // this.navCtrl.setRoot('HomePage');
                        // window.location.reload();


                    } else if (this.apiData.status == 404) {
                        this.api.presentToast(this.apiData.message);

                    }
                    // Commented by Dishant. Date: 26-02-2019 11:10:14 Comment: invalid key logout and go loginpage
                    else if (this.apiData.status == 440) {
                        this.api.presentToast(this.apiData.message);
                        localStorage.removeItem("login_apiData");
                        this.navCtrl.setRoot('SignloginPage');
                    }
                    // Commented by Dishant. Date: 25-02-2019 16:55:30 Comment: version error open play store
                    else if (this.apiData.status == 304) {
                        this.api.presentToast(this.apiData.message);
                        window.open(this.api.playstorelink, '_system');
                    }
                    // Commented by Dishant. Date: 25-02-2019 16:56:28 Comment: os version error exit app
                    else if (this.apiData.status == 530) {
                        this.api.presentToast(this.apiData.message);
                        this.api.Exitapp();

                    }
                    // Commented by Dishant. Date: 25-02-2019 16:57:27 Comment: other massages
                    else {
                        this.api.presentToast(this.apiData.message);
                    }

                }).catch();
        }

    }

    private getsymboldata() {
        this.api.splashscreenapi().then(data => {
            // this.users = data;
            this.plandata = data;
            console.log("planDATA", this.plandata);
            if (this.plandata.status == '200') {

                localStorage.removeItem("NSECASH");
                localStorage.removeItem("NSEFO");
                localStorage.removeItem("MCX");

                localStorage.setItem("NSECASH", JSON.stringify(this.plandata.symbol.NSECASH));
                localStorage.setItem("NSEFO", JSON.stringify(this.plandata.symbol.NSEFO));
                localStorage.setItem("MCX", JSON.stringify(this.plandata.symbol.MCX));

                let datapass = {
                    ALGO_LIVECHART_PURCHSE: this.plandata.ALGO_LIVECHART_PURCHSE,
                    AUTO_ADVICERY_PURCHSE: this.plandata.AUTO_ADVICERY_PURCHSE,
                    LIVE_CHART_PURCHSE: this.plandata.LIVE_CHART_PURCHSE,
                    LIVE_RATE_PURCHSE: this.plandata.LIVE_RATE_PURCHSE,
                    MESSAGE_BOARD_PURCHSE: this.plandata.MESSAGE_BOARD_PURCHSE
                };

                localStorage.setItem("PURCHASE", JSON.stringify(datapass));

                this.api.ALGO_LIVECHART_PURCHSE = this.plandata.ALGO_LIVECHART_PURCHSE;
                this.api.AUTO_ADVICERY_PURCHSE = this.plandata.AUTO_ADVICERY_PURCHSE;
                this.api.LIVE_CHART_PURCHSE = this.plandata.LIVE_CHART_PURCHSE;
                this.api.LIVE_RATE_PURCHSE = this.plandata.LIVE_RATE_PURCHSE;
                this.api.MESSAGE_BOARD_PURCHSE = this.plandata.MESSAGE_BOARD_PURCHSE;

                if (this.api.LIVE_CHART_PURCHSE == false) {
                    this.navCtrl.setRoot('HomepagefreePage');
                } else {
                    this.navCtrl.setRoot('HomePage');
                }
            } else {
                this.api.ErrorApi(this.plandata.status, this.plandata.message);
            }
        }).catch();

    }

    public presentActionSheet(type) {

        console.log("type", type);

        let actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    //Open Gallery
                    text: 'Open Gallery',
                    handler: () => {

                        this.accessGallery();

                    }
                },
                {
                    //Open Camare Method
                    text: 'Open Camera',
                    handler: () => {

                        this.takePicture(this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    //Open Camare Method
                    text: 'Remove Profile',
                    handler: () => {

                        this.base64Image = '';
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    }

    accessGallery() {

        console.log("Enter access gallery")
        this.camera.getPicture({

            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL

        }).then((imageData) => {

            this.base64Image = 'data:image/jpeg;base64,' + imageData;

        }, (err) => {

            console.log(err + "error");

        });

    }

    public takePicture(sourceType) {

        var options = {
            quality: 50,
            sourceType: sourceType,
            saveToPhotoAlbum: true,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.capturePhoto(options);
    }

    async capturePhoto(options: CameraOptions) {
        try {
            //Result is a base64 image but can be changed to use a filepath.
            const result = await this.camera.getPicture(options)

            //Append result to image to display in view
            this.base64Image = `data:image/jpeg;base64,${result}`;
        }
        catch (e) {
            console.error(e);
        }
    }

    shareapp() {
        window.open(this.api.playstorelink, '_system');
    }
}
