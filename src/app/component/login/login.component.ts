import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logged: boolean;

  constructor(public router: Router, public usuarioService: UsuarioService, private toastr: ToastrService) {
    console.log(this.usuarioService.logged)
  }

  iniciarSesion(email: HTMLInputElement, contrasenya: HTMLInputElement) {

    let usuario = new Usuario(null, null, null, email.value, contrasenya.value, null, null, null, null, null)
    if (this.validar(usuario)) {
      this.usuarioService.postLogin(usuario).subscribe((data: Usuario[]) => {
        console.log(data);

        if (data.length === 0) {
          this.toastr.warning('', 'Datos no validos', {
          });
        }
        else {
          if (data[0].first_log === 1) {
            this.router.navigate(['/pagina-kilometraje']);
            this.usuarioService.logged = true;
            this.usuarioService.userLogged = true
            this.usuarioService.usuario = data[0]
          }
          else {
            this.router.navigate(['/home2']);
            this.usuarioService.logged = true;
            this.usuarioService.userLogged = true
            this.usuarioService.usuario = data[0]
            console.log(this.usuarioService.usuario.first_log)
          }
        }
      })
    }
    else {
      this.toastr.warning('', 'Datos no validos', {
      });
    }
  }

  validar(user: Usuario) {
    if (user.email == "" || user.password == "") {
      return false
    }
    return true
  }


  ngOnInit(): void {
  }

}
