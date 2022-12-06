import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandlordRoutingModule } from './landlord-routing.module';
import { FlexComponent } from './flex/flex.component';
import { ContainerComponent } from './container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OviewComponent } from './oview/oview.component';
import { MemberComponent } from './member/member.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { BillingComponent } from './billing/billing.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    FlexComponent,
    ContainerComponent,
    NavbarComponent,
    OviewComponent,
    MemberComponent,
    ApartmentComponent,
    BillingComponent,
    InvoiceComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    LandlordRoutingModule
  ]
})
export class LandlordModule { }
