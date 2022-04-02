import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor(public usuario: UsuarioService) {
  }

  botonHome() {
    this.usuario.iconoPerfil = false
    this.usuario.iconoLlave = false
  }

  botonLlave() {
    this.usuario.iconoLlave = true
    this.usuario.iconoPerfil = false
  }

  botonAgregar() {
    this.usuario.iconoPerfil = false
    this.usuario.iconoLlave = false
  }

  ngOnInit(): void {
  }

}
