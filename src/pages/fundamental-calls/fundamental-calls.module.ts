import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FundamentalCallsPage} from "./fundamental-calls";
import {InAppBrowser} from "@ionic-native/in-app-browser";

@NgModule({
    declarations: [
        FundamentalCallsPage,
    ],
    imports: [
        IonicPageModule.forChild(FundamentalCallsPage),
    ],
    providers:[
        InAppBrowser
    ]

})
export class FundamentalCallsPageModule {



}
