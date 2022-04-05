import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public nuevoUsuario: Usuario;

  constructor(public router: Router, private miUsuarioServicio: UsuarioService) { }

  registrarse(nombre: HTMLInputElement, apellido: HTMLInputElement, email: HTMLInputElement, 
            contraseña: HTMLInputElement, contraseña1: HTMLInputElement) {

              let usuario = new Usuario (0, nombre.value, apellido.value, email.value, contraseña.value,
                                        0, 0, null, null)

              if (this.validar(usuario)) {
                if (contraseña.value === contraseña1.value) {
                  console.log("hola");
                  this.miUsuarioServicio.postRegister(usuario).subscribe(function (data) {
                    console.log(data);
                  })
                  this.router.navigate(['/pagina-login'])
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
