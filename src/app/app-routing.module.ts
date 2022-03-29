import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KilometrajeComponent } from './pages/kilometraje/kilometraje.component';
import { Home1Component } from './pages/home1/home1.component';


const routes: Routes = [
  {path:"kilometraje", component: KilometrajeComponent},
  {path: "", component: Home1Component}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
