import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./mod/home/home.module').then(m => m.HomeModule)
  },  
  {
    path: '',
    loadChildren: () => import('./mod/landlord/landlord.module').then(m => m.LandlordModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
