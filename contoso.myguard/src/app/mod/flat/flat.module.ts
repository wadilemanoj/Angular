import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlatRoutingModule } from './flat-routing.module';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    FlatRoutingModule
  ],
  exports:[
    DetailComponent
  ]
})
export class FlatModule { }
