import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KilometrajeComponent } from './pages/kilometraje/kilometraje.component';
import { Home1Component } from './pages/home1/home1.component';
import { PaginaLoginComponent } from './pages/pagina-login/pagina-login.component';
import { PaginaRegistroComponent } from './pages/pagina-registro/pagina-registro.component';

const routes: Routes = [
  { path: "", component: Home1Component},
  { path: "pagina-login", component: PaginaLoginComponent },
  { path: "pagina-registro", component: PaginaRegistroComponent },
  { path:"kilometraje", component: KilometrajeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
