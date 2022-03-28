import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { PaginaLoginComponent } from './pages/pagina-login/pagina-login.component';
import { Home1Component } from './pages/home1/home1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaLoginComponent,
    Home1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
