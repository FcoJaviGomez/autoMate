import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-media-kilometraje',
  templateUrl: './media-kilometraje.component.html',
  styleUrls: ['./media-kilometraje.component.css']
})
export class MediaKilometrajeComponent implements OnInit {

  public usuarioModificado: Usuario

  constructor(private usuarioService: UsuarioService, private router: Router, private toastr: ToastrService) {
    this.usuarioModificado = this.usuarioService.usuario
    console.log(this.usuarioModificado);

    console.log(this.usuarioService.usuario)
  }

  onSubmit(form: NgForm) {

    console.log(form)

    if (this.usuarioModificado.kilometers_car === null) {
      this.usuarioModificado.kilometers_car = this.usuarioService.usuario.kilometers_car
    }

    if (this.usuarioModificado.year_car === null) {
      this.usuarioModificado.year_car = this.usuarioService.usuario.year_car
    }

    this.usuarioService.putUsuario(this.usuarioModificado).subscribe((data) => {

      if (this.usuarioModificado.kilometers_car !== null) {
        this.usuarioService.usuario.kilometers_car = this.usuarioModificado.kilometers_car
      }

      if (this.usuarioModificado.year_car !== null) {
        this.usuarioService.usuario.year_car = this.usuarioModificado.year_car
      }

      if (this.usuarioModificado.first_log === 1) {
        this.usuarioService.usuario.first_log = 0
      }
    })
    if (this.usuarioService.usuario.first_log === 1) {
      this.router.navigate(['/home2'])
      this.toastr.success('', 'Datos del coche añadidos', {
      });
    }
    if (this.usuarioService.usuario.first_log === 0) {
      this.toastr.success('', 'Datos del coche modificados', {
      });
    }
  }
  //   {


  //   console.log(this.usuarioModificado)

  //   this.usuarioService.putUsuario(this.usuarioModificado).subscribe((data: Usuario) => {
  //     console.log(data);
  //     this.usuarioService.usuario = data;
  //     // console.log(this.usuario);

  //     // this.usuarioService.usuario.year_car = Number(año.value)
  //     // this.usuarioService.usuario.kilometers_car = Number(kilometros.value)
  //   })
  //   if (this.usuarioService.usuario.first_log === 1) {
  //     this.router.navigate(['/home2'])
  //   }
  // }
  ngOnInit(): void {
  }

}
