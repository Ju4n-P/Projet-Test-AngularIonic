import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabThreeRoutingModule } from './tab-three-routing.module';
import { TabThreeComponent } from './tab-three.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [TabThreeComponent],
  imports: [
    IonicModule,
    CommonModule,
    TabThreeRoutingModule
  ]
})
export class TabThreeModule { }
