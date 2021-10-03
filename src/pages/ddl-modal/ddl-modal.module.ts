import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DdlModalPage } from './ddl-modal';

@NgModule({
  declarations: [
    DdlModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DdlModalPage),
  ],
})
export class DdlModalPageModule {}
