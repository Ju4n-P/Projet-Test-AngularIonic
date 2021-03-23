import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabOneRoutingModule } from './tab-one-routing.module';
import { TabOneComponent } from './tab-one.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [TabOneComponent],
  imports: [
    IonicModule,
    CommonModule,
    TabOneRoutingModule
  ]
})
export class TabOneModule { }
