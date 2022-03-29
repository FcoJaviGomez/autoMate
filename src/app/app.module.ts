import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KilometrajeComponent } from './pages/kilometraje/kilometraje.component';
import { MediaKilometrajeComponent } from './component/media-kilometraje/media-kilometraje.component';
import { LoginComponent } from './component/login/login.component';
import { PaginaLoginComponent } from './pages/pagina-login/pagina-login.component';
import { Home1Component } from './pages/home1/home1.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { RecuperacionComponent } from './component/recuperacion/recuperacion.component';
import { PaginaRecuperacionComponent } from './pages/pagina-recuperacion/pagina-recuperacion.component';
import { PaginaRegistroComponent } from './pages/pagina-registro/pagina-registro.component';
import { RegistroComponent } from './component/registro/registro.component';
import { Home2Component } from './pages/home2/home2.component';
import { PaginaMantenimientoComponent } from './pages/pagina-mantenimiento/pagina-mantenimiento.component';
import { PaginaPerfilComponent } from './pages/pagina-perfil/pagina-perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    KilometrajeComponent,
    MediaKilometrajeComponent,
    LoginComponent,
    PaginaLoginComponent,
    Home1Component,
    HeaderComponent,
    FooterComponent,
    RecuperacionComponent,
    PaginaRecuperacionComponent,
    PaginaRegistroComponent,
    RegistroComponent,
    Home2Component,
    PaginaMantenimientoComponent,
    PaginaPerfilComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
