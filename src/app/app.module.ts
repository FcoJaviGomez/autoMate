import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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

import { MisDatosComponent } from './component/mis-datos/mis-datos.component';
import { PaginaMisDatosComponent } from './pages/pagina-mis-datos/pagina-mis-datos.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { InfoAppComponent } from './pages/info-app/info-app.component';
import { DetalleMantenimientoComponent } from './pages/detalle-mantenimiento/detalle-mantenimiento.component';

import { PaginaMisGastosComponent } from './pages/pagina-mis-gastos/pagina-mis-gastos.component';

import { PaginaSobreNosotrosComponent } from './pages/pagina-sobre-nosotros/pagina-sobre-nosotros.component';
import { AgregarMantenimientoComponent } from './component/agregar-mantenimiento/agregar-mantenimiento.component';
import { PaginaAgregarMantenimientoComponent } from './pages/pagina-agregar-mantenimiento/pagina-agregar-mantenimiento.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DetalleHistorialComponent } from './pages/detalle-historial/detalle-historial.component';
import { FormsModule } from '@angular/forms';
import { PaginaCambiarContrasenaComponent } from './pages/pagina-cambiar-contrasena/pagina-cambiar-contrasena.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ToastrModule } from 'ngx-toastr';
import { NgChartsModule } from 'ng2-charts';
import { MisGastosGraficaComponent } from './pages/mis-gastos-grafica/mis-gastos-grafica.component';


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
    MisDatosComponent,
    PaginaMisDatosComponent,
    HistorialComponent,
    InfoAppComponent,
    DetalleMantenimientoComponent,
    PaginaSobreNosotrosComponent,
    AgregarMantenimientoComponent,
    PaginaAgregarMantenimientoComponent,
    PaginaMisGastosComponent,
    DetalleHistorialComponent,
    PaginaCambiarContrasenaComponent,
    MisGastosGraficaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true,
      positionClass: "toast-top-center",
    }),
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
