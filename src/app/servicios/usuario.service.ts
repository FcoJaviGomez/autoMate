import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public logged: boolean

  public iconoPerfil: boolean

  public iconoLlave: boolean

  constructor() {
    this.logged = false;
    this.iconoPerfil = false
    this.iconoLlave = false
  }
}
