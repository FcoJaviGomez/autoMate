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

  public usuario: Usuario

  public validacion: any = ["", ""]

  constructor(public router: Router, public usuarioService: UsuarioService, private toastr: ToastrService) {
    console.log(this.usuarioService.logged)
    this.usuario = new Usuario(0, "", "", "", "", null, null, "", "", null)
  }

  iniciarSesion() {

    if (this.validar(this.usuario)) {
      this.usuarioService.postLogin(this.usuario).subscribe((data: Usuario[]) => {
        console.log(data);
        this.validacion = data

        if (data.length === 0) {
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
