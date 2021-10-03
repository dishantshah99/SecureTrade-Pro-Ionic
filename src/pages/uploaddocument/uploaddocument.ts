import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, Loading, LoadingController, NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';
import {FilePath} from "@ionic-native/file-path";
import {GlobalProvider} from "../../providers/global/global";
import {HomePage} from "../home/home";

declare var cordova: any;

@IonicPage()
@Component({
    selector: 'page-uploaddocument',
    templateUrl: 'uploaddocument.html',
})
export class UploaddocumentPage {

    public photos: any;
    public base64Image: string;
    public base64Imagetemp: string;
    public adharCardbase64Image: string;
    public adharCardbase64Imagetemp: string;

    submitbutton: boolean = true;

    image: string;
    login_details: any;
    apiData;
    items;
    hideIcon: boolean = false;
    hideIcon_aadhar: boolean = false;
    loading;
    imageURL;

    constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera,
                private file: File, private filePath: FilePath, public platform: Platform, public api: GlobalProvider,
                public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {

        this.login_details = JSON.parse(localStorage.getItem("login_details"));
        console.log("userId", this.login_details.user_data.ID);

    }

    ionViewDidLoad() {

        console.log('ionViewDidLoad UploaddocumentPage');

        this.api.getKYCDocument(this.login_details.user_data.ID, "kyc_document_list")

            .then(data => {

                this.apiData = data;
                console.log("kyc", this.apiData.data);
                console.log("adhar", this.apiData.data[0].AADHAR_CARD);
                console.log("pan123", this.apiData.data[0].PAN_CARD);
                console.log("USERID", this.apiData.data[0].ID);

                this.base64Image = this.apiData.data[0].PAN_CARD;
                this.adharCardbase64Image = this.apiData.data[0].AADHAR_CARD;

                console.log("panBase64", this.base64Image);
                console.log("adharBase64", this.adharCardbase64Image);

                if (this.base64Image == null || this.base64Image == '' || this.base64Image == 'null') {

                    this.hideIcon = true;
                    this.submitbutton = true;
                    console.log("hide", this.hideIcon);

                } else {

                    this.hideIcon = false;
                    this.submitbutton = false;
                    console.log("display", this.hideIcon);

                }

                if (this.adharCardbase64Image == null || this.adharCardbase64Image == '' || this.adharCardbase64Image == 'null') {

                    this.hideIcon_aadhar = true;
                    this.submitbutton = true;
                    console.log("hideIcon_aadhar", this.hideIcon_aadhar);

                } else {

                    this.hideIcon_aadhar = false;
                    this.submitbutton = false;
                    console.log("display_hideIcon_aadhar", this.hideIcon_aadhar);

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

                        //  this.presentToast("open Gallery");
                        this.accessGallery(type);

                    }
                },
                // {
                //     //Open Camare Method
                //     text: 'Open Camera',
                //     handler: () => {
                //
                //         this.camera.getPicture().then((imageData) => {
                //
                //                 this.imageURL = imageData
                //
                //         },(err) => {
                //
                //             console.log(err);
                //
                //         });
                //
                //
                //
                //       //  this.presentToast("Cemara");
                //
                //
                //         // this.takePicture(this.camera.PictureSourceType.CAMERA, type);
                //     }
                // },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    }

    public takePicture(sourceType, type) {

        var options = {
            quality: 50,
            sourceType: sourceType,
            saveToPhotoAlbum: true,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.capturePhoto(options, type);
    }

    async capturePhoto(options: CameraOptions, type) {
        try {
            //Result is a base64 image but can be changed to use a filepath.
            const result = await this.camera.getPicture(options);

            if (type == 'pancard') {

                this.base64Image = `data:image/jpeg;base64,${result}`;
            } else {

                this.adharCardbase64Image = `data:image/jpeg;base64,${result}`;

            }

        }

        catch (e) {

            console.error(e);

        }
    }


    accessGallery(type) {

        console.log("Enter access gallery");
        console.log("type in galleryy", type);
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then((imageData) => {

            if (type == 'pancard') {

                this.base64Image = 'data:image/jpeg;base64,' + imageData;

            } else {

                this.adharCardbase64Image = 'data:image/jpeg;base64,' + imageData;


            }

        }, (err) => {

            console.log(err + "error");

        });

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

    submit() {

        this.loading = this.loadingCtrl.create({content: "please wait..."});
        this.loading.present();

        this.login_details = JSON.parse(localStorage.getItem("login_details"));

        console.log("userId", this.login_details.user_data.ID);
        console.log("pan", this.base64Image);
        console.log("adhar", this.adharCardbase64Image);

        // if (this.hideIcon == true) {

            this.api.kycSubmit(this.login_details.user_data.ID, this.adharCardbase64Image, this.base64Image, "kyc_doc_add").then(data => {

                console.log("abc", data);

                this.apiData = data;
                this.presentToast(this.apiData);

                if (this.apiData.status == 200) {

                    console.log("imageuloadsucessfuly", this.apiData);

                    this.navCtrl.setRoot('HomePage');
                    this.presentToast("Document upload successfully");
                    this.loading.dismiss();

                } else {

                    this.presentToast(this.apiData.status.message);
                }

            }).catch();

        // } else {
        //
        //     this.presentToast("Image Upload already...");
        //     console.log("image", this.hideIcon);
        //
        // }
    }

}

