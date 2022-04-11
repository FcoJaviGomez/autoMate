import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = "https://my-api-automate.herokuapp.com"
  // private url = "http://localhost:3000"

  public userLogged: boolean

  public usuario: Usuario

  public logged: boolean

  public iconoPerfil: boolean

  public iconoLlave: boolean

  constructor(private http: HttpClient) {
    this.userLogged = false
    this.logged = false;
    this.iconoPerfil = false
    this.iconoLlave = false
  }

  postRegister(usuario: Usuario) {
    return this.http.post(this.url + "/registro", usuario)
  }
  postLogin(usuario: Usuario) {
    return this.http.post(this.url + "/login", usuario)
  }
  putUsuario(usuario: Usuario) {
    return this.http.put(this.url + "/usuario", usuario)
  }
}
