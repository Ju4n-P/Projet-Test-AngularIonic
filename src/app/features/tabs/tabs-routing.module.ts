import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabTwoComponent } from './tab-two/tab-two.component';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '', component: TabsComponent,
    children: [
      {
        path: 'tabOne', loadChildren:() => import('./tab-one/tab-one.module').then(m => m.TabOneModule)
      },
      {
        path: 'tabTwo', loadChildren:() => import('./tab-two/tab-two.module').then(m => m.TabTwoModule)
      },
      {
        path: 'tabThree', loadChildren:() => import('./tab-three/tab-three.module').then(m => m.TabThreeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
