import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {EodChartPage} from "./eod-chart";

@NgModule({
    declarations: [
        EodChartPage,
    ],
    imports: [
        IonicPageModule.forChild(EodChartPage),
    ],
})
export class EodChartPageModule {



}
