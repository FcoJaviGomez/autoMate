import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logged: boolean;

  constructor(public router: Router, public usuarioService: UsuarioService) {
    console.log(this.usuarioService.logged)
  }

  iniciarSesion(email: HTMLInputElement, contrasenya: HTMLInputElement) {

    let usuario = new Usuario(null, null, null, email.value, contrasenya.value, null, null, null, null)
    if (this.validar(usuario)) {
      this.usuarioService.postLogin(usuario).subscribe((data: Usuario[]) => {
        console.log(data);

        if (data.length === 0) {
          console.log("Datos no validos");
        }
        else {
          console.log("Datos correctos");
          this.router.navigate(['/home2']);
          this.usuarioService.logged = true;
          this.usuarioService.userLogged = true
          this.usuarioService.usuario = data[0]
          console.log(this.usuarioService.logged)
          console.log(this.usuarioService.userLogged);
          console.log(this.usuarioService.usuario);
        }
      })
    }
    else {
      console.log("Faltan campos por rellenar");

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
