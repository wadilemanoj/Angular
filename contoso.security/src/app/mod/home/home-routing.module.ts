import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandComponent } from './land/land.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'home', component: LandComponent },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
