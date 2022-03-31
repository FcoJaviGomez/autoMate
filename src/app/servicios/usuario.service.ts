import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public logged: boolean

  constructor() { 

    this.logged = false;

  }
}
