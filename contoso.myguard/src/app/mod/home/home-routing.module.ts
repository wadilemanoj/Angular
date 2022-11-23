import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandComponent } from './land/land.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'home'},
  { path: 'home', component: LandComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
