import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KilometrajeComponent } from './pages/kilometraje/kilometraje.component';
import { Home1Component } from './pages/home1/home1.component';
import { PaginaAgregarMantenimientoComponent } from './pages/pagina-agregar-mantenimiento/pagina-agregar-mantenimiento.component';
import { PaginaLoginComponent } from './pages/pagina-login/pagina-login.component';
import { PaginaRegistroComponent } from './pages/pagina-registro/pagina-registro.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { PaginaMantenimientoComponent } from './pages/pagina-mantenimiento/pagina-mantenimiento.component';
import { PaginaRecuperacionComponent } from './pages/pagina-recuperacion/pagina-recuperacion.component';
import { PaginaPerfilComponent } from './pages/pagina-perfil/pagina-perfil.component';
import { PaginaMisDatosComponent } from './pages/pagina-mis-datos/pagina-mis-datos.component';
import { InfoAppComponent } from './pages/info-app/info-app.component';
import { DetalleMantenimientoComponent } from './pages/detalle-mantenimiento/detalle-mantenimiento.component';
import { Home2Component } from './pages/home2/home2.component';
import { PaginaSobreNosotrosComponent } from './pages/pagina-sobre-nosotros/pagina-sobre-nosotros.component';
import { DetalleHistorialComponent } from './pages/detalle-historial/detalle-historial.component';

const routes: Routes = [
  { path: "", component: Home1Component },
  { path: "pagina-login", component: PaginaLoginComponent },
  { path: "pagina-registro", component: PaginaRegistroComponent },
  { path: "kilometraje", component: KilometrajeComponent },
  { path: "historial", component: HistorialComponent },
  { path: "mantenimiento", component: PaginaMantenimientoComponent },
  { path: "pagina-recuperar", component: PaginaRecuperacionComponent },
  { path: "pagina-perfil", component: PaginaPerfilComponent },
  { path: "pagina-mis-datos", component: PaginaMisDatosComponent },
  { path: "info-app", component: InfoAppComponent },
  { path: "detalle-historial", component: DetalleHistorialComponent },
  { path: "detalle-mantenimiento", component: DetalleMantenimientoComponent },
  { path: "home-logueado", component: Home2Component },
  { path: "home2", component: Home2Component },
  { path: "pagina-agregar-mantenimiento", component: PaginaAgregarMantenimientoComponent },
  { path: "pagina-sobre-nosotros", component: PaginaSobreNosotrosComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
