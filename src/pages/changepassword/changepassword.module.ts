import {NgModule} from '@angular/core';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import {ChangepasswordPage} from "./changepassword";

@NgModule({
    declarations: [
        ChangepasswordPage,
    ],
    imports: [

        IonicPageModule.forChild(ChangepasswordPage),

    ],

    exports:[ChangepasswordPage]

})

export class ChangepasswordPageModule {


}
