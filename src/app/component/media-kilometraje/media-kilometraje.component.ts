import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-media-kilometraje',
  templateUrl: './media-kilometraje.component.html',
  styleUrls: ['./media-kilometraje.component.css']
})
export class MediaKilometrajeComponent implements OnInit {

  public usuario: Usuario

  constructor(public usuarioService: UsuarioService, private router: Router) {
    this.usuario = this.usuarioService.usuario
    console.log(this.usuario);
    console.log(this.usuarioService.usuario)
  }
  modificar(kilometros: HTMLInputElement, año: HTMLInputElement) {
    this.usuario = new Usuario(this.usuarioService.usuario.id_user, this.usuarioService.usuario.name, this.usuarioService.usuario.last_name, this.usuarioService.usuario.email, this.usuarioService.usuario.password, Number(kilometros.value), Number(año.value), this.usuarioService.usuario.provisional_password, this.usuarioService.usuario.provisional_date, 0)
    console.log(this.usuario)

    this.usuarioService.putUsuario(this.usuario).subscribe((data: Usuario) => {
      console.log(data);
      this.usuario = data;
      this.usuario.year_car = Number(año.value)
      this.usuario.kilometers_car = Number(kilometros.value)
    })
    if (this.usuarioService.usuario.first_log === 1) {
      this.router.navigate(['/home2'])
    }
  }
  ngOnInit(): void {
  }

}
