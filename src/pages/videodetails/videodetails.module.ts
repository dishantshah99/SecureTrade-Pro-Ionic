import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideodetailsPage } from './videodetails';

@NgModule({
  declarations: [
    VideodetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(VideodetailsPage),
  ],
})
export class VideodetailsPageModule {}
