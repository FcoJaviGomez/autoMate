import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contrasena } from '../models/contrasena';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = "https://automate01.fly.dev/"

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

  putPassword(contrasena: Contrasena) {
    return this.http.put(this.url + "/usuario/password", contrasena)
  }

}
