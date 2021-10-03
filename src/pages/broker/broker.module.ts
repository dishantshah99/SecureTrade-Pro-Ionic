import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrokerPage } from './broker';

@NgModule({
  declarations: [
    BrokerPage,
  ],
  imports: [
    IonicPageModule.forChild(BrokerPage),
  ],
})
export class BrokerPageModule {}
