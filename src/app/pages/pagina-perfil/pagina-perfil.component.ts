import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-pagina-perfil',
  templateUrl: './pagina-perfil.component.html',
  styleUrls: ['./pagina-perfil.component.css']
})
export class PaginaPerfilComponent implements OnInit {

  constructor(public usuario: UsuarioService, public router: Router) { }

  cerrarSesion() {
    this.usuario.iconoPerfil = false
    this.usuario.logged = false;
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }

}
