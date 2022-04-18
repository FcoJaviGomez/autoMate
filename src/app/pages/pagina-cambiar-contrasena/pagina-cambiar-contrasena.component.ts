import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contrasena } from 'src/app/models/contrasena';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-pagina-cambiar-contrasena',
  templateUrl: './pagina-cambiar-contrasena.component.html',
  styleUrls: ['./pagina-cambiar-contrasena.component.css']
})
export class PaginaCambiarContrasenaComponent implements OnInit {

  public myForm: Contrasena

  public validacion: any

  constructor(private usuarioService: UsuarioService, private toastr: ToastrService,
    private router: Router) {
    this.myForm = new Contrasena(this.usuarioService.usuario.id_user, "", "", "")
  }

  onSubmit(form: NgForm) {

    console.log("entra")
    if (this.validar(this.myForm)) {
      if (this.myForm.contrasenaNueva === this.myForm.contrasenaRepite) {
        this.usuarioService.putPassword(this.myForm).subscribe((data) => {
          console.log("cambios api")
          console.log(data)
          this.validacion = data
          if (this.validacion === true) {
            this.toastr.success('', 'Contraseña modificada correctamente', {
            });
            this.router.navigate(['/pagina-mis-datos'])
          }
        })
      }
    }
  }

  validar(usuario: Contrasena) {
    if (usuario.contrasena == "" || usuario.contrasenaNueva == "" || usuario.contrasenaRepite == "") {
      return false
    }
    return true
  }

  ngOnInit(): void {
  }

}


