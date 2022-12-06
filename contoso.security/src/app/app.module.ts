import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { NavComponent } from './core/layout/nav/nav.component';
import { WrapperComponent } from './core/layout/wrapper/wrapper.component';
import { TopbarComponent } from './core/layout/topbar/topbar.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { ContentComponent } from './core/layout/content/content.component';
import { FooterComponent } from './core/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WrapperComponent,
    TopbarComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
