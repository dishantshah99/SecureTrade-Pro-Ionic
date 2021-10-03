import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {GlobalProvider} from "../providers/global/global";
import {AndroidPermissions} from "@ionic-native/android-permissions";
import {Camera} from "@ionic-native/camera";
import {Device} from "@ionic-native/device";
import {SocialSharing} from "@ionic-native/social-sharing";
import {Screenshot} from "@ionic-native/screenshot";
import {AppVersion} from "@ionic-native/app-version";
import {FilePath} from "@ionic-native/file-path";
import {File} from "@ionic-native/file";
import {EmailComposer} from "@ionic-native/email-composer";
import {CallNumber} from "@ionic-native/call-number";
import {HttpClientModule} from "@angular/common/http";
import {IonicImageViewerModule} from "ionic-img-viewer";
import {ImagedisplayModule} from "../pages/imagedisplay/imagedisplay.module";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {FCM} from "@ionic-native/fcm";
import {LocalNotifications} from "@ionic-native/local-notifications";
import {HTTP} from "@ionic-native/http";
import {RgtsLiverateProvider} from '../providers/rgts-liverate/rgts-liverate';
import {Push} from "@ionic-native/push";
import {Toast} from "@ionic-native/toast";

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp, {
            preloadModules: true // <- Here!
        }),
        IonicImageViewerModule,
        ImagedisplayModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        GlobalProvider,
        AndroidPermissions,
        Camera,
        Device,
        SocialSharing,
        Screenshot,
        File,
        FilePath,
        CallNumber,
        EmailComposer,
        AppVersion,
        FCM,
        LocalNotifications,
        InAppBrowser,
        HTTP,
        RgtsLiverateProvider,
        Push,
        Toast

    ]
})
export class AppModule {
}
