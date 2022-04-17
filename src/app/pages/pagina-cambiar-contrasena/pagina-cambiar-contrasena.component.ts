import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contrasena } from 'src/app/models/contrasena';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-pagina-cambiar-contrasena',
  templateUrl: './pagina-cambiar-contrasena.component.html',
  styleUrls: ['./pagina-cambiar-contrasena.component.css']
})
export class PaginaCambiarContrasenaComponent implements OnInit {
  
  public myForm: Contrasena

  constructor(private usuarioService: UsuarioService)
  {
    this.myForm = new Contrasena(this.usuarioService.usuario.id_user,"","","")
  }

  onSubmit(form:NgForm)
  {
   
    console.log("entra")

    this.usuarioService.putPassword(this.myForm).subscribe((data)=>{
      console.log("cambios api")
      console.log(data)

    })
   
  }

  ngOnInit(): void {
  }

}


