import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { ToolbarComponent } from './core/layout/toolbar/toolbar.component';
import { MaincontainerComponent } from './core/layout/maincontainer/maincontainer.component';
import { WrapperComponent } from './core/layout/wrapper/wrapper.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HomeModule } from './mod/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    MaincontainerComponent,
    WrapperComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
