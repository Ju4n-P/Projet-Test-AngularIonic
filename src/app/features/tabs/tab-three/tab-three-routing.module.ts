import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabThreeComponent } from './tab-three.component';

const routes: Routes = [
  {
    path: '', component: TabThreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabThreeRoutingModule { }
