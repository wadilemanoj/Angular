import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandlordRoutingModule } from './landlord-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberComponent } from './member/member.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MemberComponent
  ],
  imports: [
    CommonModule,
    LandlordRoutingModule
  ]
})
export class LandlordModule { }
