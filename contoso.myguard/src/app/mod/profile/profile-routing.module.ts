import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OviewComponent } from './oview/oview.component';

const routes: Routes = [
  { path: "view", component: OviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
