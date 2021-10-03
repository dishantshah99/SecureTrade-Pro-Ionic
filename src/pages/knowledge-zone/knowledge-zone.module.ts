import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KnowledgeZonePage } from './knowledge-zone';

@NgModule({
  declarations: [
    KnowledgeZonePage,
  ],
  imports: [
    IonicPageModule.forChild(KnowledgeZonePage),
  ],
})
export class KnowledgeZonePageModule {}
