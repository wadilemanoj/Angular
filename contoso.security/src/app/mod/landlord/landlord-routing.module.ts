import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  {
    path: 'landlord', children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'member', component: MemberComponent },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandlordRoutingModule { }
