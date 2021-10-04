webpackJsonp([5],{

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaddocumentPageModule", function() { return UploaddocumentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uploaddocument__ = __webpack_require__(528);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UploaddocumentPageModule = /** @class */ (function () {
    function UploaddocumentPageModule() {
    }
    UploaddocumentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__uploaddocument__["a" /* UploaddocumentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__uploaddocument__["a" /* UploaddocumentPage */]),
            ],
        })
    ], UploaddocumentPageModule);
    return UploaddocumentPageModule;
}());

//# sourceMappingURL=uploaddocument.module.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploaddocumentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var UploaddocumentPage = /** @class */ (function () {
    function UploaddocumentPage(navCtrl, navParams, camera, file, filePath, platform, api, actionSheetCtrl, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.platform = platform;
        this.api = api;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.submitbutton = true;
        this.hideIcon = false;
        this.hideIcon_aadhar = false;
        this.login_details = JSON.parse(localStorage.getItem("login_details"));
        console.log("userId", this.login_details.user_data.ID);
    }
    UploaddocumentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad UploaddocumentPage');
        this.api.getKYCDocument(this.login_details.user_data.ID, "kyc_document_list")
            .then(function (data) {
            _this.apiData = data;
            console.log("kyc", _this.apiData.data);
            console.log("adhar", _this.apiData.data[0].AADHAR_CARD);
            console.log("pan123", _this.apiData.data[0].PAN_CARD);
            console.log("USERID", _this.apiData.data[0].ID);
            _this.base64Image = _this.apiData.data[0].PAN_CARD;
            _this.adharCardbase64Image = _this.apiData.data[0].AADHAR_CARD;
            console.log("panBase64", _this.base64Image);
            console.log("adharBase64", _this.adharCardbase64Image);
            if (_this.base64Image == null || _this.base64Image == '' || _this.base64Image == 'null') {
                _this.hideIcon = true;
                _this.submitbutton = true;
                console.log("hide", _this.hideIcon);
            }
            else {
                _this.hideIcon = false;
                _this.submitbutton = false;
                console.log("display", _this.hideIcon);
            }
            if (_this.adharCardbase64Image == null || _this.adharCardbase64Image == '' || _this.adharCardbase64Image == 'null') {
                _this.hideIcon_aadhar = true;
                _this.submitbutton = true;
                console.log("hideIcon_aadhar", _this.hideIcon_aadhar);
            }
            else {
                _this.hideIcon_aadhar = false;
                _this.submitbutton = false;
                console.log("display_hideIcon_aadhar", _this.hideIcon_aadhar);
            }
        }).catch();
    };
    UploaddocumentPage.prototype.presentActionSheet = function (type) {
        var _this = this;
        console.log("type", type);
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    //Open Gallery
                    text: 'Open Gallery',
                    handler: function () {
                        //  this.presentToast("open Gallery");
                        _this.accessGallery(type);
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
    };
    UploaddocumentPage.prototype.takePicture = function (sourceType, type) {
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
    };
    UploaddocumentPage.prototype.capturePhoto = function (options, type) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        result = _a.sent();
                        if (type == 'pancard') {
                            this.base64Image = "data:image/jpeg;base64," + result;
                        }
                        else {
                            this.adharCardbase64Image = "data:image/jpeg;base64," + result;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UploaddocumentPage.prototype.accessGallery = function (type) {
        var _this = this;
        console.log("Enter access gallery");
        console.log("type in galleryy", type);
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(function (imageData) {
            if (type == 'pancard') {
                _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            }
            else {
                _this.adharCardbase64Image = 'data:image/jpeg;base64,' + imageData;
            }
        }, function (err) {
            console.log(err + "error");
        });
    };
    UploaddocumentPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 1000,
            position: 'bottom',
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    UploaddocumentPage.prototype.submit = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({ content: "please wait..." });
        this.loading.present();
        this.login_details = JSON.parse(localStorage.getItem("login_details"));
        console.log("userId", this.login_details.user_data.ID);
        console.log("pan", this.base64Image);
        console.log("adhar", this.adharCardbase64Image);
        // if (this.hideIcon == true) {
        this.api.kycSubmit(this.login_details.user_data.ID, this.adharCardbase64Image, this.base64Image, "kyc_doc_add").then(function (data) {
            console.log("abc", data);
            _this.apiData = data;
            _this.presentToast(_this.apiData);
            if (_this.apiData.status == 200) {
                console.log("imageuloadsucessfuly", _this.apiData);
                _this.navCtrl.setRoot('HomePage');
                _this.presentToast("Document upload successfully");
                _this.loading.dismiss();
            }
            else {
                _this.presentToast(_this.apiData.status.message);
            }
        }).catch();
        // } else {
        //
        //     this.presentToast("Image Upload already...");
        //     console.log("image", this.hideIcon);
        //
        // }
    };
    UploaddocumentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-uploaddocument',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\uploaddocument\uploaddocument.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>KYC Document</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card>\n\n        <ion-card-content style=" margin: -15px;">\n\n            <ion-row col-12>\n\n\n\n                <ion-col col-3 style="margin-top: auto;margin-bottom: auto">\n\n                    <img class="circle-pic"  src="{{base64Image ||\'assets/imgs/app_background.png\'}}" />\n\n                </ion-col>\n\n\n\n                <ion-col col-7 style="margin-top: auto;margin-bottom: auto">\n\n                    <div style="font-weight: bold; color: #757575">Pancard</div>\n\n                </ion-col>\n\n\n\n                <ion-col col-2 style="margin-top: auto;margin-bottom: auto">\n\n                    <!--<fa-icon name="camera" *ngIf="hideIcon" color="primary" size="1x" (click)="presentActionSheet(\'pancard\')"></fa-icon>-->\n\n                    <img src="assets/imgs/camera.png" *ngIf="hideIcon" (click)="presentActionSheet(\'pancard\')" style="width: 25px;height: 25px;"/>\n\n                </ion-col>\n\n\n\n            </ion-row>\n\n\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content style=" margin: -15px;">\n\n            <ion-row col-12>\n\n\n\n                <ion-col col-3>\n\n                    <img  class="circle-pic"  src="{{adharCardbase64Image || \'assets/imgs/app_background.png\'}}" />\n\n                </ion-col>\n\n\n\n                <ion-col col-7 style="margin-top: auto;margin-bottom: auto">\n\n                    <div style="font-weight: bold; color: #757575">Aadhaar card</div>\n\n                </ion-col>\n\n\n\n                <ion-col col-2 style="margin-top: auto;margin-bottom: auto">\n\n\n\n                    <!--<fa-icon name="camera" *ngIf="hideIcon" color="primary" size="1x" (click)="presentActionSheet(\'adharcard\')"></fa-icon>-->\n\n                    <img src="assets/imgs/camera.png" *ngIf="hideIcon_aadhar" (click)="presentActionSheet(\'adharcard\')" style="width: 25px;height: 25px;"/>\n\n                </ion-col>\n\n\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n\n\n<ion-footer *ngIf="submitbutton">\n\n\n\n    <ion-row col-12 style="padding: 0px;" >\n\n        <ion-col col-12>\n\n            <button ion-button id="adharcard" full color="primary" style="border-radius: 2px " (click)="submit()" >Submit Document</button>\n\n        </ion-col>\n\n\n\n    </ion-row>\n\n\n\n</ion-footer>'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\uploaddocument\uploaddocument.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], UploaddocumentPage);
    return UploaddocumentPage;
}());

//# sourceMappingURL=uploaddocument.js.map

/***/ })

});
//# sourceMappingURL=5.js.map