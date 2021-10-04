webpackJsonp([18],{

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesettingPageModule", function() { return ProfilesettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profilesetting__ = __webpack_require__(514);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilesettingPageModule = /** @class */ (function () {
    function ProfilesettingPageModule() {
    }
    ProfilesettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profilesetting__["a" /* ProfilesettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profilesetting__["a" /* ProfilesettingPage */]),
            ],
        })
    ], ProfilesettingPageModule);
    return ProfilesettingPageModule;
}());

//# sourceMappingURL=profilesetting.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilesettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(261);
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







var ProfilesettingPage = /** @class */ (function () {
    function ProfilesettingPage(navCtrl, navParams, camera, file, filePath, actionSheetCtrl, api, loadingCtrl, device, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.device = device;
        this.toastCtrl = toastCtrl;
        this.login_details = JSON.parse(localStorage.getItem("login_data"));
        this.profile();
    }
    ProfilesettingPage.prototype.profile = function () {
        // this.loading = this.loadingCtrl.create({content: "please wait..."});
        // this.loading.present();
        var _this = this;
        this.api.userprofile()
            .then(function (data) {
            // this.loading.dismiss();
            _this.apiData = data;
            console.log("userprofile", _this.apiData.data);
            console.log("userprofile_name", _this.apiData.data[0].NAME);
            console.log("userprofile_passward", _this.apiData.data[0].PASSWORD);
            console.log("userprofile_email", _this.apiData.data[0].EMAIL);
            console.log("userprofile_mobile", _this.apiData.data[0].MOBILE);
            console.log("userprofile_city", _this.apiData.data[0].CITY);
            console.log("userprofile_profileImage", _this.apiData.data[0].PROFILE);
            console.log("userprofile_refcode", _this.apiData.data[0].MY_REFFERED_CODE);
            _this.id = _this.apiData.data[0].ID;
            _this.titlename = _this.apiData.data[0].NAME;
            _this.email1 = _this.apiData.data[0].EMAIL;
            _this.city = _this.apiData.data[0].CITY;
            _this.mobile = _this.apiData.data[0].MOBILE;
            _this.refc = _this.apiData.data[0].MY_REFFERED_CODE;
            // this.password = this.apiData.data[0].PASSWORD;
            // this.type = this.apiData.data[0].CUSTOMERTYPE;
            _this.base64Image = _this.apiData.data[0].PROFILE;
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
            _this.username = _this.apiData.data[0].NAME;
            _this.mobilE = _this.mobile;
            _this.citY = _this.city;
            _this.emaiL = _this.email1;
            _this.refC = _this.refc;
            _this.photO = _this.base64Image;
            // this.typE = this.type;
        }).catch();
    };
    ProfilesettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilesettingPage');
    };
    ProfilesettingPage.prototype.clickTypes = function (checked) {
        if (checked == "Trader") {
            this.type = "Trader";
            console.log("type", this.type);
        }
        else if (checked == "Investor") {
            this.type = "Investor";
            console.log("type123", this.type);
        }
    };
    ProfilesettingPage.prototype.presentToast = function (msg) {
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
    ProfilesettingPage.prototype.cancel = function () {
        this.navCtrl.popTo('HomePage');
    };
    ProfilesettingPage.prototype.profileUpdate = function () {
        var _this = this;
        var regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        var regExpforname = /^[a-zA-Z_ ]*$/;
        if (this.uname.value == "") {
            this.presentToast("Enter UserName");
            console.log("Username", this.uname.value);
        }
        else if (!regExpforname.test(this.uname.value)) {
            this.presentToast("Invalid Name");
        }
        else if (this.uemail.value == "") {
            this.presentToast("Enter Email");
            console.log("Username", this.uemail.value);
        }
        else if (!regExp.test(this.uemail.value)) {
            this.presentToast("Invalid Email");
        }
        else if (this.ucity.value == "") {
            this.presentToast("Enter city");
            console.log("Username", this.city.value);
        }
        else if (!regExpforname.test(this.ucity.value)) {
            this.presentToast("Invalid City Name");
        }
        else {
            this.loading = this.loadingCtrl.create({ content: "please wait..." });
            this.loading.present();
            this.login_details = JSON.parse(localStorage.getItem("login_details"));
            console.log("uName", this.uname.value);
            console.log("uEmail", this.uemail.value);
            console.log("uCity", this.ucity.value);
            console.log("uMobile", this.umobile.value);
            console.log("images", this.base64Image);
            console.log("Type321", this.type);
            this.api.profileUpload(this.uname.value, this.uemail.value, this.ucity.value, this.base64Image, 0)
                .then(function (data) {
                _this.apiData = data;
                console.log("profileupdate", _this.apiData);
                _this.items = _this.apiData.data;
                _this.loading.dismiss();
                console.log("data", _this.items);
                if (_this.apiData.status == 200) {
                    localStorage.removeItem(_this.apiData.data.NAME);
                    localStorage.removeItem(_this.apiData.data.EMAIL);
                    localStorage.removeItem(_this.apiData.data.CITY);
                    localStorage.removeItem(_this.apiData.data.PROFILEIMAGE);
                    _this.login_details = {
                        data: _this.apiData.data[0],
                        verify: 1
                        // user_data: this.apiData.data[0]
                    };
                    console.log("13242321", _this.login_details);
                    localStorage.setItem('login_data', JSON.stringify(_this.login_details));
                    console.log("newinputData", _this.login_details);
                    _this.api.title = _this.apiData.data[0].NAME;
                    _this.api.Mobile = _this.apiData.data[0].MOBILE;
                    ;
                    _this.api.type = _this.apiData.data[0].REFCODE;
                    _this.api.profileimage = _this.apiData.data[0].PROFILE;
                    console.log("Profile image", _this.api.profileimage);
                    console.log("MObile api", _this.api.Mobile);
                    _this.api.isLogin = true;
                    _this.presentToast("profile update successfully");
                    _this.getsymboldata();
                    // this.navCtrl.setRoot('HomePage');
                    // window.location.reload();
                }
                else if (_this.apiData.status == 404) {
                    _this.api.presentToast(_this.apiData.message);
                }
                else if (_this.apiData.status == 440) {
                    _this.api.presentToast(_this.apiData.message);
                    localStorage.removeItem("login_apiData");
                    _this.navCtrl.setRoot('SignloginPage');
                }
                else if (_this.apiData.status == 304) {
                    _this.api.presentToast(_this.apiData.message);
                    window.open(_this.api.playstorelink, '_system');
                }
                else if (_this.apiData.status == 530) {
                    _this.api.presentToast(_this.apiData.message);
                    _this.api.Exitapp();
                }
                else {
                    _this.api.presentToast(_this.apiData.message);
                }
            }).catch();
        }
    };
    ProfilesettingPage.prototype.getsymboldata = function () {
        var _this = this;
        this.api.splashscreenapi().then(function (data) {
            // this.users = data;
            _this.plandata = data;
            console.log("planDATA", _this.plandata);
            if (_this.plandata.status == '200') {
                localStorage.removeItem("NSECASH");
                localStorage.removeItem("NSEFO");
                localStorage.removeItem("MCX");
                localStorage.setItem("NSECASH", JSON.stringify(_this.plandata.symbol.NSECASH));
                localStorage.setItem("NSEFO", JSON.stringify(_this.plandata.symbol.NSEFO));
                localStorage.setItem("MCX", JSON.stringify(_this.plandata.symbol.MCX));
                var datapass = {
                    ALGO_LIVECHART_PURCHSE: _this.plandata.ALGO_LIVECHART_PURCHSE,
                    AUTO_ADVICERY_PURCHSE: _this.plandata.AUTO_ADVICERY_PURCHSE,
                    LIVE_CHART_PURCHSE: _this.plandata.LIVE_CHART_PURCHSE,
                    LIVE_RATE_PURCHSE: _this.plandata.LIVE_RATE_PURCHSE,
                    MESSAGE_BOARD_PURCHSE: _this.plandata.MESSAGE_BOARD_PURCHSE
                };
                localStorage.setItem("PURCHASE", JSON.stringify(datapass));
                _this.api.ALGO_LIVECHART_PURCHSE = _this.plandata.ALGO_LIVECHART_PURCHSE;
                _this.api.AUTO_ADVICERY_PURCHSE = _this.plandata.AUTO_ADVICERY_PURCHSE;
                _this.api.LIVE_CHART_PURCHSE = _this.plandata.LIVE_CHART_PURCHSE;
                _this.api.LIVE_RATE_PURCHSE = _this.plandata.LIVE_RATE_PURCHSE;
                _this.api.MESSAGE_BOARD_PURCHSE = _this.plandata.MESSAGE_BOARD_PURCHSE;
                if (_this.api.LIVE_CHART_PURCHSE == false) {
                    _this.navCtrl.setRoot('HomepagefreePage');
                }
                else {
                    _this.navCtrl.setRoot('HomePage');
                }
            }
            else {
                _this.api.ErrorApi(_this.plandata.status, _this.plandata.message);
            }
        }).catch();
    };
    ProfilesettingPage.prototype.presentActionSheet = function (type) {
        var _this = this;
        console.log("type", type);
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    //Open Gallery
                    text: 'Open Gallery',
                    handler: function () {
                        _this.accessGallery();
                    }
                },
                {
                    //Open Camare Method
                    text: 'Open Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    //Open Camare Method
                    text: 'Remove Profile',
                    handler: function () {
                        _this.base64Image = '';
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    ProfilesettingPage.prototype.accessGallery = function () {
        var _this = this;
        console.log("Enter access gallery");
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err + "error");
        });
    };
    ProfilesettingPage.prototype.takePicture = function (sourceType) {
        var options = {
            quality: 50,
            sourceType: sourceType,
            saveToPhotoAlbum: true,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.capturePhoto(options);
    };
    ProfilesettingPage.prototype.capturePhoto = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.camera.getPicture(options)
                            //Append result to image to display in view
                        ];
                    case 1:
                        result = _a.sent();
                        //Append result to image to display in view
                        this.base64Image = "data:image/jpeg;base64," + result;
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
    ProfilesettingPage.prototype.shareapp = function () {
        window.open(this.api.playstorelink, '_system');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('abxname'),
        __metadata("design:type", Object)
    ], ProfilesettingPage.prototype, "uname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], ProfilesettingPage.prototype, "uemail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('city'),
        __metadata("design:type", Object)
    ], ProfilesettingPage.prototype, "ucity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mobile'),
        __metadata("design:type", Object)
    ], ProfilesettingPage.prototype, "umobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('refcode'),
        __metadata("design:type", Object)
    ], ProfilesettingPage.prototype, "urefcode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
    ], ProfilesettingPage.prototype, "nav", void 0);
    ProfilesettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profilesetting',template:/*ion-inline-start:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\profilesetting\profilesetting.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Profile</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background-color: #ededed">\n\n\n\n    <ion-card style="margin: 0;margin-bottom:10px;width: 100%" color="primary">\n\n        <ion-card-content>\n\n            <img class="circle-pic" src="{{base64Image ||\'assets/imgs/app_background.png\'}}"\n\n                 (click)="presentActionSheet()"/>\n\n            <h2 style="text-align: center;margin-bottom: 10px;margin-top: 20px;">{{titlename}}</h2>\n\n\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <p style="padding-left: 12px;font-weight: bold;">Profile</p>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <!-- <p style="padding-left: 1px;margin-top: 10px; font-weight: bold">\n\n                 <ion-item>\n\n                     <ion-label color="primary">\n\n\n\n                         <img src="assets/imgs/ref_code_icon.png" style="margin-left: 15px; width: 20px; height: 20px;"/>\n\n\n\n                         &lt;!&ndash;<fa-icon style="margin-left: 5px" name="code" color="primary" size="1x"></fa-icon>&ndash;&gt;\n\n\n\n                     </ion-label>\n\n                     <ion-input placeholder="Ref Code" disabled #refcode [(ngModel)]="refC"></ion-input>\n\n\n\n                 </ion-item>\n\n\n\n             </p>\n\n -->\n\n            <p style="padding-left: 15px">\n\n\n\n                <ion-item>\n\n\n\n                    <ion-label color="primary">\n\n\n\n                        <img src="assets/imgs/phone.png" style="width: 20px; height: 20px;"/>\n\n\n\n                        <!--<fa-icon name="mobile" color="primary" size="1x"></fa-icon>-->\n\n\n\n                    </ion-label>\n\n\n\n                    <ion-input placeholder="mobile" disabled #mobile [(ngModel)]="mobilE"></ion-input>\n\n\n\n                </ion-item>\n\n\n\n            </p>\n\n\n\n            <p style="padding-left: 12px" >\n\n\n\n                <!--<fa-icon name="user" color="gray" size="1x"></fa-icon> <ion-input type="tel" placeholder="UserName"></ion-input>-->\n\n                <ion-item>\n\n\n\n                    <ion-label color="primary">\n\n\n\n                        <img src="assets/imgs/user_icon.png" style="width: 20px; height: 20px; margin-left: 2px;"/>\n\n\n\n                        <!--<fa-icon name="user-o" color="primary" size="1x"></fa-icon>-->\n\n                    </ion-label>\n\n\n\n                    <ion-input placeholder="User Name" #abxname [(ngModel)]="username"></ion-input>\n\n\n\n                    <img src="assets/imgs/edit_icon.png" style="width: 15px; height: 15px;" item-right/>\n\n\n\n                    <!--<fa-icon name="edit" color="primary" item-right size="1x"></fa-icon>-->\n\n                </ion-item>\n\n\n\n            </p>\n\n\n\n            <p style="padding-left: 12px">\n\n\n\n                <!--<fa-icon name="user" color="gray" size="1x"></fa-icon> <ion-input type="tel" placeholder="UserName"></ion-input>-->\n\n                <ion-item>\n\n\n\n                    <ion-label color="primary">\n\n\n\n                        <img src="assets/imgs/envelope.png" style="width: 20px; height: 20px; margin-left: 4px;">\n\n\n\n                        <!--<fa-icon name="envelope-o" color="primary" size="1x"></fa-icon>-->\n\n\n\n                    </ion-label>\n\n\n\n                    <ion-input placeholder="Email" #email [(ngModel)]="emaiL"></ion-input>\n\n\n\n                    <img src="assets/imgs/edit_icon.png" item-right style="width: 15px; height: 15px;">\n\n\n\n\n\n                    <!--<fa-icon name="edit" color="primary" item-right size="1x"></fa-icon>-->\n\n\n\n                </ion-item>\n\n            </p>\n\n\n\n            <p style="padding-left: 12px">\n\n                <!--<fa-icon name="user" color="gray" size="1x"></fa-icon> <ion-input type="tel" placeholder="UserName"></ion-input>-->\n\n                <ion-item>\n\n\n\n                    <ion-label color="primary">\n\n\n\n                        <img src="assets/imgs/city_icon.png" item-right style="width: 20px; height: 20px; margin-left: 4px;">\n\n\n\n                        <!--<fa-icon name="building-o" color="primary" size="1x"></fa-icon>-->\n\n\n\n                    </ion-label>\n\n\n\n                    <ion-input placeholder="City" #city style="margin-left: -7px;" [(ngModel)]="citY"></ion-input>\n\n\n\n                    <!--<fa-icon name="edit" color="primary" item-right size="1x"></fa-icon>-->\n\n\n\n                    <img src="assets/imgs/edit_icon.png" item-right style="width: 15px; height: 15px;">\n\n\n\n                </ion-item>\n\n\n\n            </p>\n\n\n\n            <p style="padding-left: 12px">\n\n                <!--<fa-icon name="user" color="gray" size="1x"></fa-icon> <ion-input type="tel" placeholder="UserName"></ion-input>-->\n\n                <ion-item>\n\n\n\n                    <ion-label color="primary">\n\n\n\n                        <img src="assets/imgs/refferl.png" item-right style="width: 20px; height: 20px; margin-left: 4px;">\n\n\n\n                        <!--<fa-icon name="building-o" color="primary" size="1x"></fa-icon>-->\n\n\n\n                    </ion-label>\n\n\n\n                    <ion-input placeholder="Reffered code" style="margin-left: -7px;" disabled  #refcno [(ngModel)]="refC"></ion-input>\n\n\n\n                    <!--<fa-icon name="edit" color="primary" item-right size="1x"></fa-icon>-->\n\n\n\n                    <img src="assets/imgs/share_icon.png" item-right style="width: 15px; height: 15px;" (click)="shareapp()">\n\n                    <!--<ion-icon name="share-social" style="color: #040063" item-right (click)="shareapp()"></ion-icon>-->\n\n\n\n                </ion-item>\n\n\n\n            </p>\n\n\n\n            <!--  <p style="padding-left: 12px">\n\n\n\n                  <ion-row radio-group [(ngModel)]="customertype">\n\n                      <ion-col>\n\n                          <ion-item>\n\n                              <ion-radio [checked]="Trader" value="Trader" (click)="clickTypes(\'Trader\')"></ion-radio>\n\n                              <ion-label>Trader</ion-label>\n\n                          </ion-item>\n\n                      </ion-col>\n\n                      <ion-col>\n\n                          <ion-item>\n\n                              <ion-radio [checked]="Investor" value="Investor" (click)="clickTypes(\'Investor\')"></ion-radio>\n\n                              <ion-label>Investor</ion-label>\n\n                          </ion-item>\n\n                      </ion-col>\n\n                  </ion-row>\n\n              </p>-->\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <ion-row col-12 style="padding: 0px;">\n\n            <ion-col col-6>\n\n                <button ion-button full color="primary" style="border-radius: 4px " (click)="profileUpdate()">Update Profile</button>\n\n            </ion-col>\n\n            <!--outline-->\n\n            <ion-col col-6>\n\n                <button ion-button full color="primary" style="border-radius: 4px " (click)="cancel()">Cancel</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Ionic-Application\SecureTrade-Pro-Ionic\src\pages\profilesetting\profilesetting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
    ], ProfilesettingPage);
    return ProfilesettingPage;
}());

//# sourceMappingURL=profilesetting.js.map

/***/ })

});
//# sourceMappingURL=18.js.map