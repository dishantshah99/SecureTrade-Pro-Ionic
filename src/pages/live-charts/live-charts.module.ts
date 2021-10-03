import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LiveChartsPage} from "./live-charts";

@NgModule({
    declarations: [
        LiveChartsPage,
    ],
    imports: [
        IonicPageModule.forChild(LiveChartsPage),
    ],
})
export class LiveChartsPageModule {

    
}
