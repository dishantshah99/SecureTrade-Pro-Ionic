import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Imagedisplay } from './imagedisplay';

@NgModule({
  declarations: [
    Imagedisplay
    ],
  imports: [
    IonicPageModule.forChild(Imagedisplay),
  ],
})
export class ImagedisplayModule {}
