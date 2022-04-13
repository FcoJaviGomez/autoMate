import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contrasena } from 'src/app/models/contrasena';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-pagina-cambiar-contrasena',
  templateUrl: './pagina-cambiar-contrasena.component.html',
  styleUrls: ['./pagina-cambiar-contrasena.component.css']
})
export class PaginaCambiarContrasenaComponent implements OnInit {
  
  public contrasena: Contrasena

  constructor()
  {
    this.contrasena = new Contrasena
  }

  onSubmit(form:NgForm)
  {
    console.log("hola olga")
    console.log(form.value)
    console.log(this.contrasena);
  }

  ngOnInit(): void {
  }

}


