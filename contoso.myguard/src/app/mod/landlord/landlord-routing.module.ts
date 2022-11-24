import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentComponent } from './apartment/apartment.component';
import { BillingComponent } from './billing/billing.component';
import { ContainerComponent } from './container/container.component';
import { MemberComponent } from './member/member.component';
import { OviewComponent } from './oview/oview.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'landlord'
  },
  {
    path: 'landlord',
    component: ContainerComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'oview' },
      { path: 'oview', component: OviewComponent },
      { path: 'member', component: MemberComponent },
      { path: 'apartment', component: ApartmentComponent },
      { path: 'billing', component: BillingComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandlordRoutingModule { }
