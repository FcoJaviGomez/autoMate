import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public nuevoUsuario: Usuario;

  public password1: string = ""

  constructor(public router: Router, private miUsuarioServicio: UsuarioService, private toastr: ToastrService) {
    this.nuevoUsuario = new Usuario(0, "", "", "", "", null, null, "", "", null)
    console.log(this.password1);
    console.log(this.nuevoUsuario);


  }
  registrarse() {
    console.log(this.nuevoUsuario);

    if (this.validar(this.nuevoUsuario)) {
      if (this.nuevoUsuario.password === this.password1) {
        console.log("hola");
        this.miUsuarioServicio.postRegister(this.nuevoUsuario).subscribe(function (data) {
          console.log(data);
        })
        this.router.navigate(['/pagina-login'])
        this.toastr.success('', 'Cuenta creada correctamente', {
        });
      }
      else {
        console.log("contraseña no coincide");
      }
    }
    else {
      console.log("faltan campos por rellenar")
    }
  }

  validar(usuario: Usuario) {
    if (usuario.name == "" || usuario.last_name == "" || usuario.email == "" || usuario.password == "") {
      return false
    }
    return true
  }

  ngOnInit(): void {
  }

}
