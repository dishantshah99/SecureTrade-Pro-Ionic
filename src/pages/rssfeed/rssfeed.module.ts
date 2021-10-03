import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RssfeedPage } from './rssfeed';

@NgModule({
  declarations: [
    RssfeedPage,
  ],
  imports: [
    IonicPageModule.forChild(RssfeedPage),
  ],
})
export class RssfeedPageModule {}
