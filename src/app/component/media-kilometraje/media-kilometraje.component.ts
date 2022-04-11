import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-media-kilometraje',
  templateUrl: './media-kilometraje.component.html',
  styleUrls: ['./media-kilometraje.component.css']
})
export class MediaKilometrajeComponent implements OnInit {

  public usuario: Usuario

  constructor(public usuarioService: UsuarioService) 
  {
    this.usuario = this.usuarioService.usuario
    console.log(this.usuario);
    console.log(this.usuarioService.usuario)
  }
 modificar(kilometros:number, año:number)
 {
   this.usuario = new Usuario(this.usuario.id_user, this.usuario.name, this.usuario.last_name, this.usuario.email, this.usuario.password, kilometros, año, this.usuario.provisional_password, this.usuario.provisional_date)
   console.log(this.usuario)
   this.usuarioService.putUsuario(this.usuario).subscribe((data:Usuario) =>
   {
     console.log(data);
     this.usuario = data;
     this.usuario.year_car  = año
     this.usuario.kilometers_car = kilometros

     console.log(this.usuario)
   })
 }
  ngOnInit(): void {
  }

}
