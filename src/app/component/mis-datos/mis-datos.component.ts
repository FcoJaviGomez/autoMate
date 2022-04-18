import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';



@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})

export class MisDatosComponent implements OnInit {

  public usuario: Usuario

  constructor(public usuarioService: UsuarioService, private toastr: ToastrService) {
    this.usuario = { ...this.usuarioService.usuario }
    console.log("aqui1", this.usuario);
    console.log("service1", this.usuarioService)
  }

  onSubmit(form: NgForm) {

    console.log(form)


    if (this.usuario.name == '') {
      this.usuario.name = this.usuarioService.usuario.name
    }

    if (this.usuario.last_name == '') {
      this.usuario.last_name = this.usuarioService.usuario.last_name
    }

    if (this.usuario.email == '') {
      this.usuario.email = this.usuarioService.usuario.email
    }

    this.usuarioService.putUsuario(this.usuario).subscribe((data) => {

      if (this.usuario.name !== '') {
        this.usuarioService.usuario.name = this.usuario.name
      }

      if (this.usuario.last_name !== '') {
        this.usuarioService.usuario.last_name = this.usuario.last_name
      }

      if (this.usuario.email !== '') {
        this.usuarioService.usuario.email = this.usuario.email
      }
    })
    this.toastr.success('', 'Datos modificados correctamente', {
    });
  }



  ngOnInit(): void {
  }
}