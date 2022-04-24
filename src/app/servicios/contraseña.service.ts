import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class ContraseñaService {

  // private url = "https://my-api-automate.herokuapp.com"

  private url = "https://app-api-auto-mate.herokuapp.com"

  // private url = "http://localhost:3000"


  constructor(private http: HttpClient) { }

  restoreContrasena(contrasena: Usuario): Observable<Object> {

    return this.http.put(this.url + '/recuperacion', contrasena)

  }

}
