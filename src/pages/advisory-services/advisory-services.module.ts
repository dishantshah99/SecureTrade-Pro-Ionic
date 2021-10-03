import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AdvisoryServicesPage} from "./advisory-services";

@NgModule({
    declarations: [
        AdvisoryServicesPage,
    ],
    imports: [
        IonicPageModule.forChild(AdvisoryServicesPage),
    ],
})
export class AdvisoryServicesPageModule {
}
