import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KilometrajeComponent } from './page/kilometraje/kilometraje.component';
import { MediaKilometrajeComponent } from './component/media-kilometraje/media-kilometraje.component';

@NgModule({
  declarations: [
    AppComponent,
    KilometrajeComponent,
    MediaKilometrajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
