import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrokerdetailsPage } from './brokerdetails';

@NgModule({
  declarations: [
    BrokerdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BrokerdetailsPage),
  ],
})
export class BrokerdetailsPageModule {}
