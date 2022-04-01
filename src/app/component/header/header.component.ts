import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // public icono: boolean
  constructor(public usuario: UsuarioService) {
    // this.icono = this.usuario.iconoPerfil
  }

  pulsarBoton() {
    console.log(this.usuario.iconoPerfil);
    this.usuario.iconoPerfil = true
    this.usuario.iconoLlave = false
    console.log(this.usuario.iconoPerfil);

  }

  ngOnInit(): void {
  }

}
