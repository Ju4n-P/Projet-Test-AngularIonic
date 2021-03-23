import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabTwoRoutingModule } from './tab-two-routing.module';
import { TabTwoComponent } from './tab-two.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [TabTwoComponent],
  imports: [
    IonicModule,
    CommonModule,
    TabTwoRoutingModule
  ]
})
export class TabTwoModule { }
